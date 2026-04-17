# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

Summary:
It shows the basics of types. It is important that when you assign a type to a variable, you will be consistent when substituting the variable with a value. If it is a string, it should remain a string. If it is an integer, it should remain an integer. We should be mindful of assigning types to ensure the smooth flow of our codebase and logic.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

Summary:
In JavaScript, we can check the type of a variable using the `typeof` operator. This is useful for debugging and ensuring that variables hold the expected types during runtime. In my experimentation, it had identified a string, a boolean, and a number.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

Summary:
The `any` type in TypeScript allows a variable to hold any type of value, providing flexibility. In the example, we can assign a number to `age`, then reassign it to a string, a boolean, an object, and an array without any type errors.

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

Summary:
This demonstrates how to define arrays that can hold multiple types using union types, how to create objects with specific property types, and how to use the `Record` type for flexible key-value pairs. This highlights the importance of defining types to enhance code maintainability.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

Summary:
It showed how to define an enum to group a set of named values together, and how to use it as a type for variables. We give the values a name in this one instead of just putting numbers or plain strings.

## 06-alternative-to-enum.ts
This module explores using Literal Union Types as a lightweight substitute for Enums. By defining allowed values directly as a union of strings or numbers, you can enforce strict constraints without the overhead of additional Enum structures.

## 07-custom-type-role.ts
This section demonstrates how Type Aliases promote code reusability. By centralizing a specific type definition (like Role), you can consistently apply it to variables, object structures, and function arguments throughout your application.

## 08-functions.ts
A guide to Type Annotations for Functions, covering explicit return types and TypeScript's specialized types. It highlights void for functions that perform actions without returning data, and never for those that terminate execution or throw errors.

## 09-special-types.ts
An overview of handling Nullability. It shows how to use null and undefined alongside Union Types to safely represent variables that may either contain a specific value or be empty.

## 10-form.html and 10-type-narrowing.ts
Focuses on DOM Interaction and type safety. It illustrates how TypeScript protects against runtime errors by typing methods like getElementById as HTMLElement | null, forcing the developer to handle cases where an element might be missing.

## 11-optional.ts
Introduces Optional Properties using the ? syntax. This allows for more dynamic and flexible object interfaces where certain fields are not strictly required, preventing unnecessary type errors for incomplete data structures.