//// [tests/cases/compiler/nestedRecursiveArraysOrObjectsError01.ts] ////

//// [nestedRecursiveArraysOrObjectsError01.ts]
type Style = StyleBase | StyleArray;
interface StyleArray extends Array<Style> {}
interface StyleBase {
    foo: string;
}

const blah: Style = [
    [[{
        foo: 'asdf',
        jj: 1 // intentional error
    }]]
];



//// [nestedRecursiveArraysOrObjectsError01.js]
const blah = [
    [[{
                foo: 'asdf',
                jj: 1 // intentional error
            }]]
];
