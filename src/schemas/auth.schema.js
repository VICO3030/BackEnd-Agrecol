import { z } from 'zod';

export const registerSchema = z.object({
    usuario: z.string({
    required_error: "Username es requerido!"
  })
  .min(5, {
    message: "El usuario debe tener mínimo 5 caracteres"
  })
  .regex(/\d/, {
    message: "El usuario debe contener al menos un número"
  }),
  email: z.string({
    required_error: "Email es requerido!"
  }).email({
    message: "Email inválido"
  }),
  password: z.string({
    required_error: "Password es requerido!"
  }).min(6, {
    message: "Password debe tener mínimo 6 caracteres"
  })
});

export const loginSchema = z.object({
  usuario: z.string({
    required_error: "Username es requerido!"
  })
  .min(5, {
    message: "El usuario debe tener mínimo 5 caracteres"
  })
  .regex(/\d/, {
    message: "El usuario debe contener al menos un número"
  }),
  password: z.string({
    required_error: "Password es requerido!"
  }).min(6, {
    message: "Password debe tener mínimo 6 caracteres"
  })
});
