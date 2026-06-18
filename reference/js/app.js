import { FILTER_OPTIONS, getVisibleDeployments } from "./filters.js";

const releases = await fetch("./data/releases.json").then((response) => response.json());
const filterControls = document.querySelector("#filter-controls");
const releaseGrid = document.querySelector("#release-grid");
const resultCount = document.querySelector("#result-count");

function labelFor(value) {
  return value === "all" ? "All" : value[0].toUpperCase() + value.slice(1);
}

filterControls.innerHTML = Object.entries(FILTER_OPTIONS).map(([name, options]) => `
  <label for="${name}-filter">${labelFor(name)}</label>
  <select id="${name}-filter" name="${name}">
    ${options.map((option) => `<option value="${option}">${labelFor(option)}${option === "all" ? ` ${name}${/s$/i.test(name) ? "es" : "s"}` : ""}</option>`).join("")}
  </select>
`).join("");

function render() {
  const visible = getVisibleDeployments(releases, Object.fromEntries(new FormData(filterControls)));

  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "release" : "releases"} shown`;
  releaseGrid.innerHTML = visible.length ? visible.map((release) => `
    <article class="release-card">
      <div class="card-heading">
        <span class="status status-${release.status}">${release.status}</span>
        <span class="risk">${release.risk} risk</span>
      </div>
      <h2>${release.title}</h2>
      <p class="service">${release.service}</p>
      <dl>
        <div><dt>Environment</dt><dd>${release.environment}</dd></div>
        <div><dt>Owner</dt><dd>${release.owner}</dd></div>
      </dl>
    </article>
  `).join("") : `<p class="empty-state">No releases match these filters. Try a broader selection.</p>`;
}

filterControls.addEventListener("change", render);
render();
