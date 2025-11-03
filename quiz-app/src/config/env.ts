import * as z from 'zod';

const urlSchema = z.string().refine((val) => {
  try {
    const url = new URL(val);
    return url.protocol === 'https:' || 'http:';
  } catch {
    return false;
  }
});

const createEnv = () => {
  const envSchema = z.object({
    QUIZ_BASE_URL: urlSchema,
  });

  const envVars = {
    QUIZ_BASE_URL: import.meta.env.VITE_PUBLIC_QUIZ_URL,
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
