/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.304",
      "items": [
        {
          "kind": "追加",
          "text": "Added a transcript line when a plugin that runs first skips one of your mod's hooks, naming the event and the plugin"
        },
        {
          "kind": "追加",
          "text": "Added decider: \"person\" to a mod's tool.check answer: only the permission dialog or a host's callback can approve the ask, and it is refused with the mod's reason where nobody can be asked"
        },
        {
          "kind": "追加",
          "text": "Added e.isReadOnly to a mod's tool.check event, set when the tool call is read-only"
        },
        {
          "kind": "追加",
          "text": "Added /auto-mode-setup: a guided setup that reads your project and recent sessions to teach auto mode about your environment, now also available on Bedrock, Vertex, Foundry, Claude apps gateway and telemetry-disabled sessions"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api managed-agents-secure, which compares a Managed Agents agent's settings with Anthropic's published security guide, without changing anything"
        },
        {
          "kind": "追加",
          "text": "Added the names of the tools called earlier to the compaction summary in the transcript view (Ctrl+O)"
        },
        {
          "kind": "追加",
          "text": "Added a warning on Pro and Max plans when resuming an inactive conversation would use a noticeable share of your 5-hour usage limit: resume anyway, or start a new conversation and Claude can look up the previous one if you refer to it"
        },
        {
          "kind": "修正",
          "text": "Fixed the organization policy not refreshing until the hourly check after approving an ANTHROPIC_API_KEY at startup or switching \"Use custom API key\" in /config"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands failing to start on Linux when a sandbox.filesystem.denyRead glob contains brackets that are not a character class, such as a [user-id] route folder"
        },
        {
          "kind": "修正",
          "text": "Fixed rm -r of a mounted drive or a folder at its top level (/Volumes, /media, WSL's /mnt/c) not getting the safety prompt that rm -rf /Applications gets"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_TRANSCRIPT_LOCAL_GC dropping messages from the saved transcript when the disk filled up while the file was being trimmed"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin keeping a headless run going past --max-turns, Stop, or ended input by spawning subagents or re-running a finished one"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed mod reload removing the tools and commands of the version that stays loaded, and its messages being wrong or silent about whether the previous version is still loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a click on a mod's button being lost when buttons with the same label and no key were redrawn unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed mod sharing in the built-in plugin-authoring skill stopping at the secret scan on machines with managed settings and on Team and Enterprise plans"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled Cowork cloud sessions waiting five minutes again for each subagent whose WebFetch needed a URL approval that nobody was there to give"
        },
        {
          "kind": "修正",
          "text": "Fixed Write results and rejected edits showing a file outside the working directory as ../../…; they now show ~/… or the full path"
        },
        {
          "kind": "修正",
          "text": "Fixed a claude.ai Directory plugin's skills not running as commands when picked from the \"/\" menu in Cowork cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control permanently withholding a desktop conversation's history when a different account was signed in to the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control failing to start from Claude Desktop when DISABLE_TELEMETRY or DO_NOT_TRACK is set on a paid plan"
        },
        {
          "kind": "修正",
          "text": "Fixed model switches, messages and interrupts waiting behind a context usage check in SDK and desktop sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed context_management: Extra inputs are not permitted errors behind LLM gateways; Claude Code now resends the request without that field"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry settings delivered through server-managed settings being ignored for the whole session after signing in during first-run setup or the first start after /logout"
        },
        {
          "kind": "修正",
          "text": "Fixed unsandboxed Bash commands in Claude Desktop Code tab sessions on macOS and Linux not seeing environment variables exported in shell startup files such as ~/.zshrc"
        },
        {
          "kind": "修正",
          "text": "Fixed the Consumer Terms notice being skipped for a day or longer after a server error"
        },
        {
          "kind": "修正",
          "text": "Fixed /privacy-settings offering choices that may not apply to you after a network or server error"
        },
        {
          "kind": "修正",
          "text": "Fixed a \"Context limit reached\" or \"Prompt is too long\" error after stopping a turn while Claude Code was compacting a conversation the API had rejected as too long"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents sometimes forgetting their most recent work when they were messaged or resumed right after finishing"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --help text for --tools, --resume, --debug, --json-schema, --disable-slash-commands, --system-prompt-snapshot and claude update to match actual behavior"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --worktree removing the worktree and its branch without asking at exit when HEAD was detached or on another branch, which could lose commits"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed and cloud sessions sending Claude the whole skill list again each time plugins reloaded at startup"
        },
        {
          "kind": "修正",
          "text": "Fixed an interrupt not ending a Read that waits on an idle pipe or device named like an image"
        },
        {
          "kind": "修正",
          "text": "Fixed /effort status, /effort ultracode and the prompt's effort indicator showing a guessed effort level when CLAUDE_CODE_EFFORT_LEVEL is auto or unset and no level is sent"
        },
        {
          "kind": "修正",
          "text": "Fixed a PreToolUse hook's deny reason being replaced by a timeout error when an Agent SDK callback hook on the same tool call timed out"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash and PowerShell deleting a large command's output file when it could not be copied to the session's tool-results folder, unless the disk is full"
        },
        {
          "kind": "修正",
          "text": "Fixed notes typed into a multiple-choice question with previews being cut off with \"…\" in terminals under about 100 columns, hiding what was typed (anthropics/claude-code#82768)"
        },
        {
          "kind": "修正",
          "text": "Fixed self-paced /loop wakeups scheduled at the 1-hour maximum firing just after the 1-hour prompt cache expired, so those wakeups no longer re-read the conversation uncached"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: approving a shutdown request from the main session no longer exits the whole CLI"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill's once hook also removing another skill's identical hook after it ran"
        },
        {
          "kind": "修正",
          "text": "Fixed transcript mode's { and } landing the prompt on an inconsistent row, or off screen, instead of the transcript's first row"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_AUTO_COMPACT_WINDOW=200k silently setting a 100K window: the variable now accepts k and M suffixes like --autocompact, and warns when a value is out of range or ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C in the agents view clearing a text selection without copying it when pressed before the mouse button was released"
        },
        {
          "kind": "改善",
          "text": "Improved /usage to say when a rate limit on usage data ends instead of \"try again in a moment\""
        },
        {
          "kind": "改善",
          "text": "Improved the lines shown when a mod written in the session loads, reloads or fails to load"
        },
        {
          "kind": "改善",
          "text": "Improved artifacts with several views: when you ask for links to them, Claude now writes out each view's link and explains that the address bar stays the same as you switch views"
        },
        {
          "kind": "追加",
          "text": "Improved cloud sessions: a new conversation's first turn no longer waits for the local (stdio) MCP servers of plugins synced from claude.ai, unless a server sets alwaysLoad: true"
        },
        {
          "kind": "改善",
          "text": "Improved how a remote session recovers its status when the server refuses a status update that carried other session data"
        },
        {
          "kind": "改善",
          "text": "Improved session file size in auto mode: the safety classifier's context is no longer stored with every request"
        },
        {
          "kind": "改善",
          "text": "Improved the claude -p invalid-settings warning: a file that did not load lists only what stopped it, and long lists are capped per file"
        },
        {
          "kind": "改善",
          "text": "Improved resume of large compacted sessions in SDK and headless mode: the first request after resuming is sent sooner"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness and throughput when many subagents are running at the same time"
        },
        {
          "kind": "改善",
          "text": "Improved memory use when sending requests in long or resumed conversations"
        },
        {
          "kind": "改善",
          "text": "Self-hosted runner: Improved the error shown when the git host answers \"not found\" for a session's repository: it now names the repository and whom to ask"
        },
        {
          "kind": "改善",
          "text": "Windows: Improved git command start-up with a standard Git for Windows install by running its git.exe directly instead of through its cmd launcher"
        },
        {
          "kind": "変更",
          "text": "Changed mods' settings.read hooks to receive each settings layer and rewrite the merged settings, so a managed mod can make an organization's setting a ceiling, including the cleanupPeriodDays the retention sweep uses"
        },
        {
          "kind": "変更",
          "text": "Changed the /artifacts delete confirmation to show numbered choices: 1 or Enter keeps the artifact, 2 deletes it, and y, n and Esc still work"
        },
        {
          "kind": "追加",
          "text": "Changed the question that turns on the mods Claude writes in a session to plain text with no link or session id; it stays up when a new turn starts, and Claude tells you what loaded when you turn them on"
        },
        {
          "kind": "変更",
          "text": "Changed tool search to be on by default behind a custom ANTHROPIC_BASE_URL; a 400 or 422 from the gateway is retried without it"
        },
        {
          "kind": "追加",
          "text": "Changed compaction to send Claude the skill list again afterwards; /reload-skills now sends only new or changed skills"
        },
        {
          "kind": "変更",
          "text": "Changed skill hooks: the skills of one source (a repo, your own folder, or a plugin) can register at most 1,024 hooks and 16,384 matcher characters per session"
        },
        {
          "kind": "変更",
          "text": "Changed skills under a policy that allows hooks from plugins only: a skill used in the main conversation whose hooks are kept out no longer gets its allowed-tools"
        },
        {
          "kind": "その他",
          "text": "Updated the /claude-api skill to use the ant CLI on Claude Platform on AWS instead of falling back to the SDK or curl"
        },
        {
          "kind": "変更",
          "text": "Removed the notes from claude plugin validate that predicted where a mod's hooks would run"
        },
        {
          "kind": "変更",
          "text": "Removed the \"(research preview)\" label from the /fast dialog title on Opus 5.5"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added mod drawing in the chat panel for sessions on Amazon Bedrock, Google Vertex AI and Microsoft Foundry, behind an LLM gateway, or with telemetry turned off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed one cause of sessions failing to start with \"Subprocess initialization did not complete within 60000ms\": time a SessionStart command hook spends running no longer counts toward the limit, up to 10 minutes in total"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a session closed while it was starting keeping its Claude Code process running until the start ended"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a mod's drawings disappearing from a long-open panel until the next turn on machines that also run an older Claude Code"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Past conversations hiding sessions when claudeCode.claudeProcessWrapper is set"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed background sub-agents to show as one status line under their Agent card instead of streaming every step into the chat; the full transcript stays in /tasks"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed folders in the composer's @ list showing no name in cloud sessions, where picking one added only a space instead of a mention"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude going silent in a thread when its channel becomes shared across Enterprise Grid workspaces mid-task; it now posts a one-time note to @-mention it in a new thread"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed @Claude !fork typed outside a thread getting no visible reply; Claude now shows you a private note saying to run it from inside a thread"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added review levels to Code Review: Owners choose Quick, Standard (the default), or Deep for the organization, and can give individual repositories their own level"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added an option in Code Review admin settings to review every repository in a GitHub organization, including ones added later, without selecting them one by one"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed pull requests opened within a minute or two of an admin turning on Code Review being silently skipped; they are now retried and reviewed"
        }
      ]
    },
    {
      "version": "2.1.303",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.302",
      "items": [
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_AUTO_MODE_MODEL to choose the model the client-side auto mode classifier uses; it does not change the model for server-side auto mode"
        },
        {
          "kind": "追加",
          "text": "Added an Idle compaction row to /config for turning idle compaction off or back on; the notices shown after an idle compaction now say how to turn it off"
        },
        {
          "kind": "追加",
          "text": "Added a notice to /design-sync and /design-login that standalone Claude Design (claude.ai/design) closes by December 14, 2026"
        },
        {
          "kind": "修正",
          "text": "Fixed a \"Prompt is too long\" error when stopping a turn while the conversation was being compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing with \"diagnostics: Extra inputs are not permitted\" after switching to Vertex or Bedrock mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool loading an image file of any size, or a pipe or device named like an image, entirely into memory; image sources over 128 MB are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed /autocompact and /effort saving to the wrong model when a gateway names Opus 4 or 4.1 with a prefix, such as anthropic/claude-opus-4-1"
        },
        {
          "kind": "追加",
          "text": "Fixed a prompt cache miss when a tool added mid-session was loaded again through ToolSearch or after compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin and other subcommands sometimes exiting before a queued settings or config write finished, which could lose the change or leave a .tmp file behind"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin marketplaces re-cloning on every refresh, and newly installed git plugins showing version \"unknown\", when git defaults to the reftable ref format"
        },
        {
          "kind": "修正",
          "text": "Fixed the PowerShell tool not finding commands in a plugin's bin/ folder, and reporting an error when a search that finds nothing (rg, grep, findstr, git grep) is piped into Select-Object or another formatting cmdlet"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in the desktop app pointing you to claude.ai settings or /mcp to authorize or reconnect an MCP server where that option isn't available"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publishes sometimes failing when Claude sent an empty list of edits, and Claude retrying an artifact update the wrong way after a newer version of the artifact turned it away"
        },
        {
          "kind": "追加",
          "text": "Fixed classifier_category missing from OpenTelemetry tool_decision events for most auto mode classifier blocks, and new tool_decision attributes pushing out tool_use_id, tool_source and tool_parameters when OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT is low"
        },
        {
          "kind": "修正",
          "text": "Fixed rows in the agents view staying blank after moving down a long list or folding a section"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control --help not printing its usage and exiting when not signed in"
        },
        {
          "kind": "修正",
          "text": "Fixed /design consent and /design revoke suggesting /design-login when they fail in a cloud session, where it isn't available; the message now points to claude.ai/design/settings"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers showing no tools, or every tool call failing, when the server negotiates protocol version 2026-07-28 but omits resultType, ttlMs or cacheScope"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt suggestions spending usage credits on models your plan pays for only with credits: they are now skipped after a reply billed to credits"
        },
        {
          "kind": "修正",
          "text": "Fixed URLs written in backticks being clickable only on their first row when they wrap; the whole URL is now one link in terminals that support hyperlinks"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin details <name>@builtin suggesting claude plugin list, which never shows built-in plugins, when the plugin isn't found; it now points to /plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed an emoji that a link starts inside wrapping one column too wide, which hid it in question previews and turned tables into lists"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree isolation refusing to create or resume worktrees under git 2.56 or later when a stray .git file points at a directory that doesn't exist"
        },
        {
          "kind": "追加",
          "text": "Fixed a cloud session's cost and usage restarting from zero after the session resumed in a new process"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed git fetches failing with \"bad object refs/heads\" in sessions that reuse a checkout stored in git's reftable format"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed every file write being refused or asked about for projects on exFAT or FAT32 drives, including in sessions started with --plugin-dir"
        },
        {
          "kind": "改善",
          "text": "Improved startup time with many plugins enabled: plugin command and agent files now take far fewer file system calls to load, most of all on Windows"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode with the server-side classifier: a conversation too long for the safety check is now compacted, instead of every checked tool call being denied"
        },
        {
          "kind": "改善",
          "text": "Improved the message when a background session reopened from another folder has no LLM gateway: it now says why, instead of \"Not logged in\""
        },
        {
          "kind": "変更",
          "text": "Changed claude -p and Agent SDK sessions with no permission mode to start in default mode on third-party providers, with telemetry off or on a fresh install; --permission-mode auto keeps auto"
        },
        {
          "kind": "変更",
          "text": "Changed fork subagents (subagent_type: \"fork\") to be on by default in claude -p, the Agent SDK, the desktop app and VS Code, as they already are in the terminal; CLAUDE_CODE_FORK_SUBAGENT=0 turns them off, and claude mcp serve never offers them"
        },
        {
          "kind": "変更",
          "text": "Changed the desktop app and VS Code to always run the main conversation's subagents in the background, as the terminal does, rather than let Claude choose; a subagent's own Agent calls in claude -p, the Agent SDK, the desktop app and VS Code now run in the foreground by default"
        },
        {
          "kind": "変更",
          "text": "Changed the ← for agents footer hint to hide 10 seconds after a session opens; the count of agents waiting on you still shows"
        },
        {
          "kind": "追加",
          "text": "Changed where the Claude in Chrome instructions sit in the system prompt so that new conversations can read them from the shared prompt cache"
        },
        {
          "kind": "変更",
          "text": "Changed prompt and agent hooks so that at most 12 of one event run at a time; the rest wait their turn"
        },
        {
          "kind": "変更",
          "text": "Changed the message shown when your organization's policy turns off /feedback: it now points to GitHub issues instead of an organization admin"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed text after an unclosed code block in a list showing as plain text while a reply streams, then turning into code"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed MCP server sign-in from the panel opening a broken authorization page when the server URL contains a query string"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the @browser banner saying \"Browser connected\" when no browser with the Claude extension can be reached"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a banner on a routine's page that says why its last run didn't start, such as your organization reaching its limit on concurrent cloud sessions"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed \"Rewind to here\" failing on every message except the newest in cloud sessions; self-hosted runners need Claude Code v2.1.246 or later"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the pull request status bar in cloud sessions flipping a pull request with merge conflicts back to ready while GitHub rechecked it"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed routine runs showing as Completed after their cloud session stopped unexpectedly, and as Cancelled when archived before they started, instead of failed"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the diff view in cloud sessions missing changes or failing to load after the session's GitHub repository was renamed or moved"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a scheduled routine run that failed partway being run again from the start an hour or more later, which could repeat work such as posting the same report twice"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed an open cloud session sometimes not showing messages sent from another device until you reloaded the page or clicked away and back"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the error shown when a cloud session fails to start: it now says \"Connection lost\" or \"Server error\" instead of \"Something went wrong\""
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed a subagent's pane spinning forever in a Remote Control session after your computer goes offline; it now says Remote Control is disconnected"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed \"is thinking…\" staying up under a mention in a Slack channel or DM after Claude answered it by editing one of its earlier messages"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed URLs in code blocks under a numbered or bulleted step of Claude's Slack replies being wrapped in angle brackets, which broke copied commands"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed HEIC, SVG, TIFF and BMP images attached in Slack never reaching Claude; they now arrive as files in its working files, like other file types"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed new channel managers losing access to Claude in Slack in organizations that restrict Claude Tag by role; the manager role now also grants Claude Tag in Slack"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed custom connectors whose MCP servers share one host showing as a single connector in Claude Tag admin settings; each server is now its own connector"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack sometimes answering a direct message with \"DMs are temporarily unavailable\" and dropping it when a single Slack lookup stalled; it now retries first"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed direct messages with Claude on a Slack Enterprise Grid ignoring Slack's workspace dropdown; they now run under the connected workspace you last opened Claude in"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack's notice for a channel's monthly spend limit saying a channel manager can raise it; it now names an organization owner and links the usage page"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed links in Claude's Slack replies absorbing the closing bold or italic marks, or full-width punctuation, right after them, which broke the link and the formatting"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved repository search in Claude Tag admin settings to cover up to 100 connected GitHub accounts and find private repositories past the first 5,000 of a GitHub App install"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Improved Add place in Claude Tag admin settings to list a channel you type or paste right away, instead of only after your organization's full channel list has loaded"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Improved Add > Domain on a workspace's or channel's page in Claude Tag admin settings to be available once that page loads, not only after every channel has loaded"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude Tag admin settings to organize Claude's access into four tabs: Bundles, Connectors, Skills and plugins, and Channels"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the Roles page in organization settings to group the roles created for Claude Tag channel managers in a collapsed section below your organization's own roles"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review setup not resuming after you leave to connect GitHub; back in admin settings, it now reopens at the repository picker"
        }
      ]
    },
    {
      "version": "2.1.301",
      "items": [
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS so unattended retry mode (CLAUDE_CODE_RETRY_WATCHDOG) ends a request at a usage limit that resets too far away instead of waiting"
        },
        {
          "kind": "追加",
          "text": "Added OpenTelemetry tracing guidance to the claude-api skill, including setting up trace destinations with the ant CLI"
        },
        {
          "kind": "追加",
          "text": "Added the % motion to vim mode: jump to the matching bracket, alone or with d/c/y"
        },
        {
          "kind": "追加",
          "text": "Added rows to a mod's Input: a text field of several lines in the terminal, where Enter submits and Shift+Enter or a backslash before Enter starts a new line"
        },
        {
          "kind": "追加",
          "text": "Added classifier_verdict and permission_mode to OpenTelemetry tool_decision events, so auto mode classifier decisions can be told apart from permission rules"
        },
        {
          "kind": "追加",
          "text": "Added classifier_category to OpenTelemetry tool_decision events, naming the built-in rule a classifier block matched, when OTEL_LOG_TOOL_DETAILS=1"
        },
        {
          "kind": "修正",
          "text": "Fixed quitting removing a worktree made by a WorktreeCreate hook without asking when it may hold unpushed commits"
        },
        {
          "kind": "修正",
          "text": "Fixed the fable (and best) model alias erroring on the Anthropic API when the newest Fable model is not available to your organization: Claude Code now retries once on the previous Fable model"
        },
        {
          "kind": "修正",
          "text": "Fixed a misleading \"Please run /login\" error when a full disk keeps the login from being refreshed; the error now names the disk and says to delete files"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob reporting no matches when the search program failed unexpectedly before returning any results; they now return an error saying the search failed"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow agents sometimes skipping their step, and the run still reporting success, after reading the harness note that their task text carries no user authority"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact updates being refused where a PreToolUse hook covers Edit or Write; Claude now edits the file and then republishes instead of changing it in the publish call"
        },
        {
          "kind": "修正",
          "text": "Fixed skills and commands with very many or very long argument names stalling for seconds when invoked; only the first 64 names, each up to 64 characters, are now filled in"
        },
        {
          "kind": "修正",
          "text": "Fixed skills, commands and hooks using very large amounts of memory when their arguments fill many placeholders"
        },
        {
          "kind": "修正",
          "text": "Fixed stray characters such as >0q covering the folder trust prompt, and >4m before the shell prompt at exit, in terminals built on VTE older than 0.53 such as MATE Terminal on RHEL 8"
        },
        {
          "kind": "修正",
          "text": "Fixed stray GOK text appearing in the prompt at startup in some versions of iTerm2"
        },
        {
          "kind": "修正",
          "text": "Fixed switching to a model whose name contains application-inference-profile running your awsAuthRefresh command and delaying model-switch hooks when the provider is not Bedrock"
        },
        {
          "kind": "修正",
          "text": "Fixed sign-in refresh timeouts and unexpected sign-outs after a short command such as claude auth status or claude plugin list exited in the middle of a token refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed a tool call cut off by a message sent mid-turn during its permission check being reported to the model as rejected by the user"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where switching to a model with a smaller context window could spend usage credits on a summary by the previous model without asking first"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations being compacted over and over, on a model you didn't pick, behind an LLM gateway whose responses name a different model than the one requested"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode sometimes staying in INSERT after Escape on a slow or busy machine"
        },
        {
          "kind": "追加",
          "text": "Fixed Esc discarding a typed AskUserQuestion answer in vim mode: the free-text field now supports vim NORMAL mode, and Esc cancels only from NORMAL"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool reading binary files such as .xlsm, .parquet, .epub and .heic as text"
        },
        {
          "kind": "修正",
          "text": "Fixed a Markdown table with only a header row drawing nothing when too wide for the terminal, including in plans on the plan approval card"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api skill saying CMEK external-key endpoints aren't available on Claude Platform on AWS"
        },
        {
          "kind": "修正",
          "text": "Fixed skills no longer being listed to the model after using /rewind"
        },
        {
          "kind": "修正",
          "text": "Fixed the compaction row in a resumed session offering ctrl+o for history that is not loaded; it now says where the earlier messages are saved, and also shows in fullscreen"
        },
        {
          "kind": "追加",
          "text": "Fixed the \"new task? /clear to save tokens\" hint coming back right after you interrupt a response"
        },
        {
          "kind": "修正",
          "text": "Fixed the permission prompt for a plugin or skill hook's ask decision not showing which plugin or skill the hook comes from"
        },
        {
          "kind": "修正",
          "text": "Fixed /diff not noticing a conflicted cherry-pick or revert in reftable repositories when one of its git checks timed out or failed"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow scripts asking for permission or being refused when read, edited or re-run after a Bash cd in the same session"
        },
        {
          "kind": "修正",
          "text": "Fixed dim text on the dark ANSI theme and 16-color terminals: faint inside filled boxes, not faint under selection and search highlights, and list descriptions dimmed like other secondary text"
        },
        {
          "kind": "追加",
          "text": "Fixed a mod's $.model.fork returning nothing-to-fork when called before the first response of a new Claude Code process had finished, as in claude -p runs and cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fullscreen mode: Fixed /compact and auto-compact briefly freezing the UI while the visible transcript is rebuilt"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed sessions started from Slack being unable to find or attach a repository when managed settings restrict MCP servers; use deniedMcpServers to keep those tools off"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed sessions being reported as having a deleted source branch, and not retried, when an unrelated setup or session failure quoted git's missing-ref wording"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed the log promising a retry of a failed or declined session release for a session that is ending; repeated failures now show a count"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed stopped background PowerShell commands missing the closing [killed] line in their output file"
        },
        {
          "kind": "追加",
          "text": "Improved switching to a model with a smaller context window: a conversation too long for the new model is now summarized by the previous model first"
        },
        {
          "kind": "改善",
          "text": "Improved rendering performance while a long-running subagent works: its progress trail now updates incrementally instead of being reprocessed in full on every render"
        },
        {
          "kind": "改善",
          "text": "Improved artifacts: pages Claude writes now paint the band above a sticky header, so scrolled text no longer shows there in the mobile apps"
        },
        {
          "kind": "改善",
          "text": "Improved mods: in VS Code and the desktop and mobile apps, a tree drawn above the question dialog can now hold Markdown and up to 48 rows; the terminal keeps 12 plain rows"
        },
        {
          "kind": "変更",
          "text": "Changed a mod hook's .catch handler to run only when the hook throws or times out; events raised beneath the hook's own calls now skip that hook without asking its .catch"
        },
        {
          "kind": "修正",
          "text": "Changed a mod's $.env.set to resolve with {} once the variable is set or unset, or with { deny } saying why when the write is not made"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added LaTeX math rendering in Claude's responses, including $$ and multi-line \\[ … \\] blocks and inline $…$ and \\(…\\) math"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a \"Get more usage\" link to the usage-limit banner for Pro and Max plans in the VS Code and JetBrains panels"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a conversation that crashes or freezes the panel being reopened on every reload"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the chat panel slowing down during long thinking: it no longer re-parses the whole thinking text on every update"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed diagnostics showing \"[object Object]\" instead of the rule code (e.g. MD013) for some language servers"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the native dictation audio module being loaded, to check microphone permission, where dictation is not offered (non-claude.ai sign-ins, remote windows)"
        }
      ]
    },
    {
      "version": "2.1.300",
      "items": [
        {
          "kind": "追加",
          "text": "Added virtualText to a mod's prompt decorations: text drawn in the prompt box that never enters the draft or the submitted prompt"
        },
        {
          "kind": "追加",
          "text": "Added cache_creation_5m_tokens and cache_creation_1h_tokens to the OpenTelemetry api_request event, splitting cache writes by lifetime"
        },
        {
          "kind": "追加",
          "text": "Added $.ui.view({ agentId }) for mods: shows an agent's transcript in the main view when you ask, and $.ui.view({}) goes back"
        },
        {
          "kind": "追加",
          "text": "Added a dir prop on a mod's Text for right-to-left text: on Windows and in VS Code's terminal its rows read in that direction and sit flush right"
        },
        {
          "kind": "追加",
          "text": "Added /advisor on Claude Platform on AWS; no advisor runs until you pick one with /advisor, advisorModel or --advisor, and CLAUDE_CODE_DISABLE_ADVISOR_TOOL=1 turns it off"
        },
        {
          "kind": "追加",
          "text": "Added OpenTelemetry GenAI semantic-convention attributes to trace spans, such as gen_ai.provider.name, gen_ai.conversation.id, gen_ai.tool.name and error.type"
        },
        {
          "kind": "追加",
          "text": "Added support for rewriting a workflow agent's prompt and model in the agent.spawn mod hook, which could only refuse workflow agents before"
        },
        {
          "kind": "追加",
          "text": "Added the prompt.change mod hook, raised when the prompt box's text changes without a typed edit: a recalled history entry, a clear, an undo, or a plugin's fill"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions telling Claude that an organization policy blocked a host when the session's own network settings did"
        },
        {
          "kind": "修正",
          "text": "Fixed /autocompact warning about high token usage when you choose a smaller auto-compact window"
        },
        {
          "kind": "修正",
          "text": "Fixed SessionEnd hooks sometimes not running when you exit while a background command is still running"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --help naming a removed tool in its description of --restricted"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents not refreshing any pull request's status when the data for one of them came back incomplete"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told a background agent was lost, not resumable, after a cloud session's container was replaced, when the agent had already been resumed once"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents you had typed messages to disappearing from /tasks shortly after finishing, leaving no way back to the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed a completed parent agent dropping off the breadcrumb (its child shown re-rooted at top level) while you were viewing the child"
        },
        {
          "kind": "修正",
          "text": "Fixed the agents view taking a typed word such as \"up\", \"down\" or \"escape\" for that key when input arrived in a burst, which could move the peek mid-reply or clear a draft"
        },
        {
          "kind": "修正",
          "text": "Fixed automatic tool search (ENABLE_TOOL_SEARCH=auto) turning off part-way through a conversation, for example while MCP servers reconnect after a resume"
        },
        {
          "kind": "修正",
          "text": "Fixed a login refused by forceLoginOrgUUID leaving the refused organization's token stored, or live after /login"
        },
        {
          "kind": "修正",
          "text": "Fixed the diff view in Claude Desktop and Remote Control sessions not noticing a conflicted cherry-pick or revert in reftable repositories"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool's verbose and ctrl+o line reading Artifact(\"(unprintable path)\") while a call's input arrives; its row now shows \"Waiting…\" and \"Running…\" as Bash's does"
        },
        {
          "kind": "修正",
          "text": "Fixed the first transcript entry written after resuming a session being lost when a crash had cut the transcript's last line short"
        },
        {
          "kind": "修正",
          "text": "Fixed /branch dropping messages, and claude purge skipping subfolder projects, when they contain a Unicode line or paragraph separator (U+2028, U+2029)"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin WorktreeCreate and WorktreeRemove hooks not running when Claude Code starts with --worktree (not yet with --tmux)"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry tool_result events missing git_commit_id after git commit -q in repositories using reftable ref storage"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt that a mod's prompt.submit hook rewrote or dropped still being recorded as typed in the OpenTelemetry user_prompt event and interaction span, and in session title requests"
        },
        {
          "kind": "修正",
          "text": "Fixed a note meant for Claude about mod hot-reloading appearing in the transcript as if you had typed it"
        },
        {
          "kind": "修正",
          "text": "Fixed agent hooks ignoring their model: aliases like haiku now resolve, a subagent's model no longer overrides it, and an unavailable model falls back to the caller's instead of allowing the action"
        },
        {
          "kind": "追加",
          "text": "Fixed --worktree sessions sometimes starting from the wrong commit when a tag or branch was named like a commit ID, and their starting git status naming a branch other than the new worktree's"
        },
        {
          "kind": "修正",
          "text": "Fixed the branch showing as \".invalid\" and --worktree failing to reopen a worktree in repositories using git's reftable ref storage"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude naming files in the session scratchpad by a bare filename or relative path instead of their full path"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control servers giving up on renewing their connection after a brief sign-in error, such as a locked keychain; they now retry, and warn when you need to run claude /login"
        },
        {
          "kind": "修正",
          "text": "Fixed --worktree failing in a worktree of a bare repository when origin's default branch can't be fetched; the fallback base is now the current checkout's HEAD, not the main repository's"
        },
        {
          "kind": "修正",
          "text": "Fixed starting Claude Code in a VS Code, Cursor or Devin Desktop integrated terminal launching the editor's command-line tool twice to check for the extension; it now launches it once"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's prompt.edit hook not being raised for a newline entered with the chat:newline keybinding (Ctrl+J, or a rebound Enter)"
        },
        {
          "kind": "修正",
          "text": "Fixed a conversation failing on every turn with a 400 error when the API rejected an MCP tool's input schema; Claude Code now sends that tool without parameters for the rest of the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a headless or Agent SDK session losing the recent messages a compaction had kept, when the compaction followed a reply cut at the output token limit (compactions from this version on)"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told about an MCP server's tools and instructions until its next tool call, when the server finished connecting after a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions being marked stopped while still running, on a computer serving several sessions at once"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a headless or Agent SDK session losing its compaction summary or bringing back pre-compaction history, when the compaction followed a retried or unfinished reply in the same turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude polling a background command's output file or sleeping while it runs"
        },
        {
          "kind": "修正",
          "text": "Fixed feature flags and staged rollouts staying stale behind a TLS-inspecting proxy whose certificate is trusted only through the OS certificate store"
        },
        {
          "kind": "修正",
          "text": "Fixed claude daemon stop --any printing \"stopped\" while a stuck background service kept running: it now waits, force-kills the service, and says so with exit 1 if it is still there"
        },
        {
          "kind": "修正",
          "text": "Fixed claude daemon stop exiting with no output, and leaving sessions listed as running, when telemetry is turned off"
        },
        {
          "kind": "修正",
          "text": "Fixed Write, Edit and NotebookEdit in Cowork cloud sessions reporting success for a path on your own computer, where the file never arrived"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude searching for deferred tools already loaded earlier in the conversation when a session resumes a history that never listed them"
        },
        {
          "kind": "修正",
          "text": "Fixed secondary (dim) text looking the same as normal text under the dark ANSI theme and on 16-color terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions hanging 5 minutes per turn when the organization's policy can't be read; the turn now ends promptly and says why"
        },
        {
          "kind": "修正",
          "text": "Fixed a cloud session sometimes running an already answered message a second time after the session restarted during a long reply"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed the runner and orchestrator freezing (no polls, /healthz or SIGTERM shutdown) while nobody reads their output; logs keep the latest 256 KiB and count drops (not on Windows)"
        },
        {
          "kind": "改善",
          "text": "Improved WebFetch in Cowork cloud sessions to tell Claude that a page failed moments ago instead of fetching it again"
        },
        {
          "kind": "改善",
          "text": "Improved mod sharing in the built-in plugin-authoring skill: Claude scans a mod's files for keys before opening them, and asks before scanning a folder outside the project"
        },
        {
          "kind": "改善",
          "text": "Improved the note Claude 3 models get about an @-mentioned PDF, so they less often answer without reading it"
        },
        {
          "kind": "改善",
          "text": "Improved artifact updates: Claude now applies a small change and republishes the artifact in one call, and makes larger edits and republishes within a single response"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST sessions to ignore CA-bundle, tool-proxy, git TLS and git config variables like SSL_CERT_FILE in settings; under Claude Desktop, only in project settings"
        },
        {
          "kind": "変更",
          "text": "Changed exit to force-kill background commands still running 1.5 seconds after being asked to stop; in fullscreen mode they could previously be left running"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Desktop's Code tab to apply managed settings when forceLoginGatewayUrl names an Anthropic-operated gateway that serves the session's hostname; that gateway must be reachable at start"
        },
        {
          "kind": "変更",
          "text": "Changed claude gateway to stop at start, naming the key, on a desktop: policy key that Claude Desktop cannot use from a gateway, where it earlier started with a warning"
        },
        {
          "kind": "変更",
          "text": "Changed large requests to api.anthropic.com to use gzip compression even when telemetry is disabled; set CLAUDE_CODE_GZIP_REQUEST_BODIES=0 to turn it off"
        },
        {
          "kind": "変更",
          "text": "Changed the claude-api skill to leave Managed Agents sessions in place unless you ask to archive or delete them"
        },
        {
          "kind": "変更",
          "text": "Changed background sessions to resume a carried workflow through the Workflow tool's approval instead of running it from the handoff file"
        },
        {
          "kind": "変更",
          "text": "Changed local session transcripts to also record each API request's system prompt, tools and parameters, so a transcript you choose to share can reproduce a request exactly"
        },
        {
          "kind": "変更",
          "text": "Changed the /sandbox mode options to read \"Sandbox commands\" instead of \"Sandbox BashTool\""
        },
        {
          "kind": "変更",
          "text": "Changed PermissionRequest hooks in Cowork cloud sessions: a setMode update in a hook's allow is now ignored; the rest of the approval still applies"
        },
        {
          "kind": "変更",
          "text": "Changed hooks: updatedInput from PreToolUse and PermissionRequest hooks is now validated like Claude's own input: unknown keys are dropped, and input the tool rejects denies the call"
        },
        {
          "kind": "変更",
          "text": "Removed the --sandbox and --no-sandbox flags from claude remote-control, which had no effect; passing either now exits with an error. Set sandbox.enabled in settings to sandbox sessions"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the claudeCode.attachSelection setting to stop text selected in the editor from being added to your messages"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed fast mode staying on after usage credits ran out, which made each request be refused and re-sent; it now turns off until you turn it back on, with an error notice"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Thinking toggle switching to Off on models that always think; the toggle is no longer shown for those models"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Edit prompt\" on a flagged message opening the file or command menu over the restored prompt; Enter now sends it as written"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Shift+dragging a file onto the prompt on Windows inserting an unreadable /c:/… path instead of a mention relative to the working directory"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed changes to VS Code's chat font size settings needing a window reload or being undone by a theme change; diffs and the plan preview now follow them too"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed \"Resume session\" and tabs restored after a reload opening an empty new conversation instead of one that had moved into a git worktree"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed ↑ then Enter on a recalled slash command running it without its arguments; the command and file menus no longer open over a recalled prompt until you edit it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Shift+dragging a file from the Explorer or an editor tab onto the prompt inserting nothing in WSL, SSH and Dev Container windows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Ctrl+Alt+F toggling Focus view instead of opening Find in the Explorer, other tree views, or the Debug Console on Windows and Linux"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the check for sessions open in other windows or terminals creating extra processes on macOS: it now starts /bin/ps directly instead of searching PATH for ps on every check"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Windows: Fixed a conversation showing \"still open somewhere else\" after a crash or power loss, when Windows had since restarted and given the old process ID to another program"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed \"Allow for this task\" missing from Cowork's approval prompts for connector tools where an organization turns off \"Always allow\" (regression in 2.1.292)"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed most commands in the / menu losing their descriptions in cloud sessions once you sent a second message"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed the diff view in Remote Control sessions on claude.ai and the desktop app showing deleted and renamed files as modified; requires Claude Code v2.1.296 or later on your machine"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added support for Slack Connect channels: an Owner or Claude Tag admin can let Claude in Slack answer in channels shared with another organization; it's off by default"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a private Allow once / Deny card in Slack threads for connector actions that need your approval, so Claude asks instead of refusing; others only see that it's waiting on you"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added support for Slack voice clips in Claude in Slack: Claude reads Slack's transcript of a clip when Slack has one"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack not answering another app that tags it in a thread under a message Claude itself posted to the channel"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed access bundles an admin attached to a Slack channel to keep applying once the channel becomes a Slack Connect channel, with no need to remove and re-attach them"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review ignoring @claude review comments from people with write access whose GitHub organization membership is private; their comments now start a review"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review's \"paused for this repository\" comment sending admins to Code Review settings; it now says who can fix it and links the Git providers page"
        }
      ]
    },
    {
      "version": "2.1.299",
      "items": [
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_FILE_MENTIONS environment variable: Claude gets the paths of @ file mentions to read with its file tools, not the files' contents"
        },
        {
          "kind": "追加",
          "text": "Added idle compaction in the terminal: a 200K+ token conversation left idle for about 54 minutes is compacted before its one-hour prompt cache expires, so your next message doesn't reprocess it all"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS to change idle compaction's 200K-token minimum; \"idleCompaction\": false in settings.json turns it off. Both need v2.1.290 or later"
        },
        {
          "kind": "追加",
          "text": "Added $.prompt.media so a prompt.submit hook of a mod installed by managed settings can read the bytes of an image or document attached to the prompt"
        },
        {
          "kind": "追加",
          "text": "Added $.session.identity() for mods installed by managed settings: how the session is signed in, and its organization and email when managed forceLoginOrgUUID lists that organization"
        },
        {
          "kind": "追加",
          "text": "Added size, weight, mono and tabular to a mod's Text and named spacing steps (xs to xl) to its Box; bold is deprecated in favor of weight"
        },
        {
          "kind": "追加",
          "text": "Added --shutdown-drain-sec to claude self-hosted-runner orchestrator: on SIGTERM it stops polling and gives the poll in flight and running spawn hooks up to that many seconds to finish"
        },
        {
          "kind": "追加",
          "text": "Added the skill's frontmatter, source, plugin name and file path to what a mod's skill.prompt hook receives"
        },
        {
          "kind": "追加",
          "text": "Added /effort and /fast in agent view to set what new sessions start with; a bare /model, /effort or /fast there now opens a picker"
        },
        {
          "kind": "追加",
          "text": "Added a \"safe mode\" line to the agents view peek panel for background sessions started with --safe-mode"
        },
        {
          "kind": "追加",
          "text": "Added a one-time note when plan mode won't ask before most edits or commands because bypass permissions is available"
        },
        {
          "kind": "追加",
          "text": "Added --disallow-tools and a disallowed_tools case field to claude plugin eval to keep specific built-in tools, such as Agent, out of eval runs"
        },
        {
          "kind": "追加",
          "text": "Added support for turning off the attribution block in Claude Desktop's Code tab: set CLAUDE_CODE_ATTRIBUTION_HEADER=0 in the env of a Claude apps gateway's code policy"
        },
        {
          "kind": "追加",
          "text": "Added a field to the attribution block in Claude Code sessions behind a Claude apps gateway; remove the block with CLAUDE_CODE_ATTRIBUTION_HEADER=0"
        },
        {
          "kind": "追加",
          "text": "Added a queue door to the session.append mod hook, so a mod can make the transcript's queue records differ from the prompt as sent"
        },
        {
          "kind": "追加",
          "text": "Added a note in /plugin and claude plugin validate naming a mod's hooks that are skipped where an organization manages Claude Code"
        },
        {
          "kind": "追加",
          "text": "Added /usage warnings for max effort, workflows, always-on context and large tool results"
        },
        {
          "kind": "修正",
          "text": "Fixed the error for a denied cloud session, which could point to the wrong organization when a key from apiKeyHelper was in use"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions on a gateway-specific model name behind a custom ANTHROPIC_BASE_URL ending with \"Prompt is too long · automatic compaction failed\" near 200K tokens instead of sending the request"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod that submits a prompt at the end of every turn keeping a headless run going past --max-turns, --max-budget-usd, an interrupt, or the end of the host's conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions sometimes showing the model's follow-up text after a tool group's one-line label"
        },
        {
          "kind": "修正",
          "text": "Fixed the Write and Edit tools creating a mod in a session's mods folder without asking in accept-edits mode when the config directory's path has no .claude in it"
        },
        {
          "kind": "修正",
          "text": "Fixed installed mods that kept running in an open session after being turned off remotely; they now unload between turns"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit and Retry in Cowork and claude.ai cloud sessions failing on a message stopped while its UserPromptSubmit or mod prompt.submit hooks were still running (regression in 2.1.296)"
        },
        {
          "kind": "修正",
          "text": "Fixed an agent teammate started without a description keeping part of a credential from its prompt in the task description shown for it"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude.ai view of a Remote Control or cloud session freezing when a large batch of events could not finish uploading over a slow connection"
        },
        {
          "kind": "修正",
          "text": "Fixed a sandboxed shell command being able to write into a --plugin-dir folder, whose code Claude Code reloads and runs outside the sandbox"
        },
        {
          "kind": "修正",
          "text": "Fixed memory growth under heavy debug logging (--debug, --debug-file), and a hang on exit when the debug log is on a disk or network mount that stops accepting writes"
        },
        {
          "kind": "修正",
          "text": "Fixed memory growing without bound when debug output goes to stderr and the parent process stops reading it"
        },
        {
          "kind": "修正",
          "text": "Fixed rm prompts on shell -c scripts that don't run rm. An rm built at run time in a script Claude Code can't read no longer prompts unless CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT=1"
        },
        {
          "kind": "修正",
          "text": "Fixed double-clicking a word in an expanded transcript row in fullscreen mode collapsing the row instead of selecting the word"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp list, claude doctor and /status reporting an empty .mcp.json as invalid"
        },
        {
          "kind": "修正",
          "text": "Fixed /btw jumping the transcript to the bottom when asked while scrolled up in fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands failing on WSL2 with bwrap: Can't mkdir /mnt/c/Program Files/ClaudeCode when the sandbox can write to the Windows drive"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled wakeups (ScheduleWakeup) not firing while a background task was running in Agent SDK, IDE and claude remote-control sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's prompt.submit rewrite being silently dropped, sending the prompt as typed, for some prompts with a pasted image or an image that can't be read"
        },
        {
          "kind": "修正",
          "text": "Fixed a Remote Control prompt being lost when another queued prompt in the same batch failed to deliver"
        },
        {
          "kind": "修正",
          "text": "Fixed a Remote Control prompt that had passed its hooks being dropped from prompt history when Stop interrupted the next queued prompt's hook"
        },
        {
          "kind": "修正",
          "text": "Fixed sign-in, MCP servers and project trust appearing lost on Linux after a sandboxed command left an empty .config.json in the config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed /sandbox reporting success when its setting could not be saved because the project folder is not writable; it now says nothing changed and why"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK and headless sessions staying in auto mode after the host switched to a model that doesn't support auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers named constructor or prototype in an MCP config never being connected"
        },
        {
          "kind": "修正",
          "text": "Fixed tools of an MCP server named constructor or toString asking for permission in auto mode and bypass permissions mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a spurious \"synced[0] commands path not found\" plugin error at startup when another Claude Code process had just updated a claude.ai-synced plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool advising a retry when a publish that requests connectors or other access was refused by the server or a proxy (HTTP 403); it now says so and what to tell the user"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork cloud sessions staying on an old account plugin after a plugin reload that timed out or a restart that reused a recent sync"
        },
        {
          "kind": "修正",
          "text": "Fixed document blocks being dropped from your own message sent while Claude is working"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome asking for permission while no browser is connected; it now says the extension is not connected"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen \"Update installed\" notice being hidden behind the idle \"/clear to save tokens\" hint; it now shows beside the hint"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod hook, with or without a .catch, being run again without end when it waits on another mod's noun that does its work outside the call"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway serving models that a policy's availableModelsMatch: exact or deniedModels blocks; it now answers 400 and leaves them out of its model lists"
        },
        {
          "kind": "修正",
          "text": "Fixed the server-managed settings request to Anthropic carrying a third-party gateway's API key when a managed settings file sets ANTHROPIC_BASE_URL"
        },
        {
          "kind": "修正",
          "text": "Fixed streams through a custom ANTHROPIC_BASE_URL being aborted after 180 seconds with no data arriving; they now wait 300 seconds, whether or not feature flags are loaded"
        },
        {
          "kind": "追加",
          "text": "Fixed a mod's tool.describe or prompt.section answer that changed after $.ui.invalidate never reaching Claude; the new answer is now sent on the next turn"
        },
        {
          "kind": "修正",
          "text": "Fixed a settings file being ignored when enabledMcpjsonServers or disabledMcpjsonServers held a single server name (letters, digits, - or _) as a plain string"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin test pausing a hook's time budget while a served $ method it had called kept making $ calls after answering"
        },
        {
          "kind": "修正",
          "text": "Fixed high memory use after resuming a cloud or Remote Control session that had run many subagents"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin hooks being skipped when they pass a very deeply nested tool input or message on with next()"
        },
        {
          "kind": "修正",
          "text": "Fixed a value a mod's hook passes to next(), returns, or sends to a $ method being refused whole when one of its getters throws a RangeError; now only that key is refused"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage, the approaching-limit warning (terminal and VS Code) and the status line sometimes showing more than 100% used (anthropics/claude-code#92238)"
        },
        {
          "kind": "修正",
          "text": "Fixed wrapped text mixing CJK or emoji with Latin words losing its last line or leaving a blank row at some terminal widths"
        },
        {
          "kind": "修正",
          "text": "Fixed a cloud session sometimes ignoring the answer to a permission prompt or a question when the answer was given while the session's worker was being replaced"
        },
        {
          "kind": "修正",
          "text": "Fixed bold, italic and other nested text styles running over table borders or being lost on wrapped rows"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork cloud sessions running the old version of an account plugin changed, removed or disabled from another device until the session restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed deny and ask rules for an MCP server (mcp__<server>) not applying when the server's normalized name contains a double underscore"
        },
        {
          "kind": "修正",
          "text": "Fixed long conversations losing newly attached images on every turn after one oversized image was refused by the API"
        },
        {
          "kind": "修正",
          "text": "Fixed the plugin_loaded telemetry event reporting has_hooks as false for plugins whose hooks are a hooks module, built-in plugins included"
        },
        {
          "kind": "修正",
          "text": "Fixed images attached while Claude is working (VS Code, desktop app, SDK) being sent at full size, which led to repeated image errors in long conversations"
        },
        {
          "kind": "修正",
          "text": "Fixed the image coordinate hint being missing or slightly off for large near-square images on newer models"
        },
        {
          "kind": "修正",
          "text": "Fixed feature flag, startup, fast mode, profile and feedback requests to Anthropic carrying the API key configured for a third-party gateway (ANTHROPIC_BASE_URL); Anthropic API keys are still sent"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hot reload ignoring a fix saved right after a failed reload; saving a mod file without changing it no longer reloads the mod"
        },
        {
          "kind": "修正",
          "text": "Fixed mods loaded from source files being refused when a hook hands $ to a function declaration imported from another file of the mod"
        },
        {
          "kind": "追加",
          "text": "Fixed a regression in 2.1.296 where cloud and headless sessions could run an approved tool call twice if a new message arrived as the session resumed after a restart"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks being announced for the wrong minute: the scheduling tools now report each job's actual next run time"
        },
        {
          "kind": "修正",
          "text": "Fixed mods' hooks being handed values with __proto__ keys silently removed, which could skip a tool.check guard on a tool call another mod made"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p saying nothing when a settings file fails validation: text-output runs now list the file and the invalid entry on stderr"
        },
        {
          "kind": "修正",
          "text": "Fixed long pastes in terminals without bracketed paste losing all text after an invisible control character, such as a mis-decoded curly quote"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings and organization policy not being fetched when the stored login's plan was changed locally on machines whose MDM or managed-settings file sets forceLoginOrgUUID"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP connections over HTTP hanging for 30 seconds and failing when a server never ends the body of its reply to a notification (anthropics/claude-code#99014)"
        },
        {
          "kind": "追加",
          "text": "Fixed MCP servers added to a running headless or SDK session being connected before some policy checks ran; a blocked server is now reported as failed without being contacted"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp list, claude mcp get and subagent MCP servers starting a server that a policy check blocks; it is now reported as blocked without being started"
        },
        {
          "kind": "修正",
          "text": "Fixed /reload-plugins not loading a plugin installed from another terminal a moment earlier"
        },
        {
          "kind": "修正",
          "text": "Fixed blank rows appearing under CJK and emoji text squeezed into a one-cell column, as in a very narrow terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed text cut in the middle beside wide characters leaving a cell unused or being cut twice, and an emoji vanishing where a color changed inside it"
        },
        {
          "kind": "修正",
          "text": "Fixed bare mode notices in background sessions telling you to restart without --bare, which keeps the mode; they now name /stop and claude --resume, as safe mode ones do"
        },
        {
          "kind": "修正",
          "text": "Fixed ← not saying why it stayed put over a queued message while Remote Control is on"
        },
        {
          "kind": "修正",
          "text": "Fixed $.http.fetch in mods refusing a 304, 204 or 205 response that declares a Content-Length over the 4 MiB body limit"
        },
        {
          "kind": "修正",
          "text": "Fixed /config push notification toggles sending your account the previous setting instead of the one you just chose"
        },
        {
          "kind": "修正",
          "text": "Fixed a cloud session leaving a reply unfinished when its worker was replaced just after the reply hit the output token limit"
        },
        {
          "kind": "修正",
          "text": "Fixed Read failing on PDF page ranges in remote sessions on Linux that run without elevated privileges"
        },
        {
          "kind": "修正",
          "text": "Fixed Enter answering a question or permission prompt that had been held back while you typed an unsent message"
        },
        {
          "kind": "修正",
          "text": "Fixed a file attached to a message in a remote session being left out when its download stalled part way; the download is now tried again"
        },
        {
          "kind": "修正",
          "text": "Fixed queued prompts sent as content blocks over --input-format stream-json running together without a line break when merged into one turn"
        },
        {
          "kind": "追加",
          "text": "Fixed self-hosted runner sessions shutting down MCP servers added through an --exec-path wrapper's own --mcp-config when connectors change mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin eval passing runs that the API refused: a run that ends on an API error now scores 0 without grading and makes the suite exit 1"
        },
        {
          "kind": "修正",
          "text": "Fixed permission prompts cutting off or wrapping too early when the reason text contains keycap or joined emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed forceLoginOrgUUID and forceLoginMethod from MDM or the managed-settings file being hidden or replaced by server-managed settings"
        },
        {
          "kind": "修正",
          "text": "Fixed --bare sessions leaving out an MCP server named constructor or prototype that --channels asked for"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a conversation from before /clear reattaching to the Remote Control session of the conversation after it"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt starting with /, sent with the Agent SDK's verbatimPrompts option, running as a slash command when CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-ran it after a restart"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions started with --safe-mode silently leaving safe mode when the session was woken or restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks and loops firing again after every turn, or firing early, during the repeated hour when daylight saving time ends"
        },
        {
          "kind": "追加",
          "text": "Fixed the diff view listing a new file whose name begins or ends with a space under the wrong name"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls in headless and SDK sessions sometimes failing or running twice when a background reconnect closed the connection they were running on"
        },
        {
          "kind": "修正",
          "text": "Fixed /btw side questions in non-interactive sessions not being cancelled when the session ends, and running a second time when the same request arrived again mid-run"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands on macOS being able to read or write a denied path by its real location when the denied path passes through a symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox denyRead and allowRead globs with braces, parentheses or backslashes in a folder's name being read differently by Claude Code's settings checks than by the sandbox"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox glob allowRead and allowWrite entries not being re-checked when the directory they start from is replaced by a symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions accepting some awk programs the isolation guard should refuse"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add <name> -- <command> --background being started as a background session"
        },
        {
          "kind": "追加",
          "text": "Fixed a prompt or reply of --bg or --background to a background session being taken for the flag, which could start new sessions over and over instead of delivering it"
        },
        {
          "kind": "修正",
          "text": "Fixed a custom slash command's embedded shell line running twice when a newer message interrupted the command while its prompt was being checked"
        },
        {
          "kind": "修正",
          "text": "Fixed --worktree sessions leaving a folder behind in .git/worktrees in repositories using git's reftable ref storage"
        },
        {
          "kind": "修正",
          "text": "Fixed claude self-hosted-runner sessions using Anthropic-managed git showing tracked files as staged deletions when starting in a reused clone whose remote is still empty"
        },
        {
          "kind": "修正",
          "text": "Fixed Ultracode not being announced to scheduled tasks and other delivered headless turns when ultracode is on in settings"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP OAuth sign-in, token refresh and sign-out not sending configured headers/headersHelper values, which broke servers behind an authenticating proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool reporting a spurious one-line difference against the live page, and refusing the publish, when a large page with a line break after <head> is published again unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed $.ui.open reporting a mod's pane as placed in sessions where no surface draws it, such as Claude Code for VS Code and claude -p"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent.spawn mod hook not running when a finished subagent or a killed teammate is resumed: the hook's event now carries resume, and a mod can refuse it"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate rejecting a mod's $.state references when plugin.json has no types key and the contract is at ./types/index.d.ts"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's dimColor text looking the same as plain text under the dark ANSI theme and on 16-color terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed plan mode running a write (an MCP tool's, a file's, a shell command's) that a PreToolUse hook or a mod's tool.check hook allowed"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents in auto mode sometimes sending their final report twice, once as the result and once as a message"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage not finding a subagent by name after the CLI restarted and resumed the session (names given before the last compaction still need the agent ID)"
        },
        {
          "kind": "修正",
          "text": "Fixed replies cut off at the output token limit ending the turn silently, with no retry or error, after a request fell back to non-streaming mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Read garbling UTF-16LE files with a byte-order mark, and Write dropping byte-order marks or silently converting Windows-1252, Shift-JIS, GBK or UTF-16BE files to UTF-8 (now refused)"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions sometimes leaving a message unanswered when the worker was replaced right after a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions and CLAUDE_CODE_RESUME_INTERRUPTED_TURN sometimes answering a finished turn again after a restart, when a tool ended the turn and a skill loaded in the same step"
        },
        {
          "kind": "修正",
          "text": "Fixed photos sent over Remote Control being dropped when their copy could not be saved on your computer; Claude now still sees the photo"
        },
        {
          "kind": "修正",
          "text": "Fixed files sent over Remote Control sometimes not arriving in long-running sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed files of 30 to 35 MiB sent over Remote Control or to a cloud session not arriving"
        },
        {
          "kind": "修正",
          "text": "Fixed a user-installed mod's $.env.set changing the environment or shell prefix that command hooks from managed settings start with"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed the process-liveness check leaving orphaned PowerShell processes behind on busy machines until memory ran out"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PreToolUse and PermissionRequest hooks that set no shell failing open when Git for Windows isn't installed; a guard that fails now blocks the call"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed Bash commands failing with \"command not found\" for a whole session when Git Bash did not report its PATH at startup"
        },
        {
          "kind": "改善",
          "text": "Self-hosted runner: Improved what setup and doctor say when the runner's machine has no git credentials"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed sessions that wrote output before their first turn being left with no release timer, ignoring --retire-at and delaying shutdown"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown when a cloud session is refused because your claude.ai login was rejected or has expired: it now tells you to sign in again with claude auth login"
        },
        {
          "kind": "改善",
          "text": "Improved enforcement of managed permission rules, managed hooks and organization MCP tool names against user-installed mods"
        },
        {
          "kind": "改善",
          "text": "Improved memory and disk use when PDFs are @-mentioned: their bytes are no longer kept in the session transcript"
        },
        {
          "kind": "改善",
          "text": "Improved sandboxed Bash on Linux: Esc and Ctrl-C now work while wildcard read rules are being expanded for a command"
        },
        {
          "kind": "改善",
          "text": "Improved the startup warning for an unrecognized model ID: it is now one short line under the welcome banner with a docs link, instead of a long raw message"
        },
        {
          "kind": "改善",
          "text": "Improved the plugin-authoring skill's steps for sharing a mod: Claude asks public or private and checks the files before creating a GitHub repository"
        },
        {
          "kind": "修正",
          "text": "Improved the Skill tool's \"Unknown skill\" error to suggest a skill's listed name when Claude wrongly adds the anthropic-skills: prefix to it"
        },
        {
          "kind": "改善",
          "text": "Improved /reload-skills to say it re-sends the full skill list to Claude, which is how to get skills back after compaction"
        },
        {
          "kind": "修正",
          "text": "Improved the error shown when a worktree cannot be created because its base commit does not resolve: it now says how the lookup ended and the likely reasons, such as a repository without a commit"
        },
        {
          "kind": "改善",
          "text": "Improved the error for creating a worktree at a bare-repository layout's root: it now explains the layout instead of an unrelated git error"
        },
        {
          "kind": "改善",
          "text": "Improved artifact watching: a local session can now watch up to 25 published artifacts at once, up from 10"
        },
        {
          "kind": "改善",
          "text": "Improved background agent notifications: they now say when an agent is only waiting on its own background work, got a message too late for its result, or was stopped by a usage limit"
        },
        {
          "kind": "変更",
          "text": "Changed plugin hooks and workflow scripts to refuse values they hand back that nest deeper than 28,000 levels, with an error naming the limit (workflow scripts allowed 100,000)"
        },
        {
          "kind": "変更",
          "text": "Changed actions a plugin hook can block to be refused, not let through, when the hook cannot be handed them or cannot hand back its answer; a tool that already ran has its result withheld"
        },
        {
          "kind": "変更",
          "text": "Changed requests to claude.ai's connector proxy and to Anthropic-hosted MCP servers to no longer follow HTTP redirects; redirects by a connector's own server are unaffected"
        },
        {
          "kind": "変更",
          "text": "Changed MCP requests in cloud and self-hosted runner sessions to no longer follow HTTP redirects from the session's MCP proxy"
        },
        {
          "kind": "変更",
          "text": "Changed skill and command loading: one whose file or folder name has hidden, direction-changing or blank-like characters, < or > is no longer offered until renamed; such a name: is ignored"
        },
        {
          "kind": "変更",
          "text": "Changed ui.render trees in claude plugin test: each mod's Box or Text root now carries part: { plugin } naming the mod, so exact-tree assertions must include it"
        },
        {
          "kind": "変更",
          "text": "Changed WebFetch page reads to pick their effort as web searches do: the caller's level on the caller's own model, otherwise the level settings give the small model"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin test to fail a call to a mod's served $ method that has not answered within ten seconds, as a session does"
        },
        {
          "kind": "変更",
          "text": "Changed MCP allow rules to reach only the server they name: mcp__a no longer allows a server named a__b or a_; write mcp__<server>__* with the server's whole normalized name"
        },
        {
          "kind": "変更",
          "text": "Changed agent tools: lists to take only the named MCP server's tools; list a server whose name contains __ as mcp__<whole name>__*"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome in Cowork cloud sessions outside auto mode: an approved-site action the safety classifier flags now asks you instead of being refused, unless managed settings apply"
        },
        {
          "kind": "変更",
          "text": "Changed cloud session and Remote Control MCP connectors to negotiate MCP protocol version 2026-07-28 by default on installs that fetch no flags; MCP_PROTOCOL_NEGOTIATION=legacy opts out"
        },
        {
          "kind": "変更",
          "text": "Changed MCP tool descriptions and server instructions from Anthropic's first-party MCP servers at api.anthropic.com to reach Claude in full instead of being cut at 4,096 characters"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode in Cowork cloud sessions: a PermissionRequest hook can no longer approve shell commands or subagents; those prompts wait or are denied"
        },
        {
          "kind": "変更",
          "text": "Changed the resume command printed at exit: it names the session by its ID and no longer by its name, so that nothing in a session name can run when the line is pasted"
        },
        {
          "kind": "変更",
          "text": "Changed the resume command printed at exit of a worktree session: it uses -w and -r if the long flags do not fit the terminal. If neither fits a kept worktree, rows above it say where to run it"
        },
        {
          "kind": "変更",
          "text": "Changed /btw side questions in non-interactive sessions to return a timeout error when still unanswered after 11 minutes"
        },
        {
          "kind": "変更",
          "text": "Changed UserPromptSubmit hooks to run before a skill or custom slash command expands, so a hook that blocks the prompt now also stops its embedded shell commands"
        },
        {
          "kind": "変更",
          "text": "Changed a skill's own front-matter UserPromptSubmit hook to first run on the prompt after the one that invokes the skill"
        },
        {
          "kind": "変更",
          "text": "Changed the turn.start mod hook to also hear subagents' and teammates' turns, not only the main loop's; tell them apart by e.agentId (absent on the main loop)"
        },
        {
          "kind": "追加",
          "text": "Changed the errors shown when /ultrareview can't upload a repository to stop suggesting git add ., which could stage or commit untracked files such as .env"
        },
        {
          "kind": "変更",
          "text": "Changed the cyber safeguard notice to no longer ask people to apply to the Cyber Verification Program"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an unsent prompt and its attachments being lost when switching to another session and back"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed unused blank chats keeping a background Claude process running after starting a new conversation"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the mic button showing an internal error message when you are signed out of claude.ai; it now offers to sign you in"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved startup time in workspaces without a Python environment by starting Claude while the Python extension loads"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Improved startup: the model picker and slash command menu now fill in right away in a new window on a folder you've opened before"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a memory spike that could crash a session when many of its existing output files were re-sent to it at once"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed saving an edited routine silently moving it to a different environment when its own had been deleted or wasn't in the list; the routine now keeps its environment"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed Sessions search in a self-hosted environment's admin details finding nothing when you paste the session ID from a session's link"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the Sessions and Runners lists in a self-hosted environment's admin details saying the list is empty when a search just has no matches"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the deploy command shown when you create a self-hosted environment or environment key: it shows in full, wraps between arguments, and has a visible copy button"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed deleting a self-hosted environment to turn off its routines right away, with the reason shown on each routine, instead of leaving their runs to fail"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed Remote Control sessions whose computer can't be reached still appearing to send your messages; your text now stays in the box and Send is off until it reconnects"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added the ability for Claude in Slack to delete a canvas it created in a channel when someone asks it to"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack staying silent on untagged posts that a channel's own instructions tell it to answer, such as posts that tag someone else, in channels with guests"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack reporting a reply to another channel's thread as posted when it isn't a member there; it now says the reply wasn't delivered and how to fix that"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack sometimes ending a turn without posting its answer when a self-hosted runner's image has no python3"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Changed how Claude in Slack corrects a message it got wrong: it edits the message in place and adds a short \"Edited\" note instead of striking through the old text"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude in Slack to join channels with more than 100 members quietly, with no intro message"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review's monthly spend-limit comment and check-run card sending admins to Claude Code settings; they now link the Usage page, where that limit is set"
        }
      ]
    },
    {
      "version": "2.1.296",
      "items": [
        {
          "kind": "追加",
          "text": "Added a code key to the Claude apps gateway's managed.policies[]: the same settings as cli, also applied in Claude Desktop's Code tab; beside desktop, it turns on Claude Desktop's gateway mode"
        },
        {
          "kind": "追加",
          "text": "Added autoCompactWindow to subagent frontmatter and --agents definitions, so a subagent can auto-compact earlier than the main conversation's window"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL to run every workflow agent on one model while other subagents keep theirs"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS environment variable to set a longer maximum delay for the backoff when retrying an overloaded (529) request"
        },
        {
          "kind": "追加",
          "text": "Added a note in /plugin on a plugin whose hooks are left out because another enabled plugin has the same name"
        },
        {
          "kind": "追加",
          "text": "Added an allow_large option to the Read tool so Claude can read a text file past the usual size limits in one call when it needs the whole file and the context has room"
        },
        {
          "kind": "修正",
          "text": "Fixed managed-settings PreToolUse hooks that deny a tool call with \"continue\": false, and managed prompt hooks that block one, refusing the call but not ending the turn"
        },
        {
          "kind": "修正",
          "text": "Fixed PostToolUse hooks in managed settings not applying updatedMCPToolOutput in some sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed headless sessions starting a folder's .mcp.json or plugin MCP server that was switched off for that folder, after changing directory or reloading plugins"
        },
        {
          "kind": "修正",
          "text": "Fixed a Claude apps gateway that serves allowedProviders with \"gateway\" locking out laptops that name that gateway in user settings"
        },
        {
          "kind": "修正",
          "text": "Fixed a saved Claude apps gateway sign-in being ignored on machines whose managed settings set forceLoginMethod to gateway with no forceLoginGatewayUrl (regression in 2.1.295)"
        },
        {
          "kind": "修正",
          "text": "Fixed --teleport opening an empty conversation when the session's history could not be read"
        },
        {
          "kind": "修正",
          "text": "Fixed token counts for Haiku 5.5 and other models that take only adaptive thinking, which failed behind some gateways and were counted with budget thinking elsewhere"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed subagents being told that the user rejected a tool call that a session shutdown had interrupted"
        },
        {
          "kind": "修正",
          "text": "Fixed hook output being altered when it contained text resembling a plugin hint tag"
        },
        {
          "kind": "修正",
          "text": "Fixed secret redaction in shared transcripts and debug logs missing some values that follow a key with no value, including in JSON written inside a shell string"
        },
        {
          "kind": "修正",
          "text": "Fixed a stray 52;c;… escape sequence printed on screen after copying in older VTE-based terminals such as MATE Terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed toasts and notifications waiting unseen for as long as the /diff panel or dialog was open"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc or an interrupt during a UserPromptSubmit hook or a mod's prompt.submit hook ending headless sessions, clearing the typed prompt, or letting the unchecked prompt through"
        },
        {
          "kind": "修正",
          "text": "Fixed SessionStart hooks of a plugin loaded after a headless session starts being skipped when a different plugin with the same name, or another spelling of it, had already run"
        },
        {
          "kind": "修正",
          "text": "Fixed claude self-hosted-runner printing misleading errors when registration is refused: it now names the org admin setting, or says a restarted on-demand runner needs a fresh work order"
        },
        {
          "kind": "修正",
          "text": "Fixed a self-hosted runner session's git fetch, pull and push failing while another session of the same repository starts on a runner with --capacity above 1"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow scripts silently truncating results, agent options and other values nested deeper than about 20,000 levels, and deeply nested results writing huge task output files"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's served $ methods running in the main session's working directory instead of the calling agent's, and ignoring the turn their calling hook holds"
        },
        {
          "kind": "修正",
          "text": "Fixed $.agent.register succeeding from a mod's hook that was still running after the mod was reloaded or removed; the call is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed $.http.fetch in mods refusing a HEAD request when the response declares a Content-Length over the 4 MiB body limit"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin marketplace add, marketplace update and plugin install failing with an internal error for a marketplace named like constructor; add now refuses such names clearly"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin secret named constructor or prototype being deleted by the next save of that plugin's options"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions skipping auto mode's checks on Claude in Chrome actions that a saved permission allows when their feature flags had not loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-running a finished turn after a restart when an MCP tool result had ended that turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving some commands that assign the BASH_ARGV0 shell variable and then use it; these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit and NotebookEdit replacing every non-ASCII character in files that are not valid UTF-8 (Windows-1252, Shift-JIS, GBK); such edits are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt sent just after ← being run twice, once unseen in the foreground, when the background service was slow to answer"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt sent while SessionStart hooks were still running vanishing when ← moved the session to the background; it is still not sent, but ↑ now brings it back"
        },
        {
          "kind": "追加",
          "text": "Fixed a late-loading plugin's SessionStart hook output reaching the new conversation after /clear in headless sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed PowerShell commands not seeing variables that hooks write to CLAUDE_ENV_FILE (when the file holds only plain assignments)"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude calling cloud sessions non-interactive and suggesting /mcp or claude mcp when an MCP server needs authentication"
        },
        {
          "kind": "修正",
          "text": "Fixed /code-review ending on a raw JSON array in cloud sessions, the Agent SDK and IDE integrations; the findings now print as a numbered list"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode occasionally refusing one update to your own artifact, saying its sharing had changed when it had not"
        },
        {
          "kind": "修正",
          "text": "Fixed skills synced from claude.ai never finishing their install, and being downloaded again at every sync, when several sessions share a config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin synced from claude.ai being disabled when the marketplace dependency it declares was also synced from claude.ai"
        },
        {
          "kind": "修正",
          "text": "Fixed a startup hang on macOS when plugin paths copied from a Linux machine pointed under /home"
        },
        {
          "kind": "修正",
          "text": "Fixed the Workflow tool refusing script files with CRLF line endings, such as files checked out on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry tool_result events missing git_commit_id after git commit -q or git -C <dir> commit"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_TRANSCRIPT_LOCAL_GC dropping a message from the saved transcript when its text held a Unicode line or paragraph separator (U+2028, U+2029)"
        },
        {
          "kind": "修正",
          "text": "Fixed claude purge leaving a prompt in the history file when its text held a Unicode line or paragraph separator (U+2028, U+2029)"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PowerShell commands longer than about 1 KB always asking for permission, so allow rules and read-only detection now apply up to 32 KB"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed stdio MCP servers being force-killed at shutdown; stdin now closes first and the process tree is killed only if the server is still running after 300 ms"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed claude plugin install failing for GitHub owner/repo plugin sources on machines with no GitHub SSH key; the clone is now retried over HTTPS"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed rm -rf /c/Users/<name> in Git Bash not asking in bypass permissions mode"
        },
        {
          "kind": "改善",
          "text": "Improved fullscreen mode: the link under the mouse pointer is now underlined to show it can be opened"
        },
        {
          "kind": "改善",
          "text": "Improved transcript toggle (ctrl+o) responsiveness in code-heavy conversations by caching syntax-highlighted code blocks"
        },
        {
          "kind": "改善",
          "text": "Improved Claude Desktop's Code tab behind a Claude apps gateway: when a session can't start, including on a machine not set up for the gateway's code settings, the reason shows as a reply"
        },
        {
          "kind": "改善",
          "text": "Improved the errors for a refused cloud session: they now say why your organization's policy couldn't be loaded, and name an API key or auth token that overrides your claude.ai login"
        },
        {
          "kind": "改善",
          "text": "Improved --debug output to name unrecognized frontmatter fields in custom agent files, with a hint for likely typos"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: a tool call that wasn't run because auto mode's check had no usable answer now shows as a dim \"Not run\" row instead of a red error"
        },
        {
          "kind": "改善",
          "text": "Improved --debug output for hooks: command hooks on tool calls, prompts, SessionStart and Stop now log their command, plugin, outcome and duration when they finish, so a slow hook is identifiable"
        },
        {
          "kind": "改善",
          "text": "Improved CLAUDE_CODE_TRANSCRIPT_LOCAL_GC: a large transcript file is no longer rewritten when that would free under 10% of it"
        },
        {
          "kind": "その他",
          "text": "Updated /cost, the status line, --max-budget-usd and the SDK's cost figures to price Sonnet 5.5 cache reads at $0.10 per million tokens (was $0.20)"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled dataviz skill: lighter violet for the seventh series in light mode, softer primary text in dark mode, and compact y-axis labels like 1K"
        },
        {
          "kind": "変更",
          "text": "Changed the default limit on MCP tool descriptions sent up front and on MCP server instructions from 2,048 to 4,096 characters"
        },
        {
          "kind": "変更",
          "text": "Changed ←: a turn or ! command started while the session moves to the background is now stopped instead of finishing out of sight"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed claudeCode.spinnerVerbs missing from the extension's settings, so settings.json now completes and validates it; a malformed value no longer breaks the chat panel"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed Claude in Chrome to ask before browser actions in every session, including one connected with @browser, as the terminal does; allowing a site for the session stops repeat asks"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed chat links written as a full Windows path, such as C:\\repo\\file.ts or file:///C:/repo/file.ts, not opening the file on Windows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the working indicator still animating when reduced motion is turned on in your OS, in VS Code, or with the prefersReducedMotion setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the prompt cache clock reading warm after the panel caught up on messages late, such as after the display was off or a remote window reconnected"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a status filter to the Sessions and Runners lists on a self-hosted environment's Activity tab in admin settings; you can pick several statuses at once"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed every cloud session waiting for a self-hosted runner showing the same queue position; each now shows how many sessions are ahead of it"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a message you send while Claude is still replying in a cloud session jumping above that reply when it finishes; it now stays below it, including after a reload"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude in Slack to show the footer with the session link, model and cost only on its newest reply in a thread; the reply before it drops the footer"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed links to URLs that contain parentheses breaking in some of Claude's Slack replies and task checklists, which showed stray bracket text and opened the wrong page"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude's Slack replies drawing color swatches beside codes that only look like hex colors, such as six-digit pull request numbers"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added creating, editing and deleting workspace and channel memory files on the Activity page's Memory tab for members with the Claude Tag Admin permission"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the plugin confirmation card Claude posts in a Slack channel showing a plugin's ID instead of its name"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack posting a card to remove a plugin the channel's own settings don't include; it now explains where the plugin comes from instead"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude in Slack sometimes losing its reply when a session in a self-hosted environment moved to a new runner partway through a task"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed the Code Review check sometimes staying \"in progress\" on a pull request after the review finished; it now shows the review's result"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved Code Review admin settings to say why a setting couldn't be saved, such as a policy restriction, instead of a generic failure message"
        }
      ]
    },
    {
      "version": "2.1.295",
      "items": [
        {
          "kind": "追加",
          "text": "Added onFailure: \"block\" for command and HTTP hooks: a hook that can't start, times out, or exits with an unexpected code blocks the action instead of letting it through"
        },
        {
          "kind": "追加",
          "text": "Added Program Status Protocol (OSC 7501) support: terminals that implement it can show whether Claude Code is working, waiting on you, or done"
        },
        {
          "kind": "追加",
          "text": "Added quoted text to the /copy picker, so a drafted message copies without its > markers"
        },
        {
          "kind": "追加",
          "text": "Added a warning to claude plugin install, enable, disable and marketplace add when the settings file they write to does not load"
        },
        {
          "kind": "追加",
          "text": "Added a line on stderr, when it is a terminal, that says what a claude -p run is waiting for when it stays open after its last turn"
        },
        {
          "kind": "追加",
          "text": "Added support for timeouts.upstream_ttfb_ms on the Claude apps gateway's Bedrock, Vertex, Foundry and other cloud upstreams: a value you set now limits how long a stream may take to start there, after which it fails over or gets a 502"
        },
        {
          "kind": "追加",
          "text": "Added a \"Backgrounding cancelled\" message when you stop the turn while ← is waiting for the current tool to finish"
        },
        {
          "kind": "追加",
          "text": "Added an optional models list to every Claude apps gateway upstream: only the listed models are sent there, on failover too, and one * in an entry is a wildcard"
        },
        {
          "kind": "追加",
          "text": "Added support for forceLoginMethod: \"gateway\" and forceLoginGatewayUrl in your own user settings on machines with no managed settings, so /login opens on that Claude apps gateway"
        },
        {
          "kind": "追加",
          "text": "Added advice to claude plugin validate when a plugin's README has no install line: it prints the line to paste and never changes the exit code, even with --strict"
        },
        {
          "kind": "追加",
          "text": "Added upstream_request_id to the Claude apps gateway's inference audit event: the request ID from Amazon Bedrock, the Anthropic API or another upstream, for support cases"
        },
        {
          "kind": "追加",
          "text": "Added $.ui.notify for mods: raises a native notification through your own notification setting and says which channel sent it"
        },
        {
          "kind": "追加",
          "text": "Added children to a mod's Button: strings and Text, so a row of a list is one pressable with a chip or a dim detail inside"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_RETRY_WATCHDOG_MAX_WAIT_MS to limit how long unattended retry mode (CLAUDE_CODE_RETRY_WATCHDOG) waits out 429 and 529 errors"
        },
        {
          "kind": "追加",
          "text": "Added a request-id header to the Claude apps gateway's successful inference responses, so request_id in Claude Code telemetry matches the gateway's audit log"
        },
        {
          "kind": "修正",
          "text": "Fixed every request failing on a [1m] model when a gateway, Bedrock, Vertex or Foundry refuses the context-1m beta; Claude Code now resends without it"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p text output dropping earlier responses when background work started another turn; each turn's response now prints when the turn ends"
        },
        {
          "kind": "修正",
          "text": "Fixed remote MCP servers in headless and SDK sessions staying disconnected after an outage longer than 15 seconds, or reconnecting in a tight loop to a server that drops each connection right after it connects; repeated drops now back off, up to 30s"
        },
        {
          "kind": "修正",
          "text": "Fixed remote MCP connections being dropped when a server's error reply happened to contain a network error name"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers that repeat a pagination cursor being asked for the same page up to 20 times at every connect"
        },
        {
          "kind": "修正",
          "text": "Fixed CSS, JavaScript and XML files returned by MCP tools being saved as .bin, which the Read tool refuses; font and icon files now get their own extension too"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash tool calls failing when the model passes command_description instead of description"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome not applying a site deny rule written with port 80 (host:80) to plain http:// pages on that host"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin's Errors tab removing a marketplace that failed to load, and uninstalling its plugins, on Enter without asking first"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin marketplace add reporting success for a marketplace whose name no plugin can be installed under; such an add is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_AUTO_BACKGROUND_TASKS moving a subagent to the background while an edit or shell command waited behind it, which started that call before the subagent finished"
        },
        {
          "kind": "修正",
          "text": "Fixed PushNotification saying a push was not sent in claude remote-control sessions right after a phone message, without the /config toggle, or when started from inside Claude Code"
        },
        {
          "kind": "修正",
          "text": "Fixed files sent from remote sessions being refused as \"could not be vouched for\" when more than 256 were sent at once"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare failure to load managed settings at startup right after a login refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed /tui exiting without a message, or with a raw system error, when Claude Code could not be started again"
        },
        {
          "kind": "修正",
          "text": "Fixed a link address shown as text being hidden by a colour or conceal style a reply left on, including where it wraps in a table or a question preview"
        },
        {
          "kind": "追加",
          "text": "Fixed Fable models listed in availableModels not appearing in the /model picker for sessions signed in to a Claude apps gateway; such a model now shows its built-in row in place of a modelPicker row added for the same model"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's admin spend view showing a developer's old groups and group cap after their session stopped carrying groups"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC hiding the Claude apps gateway spend limit in /usage and the status line. The spend limit request goes to the gateway the session is signed in to"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents in their own linked worktree being shown the parent session's git branch, status and recent commits"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude stopping at the end of the current tool when text typed in the prompt cancelled backgrounding with ←; Claude now keeps working in the foreground"
        },
        {
          "kind": "修正",
          "text": "Fixed --tools and --restricted not applying to built-in tools that register after launch, and deprecated tool names reaching tools outside the caller's tool set"
        },
        {
          "kind": "修正",
          "text": "Fixed an interrupt not ending the turn until a timeout while Claude waited for an MCP server's resource list"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hook being handed a deeply nested tool input cut short with no error, so a guard could pass content it never saw"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc not stopping a self-paced /loop that was moved to the background with ←; cancelling a pending wakeup now shows a notice"
        },
        {
          "kind": "修正",
          "text": "Fixed commands and hooks in background sessions inheriting FORCE_COLOR=3, which put color escape codes into the output Claude reads"
        },
        {
          "kind": "追加",
          "text": "Fixed claude agents starting a new background service as it exited when both were stopped with a session open (for example at a reboot), which could delay shutdown and restart an interrupted session"
        },
        {
          "kind": "修正",
          "text": "Fixed a custom agent named worker being shown as \"Agent\" in auto-mode denial notices and in the activity lists of task detail views"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks for for-loops over glob patterns, improving permission-check accuracy"
        },
        {
          "kind": "修正",
          "text": "Fixed forked skills invoked from Workflow subagents delivering their results to the main conversation instead of the invoking agent"
        },
        {
          "kind": "修正",
          "text": "Fixed in-process agent teammates failing their first SendMessage call until they loaded the tool through tool search"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told on resume that an unfinished background workflow may have been stopped by TaskStop, which can never be the cause"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when you stop a long-running MCP tool call from the tasks panel or a connected client"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session's /loop stopping without notice when its next wakeup came due while the session's process was down; the session now says so and Claude is told"
        },
        {
          "kind": "修正",
          "text": "Fixed raw terminal hyperlink bytes in a reply or a teammate's message being drawn as a clickable link with a hidden address"
        },
        {
          "kind": "追加",
          "text": "Fixed plugin marketplaces whose repository has large git submodules failing to add or refresh: only the submodules that hold plugin files are now fetched"
        },
        {
          "kind": "修正",
          "text": "Fixed the /advisor dialog showing a checkmark on a saved advisor model that is no longer available; it now opens on \"No advisor\""
        },
        {
          "kind": "修正",
          "text": "Fixed the notification for an MCP tool call that moved to the background showing a shortened task id"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode's ~ moving the cursor past the last character of a line, so x after it did nothing, and 3~ running on into the next line"
        },
        {
          "kind": "修正",
          "text": "Fixed the cursor landing one character too far after pasting accented text copied from macOS (such as a file name) into the middle of the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal freezing, with ctrl+c ignored, when a response ran to tens of thousands of lines"
        },
        {
          "kind": "修正",
          "text": "Fixed calls a mod makes while it reloads during a plugin hooks worker restart getting past another mod's guard hook that has a .catch; such calls are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins whose hooks module nests code thousands of levels deep failing to load or validate with a bare stack-overflow message"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin test passing a session.append hook that removes tool call, tool result or thinking blocks that a real session keeps"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told it can resume background subagents with SendMessage after a session was killed and resumed a second time"
        },
        {
          "kind": "修正",
          "text": "Fixed a file being treated as already read after a Bash command such as cat ran without printing it"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin options named constructor or prototype always reading as their default and never reloading the plugin when edited"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hot reload missing a save made while /reload-plugins or session start was reading the mod's files"
        },
        {
          "kind": "修正",
          "text": "Fixed the mod hot-reloading question being asked again every turn for the whole session when it is approved without picking an answer"
        },
        {
          "kind": "修正",
          "text": "Fixed /model, /fast and /output-style saving their setting without asking a plugin's config.set hook"
        },
        {
          "kind": "修正",
          "text": "Fixed bold text being drawn faint in piped output when it directly follows dim text"
        },
        {
          "kind": "修正",
          "text": "Fixed replies whose quotes nest deeper every few lines freezing the terminal for seconds and using gigabytes of memory"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hot reload missing a save made within a few milliseconds of its last reload, which left the mod on its old version until the next save"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp serve background Bash results not naming the output file, and its tool description promising a notification that never arrives"
        },
        {
          "kind": "追加",
          "text": "Fixed an async SessionStart hook's unchanged context being added to the conversation again on every resume"
        },
        {
          "kind": "修正",
          "text": "Fixed variables a SessionStart hook writes to CLAUDE_ENV_FILE not reaching the Bash tool after an in-app /resume or /branch"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill's allowed-tools and effort being dropped when the Skill tool finished before the response stream ended, which denied the skill's Bash commands in -p runs"
        },
        {
          "kind": "修正",
          "text": "Fixed a tampered cache of server-managed settings making a person's own plugin count as organization-managed on machines whose managed settings list or enable plugins"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude 3 Opus and Claude 3.x Sonnet sessions being offered tool search, which those models reject, where feature flags are unavailable"
        },
        {
          "kind": "修正",
          "text": "Fixed generated type files being written into a --plugin-dir plugin's folder in -p and SDK sessions; they are now written only where a mod is being developed"
        },
        {
          "kind": "修正",
          "text": "Fixed text with tabs or bidirectional control characters losing its end at the edge of the screen or drawing over nearby rows"
        },
        {
          "kind": "追加",
          "text": "Fixed /model saying a Max effort pick was saved as your default for new sessions; Max applies to the current session only"
        },
        {
          "kind": "修正",
          "text": "Fixed an async hook's JSON output being ignored when it is printed over several lines"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool rejecting calls with an empty pages parameter instead of treating it as omitted"
        },
        {
          "kind": "修正",
          "text": "Fixed project-scope plugins not loading in VS Code on Windows due to drive-letter casing (anthropics/claude-code#74612)"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin install and uninstall at project or local scope on Windows missing the install record, or adding a second one, when only the drive letter's case differs"
        },
        {
          "kind": "修正",
          "text": "Fixed a queued message being lost when pulled back into the prompt with ↑ or Esc just after ←: prompt history now keeps it"
        },
        {
          "kind": "修正",
          "text": "Fixed mod hot-reloading turning off for the whole session when an SDK host closed its enable question before anyone answered; the question is now asked up to three times"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt that a mod's prompt.submit hook rewrote or dropped still being saved as typed to prompt history and to the transcript's queued-prompt records"
        },
        {
          "kind": "修正",
          "text": "Fixed non-interactive sessions telling you about MCP servers that need authentication when your request doesn't use them"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude_code.auth OpenTelemetry login event not being emitted on Claude apps gateway sign-in. The event is exported when OpenTelemetry is configured on the machine or the session is already signed in to the gateway"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin that adds very large interfaces getting another plugin unloaded when the plugin hooks worker stalls"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit treating a file as fully read when its contents changed without its modification time advancing"
        },
        {
          "kind": "修正",
          "text": "Fixed short command output with Windows line endings (CRLF) being drawn on a single line"
        },
        {
          "kind": "修正",
          "text": "Fixed a stopped scheduled task coming back on resume after a rewind, and a scheduled task being lost on resume after Esc or a rewind following a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal freezing for seconds or minutes while syntax highlighting code with very long lines, long runs of blank lines, or unclosed strings and heredocs"
        },
        {
          "kind": "修正",
          "text": "Fixed temporary files left under ~/.claude/seed-admin by an interrupted /ultrareview upload never being removed by the retention cleanup"
        },
        {
          "kind": "修正",
          "text": "Fixed Desktop and SDK sessions refusing to switch back to auto mode until restart after disableAutoMode was removed from settings"
        },
        {
          "kind": "修正",
          "text": "Fixed claude.ai-synced plugin hooks failing with \"Plugin directory does not exist\" in long-running sessions after another session synced a plugin update"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt sent after a /rewind being lost, and the removed turns coming back, when the session was moved to the background or resumed after being killed"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions hanging when a mod's session.receive hook asked for permission before passing a message on"
        },
        {
          "kind": "修正",
          "text": "Fixed macOS background sessions that restart together after an update sometimes running outside the stable app wrapper, so folder-access prompts could reappear"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP sign-in or reconnect that finishes late in headless and SDK sessions relisting a server set with setMcpServers() as your own"
        },
        {
          "kind": "修正",
          "text": "Fixed changing the auto-update channel in /config saving before a plugin's config.set hook was asked"
        },
        {
          "kind": "修正",
          "text": "macOS: Fixed a file count at session start that could reach other apps' data and raise the \"access data from other apps\" prompt when a session starts in the home folder or above it"
        },
        {
          "kind": "改善",
          "text": "Improved token counts behind a Claude apps gateway on Amazon Bedrock, which /context and large file reads use: the gateway now gets them from AWS's CountTokens API instead of a one-token model request. Grant bedrock:CountTokens to use it"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway to log a warning every 30 seconds while its PostgreSQL database is read-only, saying what fails and how to recover"
        },
        {
          "kind": "改善",
          "text": "Improved the status shown in Remote Control, claude.ai and the desktop app for a session waiting on a permission prompt to name an MCP tool by its server and readable name instead of its mcp__server__tool identifier"
        },
        {
          "kind": "改善",
          "text": "Improved background requests behind a Claude apps gateway to use Haiku 4.5 instead of the session's model, falling back to the session's model where the gateway does not serve Haiku 4.5"
        },
        {
          "kind": "改善",
          "text": "Improved how the Claude apps gateway handles models not listed under models: in Amazon Bedrock regions outside AWS's US geography. AWS always refused those requests; the gateway now tries the model in your own region, and a refusal names the model to add"
        },
        {
          "kind": "改善",
          "text": "Improved headless rate_limit_event usage-limit warnings to say whether the account has extra usage turned on"
        },
        {
          "kind": "改善",
          "text": "Improved the built-in plugin-authoring skill: it no longer tells a session with no terminal to run terminal commands, and explains sharing a mod only when asked"
        },
        {
          "kind": "改善",
          "text": "Improved Grep input handling: a search sent with grep's -l, -c or -r flag now runs instead of failing the call"
        },
        {
          "kind": "改善",
          "text": "Improved claude plugin validate and plugin loading: when a hooks module is refused over a rebound top-level var, the error now names the line that rebinds it, the cause, and a fix"
        },
        {
          "kind": "改善",
          "text": "Improved the Workflow tool's scriptPath refusal: it now says to pass the script inline via script, the route that works in sessions without a Read tool"
        },
        {
          "kind": "改善",
          "text": "Improved what Claude is told when a large file it sends fails to upload with no reason given, so it reports the failure instead of shrinking the file"
        },
        {
          "kind": "変更",
          "text": "Changed MCP tool descriptions the model loads through tool search to be cut at 16,384 characters instead of 2,048"
        },
        {
          "kind": "変更",
          "text": "Changed subagents to preload at most 32 skills from the skills field, each once; a subagent with the Skill tool can still invoke the rest"
        },
        {
          "kind": "変更",
          "text": "Changed Ctrl+C at the idle prompt of an attached background session to leave a pending /loop wakeup alone, so pressing it twice detaches and the loop keeps running; press Esc to stop it"
        },
        {
          "kind": "変更",
          "text": "Changed claude agents stopped with its background service (macOS, or Linux without the service installed): running sessions now stop in about a minute unless it is run again, and a notice says so"
        },
        {
          "kind": "変更",
          "text": "Changed claude.ai connectors to negotiate MCP protocol version 2026-07-28 by default on installs that fetch no flags; MCP_PROTOCOL_NEGOTIATION=legacy opts out"
        },
        {
          "kind": "変更",
          "text": "Changed Artifact pages with no background of their own to show on white instead of off-white"
        },
        {
          "kind": "変更",
          "text": "Changed what Claude and you read when a mod denies a tool call after the tool ran: it now says the tool ran and a plugin withheld its result"
        },
        {
          "kind": "変更",
          "text": "Changed tab stops to count from where a text starts instead of from the screen's left edge: an answer indented by 2 has its first stop 8 cells in, where it was 6"
        },
        {
          "kind": "変更",
          "text": "Changed the Artifact tool's permission prompts with telemetry disabled to the same five questions other installs get, instead of asking before each read of someone else's artifact and each data edit"
        },
        {
          "kind": "追加",
          "text": "Changed scheduled and Run now routine runs in installs with telemetry disabled to publish new private artifacts, and update your own, without asking, as in other installs"
        },
        {
          "kind": "変更",
          "text": "Changed toasts from your organization's mods to show ahead of other mods' toasts instead of waiting behind them"
        },
        {
          "kind": "追加",
          "text": "Changed the Claude apps gateway to start with a warning and serve a desktop policy key its bundled Claude Desktop schema doesn't know, so new Desktop settings need no gateway upgrade"
        },
        {
          "kind": "変更",
          "text": "Changed WebSocket (ws) MCP servers: a message over 16 MiB is no longer parsed and closes the connection, the limit the other transports already have"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a chat row for files Claude sends you: click a file's name to open it in the editor; Claude's caption shows underneath, and the row stays visible in Focus view"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Fork conversation from here\" and Rewind's conversation restore failing with \"Message not found in session\" after a background agent's activity or one of the panel's own status lines"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Ctrl+Shift+Tab, Cmd+Shift+Tab and Alt+Shift+Tab in the chat input also switching the permission mode, and Ctrl+Tab accepting the suggested prompt"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed keyboard focus bouncing between two Claude views visible at once, which could send typed text to the wrong conversation"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed the runner to stop passing CCR_AUTO_MODE_ALLOW, CCR_AUTO_MODE_ENVIRONMENT and CCR_AUTO_MODE_SOFT_DENY into a session's environment"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed git fetches being cut off while the git server was still reporting progress on a large repository; CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS tunes or turns off the wait"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a message sent right after unarchiving a cloud session sometimes getting no reply because no container could start for it"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed some older routines starting their runs without ever giving Claude their saved prompt; those routines now run their prompt again"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved how quickly a cloud session catches up after its connection drops: activity you missed now appears all at once instead of row by row"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the setup script box in the cloud environment form: it starts taller, grows with your script, and can be resized by dragging"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the settings confirmation cards Claude posts in a Slack channel to stay open for 30 minutes instead of 10"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude's notice that a channel shared across Enterprise Grid workspaces uses organization defaults to post only when someone mentions Claude, at most once a month"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed channel links and @-mentions in a forked thread's \"Continued from\" card showing as raw Slack codes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Slack's Working status spinning on under a thread after @Claude !restart had already confirmed the restart"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed another app's or bot's @Claude going unanswered in a busy channel where Claude had stopped reading untagged messages"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a confirmation in Claude Tag admin settings before adding a channel manager moves that member to Custom roles, which can remove their other access"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review re-reviews saying no issues were found while earlier findings were still open; the comment now says how many remain open"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review still skipping a large CLAUDE.md's rules when the pull request edits that file"
        },
        {
          "kind": "修正",
          "text": "Fixed web searches and agent hook evaluations taking much longer at xhigh and max effort"
        }
      ]
    }
  ]
};
