/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
    {
      "version": "2.1.211",
      "items": [
        {
          "kind": "追加",
          "text": "Added --forward-subagent-text flag and CLAUDE_CODE_FORWARD_SUBAGENT_TEXT environment variable to include subagent text and thinking in stream-json output"
        },
        {
          "kind": "修正",
          "text": "Fixed permission previews relayed to chat channels not neutralizing bidirectional-override, zero-width, and look-alike quote characters, so tool inputs cannot visually alter the approval message"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode overriding a PreToolUse hook's ask decision for unsandboxed Bash — a hook ask now floors the decision at a prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed parallel Claude Code sessions all logging out simultaneously after wake-from-sleep when many sessions share one credential store"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin MCP servers not reconnecting after an idle web session woke, leaving MCP calls failing until the next message"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code on Vertex and Bedrock attempting the default Opus model at startup and printing a spurious fallback notice when a model is explicitly configured"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents spawned with an explicit model override reverting to the parent's model when resumed or sent a follow-up message"
        },
        {
          "kind": "修正",
          "text": "Fixed nested .claude/rules/*.md files loading even when setting sources exclude project settings"
        },
        {
          "kind": "修正",
          "text": "Fixed file upload validation: filenames ending in a DOS device suffix (.prn) or trailing dot are now accepted, and files with multiple hard links are refused"
        },
        {
          "kind": "修正",
          "text": "Fixed file uploads to Claude in Chrome from remote and CLI sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed edits that leave the input as \"?\" being silently swallowed and toggling the shortcuts panel"
        },
        {
          "kind": "修正",
          "text": "Fixed a startup hang when the Claude in Chrome extension is enabled but Chrome is not running"
        },
        {
          "kind": "修正",
          "text": "Fixed a 300ms delay revealing async content (Settings tabs, Stats, diff views, and other loading states)"
        },
        {
          "kind": "修正",
          "text": "Fixed reopening a just-stopped background session from the agents view starting a blank conversation under the same session id"
        },
        {
          "kind": "修正",
          "text": "Fixed /loop hiding the session from /resume after a single use"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader users losing the audible terminal bell after /terminal-setup or onboarding terminal setup"
        },
        {
          "kind": "修正",
          "text": "Fixed background jobs on LLM gateway auth (ANTHROPIC_AUTH_TOKEN + ANTHROPIC_BASE_URL) coming back \"Not logged in\" after the daemon respawns them"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents jobs becoming permanently undeletable when git no longer recognizes their worktree — the row now shows why the delete was refused instead of silently reappearing"
        },
        {
          "kind": "修正",
          "text": "Fixed /clear not resetting the session cost counter — the statusline's cost now starts at $0 after /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome setup pages failing to open in the browser on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed headless print-mode sessions on Windows crashing or silently exiting when stdin is unreadable"
        },
        {
          "kind": "修正",
          "text": "Fixed background session titles in the agents view showing the naming model's refusal text when the prompt contains a link"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents killed by the user auto-respawning, and revived agents re-running stale prompts from old sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed routines with no schedule reporting a next run time in the year 1"
        },
        {
          "kind": "その他",
          "text": "Hardened synced skill/plugin directory naming on Windows and kept CCR web fetch/search proxies working after /clear"
        },
        {
          "kind": "改善",
          "text": "Improved terminal layout and rendering performance"
        },
        {
          "kind": "改善",
          "text": "Improved background agent result reporting — Claude now reports the status of still-running agents and waits for the real completion instead of fabricating results"
        },
        {
          "kind": "改善",
          "text": "Improved the memory index over-limit warning to measure only loaded content, excluding frontmatter and HTML comments"
        },
        {
          "kind": "その他",
          "text": "Updated integer environment variables (timeouts, token budgets, retry counts) to accept scientific notation and digit-separator spellings like 1e6 and 64_000"
        },
        {
          "kind": "その他",
          "text": "Updated documentation links to the current docs sites"
        },
        {
          "kind": "変更",
          "text": "Changed \"always allow\" permission rules to save at the repository root, so approvals granted in a git worktree persist across sessions and worktrees"
        },
        {
          "kind": "変更",
          "text": "Changed /usage-credits to ask for confirmation before sending a request to organization admins"
        },
        {
          "kind": "変更",
          "text": "Changed Vim mode s and S (substitute char/line) to work in NORMAL mode, matching vim behavior"
        },
        {
          "kind": "その他",
          "text": "[VSCode] Updated the Remote Control banner to describe what it does"
        },
        {
          "kind": "その他",
          "text": "Claude in Chrome: hardened file-upload path validation"
        },
        {
          "kind": "その他",
          "text": "Claude in Chrome: save_to_disk on screenshot actions now writes the image to disk and returns the path; previously it did nothing"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt-caching regression on Bedrock, Vertex, Mantle, and Foundry that billed the trailing system context block as fresh input tokens on every request."
        }
      ]
    },
    {
      "version": "2.1.210",
      "items": [
        {
          "kind": "追加",
          "text": "Added a live elapsed-time counter to the collapsed tool summary line so long-running tool calls visibly tick instead of looking stuck"
        },
        {
          "kind": "追加",
          "text": "Added a startup warning for Write(path), NotebookEdit(path), and Glob(path) permission rules — use Edit(path) or Read(path) instead"
        },
        {
          "kind": "修正",
          "text": "Fixed isolation: 'worktree' subagents being able to run git-mutating commands against the main repo checkout instead of their own isolated worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed the ultracode keyword opt-in firing on non-human-originated input such as webhook payloads and relayed PR comments"
        },
        {
          "kind": "修正",
          "text": "Fixed a rendered text fragment leaking into crash telemetry when a UI component returned content outside a styled text element"
        },
        {
          "kind": "修正",
          "text": "Fixed paste markers leaking into external editors opened from Claude Code, which could appear as stray È/É characters around pasted text"
        },
        {
          "kind": "修正",
          "text": "Fixed claude attach sometimes failing with \"job not found\" or \"agent is still starting\" errors during session transitions — attach now waits for the daemon to settle, and terminal resizes during a slow attach are applied once it completes"
        },
        {
          "kind": "修正",
          "text": "Fixed a session crash when a tool's result renderer returned a numeric bigint value or plain text instead of a UI element"
        },
        {
          "kind": "修正",
          "text": "Fixed a hook callback timeout being misreported to the model as a user rejection, which made unattended sessions stop and wait"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude assuming a cd took effect after its command was moved to the background; the tool result now states the working directory is unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin-provided MCP servers being torn down when MCP servers are re-synced mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed plan approvals without edits being labeled \"(edited by user)\" and overwriting the plan file with a stale snapshot"
        },
        {
          "kind": "修正",
          "text": "Fixed /doctor skipping its auto-mode-default proposal on Bedrock, Vertex, and Foundry, where auto mode no longer needs an opt-in"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep content mode claiming \"No matches found\" when paginating past the end of results"
        },
        {
          "kind": "修正",
          "text": "Fixed unmatched $1/$2 positional placeholders in skills and commands being silently stripped; they are now preserved verbatim"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin cache writes leaving temp files behind on failure and failing on locked-file renames on Windows and network filesystems"
        },
        {
          "kind": "修正",
          "text": "Fixed background workers crash-looping when a client resets its connection to the background service"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents --effort ultracode not reaching dispatched sessions; the value was silently dropped"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing ← to open the agents view dropping the task tracker when returning to the session"
        },
        {
          "kind": "修正",
          "text": "Fixed the agents dashboard retaining pasted images from abandoned reply drafts after their session was deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed killed background sessions leaving a permanent git worktree lock behind; the periodic sweep now releases locks whose owning process is gone"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK MCP servers registered via an initialize control request waiting until the next turn to start connecting"
        },
        {
          "kind": "修正",
          "text": "Fixed returning to the agents view from a session leaving overlapping ghost frames with CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1"
        },
        {
          "kind": "修正",
          "text": "Fixed late-appearing .claude/* symlinks not being reconciled into the sandbox deny-write list"
        },
        {
          "kind": "その他",
          "text": "Hardened the Agent tool against indirect prompt injection via content a subagent read"
        },
        {
          "kind": "改善",
          "text": "Improved the Bash/PowerShell tool message when a command hits its timeout and is auto-backgrounded, so the model can distinguish a hang from an explicit background request"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: the permission classifier now defaults to Sonnet 5 for external sessions, validated on the session's first request and pinned for the session"
        },
        {
          "kind": "改善",
          "text": "Improved the bundled dataviz skill's chart color validation with perceptual OKLab color difference and recalibrated color-blindness thresholds"
        },
        {
          "kind": "その他",
          "text": "Memory writes that leave a MEMORY.md index over its read limit now produce an explicit error instead of silent truncation"
        },
        {
          "kind": "その他",
          "text": "Screen reader mode now announces permission mode changes aloud when cycling modes with Shift+Tab"
        },
        {
          "kind": "その他",
          "text": "The agents footer hint now shows how many background agents are waiting on your input, with a brief color emphasis when the count changes"
        },
        {
          "kind": "その他",
          "text": "Agent view: the session you pressed ← from stays visibly marked even after mouse hover or arrow keys move the selection"
        },
        {
          "kind": "修正",
          "text": "Fable temporarily shows as unavailable in the advisor picker while a server-side issue causing Fable advisor failures is fixed"
        }
      ]
    },
    {
      "version": "2.1.209",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed /model and other dialogs being blocked in claude agents background sessions (reverts an overly broad guard)"
        }
      ]
    },
    {
      "version": "2.1.208",
      "items": [
        {
          "kind": "追加",
          "text": "Added screen reader mode: opt-in plain-text rendering for screen reader users. Run claude --ax-screen-reader, set CLAUDE_AX_SCREEN_READER=1, or add \"axScreenReader\": true to settings."
        },
        {
          "kind": "追加",
          "text": "Added vimInsertModeRemaps setting: map two-key insert-mode sequences like jj to Escape in vim mode"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_PROCESS_WRAPPER: agent view and the background service now honor a corporate launcher by running every Claude Code self-spawn through a required wrapper executable"
        },
        {
          "kind": "追加",
          "text": "Added mouse-click support for multi-select menus and \"Other\" input rows in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed fast mode staying off after switching back to a model that supports it — it now restores automatically when enabled in settings"
        },
        {
          "kind": "修正",
          "text": "Fixed replies typed to a background agent being lost when delivery fails — the text is now saved and delivered when the session restarts"
        },
        {
          "kind": "修正",
          "text": "Fixed background-session attach failing permanently (\"Couldn't start the background daemon\") after an update replaced the binary a running claude agents process was launched from"
        },
        {
          "kind": "修正",
          "text": "Fixed the context window (and auto-compact indicator) briefly resetting to 200k after the CLI auto-updates, causing a false \"100% context used\" when resuming long-context sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed supervised and background sessions crashing when a server closed an HTTP/2 connection with a GOAWAY while requests were in flight"
        },
        {
          "kind": "修正",
          "text": "Fixed truncated stream-json/JSON output and missing result message when piping large responses from claude -p"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_MAX_OUTPUT_TOKENS and similar env vars silently using the mantissa of scientific-notation values (1e6 became 1)"
        },
        {
          "kind": "修正",
          "text": "Fixed very large markdown tables stalling rendering or using excessive memory; tables over 200 rows show the first 200 with a \"… N more rows\" notice"
        },
        {
          "kind": "修正",
          "text": "Fixed the Edit tool failing on files modified after reading when the target text still matches uniquely"
        },
        {
          "kind": "修正",
          "text": "Fixed Read reporting empty files as \"shorter than offset\", Grep silently returning \"No files found\" for invalid regex patterns, Grep count mode under-reporting totals when paginated, and Glob crashing with an unclear error when the pattern, path, or working directory contained a null byte"
        },
        {
          "kind": "修正",
          "text": "Fixed apiKeyHelper script failures being hidden behind a generic 401 after ~10 silent retries; the script's own error is now shown within 3 attempts"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock streaming requests failing with a misleading \"Truncated event message received\" when a gateway transforms the response — the error now names the content-type and points at the proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed /upgrade showing a login flow instead of the upgrade URL when the browser fails to open"
        },
        {
          "kind": "修正",
          "text": "Fixed stream-json input killing the session on blank CRLF or whitespace-only lines from Windows-style SDK hosts"
        },
        {
          "kind": "修正",
          "text": "Fixed headless stream-json sessions hanging permanently when a control_request carried a non-string set_model payload; the CLI now answers with an error response"
        },
        {
          "kind": "修正",
          "text": "Fixed repeated \"No completion record was found\" notices on session resume — orphaned background tasks now collapse into a single summary"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients attaching to a terminal-hosted session not seeing background agents and workflow progress until a task started or stopped"
        },
        {
          "kind": "修正",
          "text": "Fixed the Agent tool launching with no tools when a subagent's tools list resolves to nothing — it now returns a clear error naming the unrecognized entries"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage showing stale cached bars over fresher data, and /mcp not reclassifying placeholder servers after config edits"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Change directory\" in SDK hosts (e.g. Claude Desktop) failing with \"A turn is in progress\" on idle sessions that have a running background task"
        },
        {
          "kind": "修正",
          "text": "Fixed the workflow save dialog showing ~/.claude/workflows/ instead of the CLAUDE_CONFIG_DIR location for user-scope saves"
        },
        {
          "kind": "修正",
          "text": "Fixed /release-notes adding the viewed notes to the model's context — \"Show all\" previously injected the entire changelog into every subsequent request"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory leak in the agent view where pasted images were retained for the screen's lifetime after sending peek replies"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK sessions losing agents defined via the initialize request when a plugin refresh ran before the client attached"
        },
        {
          "kind": "修正",
          "text": "Fixed several memory leaks in long sessions: MCP stdio server stderr accumulating up to 64 MB per server, LSP documents staying open indefinitely (now LRU with 50-doc cap), async hook output retained after backgrounding, and unbounded growth in headless/SDK sessions from large tool-result payloads"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory blowup when reading files with extremely long single lines using offset/limit — the read now returns a clean error instead of loading the whole line"
        },
        {
          "kind": "修正",
          "text": "Fixed multi-second per-turn slowdowns in sessions with many permission deny/ask rules — rule matchers are now compiled once and cached"
        },
        {
          "kind": "改善",
          "text": "Improved input responsiveness while agent task lists update — task updates no longer re-render the entire UI"
        },
        {
          "kind": "改善",
          "text": "Reduced per-tool-call CPU overhead in print/SDK sessions with many MCP tools by caching tool-pool assembly (up to 7x faster tool rounds at high tool counts)"
        },
        {
          "kind": "改善",
          "text": "Reduced memory usage by bounding the file edit read cache to 16 MB instead of pinning up to 1,000 full files"
        },
        {
          "kind": "改善",
          "text": "Reduced session transcript size (up to 79x in edit-heavy sessions) and bounded checkpoint disk usage by pruning superseded file-history backups"
        },
        {
          "kind": "改善",
          "text": "Reduced memory usage when resuming sessions with background agents or forks spawned from large conversations"
        },
        {
          "kind": "その他",
          "text": "Completed background agents now stay listed in /tasks until cleanup instead of vanishing the moment they finish"
        },
        {
          "kind": "その他",
          "text": "Attaching to a stopped background agent now shows its transcript immediately while the session warms up, instead of a blank \"Session is starting\" screen"
        },
        {
          "kind": "その他",
          "text": "Background sessions: an older daemon no longer silently restarts workers spawned by a newer version onto the older binary"
        },
        {
          "kind": "変更",
          "text": "Agent view: Ctrl+X now deletes renamed-branch worktrees, never destroys unpushed commits, keeps the session row when a worktree is kept, and reused worktree names reset to the current base"
        },
        {
          "kind": "その他",
          "text": "Catastrophic removals (e.g. rm -rf ~) in commands containing $(…)/backticks/<(…) now prompt in --dangerously-skip-permissions and auto mode, matching the plain form"
        },
        {
          "kind": "その他",
          "text": "/install-github-app and the /mcp settings menu no longer open in background sessions"
        },
        {
          "kind": "その他",
          "text": "MCP servers configured with an empty URL now show as \"not configured\" in /mcp instead of a config error"
        },
        {
          "kind": "その他",
          "text": "/usage now shows your last-known usage bars with an \"as of\" note when the usage endpoint is rate-limited, instead of an error screen"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock auth failing with \"Session token not found or invalid\" for AWS SSO profiles whose sso_region differs from the Bedrock region (2.1.207 regression)"
        }
      ]
    }
  ]
};
