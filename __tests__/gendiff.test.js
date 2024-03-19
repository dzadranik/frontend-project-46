// @ts-check

import { test, expect } from "@jest/globals";
import gendiff from "../index.js";

test("gendiff", () => {
  expect(gendiff("json", "{}", "{}")).toBe("{\n}");
});
