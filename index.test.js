const { push, pop } = require("./index.js");

describe("push", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });

  it("should remove the last element of an array", () => {
    const arr = ["a", "b", "c", "d", "e"];
    expect(pop(arr)).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[4]).toBe(undefined);
  });
});
