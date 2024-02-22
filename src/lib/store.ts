import { derived, readable, writable } from "svelte/store";

export interface Todo{
  id:string;
  seen:boolean;
  value:string|null;
  createdAt?:string;
  updatedAt?:string;
}

export const isDark = writable(false);

export const TodoItems = writable<Todo[]>([]);

export const active = writable(0);

export const completed = writable(0);





