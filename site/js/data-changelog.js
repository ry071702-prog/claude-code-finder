/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.241",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.240",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.239",
      "items": [
        {
          "kind": "その他",
          "text": "Cost estimates (/cost, status line, --max-budget-usd) now include the 1.1× US-only-inference premium for data-residency workspaces"
        },
        {
          "kind": "追加",
          "text": "Added the one-time fullscreen renderer offer on Bedrock, Vertex, Foundry and other previously excluded setups; new installs there now start in fullscreen"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api upgrade to migrate Python projects from anthropic 0.x to 1.x, and updated the skill's Python reference for 1.x (timeouts use anthropic.Timeout, not httpx.Timeout)"
        },
        {
          "kind": "その他",
          "text": "Cloud sessions: plugins synced from claude.ai now show as name@synced, work with claude plugin enable/disable <name>@synced, and never override a same-named plugin you installed"
        },
        {
          "kind": "その他",
          "text": "Alpine/musl builds: native image paste, clipboard, and audio-capture add-ons now load (musl-built binaries instead of glibc ones refused by the runtime)"
        },
        {
          "kind": "その他",
          "text": "The usage-limit message shown when your monthly spend limit is already used up now also says when your session or weekly limit resets"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock streaming behind proxies that strip the response Content-Type header, which silently doubled billed API calls by re-running every turn non-streaming"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code hanging at startup behind an HTTPS proxy when using Bedrock with an SSO profile and awsAuthRefresh — the credential pre-check now honors HTTPS_PROXY"
        },
        {
          "kind": "修正",
          "text": "Fixed a raw crash dump when starting Claude Code from a directory that no longer exists; it now prints a clear message"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit and Write calls pausing for about 5 seconds in JetBrains IDE terminals when the Claude Code plugin is connected"
        },
        {
          "kind": "修正",
          "text": "Fixed a race where pressing Esc with a prompt queued could let the next turn finish early, leaving the session idle while Claude was still working and letting a later resubmit repeat actions"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch retaining expired page content in memory for the whole session instead of the intended 15 minutes"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions (Claude Code on the web, desktop and mobile apps) resuming out of plan mode after an idle worker restart"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP elicitation forms taller than the terminal being clipped in fullscreen mode: the form now fits the window, with hidden fields reachable by scrolling and Accept/Decline always visible"
        },
        {
          "kind": "修正",
          "text": "Fixed remote MCP servers staying failed after a transient 5xx on a mid-session reconnect in cloud sessions or via SDK setMcpServers()"
        },
        {
          "kind": "修正",
          "text": "Fixed custom session titles disappearing from /resume after more than ~64 KB of conversation was written following the rename"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -c/resume picking up sessions from a different directory whose path differed only by characters like _, -, or ."
        },
        {
          "kind": "修正",
          "text": "Fixed /resume and the agents view showing a session as recently changed (and reordering it) when only its file was touched or it was merely reopened"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume in all-projects mode telling you to cd into a deleted directory (e.g. a removed worktree); such sessions now resume in the current directory"
        },
        {
          "kind": "修正",
          "text": "Fixed the dark-ansi theme rendering expanded tool results in fullscreen mode with text the same color as the background"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen renderer prompt reappearing on every launch when it could never be answered; it now stops after being shown on three launches"
        },
        {
          "kind": "修正",
          "text": "Fixed .worktreeinclude patterns starting with **/ silently matching nothing when the target lived in a gitignored directory"
        },
        {
          "kind": "修正",
          "text": "Fixed agents, skills, and commands whose .md file starts with a UTF-8 BOM being silently ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed /insights echoing literal <message> tags in its response on some models"
        },
        {
          "kind": "修正",
          "text": "Fixed marketplace metadata.pluginRoot having no effect: bare plugin source names now resolve under it as the docs describe"
        },
        {
          "kind": "修正",
          "text": "Fixed mouse movement in browser-based terminals inserting text like \"35;150;7M\" into the prompt when a mouse report arrived split across writes"
        },
        {
          "kind": "修正",
          "text": "Fixed custom theme overrides for the effort/ultracode status badge colors being ignored"
        },
        {
          "kind": "追加",
          "text": "Fixed OpenTelemetry trace fragmentation: tool executions deferred by a PreToolUse hook now resume in the original turn's trace instead of starting a new trace"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode in the agent view: Escape now switches to NORMAL mode and keeps your text instead of clearing the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed the selection:copy keybinding silently dropping a text selection that had been extended with Shift+Arrow keys"
        },
        {
          "kind": "修正",
          "text": "Fixed the /voice startup tip still appearing after voice dictation was enabled via the voice.enabled setting"
        },
        {
          "kind": "修正",
          "text": "Fixed shell-mode (!) Tab completion dropping the ./ from a ./script path, which left a command the shell couldn't run"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode answering a permission prompt or pressing a button when you clicked the terminal window only to bring it back into focus"
        },
        {
          "kind": "修正",
          "text": "Fixed slash-command panels (e.g. /config, /model) in fullscreen mode covering the latest messages; the conversation now stays pinned above the panel"
        },
        {
          "kind": "修正",
          "text": "Fixed the /workflows detail dialog overflowing the terminal and losing its header off-screen when opened while Claude is still responding"
        },
        {
          "kind": "修正",
          "text": "Fixed the Linux sandbox making a nonexistent .git/config.worktree unreadable, which broke every sandboxed git command in repos with extensions.worktreeConfig set"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks failing with \"posix_spawn ENOENT\" after the session's working directory was deleted; they now run from the project root or home directory instead"
        },
        {
          "kind": "修正",
          "text": "Fixed claudeMdExcludes not excluding a symlinked .claude/rules file when the pattern names the rules directory or the symlink rather than its target"
        },
        {
          "kind": "修正",
          "text": "Fixed runaway session-title syncing to Remote Control when two Claude Code processes shared one background job's state (2.1.232 regression); title updates are now deduplicated and rate-limited"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions whose title starts with / being unaddressable by SendMessage and shown as \"(untitled)\" in ListAgents"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+W, Ctrl+U, Ctrl+K, Option+Backspace, Option+D and vim df/dt leaving a broken [Pasted text #N] placeholder when the cursor was inside it"
        },
        {
          "kind": "修正",
          "text": "Fixed masked (password-style) inputs such as the login code field letting their text be pasted back with Ctrl+Y elsewhere or saved to prompt history when cleared with double Esc"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+Backspace deleting one character instead of a word in search boxes"
        },
        {
          "kind": "修正",
          "text": "Fixed a request rejected by an organization policy check being re-sent before the rejection was shown"
        },
        {
          "kind": "追加",
          "text": "Improved the reminder shown after compaction so a skill's original arguments are not re-run as a new request"
        },
        {
          "kind": "その他",
          "text": "Long file paths on tool-use rows now truncate in the middle to stay on one line"
        },
        {
          "kind": "その他",
          "text": "Remote sessions keep sending keep-alives while a long SessionStart or Setup hook runs, so the container is not idle-reaped mid-hook"
        },
        {
          "kind": "その他",
          "text": "/goal: repeat check-ins on long-running background work now back off (30 min, then 1 h, then every 2 h) instead of repeating every 30 minutes"
        },
        {
          "kind": "その他",
          "text": "/goal: resuming a session from the claude --resume picker now restores its active goal"
        },
        {
          "kind": "その他",
          "text": "ListAgents now tells a session its own name (the one peers use to message it), and SendMessage to your own name says so instead of \"no agent named …\""
        },
        {
          "kind": "その他",
          "text": "ListAgents and /list-agents now list your live teammates (previously only subagents and other sessions appeared, so a reachable teammate looked absent)"
        },
        {
          "kind": "その他",
          "text": "keybindingFlavor: \"readline\" now also matches Bash for word keys: Alt+F and Ctrl/Option+→ stop at the end of the word, Alt+D deletes to it (Ctrl+Y pastes it back), and punctuation separates words"
        },
        {
          "kind": "その他",
          "text": "Persistent retry mode (CLAUDE_CODE_RETRY_WATCHDOG) now fails immediately on organization spend-limit and out-of-credits errors instead of waiting indefinitely for a reset"
        },
        {
          "kind": "その他",
          "text": "Claude in Chrome: /clear now closes the session's Chrome tab group, and empty groups are closed on /resume and when Claude Code exits"
        },
        {
          "kind": "その他",
          "text": "Remote sessions: images uploaded from mobile now include their saved file path, so Claude can copy them into files it creates"
        },
        {
          "kind": "その他",
          "text": "Claude Code on the web: requests from Bash and other tools to non-API anthropic.com hosts (e.g. www, docs) now go through the session's network proxy, so your environment's allowed domains apply"
        },
        {
          "kind": "その他",
          "text": "Remote Control: clearer message and claude doctor wording when Remote Control isn't enabled for your account"
        },
        {
          "kind": "その他",
          "text": "Windows: cross-session messaging is now available, so Claude Code sessions across your machines can message each other with SendMessage and find each other with ListAgents, as on macOS and Linux"
        },
        {
          "kind": "その他",
          "text": "[VSCode] \"View usage\" in the usage-limit banner now sits inline with the warning text instead of floating mid-banner"
        }
      ]
    },
    {
      "version": "2.1.238",
      "items": [
        {
          "kind": "追加",
          "text": "Added a keybindingFlavor setting: set it to \"readline\" to make Ctrl+W in the prompt delete back to the previous whitespace, as in Bash; the default (\"classic\") is unchanged"
        },
        {
          "kind": "その他",
          "text": "Plugin marketplaces: headersHelper on a url marketplace or a catalog entry runs a command that mints HTTP headers (e.g. a short-lived token) for catalog and same-origin archive fetches"
        },
        {
          "kind": "その他",
          "text": "A catalog entry's headersHelper runs only when you install or update that plugin, after its command is shown; claude plugin install/update ask [y/N] (or pass -y)"
        },
        {
          "kind": "追加",
          "text": "Added claude self-hosted-runner --defer-shutdown-max-min <minutes>: on SIGTERM, keep serving attached sessions, park what is left after that many minutes, then exit"
        },
        {
          "kind": "追加",
          "text": "Added claude self-hosted-runner --proxy-authorization-command / --proxy-authorization-file for egress proxies that require a freshly issued Proxy-Authorization header on every connection"
        },
        {
          "kind": "修正",
          "text": "Fixed unbounded memory growth in long interactive sessions: subagent tool results are now released once they leave the recent display window"
        },
        {
          "kind": "修正",
          "text": "Fixed custom, project, and plugin output styles drifting back to the default voice mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION=true not keeping prompt suggestions on when your account is near, but not over, its usage limit"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolation Bash refusals telling you to remove a redirect when the command had none"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runners occasionally being removed by the server after a single slow or lost poll request, handing their healthy session to another runner"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP elicitation dialogs showing nothing for URLs longer than 4,096 characters, and permission prompts dropping the \"don't ask again\" option when the project path didn't fit the terminal width"
        },
        {
          "kind": "修正",
          "text": "Fixed leftover /tmp/claude-*-cwd files when a Bash command is killed, times out, or is interrupted"
        },
        {
          "kind": "修正",
          "text": "Fixed held Backspace being ignored on terminals that send Ctrl+H for Backspace when keystrokes arrive in large bursts (slow SSH/mosh links)"
        },
        {
          "kind": "修正",
          "text": "Fixed text-wrapping in permission prompt diffs: lines containing wide multi-code-point characters (such as emoji) or tabs are no longer clipped"
        },
        {
          "kind": "修正",
          "text": "Fixed killing a suspended (Ctrl+Z) session sometimes leaving the terminal in bracketed-paste mode with the cursor hidden"
        },
        {
          "kind": "修正",
          "text": "Fixed stdio MCP servers receiving a server/discover request before initialize, forcing lazy servers to start their backend on every session open"
        },
        {
          "kind": "修正",
          "text": "Fixed a proxy's refusal of a connection being reported as a generic network error instead of naming the proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model and /effort cache-miss warning appearing when the prompt cache had already expired"
        },
        {
          "kind": "修正",
          "text": "Fixed per-task Stop from the Remote Control tasks panel doing nothing on CLI-hosted sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed remote sessions exiting when a client delivered a user message without a valid role"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions started by claude remote-control inheriting session-scoped environment variables from the launching shell"
        },
        {
          "kind": "修正",
          "text": "Fixed a Remote Control session whose process crashed staying unavailable until claude remote-control was restarted; it can now be reused when you next message it"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control messages sent from the web or Desktop while Claude is mid-turn disappearing from the transcript after the turn finishes"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control model picks made on a phone or web not updating the model shown in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control disconnecting with \"login expired\" when a brief network hiccup delays renewing your sign-in; it now retries and stays connected"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control reporting a failed reconnect on sign-out; signing out now ends the session with a clear message"
        },
        {
          "kind": "修正",
          "text": "Fixed ListAgents/SendMessage reporting \"Remote Control is not connected\" in sessions run by claude remote-control (server mode) or Desktop/IDE hosts; they now list and reach Remote Control peers"
        },
        {
          "kind": "修正",
          "text": "Fixed ListAgents and SendMessage exposing the idle worker that the agent view pre-warms for your next background session; it now appears only once a task claims it"
        },
        {
          "kind": "その他",
          "text": "Cross-session messaging: sending to a session on this machine that refuses inbound messages (e.g. crossSessionInbound: \"refuse\") now reports \"refused\" to the sender instead of a silent success"
        },
        {
          "kind": "その他",
          "text": "Cross-session messaging: a session whose inbox drops your messages (rate limit or full queue) now tells your session, instead of the messages vanishing silently"
        },
        {
          "kind": "改善",
          "text": "Improved startup: bare claude starts sooner on macOS"
        },
        {
          "kind": "改善",
          "text": "Improved Bash tool permission checking for zsh-specific syntax in shell conditionals"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control connection resilience: brief HTTP 403 refusals from a network edge, VPN, or proxy are now tolerated for up to 3 minutes, with the refusing party named when a block persists"
        },
        {
          "kind": "改善",
          "text": "Improved startup responsiveness: the automatic update check now runs about 10 seconds after launch instead of competing with startup for CPU"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled claude-api skill for the Managed Agents Aug 19 release: web search/fetch domain settings and memory stores on self-hosted sandboxes"
        },
        {
          "kind": "変更",
          "text": "Changed Ctrl+L and Cmd+K in fullscreen to always just repaint — the double-press /clear shortcut was removed, and 1-row nvim terminals no longer trigger automatic /clear loops"
        },
        {
          "kind": "変更",
          "text": "Changed claude mcp list and claude mcp get to show disabled servers as ⊘ Disabled instead of connecting to them for a health check"
        },
        {
          "kind": "その他",
          "text": "MCP headersHelper in a project .mcp.json, and inline MCP servers in project or --add-dir agent files, now require that folder's trust dialog to have been accepted (also under claude -p)"
        },
        {
          "kind": "その他",
          "text": "MCP headersHelper from a project .mcp.json, plugin, or agent file runs without inherited credential env vars; user, managed and claude.ai-scope helpers now run from the Claude config dir"
        }
      ]
    },
    {
      "version": "2.1.237",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed prompt caching for sessions using an LLM gateway or custom base URL"
        },
        {
          "kind": "追加",
          "text": "Added a built-in \"Concise\" output style: Claude leads with results and skips preamble and narration, while doing the work just as thoroughly. Select it under Output style in /config."
        }
      ]
    },
    {
      "version": "2.1.236",
      "items": [
        {
          "kind": "追加",
          "text": "Added ANTHROPIC_DEFAULT_MODEL environment variable: sets the model new sessions start on, while a /model pick still overrides it and persists across restarts (unlike ANTHROPIC_MODEL)"
        },
        {
          "kind": "追加",
          "text": "Added notify_when_idle to cross-session SendMessage: ask another Claude Code session on this machine to send one notice when it next goes idle — opt-in, one-shot, no polling (macOS and Linux)"
        },
        {
          "kind": "その他",
          "text": "Sandbox: on macOS, wildcard read-deny rules (e.g. **/.env) now take precedence inside allowed read regions, cover matched directories' contents, and can't be bypassed by renaming the denied file"
        },
        {
          "kind": "修正",
          "text": "Fixed clipboard copy, background housekeeping, background sessions, and local MCP logs breaking after the directory a session had switched into was removed (since 2.1.229)"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen renderer failing permanently after a single failed start: it now falls back to the classic renderer instead of exiting on every subsequent launch"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker rendering taller than the terminal: it now shows only as many models as fit the window, with the rest reachable by scrolling"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage calls being rejected when a malformed closing tag left the message text inside the summary field"
        },
        {
          "kind": "修正",
          "text": "Fixed unhandled promise rejections when a subprocess fails to start, for example powershell.exe on WSL with Windows interop disabled (regression in 2.1.234)"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode sometimes not showing a newly sent message until the next update after the terminal was resized"
        },
        {
          "kind": "修正",
          "text": "Fixed a blank band that could remain above the prompt after clearing a multi-line prompt, and panes not repainting after resizing the terminal away and back, in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the managed-settings approval prompt sometimes not appearing at startup while still capturing the first keypress as approval"
        },
        {
          "kind": "修正",
          "text": "Fixed terminal tab titles jumping in tmux (iTerm tmux integration): the title is now written only when its text changes instead of animating every 960ms"
        },
        {
          "kind": "修正",
          "text": "Fixed an unclear error when the cloud environments list came back empty or malformed"
        },
        {
          "kind": "修正",
          "text": "Fixed the Fable 5 first-time usage-credits prompt auto-selecting the fallback model after 60 seconds with no answer when using Remote Control"
        },
        {
          "kind": "修正",
          "text": "Fixed spinner tips never appearing, with a repeated background error, when the cached guest-pass reward in ~/.claude.json was malformed"
        },
        {
          "kind": "修正",
          "text": "Fixed skills hot-reload in SDK/VS Code sessions raising an error on every skills change after the session's working directory was deleted (2.1.229+)"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner sessions released on idle, retire, or startup timeout occasionally resuming on another runner before the post-session hook had finished"
        },
        {
          "kind": "修正",
          "text": "Fixed the Clawd mascot's eyes and feet rendering unevenly in iTerm2 at some font sizes"
        },
        {
          "kind": "修正",
          "text": "Fixed occasional runaway session recaps: recap text (automatic and /recap) is now capped at 400 characters, cut at a word boundary"
        },
        {
          "kind": "改善",
          "text": "Improved startup performance: the session counter is now written in the background"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: Monitor allow rules are now set aside while auto mode is active, so Monitor commands are reviewed the same way Bash commands are"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode on Bedrock, Vertex AI, and Foundry, and when telemetry is disabled: the classifier now uses the same defaults as on the Claude API, including severity-scored classification"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: the git status check can no longer be fooled by a repo's status.showUntrackedFiles=no setting into reporting a clean tree"
        },
        {
          "kind": "追加",
          "text": "Changed the /model picker to highlight only the newest model's name, so the highlight marks the new release rather than an arbitrary subset of the list"
        },
        {
          "kind": "その他",
          "text": "/goal: an idle session whose goal is parked behind long-running background work now checks in automatically after 30 minutes (then 1h, 2h) instead of waiting for you to return"
        },
        {
          "kind": "その他",
          "text": "/usage now shows the usage-credits spend row for Team and Enterprise members, and shows a capped row at 0% before anything is spent"
        },
        {
          "kind": "その他",
          "text": "SIGTERM in print/SDK mode no longer records an interrupted turn or synthetic tool denials before exiting; running commands are still terminated and the process still exits with code 143"
        },
        {
          "kind": "その他",
          "text": "Pressing Enter on a slash-command typo or a command unavailable in this session now reports it instead of running the closest fuzzy match; prefixes and aliases still run"
        },
        {
          "kind": "その他",
          "text": "Remote Control now marks a session offline within seconds when the CLI exits or its terminal closes"
        },
        {
          "kind": "その他",
          "text": "SendMessage now refuses further messages to a session up front once a rapid burst would exceed what that session's inbox accepts, instead of reporting them sent while they were dropped"
        },
        {
          "kind": "その他",
          "text": "Aligned the session title chip on the prompt border with the footer's right edge"
        },
        {
          "kind": "その他",
          "text": "Right-aligned footer items (goal indicator, session state, background agent status) and truncated notices now share a consistent right margin with the rest of the prompt area"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added screen reader support for the transcript: live announcements for replies, permission requests, errors, and status changes, plus per-turn heading navigation"
        }
      ]
    },
    {
      "version": "2.1.235",
      "items": [
        {
          "kind": "追加",
          "text": "Added an optional spellcheck setting that underlines misspelled words in the prompt input as you type, using your installed aspell, hunspell, or ispell"
        },
        {
          "kind": "修正",
          "text": "Fixed whole-prompt-cache invalidation when a language server disconnected or reconnected mid-session"
        },
        {
          "kind": "追加",
          "text": "Fixed nested markdown list items misaligning at depth 3+ and added a hanging indent to wrapped list items in the terminal UI"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt input highlights (slash commands, keywords, mentions) appearing shifted by one or more characters in some multi-line prompts"
        },
        {
          "kind": "修正",
          "text": "Fixed Shift+Tab inside the permission prompt's comment field approving the edit and granting session-wide edit permission instead of closing the field"
        },
        {
          "kind": "修正",
          "text": "Fixed the Agent tool advertising a general-purpose default in sessions where that agent is unavailable: an omitted subagent_type there now gets a clear error listing the available agents"
        },
        {
          "kind": "修正",
          "text": "Fixed notebook cell delete/replace approval dialogs silently omitting the existing cell content when the notebook or cell could not be read; the dialog now says why"
        },
        {
          "kind": "修正",
          "text": "Fixed slash commands run while Claude is responding showing HTML entities instead of the actual characters"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt footer not showing the \"Update installed\" restart notice after a background auto-update"
        },
        {
          "kind": "修正",
          "text": "Fixed the expanded task list (ctrl+t) always starting collapsed when resuming or relaunching into a session that still has open tasks"
        },
        {
          "kind": "改善",
          "text": "Improved memory and CPU usage while cloud sessions such as /ultrareview or /autofix-pr run in the background — their event streams are no longer re-scanned and re-rendered on every update"
        },
        {
          "kind": "改善",
          "text": "Improved permission dialogs: display text and \"don't ask again\" options now always match what a grant would cover, and \"don't ask again\" is withheld when contents cannot be fully displayed"
        },
        {
          "kind": "修正",
          "text": "Improved the embedded grep in native macOS/Linux builds: pathological patterns now fail fast instead of exhausting memory, and -m N with -A/-C prints correct context"
        },
        {
          "kind": "改善",
          "text": "Improved the context-limit error to say when auto-compact is off and point to /config to re-enable it"
        },
        {
          "kind": "その他",
          "text": "Vim mode: NORMAL mode and cursor position are now preserved when toggling the detailed transcript (ctrl+o) or closing a panel"
        },
        {
          "kind": "その他",
          "text": "Dialogs: arrow keys and Enter pressed in quick succession now select the option you navigated to instead of the previously highlighted one"
        },
        {
          "kind": "その他",
          "text": "SendMessage now refuses messages too large for cross-session delivery up front instead of silently dropping them"
        },
        {
          "kind": "その他",
          "text": "Remote Control: claude rc now applies the same enterprise-gateway availability check as interactive startup"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed focus jumping between open Claude tabs on its own when a window with several Claude panels is restored or reloaded"
        }
      ]
    },
    {
      "version": "2.1.234",
      "items": [
        {
          "kind": "追加",
          "text": "Added the optional CLAUDE_CODE_PROJECT_DIR_NAME environment variable: hosts that give each session its own config directory can choose a short name for the per-project transcript directory"
        },
        {
          "kind": "追加",
          "text": "Added the selection:clear keybinding action, so a key can be bound to clear an in-app text selection; also works in the agents view"
        },
        {
          "kind": "追加",
          "text": "Added a GitLab merge request badge to the footer and statusline: repos with a GitLab remote and an authenticated glab CLI show MR !N with draft/pending/green states"
        },
        {
          "kind": "その他",
          "text": "Claude Code now continues your session automatically when a claude.ai usage limit resets; turn it off in /config (\"Continue automatically at usage limit\")"
        },
        {
          "kind": "その他",
          "text": "Claude is now told to use your account email only to identify you, and not to send it to unrelated services unless you ask"
        },
        {
          "kind": "その他",
          "text": "Security: remote file reads, session restore, CLAUDE.md includes, workflow scripts and file uploads now reject Windows NT-namespace (\\??\\) paths, hardening the remaining pre-approval file accesses against the NTLM credential-leak vector"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode in very long sessions repeatedly re-checking and denying sandboxed commands' network access after the conversation had been compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed session-scoped permission answers (including denies) being dropped when answering background subagent tool permission prompts"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when an API response on the non-streaming fallback path (typically via third-party gateways) contained a thinking block missing its thinking field or a text block missing its text field"
        },
        {
          "kind": "修正",
          "text": "Fixed markdown rendering becoming extremely slow for some messages containing unusual Unicode sequences"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage rejecting a recipient copied from ListAgents when the session name is at the 200-character cap or emoji-heavy"
        },
        {
          "kind": "修正",
          "text": "Fixed repository detection mis-reading the host of git remotes with unusual userinfo, producing links and repo-specific behavior for the wrong host"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP diagnostics printing resolved secrets: scope-conflict warnings now show the configured ${VAR} form, and connection-failure details show only the server origin"
        },
        {
          "kind": "修正",
          "text": "Fixed strictKnownMarketplaces allowlists accepting SCP-style git marketplace sources whose host differs from the one git would actually connect to"
        },
        {
          "kind": "修正",
          "text": "Fixed modal text such as the /login OAuth URL losing characters when copied in fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed a --- horizontal rule in rendered markdown running into the line after it"
        },
        {
          "kind": "修正",
          "text": "Fixed consecutive shell commands splitting into multiple \"Ran 1 shell command\" rows when todo/task updates were interleaved between them"
        },
        {
          "kind": "修正",
          "text": "Fixed dialogs like /permissions opened while a ! shell command was running being dismissed when the command finished"
        },
        {
          "kind": "修正",
          "text": "Fixed a queued ! shell command being sent to the model as plain text after pressing up-arrow to edit the queued input"
        },
        {
          "kind": "修正",
          "text": "Fixed queued messages reappearing in the prompt history while still queued, Esc while selecting a queued message no longer interrupts the turn, and ! mode no longer sticks after a mid-turn submit"
        },
        {
          "kind": "追加",
          "text": "Fixed accepting the \"Try the new fullscreen renderer?\" prompt restarting the session without its permission mode (e.g. --dangerously-skip-permissions), tool allow/deny rules, model or effort flags"
        },
        {
          "kind": "修正",
          "text": "Fixed /tui dropping launch --allowed-tools/--disallowed-tools rules when it restarts; it now declines to switch, with the reason, when the session has restrictions a restart can't carry over"
        },
        {
          "kind": "修正",
          "text": "Fixed trust prompts omitting the repository-wide scope warning when the directory was first seen before the repository existed there"
        },
        {
          "kind": "追加",
          "text": "Fixed a case where an IDE diff tab closing during a permission re-prompt could answer the new prompt with the previous input"
        },
        {
          "kind": "修正",
          "text": "Fixed: files sent to the user during Remote Control sessions hosted by Claude Code Desktop or VS Code now upload, so they open on phone and web instead of showing an empty card"
        },
        {
          "kind": "修正",
          "text": "Fixed: after /login while CLAUDE_CODE_OAUTH_TOKEN is set, the stale-token reminder no longer leaks into Claude's automatically resumed turn — it now appears only to you"
        },
        {
          "kind": "修正",
          "text": "Fixed: permission previews now relay only to channel servers admitted by the inbound trust gate, and a server's explicit permission-capability opt-out is honored"
        },
        {
          "kind": "修正",
          "text": "Fixed: credential masking on relayed permission previews can no longer hide commands, paths, or destinations from the approver; oversized private-key blocks now redact under full-strength redaction"
        },
        {
          "kind": "修正",
          "text": "Fixed: provider API tokens that mask on permission previews now mask even when directly followed by shell delimiters"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop inter-session messages being silently dropped by the recipient session when cross-session messaging read as disabled, which left the sender's query \"thinking\" for many minutes"
        },
        {
          "kind": "その他",
          "text": "Remote Control: signing this computer in to a different claude.ai account or organization now stops the running session within seconds and says why, instead of a misleading HTTP 404 hours later"
        },
        {
          "kind": "その他",
          "text": "Remote Control sessions started from Claude Code Desktop or VS Code now keep phones and claude.ai/code updated on the session's permission mode (and claude.ai/code on the model) as they change"
        },
        {
          "kind": "その他",
          "text": "Remote Control: effort picks made on a phone or on claude.ai/code now apply to terminal- and Desktop/VS Code-hosted sessions, and the session publishes its effort level to connected clients"
        },
        {
          "kind": "その他",
          "text": "SendMessage and ListAgents now say when your account's session list was too long to check completely, instead of treating unseen sessions as absent"
        },
        {
          "kind": "その他",
          "text": "Expired Anthropic profile credential now points you at /login when a claude.ai login would take precedence"
        },
        {
          "kind": "改善",
          "text": "Improved the transcript: your own prompts now render markdown (highlighted code blocks, inline code, lists) the same way replies do"
        },
        {
          "kind": "改善",
          "text": "Improved the \"API returned an empty or malformed response\" error to say what came back (content type, body kind, size, request ID) and why the original streaming request failed"
        },
        {
          "kind": "修正",
          "text": "Improved auto-generated session titles to read as short, specific names (e.g. \"Login button bug\") rather than sentences restating your request (e.g. \"Fix the login button on mobile\")"
        },
        {
          "kind": "改善",
          "text": "Reduced the context cost of loading the built-in claude-api skill from ~200k+ tokens to ~25k by loading reference docs on demand"
        },
        {
          "kind": "その他",
          "text": "/permissions can now be opened while Claude is working — rule changes apply to the rest of the current turn"
        },
        {
          "kind": "その他",
          "text": "/add-dir <path> can now be used while Claude is working; /add-dir, /autocompact, /theme, /help, /config and /advisor dialogs open mid-turn in the fullscreen TUI"
        },
        {
          "kind": "その他",
          "text": "/goal now clears itself with a notice when a turn dies on an unrecoverable error (e.g. revoked auth, an exhausted credit balance, or a context overflow) instead of staying armed"
        },
        {
          "kind": "その他",
          "text": "/goal: when background tasks keep a goal waiting for 30+ minutes, Claude now checks in on them instead of waiting indefinitely (set CLAUDE_CODE_GOAL_CHECKIN_MINUTES=0 to opt out)"
        },
        {
          "kind": "その他",
          "text": "claude setup-token now rejects unexpected extra arguments instead of silently ignoring them"
        },
        {
          "kind": "変更",
          "text": "Changed Esc in fullscreen mode to no longer clear a mouse text selection: it interrupts or dismisses as usual and the selection stays highlighted"
        },
        {
          "kind": "変更",
          "text": "Removed the redundant \"Allowed by auto mode classifier\" line that auto mode showed under every Agent tool call"
        },
        {
          "kind": "変更",
          "text": "Removed the \"Default teammate model\" setting from /config; agent-team teammates now use the leader's model unless the spawn names one"
        },
        {
          "kind": "その他",
          "text": "Dimmed the elapsed-time counter on the running tool header so it no longer competes with the bold counts"
        },
        {
          "kind": "その他",
          "text": "Background task notifications delivered between turns are now sent to the model inside <system-reminder> tags, matching mid-turn delivery"
        },
        {
          "kind": "その他",
          "text": "Mantle: skip the admin-pin availability probe at startup when a main-loop model is already picked"
        },
        {
          "kind": "その他",
          "text": "Windows: startup no longer stalls on repeated rename retries when ~/.claude.json is read-only"
        }
      ]
    }
  ]
};
