export const FILTER_OPTIONS = {
  status: ["all", "healthy", "deploying", "blocked"]
};

export function getVisibleDeployments(releases, { status = "all" } = {}) {
  return releases.filter((release) => status === "all" || release.status === status);
}
