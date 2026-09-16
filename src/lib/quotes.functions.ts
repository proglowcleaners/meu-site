import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string | null;
  created_at: string;
};

export const listQuoteRequests = createServerFn({ method: "POST" })
  .inputValidator((input: { password: string }) => {
    if (!input || typeof input.password !== "string") {
      throw new Error("Invalid input");
    }
    return input;
  })
  .handler(async ({ data }): Promise<QuoteRequest[]> => {
    // Fallback password, used only when no ADMIN* secret is set on the host.
    // This runs on the server. Set ADMIN_PASSWORD and the fallback is ignored.
    const DEFAULT_ADMIN_PASSWORD = "andresa@cmdigital1";

    const validPasswords = [
      ...Object.entries(process.env)
        .filter(([key, value]) => key.startsWith("ADMIN") && typeof value === "string" && value.trim().length > 0)
        .map(([, value]) => (value as string).trim()),
      DEFAULT_ADMIN_PASSWORD,
    ];

    const provided = (data.password ?? "").trim();
    if (!validPasswords.includes(provided)) {
      throw new Error("Invalid password");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("quote_requests")
      .select("id, name, email, phone, service, message, created_at")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return (rows ?? []) as QuoteRequest[];
  });

// Public submit via anon key — RLS allows insert
export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input: {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message?: string;
  }) => {
    if (!input?.name || !input?.email) throw new Error("Name and email required");
    return input;
  })
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );
    const { error } = await supabase.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      service: data.service ?? null,
      message: data.message ?? null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
