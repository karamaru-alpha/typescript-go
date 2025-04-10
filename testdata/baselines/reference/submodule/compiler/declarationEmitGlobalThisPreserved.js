//// [tests/cases/compiler/declarationEmitGlobalThisPreserved.ts] ////

//// [declarationEmitGlobalThisPreserved.ts]
// Adding this makes tooltips fail too.
// declare global {
//     namespace isNaN {
//         const prop: number;
//     }
// }

// Broken inference cases.

export const a1 = (isNaN: typeof globalThis.isNaN): typeof globalThis.isNaN => isNaN;
export const a2 = (isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN): typeof globalThis.isNaN => bar ?? isNaN;
export const a3 = (isNaN: number, bar: typeof globalThis.isNaN): typeof globalThis.isNaN => bar;
export const a4 = (isNaN: number): typeof globalThis.isNaN => globalThis.isNaN;

export const aObj = {
    a1: (isNaN: typeof globalThis.isNaN): typeof globalThis.isNaN => isNaN,
    a2: (isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN): typeof globalThis.isNaN => bar ?? isNaN,
    a3: (isNaN: number, bar: typeof globalThis.isNaN): typeof globalThis.isNaN => bar,
    a4: (isNaN: number): typeof globalThis.isNaN => globalThis.isNaN,
}

export type a4Return = ReturnType<ReturnType<typeof a4>>;
export type a4oReturn = ReturnType<ReturnType<typeof aObj['a4']>>;

export const b1 = (isNaN: typeof globalThis.isNaN) => isNaN;
export const b2 = (isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN) => bar ?? isNaN;
export const b3 = (isNaN: number, bar: typeof globalThis.isNaN) => bar;
export const b4 = (isNaN: number) => globalThis.isNaN;

export const bObj = {
    b1: (isNaN: typeof globalThis.isNaN) => isNaN,
    b2: (isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN) => bar ?? isNaN,
    b3: (isNaN: number, bar: typeof globalThis.isNaN) => bar,
    b4: (isNaN: number) => globalThis.isNaN,
}

export type b4Return = ReturnType<ReturnType<typeof b4>>;
export type b4oReturn = ReturnType<ReturnType<typeof bObj['b4']>>;

export function c1(isNaN: typeof globalThis.isNaN) { return isNaN }
export function c2(isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN) { return bar ?? isNaN }
export function c3(isNaN: number, bar: typeof globalThis.isNaN) { return bar }
export function c4(isNaN: number) { return globalThis.isNaN; }

export const cObj = {
    c1(isNaN: typeof globalThis.isNaN) { return isNaN },
    c2(isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN) { return bar ?? isNaN },
    c3(isNaN: number, bar: typeof globalThis.isNaN) { return bar },
    c4(isNaN: number) { return globalThis.isNaN; },
}

export type c4Return = ReturnType<ReturnType<typeof c4>>;
export type c4oReturn = ReturnType<ReturnType<typeof cObj['c4']>>;

export function d1() {
    const fn = (isNaN: typeof globalThis.isNaN): typeof globalThis.isNaN => isNaN;
    return function() { return fn };
}

export function d2() {
    const fn = (isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN): typeof globalThis.isNaN => bar ?? isNaN;
    return function() { return fn };
}

export function d3() {
    const fn = (isNaN: number, bar: typeof globalThis.isNaN): typeof globalThis.isNaN => bar;
    return function() { return fn };
}

export function d4() {
    const fn = (isNaN: number): typeof globalThis.isNaN => globalThis.isNaN;
    return function() { return fn };
}

export type d4Return = ReturnType<ReturnType<ReturnType<ReturnType<typeof d4>>>>;

export class A {
    method1(isNaN: typeof globalThis.isNaN) { return isNaN }
    method2(isNaN: typeof globalThis.isNaN, bar?: typeof globalThis.isNaN) { return bar ?? isNaN }
    method3(isNaN: number, bar: typeof globalThis.isNaN) { return bar }
    method4(isNaN: number) { return globalThis.isNaN; }
}

export function fromParameter(isNaN: number, bar: typeof globalThis.isNaN) {
    return function() { return { bar } };
}

