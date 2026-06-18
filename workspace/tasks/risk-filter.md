# Risk Filter Changeset

Add a risk-level filter to the existing Release Control dashboard.

Stay focused:

- Update only `js/filters.js` and a new `tests/risk-filter.test.js`.
- Add a `risk` option to `getVisibleDeployments`.
- Add risk values to `FILTER_OPTIONS`; the generic UI will render the control.
- Preserve the existing status filter.
- Add tests for risk-only filtering.
- Do not add environment filtering or accessibility changes.
- Run `npm test`.
- Commit the completed changeset with message `Add risk release filter`.
