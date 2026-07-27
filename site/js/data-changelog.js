/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.220",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.219",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Opus 5 (claude-opus-5), now the default Opus model — 1M context, fast mode at $10/$50 per Mtok"
        },
        {
          "kind": "追加",
          "text": "Added sandbox.network.strictAllowlist setting to deny non-allowlisted hosts for sandboxed commands without prompting"
        },
        {
          "kind": "追加",
          "text": "Added DirectoryAdded hook that fires after /add-dir or the SDK register_repo_root control request registers a new working directory mid-session"
        },
        {
          "kind": "追加",
          "text": "Added mcp_server_errors to the headless stream-json init event, listing --mcp-config entries skipped by config validation; terminal runs print a startup warning"
        },
        {
          "kind": "追加",
          "text": "Added the workflowSizeGuideline settings key so the advisory Dynamic workflow size guideline can be set from any settings file; the /config row is hidden while one does"
        },
        {
          "kind": "追加",
          "text": "Added nested subagent forwarding in stream-json: subagents spawned at depth-2+ now appear when --forward-subagent-text is set, keyed by their spawning Agent tool_use id"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p text output dropping the answer already produced when a turn dies on a mid-stream API error"
        },
        {
          "kind": "追加",
          "text": "Added HTTP status and error text to claude mcp list and /mcp when a server fails to connect, and a warning for MCP config values with hidden leading or trailing whitespace"
        },
        {
          "kind": "修正",
          "text": "Fixed the Fable model row showing \"Requires usage credits\" for plans that include it, when a stale cache had baked the label in"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker showing the merged Opus row as plain \"Opus\" instead of \"Opus (1M context)\""
        },
        {
          "kind": "修正",
          "text": "Fixed copy-on-select inside GNU screen printing base64 into the terminal instead of copying the selection"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients keeping a stale fast-mode status after a model switch, reconnect, or failed org check"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_GIT_BASH_PATH on Windows exiting or being used as bash when the path isn't a bash/sh binary; it's now ignored with a warning"
        },
        {
          "kind": "修正",
          "text": "Fixed Vim mode: pressing ← on an empty prompt now returns to the agent view from NORMAL mode, not just INSERT"
        },
        {
          "kind": "修正",
          "text": "Fixed screen-reader mode rewriting the entire input line on every keystroke instead of echoing only the typed character"
        },
        {
          "kind": "改善",
          "text": "Improved the \"Remote Control is only available via api.anthropic.com\" error to name the specific setting that caused it"
        },
        {
          "kind": "改善",
          "text": "Improved claude --teleport to show which repo your current checkout points at when it doesn't match the session's repo"
        },
        {
          "kind": "変更",
          "text": "Changed dynamic workflows to default to a medium size guideline (aim for fewer than 15 agents); pick another size or unrestricted with Dynamic workflow size in /config"
        },
        {
          "kind": "修正",
          "text": "Changed managed MCP allowlist/denylist ${VAR} entries to resolve from the startup environment and managed-settings env instead of settings-file env"
        },
        {
          "kind": "追加",
          "text": "Changed the /model picker to highlight only the newest model's name, so the highlight marks the new release rather than an arbitrary subset of the list"
        },
        {
          "kind": "追加",
          "text": "Added the current default workflow size to the running-workflow status line, with a pointer to /config for changing it"
        },
        {
          "kind": "変更",
          "text": "Removed Opus 4.7 from fast mode; /fast now applies to Opus 5 and Opus 4.8"
        },
        {
          "kind": "その他",
          "text": "Updated the claude-api skill to default to Claude Opus 5, with a migration path from Opus 4.8"
        },
        {
          "kind": "その他",
          "text": "Subagents can now spawn nested subagents up to depth 3 by default (was 1); set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 to disable nesting"
        }
      ]
    },
    {
      "version": "2.1.218",
      "items": [
        {
          "kind": "変更",
          "text": "Changed /code-review to run as a background subagent, so review work no longer fills your conversation and keeps stacked slash commands as its review target"
        },
        {
          "kind": "追加",
          "text": "Added screen-reader announcements of deleted text for word and line deletions (Option+Delete, Ctrl+W, Cmd+Backspace, Ctrl+U, Ctrl+K) in --ax-screen-reader mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Windows paths with \\u-prefixed segments (like C:\\Users\\unicorn) being corrupted into CJK characters in tool inputs, which made those files inaccessible"
        },
        {
          "kind": "修正",
          "text": "Fixed the left arrow key discarding the conversation with no undo: presses right after editing now ask to confirm, and Esc in the agent view returns to the conversation it backgrounded"
        },
        {
          "kind": "修正",
          "text": "Fixed multi-line paste collapsing into one line with j in place of newlines in terminals that encode pasted newlines as Ctrl+J"
        },
        {
          "kind": "修正",
          "text": "Fixed /context reporting stale pre-compact token usage after compacting from the message picker"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview failing on descriptive arguments like \"review my auth changes\" — they now run a review of your current branch with the text applied as a note to the findings"
        },
        {
          "kind": "修正",
          "text": "Fixed /code-review ultra silently running a local review in non-interactive sessions — it now launches the cloud review"
        },
        {
          "kind": "修正",
          "text": "Fixed gateway spend metering to price Bedrock application-inference-profile ARNs and other config-mapped upstream model IDs at the configured model's rates"
        },
        {
          "kind": "修正",
          "text": "Fixed mojibake when a long IDE selection was truncated mid-emoji, and a case where a tool executor error could be silently dropped"
        },
        {
          "kind": "修正",
          "text": "Fixed an engine teardown race that could start and abandon a phantom turn, and made input pushed after close consistently rejected"
        },
        {
          "kind": "修正",
          "text": "Fixed spurious \"[Request interrupted by user]\" messages after interrupted tool calls, and an unpaired tool_use block left in the transcript when a tool aborted mid-response"
        },
        {
          "kind": "追加",
          "text": "Fixed VoiceOver reading \"new line\" instead of echoing the typed space at the end of the input in --ax-screen-reader mode"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin and settings panels not moving the terminal cursor to the focused row, so screen readers and magnifiers can follow arrow-key navigation"
        },
        {
          "kind": "修正",
          "text": "Fixed crashes (maximum call stack exceeded) when a deeply nested watched directory tree was deleted or moved, and when rendering deeply nested UI trees"
        },
        {
          "kind": "修正",
          "text": "Fixed pull request events occasionally being lost when a session exited immediately after creating or linking a PR"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bedrock setup wizard failing profile verification for assume-role profiles in partitioned AWS regions and on proxy-only networks"
        },
        {
          "kind": "修正",
          "text": "Fixed rare negative or incorrect turn duration measurements after a system clock adjustment by timing turns with a monotonic clock"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"N MCP servers need authentication\" startup notice over-counting claude.ai connectors that aren't connected in claude.ai"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt history entries being dropped or duplicated when history writes raced or failed"
        },
        {
          "kind": "修正",
          "text": "Fixed a retry loop that re-sent identical doomed requests after a context-overflow error with a large thinking budget; Ctrl+B backgrounding now applies the same background-shell caps as other paths"
        },
        {
          "kind": "修正",
          "text": "Fixed agent frontmatter hooks running from untrusted folders: hooks now require the agent file's own folder to have accepted workspace trust"
        },
        {
          "kind": "修正",
          "text": "Fixed fork-session lineage being lost after compaction in headless and SDK sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed session failing every turn, or crashing on resume, when its history held a malformed delta attachment"
        },
        {
          "kind": "修正",
          "text": "Improved /ultrareview error feedback so Claude can correct an invalid argument instead of retrying it unchanged"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: the dangerous-rm, background-&, and suspicious-Windows-path checks no longer open permission dialogs; the auto-mode classifier adjudicates them instead"
        },
        {
          "kind": "改善",
          "text": "Improved sandbox command restrictions for IDE interactions"
        },
        {
          "kind": "改善",
          "text": "Improved trust dialogs to name the repository root the grant covers"
        },
        {
          "kind": "変更",
          "text": "Changed /deep-research to start only when invoked manually; Claude no longer launches it on its own"
        },
        {
          "kind": "変更",
          "text": "Changed plan mode with auto to no longer prompt for Bash commands the static analyzer can't prove read-only; the auto-mode classifier judges them instead"
        },
        {
          "kind": "追加",
          "text": "Added an announcement when fast mode changes as a result of switching models via /config model=<x> or Remote Control"
        },
        {
          "kind": "変更",
          "text": "Changed server-managed settings so benign feature and cost toggles no longer trigger the settings-approval prompt"
        },
        {
          "kind": "変更",
          "text": "Changed agent markdown files to reject agent names containing :, which is reserved for plugin namespacing"
        },
        {
          "kind": "変更",
          "text": "Changed skills with context: fork to run in the background by default; opt out per skill with background: false"
        },
        {
          "kind": "追加",
          "text": "Added yes/no/on/off/1/0 (case-insensitive) as accepted values for skill and plugin frontmatter booleans, alongside true/false"
        },
        {
          "kind": "修正",
          "text": "Fixed remote sessions continuing to send heartbeats after their worker was replaced, which left long-lived desktop and IDE processes retrying a rejected request every few seconds forever"
        }
      ]
    },
    {
      "version": "2.1.217",
      "items": [
        {
          "kind": "追加",
          "text": "Added emoji shortcode autocomplete in the prompt input: type :heart: to insert ❤️, or :hea for suggestions — disable with the emojiCompletionEnabled setting"
        },
        {
          "kind": "追加",
          "text": "Added warnings when transcript writes are failing (e.g. disk full) or when session saving is off due to an inherited environment variable, instead of losing transcripts silently"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory leak where truncated MCP tool outputs kept the full untruncated result in memory for the rest of the session"
        },
        {
          "kind": "修正",
          "text": "Fixed Windows auto-update failures that could leave claude.exe missing; failed updates now restore the preserved executable automatically"
        },
        {
          "kind": "修正",
          "text": "Fixed background session isolation not canonicalizing symlinked working directories, which could let sessions escape their workspace folder"
        },
        {
          "kind": "修正",
          "text": "Fixed auto-compact never triggering for Claude Opus 4.8 on Bedrock and /compact failing once over the limit"
        },
        {
          "kind": "修正",
          "text": "Fixed corporate mTLS, TLS-verify, OAuth scope, and proxy settings being ignored in Claude Desktop sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode's startup announcement being cut off by the first prompt render, and the thinking status row re-rendering every few seconds to update elapsed time and token counts"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings that set OTEL_EXPORTER_OTLP_ENDPOINT not governing all signals — lower-scope signal-specific overrides no longer redirect telemetry away from the managed endpoint"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume/--continue and /resume failing with a TypeError when a transcript has a malformed attachment entry"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions not showing a pending permission prompt or dialog to viewers that connected after it appeared"
        },
        {
          "kind": "修正",
          "text": "Fixed background shells sometimes becoming impossible to stop after a session is sent to the background (/background or ←) or when the session exits on a heavily loaded machine, most visible on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed a CLAUDE.md or SKILL.md paths frontmatter value with many brace groups OOM-killing or stalling the CLI at startup — brace expansion is now budget-bounded"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript preview sitting flush against the input area when attaching to a starting background session; it now leaves the same one-line gap as the live layout, so the transcript no longer shifts when the session takes over"
        },
        {
          "kind": "改善",
          "text": "Improved footer PR badge links to be clickable hyperlinks even when terminal support can't be detected (e.g. over ssh/tmux); set FORCE_HYPERLINK=0 to opt out"
        },
        {
          "kind": "変更",
          "text": "Changed the login-expiry warning to appear 3 days before expiry instead of 5"
        },
        {
          "kind": "その他",
          "text": "Capped the frontend-design plugin suggestion tip at 3 lifetime impressions instead of repeating indefinitely"
        },
        {
          "kind": "追加",
          "text": "Added a cap on concurrently-running subagents (default 20, override with CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS) so one message can't fan out unbounded background agents"
        },
        {
          "kind": "変更",
          "text": "Changed subagents to no longer spawn nested subagents by default; set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH to allow deeper nesting"
        },
        {
          "kind": "追加",
          "text": "Fixed --max-budget-usd not stopping background subagents: once the cap is reached, new spawns are denied and running background agents are halted"
        }
      ]
    },
    {
      "version": "2.1.216",
      "items": [
        {
          "kind": "追加",
          "text": "Added sandbox.filesystem.disabled setting to skip filesystem isolation while keeping network egress control"
        },
        {
          "kind": "修正",
          "text": "Fixed a slowdown in long sessions where message normalization cost grew quadratically with the number of turns, causing multi-second stalls and slow resumes"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode denying commands with \"HTTP 401\" classifier errors after the OAuth token expired or rotated mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed AskUserQuestion telling Claude to continue even when your answer asked it to wait or explain first — free-text answers now get neutral wording"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code on the web re-asking the same question and dropping your answer after the session sat idle for a few minutes"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mentions silently attaching nothing after file-modifying hooks, vim dot-repeat of c-operators and paste, statusline running twice on resume, and resume-picker hangs on failure"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed background agent sessions reverting to the default agent: the agent's prompt and tool restrictions are now restored"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated subagents redirecting git into the shared checkout via git -C, --git-dir, or GIT_DIR/GIT_WORK_TREE"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree sessions landing in another project's leftover worktree when the working directory did not match the selected project"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions whose worktree has no git repository being undeletable"
        },
        {
          "kind": "修正",
          "text": "Fixed claude daemon stop --any potentially terminating an unrelated process via a stale legacy daemon lockfile"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc-Esc at an idle prompt not opening the rewind picker in long-running sessions with background tasks"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash command permission checking for compound statements with redirects inside && lists or negations"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing Ctrl+X twice in the agent list failing to delete a session, and deleted sessions reappearing when their background worker had died"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents getting cancelled when a high-priority message arrives during their startup window"
        },
        {
          "kind": "修正",
          "text": "Fixed mouse and focus garbage in the terminal while a GUI editor from /memory, /plan, /keybindings, or Ctrl+G is open; /memory no longer waits for the editor to close"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude-in-Chrome 403-looping on reconnect when the session's OAuth token lacks a required scope"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow saves and scheduled-task writes following a symlink at .claude, which could redirect writes outside the project"
        },
        {
          "kind": "追加",
          "text": "Fixed MCP re-authenticate revoking working credentials before the new sign-in succeeds, and the reconnect needs-auth message in background sessions pointing at an unusable command"
        },
        {
          "kind": "修正",
          "text": "Fixed read-only commands on Windows accessing network paths without a permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash command parsing of non-ASCII characters to match real shell word boundaries"
        },
        {
          "kind": "修正",
          "text": "Fixed PowerShell tool permission validation of commands containing invisible Unicode characters"
        },
        {
          "kind": "修正",
          "text": "Fixed dialogs in fullscreen mode stretching past the right-hand edge of their panel"
        },
        {
          "kind": "修正",
          "text": "Fixed the /config settings list in fullscreen mode clipping its keyboard-hint footer"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript-mode (Ctrl+O) footer hint wrapping on terminals narrower than 104 columns"
        },
        {
          "kind": "修正",
          "text": "Fixed the Prometheus metrics endpoint (OTEL_METRICS_EXPORTER=prometheus) emitting invalid # UNIT lines"
        },
        {
          "kind": "修正",
          "text": "Fixed skills and commands changed during a session not appearing in the slash menu until restart"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin skills with a name frontmatter field losing their plugin prefix in slash-command autocomplete"
        },
        {
          "kind": "修正",
          "text": "Fixed telemetry misreporting permission denials: failed permission-prompt requests no longer count as user rejections, and user interrupts are now reported as user aborts instead of rejections"
        },
        {
          "kind": "追加",
          "text": "Improved the /fork confirmation to one line with the new session's name, claude attach id, and a note when the copy shares your checkout"
        },
        {
          "kind": "改善",
          "text": "Improved validation of git and gh command arguments in the PowerShell tool"
        },
        {
          "kind": "改善",
          "text": "Improved the /ultrareview diff-too-large error to show configured limits, measured diff size, and largest contributing files"
        },
        {
          "kind": "改善",
          "text": "Improved /code-review ultra empty-diff message to name the exact base ref and suggest passing an explicit base"
        },
        {
          "kind": "改善",
          "text": "Improved the spend limit adjustment prompt to show the server's reason when a spend limit change is rejected"
        },
        {
          "kind": "その他",
          "text": "/context now shows an explicit warning when the conversation exceeds the context window, and a failed /compact displays as an error"
        },
        {
          "kind": "その他",
          "text": "/rewind no longer restores or deletes files through symlinks or hard links at tracked paths and reports how many paths it skipped"
        },
        {
          "kind": "その他",
          "text": "Background sessions: /mcp and /install-github-app now park a \"needs input\" request in the agent view when no client is attached"
        },
        {
          "kind": "修正",
          "text": "Updated the bundled dataviz skill: reordered the default chart palette and fixed guidance that suggested direct labels for four-series charts"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed right-to-left text (Arabic, Hebrew, Persian) rendering in the wrong order when mixed with English or code"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions dropping the in-flight message when the session's container restarts mid-turn — the interrupted turn now re-runs on resume instead of leaving the session unresponsive"
        }
      ]
    },
    {
      "version": "2.1.215",
      "items": [
        {
          "kind": "その他",
          "text": "Claude no longer runs the /verify and /code-review skills on its own; invoke them with /verify or /code-review when you want them"
        }
      ]
    },
    {
      "version": "2.1.214",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed single-segment dir/** allow rules like Edit(src/**) auto-approving writes to nested dir/ directories anywhere in the tree instead of only <cwd>/dir"
        },
        {
          "kind": "修正",
          "text": "Fixed a permission-check bypass affecting commands run in Windows PowerShell 5.1 sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks to fail closed on file-descriptor redirect forms that bash parses differently than the permission analyzer"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks misjudging very long commands — commands over 10,000 characters now always prompt instead of running automatically"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks treating zsh variable subscripts and modifiers in [[ ]] comparisons as inert text — these commands now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks to no longer auto-approve certain help and man commands that could run unsafe options, command substitutions, or backslash paths"
        },
        {
          "kind": "修正",
          "text": "Fixed permission prompts on remote sessions that could proceed before the local confirmation dialog"
        },
        {
          "kind": "追加",
          "text": "Added the EndConversation tool: Claude can end sessions with highly abusive users or jailbreak attempts, as on claude.ai since 2025 — see https://www.anthropic.com/research/end-subset-conversations"
        },
        {
          "kind": "追加",
          "text": "Added a periodic progress heartbeat for long-running tool calls that previously went silent"
        },
        {
          "kind": "追加",
          "text": "Added an ISO modified timestamp to memory file frontmatter"
        },
        {
          "kind": "追加",
          "text": "Added message.uuid, client_request_id, and tool_source attributes to OpenTelemetry log events for message-level correlation and tool provenance"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH to configure the 60 KB truncation limit on OpenTelemetry content attributes"
        },
        {
          "kind": "追加",
          "text": "Added reasoning effort to the subagentStatusLine payload, so custom agent rows can render model and effort"
        },
        {
          "kind": "追加",
          "text": "Added permission prompts for docker commands (including the Podman docker shim) carrying daemon-redirect flags (--url, --connection, --identity, and Podman's remote mode) that previously ran without one"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when a GrowthBook feature evaluates to null, and a bug where a malformed flag payload could wipe the cached feature flags"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash tool killing the Claude session when a pkill -f pattern accidentally matched the CLI's own process (Linux)"
        },
        {
          "kind": "修正",
          "text": "Fixed unbounded memory growth when --settings points at a device file or multi-GB file; oversized (>2 MiB) settings files now fail at startup with a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed streaming turns failing with \"Socket is closed\" behind corporate proxies on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed stream-json output truncation at exit for slow-reading SDK/pipeline consumers; the exit drain now scales with queued bytes instead of a flat 2s cap"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks refusing their own configured prompt as untrusted input — the fired prompt is now delivered as the session's assigned task"
        },
        {
          "kind": "修正",
          "text": "Fixed PowerShell tool commands hanging until timeout when a child process waited on standard input (Windows)"
        },
        {
          "kind": "修正",
          "text": "Fixed Python scripts under the PowerShell tool crashing with UnicodeDecodeError when reading non-UTF-8 data from standard input (Windows)"
        },
        {
          "kind": "修正",
          "text": "Fixed Python scripts run via the PowerShell tool crashing with UnicodeEncodeError on non-ASCII output, and PowerShell 7 error messages containing raw ANSI escape sequences (Windows)"
        },
        {
          "kind": "修正",
          "text": "Fixed the PowerShell tool reporting where.exe, fc.exe, and diff.exe as errors when they return a valid negative answer (Windows)"
        },
        {
          "kind": "修正",
          "text": "Fixed > and >> under the PowerShell tool on Windows PowerShell 5.1 writing UTF-16LE files that other tools couldn't read as UTF-8"
        },
        {
          "kind": "修正",
          "text": "Fixed a displaced background daemon deleting its successor's control socket on shutdown, which made the next client kill the healthy replacement daemon"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions parked with ← or /background and left idle keeping the background daemon and a worker process alive indefinitely"
        },
        {
          "kind": "修正",
          "text": "Fixed completed background sessions being impossible to remove via claude rm or the agent view once the background service had gone idle"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions dispatched from a non-git folder being impossible to delete from the agents view"
        },
        {
          "kind": "修正",
          "text": "Fixed reopening a stopped background session failing to restore its saved conversation when an unreadable folder exists in the session store"
        },
        {
          "kind": "修正",
          "text": "Fixed the Remote Control \"session ready\" push notification firing for sessions where Remote Control was not explicitly enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed /install-github-app and the /mcp settings menu being blocked in agent-view sessions — they're now refused only in background sessions with no terminal attached"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins enabled via the --settings CLI flag not loading (regression since v2.1.181)"
        },
        {
          "kind": "修正",
          "text": "Fixed feature flags going stale in long-running sessions after the OAuth token rotates"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview refusing to run in repos with no merge base — it now offers to review all tracked files"
        },
        {
          "kind": "修正",
          "text": "Fixed claude update and claude doctor hanging silently, and the /status System diagnostics section going blank, when a shell-config path is a directory"
        },
        {
          "kind": "修正",
          "text": "Fixed memory frontmatter values being silently truncated at an inline # when memory files are saved"
        },
        {
          "kind": "修正",
          "text": "Fixed session cost and token telemetry double-counting on streams that emit multiple cumulative message_delta frames"
        },
        {
          "kind": "修正",
          "text": "Fixed a spurious \"check your network\" warning that appeared while the advisor was thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks with exit code 2 not blocking as documented when the hook's stdout JSON fails schema validation"
        },
        {
          "kind": "修正",
          "text": "Fixed OTel log events emitted outside the turn's async context missing the interaction span's trace context"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP transient errors during prompts/resources refresh clearing the server's slash commands and resources"
        },
        {
          "kind": "改善",
          "text": "Improved the claude rc workspace-trust error in the home directory to say trust there is never saved and to suggest running from a project directory"
        },
        {
          "kind": "変更",
          "text": "Changed single-segment dir/** hook if: conditions to match only <cwd>/dir; write **/dir/** for any-depth matching. deny/ask permission rules keep their any-depth match."
        },
        {
          "kind": "変更",
          "text": "Changed file commands using -m/--magic-file or -f/--files-from to require permission instead of being auto-allowed as read-only"
        },
        {
          "kind": "変更",
          "text": "Changed keep-alive connection pooling to disable after a stale-connection error, so retries open a fresh socket"
        },
        {
          "kind": "変更",
          "text": "Changed SessionStart hooks to report source \"fork\" when a session begins as a fork instead of \"resume\""
        }
      ]
    },
    {
      "version": "2.1.212",
      "items": [
        {
          "kind": "追加",
          "text": "/fork now copies your conversation into a new background session (its own row in claude agents) while you keep working; the in-session subagent it used to launch is now /subtask"
        },
        {
          "kind": "追加",
          "text": "Added claude auto-mode reset to restore the default auto-mode configuration, with a confirmation prompt (pass --yes to skip)"
        },
        {
          "kind": "追加",
          "text": "Added a session-wide limit on WebSearch tool calls (default 200, tunable via CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION) to stop runaway search loops"
        },
        {
          "kind": "追加",
          "text": "Added a per-session cap on subagent spawns (default 200, override with CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION) to stop runaway delegation loops; /clear resets the budget"
        },
        {
          "kind": "その他",
          "text": "MCP tool calls running longer than 2 minutes now move to the background automatically so the session stays usable; configure the threshold or disable with CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS"
        },
        {
          "kind": "その他",
          "text": "Typing /resume in the agent view now opens a picker of past sessions — including sessions deleted from the list — and resumes your pick as a background session"
        },
        {
          "kind": "修正",
          "text": "Fixed plan mode auto-running file-modifying Bash commands (e.g. touch, rm) without a permission prompt or SDK canUseTool callback"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree creation following a repository-committed symlink at .claude/worktrees, which could create files outside the repository"
        },
        {
          "kind": "修正",
          "text": "Fixed a continue:false hook's halt being dropped when the tool fails or completes mid-stream, and hook infrastructure errors being misreported as user rejections"
        },
        {
          "kind": "修正",
          "text": "Fixed SIGTERM during a running Bash tool orphaning the command's process tree in print/SDK mode; the CLI now aborts the turn, kills the tree, and exits 143"
        },
        {
          "kind": "修正",
          "text": "Fixed /background and claude --bg failing with \"EUNKNOWN: unknown error, uv_spawn\" on Windows when Group Policy blocks PowerShell 5.1; the daemon now prefers PowerShell 7"
        },
        {
          "kind": "修正",
          "text": "Fixed shell mode (!) not executing commands containing file paths while the path autocomplete popup was open"
        },
        {
          "kind": "修正",
          "text": "Fixed auto-mode denial notifications rendering broken characters when a long denial reason was truncated mid-emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+J not inserting a newline in the agent view dispatch input on terminals with extended key reporting, and surfaced the newline shortcut in the ? help overlay"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview rejecting PR references like #123, PR 123, and pasted PR URLs; error hints now name the command you actually typed"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview <branch> not fetching the branch from origin when it exists remotely; it now suggests the closest branch name on typos"
        },
        {
          "kind": "追加",
          "text": "Fixed /ultrareview skipping the billing confirmation in a new conversation after /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview's \"not a git repository\" error on Claude Desktop now suggesting the project's repository folder instead of terminal commands"
        },
        {
          "kind": "修正",
          "text": "Fixed hosted (host-managed) sessions failing at startup when repository settings configured mTLS certs, extra CA bundles, or OAuth scopes; these transport settings are now ignored with a warning"
        },
        {
          "kind": "修正",
          "text": "Fixed a spurious \"File has not been read yet\" error when editing a file that had been read with offset/limit before resuming a session"
        },
        {
          "kind": "修正",
          "text": "Fixed ExitWorktree failing with \"no active EnterWorktree session\" after resuming a session with --continue/--resume in print/SDK mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the workflow agent grid staying empty for Remote Control clients that join a session mid-run"
        },
        {
          "kind": "修正",
          "text": "Fixed streaming-mode control requests being marked complete before their handler finished, which could lose the request on session restart"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions created with /fork losing their live-parent protection after a state write failure"
        },
        {
          "kind": "修正",
          "text": "Fixed reopening a stopped background session from the agent view failing silently — it now resumes the session, or shows why it can't and lets you force a restart"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: a stopping teammate could send the leader duplicate idle notifications when team initialization re-ran within a session"
        },
        {
          "kind": "修正",
          "text": "Fixed the plan-approval dialog footer splitting \"ctrl+g to edit in <editor>\" apart when the file path is long"
        },
        {
          "kind": "修正",
          "text": "Fixed the welcome banner keeping its old panel widths after a combined width+height terminal resize in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed diff previews losing their line numbers and +/- markers in narrow layouts"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mentions attaching nothing after a partial file read, plugin uninstall targeting the wrong marketplace, and false \"Command timed out\" on exit code 143"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry HTTP exports being rejected with 411/400 by Azure Monitor and other endpoints that don't accept chunked transfer encoding"
        },
        {
          "kind": "修正",
          "text": "Fixed OTLP event log records missing trace_id/span_id when TRACEPARENT is set in SDK/headless mode"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations with many images incorrectly failing with \"Request too large\" errors, and improved the error message to explain the actual cause"
        },
        {
          "kind": "修正",
          "text": "Fixed web search and web fetch returning \"API Error\" text as search results or page content when the API was overloaded"
        },
        {
          "kind": "改善",
          "text": "Improved web search and web fetch reliability by retrying 529 errors and rate-limited requests with bounded backoff"
        },
        {
          "kind": "改善",
          "text": "Improved prompt caching: the mid-conversation system block now works behind LLM gateways and custom base URLs (Bedrock, Vertex, 1P)"
        },
        {
          "kind": "改善",
          "text": "Improved background agent attach: cold-attaching now instantly shows the formatted transcript while the session boots, instead of a blank wait"
        },
        {
          "kind": "改善",
          "text": "Reduced token usage in inter-agent messaging: SendMessage bodies are no longer duplicated into replayed history and tool results"
        },
        {
          "kind": "変更",
          "text": "Changed /fork to name the copy after your prompt when the session has no title, so the row is recognizable in the agent view"
        },
        {
          "kind": "変更",
          "text": "Changed bare /btw to reopen the side-question panel on your most recent exchange so you can browse earlier answers"
        },
        {
          "kind": "変更",
          "text": "Changed the ← footer hint to pulse N done for a moment when a background agent finishes while nothing needs your input"
        },
        {
          "kind": "変更",
          "text": "Deprecated the Task tool's mode parameter (now ignored); subagents inherit the parent session's permission mode by default"
        },
        {
          "kind": "変更",
          "text": "Changed Enterprise forceLoginMethod to be enforced for VS Code extension, SDK, setup-token, and install-github-app logins, not just the terminal"
        },
        {
          "kind": "変更",
          "text": "Changed session transcripts to record the reasoning effort level on each assistant message"
        },
        {
          "kind": "追加",
          "text": "Changed headless/SDK sessions to apply a set_model control request mid-turn; the next model round-trip uses the new model instead of waiting for the next turn"
        },
        {
          "kind": "変更",
          "text": "Changed agent view / claude agents --json: sessions waiting on a sandbox, MCP-input, or managed-settings prompt now show as \"Needs input\" instead of \"Working\""
        },
        {
          "kind": "その他",
          "text": "Updated the auth status panel title from \"Cloud authentication\" to \"Authentication\""
        },
        {
          "kind": "修正",
          "text": "Corrected an earlier release note (2.1.200): tmux through the 3.6 series lacks synchronized output; newer tmux with support is detected automatically"
        }
      ]
    }
  ]
};
