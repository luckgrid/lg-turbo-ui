import * as z from "zod";

export const envSchema = z.object({
  APP_HOSTNAME: z.string().default("turbo-ui-web"),
  APP_DOMAIN: z.string().default("luckgrid.app"),
  APP_PRODUCTION_HOSTNAME: z.string().default("wwww").optional(),
  APP_PRODUCTION_DOMAIN: z.string().default("luckgrid-turbo-ui.com").optional(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().default(3000),
  VERCEL_ENV: z.enum(["development", "production", "test"]).optional(),
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  VERCEL_URL: z.string().optional(),
});

export const env = envSchema.parse(process.env);
