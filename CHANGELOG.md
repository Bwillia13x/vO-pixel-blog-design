## ChangeLog

## [Unreleased]

### Added
- Vitest configuration with React Testing Library
- Smoke test for Home page
- `setup-next-steps.sh` now runs `pnpm test` when a test script exists
- `test:watch` npm script
- Generate RSS feed on build
- Documented feed URL and script
- Added fallback date and safe public dir

---

## [1.0.1] - 2025-06-15
### Added
- Syntax highlighting for Markdown code blocks using `rehype-prism-plus`.
- Custom Prism theme styles matching Tailwind dark mode.
- Documentation for extending languages.

### Fixed
- Avoided circular `@apply` on .token.italic causing build failure.

---

## [2025-06-15] – Added RSS feed generation
- Generate RSS feed on build
- Documented feed URL and script
- Added fallback date and safe public dir
