# Environment Filter Changeset

Add an environment filter to the existing Release Control dashboard.

Stay focused:

- Update only `js/filters.js` and a new `tests/environment-filter.test.js`.
- Add an `environment` option to `getVisibleDeployments`.
- Add environment values to `FILTER_OPTIONS`; the generic UI will render the control.
- Preserve the existing status filter.
- Add tests for environment-only filtering.
- Do not add risk filtering or accessibility changes.
- Run `npm test`.
- Commit the completed changeset with message `Add environment release filter`.
