/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.252",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed Bash commands failing with \"task output swap refused (tasks dir moved or linked)\" on some Macs"
        },
        {
          "kind": "修正",
          "text": "Fixed \"always allow\" not saving in a project that has no .claude/settings.local.json yet"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions hosted by Claude Desktop or VS Code stalling for minutes after a tool finished when the connection to claude.ai was degraded"
        },
        {
          "kind": "修正",
          "text": "Fixed background task notifications with very large failure output (for example git errors on a full disk) making the conversation exceed the API request size limit"
        }
      ]
    },
    {
      "version": "2.1.251",
      "items": [
        {
          "kind": "追加",
          "text": "Added PreModelSwitch and PostModelSwitch hook events (block, confirm, or annotate a model switch); SessionStart resume hooks now receive session staleness and the estimated re-cache cost"
        },
        {
          "kind": "追加",
          "text": "Added live streaming of a foreground subagent's tool calls and results to Remote Control clients (background subagents, the default, still show status only)"
        },
        {
          "kind": "追加",
          "text": "Added a Spend limit bar to /usage and a rate_limits.spend_limit status line field for developers behind a Claude apps gateway with spend limits"
        },
        {
          "kind": "追加",
          "text": "Added a per-session prompt-cache line to /cost (hit ratio, misses, tokens re-cached, warm/cold) and a matching prompt_cache object for status line scripts"
        },
        {
          "kind": "追加",
          "text": "Added attach, logs, stop, respawn, and rm to claude --help; the --resume message for a running background session now names the exact claude attach <id> command"
        },
        {
          "kind": "修正",
          "text": "Fixed file tools (Read, Write, Edit) following a symlink swapped inside the working directory after the permission check, which could read or write outside the approved location"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin commands declared in a marketplace entry being able to point outside the plugin directory; such paths are now rejected with a path-traversal error"
        },
        {
          "kind": "修正",
          "text": "Fixed project settings being able to enable detailed beta tracing or raw API body logging, and a lower-scope beta tracing endpoint bypassing an OTLP collector pinned by managed settings or a host app"
        },
        {
          "kind": "修正",
          "text": "Fixed the Workflow tool reading (and quoting in errors) a scriptPath outside what the session may read before the permission check ran"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob not applying Read(...) deny rules to files reached through a symlinked search path"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations getting stuck on \"text content blocks must be non-empty\" errors after a turn where the model produced only thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed the first launch on a fresh install starting in default mode instead of auto mode for accounts whose startup default is auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Opus 5 requests failing with \"effort … is not supported when thinking is disabled\" when effort was xhigh/max and thinking was turned off; effort is now sent as high in that case"
        },
        {
          "kind": "修正",
          "text": "Fixed replying to a message Claude Desktop delivered from another session: SendMessage to that session id now delivers through Claude Desktop instead of failing with \"not reachable\""
        },
        {
          "kind": "修正",
          "text": "Fixed TUI lag with many parallel subagents: per-second progress ticks now replace their predecessor instead of piling up in the transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: a teammate's final answer not reaching the team lead — it now arrives in the idle notification instead of a content-free \"available\" notice"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents being unable to reply to a message from an unnamed sibling or parent agent (from was the agent type, which is not an address)"
        },
        {
          "kind": "修正",
          "text": "Fixed managed-settings disableAutoMode arriving mid-session not moving an already-running auto-mode session back to default mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a \"switch to Opus 1M for 5x more context\" tip that appeared even when the current Opus model already has a 1M context window"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway sessions treating a stored Anthropic profile (e.g. a Console sign-in) as active: listing it in /status and retrying gateway 401s with it, though requests never use it"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions telling Claude the model had changed when the host was only setting the session's initial model"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control reporting a failure when an organization's policy disables it; it now shows a single quiet notice instead"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp reconnect on Remote Control showing a generic withheld-detail error instead of the real remedy when a server was disabled in another session"
        },
        {
          "kind": "修正",
          "text": "Fixed --input-format stream-json: client-injected assistant tool calls sent without a message id were merged into the first one and their results lost, including when resuming older sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed session transcripts being silently overwritten when a directory change relocated a session onto an existing same-ID transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions and their subagents being unable to edit files inside a git worktree they created with git worktree add"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions occasionally starting without any plugin skills (and staying that way) when another Claude Code process was refreshing the plugin marketplace at the same moment"
        },
        {
          "kind": "修正",
          "text": "Fixed selecting text in an opened background session inside tmux over SSH: it now copies to the tmux buffer like a foreground session instead of falling back to OSC 52"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK and cloud sessions hanging indefinitely when an SDK MCP server's handshake acknowledgment was lost; the wait now times out after 70 seconds and marks only that server failed"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner leaving a stuck session's Bash tool processes running after the session was force-stopped"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage-credits for Team and Enterprise members whose admin set the org's usage-credit limit to $0: it now offers to ask the admin instead of saying a cap was reached"
        },
        {
          "kind": "修正",
          "text": "Fixed --worktree --tmux with a merge-request number on a gitlab.com origin trying a doomed GitHub-style fetch first instead of fetching the GitLab ref directly"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+G failing with \"Emacs quit unexpectedly\" in background sessions for editors that open /dev/tty, such as emacs -nw and micro"
        },
        {
          "kind": "修正",
          "text": "Fixed an additionalDirectories entry containing a null byte crashing startup, or breaking /add-dir and later settings updates when it came from an SDK host, IDE, or hook; it is now skipped"
        },
        {
          "kind": "修正",
          "text": "Fixed the MCP server menu's copy shortcut: it now says how the sign-in URL was copied instead of always claiming success"
        },
        {
          "kind": "修正",
          "text": "Fixed italic text (such as the session recap line) rendering as highlighted blocks in GNU screen and in tmux sessions using a screen terminal type"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add --header and claude mcp add-json help text naming the wrong transports"
        },
        {
          "kind": "修正",
          "text": "Fixed claude ultrareview and /ultrareview waiting the full 30 minutes when the cloud session fails to start; they now stop early and report the reason"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving commands that assign an arithmetic expression to an integer shell variable (e.g. OPTIND=1/0, RANDOM=2+2); these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed backgrounded sessions (←, /background, --bg) losing a Vertex/Bedrock gateway (ANTHROPIC_*_BASE_URL + CLAUDE_CODE_SKIP_*_AUTH) exported in the shell, so every request failed"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --bg --model fable on Max plans stopping to ask for usage credits while the interactive session on the same account still had Fable allowance"
        },
        {
          "kind": "修正",
          "text": "Fixed the one-time \"make auto mode your default\" offer appearing in unattended sessions (e.g. agent-team teammate panes), where a stray keypress could accept it unread"
        },
        {
          "kind": "修正",
          "text": "Fixed the managed-settings approval prompt re-appearing after signing in again to the same Claude apps gateway when the settings are unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed disabled /bug and /share reporting that /feedback was disabled; tips, /help, and refusal messages no longer suggest /feedback when an org policy or env var turns it off"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud session creation advising GitHub setup after a transient GitHub connection failure — the message now says to retry instead"
        },
        {
          "kind": "改善",
          "text": "Improved CPU usage during turns in interactive sessions by cutting redundant UI re-renders"
        },
        {
          "kind": "改善",
          "text": "Improved install size: the native binary is about 5 MB smaller"
        },
        {
          "kind": "改善",
          "text": "Improved cloud sessions: when the session's network proxy drops a connection during a Bash command, the tool result now names the host and reason instead of only \"connection reset\""
        },
        {
          "kind": "改善",
          "text": "Improved /schedule to explain that MCP servers configured in Claude Code can't be attached to cloud routines, instead of a bare \"No MCP connectors\" message"
        },
        {
          "kind": "改善",
          "text": "Improved framing of messages from your own subagents: Claude is told the sender is a worker inside this session, not an unrelated Claude session"
        },
        {
          "kind": "改善",
          "text": "Improved the prompt placeholder to read \"Message @name…\" while viewing a background subagent or fork transcript opened from the subagent panel or /tasks"
        },
        {
          "kind": "改善",
          "text": "Improved sanitization of MCP server names in error messages, menus, and command results"
        },
        {
          "kind": "改善",
          "text": "Improved Amazon Bedrock session start under CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST (e.g. Claude Desktop): a session given a Bedrock model ID or ARN no longer waits for inference-profile discovery"
        },
        {
          "kind": "変更",
          "text": "Improved the managed settings approval dialog to list only the settings that changed since you last approved them"
        },
        {
          "kind": "改善",
          "text": "Improved retry when the model's tool call is malformed: the broken output is now dropped from the retry context, including on Bedrock, Vertex, and Foundry"
        },
        {
          "kind": "変更",
          "text": "Changed /radio to be available on Bedrock, Vertex AI, Foundry, and Claude Platform on AWS, and when telemetry is disabled"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome so browser actions always go through Claude Code's permission checks, including in sessions with telemetry disabled, which previously used the Chrome extension's own prompts"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_SUBAGENT_MODEL to set the default subagent model rather than override everything: an agent definition's model: and an explicit per-spawn model now take precedence over it"
        },
        {
          "kind": "変更",
          "text": "Changed the default commit trailer to Co-Authored-By: Claude Code when the active model isn't a recognized Claude model (e.g. third-party models behind a custom ANTHROPIC_BASE_URL)"
        },
        {
          "kind": "変更",
          "text": "Changed the default model for seat-based Enterprise subscriptions to Opus 5, matching other premium plans"
        },
        {
          "kind": "変更",
          "text": "Changed /effort to save your default effort level per model, so each model keeps its own setting when you switch"
        },
        {
          "kind": "変更",
          "text": "Changed analytics to no longer turn off before sign-in solely because managed settings force gateway login (or cannot be read); they stay off once signed in to the gateway or via DISABLE_TELEMETRY"
        },
        {
          "kind": "変更",
          "text": "Changed the footer PR badge on Bedrock, Vertex, and Foundry, and when telemetry is off, to call the GitHub API directly (via gh auth token, GH_TOKEN, or GITHUB_TOKEN) instead of gh pr view"
        },
        {
          "kind": "変更",
          "text": "Changed how Bash command output files are created and read back when commands run in the sandbox, so a sandboxed command cannot redirect or replace them"
        },
        {
          "kind": "変更",
          "text": "Changed plugin/LSP install suggestions and the auto-mode default offer to wait until you've sent or cleared what you're typing, so the Enter that sends your prompt can't answer them"
        },
        {
          "kind": "変更",
          "text": "Changed server-managed settings that terminate sandbox TLS, route sandbox traffic through your own proxy, inject credentials, or weaken sandbox isolation to require approval before they apply"
        },
        {
          "kind": "変更",
          "text": "Changed ANTHROPIC_CUSTOM_HEADERS from managed or project settings to require approval when it sets a credential, org/tenant, routing, or API-behavior header (e.g. Authorization, Host)"
        },
        {
          "kind": "変更",
          "text": "Changed project-level .claude/settings.json env to no longer set CLAUDE_CONFIG_DIR, CLAUDE_CODE_TMPDIR, or TMPDIR/TMP/TEMP; set them in your shell, user, or managed settings instead"
        },
        {
          "kind": "変更",
          "text": "Removed syntax highlighting for six rarely used languages (1c, gml, isbl, mathematica, maxima, sqf); the binary is 2.5 MB smaller"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen's \"Bedrock, Foundry, or Vertex\" button opening the docs at the top of the page instead of the third-party provider setup section"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the Remote Control banner to a footer pill (shown while Remote Control is on or has failed) that opens the session on claude.ai/code; turn it on or off with /remote-control"
        }
      ]
    },
    {
      "version": "2.1.250",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.248",
      "items": [
        {
          "kind": "追加",
          "text": "Added --restricted (or CLAUDE_CODE_RESTRICTED=1): removes the built-in tools that run commands or code and WebFetch (unless named in --tools), keeps file tools inside the working directory, refuses bypassPermissions, and ignores user, project and local settings files"
        },
        {
          "kind": "追加",
          "text": "Added experimental.cacheTtl (\"5m\" or \"1h\") to agent frontmatter: a per-agent prompt cache TTL used when no subagent TTL setting is configured"
        },
        {
          "kind": "追加",
          "text": "Added claude self-hosted-runner --client-label <label> (or SELF_HOSTED_RUNNER_CLIENT_LABEL) to override the label the runner registers with (default: hostname)"
        },
        {
          "kind": "追加",
          "text": "Added server-managed settings diagnostics: a startup warning when the settings fail to load, and a /doctor and /status line explaining a load failure or why they weren't fetched (Bedrock/Vertex/third-party provider, custom ANTHROPIC_BASE_URL)"
        },
        {
          "kind": "追加",
          "text": "Added a warning in /web-setup when the GitHub CLI token lacks the workflow scope, since pushes to very large repositories can be rejected without it"
        },
        {
          "kind": "追加",
          "text": "Added /usage-credits for Enterprise organizations billed through AWS Marketplace, self-serve Enterprise, and Enterprise trials, so members can request a higher usage limit from their admin"
        },
        {
          "kind": "追加",
          "text": "Added cross-session messaging (SendMessage / ListAgents) between sessions on the same machine on Bedrock, Vertex, and Foundry, and when telemetry is disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt-cache miss (and lost extended-thinking context) roughly once an hour in long sessions, caused by tool definitions being re-rendered after an OAuth token refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed the ScheduleWakeup tool definition changing between a session and its --resume when the account had entered usage overage, causing a full prompt-cache miss on the resumed session's first turn"
        },
        {
          "kind": "追加",
          "text": "Fixed Claude Desktop and Cowork sessions disappearing after 30 days: the transcript cleanup now keeps desktop-written sessions while they are in the app (unless org policy manages retention); the new desktopSessionCleanupPeriodDays setting caps the exemption"
        },
        {
          "kind": "修正",
          "text": "Fixed being sent to the login screen when another Claude Code process held the token refresh lock while the session token had expired; the request now fails with a retryable error instead"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed the claude agents list not responding to the keyboard after detaching from a session, or when launched in a terminal tab left in win32-input-mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the recommended Console sign-in in /login failing with an OAuth error before showing a sign-in URL on machines where it can't be used (for example when ANTHROPIC_API_KEY or an API key helper is set); it now falls back to the API-key sign-in"
        },
        {
          "kind": "修正",
          "text": "Fixed model names in /model and fast-mode switch notices to render as code, so suffixes like [1m] display literally instead of as a link"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents skipping the workspace trust prompt when the CI environment variable is set"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents crashing on launch when the PR-status cache held a malformed entry"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view resurrecting a weeks-old background session after the machine was off: such a session now shows as stopped at its real end, and opening it asks before resuming its saved conversation"
        },
        {
          "kind": "追加",
          "text": "Fixed agent view sometimes opening an older conversation, and dropping the typed prompt, when starting a new session"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents: opening a stopped session that you already resumed in another terminal no longer starts a second process on that conversation; the row now says it is open in a terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents and claude rm refusing to delete a session (\"has commits that are not pushed anywhere\") when its worktree branch was already merged into your checked-out default branch (e.g. local main) but not yet pushed"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions waiting silently when a PermissionRequest or PreToolUse hook prints an invalid answer: the claude agents row now names the hook and the schema error"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks silently treating a stdout {…} object that isn't valid JSON as plain text; it's now reported as a hook error with the parse message"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp listing a project .mcp.json entry that declares the claude.ai connector type under the trusted \"claude.ai\" heading; it now appears under its real scope"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers whose headersHelper supplies the Authorization header falling into OAuth discovery on a 401 instead of re-running the helper and retrying the call as documented"
        },
        {
          "kind": "修正",
          "text": "Fixed /login to a Claude apps gateway hanging when the managed-settings security approval dialog was required"
        },
        {
          "kind": "修正",
          "text": "Fixed gateway model discovery (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) never running when apiKeyHelper is the only credential"
        },
        {
          "kind": "修正",
          "text": "Fixed claude logs leaving mouse tracking, bracketed paste and the alternate screen switched on in the terminal it was run from"
        },
        {
          "kind": "修正",
          "text": "Fixed the trust dialog's list of repo permission rules showing a garbled character when a long rule was cut off in the middle of an emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed the permission mode indicator staying hidden behind the \"Press Ctrl-C again to exit\" hint when you press shift+tab right after ctrl+c"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview and locally seeded cloud sessions uploading uncommitted edits to prod.env-style and *.tfvars files, or to editor swap, temp, and backup copies of credential files (e.g. key.pem.tmp, id_rsa.swo); they now stay on your machine"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions occasionally never showing a permission prompt or the latest messages on the connected device after the CLI silently reconnected"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions occasionally failing at startup when the container's session credentials were not yet readable"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control rejecting its own flags (e.g. --spawn, --name) when a global flag or a wrapper-injected option precedes the subcommand"
        },
        {
          "kind": "修正",
          "text": "Fixed startup warnings (e.g. \"N MCP servers need authentication\") rendering one column right of the rest of the transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed a backgrounded worktree session losing its checkout: the background session now holds the worktree's lock while it runs, so cleanup and git worktree remove leave it alone"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mentions of other sessions not matching names typed with non-Latin characters (for example Korean entered through an IME)"
        },
        {
          "kind": "修正",
          "text": "Fixed an invalid crossSessionInbound value being silently ignored: it now warns and holds cross-session messages (user settings) or refuses them (managed settings) until fixed"
        },
        {
          "kind": "修正",
          "text": "Fixed rate-limit, usage, and fast-mode messages telling you to run /usage-credits when that command isn't available for your organization (e.g. hidden with DISABLE_EXTRA_USAGE_COMMAND)"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed a chat tab getting stuck on \"No conversation found\" when its session was never saved; it now starts a new conversation instead"
        },
        {
          "kind": "変更",
          "text": "Improved the Workflow tool's prompt footprint: its description is now about 1k tokens instead of 5.7k, with the script-writing reference moved into a bundled workflow-authoring skill"
        },
        {
          "kind": "変更",
          "text": "Improved the prompt-footer PR badge to check GitHub less often while the pull request is unchanged; a push or a gh pr command still refreshes it right away"
        },
        {
          "kind": "改善",
          "text": "Improved managed settings: client-side timeout, MCP startup-mode, and stream-watchdog env vars no longer trigger the settings-approval prompt"
        },
        {
          "kind": "修正",
          "text": "Improved /ultrareview <PR#> to check before launch that the GitHub account connected to your Claude account can access the repository, and to explain how to fix it, instead of failing after the cloud session starts"
        },
        {
          "kind": "改善",
          "text": "Improved cross-session messaging: falls back to a private per-user /tmp directory when the default one can't be used, and the notice and /status name the directory to fix"
        },
        {
          "kind": "変更",
          "text": "Changed shift+enter in the agent view dispatch input to insert a newline (matching the prompt); ctrl+enter now dispatches and attaches"
        },
        {
          "kind": "変更",
          "text": "Changed /loop: self-paced dynamic mode and the no-prompt autonomous default are now always available, including on Bedrock/Vertex/Foundry"
        },
        {
          "kind": "変更",
          "text": "Changed Anthropic telemetry export failures to log at debug level as [Anthropic telemetry] instead of [3P telemetry] OTEL diag error, so they are not mistaken for your OTel collector failing"
        },
        {
          "kind": "変更",
          "text": "Changed cross-session messaging in Linux user namespaces: root-equivalent trust for unmapped owners is limited to canonical system directories"
        },
        {
          "kind": "変更",
          "text": "Changed SendMessage from a subagent to another session: the result now notes that any reply is delivered to the parent session's conversation, not to the subagent"
        }
      ]
    },
    {
      "version": "2.1.247",
      "items": [
        {
          "kind": "追加",
          "text": "Added the SendFeedback tool: when something goes wrong in a session, Claude can draft a feedback report for you to review and send from /feedback (turn off with the feedbackDrafts setting)"
        },
        {
          "kind": "追加",
          "text": "Added {id, text, cooldownSessions, priority} entries, tipsFile, and label to spinnerTipsOverride, so organizations can rotate their own tips alongside the built-in ones"
        },
        {
          "kind": "追加",
          "text": "Added a tip on Bash permission prompts pointing to auto mode, with a one-keystroke \"Yes, and switch to auto mode\" option"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api cost-optimize to profile an existing project's Claude API spend and work through cost levers (caching, token hygiene, batch, effort, model choice) one measured change at a time"
        },
        {
          "kind": "その他",
          "text": "Updated the /claude-api skill with Admin API coverage (organization members, invites, workspaces, API keys, rate limit reports, workload identity federation, CMEK)"
        },
        {
          "kind": "修正",
          "text": "Fixed fast arrow-key + Enter sequences acting on the row above the one you navigated to in history search, /config, /mcp, /skills, background tasks, and /model"
        },
        {
          "kind": "修正",
          "text": "Fixed sub-agents dying on a first-call model 404: they now use the session's fallback model chain, and the error returned to the parent includes the error type, status, request id, and model"
        },
        {
          "kind": "修正",
          "text": "Fixed a hook or background agent that printed megabytes of error output being able to overflow the conversation and wedge the session on \"Prompt is too long\""
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl keyboard shortcuts not firing under non-Latin (e.g. Cyrillic) keyboard layouts in kitty-protocol terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed text like <35;150;7M being inserted into the prompt when a mouse report arrived split across reads right after the escape prefix"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash sandbox's after-command cleanup deleting a dotfile-managed ~/.claude/settings.json symlink (nix/home-manager, stow) when it is repointed outside the sandbox's writable area"
        },
        {
          "kind": "修正",
          "text": "Fixed /terminal-setup overwriting your entire Zed keymap.json instead of merging in its keybinding"
        },
        {
          "kind": "修正",
          "text": "Fixed /rename silently confirming when the session registry could not be updated; it now says other sessions may still show the old name"
        },
        {
          "kind": "修正",
          "text": "Fixed /compact and \"Summarize from here\" in sessions started with --agent summarizing under the default system prompt instead of the conversation's own"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session showing \"opening…\" forever in claude agents after its terminal host process died; the row now fails within seconds with the reason, and Enter restarts it"
        },
        {
          "kind": "修正",
          "text": "Fixed unbounded memory growth when a hook's or background task's output file could not be written; the file now notes where output was lost"
        },
        {
          "kind": "修正",
          "text": "Fixed /install-github-app over SSH: the copy shortcut now says how the sign-in URL was copied instead of always claiming success, and the URL appears immediately when no browser can open"
        },
        {
          "kind": "修正",
          "text": "Fixed shell commands carried over from the foreground logging an internal error or showing a misleading [exited with code -1] line when they finish in background sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed a version-less marketplace plugin's live cache directory being deleted and recreated on a second-scope install, which could disrupt a running session using it"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions started with /remote-control not reporting the working-tree diff to connected clients"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner sessions reporting running before Claude Code had started, which could trigger a premature \"Claude is waiting for your input\" notification from the Claude desktop app"
        },
        {
          "kind": "修正",
          "text": "Fixed first-run setup exiting with \"Unable to connect to Anthropic services\" when managed settings configure Claude apps gateway sign-in and Anthropic endpoints are unreachable"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions (Claude Code on the web, desktop and mobile apps) sometimes showing the previous permission mode when you switch modes right after sending a message"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions going silent when the session's container restarts between turns while a background agent, shell, or monitor is still running — the resumed session now reports the lost work"
        },
        {
          "kind": "改善",
          "text": "Improved plugin marketplace hardening: names containing control or invisible characters are rejected, and marketplace-supplied text in /plugin and claude plugin output is escape-safe"
        },
        {
          "kind": "改善",
          "text": "Improved Bedrock, Vertex, and Foundry sessions (and any with telemetry disabled): Claude is now told when a configured MCP server failed to connect, instead of concluding its tools don't exist"
        },
        {
          "kind": "変更",
          "text": "Changed Sonnet 5's default auto-compact window to its full 1M context, so sessions on the 1M window now auto-compact at about 967K tokens instead of about 934K"
        },
        {
          "kind": "変更",
          "text": "Changed cross-session peer messages to collapse by default to a one-line Message from @<sender>: <first line> preview; Ctrl+O expands the full body"
        },
        {
          "kind": "変更",
          "text": "Changed terminal hyperlinks in rendered markdown: link targets that point at a network or automounter path, contain a control character, or lead with an invisible character now render as plain text"
        },
        {
          "kind": "変更",
          "text": "Changed the prompt-footer PR badge to skip its GitHub re-check on terminal refocus when the last check is under a minute old"
        },
        {
          "kind": "変更",
          "text": "Changed analytics to stay off from startup, not only after login, when managed settings force gateway login or a custom OAuth deployment is configured"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway sign-in requests to identify Claude Code (a surface=claude_code device-authorization parameter and a claude-code/<version> User-Agent)"
        },
        {
          "kind": "変更",
          "text": "Changed organization sign-in enforcement to exit at start when the administrator's managed settings cannot be read, even if host-supplied or per-user Windows registry settings exist"
        }
      ]
    },
    {
      "version": "2.1.246",
      "items": [
        {
          "kind": "追加",
          "text": "Added a startup warning for Bash allow rules with a wildcard before the subcommand (e.g. Bash(git * main)), since they also match options inserted before the subcommand"
        },
        {
          "kind": "追加",
          "text": "Added an Auto mode tab to /permissions for viewing and editing auto mode classifier rules"
        },
        {
          "kind": "追加",
          "text": "Added the turn's completion time to the end-of-turn duration line, e.g. ✻ Sautéed for 23s · done 6:05 PM"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode showing a blank transcript after resizing the terminal and jumping to the bottom until the next keypress"
        },
        {
          "kind": "修正",
          "text": "Fixed a severe transcript slowdown when a diff contained a very long single line (e.g. a base64 string); such lines now render truncated with a marker"
        },
        {
          "kind": "修正",
          "text": "Fixed erratic fullscreen scrolling when positioned at an earlier message, including jump-to-bottom getting stuck mid-transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions failing to open after 45 seconds when Claude Code's starting directory had been deleted, the machine had slept, or the host is slow to start processes"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions failing to open with \"Couldn't start the background service … EACCES\" when another Claude Code process was re-installing the npm package at that moment"
        },
        {
          "kind": "修正",
          "text": "Fixed markdown rendering being disabled for a whole message when its first 500 characters contained no markdown, and for +/N) lists and setext headings"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls interrupted by an incoming message in headless/remote sessions being reported to the model as \"completed with no output\" instead of an explicit interrupted error"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool arguments being sent as JSON strings when the parameter's schema is empty ({}), instead of their real type"
        },
        {
          "kind": "修正",
          "text": "Fixed a command interrupted mid-run showing as \"Ran 1 shell command\" with no sign it was cut"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing ← or running /background during a dynamic workflow restarting its finished subagents; it now asks first and says how many subagents would restart"
        },
        {
          "kind": "修正",
          "text": "Fixed opening a just-started session in claude agents while its worker was still booting (common on Windows) stopping it with \"was stopped while the respawn was in flight\""
        },
        {
          "kind": "追加",
          "text": "Fixed claude agents listing a backgrounded named session twice; backgrounding the same conversation again now numbers the new row (e.g. my-session (2))"
        },
        {
          "kind": "修正",
          "text": "Fixed the background retention sweep removing git worktrees under .claude/worktrees/ that you created yourself when an old background-session record pointed at them"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode tool calls being denied as \"temporarily unavailable\" on very large sessions by scaling the safety-check deadline with prompt size"
        },
        {
          "kind": "修正",
          "text": "Fixed the plugin cache creating duplicate SHA-named directories for the same plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin skills whose frontmatter name already includes the <plugin>: prefix showing it doubled in the slash menu (e.g. /plugin:plugin:skill)"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin update failing for an installed plugin given its bare name (only the fully-qualified name worked)"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin installation failing when plugin.json was saved with a UTF-8 byte-order mark (BOM)"
        },
        {
          "kind": "修正",
          "text": "Fixed /reload-plugins reporting 0 skills for plugins that define skills under skills/*/SKILL.md"
        },
        {
          "kind": "修正",
          "text": "Fixed hook error messages showing a literal ${CLAUDE_PLUGIN_ROOT} instead of the resolved plugin path"
        },
        {
          "kind": "修正",
          "text": "Fixed /rename replacing the theme's prompt border color (including a custom theme's promptBorder) with the default cyan; the border now keeps your theme's color unless you pick one with /color"
        },
        {
          "kind": "追加",
          "text": "Fixed custom theme diff colors (diffAdded/diffRemoved and their dimmed variants) being ignored in diffs and the /theme preview"
        },
        {
          "kind": "修正",
          "text": "Fixed a keybindings.json binding with an unknown action name silently deadening that key; it is now skipped so the default binding keeps working, and a warning is logged under --debug"
        },
        {
          "kind": "修正",
          "text": "Fixed /stats activity heatmap showing each day's activity one cell off (Sunday's count under Monday) in timezones east of UTC"
        },
        {
          "kind": "追加",
          "text": "Fixed /fork from an already-forked or backgrounded session starting the new session with an empty conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed prompts beginning with /-- (e.g. Lean doc comments) being rejected as an unknown slash command instead of being sent to Claude"
        },
        {
          "kind": "修正",
          "text": "Fixed the @ file picker staying open after the typed text stopped matching a real path"
        },
        {
          "kind": "修正",
          "text": "Fixed the status line's cost and duration resetting to zero after navigating to the agents view and back"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode moving keyboard focus onto the control under the pointer when you clicked the terminal window only to bring it back into focus"
        },
        {
          "kind": "修正",
          "text": "Fixed path completion failing when the completion token or working directory contained a null byte"
        },
        {
          "kind": "修正",
          "text": "Windows/macOS: Fixed headless sessions not cleaning up stale entries in ~/.claude/sessions left by sessions that exited uncleanly"
        },
        {
          "kind": "修正",
          "text": "Fixed the UI stopping with a render error on the first tool call when a third-party Anthropic-compatible endpoint (ANTHROPIC_BASE_URL) streams a tool_use block without an id"
        },
        {
          "kind": "修正",
          "text": "Fixed the Write tool reporting \"Out of memory\" or freezing for a long time after overwriting a very large existing file, even though the file had been written"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin install <name> exiting silently (or hanging in a terminal) instead of reporting an error when ~/.claude/plugins/known_marketplaces.json is empty or corrupted"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions failing every turn with a 400 when the saved history contains tool blocks the Anthropic API does not accept (typically written by a third-party API proxy)"
        },
        {
          "kind": "修正",
          "text": "Fixed curl -fsSL https://claude.ai/install.sh | bash failing with \"Raw mode is not supported\" for some Team/Enterprise users with server-managed settings"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions that ended in plan mode resuming outside plan mode in the VS Code extension, and in claude -p --continue/--resume with a permission prompt tool, when no permission mode was set"
        },
        {
          "kind": "修正",
          "text": "Fixed the Notification hook not firing while the sandbox \"Network request outside of sandbox\" permission prompt is waiting"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks to always require approval for malformed commands with a dangling && or || operator"
        },
        {
          "kind": "修正",
          "text": "Fixed --strict-mcp-config sessions prompting to approve .mcp.json servers they would never load, which left background sessions waiting at startup"
        },
        {
          "kind": "修正",
          "text": "Fixed telemetry and metrics requests to Anthropic carrying the API key configured for a third-party gateway (ANTHROPIC_BASE_URL); a credential is now only sent to its own host"
        },
        {
          "kind": "修正",
          "text": "Fixed a visible API error on the first prompt after idle when apiKeyHelper returns short-lived JWTs: an expired cached token is now refreshed before sending, and 401/403 auth errors retry quietly"
        },
        {
          "kind": "修正",
          "text": "Fixed memory growing with session length in the fullscreen and Ctrl+O transcript views: each rendered message row no longer retains a full copy of the transcript-wide tool lookups"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview runs and cloud sessions launched at the same time from one repository (e.g. from several worktrees) sometimes starting with another launch's uncommitted changes"
        },
        {
          "kind": "修正",
          "text": "Fixed the task progress count (e.g. 3/5) shown for background cloud sessions such as /autofix-pr occasionally missing a task"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions keeping their placeholder name in claude.ai and the Claude app until the second prompt; the auto-generated title now appears after the first prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tools marked requiresUserInteraction still offering \"Yes, and don't ask again\" in their permission prompt; the option wrote an allow rule the tool then ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed the self-hosted runner ending its live sessions or exiting when a work-poll response is malformed (e.g. an intercepting proxy's HTML page); it now retries the poll"
        },
        {
          "kind": "追加",
          "text": "Improved /cd: the new directory's project settings, hooks, .mcp.json servers (behind the usual approval prompt), skills, and agents now take effect right after the move instead of on --resume"
        },
        {
          "kind": "改善",
          "text": "Improved Bash tool latency on bash shells by replaying snapshot functions without a base64 subshell per function"
        },
        {
          "kind": "改善",
          "text": "Improved subagent results: a subagent that stops at its maxTurns limit now returns its output marked as partial, with a hint to continue it via SendMessage, instead of appearing finished"
        },
        {
          "kind": "改善",
          "text": "Improved non-interactive sessions (-p, SDK, cloud sessions) to automatically continue a response cut off mid-stream by a server error, connection loss, or stall instead of ending with an error"
        },
        {
          "kind": "改善",
          "text": "Improved attribution of usage telemetry to your organization for workload identity federation sessions, events sent while apiKeyHelper runs at startup, and after a login token expired while idle"
        },
        {
          "kind": "変更",
          "text": "Changed /code-review so Claude can also start it on its own on Bedrock, Vertex AI, and Foundry, through the Claude apps gateway, and when telemetry or non-essential traffic is disabled"
        },
        {
          "kind": "変更",
          "text": "/goal: Changed idle sessions to start at most three check-ins on long-running background work per goal; your next message allows three more"
        },
        {
          "kind": "変更",
          "text": "Changed claude install and claude update to defer a pending managed-settings consent prompt to the next interactive session instead of prompting mid-command"
        },
        {
          "kind": "変更",
          "text": "Changed OpenTelemetry plugin events for plugins synced from claude.ai: plugin_id_hash now reflects the plugin's real marketplace, and enabled_via is admin-install for admin-installed plugins"
        },
        {
          "kind": "修正",
          "text": "Fixed the command sandbox's filesystem configuration not respecting --setting-sources"
        }
      ]
    },
    {
      "version": "2.1.245",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed a crash on startup on Linux distributions that ship glibc 2.44 (for example Arch Linux, CachyOS and Fedora Rawhide)"
        }
      ]
    },
    {
      "version": "2.1.243",
      "items": [
        {
          "kind": "追加",
          "text": "Added a Loops breakdown to /usage: per-loop run count, total tokens, tokens per run, and last run, so runaway or chatty /loop tasks are easy to spot"
        },
        {
          "kind": "追加",
          "text": "Added modelPicker setting: curate the /model picker with an ordered, labeled list of models (any id spelling, including Vertex/Bedrock ids), appended to or replacing the built-in lineup"
        },
        {
          "kind": "追加",
          "text": "Added promptCacheTtl and subagentPromptCacheTtl settings so API-key and cloud-provider users can keep a 1-hour prompt cache on the main conversation while subagents stay at 5 minutes"
        },
        {
          "kind": "追加",
          "text": "Added modelPricing managed setting so an organization's contracted per-model rates and discount multiplier are used for /cost, the status line, and telemetry cost figures instead of list price"
        },
        {
          "kind": "追加",
          "text": "Added a keyless sign-in under /login → Anthropic Console: \"Sign in with your Console account\" (recommended) alongside creating an API key, so organizations that don't allow API keys can sign in"
        },
        {
          "kind": "追加",
          "text": "Added a Skipped sources line to /status that lists managed settings sources (for example managed-settings.json) present but not applied because a higher-precedence managed source is active"
        },
        {
          "kind": "追加",
          "text": "Added a managed marker in /mcp and /plugins on claude.ai connectors whose authentication is managed by your organization"
        },
        {
          "kind": "追加",
          "text": "Added a tip pointing claude.ai users who haven't connected GitHub for Claude Code on the web to /web-setup"
        },
        {
          "kind": "追加",
          "text": "Added a /status line showing whether GitHub is connected for Claude Code on the web (Pro/Max), pointing to /web-setup when it isn't"
        },
        {
          "kind": "追加",
          "text": "Added the model (and effort level) each subagent ran on to /tasks and the agent detail dialogs"
        },
        {
          "kind": "修正",
          "text": "Fixed remote MCP servers in non-interactive (-p) and SDK sessions never recovering after a dropped connection; they now reconnect automatically or report as failed"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP server sign-in started from the desktop app failing with \"Invalid redirect URI\" on servers that support client ID metadata documents (for example Linear)"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode staying unavailable at startup when a temporary server-side disable was cached and later flag fetches failed"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode tool calls being denied as \"temporarily unavailable\" after about a minute of waiting when the API was briefly overloaded and asked the client to retry"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker silently ignoring an Ultracode selection; picking Ultracode now applies it to the current session"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume only listing the 50 most recent sessions; the picker now loads more as you scroll"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions resuming after a mid-turn restart with a pending hook or background-task notification re-sent as the prompt instead of the normal continuation message"
        },
        {
          "kind": "修正",
          "text": "Fixed cross-session messaging silently turning off inside user namespaces and rootless containers after the 2.1.232 socket-directory hardening"
        },
        {
          "kind": "修正",
          "text": "Fixed text that hangs outside its container (for example the sign-in URL in /login) losing its leading columns when another part of the screen repaints"
        },
        {
          "kind": "修正",
          "text": "Fixed spellcheck not underlining a misspelled word typed directly after an emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents not waking when their last background Bash task completes"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions going silent for 10+ minutes when the Anthropic API never starts a response: the request now times out after ~3 minutes, retries once, then shows API Error: No response from API"
        },
        {
          "kind": "修正",
          "text": "Fixed auth, model-availability, and other client-generated error messages rendering like model output instead of as error lines"
        },
        {
          "kind": "修正",
          "text": "Fixed workload identity federation in CI: processes in one job share the exchanged token instead of re-exchanging the single-use token; a rejected exchange fails fast with the server's message"
        },
        {
          "kind": "修正",
          "text": "Fixed server-managed companyAnnouncements not showing at startup in a session that began with signing in (for example the first launch after /logout)"
        },
        {
          "kind": "修正",
          "text": "Fixed hook if conditions like Bash(cat *) firing on unrelated Bash commands when the command contained $() or backtick command substitution followed by more arguments"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin dependencies declared with a marketplace field never resolving when both plugins are loaded together via --plugin-dir"
        },
        {
          "kind": "修正",
          "text": "Fixed /reload-plugins keeping the LSP tool after the last LSP plugin is disabled; it now also warns before an LSP plugin change that would re-read the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed --agents silently ignoring invalid JSON or invalid agent definitions; it now exits with a clear error, like --mcp-config"
        },
        {
          "kind": "修正",
          "text": "Fixed /status showing \"Found invalid entries in: .\" with no filename when ~/.claude.json has an invalid MCP server entry"
        },
        {
          "kind": "追加",
          "text": "Fixed /clear removing the /rename session name from the prompt bar even though the name was kept for the new session"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+R history search and up-arrow history breaking when ~/.claude/history.jsonl contains a malformed entry"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+[ not leaving vim INSERT mode in terminals that encode modified keys (modifyOtherKeys / kitty protocol)"
        },
        {
          "kind": "修正",
          "text": "Fixed the local IDE connection being routed through HTTPS_PROXY (and sometimes failing) when localhost was listed in NO_PROXY but not lowercase no_proxy; both casings are now honored"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox network-violation details being dropped from the Bash tool result when the blocked command still exited 0 (for example curl printing the proxy's 403 page)"
        },
        {
          "kind": "修正",
          "text": "Fixed the status line rate_limits fields and /usage still showing a rate-limit window's pre-reset usage percentage after the window reset while the session was idle"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --teleport <session> exiting on uncommitted changes instead of offering to stash them and continue, as the session picker already does"
        },
        {
          "kind": "修正",
          "text": "Fixed /web-setup repeatedly asking you to log in when an older GitHub CLI (without gh auth token) was already authenticated"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome losing its connection to Claude Code after an auto-update cleaned up the version it was set up with; the native host now launches via the stable claude launcher"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sessions started before feature flags were first fetched (for example right after install) opening in the default permission mode instead of auto mode or your configured default mode"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Focus view sections you expanded collapsing on their own during subagent tool activity"
        },
        {
          "kind": "改善",
          "text": "Improved startup time: sandbox and MCP bring-up no longer block the first frame, bare launches skip subcommand registration, and workflow discovery, settings, and trust-store work is cheaper"
        },
        {
          "kind": "改善",
          "text": "Improved native install and auto-update download size: the binary is now zstd-compressed (about 75 MB instead of 340 MB on Linux x64)"
        },
        {
          "kind": "改善",
          "text": "Improved attribution of usage telemetry to your organization for sessions that authenticate with ANTHROPIC_AUTH_TOKEN directly against the Anthropic API, so its data-handling settings apply"
        },
        {
          "kind": "改善",
          "text": "Improved native binary size: about 2 MB smaller by storing the bundled skill and prompt text more compactly"
        },
        {
          "kind": "改善",
          "text": "Improved memory usage of native builds: code is now loaded on demand instead of keeping the whole bundle resident (roughly 40–70 MB less memory per session)"
        },
        {
          "kind": "改善",
          "text": "Improved peak memory usage in long-running sessions (the runtime now garbage-collects sooner as the heap grows)"
        },
        {
          "kind": "改善",
          "text": "Improved /login over SSH: the sign-in URL appears immediately, pressing c reports how the URL was copied instead of always claiming success, and a hint explains how to select text in fullscreen"
        },
        {
          "kind": "改善",
          "text": "Improved the error when effort xhigh/max is used with thinking turned off: it now names the level, the setting that disabled thinking, and /effort high as the fix"
        },
        {
          "kind": "改善",
          "text": "Improved /loop: consecutive wake-ups where Claude has nothing to do now fold into a single line in the terminal instead of printing each one"
        },
        {
          "kind": "追加",
          "text": "Changed the sandboxed Bash tool prompt to no longer list allowed network hosts, so Claude attempts requests (and you can approve new hosts) instead of assuming unlisted hosts are blocked"
        },
        {
          "kind": "その他",
          "text": "Updated the /model picker and the bundled claude-api skill to show Sonnet 5's $2/$10 per Mtok pricing as its standard list price rather than a limited-time promo"
        },
        {
          "kind": "変更",
          "text": "Changed computer use on macOS so clicking the desktop, Dock, or a Finder window requires granting Finder via the access dialog, like any other app"
        },
        {
          "kind": "変更",
          "text": "Changed /model, /fast, and /effort to also run immediately instead of queueing until the turn ends on Bedrock, Vertex, and Foundry and when telemetry is disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control exiting and stranding attached Remote Control sessions when the server drops its environment mid-session; it now recovers"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions served by claude remote-control sometimes getting stuck after it was stopped and restarted, for Team and Enterprise members without an admin or owner role"
        },
        {
          "kind": "変更",
          "text": "Changed the cross-session messaging inbox socket to close connections that send no complete line within 30 seconds; scripts posting to it should connect once their data is ready"
        },
        {
          "kind": "改善",
          "text": "Improved the notice when resuming a conversation whose Remote Control is held by another terminal: it now says sessions on other machines can't be seen from, or reach, this one"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved history trimming in long sessions: older tool-activity rows are dropped first so your messages and Claude's replies stay visible"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved attribution of the extension's own usage telemetry to your organization when you are signed in with a Claude account, so its data-handling settings apply"
        }
      ]
    }
  ]
};
