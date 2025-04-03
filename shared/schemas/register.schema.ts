import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters.' }),

    email: z
      .string()
      .email({ message: 'Invalid email address.' })
      .refine((val) => val === val.trim(), {
        message: 'Email must not have leading or trailing spaces.',
      }),

    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters.' })
      .max(50, { message: 'Name must be at most 50 characters.' })
      .refine((val) => val === val.trim(), {
        message: 'Name must not have leading or trailing spaces.',
      }),

    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;
