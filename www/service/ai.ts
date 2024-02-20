export const AI_SERVICE_URL =
  process.env.NODE_ENV === 'development' ? process.env.AI_SERVICE_DEV : process.env.AI_SERVICE_PROD
