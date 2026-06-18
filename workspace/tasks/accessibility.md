# Accessible Filter Toolbar Changeset

Improve the accessibility of the existing Release Control dashboard without adding filters.

Stay focused:

- Update only `index.html`, `css/index.css`, and `js/app.js`.
- Give the release section and filter toolbar clear accessible names.
- Make result-count changes announce through a polite live region.
- Add a strong visible focus style.
- Preserve existing status-filter behavior.
- Do not edit `js/filters.js` or `tests/filters.test.js`.
- Run `npm test`.
- Commit the completed changeset with message `Improve release filter accessibility`.
