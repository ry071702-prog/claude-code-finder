/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.290",
      "items": [
        {
          "kind": "追加",
          "text": "Added serverToolUses to the result of a mod's turn.step hook: the tool calls the API ran itself (the advisor), each with its id, name, input, start and end"
        },
        {
          "kind": "追加",
          "text": "Added agentId to the tool.check event of plugin hooks, so a hook can tell a subagent's permission check from the main session's"
        },
        {
          "kind": "追加",
          "text": "Added ceiling to the question and verdict a mod's tool.check hook reads, naming the approval an organization requires for a tool"
        },
        {
          "kind": "追加",
          "text": "Added ThemeKey and Color types to the plugin hooks typings, so an editor lists the theme colors a mod's drawing can name"
        },
        {
          "kind": "追加",
          "text": "Added to claude plugin validate: each hook a mod registers at a gating site is listed with whether it has a .catch (gatingHooks under --json)"
        },
        {
          "kind": "追加",
          "text": "Added a Deny button to the Claude apps gateway's sign-in approval page: it ends the pending sign-in, so the waiting terminal stops within seconds"
        },
        {
          "kind": "追加",
          "text": "Added claude attach <name> and claude logs <name>: part of a session name works in place of the id"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api managed-agents-onboard <url> to set up the Managed Agents pattern a page describes as ant apply files"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api managed-agents-onboard <quickstart-name> to build a Console quickstart template, such as deep-researcher, with the ant CLI"
        },
        {
          "kind": "追加",
          "text": "Added a warning when a managed settings file is a link to a file outside the managed settings folder"
        },
        {
          "kind": "追加",
          "text": "Added a /status and doctor warning when managed settings ignore user-configured sandbox allowRead paths or allowed domains"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing behind proxies and gateways that reject one of Claude Code's beta headers with a status other than 400, or together with a second beta"
        },
        {
          "kind": "修正",
          "text": "Fixed long sessions with hundreds of images getting stuck on \"Request rejected as unprocessable by the model\" errors"
        },
        {
          "kind": "修正",
          "text": "Fixed a turn ending at once when the API's output content filter stopped a reply while Claude was still thinking; the request is now retried once before the error is shown"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed subagents and teammates losing their earlier thinking and prompt cache after receiving a message mid-run"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch silently dropping page text past 100,000 characters; it now says how much was unread and takes an offset to read on"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash (\"Maximum call stack size exceeded\") when a response nested lists or quotes thousands of levels deep"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind not listing a prompt sent while Claude was still working"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks (/loop with an interval, reminders) silently not coming back on resume once the conversation was compacted; covers compactions made from this version on"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks set in the foreground never firing after a ← or /background hand-off, and recurring ones firing an extra run on every resume, respawn or fork"
        },
        {
          "kind": "修正",
          "text": "Fixed headless --json-schema runs exiting non-zero with is_error: true on a success result when the connection dropped after the structured output was already delivered"
        },
        {
          "kind": "修正",
          "text": "Fixed plan mode letting the auto mode classifier approve non-read-only connector tools that carry a server-pushed ask policy"
        },
        {
          "kind": "修正",
          "text": "Fixed a project CLAUDE.md, rule or AGENTS.md symlinked outside the working directories loading under permissions.blockReadsOutsideWorkingDirectories or a Read deny rule"
        },
        {
          "kind": "修正",
          "text": "Fixed URL allow and deny patterns with a wildcard inside an xn-- host label matching differently from one process to the next"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP server provided by your organization being relisted as your own after signing in or reconnecting, including from a late result in headless and SDK sessions"
        },
        {
          "kind": "追加",
          "text": "Fixed /ultrareview dropping uncommitted changes without a warning on Windows when git stash create failed, and refusing them after a git add -N file was deleted or moved"
        },
        {
          "kind": "修正",
          "text": "Fixed the plansDirectory setting's project-root check for paths that contain a backslash on macOS and Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed replies in very long Remote Control and cloud sessions that could appear a block at a time instead of streaming in"
        },
        {
          "kind": "修正",
          "text": "Fixed the background daemon's log passing terminal control characters to the screen under claude daemon run and claude daemon logs; they now show as \\uXXXX escapes"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed a crafted, very long line of a session's error output freezing the runner for several seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin hook with a .catch being unloaded, and its .catch skipped, when the hook kept the hooks worker busy on a prompt or tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's turn.step result listing a tool call that a mid-response model fallback had discarded"
        },
        {
          "kind": "修正",
          "text": "Fixed a Cowork cloud session's reply sometimes never finishing when its container restarted just after Claude sent a message or a file"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate and plugin loading refusing a hooks module that destructures an option named like one of its top-level functions"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview failing to upload uncommitted changes when core.safecrlf=true is set in git's configuration"
        },
        {
          "kind": "修正",
          "text": "Fixed the effort level changing when a flagged message is retried on a fallback model that has a different level saved in settings"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed multi-line ! shell blocks in skills and commands failing when the file is saved with CRLF line endings"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code hanging until killed when a /permissions tab was clicked while searching in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed conversation compaction sometimes failing with a \"null is not an object\" error"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin hooks reading an empty answer on turn.complete for a subagent that hands its report back in auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod being unloaded without a message when a refresh followed its failed reload; its failure line now says the version loaded before is unloaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's prompt.submit hook that drops a prompt after calling next(e) being ignored silently: the hook is now reported as failed, by name"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's pane or band being redrawn without end when it followed its end over a tree that changed height at every drawing"
        },
        {
          "kind": "修正",
          "text": "Fixed an image read on macOS and Windows being able to return a file outside what was approved, through a link swapped in mid-read"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a user-installed mod could get an organization's plugin unloaded; the mod is now the one unloaded"
        },
        {
          "kind": "修正",
          "text": "Fixed disableClaudeAiConnectors and allowedMcpServers URL rules not being applied to some MCP entries declared in .mcp.json, plugins or agents"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's inline pane being redrawn without end when its tree changed height at every drawing"
        },
        {
          "kind": "修正",
          "text": "Fixed an @-mention under the read block or --restricted being able to read a file outside the working directories through a link changed mid-read"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc in the agents view confirming \"Press enter again to restart this session — it isn't responding\"; Esc now just reopens the session"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view losing a background session's /loop run count, countdown and live status line after the session enters a worktree that it creates"
        },
        {
          "kind": "追加",
          "text": "Fixed claude agents sessions in manual permission mode asking for approval to read an image pasted into a reply or a new agent's prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed a deny or ask rule missing a command or path whose name came from a variable set as a prefix on declare, typeset, export or readonly"
        },
        {
          "kind": "修正",
          "text": "Fixed Read deny rules not applying to image paths pasted or dragged into the prompt, or to file names listed for an @-mentioned folder"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a user-installed mod could make an organization's guard skip its check; such a mod is now unloaded"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin hooks stalling each redraw when a mod draws a long multi-line text holding non-Latin characters"
        },
        {
          "kind": "修正",
          "text": "Fixed repeated Ctrl+X in the agents view deleting the whole next section after the bottom session of a section was deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed You should know writing its notes in English regardless of the language setting"
        },
        {
          "kind": "修正",
          "text": "Fixed a freeze after sending some very long messages"
        },
        {
          "kind": "修正",
          "text": "Fixed a slowdown when expanding the transcript (ctrl+o) or resizing over large tool output that contains non-ASCII characters such as arrows, dashes or box-drawing"
        },
        {
          "kind": "修正",
          "text": "Fixed claude respawn re-sending an earlier message to a backgrounded session that has no saved transcript instead of starting it with an empty conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc after an n: or Ctrl+F search in the agents view moving focus to a section header, where Ctrl+X twice would delete every session in the section"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents saving a slash command it could not deliver to a stopped session and then running it by itself the next time that session restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview uploading uncommitted changes unfiltered for files under a git filter driver named unset or unspecified; the upload now stops and asks you to rename the driver"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode denials suggesting a permission rule that would skip the classifier for a whole tool or that Claude Code would ignore"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --teleport and /teleport deleting the files in a folder that had replaced a tracked file of the same name when you chose to stash: the stash is now refused, and says why"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc confirming agent view's \"Press enter again to restart this session fresh\" prompt"
        },
        {
          "kind": "追加",
          "text": "Fixed agent view's /loop run count freezing and its countdown disappearing after /clear; the count now restarts with the new conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed --channels permission relay: a reply ID that repeats within a session is now ignored instead of approving a different prompt"
        },
        {
          "kind": "追加",
          "text": "Fixed /chrome \"Reconnect extension\" not restoring browser tools after a failed Chrome connection, and added an explanation when it can't (anthropics/claude-code#98135)"
        },
        {
          "kind": "修正",
          "text": "Fixed mods staying off for people who reach Claude through a gateway (ANTHROPIC_BASE_URL with ANTHROPIC_AUTH_TOKEN) and have no Anthropic account"
        },
        {
          "kind": "修正",
          "text": "Fixed replies sent from claude agents just after a background session crashed being refused after 2 seconds: they are now retried for up to 12 seconds while the session restarts"
        },
        {
          "kind": "修正",
          "text": "Fixed slash commands and answers to a multiple-choice question that claude agents could not deliver to a running session being saved and sent by themselves the next time it was restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands that pipe a heredoc into another command (cat <<EOF | python3) asking for approval on every run"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents failing with \"Couldn't restart the background service\" and background sessions stopping after a Homebrew upgrade (takes effect from the upgrade after this one)"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view's \"restart this session fresh\" re-sending an earlier message from the session instead of starting with an empty conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving some read-only commands (such as rg or git grep) whose arguments the shell would still expand as wildcards; these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin test refusing to run after an upgrade because of an out-of-date saved setting"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving certain commands whose variable names zsh reads differently from bash; these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed a short form of a git clone option keeping the sandbox exemption from a git pattern such as git * in sandbox.excludedCommands; it is now treated like the long form"
        },
        {
          "kind": "修正",
          "text": "Fixed the first feature-flag request of a session ignoring a proxy or API endpoint set in a project's settings"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview of a local branch silently leaving uncommitted work out of the upload in a repository that keeps its branches outside .git (git 2.54+); it now refuses with an explanation"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions staying asleep after a container restart lost a pending /loop wakeup or scheduled task; Claude is now told and can schedule it again"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's retention sweep deleting a returning developer's identity row refreshed at the same moment, on PostgreSQL versions without the November 2025 fixes"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Monitor tool commands skipping the permission prompt under sandbox auto-allow; they now follow your permission rules"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway failing to start when the certificate it presents to the identity provider has an empty subject"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway exiting with a bare \"Invalid URL\" when store.postgres_url can't be parsed; the error now names the setting and says what the URL may hold"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents failing with \"Agent stalled\" and Workflow tool subagents restarting from their prompt when a Mac woke from sleep"
        },
        {
          "kind": "修正",
          "text": "Fixed slow or failed startup since 2.1.285 under SDK hosts such as the VS Code extension when managed settings deny reads of many paths on a slow filesystem (notably Windows drives under WSL)"
        },
        {
          "kind": "修正",
          "text": "Fixed a response interrupted by computer sleep being treated as a stalled stream on Bedrock, Vertex, Foundry, and custom gateways"
        },
        {
          "kind": "修正",
          "text": "Fixed a freeze before the first request and in the /sandbox Config tab on Linux and WSL when a sandbox read rule such as ~/**/.env covers a large folder"
        },
        {
          "kind": "修正",
          "text": "Fixed skills not being found when asked for by the name in SKILL.md when their folder has a different name (for example a non-English name): the skill listing now shows both names"
        },
        {
          "kind": "修正",
          "text": "Fixed a plan written in plan mode being lost when a cloud session's container restarted before the plan was presented"
        },
        {
          "kind": "追加",
          "text": "Fixed the Bash tool occasionally losing shell aliases, functions and plugin PATH entries for a whole session when its first command ran seconds after startup on a new config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed unbounded memory use when an HTTP MCP server sends a very large response"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact operations failing in a Claude Code run started from inside a cloud session (for example claude -p run from the Bash tool)"
        },
        {
          "kind": "修正",
          "text": "Fixed files sent from remote sessions sometimes being refused as \"not the one approved\" when four or more were sent at once"
        },
        {
          "kind": "修正",
          "text": "Fixed plan mode not being restored when resuming a session with --continue or --resume <session-id> in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed a marketplace named after another GitHub marketplace's download folder stopping that marketplace from downloading"
        },
        {
          "kind": "修正",
          "text": "Fixed automatic compaction giving up with \"Prompt is too long\" when a Mac went to sleep while it was running"
        },
        {
          "kind": "修正",
          "text": "Fixed the rewind menu (Esc Esc / /rewind) freezing for hundreds of milliseconds per keypress when the conversation contains a very large pasted stack trace or source file"
        },
        {
          "kind": "修正",
          "text": "Fixed a subdirectory's AGENTS.md not being attached when a file under it is @-mentioned"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner sessions resumed after a stopped runner failing with \"missing but already registered worktree\" when the sessions folder is a relative symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed a freeze when the secret scan or a permission prompt met long token-like text"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks not applying Read deny rules or the outside-directory read block to a wildcard in some option values of read-only commands"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS=5m being read as 5 ms and cancelling remote dialogs at once; values with a unit suffix now fall back to dialogExpiry"
        },
        {
          "kind": "修正",
          "text": "Fixed a stall when an MCP server's tool listing contains very long runs of combining characters"
        },
        {
          "kind": "修正",
          "text": "Fixed two pastes that overlap in one prompt being sent to the model partly as typed text instead of as one pasted block"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome's browser picker showing a message meant for Claude when the chosen browser is no longer connected, and the VS Code dialog's list going stale after a switch"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents losing write and Bash access in their worktree after the main session enters or exits a different worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed background commands, the agents view and daemon workers sending telemetry and a feature-flag request to Anthropic behind a Claude apps gateway when no managed settings on the machine force gateway login"
        },
        {
          "kind": "修正",
          "text": "Fixed --restricted (and CLAUDE_CODE_RESTRICTED=1) sessions opening the cross-session messaging socket"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions moved to the background while idle reopening as \"no saved transcript\" after a restart or idle cleanup; they now resume their conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed background workers honoring --allow-dangerously-skip-permissions on respawn without the bypass-permissions disclaimer having been accepted"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude replying in an endless loop when a plugin's async Stop hook passes an unquoted script path under a folder with a space, such as Application Support"
        },
        {
          "kind": "修正",
          "text": "Fixed a freeze of several seconds when secret masking met very long unbroken text"
        },
        {
          "kind": "修正",
          "text": "Fixed some permission rules and safety checks not being applied to a tool call after a PreToolUse hook rewrote its input"
        },
        {
          "kind": "修正",
          "text": "Fixed first launch asking to pick a login method again after claude auth login or with a credentials file already in the config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed file names containing line breaks being displayed incorrectly in file tool errors and permission prompts"
        },
        {
          "kind": "修正",
          "text": "Fixed a large paste expanded in place being sent to the model as typed text after the next keystroke when it held accents stored as separate characters, as macOS file names do"
        },
        {
          "kind": "追加",
          "text": "Fixed macOS /login reporting success when the keychain refused the new login and kept an old one it could not remove"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK hosts using --include-partial-messages seeing a reply stay open after the turn ended when its stream was cut, interrupted or fell back to non-streaming"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands on Linux running ConfigChange hooks and reloading settings mid-command when .claude/settings.json or .claude/settings.local.json does not exist"
        },
        {
          "kind": "修正",
          "text": "Fixed errors reading \"Premature close\" instead of naming the missing program when a tool Claude Code runs, such as git or gh, is not installed (macOS, Linux)"
        },
        {
          "kind": "修正",
          "text": "Fixed /loop and other recurring session-only scheduled tasks running an extra time after a sandboxed Bash command on Linux or after .claude/scheduled_tasks.json was deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed edits to the file a symlinked settings file points at running without the settings-file permission question"
        },
        {
          "kind": "改善",
          "text": "Improved MCP startup behind a network proxy: a server the proxy blocks (HTTP 403) is no longer retried three times"
        },
        {
          "kind": "改善",
          "text": "Improved permission prompts from background agents to show the Ctrl+X Ctrl+K shortcut that stops all background agents"
        },
        {
          "kind": "改善",
          "text": "Improved the built-in plugin-authoring skill: Claude now gives the one command another person runs to install a mod you made, and writes it in a README's install section"
        },
        {
          "kind": "改善",
          "text": "Improved the reply to /plugin in the desktop app's Code tab: it now says where to install and manage plugins there"
        },
        {
          "kind": "変更",
          "text": "Improved the Bash changed-files view: when a chained command includes git merge, pull or checkout, it lists the files without full diffs"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's log when an upstream's cloud credentials or connection fail: the warning now ends with the underlying cause"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown when a cloud session is started without a claude.ai sign-in: it now names claude auth login and /login and no longer blames API-key authentication"
        },
        {
          "kind": "改善",
          "text": "Improved the Read tool's message for binary files: it now points Claude to a skill or a shell command that can read the format"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown when a git config file stops the /ultrareview upload: it is about half as long and says what kind of file is the problem"
        },
        {
          "kind": "修正",
          "text": "Improved the errors shown when the /ultrareview upload refuses a checkout: each known cause now has its own message, with a way to fix it"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway to log a warning during the last 30 days before the certificate it presents to the identity provider expires"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: a browser_batch call now gets 90 seconds, up from 60, before it is reported as timed out"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's browser sign-in pages: brand fonts, centered layout, and dark mode"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness while resuming large sessions: timers, input and rendering keep running while the transcript loads"
        },
        {
          "kind": "改善",
          "text": "Improved the / and @ suggestion lists: the selected row now starts with a ❯ pointer, so you can see it without color"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC to also skip the startup connection warm-up"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome so that a project's settings files can no longer turn it on; use --chrome, /chrome or your user settings"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash tool to ask for permission before running pyright, which is no longer treated as a read-only command"
        },
        {
          "kind": "変更",
          "text": "Changed what a mod's $.process.spawn rejects with when another mod denies it after the child ran: it now says the call ran and a plugin withheld its result"
        },
        {
          "kind": "変更",
          "text": "Changed the background daemon's log to write a multi-line message as one JSON-quoted line"
        },
        {
          "kind": "変更",
          "text": "Changed skills and custom commands to refuse a ! shell command that contains raw control characters other than tab and newline, with a message that shows where they are"
        },
        {
          "kind": "変更",
          "text": "Changed /artifacts: opening an artifact in your browser now closes the list"
        },
        {
          "kind": "変更",
          "text": "Changed Bash permission checks so that more forms of the ps command ask for approval instead of running without asking"
        },
        {
          "kind": "変更",
          "text": "Changed plugin hooks so long text is clipped and logged instead of being refused or dropped silently"
        },
        {
          "kind": "変更",
          "text": "Changed background sessions whose scheduled task is gone: they now move to Completed about 20 seconds later and can be updated or shut down when idle"
        },
        {
          "kind": "変更",
          "text": "Changed the \"Press ← again\" confirm on a just-cleared prompt: a second ← no longer has to wait a second before it switches, and holding ← down now switches too"
        },
        {
          "kind": "変更",
          "text": "Changed the errors shown when the /ultrareview upload fails at a git step: they name the step and what to try, and no longer repeat git's own error text"
        },
        {
          "kind": "変更",
          "text": "Changed /code-review at medium effort to also report cleanup and CLAUDE.md conventions findings on models without tuned review settings, including Opus 5.5 and Sonnet 5.5"
        },
        {
          "kind": "変更",
          "text": "Changed an in-process teammate's agent_id in Agent results to its agent ID (its name@team address stays in teammate_id); TeammateIdle hooks no longer fire from its subagents or forks"
        },
        {
          "kind": "変更",
          "text": "Changed background sessions waiting on a scheduled wakeup (/loop): they are now left running through updates and low memory, where being restarted or shut down could silently lose the wakeup"
        },
        {
          "kind": "変更",
          "text": "Changed /model, /effort and /rename sent from claude agents to a busy background session to apply right away, without a confirmation, instead of when the turn ends"
        },
        {
          "kind": "変更",
          "text": "Changed the Claude apps gateway's minimum supported PostgreSQL version from 14 to 11"
        },
        {
          "kind": "変更",
          "text": "Changed the interactive session's WebSearch budget to refill over time (100 calls/hour; CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR sets the rate, 0 turns it off) instead of ending after 200 calls"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_DISABLE_ATTACHMENTS so a repository's .claude/settings.json or .claude/settings.local.json can no longer set it; shell, user and managed settings still can"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin update on a plugin loaded from a directory to print just its reason, without the \"Failed to update plugin\" prefix, as for built-in plugins"
        },
        {
          "kind": "変更",
          "text": "Changed the built-in gh api in cloud sessions: a host other than github.com set in GH_HOST or GH_REPO is now refused (use --hostname or a full URL), and stderr notes requests to other hosts"
        },
        {
          "kind": "変更",
          "text": "Changed the claude-api skill's Managed Agents examples to turn off the web tools unless the agent needs them and to use the auto permission policy"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runners: Changed claude --environment <id> to create its session through the current Sessions API; printed and JSON session ids keep their session_… form"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a screen reader announcement, \"Message queued.\", when you send a message while Claude is working"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a way to review and run a plugin marketplace's install or update command from the Manage plugins dialog"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a blank chat you never typed into keeping a background Claude process running after you open a saved conversation in its place"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed settings dialogs blaming a timeout when Claude Code stopped unexpectedly during a save"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the branch switch dialog offering to switch when it could not check for uncommitted changes"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a permission prompt that arrived behind an open dialog taking keyboard focus, so a key pressed in the dialog could answer it"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed sign-in and new sessions giving no clear reason when Claude Code cannot find or start its program"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the agent map showing a nested sub-agent with \"Tool calls (0)\" and placing the agents it starts under the main agent"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved Continue After Reload: tabs reopened after VS Code restarts its extensions now also finish a step the restart interrupted"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved file pills in messages: hovering one now shows the file's path from the project folder, so same-named files can be told apart"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed message timestamps to show by default (turn them off with the Claude Code: Show Message Timestamps setting)"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed turning off prompt suggestions through a cloud environment's environment variables having no effect in new cloud sessions"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the working indicator in a cloud session spinning on for several seconds after Claude's reply had finished; it now stops with the reply"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed History on a never-run routine's page still saying \"No runs yet\" after you pressed Run now; it now shows the new run"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed an unarchived cloud session looking as if Claude were still working until you sent another message"
        },
        {
          "kind": "追加",
          "text": "[Remote Control] Fixed a computer that just started Remote Control taking up to a minute to appear in the Remote Control menu of a new session; it now appears within seconds"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added fast mode in Slack: mention Claude with !fast to switch a thread to fast mode, moving it to Opus if needed, and !fast off to switch back; replies show (fast) while it's on"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added the optional Path prefixes field when creating a custom connection in an access bundle, so its allow rule can cover only those paths instead of the whole host"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed members with the Claude Tag Admin permission getting \"Couldn't load memory files\" on the Activity page's Memory tab; they can now read workspace and channel memory"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a workspace guest's Confirm on a Claude settings card in Slack removing its buttons for everyone; only the guest sees the refusal, and members can still confirm or cancel"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed scheduled routines in Slack channels running on a model other than the channel's default; each run that starts a new session now uses the current default model"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed GitHub repositories in an access bundle attached by a channel-name rule being refused in the channels the rule covers; Claude can now add, list and clone them there"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude's notice in your direct messages when your own Claude plan's usage limit is reached: it shows within seconds and says when the limit resets"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Improved the earlier Claude in Slack app's reply when it can't start a session: it now says what failed and who can fix it, in full only once per thread"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Changed the channel instructions limit to 8,192 characters instead of bytes, so non-English text gets the same room, and added a character count beside Save on the Configure page"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed blocking review comments sometimes opening with a \"nit\" label that contradicted their severity"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed tips to comment \"@claude review\" being posted on fork and Manual-mode pull requests in organizations that have turned Code Review off"
        }
      ]
    },
    {
      "version": "2.1.289",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed a deny or ask rule on a nested part of a compound shell command not holding over a user-installed mod's approval on managed machines"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal freezing on short code blocks with many unclosed <script> tags or deeply nested ${ substitutions"
        },
        {
          "kind": "修正",
          "text": "Fixed Read deny rules not applying to files @-mentioned, changed, or selected in the IDE through a symlink"
        },
        {
          "kind": "その他",
          "text": "[VSCode] Reverted a 2.1.288 change to claude auth status that may have made sign-outs more frequent"
        },
        {
          "kind": "改善",
          "text": "Improved how quickly large files open in a plugin code pane by laying the highlighted view out once at its final width"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin list, plugin eval and plugin update showing a stale copy of a plugin installed from a local folder marketplace, and hot reload for a symlinked --plugin-dir"
        },
        {
          "kind": "修正",
          "text": "Fixed installed mods not loading in the first session after an upgrade"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's rows above the prompt showing a stale row while the Background tasks dialog was open in fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin panes drawing nothing when a link used a localhost address, an @ in its path, an uppercase host or a file: path"
        },
        {
          "kind": "修正",
          "text": "Fixed a user-installed plugin being able to rewrite the descriptions of an organization-managed MCP server's sign-in tools"
        },
        {
          "kind": "修正",
          "text": "Fixed a freeze or forced quit at launch when a plugin drew a Box with a border style the terminal does not know"
        },
        {
          "kind": "修正",
          "text": "Fixed supervised and background sessions ending when a plugin's on-screen handler threw asynchronously"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions ending with an interface error when a plugin region with no height kept growing"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash deny and ask rules missing a command behind an environment variable prefix with an expanded value (e.g. TZ=\"$HOME\" rm -rf build) when the sandbox auto-allows commands"
        },
        {
          "kind": "修正",
          "text": "Fixed a Bash deny or ask rule being skipped under sandbox auto-allow when a bare variable assignment came before the command"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate skipping the plugin when the folder also holds a marketplace manifest"
        },
        {
          "kind": "追加",
          "text": "Added agent.spawn for teammates, one agent id across plugin hook events, and idle and waiting states in $.agent.list()"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions ending with \"unrecoverable interface error\" when a value a mod's ui.render hook wrote made a row throw while drawn; the engine now draws its own row instead"
        },
        {
          "kind": "修正",
          "text": "Fixed text with a tab, a stray escape and a C1 control, or a short text with a tab and CRLF line endings, drawing over the rows below it"
        },
        {
          "kind": "修正",
          "text": "Fixed right-aligned content in a mod's pane or band drawing under the close mark or [-], which now also keep one column in from the terminal's edge"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's Client that fails while drawn taking down everything the mod drew around it; it now fails alone and raises ui.fault"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate failing an Anthropic marketplace's own plugin and listing a clean plugin.json in --json"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's band that fails to draw briefly telling the cards under it to step aside"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed plugin component showing Error or nothing as its reason when the failure carried no message"
        },
        {
          "kind": "改善",
          "text": "Improved the line a mod's author sees when its band or pane fails to draw: it names the mod and says nothing was drawn"
        },
        {
          "kind": "修正",
          "text": "Fixed published artifact pages freezing or crashing the reader's browser tab on short code blocks with many unclosed <script> tags"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's Client region staying failed for the whole session after the terminal threw while drawing it"
        }
      ]
    },
    {
      "version": "2.1.288",
      "items": [
        {
          "kind": "追加",
          "text": "Added $.ui.selection() for mods: returns the text you last selected in fullscreen mode and, when the selection lies within one transcript row, that row"
        },
        {
          "kind": "追加",
          "text": "Added a built-in gh api to cloud sessions whose image has no GitHub CLI, and fixed the built-in sending control characters from file names, jq filters or GitHub errors to the terminal"
        },
        {
          "kind": "追加",
          "text": "Added recovery for a prompt cleared with Ctrl+C: pressing Up on the empty prompt brings the draft back, including pasted text and images"
        },
        {
          "kind": "追加",
          "text": "Added a re-authenticate prompt when an MCP server asks for more OAuth scope during a tool call"
        },
        {
          "kind": "追加",
          "text": "Added --max-findings <n>|all to /code-review to report more or fewer findings than the usual limit; the choice is reused until you pass --max-findings default"
        },
        {
          "kind": "追加",
          "text": "Added Ctrl+F to find a session by name and Alt+↑/↓ to jump between groups in the agents view; both, and rename, can be rebound in keybindings.json"
        },
        {
          "kind": "追加",
          "text": "Added a screen reader mode announcement of the new permission mode when you approve a plan, including with Shift+Tab"
        },
        {
          "kind": "修正",
          "text": "Fixed mid-response API timeouts failing the turn: non-interactive sessions and subagents now continue from the partial response, and thinking-only responses are retried"
        },
        {
          "kind": "修正",
          "text": "Fixed long conversations failing with \"Prompt is too long\" instead of auto-compacting when the last reply reported zero token usage"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume sometimes dropping files and other context that a compaction had just restored"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed session sometimes not saving the last response of a turn, so that the next --resume showed the prompt unanswered"
        },
        {
          "kind": "修正",
          "text": "Fixed resume occasionally loading a transcript cut short when the same session rewrote the file during the load"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a conversation started on 2.1.286 or earlier dropping the model's earlier thinking"
        },
        {
          "kind": "追加",
          "text": "Fixed session titles, memory recall and prompt hooks failing on Mantle or behind gateways that reject structured outputs; added CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS to turn structured outputs off"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode denials pointing Claude at a Bash permission rule when the blocked tool was not Bash"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode on Bedrock and Mantle switching to the local classifier for the rest of the session after a request to an older model, such as a WebFetch summary or a sonnet subagent"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions that restarted on a newly picked model replying with that model after the server refused it"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork cloud sessions staying marked as waiting for input after a WebFetch permission prompt for an unapproved URL went unanswered for five minutes"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt suggestions not appearing on a phone that joins a Cowork cloud session started on another device"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's button sometimes running a different button's action when pressed on a view drawn before Claude Code restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's pane showing nothing when one Code element held a diff that does not parse; it now draws as plain code"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin LSP servers receiving literal ${user_config.*} and ${CLAUDE_PLUGIN_ROOT} placeholders in initializationOptions and settings instead of substituted values or manifest defaults"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's tool.call hook making Bash fail and file searches read the wrong folder in subagents that run in a worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed git-subdir plugin installs failing, or caching an incomplete plugin, on older git (before 2.39, e.g. Ubuntu 22.04's 2.34)"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins loaded with --plugin-dir not showing \"Configure options\" in /plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions ending when a plugin was reloaded or disabled while one of its timers or reads was still running"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed heredocs with an unquoted delimiter (python3 <<EOF) asking for approval on every run under sandbox auto-allow when the body holds only plain text and simple $VAR references"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash tool permission check to prompt before a BASHPID assignment whose value the shell would evaluate as arithmetic, instead of allowing it silently"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen sessions exiting with \"unrecoverable interface error\" when opening the background tasks dialog while a plugin or mod showed rows above the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude reporting a message to another session as delivered when that session held it: the notice now says it wasn't delivered and names the session, and in SDK sessions Claude can now learn of it mid-turn"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry claude_code.tool.blocked_on_user spans reporting unknown source or decision in -p and SDK sessions and for PreToolUse hook approvals"
        },
        {
          "kind": "修正",
          "text": "Fixed permission asks that ended unanswered, in -p or on an interrupted turn, emitting no tool_decision event"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit and Retry in Cowork cloud sessions refusing a message sent before /compact even though its history was still saved"
        },
        {
          "kind": "修正",
          "text": "Fixed unattended sessions (CLAUDE_CODE_RETRY_WATCHDOG) retrying for hours after a very long response stream failed; Claude Code now streams again, and gives up after three timeouts"
        },
        {
          "kind": "追加",
          "text": "Fixed /login reporting \"Login successful\" when credentials could not be saved to secure storage; it now shows the failure, and offers a retry when the new login didn't take effect (anthropics/claude-code#73861)"
        },
        {
          "kind": "修正",
          "text": "Fixed a Stop during Bedrock credential lookup sometimes moving the session to a fallback model instead of ending the request"
        },
        {
          "kind": "修正",
          "text": "Fixed a second gcpAuthRefresh/awsAuthRefresh browser sign-in opening when a laptop wakes from sleep while another Claude Code process is signing in"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: a plugin-defined agent spawned by name now runs with its own prompt, tools, disallowedTools and effort instead of the defaults"
        },
        {
          "kind": "修正",
          "text": "Fixed headless (-p / SDK) sessions occasionally ignoring SIGTERM when a supervisor such as timeout or systemd sends SIGCONT alongside it"
        },
        {
          "kind": "修正",
          "text": "Fixed restarted cloud sessions restoring a model that the organization's enforced model list refuses"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls sometimes running twice when a remote server's result was over 16 MB or could not be parsed"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents in Claude Desktop's Code tab getting none of the tools of a user-configured MCP server named memory"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome asking before every screenshot and page read on a site you allowed when auto mode is unavailable (such as with disableAutoMode or an older model); typing, navigation and JavaScript still ask"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin install failing for GitHub-source plugins on macOS and Linux machines with no GitHub SSH key: the clone now falls back to HTTPS and prints a notice"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox.credentials.files entries on git config files not taking effect while permissions.blockReadsOutsideWorkingDirectories is on"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude leaving out your organization's design systems when starting slides or a design with the Artifact tool on Team and Enterprise plans or machines with managed settings"
        },
        {
          "kind": "修正",
          "text": "Fixed the keyboard not working on Windows after Claude Code restarts itself (first sign-in to a Claude apps gateway, provider setup, /tui)"
        },
        {
          "kind": "修正",
          "text": "Fixed a stall when launching an agent whose tools: lists very many Agent(...) entries"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions on Claude 3 Opus and Claude 3 Sonnet failing on every turn after a whole PDF entered the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed the npm auto-updater reporting success when the platform-native binary failed to download and only the placeholder claude stub was installed"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control cleanup archiving a session that is still connected or was just re-attached by another Claude Code process"
        },
        {
          "kind": "修正",
          "text": "Fixed owner/repo plugin marketplaces showing only the second attempt's error when both the SSH and HTTPS fetch fail; both errors are now shown, with the transport tried first on top"
        },
        {
          "kind": "修正",
          "text": "Fixed path-scoped .claude/rules and nested CLAUDE.md files not loading when Write or Edit creates or changes a file in their scope (previously only Read loaded them)"
        },
        {
          "kind": "修正",
          "text": "Fixed a dangerous rm (such as one on / or the home directory) inside a bash -c or sh -c script running without a prompt in bypassPermissions mode or under a shell allow rule (anthropics/claude-code#96300)"
        },
        {
          "kind": "修正",
          "text": "Fixed LSP tool calls hanging indefinitely when a language server uses dynamic capability registration or stops responding; requests now time out after 60s (per-server requestTimeout)"
        },
        {
          "kind": "修正",
          "text": "Fixed idle_prompt notification hooks firing while background agents are still running (anthropics/claude-code#93672)"
        },
        {
          "kind": "修正",
          "text": "Fixed PreToolUse and PermissionRequest hooks being skipped when matching them failed or the tool's input could not be serialized to JSON; the call is now blocked"
        },
        {
          "kind": "修正",
          "text": "Fixed the first request in a fresh environment or after a model switch using the built-in output limit and auto-compact window, not the server's; that request may now wait up to 1.5 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"What should Claude do instead?\" hint showing on the Interrupted row after sending queued messages with ctrl+enter"
        },
        {
          "kind": "修正",
          "text": "Fixed /login in a --bare session running a sign-in the session never reads, which could replace your saved login; it now says which credentials work"
        },
        {
          "kind": "修正",
          "text": "Fixed the InstructionsLoaded hook omitting agent_id and agent_type when a subagent's file access loads a rule or nested CLAUDE.md; rules and nested CLAUDE.md files loaded on file access now also report effort"
        },
        {
          "kind": "修正",
          "text": "Fixed the Agent tool in claude mcp serve always reporting no available agents and rejecting every subagent_type"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal cursor not following the typed text in the fullscreen transcript viewer's search and in /theme's custom color search"
        },
        {
          "kind": "修正",
          "text": "Fixed /permissions in screen reader mode: typing a rule's number now picks it instead of opening the search box"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: when a conversation grows too long for the client-side safety classifier to review, it is now compacted instead of prompting for, or failing, every tool call"
        },
        {
          "kind": "改善",
          "text": "Improved screen reader mode: short announcements, such as a deleted word, now stay on screen until your next key press or until something above them on screen changes"
        },
        {
          "kind": "改善",
          "text": "Improved screen reader mode: answered questions in question dialogs now say \"answered\" beside their box"
        },
        {
          "kind": "改善",
          "text": "Improved the /usage-credits message shown to Team and Enterprise members whose organization has turned off usage credit requests"
        },
        {
          "kind": "追加",
          "text": "Improved cloud sessions: a new conversation's first turn no longer waits for a stdio MCP server whose config sets alwaysLoad: false"
        },
        {
          "kind": "改善",
          "text": "Improved \"You should know\" notes to say \"we\", \"the main agent\" or \"you\" depending on who was responsible for a decision"
        },
        {
          "kind": "改善",
          "text": "Improved the error for an artifact database write refused at the database's size limit: it now states the limit and what frees space"
        },
        {
          "kind": "改善",
          "text": "Improved Bash permission prompts to give a shorter reason when part of a command can't be checked before it runs"
        },
        {
          "kind": "改善",
          "text": "Self-hosted runner: Improved the built-in gh api: a refused gh command now prints its gh api equivalent, --paginate follows every page of a repository's lists, and a nested claude no longer removes it"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control's recovery from an expired server credential: sessions stay connected during renewal and are kept if it gives up after a server outage"
        },
        {
          "kind": "変更",
          "text": "Changed the background command time limit to apply only in unattended sessions (-p, Agent SDK, CI, cloud); terminal, desktop app and VS Code sessions have no limit"
        },
        {
          "kind": "変更",
          "text": "Changed the client-side auto mode classifier to ignore an ANTHROPIC_DEFAULT_SONNET_MODEL pin that names Claude Sonnet 5.5 or Opus 5.5 and use Claude Sonnet 5 instead"
        },
        {
          "kind": "変更",
          "text": "Changed claude project purge to claude purge; the old name still works and prints a notice"
        },
        {
          "kind": "変更",
          "text": "Changed the agents view n: filter (and Ctrl+F search) so Enter opens the session whose name matches best instead of the top row"
        },
        {
          "kind": "変更",
          "text": "Changed /autocompact to save the auto-compact window per model, so each model keeps its own setting when you switch"
        },
        {
          "kind": "変更",
          "text": "Changed MCP URL prompts from servers that can't report when you're done to wait for \"I'm done, continue\" before the tool call continues, so you can finish in the browser first"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a claude.ai connector staying on \"Needs authentication\" after you authorize it: the MCP servers dialog now offers Check connection"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the opt-in New Conversation shortcut (Cmd/Ctrl+N) starting a conversation in every visible Claude view instead of only the one you are in"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the chat view resuming the next saved session after you archive the one it shows; it now starts a new conversation instead"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the Cloud sessions switch in Claude Code admin settings staying locked off while an unrelated security setting was loading or had failed to load"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed pressing Stop while a self-hosted runner was still starting not cancelling the queued message, which could then run once the runner was up"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag admin settings offering a \"Remove this scope\" option, which always failed, on channels whose settings were created automatically"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude to also follow a related Slack thread in another channel that it only read, so updates there reach the conversation that depends on them"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved save errors on a channel's Configure page: too-long channel instructions now say to shorten them, and a save refused for lost access no longer says to try again"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin test reporting mods as turned off remotely when it had only read an out-of-date saved setting"
        }
      ]
    },
    {
      "version": "2.1.287",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Mods: plugins may now modify deeper behavior"
        },
        {
          "kind": "追加",
          "text": "Added You should know, a built-in mod where a side agent watches your back and flags things you or Claude might miss. Turn it on with /plugin enable cc-plugin-you-should-know@builtin (for first-party sessions with telemetry on)"
        },
        {
          "kind": "追加",
          "text": "Added an n:<text> filter to the agents view that matches session names and tasks; a filter now shows matches in collapsed sections and Enter opens the first match"
        },
        {
          "kind": "追加",
          "text": "Added prompt_text to the OpenTelemetry user_prompt event, a copy of prompt for backends that nest dotted keys; drop or mask it wherever you drop or mask prompt (anthropics/claude-code#70763)"
        },
        {
          "kind": "追加",
          "text": "Added URL prompts from MCP servers on the 2025-11-25 protocol, for example to sign in. If a server no longer connects after this update, add \"bareElicitationCapability\": true to its MCP config entry"
        },
        {
          "kind": "追加",
          "text": "Windows: Added a startup warning when denying the Bash tool also turns off the PowerShell tool, so Claude has no shell tool"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Added a built-in gh api (REST only) for sessions that use Anthropic-managed git on macOS and Linux machines where the GitHub CLI is not installed"
        },
        {
          "kind": "修正",
          "text": "Fixed fast mode staying off in remote sessions owned by an agent with no user account, even when the organization allows it"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control not receiving messages for minutes at a time when a reconnect request got no response; it now gives up after 30 seconds and retries"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks configured with asyncRewake waking Claude over and over with \"found issues\" notifications when the hook's script file is missing; the broken hook is now reported once"
        },
        {
          "kind": "修正",
          "text": "Fixed tool heartbeats not reaching SDK hosts while the model's response stream was stalled with no data arriving"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock and Vertex startup model checks ignoring an enforced availableModels list, which could collapse /model to one Opus row"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude in Chrome browser picker showing a JSON parse error when Chrome could not be reached"
        },
        {
          "kind": "修正",
          "text": "Fixed picking Fable in /model on a claude.ai login saving the current version's id, so your saved default now follows the newest Fable like Opus and Sonnet do"
        },
        {
          "kind": "修正",
          "text": "Fixed switching between Opus 5.5 and Sonnet 5.5 (/model, opusplan) rewriting earlier MCP tool announcements, which could drop earlier extended thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed Amazon Bedrock Guardrails blocks that arrive mid-response ending the turn with an API error instead of the guardrail's message when the reply began with thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed a dangerous rm (such as one on / or the home directory) losing its always-ask safeguard when the same command also redirected output to a ~ or wildcard path"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p and SDK sessions repeating a model fallback on every later message after the model was switched while a reply was running"
        },
        {
          "kind": "修正",
          "text": "Fixed a folder's CLAUDE.md being attached a second time after resuming a session or after a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions that could not be reopened from claude agents after the agent exited and removed the worktree the session was started in"
        },
        {
          "kind": "修正",
          "text": "Fixed /advisor pairing checks: Sonnet 5.5 can now advise Opus 4.7 and 4.8, and advisors the API would refuse are flagged up front instead of being silently dropped"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission prompts showing internal parser names such as \"Contains simple_expansion\" instead of a plain explanation"
        },
        {
          "kind": "修正",
          "text": "Fixed a cause of fullscreen sessions on slow or busy machines exiting with \"Claude Code exited after an unrecoverable interface error\" while a scroll key was held in a long conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed organization per-tool permission ceilings being silently dropped for an MCP tool named __proto__"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told to page large MCP results saved as JSON with Read's offset and limit, which cannot split one long line"
        },
        {
          "kind": "修正",
          "text": "Fixed the commit attribution reminder being delivered inside a tool result after a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode leaving the cursor away from the typed text in search boxes (such as /resume and /permissions) and sign-in code fields"
        },
        {
          "kind": "追加",
          "text": "Fixed screen reader mode refusing Enter with nothing typed on /rewind's summarize options, whose added context is optional"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode showing a \"Tab to amend\" hint on approval prompts, where Tab does nothing"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode listing arrow keys that do nothing in /permissions and /mcp, and saying \"Select with numbers\" in empty menus or while a search box has the keys"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode leaving out the changed lines in file edit approval prompts and other diffs"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode sending the claude --teleport progress screen, and an MCP form field while it is being checked, to the screen reader again on every spinner frame"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not removing the structured-output format from session-title and prompt-hook requests, which Bedrock-backed gateways reject"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode leaving out the top lines of a second approval prompt, a changed /config row or the rejected-plan line when the previous screen was taller than the terminal window"
        },
        {
          "kind": "修正",
          "text": "Fixed --include-partial-messages sending a cut-short reply's message_stop late or never, so apps could show the reply as still in progress"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents sometimes not showing the permission prompt a background session is waiting on"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview giving advice about .git/info/attributes when the upload stops on a committed .gitattributes it cannot read, such as one saved as UTF-16"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control failing to register behind an HTTP proxy with a misleading \"Check your organization permissions\" error (anthropics/claude-code#97352)"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands on Linux inheriting an open handle on the Claude Code executable"
        },
        {
          "kind": "修正",
          "text": "Fixed the running-tool dot and three spinners still moving with the \"Reduce motion\" setting on, and /rewind's confirm screen updating its \"ago\" time while you type a note"
        },
        {
          "kind": "修正",
          "text": "Fixed times in claude agents changing every second in screen reader mode; they now change at most every 10 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed a revoked claude.ai login showing a generic API Error: 401 instead of \"OAuth token revoked\"; in -p mode the error now starts with \"Failed to authenticate\""
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview upload refusals advising you to copy a variable named by a repository's settings file into your own user settings"
        },
        {
          "kind": "修正",
          "text": "Fixed --output-format stream-json and the SDK not streaming the turns of a context: fork skill run by typing /<skill> as the prompt, as they do for the Skill tool's fork"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback and /bug: the pre-filled GitHub issue no longer includes your recent error messages, and the confirmation screen now lists them as part of the report"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin marketplace add --sparse and git-subdir plugin installs failing with \"transport 'http' not allowed\" when the repository is served over plain http"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions sometimes losing the earlier conversation when the session restarted while it was being compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin reload that overlapped the startup --plugin-url download corrupting the session's cached copy of the plugin archive"
        },
        {
          "kind": "修正",
          "text": "Fixed /desktop quoting partial output when opening Claude Desktop timed out or printed too much output; the error now names the cause"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP connector tool call occasionally running twice, or the connector's calls failing until restart, when its server changed which MCP protocol version it supports"
        },
        {
          "kind": "追加",
          "text": "Fixed SessionStart hooks from synced plugins not running in new cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript's \"N hooks ran\" summary and the verbose debug log's matched-hooks count including Claude Code's internal callbacks, so one configured hook no longer shows as two"
        },
        {
          "kind": "修正",
          "text": "Fixed files Claude sends from cloud and Remote Control sessions failing when the upload finished just after the 30-second timeout; it now waits 35 seconds"
        },
        {
          "kind": "追加",
          "text": "Fixed repositories added mid-session in cloud and SDK sessions not loading their skills and plugins, and loading CLAUDE.md late, after Claude changed directory"
        },
        {
          "kind": "修正",
          "text": "Fixed PNG, JPEG and WebP images over 8,000 pixels on a side failing to send from a remote session; Claude now sends a scaled-down copy"
        },
        {
          "kind": "修正",
          "text": "Fixed messages sent from the Claude apps with 17 to 20 attached files delivering only the first 16"
        },
        {
          "kind": "修正",
          "text": "Fixed headless sessions reporting an MCP server as needing authentication after one refused call, even though later calls succeed"
        },
        {
          "kind": "修正",
          "text": "macOS: Fixed Remote Control sessions started with claude remote-control stopping mid-turn when the Mac went to idle sleep"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed interactive claude hanging or crashing with \"Raw mode is not supported\" when its input is piped or redirected; it now says why and exits (use -p for piped input)"
        },
        {
          "kind": "修正",
          "text": "Bedrock, Vertex, Mantle: Fixed model availability checks under CLAUDE_CODE_SKIP_*_AUTH sending a different Authorization header than real requests when ANTHROPIC_CUSTOM_HEADERS repeats it"
        },
        {
          "kind": "改善",
          "text": "Improved /config: settings that cycle show ‹ › and step both ways with ←/→, narrow terminals stack each value under its label, and PgUp/PgDn page the list"
        },
        {
          "kind": "改善",
          "text": "Improved plugin marketplace errors to say in plain words why a marketplace was ignored or refused, and what to do"
        },
        {
          "kind": "改善",
          "text": "Improved plugin listings to note when a plugin's dependencies were not installed, and updating a plugin now retries an install that did not finish"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's error when Amazon Bedrock rejects a model ID: developers now see which model is unavailable, and the gateway log names the ID that was sent"
        },
        {
          "kind": "改善",
          "text": "Improved SDK sessions so a message sent with priority \"now\" no longer cancels a running web fetch or web search; it keeps loading in the background"
        },
        {
          "kind": "改善",
          "text": "Improved /memory: the left and right arrow keys now flip its on/off settings, such as Auto-memory"
        },
        {
          "kind": "改善",
          "text": "Improved /skill names typed mid-message: Claude is now told they are skills, including disable-model-invocation ones"
        },
        {
          "kind": "改善",
          "text": "Improved the contrast of the prompt input border in light themes and of the ❯ before your earlier messages"
        },
        {
          "kind": "改善",
          "text": "Improved delivery of files Claude sends from cloud sessions and Remote Control: an upload that fails on a timeout, a network error or a 502, 503 or 504 is now retried once"
        },
        {
          "kind": "改善",
          "text": "Improved what Claude says when a file cannot be sent for a reason that may be temporary: it now mentions that you can ask for the file again in a few minutes"
        },
        {
          "kind": "改善",
          "text": "Improved the prompt for a held message from another session to show the message between dashed lines, matching other permission prompts"
        },
        {
          "kind": "改善",
          "text": "Improved MCP and other tool permission prompts to show the tool call between dashed lines, matching file edit prompts"
        },
        {
          "kind": "改善",
          "text": "Improved MCP startup in headless mode: a remote server whose first connect fails transiently is now retried without waiting for the slowest server to finish connecting"
        },
        {
          "kind": "改善",
          "text": "Improved files Claude sends from a remote session: large files now stream from disk instead of being read into memory, and a file over the size limit is refused with the server's limit named"
        },
        {
          "kind": "改善",
          "text": "Improved the explanation Claude gives when the server refuses a file it sends from a Remote Control or cloud session, such as an oversized image"
        },
        {
          "kind": "改善",
          "text": "Improved handling of large MCP tool results: less memory, smaller session files, and no extra upload to count tokens for results far over the limit"
        },
        {
          "kind": "改善",
          "text": "Windows: Improved Bash tool speed by removing a subshell that ran before every command"
        },
        {
          "kind": "変更",
          "text": "Changed a shell write through a repo-committed symlink onto a sensitive file or out of the working tree to name where it lands and wait for a person, on lines with a ~ target too"
        },
        {
          "kind": "修正",
          "text": "Changed Opus 4.7+ and Fable to use a 1M context window by default on Bedrock, Vertex, Foundry and the Claude apps gateway, with no [1m] suffix (CLAUDE_CODE_DISABLE_1M_CONTEXT=1 keeps 200K)"
        },
        {
          "kind": "変更",
          "text": "Changed replies from claude agents to arrive as queued messages; slash commands other than /stop sent while a turn is running now run when it ends"
        },
        {
          "kind": "変更",
          "text": "Changed whole-tool Bash allow rules and allowing hooks to prompt for, not run, shell writes to files Claude Code's file tools refuse outright (the Anthropic profile store, the host credentials file)"
        },
        {
          "kind": "変更",
          "text": "Changed right-click paste on Windows and Linux, and middle-click paste on Linux, to happen when the button is released; moving the pointer away before releasing cancels it"
        },
        {
          "kind": "変更",
          "text": "Changed MCP server alwaysLoad: false to defer all of that server's tools behind tool search"
        },
        {
          "kind": "追加",
          "text": "Changed screen reader mode to write new or changed lines without first pausing with the cursor at the start of the line; set CLAUDE_AX_PREPARK_MS=50 to restore the pause"
        },
        {
          "kind": "追加",
          "text": "Changed automatic model switches after a flagged message to keep your current effort level instead of the new model's default"
        },
        {
          "kind": "追加",
          "text": "Changed waiting permission prompts to show oldest first, so a new prompt no longer covers the one you're reading (prompts with a countdown still open on top)"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added \"Run in background\" to a running command or sub-agent, to move it to the background and keep working"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the output of background shells and Monitors to their cards in the agent map"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed settings dialogs blaming a timeout when Claude Code's reply was too large to confirm a save"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed reopening a cloud session that the side bar already brought to this machine opening it again in a new tab; the side bar is shown instead"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the side bar's Web tab not listing cloud sessions started after the window loaded; a failed load now says \"Remote server is not connected\" instead of \"No web sessions yet\""
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a tab restored after a reload starting a second Claude process on a conversation the side bar already has open; it now shows the \"still open somewhere else\" notice"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed tool-row file links, session-list links and two hints showing in plain text"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a background agent's still-running command showing as failed once the main turn ended"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a user's own /usage or /context command opening the extension's dialog instead of running when picked from the command menu"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed file links in the plan preview tab doing nothing when clicked; they now open the file like links in chat replies"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed opening a tool's input or output in an editor tab failing with \"Timeout waiting after 1000ms\" on remote hosts such as WSL when the tab is slow to appear"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Improved the Manage plugins dialog: a failed marketplace add, remove or refresh now says what went wrong"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the Claude in Chrome \"Enabled by default\" switch to also connect the editor's own sessions, which still ask before browser actions"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed occasional failures to fetch from or push to GitHub when GitHub briefly refused a newly issued access token"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude posting a failure warning, such as a spend limit notice, in a Slack thread when a background event like GitHub activity woke it and nobody was waiting on a reply"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag's spend limits page in admin settings leaving out recently created and private channels in organizations with many channels"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Improved Claude's task list in long Slack threads: background work no longer reposts it as a new message on its own, so people following the thread aren't notified"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed finding comments and their \"Why this was flagged\" text stopping mid-sentence; they now end on a complete sentence"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Fixed Code Review skipping a pull request after a new push when its review had failed twice on the previous commit; it now reviews the latest commit"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the failed-review card on a pull request whose conversation is locked: it now says the lock blocked the review and that nothing was posted or charged"
        }
      ]
    },
    {
      "version": "2.1.286",
      "items": [
        {
          "kind": "追加",
          "text": "Added a count such as \"2 of 5\" to the permission prompt when several permission requests stack up"
        },
        {
          "kind": "追加",
          "text": "Added mouse support for the \"N more\" rows of lists in fullscreen mode: click one to jump to that end of the list, with hover and pressed states"
        },
        {
          "kind": "修正",
          "text": "Fixed several Claude Code processes and IDE extensions each opening a login browser when gcpAuthRefresh or awsAuthRefresh credentials expire"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --resume and --continue sometimes losing every turn after a batch of parallel tool calls when the earlier session crashed or was killed"
        },
        {
          "kind": "修正",
          "text": "Fixed API 400 errors after a tool or hook returned an object, number or boolean instead of text, including in resumed sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions with very large histories never waking up because the container was stopped while the transcript was still loading"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's spend meter pricing 1-hour prompt cache writes at the cheaper 5-minute rate, and counting only the first model call's input tokens on streamed turns that run a server-side tool such as web search"
        },
        {
          "kind": "修正",
          "text": "Fixed macOS sessions still showing \"Not logged in\" or \"Login expired\" after /login succeeds in another Claude Code window when a leftover ~/.claude/.credentials.json exists"
        },
        {
          "kind": "修正",
          "text": "Fixed every turn failing when the Anthropic API refuses the model your default or a model alias resolves to: Claude Code now retries once on the previous model of the same tier"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions (including claude remote-control) staying connected after your organization's policy turns Remote Control off; they now disconnect with a notice"
        },
        {
          "kind": "修正",
          "text": "Fixed refusal and --fallback-model retries failing when the fallback model can't run fast; they now run at standard speed, with a one-time notice in interactive sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed headless sessions repeating the \"MCP servers require authentication\" reminder after a successful re-authentication when the MCP discovery cache is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth status reporting a Console sign-in's stored API key as claude.ai; it now reports api_key, and the VS Code extension treats that session as an API key session"
        },
        {
          "kind": "修正",
          "text": "Fixed /status listing an Anthropic profile beside an API key as if both were in effect; the profile is now marked as not in use"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when a file attached to a message sent over Remote Control did not arrive, and a file sometimes getting only 10 seconds for its last download try"
        },
        {
          "kind": "修正",
          "text": "Fixed a Remote Control message that arrived while Claude Code was exiting being marked delivered and then never answered; it now stays queued for the session's next run"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP error messages showing a credential's value when \"Bearer\" or \"Basic\" came before its key name"
        },
        {
          "kind": "修正",
          "text": "Fixed percent-encoded Bearer tokens being only partly masked in error messages"
        },
        {
          "kind": "修正",
          "text": "Fixed redacted logs and transcripts showing a secret whose key name has an invisible character inside, such as a zero-width space"
        },
        {
          "kind": "修正",
          "text": "Fixed logs and transcripts showing part of a URL password that contains punctuation such as ), quotes, ], & or a second @, or that runs past a / to a bracketed host such as [::1] in an ssh URL"
        },
        {
          "kind": "修正",
          "text": "Fixed the session transcript in the zip that /feedback saves to disk containing invalid JSON lines after secret redaction"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP connectors listing no tools for up to a day after their server dropped the older MCP handshake"
        },
        {
          "kind": "修正",
          "text": "Fixed a repeat MCP sign-in request from Claude replacing the pending sign-in link, which could stop that link from working"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage not crediting an MCP server for a tool call made while that server was still connecting or had only just connected, such as right after a restart"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins enabled on claude.ai occasionally going missing from Claude Code for a session after a transient server error"
        },
        {
          "kind": "修正",
          "text": "Fixed a message typed into a running subagent showing twice in its transcript after the subagent read it"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent hand-back messages showing a raw task id instead of the agent's name when the subagent had no registered name"
        },
        {
          "kind": "修正",
          "text": "Fixed foreground subagents sometimes missing the task-tracking tools (TaskCreate/Get/Update/List, TodoWrite) in sessions that have them enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents spawned with worktree isolation loading the project CLAUDE.md and its imports a second time from the worktree copy on their first file read"
        },
        {
          "kind": "修正",
          "text": "Fixed Workflow tool subagents being restarted from their original prompt when a connection stalled for a few minutes mid-response"
        },
        {
          "kind": "修正",
          "text": "Fixed /compact, /clear, and /rewind typed while viewing a background agent's or teammate's transcript silently acting on the main conversation: a dialog now names the target and asks first"
        },
        {
          "kind": "修正",
          "text": "Fixed background jobs showing done while waiting for your approval"
        },
        {
          "kind": "修正",
          "text": "Fixed the commit attribution reminder being re-sent inside tool output when a model fallback lasts only one turn"
        },
        {
          "kind": "修正",
          "text": "Fixed a click on the space between words of a collapsed row (such as \"Thought for 4s\") highlighting the row without expanding it in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a row with no details, such as an action row with a long name, pushing every other row's details to the right in list screens"
        },
        {
          "kind": "修正",
          "text": "Fixed files with very long names not reaching a cloud session when attached to it"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin errors for a marketplace Claude Code refuses to load: they now say why and how to fix it instead of \"not found\""
        },
        {
          "kind": "追加",
          "text": "Fixed /plugin's Discover tab showing a marketplace name unquoted in its \"Checking … for new plugins\" line when its rows already show that name in quotes"
        },
        {
          "kind": "改善",
          "text": "Improved commit guidance: when your project or user skills include one named verify, Claude is now told to run it right before committing, except for docs-only and tests-only commits"
        },
        {
          "kind": "改善",
          "text": "Improved send now (ctrl+enter) in a subagent's view: it now moves the subagent's running command to the background so your message is read right away"
        },
        {
          "kind": "改善",
          "text": "Improved replies from background agents to your messages so they no longer open with a separate recap of what you said"
        },
        {
          "kind": "改善",
          "text": "Improved claude.ai artifact link reads: WebFetch now asks the same questions as the Artifact tool's read (no artifact prompt while the session's network access is on, one per artifact while it is off), and an auto-mode yes no longer counts where only you can answer"
        },
        {
          "kind": "改善",
          "text": "Improved fetch, skill, file read, sandbox network, Claude in Chrome, workflow script and notebook edit permission prompts to match the look of file edit prompts"
        },
        {
          "kind": "改善",
          "text": "Improved Bash, PowerShell and Monitor permission prompts to show the command between dashed lines, matching file edit prompts"
        },
        {
          "kind": "改善",
          "text": "Improved list scrollbars in fullscreen mode: in most lists the bar no longer shifts as the \"N more\" rows come and go, and it now has ↑/↓ arrows you can click or hold to scroll"
        },
        {
          "kind": "改善",
          "text": "Improved the external editor (Ctrl+G): editors that take a line number now open on the line your cursor is on in the prompt"
        },
        {
          "kind": "改善",
          "text": "Improved slash command suggestion responsiveness while typing when many skills or plugin commands are installed; command descriptions now match by word prefix"
        },
        {
          "kind": "改善",
          "text": "Improved the output style picker: it now opens on your current style instead of Default, with each style's description on the line under its name; number keys no longer pick a style"
        },
        {
          "kind": "改善",
          "text": "Improved /hooks: the closing line of a hook's detail screen now says \"this hook\" instead of \"it\""
        },
        {
          "kind": "改善",
          "text": "Improved the model fallback notice and the autocompact-thrashing error to say when a fallback dropped the context window from 1M to 200K tokens"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness of SDK and -p sessions when a host re-sends an MCP server enable for a server that is already connected"
        },
        {
          "kind": "改善",
          "text": "Improved the protocol page a Claude apps gateway serves at /protocol: it now says not to reject unknown input and matches what Claude Code sends today"
        },
        {
          "kind": "変更",
          "text": "Changed prompts sent while nothing is running or queued to show in the normal text color right away instead of gray"
        },
        {
          "kind": "変更",
          "text": "Changed how failed API requests are retried: one limit now covers a whole model call, so with the default retry settings a failing call sends at most 14 requests"
        },
        {
          "kind": "変更",
          "text": "Changed --bare to connect only the MCP servers named on the command line, send the model no system reminders, and start no background tasks; under --bare, a shell command that reaches its timeout now stops instead of moving to the background"
        },
        {
          "kind": "変更",
          "text": "Changed the send-now key (ctrl+enter) to move a skill's own shell command to the background instead of ending it"
        },
        {
          "kind": "変更",
          "text": "Changed the WebFetch error for a rate-limited domain safety check to tell Claude not to retry it in a loop"
        },
        {
          "kind": "変更",
          "text": "Changed plugin installs to refuse npm sources that are git repositories or folders, and to install plugin dependencies only from registry packages"
        },
        {
          "kind": "変更",
          "text": "Changed list screens (/artifacts, /mcp, /skills, /hooks and others) to always line up each row's details in one column after the names"
        },
        {
          "kind": "変更",
          "text": "Changed the overflow rows of lists to read \"↑ N more\" / \"↓ N more\" instead of \"N more above\" / \"N more below\""
        },
        {
          "kind": "変更",
          "text": "Changed /hooks to open on one list of your configured hooks grouped by event, so viewing a hook takes one Enter instead of three"
        },
        {
          "kind": "変更",
          "text": "Changed the theme picker to a scrolling list that fits your terminal instead of pushing the preview off screen; number keys no longer pick a theme"
        },
        {
          "kind": "変更",
          "text": "Changed /exit's Remove worktree to run after Claude Code stops the servers and shells it started there, which on Windows could keep the folder from being deleted"
        },
        {
          "kind": "変更",
          "text": "Changed the claude-api skill's Managed Agents examples to create environments with limited networking"
        },
        {
          "kind": "変更",
          "text": "Removed the browser link from /ultrareview and claude ultrareview output"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed claude --bg and the agents view refusing a folder that claude already trusts when its trust record was saved with different letter case"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added bookmarks: save Claude's responses and keep them in view in a Bookmarks side panel"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the questions Claude asks and your answers to the conversation: after you answer a question card, a Questions row shows each question with your picks"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added option previews to question cards in the chat panel: the highlighted choice's mockup or snippet shows beside or under the options"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added rows under a message that open to the terminal output, browser tab, browser instructions and selected code sent with it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a second copy of a conversation opening in a tab when it was already open in the side bar; the side bar now switches to it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed settings dialogs reporting a failed save, without re-checking, when Claude Code printed more than 1 MB of output"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an endless \"Teleporting session…\" spinner when the extension stops responding"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the Manage plugins dialog: it says when a turned-off plugin is still on because of other settings, and explains a plugin folder clash"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed Stop and Escape to end only the current turn; background agents keep running and can be stopped one by one from the agent map"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the \"✻ Claude Code\" status bar item to show in every window, so you can open Claude when no file is open"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed an answered question card or approved tool call getting no reply when the session had gone idle after Claude sent a message"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed clearing an organization environment's setup script in admin settings leaving new cloud sessions still running the old script"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the Runner actions menu on the self-hosted environments admin page closing on its own a few seconds after it opened"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed routine runs whose cloud session never started showing as Succeeded in the Runs pane, the routine's page and the sidebar; they now show as Failed"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed clicking an audio or video file in a cloud session's Outputs card opening an empty file search instead of playing the file"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed a routine's page to read \"Due\" with the scheduled time, instead of a next run time in the past, when a scheduled run is late and hasn't started"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added an Add channel button to Claude Tag's spend limits page in admin settings, so a limit can be set on any channel, including a private one, from its channel ID or Slack link"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed memory recall finding nothing in organizations that cannot use the default Sonnet model"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a Slack channel losing its Claude settings when an Enterprise Grid admin moves it to another workspace and the first post afterward doesn't mention Claude"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in a Slack thread occasionally starting over on a fresh machine, losing work it hadn't pushed, when your reply answered a question it had just asked"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed public channel names on Claude Tag's spend limits page in admin settings showing as raw Slack IDs in larger organizations"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved the titles of sessions started from Slack as shown on claude.ai: they now read as the words you typed, without Slack user IDs or escape codes"
        }
      ]
    },
    {
      "version": "2.1.285",
      "items": [
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_WEB_FETCH environment variable to turn off the WebFetch tool"
        },
        {
          "kind": "追加",
          "text": "Added claude --desktop to open the Claude desktop app on the current directory, or on a session with --continue / --resume <id>"
        },
        {
          "kind": "追加",
          "text": "Added claude plugin configure <plugin> to show a plugin's options and which are unset, or save new values read from stdin with --values-stdin"
        },
        {
          "kind": "追加",
          "text": "Added <server>.<key>=<value> to claude plugin install --config, so a bundled .mcpb MCP server's own settings can be set at install time and it starts without visiting /plugin → Configure"
        },
        {
          "kind": "追加",
          "text": "Added allowedProviders managed setting to limit which API providers a machine may use (Anthropic API, a custom endpoint, Bedrock, Mantle, Vertex AI, Foundry, Claude Platform on AWS, or a Cloud gateway)"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_NONSTREAMING_TIMEOUT_RETRIES environment variable to cap re-sends of a non-streaming fallback request that timed out"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p with CLAUDE_CODE_FORK_SUBAGENT=1: a subagent's own Agent call now runs in the foreground, so the subagent gets the child's result"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin and marketplace installs and updates over SSH ignoring the ssh program set in GIT_SSH or in your git config's core.sshCommand"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code refusing to start when the OS denies reading the managed settings file; it now warns and starts without that file's policies. Other read errors and unparseable files stop every session"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions that restarted after their conversation was compacted refusing the next update to an artifact the session had already read or published"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin disable and enable with a full name@marketplace id changing a settings entry in another letter case instead of the installed plugin's own"
        },
        {
          "kind": "修正",
          "text": "Fixed files attached to a message sent over Remote Control being left out after a single failed download; a network error, timeout or server error is now retried up to twice"
        },
        {
          "kind": "追加",
          "text": "Fixed switching models mid-session with a set_model request (such as the Agent SDK's setModel) leaving the new model on the built-in output-token limit and auto-compact window until restart"
        },
        {
          "kind": "修正",
          "text": "Fixed redacted logs and transcripts showing part of a URL password that contains @, or all of it when the URL writes its @ as %40"
        },
        {
          "kind": "修正",
          "text": "Fixed SSH passphrase and new-host prompts from worktree and /teleport fetches taking over the terminal; these fetches now fail fast instead of asking"
        },
        {
          "kind": "追加",
          "text": "Fixed switching off an MCP server added mid-session in SDK and -p sessions leaving its tools available"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p --permission-prompt-tool: a background subagent's permission request now goes to the prompt tool instead of being auto-denied"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp list and claude mcp get, and the not-found error of claude mcp remove, login and logout, printing line breaks and terminal escape sequences from MCP server names and values"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox auto-allow asking for approval on every run of many inline scripts (python3 -c, node -e) just because they contain ="
        },
        {
          "kind": "修正",
          "text": "Fixed fork subagents not keeping the session's plan mode or dontAsk mode: a fork now runs under its parent's permission mode and cannot exit plan mode"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control --help saying --[no-]chrome defaults to the machine's /chrome setting; spawned sessions keep Claude in Chrome off unless --chrome is passed"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents in auto mode prompting a second, redundant reply after each report"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud session creation and /remote-env reading only the newest 20 of an account's environments"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control marking a message as read as soon as it arrived instead of when Claude started on it, and losing a message still queued when the terminal quit (it now arrives on the next resume)"
        },
        {
          "kind": "修正",
          "text": "Fixed installing a plugin with claude plugin install or /plugin putting it into an installed plugin's cache or data folder when their ids differ only in ., -, @ or (macOS, Windows) capitals; the install is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks and SDK permission callbacks seeing a missing or outdated plan on ExitPlanMode when the plan was written in the same response"
        },
        {
          "kind": "修正",
          "text": "Fixed the first reply in cloud sessions arriving tens of milliseconds late, a regression in 2.1.283"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions that authenticate with ANTHROPIC_AUTH_TOKEN against the Anthropic API never loading the organization's policy"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed agent(), parallel() or pipeline() call that a workflow script awaits later, or not at all, being treated as an unhandled promise rejection, which could end a background session"
        },
        {
          "kind": "修正",
          "text": "Fixed synchronous hooks hanging Claude Code while a background process the hook started (for example some-daemon &) kept its output open; the hook now finishes shortly after its own process exits"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch reporting a rate-limited domain safety check as a network or enterprise policy block"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen ctrl+o transcript freezing briefly when opened on turns with hundreds of file reads or searches; tool calls still running when the transcript opens now show their results when they finish"
        },
        {
          "kind": "修正",
          "text": "Fixed Amazon Bedrock mid-stream modelTimeoutException and serviceUnavailableException errors showing a raw JSON body instead of the error message"
        },
        {
          "kind": "修正",
          "text": "Fixed /autofix-pr and /schedule saying the Claude GitHub App is not installed on a repository whose install status had not been checked yet"
        },
        {
          "kind": "追加",
          "text": "Fixed dismissing a row (x) in /artifacts unlinking its file from the artifact, so publishing the same file again created a new artifact instead of updating it"
        },
        {
          "kind": "修正",
          "text": "Fixed Artifact tool publishes after a conversation rewind (Esc Esc) overwriting a file's newer content that Claude had read only in the rewound turns; the publish is now refused until Claude re-reads the file"
        },
        {
          "kind": "追加",
          "text": "Fixed an Artifact allow rule (\"don't ask again\") letting the Artifact tool publish a file outside the working directories without asking; add the file's folder with --add-dir for the rule to cover it"
        },
        {
          "kind": "修正",
          "text": "Fixed /cost and SDK modelUsage reporting a turn under the wrong model when the server answered a refusal with a different fallback model than the client expected"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool so that publishing a page no longer lets Claude overwrite its source file without re-reading it when Claude's earlier read was cut short or the file had changed since"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode skipping its classifier for Artifact tool asset uploads and reads of someone else's artifact when you had approved that artifact earlier in another permission mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a misleading \"core.worktree is set\" error from /ultrareview when the project folder briefly could not be read"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview on macOS and Linux failing to upload the working tree from a git worktree whose per-worktree config sets core.longpaths"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool sometimes reporting a publish as a conflict with another session after retrying a temporary server error, when the first attempt had actually succeeded"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview uploads including uncommitted changes to credential files whose name has a colon before the extension, such as server:8443.key"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare auth failure when two sessions recover a login refresh lock left by a crashed process at the same time"
        },
        {
          "kind": "修正",
          "text": "Fixed the PowerShell tool's permission check skipping deny and ask rules, and caching that failure for later checks, when its command parser failed to start (for example when the machine was out of memory)"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview uploads on macOS and Linux running slowly on some unusual file names, and their credential-file check missing file or folder names with many backup or editor marks"
        },
        {
          "kind": "修正",
          "text": "Fixed a cancelled shell command or hook still starting, and running to its end, when the cancel arrived while it was being set up"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode: after editing in the external editor (Ctrl+G), x or r in NORMAL mode no longer breaks a pasted-text placeholder at the end of the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed responses blocked by the API's output content filter being re-sent and retried, sometimes for minutes, instead of showing the filter's error right away"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins silently skipping a bundled .mcpb MCP server that still needs configuration: /plugin, the install message and claude plugin install now say so and point to Configure"
        },
        {
          "kind": "修正",
          "text": "Fixed compacting or resuming a session failing, opening without its history, or crashing when its saved transcript holds a compaction marker or loop wakeup entry with missing or malformed fields"
        },
        {
          "kind": "修正",
          "text": "WSL: Fixed /ultrareview refusing to upload a checkout on a Linux volume when a changed file's name has a colon or ends in a dot or space"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-running a turn that had ended at --max-turns"
        },
        {
          "kind": "修正",
          "text": "Fixed sign-in that could wait forever after the browser showed success"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed /ultrareview uploading a linked worktree of a repository rooted at your home folder in some cases"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions reporting the uploads folder as missing before any file had been uploaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a reply sent from claude agents to a background session waiting on a permission prompt sometimes approving the pending command"
        },
        {
          "kind": "追加",
          "text": "Fixed claude attach, logs, stop, respawn and rm starting a new session with the command name as its prompt when options came before it, such as from a shell alias"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp list leaving out WebSocket (ws) MCP servers; each is now listed with its URL and health status"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp get showing no Type, Command, Args, or Environment for stdio servers whose config entry omits the type field"
        },
        {
          "kind": "修正",
          "text": "Fixed .claude/settings.local.json allow rules being held back outside a git repository when git's trace2 output is configured"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api eval runner scaffold and report builder writing through a symlink or hard link planted at an output file"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api eval runner scaffold counting responses cut off at max_tokens in the score averages; they are now marked truncated and counted separately"
        },
        {
          "kind": "修正",
          "text": "Fixed &nbsp; showing as literal text in the terminal when a reply uses it to indent text, such as row labels in a markdown table"
        },
        {
          "kind": "修正",
          "text": "Fixed a brief freeze (up to a second) partway through long sessions outside fullscreen mode, which came back after /clear or /compact"
        },
        {
          "kind": "修正",
          "text": "Fixed an approved Edit never going through when its target is a device, such as a file symlinked to /dev/null, and the approval came from the IDE diff view or changed the edit"
        },
        {
          "kind": "修正",
          "text": "Fixed a failing API request being retried up to 21 times when streaming kept failing; the non-streaming fallback now shares the request's retry budget instead of getting a fresh set of retries"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: the native host now reports your computer's name, so connected browsers can be labeled by computer instead of \"Browser 1\" / \"Browser 2\""
        },
        {
          "kind": "改善",
          "text": "Improved Bedrock and Vertex AI sessions to switch to an older available model of the same tier, instead of failing, when an admin removes access to the default model; session titles and summaries now fall back with it"
        },
        {
          "kind": "改善",
          "text": "Improved plugin marketplace errors to name why a git address is refused instead of citing enterprise policy"
        },
        {
          "kind": "改善",
          "text": "Improved validation of git URLs for plugins, marketplaces and the current repository's remote"
        },
        {
          "kind": "改善",
          "text": "Improved Artifact tool results: they now suggest publishing in the same step as writing or editing the page, which can save a round trip"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control: a /btw side question asked of a session hosted by an app such as Claude Desktop now sees the turn in progress, not only the last finished one"
        },
        {
          "kind": "改善",
          "text": "Improved pictures Claude sends as BMP, HEIC, HEIF, AVIF or TIFF files: the Claude apps now show a preview where Claude Code can convert them"
        },
        {
          "kind": "改善",
          "text": "Improved subagents in auto mode: a subagent's run now ends as soon as it hands its report back to its caller, instead of taking extra turns that reach no one"
        },
        {
          "kind": "改善",
          "text": "Improved Bedrock and Vertex start-up model checks: models your account cannot use are now remembered for up to a day instead of being re-checked on every launch"
        },
        {
          "kind": "改善",
          "text": "Improved Artifact tool publish results to use fewer tokens: the note on updating an artifact is shorter, and where to find your artifacts is no longer repeated after every publish"
        },
        {
          "kind": "改善",
          "text": "Improved SDK liveness during a non-streaming fallback request: with partial messages on, a ping stream event is now sent every 30 seconds on the Anthropic API, Claude Platform on AWS and gateways"
        },
        {
          "kind": "改善",
          "text": "Improved /resume and claude --resume on a session that is running in the background: they now open that session instead of refusing, and a prompt given with claude --resume <id> \"prompt\" is sent to it as its next turn"
        },
        {
          "kind": "改善",
          "text": "Improved per-turn performance when many permission deny rules and MCP tools are configured"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness when leaving the ctrl+o transcript view in long sessions when fullscreen rendering is off"
        },
        {
          "kind": "改善",
          "text": "Improved Bedrock, Vertex and Mantle start-up model checks to send the same User-Agent, x-app and session ID headers as regular requests"
        },
        {
          "kind": "変更",
          "text": "Changed MCP tools so a tool that sets its own _meta['anthropic/alwaysLoad'] to false stays deferred when its --mcp-config, Agent SDK or plugin server is set to alwaysLoad"
        },
        {
          "kind": "変更",
          "text": "Changed background Bash and PowerShell commands to stop after a time limit (their timeout with run_in_background, default 30 min, max 2 h); Claude is notified when one is stopped"
        },
        {
          "kind": "変更",
          "text": "Changed Code Review's pull request reviews and /ultrareview to run when disableWorkflows is on, unless the machine running the review has it set by its own administrator (MDM or the managed-settings file)"
        },
        {
          "kind": "変更",
          "text": "Changed sessions behind a custom ANTHROPIC_BASE_URL to use the 1M context window of models that have one (Opus 4.7+, Sonnet 5+, Fable); run /autocompact 200k if your gateway stops at 200K"
        },
        {
          "kind": "変更",
          "text": "Changed Team and Enterprise sessions, and sessions whose sign-in plan Claude Code can't determine, to withhold WebFetch until the organization policy loads if it couldn't be loaded at startup"
        },
        {
          "kind": "変更",
          "text": "Changed /memory so that Auto-memory can no longer be turned on from a background session or from a session one of Claude Code's own tools started; turning it off there still works"
        },
        {
          "kind": "変更",
          "text": "Changed the one-time offer to make auto mode your default permission mode to also show on third-party providers and with telemetry off, when your user settings default to another mode"
        },
        {
          "kind": "変更",
          "text": "Changed claude -p and Python Agent SDK sessions on third-party providers or with telemetry off to start in auto mode when no permission mode is configured, like interactive sessions; --permission-mode still overrides it"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Mantle and Claude Platform on AWS requests to a base URL with a non-default port to include the port in the SigV4-signed Host header"
        },
        {
          "kind": "変更",
          "text": "Changed the MCP server name widgets to be reserved in cloud sessions and on self-hosted runners: your own server under it, or a close spelling such as widgets_, no longer loads, so rename it"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview on macOS and Linux to leave symbolic refs out when uploading a local checkout; a checkout whose current branch is a symbolic ref is now refused with an explanation"
        },
        {
          "kind": "変更",
          "text": "Windows: Changed project and local settings env to no longer set ALLUSERSPROFILE, SystemDrive, or the CommonProgramFiles variables; set them in user or managed settings instead"
        },
        {
          "kind": "変更",
          "text": "Changed /tasks to fold background work Claude Code runs for itself under one \"System tasks\" row; press Enter on it to show those tasks"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview on macOS and Linux to require git 2.31 or newer to upload a local repository; checkouts made with --separate-git-dir are now refused instead of being uploaded with an older method"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview uploads on macOS and Linux to send a partial clone as a working-tree snapshot on git 2.31 or newer, instead of falling back or refusing when git's version looked too old"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview uploads on macOS and Linux to refuse, instead of fetching, a partial clone missing some of its working tree's files on older git versions; a clone made without --filter uploads"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Vertex and Mantle start-up model checks to identify themselves as Claude Code, like other Claude Code requests"
        },
        {
          "kind": "変更",
          "text": "Changed claude mcp get to hide the command, arguments, and environment values of stdio MCP servers provided by plugins; variable names are still shown"
        },
        {
          "kind": "変更",
          "text": "Changed /claude-api so it can no longer be run from Remote Control clients"
        },
        {
          "kind": "変更",
          "text": "Changed /config chrome=true to direct you to the /config panel instead of enabling Claude in Chrome by default; /config chrome=false still turns it off when it was on"
        },
        {
          "kind": "変更",
          "text": "Changed sandbox settings so project settings cannot widen or turn off an admin-required sandbox, replace the proxy behind a managed deny list, extend a strict allowlist, or reopen managed read-denies"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a note under a restored tab's last message when a window reload interrupted it and no reply will follow"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a plugin options form to Manage plugins: installing a plugin that has options asks for the unset ones, and a gear on its row changes them later"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an on-demand diagnostics tool so Claude in the panel can read the Problems panel's current errors and warnings at any time, not only right after it edits a file"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed pressing Enter after typing a slash command running an unrelated menu item picked by fuzzy match, or doing nothing"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an open agent transcript losing the agent's newer messages during a long session"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a message that quotes a Claude Code or IDE tag losing the rest of its text in the chat"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a message sent while Claude was working disappearing from the conversation after the session was reopened"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list's Web tab showing the previous account's sessions after an account switch"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed restored tabs re-running an interrupted turn when VS Code was started with CLAUDE_CODE_RESUME_INTERRUPTED_TURN set, even with Continue After Reload off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Escape stopping the running turn instead of closing the command menu after clicking one of its rows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed opening Past conversations replacing a live conversation with its saved copy"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a Claude tab reloaded after an extension restart staying blank instead of saying how to recover"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed opening a conversation that is already open in another window or app starting a second copy of it without warning; it now asks first"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a hook's reason for blocking or stopping a prompt disappearing after a window reload"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed tabs stuck on a conversation that can't be resumed: the error now says so and offers to start a new conversation"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed every file Read, Write and Edit stalling for ten minutes and then being skipped when the editor stops responding to the extension's automatic save before the tool runs"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the agent map labeling a sub-agent with the session's model instead of the model it actually ran on (e.g. under CLAUDE_CODE_SUBAGENT_MODEL_FORCE or an agent's own model)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed uninstalling a plugin from the Manage plugins dialog, which removed the wrong installation or failed for a plugin installed for the project"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sign-in staying on the authorization-code step after going back and choosing the same sign-in method again"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the chat panel stalling when a long session trims its oldest rows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the conversation disappearing from a session when many agents run"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the editor tab keeping an old name after a session was renamed with /rename, by a SessionStart hook, or on claude.ai"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the agent map's transcript view leaving out messages sent to a running agent"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the Manage plugins dialog: a failed plugin action now opens a popup that explains it and, where there is one, offers the fix"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the Manage plugins dialog to ask before removing a marketplace or turning off a plugin that your project's shared .claude/settings.json turns on"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed Run now on a routine showing internal error text when the run is refused before it starts; it now shows the same explanation as the routine's failure notification"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed MCP_DISCOVERY_CACHE=1, when set in your cloud environment's variables rather than a settings file, to reuse your connectors' tool lists after a session restart; other MCP servers are no longer cached and connect at startup"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added direct messages with Claude for members on an Enterprise plan Standard or Usage-Based Chat seat who also have Cowork; a seat that includes Claude Code is no longer required"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed the Default model setting in admin settings and a channel's Configure page offering models your organization can't use, which made saves or new sessions fail"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the note under Claude's Slack messages saying it answered on a fallback model, and why, disappearing when Claude later edited that message"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Fixed the organization menu in Code Review's \"Add a repository\" dialog showing only a few of your GitHub organizations; it now loads more as you scroll"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the Code Review check run to say when your repository's REVIEW.md wasn't applied, for example on a very large pull request or when REVIEW.md is a symbolic link"
        }
      ]
    },
    {
      "version": "2.1.284",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Sonnet 5.5 (claude-sonnet-5-5), now the default Sonnet model on the Anthropic API — 1M context, $2/$10 per Mtok with $0.20/Mtok cache reads"
        },
        {
          "kind": "追加",
          "text": "Added a \"Yes, but ask again next time\" answer to auto mode's prompt before a read outside the working directories, so you can allow that one read and still be asked about later ones"
        },
        {
          "kind": "追加",
          "text": "Added dollar amounts to the Claude apps gateway spend limit in /usage and the status line (for example \"$271.40 / $500.00 spent this month\") when the gateway runs this version or later; the status line's rate_limits.spend_limit also gains used_usd, limit_usd and period"
        },
        {
          "kind": "追加",
          "text": "Added effortSlider:decreaseEffort, increaseEffort and toggleUltracode keybinding actions, so the /effort slider's arrow and Tab keys can be rebound in keybindings.json"
        },
        {
          "kind": "追加",
          "text": "Added /rate-limit-options to /help and the command menu for claude.ai subscribers, so the usage-limit notices that mention it point to a command you can find"
        },
        {
          "kind": "追加",
          "text": "Added /mcp reconnect all in the interactive terminal to retry every MCP server that failed to connect or needs authentication at once"
        },
        {
          "kind": "追加",
          "text": "Added Claude apps gateway startup warnings when a managed policy's availableModels is empty, or leaves out the model Claude Code starts on without setting model or enforceAvailableModels"
        },
        {
          "kind": "追加",
          "text": "Added auth: { google: {} } for Claude apps gateway telemetry.forward_to destinations, so telemetry can be exported straight to Google Cloud's OTLP endpoint using the gateway's Google Cloud credentials"
        },
        {
          "kind": "追加",
          "text": "Added certificate client authentication (private_key_jwt) between the Claude apps gateway and its identity provider, for identity providers that issue certificate credentials instead of client secrets"
        },
        {
          "kind": "修正",
          "text": "Fixed a damaged response stream showing raw errors such as \"JSON Parse error\" or \"undefined is not an object\", or writing the word \"undefined\" into an answer, instead of being retried or reported as an interrupted response"
        },
        {
          "kind": "修正",
          "text": "Fixed an overloaded or server error arriving right after a thinking block ending the turn with an error instead of being retried"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Prompt is too long\" errors that persisted after compacting: when the compacted request is still too long, Claude Code now compacts once more, keeping less of the recent conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed a session whose model is unavailable, with no fallback model left, showing a bare \"is currently unavailable\" message (or \"Something went wrong\" in cloud sessions) instead of the model-unavailable notice and its Learn more link"
        },
        {
          "kind": "修正",
          "text": "Fixed Agent SDK sessions crashing when a user message contains an image with a malformed source, and failing on every later turn after a malformed document block; a malformed image is now replaced with an explanatory note"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls in a resumed session failing with \"No such tool available\" while their server was still connecting; the call now waits up to 10 seconds for the server"
        },
        {
          "kind": "修正",
          "text": "Fixed repeated calls to the plan-usage endpoint after it rate-limits or rejects your login: /usage, /extra-usage and IDE usage views now back off instead of re-asking"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add reporting success when managed settings restrict MCP servers to plugins; it now refuses and says what to do, instead of saving a server that never loads"
        },
        {
          "kind": "修正",
          "text": "Fixed the /plugin configure screen: boolean options are now a true/false choice instead of free text, number options refuse invalid input, and ←/→ change an options field instead of switching tabs"
        },
        {
          "kind": "修正",
          "text": "Fixed ANTHROPIC_FOUNDRY_RESOURCE being interpolated into the Foundry endpoint host unvalidated; a value that is not a plain resource name is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop behind a Claude apps gateway offering no 1M context option: the gateway now marks each 1M-capable model for Desktop automatically"
        },
        {
          "kind": "修正",
          "text": "Fixed ↓ in shell mode selecting a hidden background-tasks pill, which stopped Backspace and Ctrl+U from editing the prompt"
        },
        {
          "kind": "追加",
          "text": "Fixed Bash tool failing on Windows with many plugins enabled: plugin bin/ directories that don't exist are no longer added to PATH, and inherited entries aren't added twice"
        },
        {
          "kind": "修正",
          "text": "Fixed sparsePaths plugin marketplaces cloning empty and replacing a working local copy on older git (before 2.39), which failed every refresh with \"marketplace.json file is no longer present\""
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen rendering erasing the terminal output above the session when [ in transcript mode writes the conversation to scrollback (macOS and Linux)"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen scroll position jumping to the previous message or to the bottom when a reply finished streaming while scrolled up"
        },
        {
          "kind": "修正",
          "text": "Fixed tab bars in dialogs such as /config and /plugin breaking the title and tab labels mid-word in a narrow terminal; a tab that doesn't fit now moves to the next line whole"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker showing \"+1 model\" below the list after scrolling to the last model; the count now covers only the models below the visible rows"
        },
        {
          "kind": "修正",
          "text": "Fixed /keybindings writing Backspace and Delete bindings for a footer action that does nothing into the generated keybindings.json"
        },
        {
          "kind": "修正",
          "text": "Fixed a rebound agent panel close key (footer:close) typing \"x\" instead of itself on the row of the agent you're viewing"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode . not repeating text typed very fast (for example over ssh or in tmux) or pasted without bracketed paste, and leaving the prompt in INSERT mode after repeating a change with nothing typed (such as cw then Esc)"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode leaving the cursor on an image placeholder's opening bracket after dd on the last line or yy at the end of the prompt, where r or x would break or delete the image"
        },
        {
          "kind": "修正",
          "text": "Fixed a key pressed the instant the terminal regained focus answering the Remote Control enable prompt before its short safety delay restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed the workspace trust dialog appearing a second time after switching renderers or updating when Claude Code was started in the home directory"
        },
        {
          "kind": "修正",
          "text": "Fixed rules symlinked into .claude/rules from outside the project being skipped without ever showing the external-imports approval prompt; a .claude directory symlinked from outside the project now asks for the same approval"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins from marketplaces, claude.ai and npm pre-approving their own tools via allowed-tools under managed allowManagedPermissionRulesOnly; only plugins from an official Anthropic source or a source that managed settings vouch for keep that pre-approval"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed first claude plugin install leaving the plugin enabled and recorded when a dependency's version range could not be met"
        },
        {
          "kind": "修正",
          "text": "Fixed the debug log dropping a failed hook's stderr when the hook also wrote to stdout, and logging nothing for a failed hook with no output; failed hooks now also log their status code"
        },
        {
          "kind": "修正",
          "text": "Fixed {\"decision\":\"block\"} returned by Elicitation and ElicitationResult hooks being ignored; it now declines the MCP elicitation, as exit code 2 does"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions launched without the SendMessage tool (such as by Claude Desktop) still being told to message other sessions with it"
        },
        {
          "kind": "修正",
          "text": "Fixed a photo sent from the Claude app over Remote Control being lost when its queued message was pulled back into the terminal prompt to edit, and the cursor moving one character for a photo with no caption"
        },
        {
          "kind": "修正",
          "text": "Fixed typing a message during an automatic usage-limit wait taking the wait out of the \"Continue automatically at usage limit\" setting's control when that turn hit the limit again"
        },
        {
          "kind": "修正",
          "text": "Fixed usage-limit warnings suggesting /upgrade to users already on the highest Max plan; the warnings and /upgrade itself now point at /usage-credits when it is available"
        },
        {
          "kind": "修正",
          "text": "Fixed the Explore subagent switching to Opus on the Claude API when the session runs a model ID Claude Code doesn't recognize, such as a custom model behind a proxy; Explore now inherits that model"
        },
        {
          "kind": "修正",
          "text": "Fixed /loop status updates in self-paced mode often not being shown because Claude wrote them only in its reasoning; Claude now writes each update, and the outcome when the loop stops, as visible text"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview failing to upload the working tree when started from a git worktree that the Claude desktop app created on macOS or Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands failing to start on Linux when the working directory is write-denied and contains a read-denied directory"
        },
        {
          "kind": "追加",
          "text": "Fixed artifact database write results telling Claude that every viewer sees a write to a viewer's private data/users/ subtree, and added a \"view\" level to as_level"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway answering 431 Request Header Fields Too Large to every request from a sign-in whose identity provider lists many groups; it now accepts request headers up to 256 KiB"
        },
        {
          "kind": "改善",
          "text": "Improved the usage-limit wait: the limit's state and the countdown with the usage-credits option now show as one block under the prompt, and limit messages no longer repeat the countdown"
        },
        {
          "kind": "改善",
          "text": "Improved the \"No such tool available\" error for Claude in Chrome tools called without their prefix: it now names the tool to call"
        },
        {
          "kind": "変更",
          "text": "Improved Monitor event rows to show what each event printed instead of repeating the description, and stopped repeating an unchanged \"Waiting for N … to finish\" line after every event"
        },
        {
          "kind": "改善",
          "text": "Improved Workflow tool sandbox hardening for errors thrown by async script hooks"
        },
        {
          "kind": "改善",
          "text": "Improved startup time and memory use by building only the parts of the settings schema that your settings files actually use"
        },
        {
          "kind": "改善",
          "text": "Improved /claude-api: hillclimb no longer spends rounds on prompt rewordings too small for the eval to measure, and an extra page you ask for beside report.html is built as one local file that loads nothing from the network"
        },
        {
          "kind": "改善",
          "text": "Improved lists such as /tasks, /copy and /hooks: the details after each name now line up in one column when they fit, and otherwise sit at the right edge"
        },
        {
          "kind": "追加",
          "text": "Improved claude plugin marketplace add to say when it replaces a marketplace already added under the same name from a different source, and how to undo it"
        },
        {
          "kind": "変更",
          "text": "Improved the startup refusal when managed settings require a sign-in (forceLoginMethod or forceLoginOrgUUID) and an API key, token or apiKeyHelper is configured: it now names the credential in use, where it is set, and how to remove it"
        },
        {
          "kind": "改善",
          "text": "Improved auto-memory loading: invisible characters and tags that imitate Claude Code's own markup are neutralized in MEMORY.md and recalled memory notes before they reach Claude"
        },
        {
          "kind": "改善",
          "text": "Improved claude remote-control: in a folder you haven't trusted yet, it now asks for workspace trust on the terminal instead of exiting"
        },
        {
          "kind": "改善",
          "text": "Improved artifact pages: Claude writes its design plan into the page instead of the reply, and uses the name you already gave something as the page title"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool so that when Claude is given a claude.ai chat or project link, an artifact from a chat, or an artifact id on its own, it asks for the right link or the content instead of stopping"
        },
        {
          "kind": "変更",
          "text": "Changed interactive terminal and VS Code sessions to start in auto mode when no permission mode is configured, on every plan and provider; permissions.defaultMode still overrides it"
        },
        {
          "kind": "変更",
          "text": "Changed Ultracode into its own toggle in /effort (Tab, or /effort ultracode [on|off]): it no longer forces xhigh effort and stays on at any effort level"
        },
        {
          "kind": "変更",
          "text": "Changed retries after a dropped connection mid-response to share one budget with the rest of the request's retries, so a failing request gives up sooner"
        },
        {
          "kind": "変更",
          "text": "Changed the notice shown when a Sonnet model's safeguards flag a message to explain why it happened and to offer editing and retrying"
        },
        {
          "kind": "変更",
          "text": "Changed safety-related model switches in sessions that pin an Opus model with ANTHROPIC_DEFAULT_OPUS_MODEL or modelOverrides: on the Anthropic API, the API now picks the model to switch to for each kind of flag, not the pinned model"
        },
        {
          "kind": "変更",
          "text": "Changed the non-interactive first turn to still wait up to 2s for connecting MCP servers named by --allowedTools or an mcp_tool hook, even when CLAUDE_CODE_MCP_STARTUP_WAIT_MS is 0"
        },
        {
          "kind": "変更",
          "text": "Changed /recap to decline with a short notice when it arrives relayed from a chat thread (your own included) or from a routine or webhook; typed in the terminal, the Claude apps, Remote Control, -p or an SDK host, it runs as before"
        },
        {
          "kind": "変更",
          "text": "Changed /artifacts to show its filter tabs beside the title with one-word labels (All, Mine, Shared), using the same tab bar as /config and /plugin"
        },
        {
          "kind": "追加",
          "text": "Changed artifact publishing to refuse a file on a network share (a \\\\host\\share path or a /net automount) unless it is on a mapped network drive added with --add-dir"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an optional time above each prompt and response, with a date line where the day changes (Claude Code: Show Message Timestamps setting, off by default)"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added plugin load errors and notes to the Manage plugins rows, with a popup to disable, uninstall or copy the error"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an Ultracode on/off switch under the Effort slider, replacing the slider's Ultracode stop; the model pill shows \"· Ultracode\" at any effort level"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Reload Claude from the Memory dialog restarting before an edited file was saved"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a restored tab opening a conversation another Claude process still has open; it now asks first"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Focus view sections you expanded closing on their own while a sub-agent is working or when the section's first step is trimmed from view"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed typing /model and Enter printing usage text into the chat instead of opening the model selector"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed /feedback on Vertex, Bedrock and Foundry being refused after you pressed Send; the report is now saved on this computer, as the terminal does"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sign-in waiting up to a minute for the Python extension after a window reload"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Claude Code tabs that stopped responding after Restart Extensions: they now reopen on their conversation"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a message from another agent with no recorded sender showing as raw XML in the chat"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed messages from other agents, sessions or channels disappearing after a reload"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a user's own /mcp, /config or /settings command being shadowed by the extension's dialog"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Escape stopping every background agent when no turn was running"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed plugin install links replacing a marketplace you already have that uses the same name"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Prompt is too long\" errors after compaction when a large text file is attached to a message"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed chat links to files with non-ASCII characters, spaces or brackets in their path not opening"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed CLAUDE_CONFIG_DIR in the claudeCode.environmentVariables setting to apply only when it is an absolute path, and passed it to terminals that continue the chat"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a routine's Edit and Duplicate controls saying the routine was still loading while you were offline; they now tell you you're offline"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added model family choices such as \"Opus (latest)\" for a thread, a channel default or your DM, so the choice follows the newest model in that family"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added the spend that counts toward your organization-wide limit to the analytics spend projection chart, with how much of the limit is used"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the earlier Claude in Slack app's progress card and link previews omitting the repository and Create PR button when a GitHub Enterprise host name contains an underscore"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude staying silent in a channel whose environment declines to start it; it now posts one notice asking you to contact an admin, and retries when @-mentioned"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude to post its private sign-in notice at every @mention from someone who hasn't connected their Claude account, instead of going quiet after the first"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved \"Notify members now\" in admin settings: one press reaches every workspace your organization claimed in an Enterprise Grid, and more members in large workspaces"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude's wait notice on self-hosted environments with on-demand runners: it now says whether a runner is starting, a start will be retried, or no runner will start"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved the error shown when adding a channel manager fails because the channel's Slack workspace can't be confirmed as connected to your organization"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved a channel's access lists in admin settings to show the connectors, repositories and plugins an auto-join pattern attaches, and where each comes from"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved adding repositories as a channel manager: when your GitHub sign-in can't confirm you're a repository admin, the page asks you to sign in with GitHub"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review giving up without posting a finished review when an unsubmitted review under its GitHub App was open on the pull request; it now retries the post first"
        }
      ]
    },
    {
      "version": "2.1.283",
      "items": [
        {
          "kind": "追加",
          "text": "Added x-claude-code-prompt-id to the gateway hint headers so LLM gateways can group the requests that serve one user prompt; opt in with CLAUDE_CODE_GATEWAY_HINT_HEADERS=1"
        },
        {
          "kind": "追加",
          "text": "Added availableModelsMatch managed setting: with \"exact\", an availableModels entry allows only the model version it names, so new releases stay blocked until listed"
        },
        {
          "kind": "追加",
          "text": "Added deniedModels managed setting to block specific models, even when availableModels allows them"
        },
        {
          "kind": "追加",
          "text": "Added MCP tool, WebFetch and WebSearch outputs to the tool.output OpenTelemetry span event when OTEL_LOG_TOOL_CONTENT=1"
        },
        {
          "kind": "追加",
          "text": "Added /doctor prompt-audit (also /checkup prompt-audit) to audit your CLAUDE.md files, skills, agents and commands for prompting patterns written for older models"
        },
        {
          "kind": "追加",
          "text": "Added click-to-expand for truncated messages from your other sessions in fullscreen mode"
        },
        {
          "kind": "追加",
          "text": "Added path to --plugin-dir load-failure entries in the stream-json system/init plugin_errors, naming the directory that did not load"
        },
        {
          "kind": "追加",
          "text": "Added an opt-in load_test_mode block to the Claude apps gateway config: requests are built and signed but not sent upstream, and clients get a canned reply, so a deployment can be load tested"
        },
        {
          "kind": "追加",
          "text": "Added a mantle upstream provider to the Claude apps gateway for Amazon Bedrock's Mantle endpoint"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK sessions losing a deferred tool call or finished tool result when a turn ended early, a held approval prompt after a worker restart, and a non-streaming fallback's result.usage"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP progress notifications being discarded once a long-running tool call moved to the background; the background task now shows the latest progress"
        },
        {
          "kind": "修正",
          "text": "Fixed stdio MCP servers being left running when the session ended while they were still starting"
        },
        {
          "kind": "修正",
          "text": "Fixed a brief HTTP 404 from a stateless remote MCP server (for example a proxy mid-redeploy) leaving that server unusable for the rest of the session while still shown as connected"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP sign-in for a server with no valid URL failing with an opaque SDK error; /mcp no longer offers Authenticate for such servers"
        },
        {
          "kind": "修正",
          "text": "Fixed the weekly Fable limit not appearing in /usage and the VS Code usage meters when telemetry is disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed /model accepting Sonnet 4.6 or Sonnet 5 with [1m] when the id carried a date or -v1:0 suffix, in the cases where the plain id was refused"
        },
        {
          "kind": "修正",
          "text": "Fixed /model picker showing a hardcoded Haiku version and price when ANTHROPIC_DEFAULT_HAIKU_MODEL pins a different model"
        },
        {
          "kind": "修正",
          "text": "Fixed dynamic workflows started during a model fallback running every agent on the fallback model instead of retrying the configured model"
        },
        {
          "kind": "修正",
          "text": "Fixed DISABLE_PROMPT_CACHING_HAIKU having no effect when Haiku is the session's main model"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate saying Claude Code accepts a plugin or marketplace name it cannot install; such names in marketplace.json now fail validation"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate passing plugins whose outputStyles, themes, monitors, or lspServers paths are missing or point outside the plugin directory"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin details showing 0 MCP servers for plugins that declare their servers in plugin.json"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin marketplace remove not saying which installed plugins it uninstalled with the marketplace; it now lists them"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin uninstall removing the other of two installed plugins whose ids differ only in case, with its options and secrets, when the one named had no enabledPlugins entry at that scope"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins that declare no version being silently restored at their source's newest commit, not the installed one, when their cached files were missing"
        },
        {
          "kind": "修正",
          "text": "Fixed user-installed plugins and marketplaces failing to load with \"cache-miss\" after the home or config directory was moved, for example in bind-mounted devcontainers"
        },
        {
          "kind": "修正",
          "text": "Fixed installed_plugins.json showing no plugins when it holds a record under an invalid plugin id; such a file loads again"
        },
        {
          "kind": "修正",
          "text": "Fixed installed_plugins.json being rewritten, losing records, when it holds a record this version cannot read; claude plugin commands now name the record and say how to recover"
        },
        {
          "kind": "修正",
          "text": "Fixed permission dialogs in screen-reader mode reading quoted commands and paths as if they were the dialog's own text"
        },
        {
          "kind": "修正",
          "text": "Fixed /context not counting MCP server instructions: they now appear as their own row and count toward the total"
        },
        {
          "kind": "修正",
          "text": "Fixed markdown links in the Warp terminal rendering as plain text instead of clickable hyperlinks"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp add, add-json, and remove reporting success when the user or local config file could not be written, for example inside a sandbox"
        },
        {
          "kind": "修正",
          "text": "Fixed the first words of a reply in a cloud session sometimes appearing late instead of streaming as Claude writes them"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude's built-in keybindings guide saying chords time out after 1 second instead of 3, and calling cmd an alias of meta, which could produce cmd+ shortcuts most terminals never send"
        },
        {
          "kind": "修正",
          "text": "Fixed keybindings.json silently accepting a misspelled modifier such as ctl+k; it now warns in the debug log and suggests the fix"
        },
        {
          "kind": "修正",
          "text": "Fixed footer hints still saying \"Enter to view\" after footer:openSelected was rebound or unbound in keybindings.json"
        },
        {
          "kind": "修正",
          "text": "Fixed keys typed quickly together (type-ahead, key repeat, bursts over ssh or tmux) sometimes being handled against stale state"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree checkouts failing certificate verification (for example on Git LFS downloads) when the CA certificate is passed to git as GIT_CONFIG_COUNT environment pairs"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed git asking credential helpers to store the sandbox proxy's login, which printed \"failed to store\""
        },
        {
          "kind": "修正",
          "text": "Fixed managed sandbox settings being ignored entirely when one nested value was invalid; the invalid value now fails closed and the rest of the block still applies"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude's edits to its own auto-memory notes being blocked as sensitive-file writes when Claude Code was started in a subdirectory of a git repository"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control being unavailable on paid plans when telemetry is turned off with DISABLE_TELEMETRY or DO_NOT_TRACK"
        },
        {
          "kind": "修正",
          "text": "Fixed the /remote-control menu cutting its QR-code hint mid-word in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode . dropping a Shift+Enter newline, leaving the cursor inside an accented letter, and repeating an older change after 3J or Visual-mode J on the last line"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode cursor placement: recalling a prompt over 10,000 characters in normal mode no longer leaves the cursor past the end, and V then p now lands on the first non-blank"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode J joining lines with different spacing than Vim (such as a space before ) or after a tab), and 3J or Visual-mode J on the last line not moving the cursor as Vim does"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed the PowerShell tool letting cmd /c rd, rmdir, del or erase delete drive roots, the home folder and other folders that Remove-Item refuses"
        },
        {
          "kind": "改善",
          "text": "Improved the /mcp tool list: it shows more tools at once, scrolls with the page keys and mouse, and marks tools your organization blocked with a warning icon"
        },
        {
          "kind": "改善",
          "text": "Improved MCP tool results: images returned by MCP tools are now also saved to a file, so Bash, Read and other tools can open them"
        },
        {
          "kind": "改善",
          "text": "Improved /tasks: rows show a status icon, the name and whole facts, the title and key hints stay on screen with many tasks, and the list gains paging keys, the mouse wheel and clicks"
        },
        {
          "kind": "改善",
          "text": "Improved lists in /help, /hooks, /copy, /chrome, /memory, /ide, /release-notes, /rewind, /diff, /remote-env, /plugin and other pickers with page keys, mouse wheel and clicks"
        },
        {
          "kind": "改善",
          "text": "Improved lists beside a search box, such as /skills and /artifacts, to draw their pointer dim while the search box has the keys, so only one pointer is highlighted"
        },
        {
          "kind": "改善",
          "text": "Improved the compaction spinner: its timer now starts when compaction begins and it counts the summary's tokens as they stream, replacing the percentage bar"
        },
        {
          "kind": "追加",
          "text": "Improved the browser page shown after signing in to an MCP server: centered layout, dark mode, and new artwork"
        },
        {
          "kind": "改善",
          "text": "Improved the Skill tool's reply when a skill belongs to a plugin that failed to load, so Claude tells you the plugin could not be loaded instead of calling the skill uninstalled"
        },
        {
          "kind": "改善",
          "text": "Improved prompt-audit on Claude Code configuration: stale paths, stale commands and contradicting instruction files now lead the report, and thinking keywords that Claude Code documents are kept"
        },
        {
          "kind": "改善",
          "text": "Improved recovery from an installed_plugins.json that cannot be read at all: its contents are kept in a file beside it before it is rebuilt, and claude plugin list names that file"
        },
        {
          "kind": "改善",
          "text": "Improved artifact database reads: an ordered query that returns a full page now says it is one page and how to read the rest"
        },
        {
          "kind": "改善",
          "text": "Improved first-reply latency: a pattern-compile step that ran at the end of a session's first reply now runs while the reply streams in"
        },
        {
          "kind": "改善",
          "text": "Improved first-request latency by reusing the preconnected API connection"
        },
        {
          "kind": "改善",
          "text": "Improved startup: claude -p and Claude Code Remote no longer load the interactive UI, and the auto-mode classifier's rules and the Artifact tool load on first use instead of at launch"
        },
        {
          "kind": "改善",
          "text": "Improved startup for claude.ai accounts whose Artifact tool features aren't known yet, as on a first run: the prompt no longer waits up to 1.5 s to check them; the first message waits if needed"
        },
        {
          "kind": "変更",
          "text": "Changed interactive sessions on third-party providers or with telemetry off to start in auto mode when no permission mode is configured; permissions.defaultMode still overrides it"
        },
        {
          "kind": "変更",
          "text": "Changed the /ultrareview launch dialog to say that reviewing a local branch may upload uncommitted changes to tracked files"
        },
        {
          "kind": "変更",
          "text": "Changed the /model picker's Opus row and the Default model's name to drop \"(1M context)\" where Opus already has a 1M context window; the window is unchanged"
        },
        {
          "kind": "変更",
          "text": "Changed prompt suggestions in the terminal to appear less often after 20 in a row go unused; using one brings them back"
        },
        {
          "kind": "変更",
          "text": "Changed --system-prompt and --append-system-prompt to accept their text and -file forms together; the file's text comes first"
        },
        {
          "kind": "変更",
          "text": "Changed Skill(anthropic-skills:<name>) deny rules to also block that skill when Claude Desktop delivers it as a plugin, and Skill(skill:<name>) denies to match the skill's alias and display name"
        },
        {
          "kind": "変更",
          "text": "Changed /rewind and /diff lists to move on the same keybinding actions as every other list (select:*); messageSelector:*/diff:* rebinds still work"
        },
        {
          "kind": "変更",
          "text": "Changed the /workflows run list to size itself like other lists: half the terminal inline, and it keeps its title on screen when the prompt shows below"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin eval to require git 2.31 or later when git is installed; a run on an older git is refused with a message naming the version"
        },
        {
          "kind": "変更",
          "text": "Changed artifact watching: a watch that was armed automatically (not one you asked for) now ends after 3.5 hours with no activity; publishing or watching the artifact again re-arms it"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed lifecycle hooks' git to skip a repository's Git LFS pre-push hook, ignore a writable system core.hooksPath, and not sign commits without --configure-git"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed GIT_SSL_CAINFO and GIT_SSL_NO_VERIFY under Anthropic-managed git: the runner's own git always verifies Anthropic's git route, and warning lines say what applies where"
        },
        {
          "kind": "修正",
          "text": "Reverted the 2.1.282 reservation of the claude-ai name: skills, commands, workflows and MCP servers' skills and prompts so named load again, and Skill(claude-ai:*) rules are ordinary prefix rules"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the permission mode indicator showing Default while the session kept running in auto or bypass mode after an automatic switch out of it failed; the switch is now retried until it lands"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a session teleported from the web dropping the messages sent while Claude was working"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a Web session staying hidden from the session list, and an empty chat opening in its place, when an older version had saved an empty local copy of it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a reopened session splitting a turn at a message Claude received mid-turn, such as an automatic continuation"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a reloaded session showing a rewound-away turn, or only the rows before a compaction"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the footer's agents pill drawing its icon off-center, with the status dot against the edge, in narrow panels"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the chat input showing its text slightly below the cursor and selection after pasting lines that end with a line break into a long prompt"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved adding a repository to a running cloud session: a private repository your GitHub account can read but not push to now attaches for reading"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed cloud sessions occasionally redoing an already-finished step, such as posting a duplicate comment or push, after recovering from a server-side restart"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Changed new routine schedules to default to a few minutes past the hour, with a note that routines set exactly on the hour can start several minutes late"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a \"Channels Claude can search\" admin setting that limits Claude's Slack search to public channels it has been added to, set per organization, workspace or channel"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Back to Slack button on the page shown after connecting your Claude account, returning you to the thread you started from"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a channel's configure page listing no connectors or plugins when the channel gets its access bundle through an attach rule; rule-attached bundles are now shown"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed access-bundle repository search missing repositories on GitHub App installs that are limited to a large list of selected repositories"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude occasionally posting the same reply twice when a new message interrupted it mid-reply"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed channel routines that stopped running in older private channels whose Slack channel ID changed, for example after a Slack Connect share"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed conversations in a channel set to \"Channel only\" all ending when a non-guest member joined and Slack was slow to confirm their membership"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed \"@claude review\" requests going silent when GitHub failed to return the pull request: the request is retried once, and a comment explains if it still fails"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed billing for a review that stopped at its time limit with nothing verified: it now shows as incomplete, isn't charged, and is retried once"
        }
      ]
    }
  ]
};
