import { z } from 'zod'
export enum TodoStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export interface ITodoPayload {
  title: string;
  content: string;
}

export const todoSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.number(),
  status: z.nativeEnum(TodoStatus)
})

export type ITodo = z.infer<typeof todoSchema>;

export const todoPayloadSchema = z.object({
  title: z.string(),
  content: z.string()
})
