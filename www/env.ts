import { z } from 'zod'

const envSchema = z.object({
  AI_SERVICE_URL_DEV: z.string(),
  AI_SERVICE_URL_PROD: z.string(),
  POOL_DATABASE_URL: z.string(),
  DIRECT_DATABASE_URL: z.string(),
  PRISMA_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
