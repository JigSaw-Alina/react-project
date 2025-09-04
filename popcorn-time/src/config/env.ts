import * as z from 'zod';

const urlSchema = z.string().refine((val) => {
  try {
    const url = new URL(val);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
});

const createEnv = () => {
  const envSchema = z.object({
    OMDB_BASE_URL: urlSchema,
    OMDB_API_KEY: z.string().min(1, 'OMDb API key is required'),
    ENABLE_API_MOCKING: z
      .string()
      .refine((s) => s === 'true' || s === 'false')
      .transform((s) => s === 'true')
      .optional(),
    APP_URL: z.string().optional().default('http://localhost:3000'),
    APP_MOCK_API_PORT: z.string().optional().default('8080'),
  });

  const envVars = {
    OMDB_BASE_URL: import.meta.env.VITE_PUBLIC_OMDB_BASE_URL,
    OMDB_API_KEY: import.meta.env.VITE_PUBLIC_OMDB_API_KEY,
    ENABLE_API_MOCKING: import.meta.env.VITE_PUBLIC_ENABLE_API_MOCKING,
    APP_URL: import.meta.env.VITE_PUBLIC_URL,
    APP_MOCK_API_PORT: import.meta.env.VITE_PUBLIC_MOCK_API_PORT,
  };

  const parsedEnv = envSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    const formattedErrors = parsedEnv.error.format();
    const errorMessages = Object.entries(formattedErrors)
      .filter(([key]) => key !== '_errors') // exclude global errors
      .map(([key, value]) => {
        const messages = (value as z.ZodFormattedError<string>)._errors;
        return `- ${key}: ${messages.join(', ')}`;
      })
      .join('\n');

    throw new Error(
      `Invalid env provided. The following variables are missing or invalid:\n${errorMessages}`
    );
  }

  return parsedEnv.data ?? {};
};

export const env = createEnv();
