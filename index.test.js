const { push, pop, unshift } = require("./index.js");

describe("push", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });
});

describe("pop", () => {
 it("should remove the last element of an array", () => {
    const arr = ["a", "b", "c", "d", "e"];
    expect(pop(arr)).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[4]).toBe(undefined);
  });
});

// describe("shift", () => {
//   it("should remove the first element of an array", () => {
//      const arr = ["a", "b", "c", "d", "e"];
//      expect(shift(arr)).toBe("a");
//      expect(arr.length).toBe(4);
//      expect(arr[0]).toBe("b");
//    });
//  });

 describe("unshift", () => {
  it("should add a new first element to an array", () => {
     const arr = ["a", "b", "c", "d", "e"];
     expect(unshift(arr, "x")).toBe("x");
     expect(arr.length).toBe(6);
     expect(arr[0]).toBe("x");
   });
 });