import { readable, writable } from 'svelte/store';
import type {ToDo} from './model';


//  lookup how to use stores with local strorage;
export const myList = writable<ToDo[]>([]);

export const unCheckedItems = writable(0);

export const all = writable(true);

export const completed = writable(false);

export const active = writable(false);

