import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const css = await readFile(new URL("./css/index.css", import.meta.url), "utf8");

for (const id of ["filter-controls", "release-grid"]) {
  assert.match(html, new RegExp(`id="${id}"`), `${id} is required`);
}
assert.match(html, /aria-live="polite"/, "result count must be announced");
assert.match(html, /aria-label="Filter active releases"/, "toolbar needs an accessible name");
assert.match(css, /:focus-visible/, "visible focus style is required");
assert.match(css, /@media/, "responsive styles are required");

console.log("Integrated static verification passed.");
