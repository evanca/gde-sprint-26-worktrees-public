import test from "node:test";
import assert from "node:assert/strict";
import { getVisibleDeployments } from "../js/filters.js";

const releases = [
  { id: "1", status: "healthy", environment: "production", risk: "low" },
  { id: "2", status: "deploying", environment: "staging", risk: "high" },
  { id: "3", status: "healthy", environment: "staging", risk: "medium" }
];

test("returns every release by default", () => {
  assert.equal(getVisibleDeployments(releases).length, 3);
});

test("filters releases by status", () => {
  assert.deepEqual(getVisibleDeployments(releases, { status: "healthy" }).map(({ id }) => id), ["1", "3"]);
});
