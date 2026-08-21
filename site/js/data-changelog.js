/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
    {
      "version": "2.1.233",
      "items": [
        {
          "kind": "追加",
          "text": "Added GitLab merge request URL support to the --worktree flag and the claude agents view (where MRs display as !N)"
        },
        {
          "kind": "追加",
          "text": "Added an opt-in forward_user_identity apps gateway setting on Anthropic upstreams that sends the signed-in user's identity as headers, so a proxy behind the gateway can attribute spend per user"
        },
        {
          "kind": "追加",
          "text": "Added opt-in memory cgroup support for Bash tool commands on Linux (CLAUDE_CODE_TOOL_MEMORY_LIMIT) so a runaway build can't stall the session"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS environment variable to configure the WebFetch session URL cache TTL (default unchanged: 15 minutes)"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions occasionally being marked as lost when the environment shut down while Claude was waiting on a permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP v2 connections endlessly reopening the subscriptions/listen stream against servers that terminate long-held streams on a fixed timeout (e.g. serverless hosts)"
        },
        {
          "kind": "修正",
          "text": "Fixed Notification hooks not firing for permission prompts when running under Claude Desktop or VS Code"
        },
        {
          "kind": "修正",
          "text": "Fixed idle sessions on Linux sometimes keeping one CPU core at 100% when sandboxing is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed bundled skill aliases like /checkup and /review reporting \"Unknown command\" in -p mode or with plugins/MCP loaded when a user or project skill shadows the bundled skill"
        },
        {
          "kind": "修正",
          "text": "Fixed skill/command argument substitution to prevent argument values from being re-expanded as template markers"
        },
        {
          "kind": "修正",
          "text": "Fixed Windows paths spelled with the NT \\??\\ device prefix bypassing UNC path validation, closing an NTLM credential-leak vector"
        },
        {
          "kind": "改善",
          "text": "Improved claude self-hosted-runner session start time: the session branch is now created without rewriting the working tree, and two server round trips no longer block the agent's launch"
        },
        {
          "kind": "改善",
          "text": "Improved apps gateway error forwarding: 400/413 errors from Vertex, Foundry, and Claude Platform on AWS upstreams now carry the upstream's own message; fixes a bug with auto-compact on apps gateway"
        },
        {
          "kind": "改善",
          "text": "Improved claude plugin validate to check a bare .claude/skills directory, reporting SKILL.md files whose frontmatter fails to parse"
        },
        {
          "kind": "改善",
          "text": "Improved screen reader mode: the /effort selector renders as a numbered list with a typed-number prompt, and hint and dialog text is no longer clipped"
        },
        {
          "kind": "改善",
          "text": "Improved print mode diagnostics: a [claude-code:unrecognized_model] line is written to stderr when a request goes out for a model ID Claude Code doesn't recognize; map it with modelOverrides to silence"
        },
        {
          "kind": "変更",
          "text": "Changed the GitHub app setup tip to no longer appear in repositories whose origin remote is on gitlab.com or bitbucket.org; the enterprise marketplace tip now covers non-GitHub internal git hosts"
        },
        {
          "kind": "その他",
          "text": "Todo/task-tracking tools (TaskCreate/Get/Update/List, TodoWrite) are no longer available on Opus 4.8, Sonnet 5, Fable 5, Mythos 5, and newer models; set CLAUDE_CODE_ENABLE_TODO_TOOLS=1 to bring them back"
        },
        {
          "kind": "修正",
          "text": "Windows: fixed auto mode repeatedly stopping for manual approval on ordinary cd <dir> && <command> > file Bash commands (a 2.1.232 regression)"
        },
        {
          "kind": "その他",
          "text": "Reverted the 2.1.232 Bash permission changes for Cygwin-style symlinks on Windows and for input redirections (< file); a narrower version will return in a later release"
        }
      ]
    },
    {
      "version": "2.1.232",
      "items": [
        {
          "kind": "その他",
          "text": "Subagent forking is now on by default: a subagent_type: \"fork\" subagent inherits the full conversation and prompt cache, and non-teammate agent spawns in interactive sessions now run in the background by default"
        },
        {
          "kind": "その他",
          "text": "Type @ in the prompt to mention another Claude session by name; Claude then uses SendMessage to reach that session directly"
        },
        {
          "kind": "その他",
          "text": "SendMessage now delivers to a bare name that exactly matches one live session, instead of asking to confirm with a ref first"
        },
        {
          "kind": "その他",
          "text": "Interactive sessions on one machine now keep unique names: starting or renaming a session to a name another live session already uses gives it a name-word-word variant and tells you"
        },
        {
          "kind": "追加",
          "text": "Added /config rows for \"Dialog expiry\" and \"Messages from your other sessions\" (cross-session inbound accept/hold/refuse)"
        },
        {
          "kind": "追加",
          "text": "Added secret redaction for GitLab token families (glrt-, gloas-, glptt-, glagent-, glimt-, glsoat-, glcbt-, glft-, glffct-) and full redaction of routable glpat-/gldt- tokens; the glab CLI config store gets the same sandbox and credential-path protection as gh"
        },
        {
          "kind": "追加",
          "text": "Added GitLab support to plugin marketplaces: bare gitlab.com repo URLs (including nested subgroups) now clone like github.com URLs, and clone auth-failure hints name your actual git host"
        },
        {
          "kind": "その他",
          "text": "Settings: additionalMarketplaces and allowedMarketplaces are now accepted as friendlier aliases for extraKnownMarketplaces and strictKnownMarketplaces"
        },
        {
          "kind": "その他",
          "text": "Enterprise policy: a url-typed blockedMarketplaces entry for a bare repo URL keeps blocking that URL when the CLI classifies it as a git clone"
        },
        {
          "kind": "その他",
          "text": "Gateway: the desktop: overlay now accepts every released Desktop setting (was 11 hand-listed keys), validated at boot against Desktop's own schema; unknown or invalid keys fail boot"
        },
        {
          "kind": "その他",
          "text": "Gateway: empty managed.policies[].match.groups/admin.admin_groups entries and malformed email_domain values (empty, or containing @, whitespace, or commas) now fail at boot instead of silently matching no one or granting admin access"
        },
        {
          "kind": "その他",
          "text": "Fable 5 is offered as an advisor in /advisor again for organizations with Fable access, with usage-credits consent set up through /model fable"
        },
        {
          "kind": "修正",
          "text": "Fixed a PowerShell permission bypass where variable-writing parameters could silently overwrite $PSDefaultParameterValues and redirect later commands' file access"
        },
        {
          "kind": "修正",
          "text": "Fixed a Windows permission bypass where Git Bash followed Cygwin-style symlinks that path validation saw as regular files; writes through them now require permission approval"
        },
        {
          "kind": "修正",
          "text": "Fixed nested git repositories inheriting trust from a parent directory; each repository now requires its own trust confirmation"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP connections hanging for the full 30-second connect timeout when a server fails to answer or sends a malformed reply to the protocol-version probe"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions hosted by a bridge inside a cloud session inheriting that session's transcript or credentials"
        },
        {
          "kind": "追加",
          "text": "Fixed Remote Control sessions started from Claude Desktop or an IDE appearing as a new claude.ai session each time the local session was resumed; they now reattach to the existing one"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions appearing unreachable to newly attached clients while idle"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control bridge sessions not restoring conversation history when the session worker restarts"
        },
        {
          "kind": "その他",
          "text": "Remote Control: resuming a conversation whose session was deleted from claude.ai or the app now starts a replacement instead of failing with a message about your login (regressed in v2.1.227)"
        },
        {
          "kind": "修正",
          "text": "Fixed Cloud gateway /login exiting silently or leaving an unresponsive terminal after \"Press Enter to continue\" when managed settings failed to load; the reason is now shown"
        },
        {
          "kind": "修正",
          "text": "Fixed voice mode on native builds getting stuck on \"listening…\" when the voice service rejected the connection; the rejection is now shown immediately"
        },
        {
          "kind": "修正",
          "text": "Fixed mTLS client certificate rotation requiring a restart; Claude Code now reloads the rotated cert and key automatically on connection errors"
        },
        {
          "kind": "修正",
          "text": "Fixed malformed AWS or Vertex region values being used to build request URLs; they now fall back to the default region"
        },
        {
          "kind": "修正",
          "text": "Fixed stream idle timeout errors failing the request instead of recovering on Bedrock, Vertex, and gateway deployments"
        },
        {
          "kind": "修正",
          "text": "Fixed content-sized overlays containing truncated text rendering one column too wide, and start-truncated text collapsing to an ellipsis"
        },
        {
          "kind": "修正",
          "text": "Fixed a stray garbled character where a long shell-command or agent-description preview was cut off mid-emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed a startup race that could silently unregister a plugin marketplace due to concurrent writes to known_marketplaces.json"
        },
        {
          "kind": "修正",
          "text": "Fixed /update and /tui refusing to restart while work that survives the relaunch was running"
        },
        {
          "kind": "修正",
          "text": "Fixed usage-limit guidance suggesting unavailable slash commands in SDK and remote sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the consent message for interactive --advisor fable launches, which told you to run /model fable in an interactive session that had just exited"
        },
        {
          "kind": "改善",
          "text": "Improved fullscreen streaming: long sessions stay responsive because the whole conversation is no longer re-normalized on every update"
        },
        {
          "kind": "改善",
          "text": "Improved the managed settings approval dialog: shows endpoint URLs, uses clearer wording for telemetry-only changes, skips routine OpenTelemetry options, and requires approval for server-managed sandbox binary overrides (sandbox.bwrapPath, sandbox.socatPath, sandbox.ripgrep)"
        },
        {
          "kind": "その他",
          "text": "/feedback and /bug now open immediately when invoked while Claude is responding, instead of waiting for the turn to finish"
        },
        {
          "kind": "その他",
          "text": "/plugin install plugin@marketplace now refreshes the marketplace first, so newly published plugins install without a manual marketplace update"
        },
        {
          "kind": "その他",
          "text": "/code-review at high, xhigh, and max effort now runs in a background agent like the other levels"
        },
        {
          "kind": "その他",
          "text": "Pasted and clipboard images are read without blocking the event loop"
        },
        {
          "kind": "その他",
          "text": "Remote Control now keeps reconnecting for about 30 minutes after a network blip and no longer drops after a few blips spread across an hour"
        },
        {
          "kind": "その他",
          "text": "Remote Control: resuming a conversation no longer silently takes Remote Control away from another Claude Code on the same machine that still has it; run /remote-control there to move it"
        },
        {
          "kind": "変更",
          "text": "Updated agent panel: completed subagents hide immediately with a /tasks footer hint, and the \"↓ N more\" overflow indicator moved left for visibility"
        },
        {
          "kind": "その他",
          "text": "Remote Control: the terminal now says whether a session was taken over by another device, ended from another app, or deleted, and stops suggesting a reconnect that would undo it"
        },
        {
          "kind": "その他",
          "text": "Bash input redirections (< file) are now permission-checked like their argument spellings on all platforms"
        },
        {
          "kind": "その他",
          "text": "Shortened the message shown when resuming a completed background agent"
        },
        {
          "kind": "その他",
          "text": "Cowork sessions no longer inline external @-imports from user-scope memory files"
        },
        {
          "kind": "その他",
          "text": "Hardened the auto-generated cross-session messaging socket directory on shared /tmp: a pre-planted symlink or another user's directory is now refused instead of used"
        },
        {
          "kind": "その他",
          "text": "Hardened the Linux filesystem sandbox against a protected-path bypass"
        },
        {
          "kind": "変更",
          "text": "Changed sandbox.ripgrep to be honored only from user, managed, and --settings settings; project settings can no longer override the sandbox's ripgrep binary"
        },
        {
          "kind": "変更",
          "text": "Removed the startup tip suggesting you create custom subagents, and the matching nudge in the /powerup tour"
        }
      ]
    },
    {
      "version": "2.1.231",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed MCP OAuth sign-in failing with a redirect URI mismatch for servers that use a pre-registered OAuth client, such as Slack"
        }
      ]
    }
  ]
};
