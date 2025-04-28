import * as z from "zod";

export const envSchema = z.object({
  APP_HOSTNAME: z.string().default("turbo-ui-web"),
  APP_DOMAIN: z.string().default("luckgrid.app"),
  APP_PRODUCTION_HOSTNAME: z.string().default("www").optional(),
  APP_PRODUCTION_DOMAIN: z.string().default("luckgrid-turbo-ui.com").optional(),
  AIRTABLE_BASE_ID: z.string().default("appqEYgJYeJORBpAy"),
  AIRTABLE_NEWSLETTER_SUBS_TABLE_ID: z.string().default("tblvy8WQzDUNNvJTz"),
  AIRTABLE_SECRET_API_TOKEN: z.string(),
  DOTENV_PUBLIC_KEY: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