// Non-inference cases.

export const explicitlyTypedVariable: (isNaN: typeof globalThis.isNaN) => typeof globalThis.isNaN = (isNaN) => isNaN;

export function explicitlyTypedFunction(isNaN: typeof globalThis.isNaN): typeof globalThis.isNaN {
    return isNaN;
};

export type AsObjectProperty = {
    isNaN: typeof globalThis.isNaN;
}

export class AsClassProperty {
    isNaN?: typeof globalThis.isNaN;
}

export type AsFunctionType = (isNaN: typeof globalThis.isNaN) => typeof globalThis.isNaN;



//// [declarationEmitGlobalThisPreserved.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsClassProperty = exports.explicitlyTypedVariable = exports.A = exports.cObj = exports.bObj = exports.b4 = exports.b3 = exports.b2 = exports.b1 = exports.aObj = exports.a4 = exports.a3 = exports.a2 = exports.a1 = void 0;
exports.c1 = c1;
exports.c2 = c2;
exports.c3 = c3;
exports.c4 = c4;
exports.d1 = d1;
exports.d2 = d2;
exports.d3 = d3;
exports.d4 = d4;
exports.fromParameter = fromParameter;
exports.explicitlyTypedFunction = explicitlyTypedFunction;
// Adding this makes tooltips fail too.
// declare global {
//     namespace isNaN {
//         const prop: number;
//     }
// }
// Broken inference cases.
const a1 = (isNaN) => isNaN;
exports.a1 = a1;
const a2 = (isNaN, bar) => bar ?? isNaN;
exports.a2 = a2;
const a3 = (isNaN, bar) => bar;
exports.a3 = a3;
const a4 = (isNaN) => globalThis.isNaN;
exports.a4 = a4;
exports.aObj = {
    a1: (isNaN) => isNaN,
    a2: (isNaN, bar) => bar ?? isNaN,
    a3: (isNaN, bar) => bar,
    a4: (isNaN) => globalThis.isNaN,
};
const b1 = (isNaN) => isNaN;
exports.b1 = b1;
const b2 = (isNaN, bar) => bar ?? isNaN;
exports.b2 = b2;
const b3 = (isNaN, bar) => bar;
exports.b3 = b3;
const b4 = (isNaN) => globalThis.isNaN;
exports.b4 = b4;
exports.bObj = {
    b1: (isNaN) => isNaN,
    b2: (isNaN, bar) => bar ?? isNaN,
    b3: (isNaN, bar) => bar,
    b4: (isNaN) => globalThis.isNaN,
};
function c1(isNaN) { return isNaN; }
function c2(isNaN, bar) { return bar ?? isNaN; }
function c3(isNaN, bar) { return bar; }
function c4(isNaN) { return globalThis.isNaN; }
exports.cObj = {
    c1(isNaN) { return isNaN; },
    c2(isNaN, bar) { return bar ?? isNaN; },
    c3(isNaN, bar) { return bar; },
    c4(isNaN) { return globalThis.isNaN; },
};
function d1() {
    const fn = (isNaN) => isNaN;
    return function () { return fn; };
}
function d2() {
    const fn = (isNaN, bar) => bar ?? isNaN;
    return function () { return fn; };
}
function d3() {
    const fn = (isNaN, bar) => bar;
    return function () { return fn; };
}
function d4() {
    const fn = (isNaN) => globalThis.isNaN;
    return function () { return fn; };
}
class A {
    method1(isNaN) { return isNaN; }
    method2(isNaN, bar) { return bar ?? isNaN; }
    method3(isNaN, bar) { return bar; }
    method4(isNaN) { return globalThis.isNaN; }
}
exports.A = A;
function fromParameter(isNaN, bar) {
    return function () { return { bar }; };
}
// Non-inference cases.
const explicitlyTypedVariable = (isNaN) => isNaN;
exports.explicitlyTypedVariable = explicitlyTypedVariable;
function explicitlyTypedFunction(isNaN) {
    return isNaN;
}
;
class AsClassProperty {
    isNaN;
}
exports.AsClassProperty = AsClassProperty;
