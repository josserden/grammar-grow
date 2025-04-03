import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address.' })
    .refine((val) => val === val.trim(), {
      message: 'Email must not have leading or trailing spaces.',
    }),

  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
