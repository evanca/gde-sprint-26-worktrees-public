import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const css = await readFile(new URL("./css/index.css", import.meta.url), "utf8");

assert.match(html, /id="filter-controls"/, "filter controls are required");
assert.match(html, /id="release-grid"/, "release grid is required");
assert.match(css, /@media/, "responsive styles are required");

console.log("Static verification passed.");
