export const FILTER_OPTIONS = {
  status: ["all", "healthy", "deploying", "blocked"],
  environment: ["all", "production", "staging", "development"],
  risk: ["all", "low", "medium", "high"]
};

export function getVisibleDeployments(
  releases,
  { status = "all", environment = "all", risk = "all" } = {}
) {
  return releases.filter((release) => {
    const matchesStatus = status === "all" || release.status === status;
    const matchesEnvironment = environment === "all" || release.environment === environment;
    const matchesRisk = risk === "all" || release.risk === risk;
    return matchesStatus && matchesEnvironment && matchesRisk;
  });
}
