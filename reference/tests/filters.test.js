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

test("filters by status", () => {
  assert.deepEqual(getVisibleDeployments(releases, { status: "healthy" }).map(({ id }) => id), ["1", "3"]);
});

test("filters by environment", () => {
  assert.deepEqual(getVisibleDeployments(releases, { environment: "staging" }).map(({ id }) => id), ["2", "3"]);
});

test("filters by risk", () => {
  assert.deepEqual(getVisibleDeployments(releases, { risk: "high" }).map(({ id }) => id), ["2"]);
});

test("combines all active filters", () => {
  assert.deepEqual(
    getVisibleDeployments(releases, { status: "healthy", environment: "staging", risk: "medium" }).map(({ id }) => id),
    ["3"]
  );
});

test("returns an empty result when filters do not match", () => {
  assert.deepEqual(getVisibleDeployments(releases, { environment: "production", risk: "high" }), []);
});
