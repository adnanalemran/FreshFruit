//function  learning in ts

//normal function
function add(a: number, b: number): number {
  return a + b;
}

// use add
const sum = add(2, 3);

//Arrow function
const addArrow = (a: number, b: number): number => a + b;

//function with default parameter
function greet(name: string = "adnan"): string {
  return `Hello ${name}`;
}

//function with optional parameter
function greetOptional(name?: string): string {
  return `Hello ${name}`;
}

//function with rest parameter
function greetRest(name: string, ...restNames: string[]): string {
  return `Hello ${name} ${restNames.join(" ")}`;
}

//function with overloading
function greetOverload(name: string): string;
function greetOverload(age: number): string;
function greetOverload(name: string, age: number): string;
function greetOverload(nameOrAge: string | number, age?: number): string {
  if (typeof nameOrAge === "string") {
    return `Hello ${nameOrAge}`;
  } else if (typeof nameOrAge === "number") {
    return `Hello ${nameOrAge}`;
  } else {
    return `Hello ${nameOrAge} ${age}`;
  }
}

//function with callback
function greetCallback(name: string, callback: (name: string) => void): void {
  callback(name);
}

//function with generic
function greetGeneric<T>(name: T): T {
  return name;
}

//function with generic array
function greetGenericArray<T>(name: T[]): T[] {
  return name;
}

//function with generic object
function greetGenericObject<T>(name: T): T {
  return name;
}

//function with generic constraint
function greetGenericConstraint<T extends string>(name: T): T {
  return name;
}
