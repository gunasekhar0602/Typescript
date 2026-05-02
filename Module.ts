1. Named Imports (Most common)
 
Used when the module exports multiple things using export.
 
Module.ts
 
export const AppName = "MyApp";
 
export function add(a: number, b: number): number { return a + b;
 
}
 
Usage:
 
import { AppName, add } from "./Module";
 
 
 
2. Aliased Imports
 
You can rename imports for clarity or conflict avoidance.
 
import { add as addNumbers, AppName as NameOfApp } from "./Module";


3. Import Everything (Namespace Import)
 
If you want to import the whole module under a single object.
 
import * as Utils from "./Module";
 
 
 
console.log(Utils.add(2, 3));
 
console.log(Utils.AppName);
 
 
