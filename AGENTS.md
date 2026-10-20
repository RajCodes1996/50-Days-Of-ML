### Codex Project Instructions
Scope and Workflow
- Complete only the task explicitly requested.
- Inspect the smallest relevant set of files before editing.
- Prefer the smallest correct, maintainable change.
- Follow the repository's existing architecture, naming, formatting, and conventions.
- Reuse existing code and dependencies; add dependencies only when necessary.
- Do not refactor unrelated code, scan or print the entire repository, or reread unchanged files without a reason.
- Preserve existing user changes. Do not overwrite unrelated work.
Tool Use and Efficiency
- Search for specific files or symbols instead of dumping large directories or files.
- Avoid redundant tool calls, repeated command execution, and unnecessary progress narration.
- Do not repeat an identical failing command unless something relevant has changed.
- Keep command output focused; avoid printing large logs when a targeted excerpt is enough.
- If blocked, state the specific blocker and ask only for the information needed to proceed.
Implementation and Verification
- Make focused changes and inspect the diff before finishing.
- Run the smallest relevant tests, checks, or build commands.
- If a check fails, investigate the concrete failure before retrying.
- Do not claim checks passed unless they were actually run.
- Clearly report any checks that were not run and any remaining issues.
Final Response
- Summarize what changed and why in a few bullets.
- Report tests/checks and their actual results.
- Mention important limitations or unresolved issues.
- Stop when the requested task is complete.
Project-Specific Instructions
- Add project conventions here only when they are stable and broadly useful.
- Keep one-off tasks, temporary prompts, and task-specific code out of this file; put them in the task request instead.