import { derived, readable, writable } from "svelte/store";

export interface Todo{
  id:string;
  seen:boolean;
  value:string|null;
  createdAt?:string;
  updatedAt?:string;
}

export const isDark = writable(false);

export const TodoItems = writable<Todo[]>([{id:'0', value:"Complete online Javascript course", seen:true},
{id:'1', value:"Jog around the park 3x", seen:false},
{id:'2', value:"10 minutes meditation", seen:false},
{id:'3', value:"Read for 1 hour", seen:false},
{id:'4', value:"Pickup groceries", seen:false},
{id:'5', value:"Complete Todo app on Frontend Mentor", seen:false},
]);

export const active = writable(0);

export const completed = writable(0);





