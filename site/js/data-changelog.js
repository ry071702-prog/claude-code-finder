/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.207",
      "items": [
        {
          "kind": "その他",
          "text": "Auto mode is now available without CLAUDE_CODE_ENABLE_AUTO_MODE opt-in on Bedrock, Vertex AI, and Foundry; disable via disableAutoMode in settings"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal freezing and keystrokes lagging while streaming responses containing very long lists, tables, paragraphs, or code blocks"
        },
        {
          "kind": "修正",
          "text": "Fixed remote managed settings from a non-interactive run (claude -p, the SDK) being permanently recorded as consented without ever showing the security consent dialog"
        },
        {
          "kind": "修正",
          "text": "Fixed spurious prompt-injection warnings triggered by benign system-generated conversation updates"
        },
        {
          "kind": "修正",
          "text": "Fixed the auto-updater overwriting a custom launcher script or symlink at ~/.local/bin/claude on every release; /doctor now reports an externally managed launcher"
        },
        {
          "kind": "修正",
          "text": "Fixed compound commands with cd prompting for permission when the only output redirect was to /dev/null"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript jumping above the start of the answer when a response finishes streaming"
        },
        {
          "kind": "修正",
          "text": "Fixed extensions.worktreeConfig being left in the repo's .git/config (breaking go-git tools like tea) after the last worktree.sparsePaths worktree was removed"
        },
        {
          "kind": "修正",
          "text": "Fixed malformed bracket patterns in rules globs, skill paths, .ignore, and .worktreeinclude breaking file reads, file suggestions, and worktree creation"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash loop in agent teams where a malformed teammate mailbox message caused repeated errors every second until the mailbox file was manually deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions auto-named by accepting a plan not showing that name on their agent-view row"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions that entered a git worktree resuming blank after a cold reopen from the agent list"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control task status updates being lost when the connection recovered from a network interruption or credential refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions hosted by the desktop app not showing background agent and workflow progress on mobile and web"
        },
        {
          "kind": "修正",
          "text": "Fixed Deep research runs labeling every Fetch-phase agent \"unknown\" — chips now show the source hostname"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock repeatedly requesting fresh AWS SSO credentials from IAM Identity Center on every API request"
        },
        {
          "kind": "改善",
          "text": "Improved agent view: pasting the same text again now expands the collapsed [Pasted text #N] placeholder instead of adding a second one"
        },
        {
          "kind": "改善",
          "text": "Improved agent view: blocked session peeks now lead with the question and show a worded staleness clock (waiting 3m) instead of the same timestamp twice"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Vertex, and Claude Platform on AWS to default to Claude Opus 4.8"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to no longer read autoMode from .claude/settings.local.json (repo-resident); use ~/.claude/settings.json instead"
        },
        {
          "kind": "修正",
          "text": "Fixed an indefinite hang on Windows when AWS credential resolution stalls (e.g. a stuck credential_process): the 60-second stall guard now fires instead of waiting forever."
        },
        {
          "kind": "その他",
          "text": "Plugin hooks/monitors/MCP headersHelper: ${user_config.*} in shell-form commands is now rejected (shell-injection fix). Hooks: use exec form (args array) or $CLAUDE_PLUGIN_OPTION_<KEY>; monitors and headersHelper: read the value inside the script (config file or the server's env block)."
        },
        {
          "kind": "その他",
          "text": "Plugin option values (pluginConfigs) are no longer read from project-level .claude/settings.json; only user, --settings, and managed settings are honored"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage-credits amount inputs silently stripping malformed values (e.g. a pasted timestamp) to digits; malformed amounts are now rejected with an error, and amounts over $1,000 require a typed confirmation"
        }
      ]
    },
    {
      "version": "2.1.206",
      "items": [
        {
          "kind": "追加",
          "text": "Added directory path suggestions to /cd, matching /add-dir behavior"
        },
        {
          "kind": "追加",
          "text": "Added a /doctor check that proposes trimming checked-in CLAUDE.md files by cutting content Claude could derive from the codebase"
        },
        {
          "kind": "その他",
          "text": "/commit-push-pr now auto-allows git push to the repo's configured push remote (remote.pushDefault, or the sole remote when only one is configured) in addition to origin"
        },
        {
          "kind": "追加",
          "text": "Gateway: /login now supports Anthropic-operated public gateway endpoints"
        },
        {
          "kind": "その他",
          "text": "EnterWorktree now asks for confirmation before entering a git worktree outside the project's .claude/worktrees/ directory"
        },
        {
          "kind": "追加",
          "text": "Background agents now upgrade to a new version in the background right after a Claude Code update, instead of paying a slow stale-session upgrade when you attach"
        },
        {
          "kind": "修正",
          "text": "Fixed an expired login failing every model with a misleading \"There's an issue with the selected model\" error instead of prompting to run /login"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --resume and --continue not responding to keyboard input on startup"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers configured via --mcp-config or .mcp.json ignoring a per-server request_timeout_ms, which caused long-running MCP tool calls to time out at the 60s default in fresh sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_EXTRA_BODY being silently ignored by claude agents / --bg background workers; the shell-exported override now follows the dispatching session"
        },
        {
          "kind": "修正",
          "text": "Fixed OAuth MCP servers requiring manual re-authentication after a single failed token refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed --permission-prompt-tool pointing at an MCP server crashing with \"MCP tool not found\" on cold start before the server finishes connecting"
        },
        {
          "kind": "修正",
          "text": "Fixed /model picker rows printing a price for a different model than the row named, and stopped quoting first-party list prices on providers that don't bill them"
        },
        {
          "kind": "修正",
          "text": "Fixed server-provided model rows being misplaced in the /model picker when an entitlement or allowlist restriction drops the row they were positioned against"
        },
        {
          "kind": "修正",
          "text": "Fixed desktop sessions getting stuck showing \"running\" after a slash command was sent mid-turn"
        },
        {
          "kind": "修正",
          "text": "Fixed keyboard input being ignored in the agents view when a setup prompt appeared before a bare claude --resume on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed claude rm leaving the removed job in the daemon roster, causing the row to reappear in claude agents"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-control showing \"Unknown command\" when logged out — it now explains how to sign in"
        },
        {
          "kind": "修正",
          "text": "Fixed left arrow not stepping back out of a phase or agent in the workflow detail view"
        },
        {
          "kind": "修正",
          "text": "Fixed /status listing the same broken-install warning twice"
        },
        {
          "kind": "修正",
          "text": "Fixed false \"disused plugin\" tips and skewed disuse telemetry for LSP plugins"
        },
        {
          "kind": "修正",
          "text": "Fixed /doctor's update check to compare Homebrew installs against their cask's channel instead of the settings channel"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen jump-to-bottom pill suggesting Ctrl+End on macOS, not showing rebound chords, and wrapping over the transcript"
        },
        {
          "kind": "修正",
          "text": "Bedrock: fixed a multi-minute startup hang when using an awsCredentialExport helper on networks with restricted egress"
        },
        {
          "kind": "改善",
          "text": "Improved /code-review findings quality on claude-opus-4-8 across all effort levels"
        },
        {
          "kind": "改善",
          "text": "Improved agents view: status column now uses full terminal width instead of truncating at 64 characters"
        },
        {
          "kind": "変更",
          "text": "Changed agents view: Ctrl+X now permanently removes a completed session, and sessions no longer render twice; deleted background jobs stay deleted"
        }
      ]
    },
    {
      "version": "2.1.205",
      "items": [
        {
          "kind": "追加",
          "text": "Added an auto mode rule that blocks tampering with session transcript files"
        },
        {
          "kind": "修正",
          "text": "Fixed --json-schema silently producing unstructured output when the schema was invalid, and schemas using the format keyword being rejected"
        },
        {
          "kind": "修正",
          "text": "Fixed a message sent while Claude was working being silently lost when the turn ended at the --max-turns limit"
        },
        {
          "kind": "修正",
          "text": "Fixed Windows worktree removal deleting files outside the worktree when an NTFS junction or directory symlink existed inside it"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents staying shown as \"failed\" or \"completed\" in the agent list after being resumed with SendMessage"
        },
        {
          "kind": "修正",
          "text": "Fixed background jobs flipping from \"needs input\" back to \"working\" in the agent list when the agent's turn contained no readable text"
        },
        {
          "kind": "修正",
          "text": "Fixed claude attach erroring when a background agent was mid-upgrade restart instead of waiting for it to come back"
        },
        {
          "kind": "修正",
          "text": "Fixed session-to-PR linking missing a PR created in a Bash call whose output exceeded the 30K inline limit"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp add-from-claude-desktop getting stuck when a server name contains unsupported characters; invalid names are now reported and remaining servers still import"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin LSP server that fails to initialize preventing a valid LSP server from another plugin handling the same file extension"
        },
        {
          "kind": "修正",
          "text": "Fixed a Windows crash when the directory Claude was launched from is deleted, locked, or unmounted while a command is running"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when a file watcher was closed while a directory scan was still in flight"
        },
        {
          "kind": "修正",
          "text": "Fixed project verify skills being rewritten on every session instead of only when a documented command changed"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent view rendering one line too high and clipping its header when the job list slightly overflowed the screen"
        },
        {
          "kind": "修正",
          "text": "Fixed background tasks in the web and mobile Remote Control panels showing stale \"Running\" status by forwarding full task state on every membership change"
        },
        {
          "kind": "修正",
          "text": "Improved auto mode to ask before running rm -rf on a variable it can't resolve from context"
        },
        {
          "kind": "その他",
          "text": "Auto-update binary downloads now stream to disk instead of buffering in memory, cutting the updater's peak memory usage by roughly 400 MB"
        },
        {
          "kind": "その他",
          "text": "Background task notifications now explicitly state that no human input has occurred, preventing fabricated in-transcript approvals from being acted on"
        },
        {
          "kind": "改善",
          "text": "Improved agent view: sessions that edit, merge, comment on, or push to an existing PR now link it in claude agents"
        },
        {
          "kind": "改善",
          "text": "Improved agent view: rows now show a colored state word and a classifier-written headline instead of raw tool call text, and the peek opens with full status including the exact ask for blocked sessions"
        },
        {
          "kind": "修正",
          "text": "/doctor is now a full setup checkup that can diagnose and fix issues; /checkup is its alias"
        },
        {
          "kind": "その他",
          "text": "Reserved the \"Claude Browser\" MCP server name (alongside \"Claude Preview\") ahead of the Claude Desktop pane rename; user-configured MCP servers can no longer register under either name"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork VM-mode local-agent sessions failing to start with \"Not logged in · Please run /login\" on CLI 2.1.203+"
        }
      ]
    },
    {
      "version": "2.1.204",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed hook events not streaming during SessionStart hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook"
        }
      ]
    },
    {
      "version": "2.1.203",
      "items": [
        {
          "kind": "追加",
          "text": "Added a warning when your login is about to expire, so you can re-authenticate before background sessions are interrupted"
        },
        {
          "kind": "追加",
          "text": "Added a grey ⏸ badge to the footer when in manual permission mode, making the active mode always visible"
        },
        {
          "kind": "追加",
          "text": "Added the session's additional working directories to MCP roots/list, with notifications/roots/list_changed sent when the set changes"
        },
        {
          "kind": "修正",
          "text": "Fixed opening or switching background agent sessions on macOS stalling for 15–20 seconds due to a false low-memory detection (regression in 2.1.196)"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions becoming permanently unresponsive to attach, replies, and stop when the daemon's session token went stale — the session now recovers automatically"
        },
        {
          "kind": "修正",
          "text": "Fixed returning to claude agents silently stopping running subagents and re-running the prompt from scratch — their work now carries over"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory and per-turn CPU regression in interactive sessions: the context-usage indicator no longer re-analyzes the entire transcript after every turn"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents inheriting a stale PATH from the daemon instead of the dispatching shell, causing missing tools on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed background and agent-view sessions dropping a shell-exported ANTHROPIC_BASE_URL, which sent API keys to the default endpoint and failed with 401"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash failing with \"argument list too long\" in repos with many git worktrees"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated subagents sometimes running shell commands in the parent checkout instead of their own worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree creation rejecting nested repositories in multi-repo workspaces, leaving background sessions unable to isolate and edit"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents crash-looping when their working directory was deleted, replaced by a file, or became an invalid path — they now fail once with a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed a background daemon auto-upgrade failure silently killing all running background sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed TaskStop and TaskOutput failing to find background agents spawned by another agent — errors now list running agents by id and description"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude agents composer discarding your typed message when a slash command isn't available there"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent list crashing when opening a stopped session whose conversation was already open in another session"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions showing \"Needs input\" in the agent list after the question was already answered"
        },
        {
          "kind": "修正",
          "text": "Fixed background agent startup failures showing only \"exit_with_message\" instead of the actual error"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions ignoring effortLevel changes in settings.json when forked through the daemon"
        },
        {
          "kind": "修正",
          "text": "Fixed attached background sessions ignoring CLAUDE_CODE_DISABLE_MOUSE and CLAUDE_CODE_DISABLE_MOUSE_CLICKS opt-outs"
        },
        {
          "kind": "修正",
          "text": "Fixed /exit incorrectly warning about running background agents after all named agents had completed"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions started from a non-git directory unable to edit files when a WorktreeCreate hook was configured"
        },
        {
          "kind": "修正",
          "text": "Fixed the @ directory picker in claude agents not showing registered git worktrees"
        },
        {
          "kind": "修正",
          "text": "Fixed background task output on Windows being permanently replaced by an empty file after /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed content jumping when scrolling up through long transcript history"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal flickering and jumping while typing in bash mode when a shell-history suggestion was shown"
        },
        {
          "kind": "修正",
          "text": "Fixed literal ^[[I / ^[[O escape codes being printed when reattaching to a background session"
        },
        {
          "kind": "修正",
          "text": "Fixed LSP-only plugins being incorrectly flagged for disuse when their language servers deliver diagnostics or answer navigation requests"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness while long responses stream: live-preview updates no longer re-render the whole screen"
        },
        {
          "kind": "改善",
          "text": "Improved subagent behavior: agents are now less likely to re-delegate their entire task to another subagent"
        },
        {
          "kind": "改善",
          "text": "Reduced binary size by ~7 MB and startup memory by ~7 MB by loading a large bundled dependency lazily instead of inlining it"
        },
        {
          "kind": "変更",
          "text": "Changed left arrow to no longer close the background tasks, diff, and workflow detail views — press Esc instead"
        },
        {
          "kind": "変更",
          "text": "Changed the empty claude agents view to always show the organized sections (Needs input / Working / Completed) with descriptions"
        },
        {
          "kind": "変更",
          "text": "Removed the startup \"claude command missing or broken\" warnings — they now appear in /doctor and /status instead"
        },
        {
          "kind": "変更",
          "text": "Removed a redundant navigation hint from the claude agents footer"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Settings toggle for \"Enable Remote Control for all sessions\""
        }
      ]
    },
    {
      "version": "2.1.202",
      "items": [
        {
          "kind": "追加",
          "text": "Added a \"Dynamic workflow size\" setting in /config for controlling how large Claude generally makes dynamic workflows (small/medium/large agent counts) — an advisory guideline, not an enforced cap"
        },
        {
          "kind": "追加",
          "text": "Added workflow.run_id and workflow.name OpenTelemetry attributes to telemetry emitted by workflow-spawned agents, so a workflow run's activity can be reconstructed from OTel data"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash in the inline Ctrl+R history search when accepting or cancelling while the search was still scanning the history file"
        },
        {
          "kind": "追加",
          "text": "Fixed /rename on background sessions being reverted when the job restarts, which broke addressing the session by its new name"
        },
        {
          "kind": "修正",
          "text": "Fixed transient mTLS handshake failures when settings were re-applied during an in-place client certificate rotation"
        },
        {
          "kind": "修正",
          "text": "Fixed commands sent from Remote Control (mobile/web) into an interactive session failing with \"Unknown command\""
        },
        {
          "kind": "修正",
          "text": "Fixed images and files sent from the Remote Control mobile or web app without a caption being silently dropped"
        },
        {
          "kind": "修正",
          "text": "Fixed the sign-in URL printed by claude auth login and claude mcp login --no-browser not being reliably clickable when it wraps over SSH — it is now emitted as a single hyperlink"
        },
        {
          "kind": "修正",
          "text": "Fixed opening a chat from claude agents sometimes failing with \"currently running as a background agent\" followed by a worker crash/respawn loop"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow scripts with unicode quote escapes in strings being corrupted before parsing; workflow parse errors now show the offending line instead of always blaming TypeScript"
        },
        {
          "kind": "修正",
          "text": "Fixed voice dictation retrying in an unbounded loop when the microphone or audio recorder fails — repeated capture failures now pause voice input"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-control sessions showing the wrong permission mode in the mobile and web apps"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session by name, or opening the resume picker, taking minutes and using a large amount of memory in repositories with many git worktrees"
        },
        {
          "kind": "修正",
          "text": "Fixed installer and updater downloads failing immediately with \"aborted\" when a proxy or network drops the connection mid-download — transient connection drops now retry"
        },
        {
          "kind": "修正",
          "text": "Fixed re-invoking an already-loaded skill appending a duplicate copy of its instructions to context"
        },
        {
          "kind": "改善",
          "text": "Improved /workflows agent list layout: wider titles, a dedicated time column, shorter model names, and no per-row tool-call counts"
        },
        {
          "kind": "改善",
          "text": "Improved MCP error messages: clearer error when a server config has url but no type, suggesting \"type\": \"http\" instead of the misleading \"command: expected string\""
        },
        {
          "kind": "変更",
          "text": "Changed /review <pr> back to a fast single-pass review; use /code-review <level> <pr#> for the multi-agent review at a chosen effort level"
        }
      ]
    },
    {
      "version": "2.1.201",
      "items": [
        {
          "kind": "その他",
          "text": "Claude Sonnet 5 sessions no longer use the mid-conversation system role for harness reminders"
        }
      ]
    },
    {
      "version": "2.1.200",
      "items": [
        {
          "kind": "変更",
          "text": "Changed AskUserQuestion dialogs to no longer auto-continue by default; opt into an idle timeout via /config"
        },
        {
          "kind": "変更",
          "text": "Changed the \"default\" permission mode to \"Manual\" across the CLI, --help, VS Code, and JetBrains; --permission-mode manual and \"defaultMode\": \"manual\" are accepted alongside default"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash at startup when disabledMcpServers or enabledMcpServers in .claude.json is set to a non-array value"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions silently stopping mid-turn after sleep/wake or when reopening a stalled session"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions re-running a turn cancelled with Esc after a stall respawn"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents never starting again after a crash left a stale daemon.lock whose PID the OS reused"
        },
        {
          "kind": "修正",
          "text": "Fixed background-agent daemon handover so a reinstalled older build can no longer take over the daemon; build recency is now judged by the version's embedded build timestamp"
        },
        {
          "kind": "修正",
          "text": "Fixed background-agent roster issues: transient corruption permanently disabling orphan cleanup, older binaries not preserving fields written by newer versions, and socket auth tokens being stripped during daemon restarts"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents cut off by a rate limit before producing any text output returning an empty result instead of failing cleanly"
        },
        {
          "kind": "修正",
          "text": "Fixed control bytes from background-agent output reaching the terminal in the agent view"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents --plugin-dir <dir> not showing the plugin's agents and skills in the agent view when the flag is placed after agents"
        },
        {
          "kind": "修正",
          "text": "Fixed project-scoped plugins not loading correctly from git worktrees of the same repository"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp server list not tracking focus for screen readers and magnifiers"
        },
        {
          "kind": "修正",
          "text": "Fixed voice dictation showing a misleading \"Voice connection failed\" message when a recording captures no audio"
        },
        {
          "kind": "修正",
          "text": "Fixed rendering flicker under tmux 3.4+ by enabling synchronized terminal output"
        },
        {
          "kind": "改善",
          "text": "Improved screen-reader output: decorative glyphs are now hidden, transcript symbols read as short labels, and nested tables read as Header: value. lines"
        },
        {
          "kind": "改善",
          "text": "Improved the install script to explain when installation is killed by the system running out of memory"
        }
      ]
    }
  ]
};
