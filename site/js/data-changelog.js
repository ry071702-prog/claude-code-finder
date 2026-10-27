/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.311",
      "items": [
        {
          "kind": "追加",
          "text": "Added --hold-idle-file and --max-hold-min to self-hosted-runner, to keep an idle session while your host reports processes it left running"
        },
        {
          "kind": "追加",
          "text": "Added a tip for the Explanatory output style, shown when you ask Claude for explanations"
        },
        {
          "kind": "修正",
          "text": "Fixed long freezes at startup and after reading or editing files when a CLAUDE.md file holds a very long list item"
        },
        {
          "kind": "修正",
          "text": "Fixed interrupting Claude not taking effect until a timeout while an MCP server had not answered a resource read or a skill was still downloading"
        },
        {
          "kind": "修正",
          "text": "Fixed standard-context sessions stopping with \"Usage credits required for 1M context\" when a request ran over 200K tokens; Claude Code now compacts the conversation and continues"
        },
        {
          "kind": "修正",
          "text": "Fixed Write and Edit stalling for up to 5 seconds after they ran, and reporting 0 lines changed, when changing thousands of lines in a file"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents being unable to use MCP tools from servers that finish connecting after the subagent starts"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude seeing stale MEMORY.md and CLAUDE.md content right after automatic compaction when those files were edited earlier in the session"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p and SDK sessions saving transcript messages out of order or keeping messages that were taken back"
        },
        {
          "kind": "修正",
          "text": "Fixed SubagentStop hooks running about twice a minute for each running subagent instead of once when it finishes"
        },
        {
          "kind": "修正",
          "text": "Fixed the @ file picker ignoring .ignore/.rgignore negation rules that re-include git-ignored files"
        },
        {
          "kind": "修正",
          "text": "Fixed a subagent's isolated worktree being removed while a background subagent it started was still working in it"
        },
        {
          "kind": "追加",
          "text": "Fixed background agents in auto mode that wait on their own shells starting a new main conversation turn on every wake"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash tool description claiming the working directory always persists between calls"
        },
        {
          "kind": "修正",
          "text": "Fixed the environment block naming a shell commands don't run in, such as fish when the Bash tool uses zsh"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp add, claude mcp remove and /mcp naming the current folder instead of the project entry in ~/.claude.json that holds a local-scope server when run below a repository root"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp list and claude mcp get showing the error code twice on failed-connection lines (for example ENOENT: ENOENT: …)"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions staying on \"Connecting\" for about two minutes when a network proxy blocks a startup request"
        },
        {
          "kind": "修正",
          "text": "Fixed messages that Claude sends to a cloud or Remote Control session appearing as your own message in the Claude mobile apps"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told the cause when a file attached to a message sent over Remote Control or to a cloud session could not be saved because the disk was full, or that a message's attachments past the first 20 were left out"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch and WebSearch hanging on a stalled response in Cowork cloud sessions; an unfinished request now fails after 300 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session that crashed between turns not being restarted while it was attached, pinned, or had a scheduled task or wake-up set"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"background service did not respond\" error suggesting the disabled claude daemon restart; it now suggests claude daemon stop --any and says it ends background sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed claude respawn <id> starting the background service before reporting that no background session matches the id"
        },
        {
          "kind": "修正",
          "text": "Fixed /effort not warning about a prompt cache miss in plan mode when the plan model differs from the session model"
        },
        {
          "kind": "修正",
          "text": "Fixed /ide saying the VS Code extension was installed before the install finished or when it failed"
        },
        {
          "kind": "修正",
          "text": "Fixed the Write tool's file preview skipping rows and miscounting hidden lines when a line is wider than the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed ↑ in an agent's chat tab recalling a message that was still waiting to be delivered, so resending it sent a second copy"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork cloud sessions losing their connectors and most tools after a restart when a plugin or your settings named an agent; Cowork cloud sessions now ignore that setting"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams sessions showing an empty task list when coming back with --resume, --continue, /resume or --session-id, including after /clear or a crash, and /branch writing to the original session's list"
        },
        {
          "kind": "修正",
          "text": "Fixed pasting text that mentions an image file, such as ! open /tmp/shot.png or /review look at /tmp/shot.png, attaching the image and dropping its path from the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed the feedback draft card showing its 1/2/0 and Esc shortcuts while the prompt has text, when those keys act on the prompt instead of the card"
        },
        {
          "kind": "修正",
          "text": "Fixed a lone backslash in quotes or brackets, like \"\\\" or (\\), disappearing from Claude's responses"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teammates compacting their history when DISABLE_COMPACT is set"
        },
        {
          "kind": "修正",
          "text": "Fixed the rewind menu offering \"Summarize from here\" and \"Summarize up to here\" when DISABLE_COMPACT is set"
        },
        {
          "kind": "修正",
          "text": "Fixed a finished /code-review, or another skill that runs in a sub-agent, running a second time when a cloud or background session restarts"
        },
        {
          "kind": "修正",
          "text": "Fixed long hidden thinking being cut off as idle on Google Vertex AI, Microsoft Foundry and Claude Platform on AWS, where the endpoint sends thinking progress updates"
        },
        {
          "kind": "修正",
          "text": "Fixed /ide saying it had installed the JetBrains plugin when nothing was installed"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Pro and Max subscribers being told to ask their admin when their subscription can't be used; the message now points to billing settings"
        },
        {
          "kind": "修正",
          "text": "Fixed the diff pane opening by itself after an edit in wide fullscreen terminals when it had nothing to show"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp showing a remote server as failed after \"Clear authentication\" when the server works without sign-in"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp showing \"authenticated\" for a remote server that Claude Code sends no credentials to"
        },
        {
          "kind": "修正",
          "text": "Fixed a --plugin-dir folder of plugins loading as one plugin when an empty .mcp.json was at its top"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage never showing large prompt-cache misses under \"What's contributing to your limits usage?\""
        },
        {
          "kind": "修正",
          "text": "Fixed status line links staying plain text in background sessions after you open them from a terminal that supports links"
        },
        {
          "kind": "修正",
          "text": "Fixed the /rewind confirmation saying the conversation \"will be forked\" when the later messages are removed from the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed the /rewind warning that wrongly said manual and Bash edits are never affected by a code restore"
        },
        {
          "kind": "修正",
          "text": "Fixed plan approval in screen reader mode sending feedback you had dismissed with Escape"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code retrying requests the API marked not to retry, which could hold a turn for minutes or, in unattended retry mode (CLAUDE_CODE_RETRY_WATCHDOG), indefinitely"
        },
        {
          "kind": "追加",
          "text": "Linux: Fixed sandboxed Bash commands failing with bwrap: Can't create file when a --plugin-dir folder was also an added directory and permissions.blockReadsOutsideWorkingDirectories was on"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Fixed a session failing to start when a rate limit (HTTP 429, or a git wrapper that exits 75) blocks an added read-only repository; it now starts without that repository"
        },
        {
          "kind": "改善",
          "text": "Improved startup time for Pro and Max accounts by skipping two network requests on launches within an hour of the last check"
        },
        {
          "kind": "改善",
          "text": "Improved /teleport and claude --teleport to warn when a compacted cloud session loads from its last compaction, so the messages it summarized aren't in the local copy"
        },
        {
          "kind": "改善",
          "text": "Improved the messages shown when a background session's process exits: they no longer promise a restart that isn't coming, and they say how to resume the session"
        },
        {
          "kind": "改善",
          "text": "Improved artifacts with several views: Claude now routes each view on the link's #name and no longer says the address bar stays the same as you switch views"
        },
        {
          "kind": "改善",
          "text": "Improved shell commands that reach their timeout: the result now shows the output so far and says the command is still running in the background"
        },
        {
          "kind": "改善",
          "text": "Improved compaction: when the model's reply has no summary in it, Claude Code now usually asks for the summary once more before it replaces the conversation"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's choice between a page and a document: explainers and visual or interactive work become artifact pages; documents are for writing people keep editing or pass around"
        },
        {
          "kind": "改善",
          "text": "Improved startup time for launches whose only arguments are options and their values, such as claude --model opus"
        },
        {
          "kind": "変更",
          "text": "Improved the \"Connection dropped\" API error: it now says where to look first (the proxy or gateway in use, else VPN or firewall; Anthropic API only, Bedrock, Vertex and Foundry are unchanged)"
        },
        {
          "kind": "改善",
          "text": "Improved screen reader mode: deleting a rule in /permissions says \"Deleted allow rule …\" right away"
        },
        {
          "kind": "改善",
          "text": "Improved the message shown when a pasted sign-in code is refused: it now says the code may have expired or been used, and to sign in again"
        },
        {
          "kind": "改善",
          "text": "Improved Slack connector sends: Claude now checks a channel's topic for posting rules before messaging a channel you didn't name"
        },
        {
          "kind": "改善",
          "text": "Improved screen reader mode: Claude's questions are listed as \"Questions: Color (answered), Pages\", without arrows or symbols"
        },
        {
          "kind": "変更",
          "text": "Changed ultrathink in the interactive terminal to run its turn at xhigh effort on Opus 5.5, Sonnet 5.5, Haiku 5.5 and Fable 5.1 through Anthropic's API; typed while Claude is working, it raises the rest of that turn"
        },
        {
          "kind": "変更",
          "text": "Changed the ultrathink rainbow to appear only where the keyword can raise effort, and not when the word is quoted or part of a file path"
        },
        {
          "kind": "変更",
          "text": "Changed Ctrl+D in agent view to match the prompt: on an empty input, pressing it twice exits"
        },
        {
          "kind": "変更",
          "text": "Changed --output-format json and stream-json output to write DEL, C1 control and Unicode format characters inside strings as \\uXXXX escapes; parsed values are unchanged"
        },
        {
          "kind": "修正",
          "text": "Changed model names and IDs to drop the [1m] suffix and its label on models where the suffix has no effect; the suffix is still accepted"
        },
        {
          "kind": "変更",
          "text": "Changed startup warnings about permission rules in settings files to show once per user until the rule changes"
        },
        {
          "kind": "変更",
          "text": "Changed /code-review to tell Claude to put the effort level first and use max only when asked"
        },
        {
          "kind": "変更",
          "text": "Changed DISABLE_COMPACT in settings files and in a mod's $.env.set so they can only turn compaction off, not back on"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Code on Bedrock, Mantle, Vertex, and Foundry to load model settings from a signed file on downloads.claude.ai; set CLAUDE_CODE_MODEL_CATALOG=off to turn this off"
        },
        {
          "kind": "変更",
          "text": "Changed sessions that set CLAUDE_CODE_SYNC_SKILLS with feature-flag fetching off to reuse a claude.ai skills list up to 10 minutes old that another session on the machine fetched"
        },
        {
          "kind": "変更",
          "text": "Changed clicks on scrollbar arrows and bars in fullscreen lists to act when the mouse button is released, so moving off the scrollbar before letting go cancels the click"
        },
        {
          "kind": "変更",
          "text": "Changed claude purge to say it deletes data only on this computer, not anything stored by Anthropic"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added syntax coloring to code blocks in Claude's replies, in light, dark and high contrast dark themes"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a \"Running UserPromptSubmit hooks\" spinner status and screen reader announcement for slow UserPromptSubmit hooks"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed custom skills and custom slash commands sent from the VS Code or JetBrains panel leaving out the open file or selected lines that ordinary messages include (anthropics/claude-code#102799)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the extension host freezing while the login shell ran its start-up files to read PATH on macOS and Linux"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed clicking an image in a tool result, or closing its preview, also opening the result's text in an editor tab"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed voice dictation continuing to record after a message was sent with the Send button; sending now stops dictation first, as pressing Enter already did"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the extension to start Claude Code sessions with DISABLE_TELEMETRY set while VS Code's telemetry setting is off, so they send no usage metrics or error reports and fetch no feature flags"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the session list side bar to load Web sessions when the Web tab is first opened, not at startup"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed routines in Anthropic-hosted environments staying locked after their owner left the organization and rejoined; the owner can now turn them back on"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a failed routine API token delete or regenerate showing nothing if the edit dialog had already closed; it now shows an error toast"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed cloud environment dialogs, including the admin dialog, accepting duplicate names; they now refuse a name another listed environment already has"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Skills view to Claude Tag analytics showing how often Claude runs each attached skill in Slack channels and which go unused, with Usage links in admin settings"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Improved Claude Tag routines that run in a new session: a run with nothing to report can now end without posting a throwaway message to the channel"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude Tag admin settings to show a lock instead of # for private Slack channels that your own Slack account can see"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved Code Review's check run to say no further automatic review will start when the model still can't analyze a change on the automatic retry"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved Code Review reliability: a review whose session fails to start because of a transient server fault is now retried once automatically, and its check run says so"
        }
      ]
    },
    {
      "version": "2.1.310",
      "items": [
        {
          "kind": "追加",
          "text": "Added the Monitor tool and plugin monitors on Bedrock, Vertex, and Foundry, and when telemetry or nonessential traffic is disabled; long foreground sleeps are now blocked there too"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing behind some gateways and compatible servers that reject the effort-2025-11-24 beta value or mid-conversation system messages; Claude Code now retries without them"
        },
        {
          "kind": "修正",
          "text": "Fixed background cleanup deleting some recent files, such as pasted images, when cleanupPeriodDays is set to a very large value"
        },
        {
          "kind": "修正",
          "text": "Fixed compaction after a \"Prompt is too long\" error keeping too much of a conversation with dense text, such as base64 or SVG, so the next request could fail again"
        },
        {
          "kind": "修正",
          "text": "Fixed file read permission prompts not showing where a symbolic link leads"
        },
        {
          "kind": "修正",
          "text": "Fixed a question's auto-continue timeout firing the moment the external editor closed after a long edit"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PreToolUse and PermissionRequest hooks letting a tool call through when Git Bash is missing and the hook's command is only quoted strings, such as a quoted path"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode's prompt before the first read outside the working directories: it now says when blocking those reads makes shell commands ask for permission"
        },
        {
          "kind": "改善",
          "text": "Improved memory use of non-interactive sessions (-p, Agent SDK) during compaction when the transcript file is very large"
        },
        {
          "kind": "改善",
          "text": "Improved a mod's Image to draw inside tmux with allow-passthrough and focus-events on, in kitty, Ghostty, and iTerm2 3.5+ with fullscreen rendering, where it showed only its alt text"
        },
        {
          "kind": "改善",
          "text": "Linux: Improved /sandbox and the sandbox startup warning to name Ubuntu's AppArmor restriction on user namespaces, and how to lift it, when it keeps bubblewrap from starting the sandbox"
        },
        {
          "kind": "変更",
          "text": "Changed the error for an MCP tool call that times out in a non-interactive session while the server's elicitation is unanswered: it now tells Claude that no answer came and not to repeat the call"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed pressing Enter on the plan review card's \"Send feedback and keep planning\" button approving the plan instead of sending your comments back"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the panel showing \"Something went wrong\" after \"Switch branch & continue\" on a cloud session opened from Session history's Web tab"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added Claude Code cloud sessions and Remote Control permissions to Enterprise custom roles, so Owners can control access to each by role"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a Choose file button to load a cloud environment's setup script from a file"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed failed saves and archives in the cloud environment edit dialog showing no error inside the dialog"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed failed routine API token actions showing only a toast; the error now appears in the routine edit dialog"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the session start checklist to show a cloud environment's setup script output in a scrolling box"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed turning on Cloud sessions or Remote Control in admin settings to ask for confirmation and list the custom roles that have that permission"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed the cloud environment dialog to open network access, setup script and environment variables from rows instead of listing every editor at once"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag treating ! commands such as !restart and !help as ordinary messages when sent in bold, italic or strikethrough"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag admin channel and workspace pages being replaced by a load error when a background refresh of the bundle list fails"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag's spend limits page in admin settings reporting that no channels match a filter while channel names are still loading"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed the Code Review admin section hiding its repositories and switches after a failed refresh of the repository list"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the Code Review admin section to retry the first load and show one Try again banner when it still fails"
        }
      ]
    },
    {
      "version": "2.1.309",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands on macOS and Linux running the shell's startup files outside the sandbox before each command"
        },
        {
          "kind": "修正",
          "text": "Fixed macOS sandbox denyWrite glob patterns not applying at a path's real location when the pattern's folder is reached through a symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands and auto-accepted edits being able to modify the MCP config file passed with --mcp-config"
        },
        {
          "kind": "修正",
          "text": "Fixed a disabled MCP server being reconnected by a later permission prompt in print and SDK sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash permission check trusting a variable set by a command whose redirect can fail to open"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks not prompting for some compound commands that change directory before running git when the cd is wrapped or prefixed, as they do for a plain cd"
        },
        {
          "kind": "修正",
          "text": "Fixed an Edit(path) deny rule not blocking a Bash redirect to that path in some commands that also held a subshell"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions accepting some locale-prefixed commands the isolation guard should refuse"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions on zsh accepting some arithmetic commands that the isolation guard should refuse"
        },
        {
          "kind": "修正",
          "text": "Fixed worktrees and branch checkouts that Claude Code creates so they ignore git replace refs, as its other git operations already do"
        },
        {
          "kind": "修正",
          "text": "Fixed profile store write protection not applying when the config directory is reached through a symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions compacting repeatedly after reading files under a very large nested CLAUDE.md; a nested CLAUDE.md over the size limit now loads only its start"
        },
        {
          "kind": "修正",
          "text": "Fixed ctrl+enter (send now) only queuing a message when pressed before the response had started, and restarting a prompt's hooks while leaving the message queued when pressed while those hooks were running"
        },
        {
          "kind": "修正",
          "text": "Fixed key-bound slash commands running in the shell from ! mode"
        },
        {
          "kind": "修正",
          "text": "Fixed ctrl+o not showing messages from other agents and sessions that are still waiting to be delivered; they now appear in full under the transcript, marked as waiting"
        },
        {
          "kind": "修正",
          "text": "Fixed long tool output previews being cut through an emoji, leaving session transcripts that jq could not parse"
        },
        {
          "kind": "修正",
          "text": "Fixed Read reporting \"File does not exist\" for PDF page ranges in Linux sandboxes that share the parent's /proc"
        },
        {
          "kind": "修正",
          "text": "Fixed messages from a Claude Desktop-hosted session sometimes being lost when its connection refreshed"
        },
        {
          "kind": "修正",
          "text": "Fixed features missing from Claude Code sessions in the Claude desktop app when the terminal on the same computer was signed in to a different account or organization"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude remote-control status line showing HEAD as the branch for a folder that is not in a git repository"
        },
        {
          "kind": "修正",
          "text": "Fixed split-pane agent teammates not inheriting the tool deny and --tools rules given on the leader's command line"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions renamed with /rename appearing to other sessions under a generated name after a VS Code window reload or a non-interactive --resume"
        },
        {
          "kind": "修正",
          "text": "Fixed the /rewind list showing \"No code changes\" for a turn that changed checkpointed files through /code-review --fix, a subagent or a shell command"
        },
        {
          "kind": "修正",
          "text": "Fixed /privacy-settings showing an out-of-date \"Help improve our AI models\" value; it now also says when the setting can't be fetched"
        },
        {
          "kind": "修正",
          "text": "Fixed feedback saying \"try again later\" when your organization does not accept feedback; it now shows the server's reason and where to report a bug"
        },
        {
          "kind": "修正",
          "text": "Fixed oversized /feedback reports failing instead of being resent without the transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill in an --add-dir folder being unreachable when another skill already held its name; it is now offered as <folder>:<name>"
        },
        {
          "kind": "修正",
          "text": "Fixed /verify and /code-review not finding a nested package's own skill when its files were changed from the shell"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api skill saying that ant beta:worker poll --on-work passes trace context to the command"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api skill's C# tracing setup missing spans from the cloud platform clients"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api skill saying that API spans for requests to Claude Platform on AWS can't join the caller's trace"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks that run in PowerShell not blocking when the hook's program exits with code 2, and on Windows PreToolUse and PermissionRequest hooks with \"shell\": \"powershell\" failing open when Git for Windows isn't installed"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's turn.step hook that names a model by alias, such as haiku, failing every request with a model error: the alias now resolves to its model"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins and skills synced from claude.ai being removed, sometimes mid-session, after a disk read error"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publishes and updates being refused for some ordinary pages, such as pages with certain minified scripts or artifacts Claude could not read first"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude asking for permission on each artifact update for the rest of a turn after the conversation was compacted in that turn"
        },
        {
          "kind": "修正",
          "text": "Fixed fine-grained tool streaming staying off on Amazon Bedrock when ANTHROPIC_BEDROCK_BASE_URL is set to the default bedrock-runtime.<region>.amazonaws.com endpoint"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Waiting for API response\" hint flickering behind gateways that send only keepalive pings: routes off Anthropic's backend now wait 45 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude notifying unrelated GitHub users by writing role names and placeholders as mentions in PRs, issues and comments"
        },
        {
          "kind": "修正",
          "text": "Linux: Fixed sandbox write denies lifting when a background command outlived the session"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PowerShell permission checks auto-approving some Set-Location or cd commands that target the current directory and carry extra arguments; these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "macOS: Fixed the \"Install Command Line Developer Tools\" dialog opening each time Claude Code starts on a Mac without Xcode or the Command Line Tools"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed --startup-timeout-min stopping a session whose first prompt, such as /code-review, was still working in a subagent; a frozen process is still stopped"
        },
        {
          "kind": "改善",
          "text": "Improved the speed of many git commands Claude Code runs for itself on Windows; on every platform, errors from those commands now show in English even when git is set to another language"
        },
        {
          "kind": "改善",
          "text": "Improved the error when a hooks module is nested too deep to load: it now names the file instead of showing a bare stack-overflow message"
        },
        {
          "kind": "改善",
          "text": "Improved disk-full handling: a Bash command cut off by a full disk now says so and names the folder to free up, and starting on a full temp volume prints a clear message, not a raw ENOSPC error"
        },
        {
          "kind": "追加",
          "text": "Improved the /claude-api skill to offer API tracing alongside SDK tracing when asked to add OpenTelemetry"
        },
        {
          "kind": "改善",
          "text": "Improved the /claude-api skill to check the live docs before saying a feature is unsupported"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Improved sessions that move to a new runner: Claude now sees the tool call that was interrupted, marked as outcome unknown"
        },
        {
          "kind": "追加",
          "text": "Updated the bundled dataviz skill to accept APCA as a text-contrast measure (keeping WCAG 2 ratios where AA conformance is required), add an apca(text, background) function to its palette validator scripts, and say whether a label inside a colored chart fill should be white or near-black"
        },
        {
          "kind": "その他",
          "text": "Updated the /claude-api skill: service account keys and Workload Identity Federation tokens can now manage OpenTelemetry destinations"
        },
        {
          "kind": "変更",
          "text": "Changed sed -i to get the standard Bash prompt and run as written, not a simulated file-edit preview; like other Bash edits, it is no longer restored by /rewind"
        },
        {
          "kind": "変更",
          "text": "Changed claude ultrareview to require workspace trust: it asks on a terminal, else refuses; scripts pass --trust-workspace, which takes no value (put a PR number or base branch before it), or set CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK=1"
        },
        {
          "kind": "変更",
          "text": "Changed the dangerous rm and rmdir prompt in bypass permissions mode in the Desktop app and VS Code to deny the command at once with a rewrite hint, so unattended sessions keep going"
        },
        {
          "kind": "変更",
          "text": "Changed commands the settings exclude from the sandbox to ask before writing to its write-list paths while the sandbox is enabled but cannot run; the unsandboxed fallback is refused there"
        },
        {
          "kind": "変更",
          "text": "Changed worktree creation and reuse so git no longer fetches objects on demand, in ordinary clones and in partial clones with a Bash sandbox configured; such a partial clone fetches them first"
        },
        {
          "kind": "変更",
          "text": "Changed the /claude-api skill to build Managed Agents subagent teams on multiagent_20261001 with dynamic workflows on by default, instead of coordinator"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a log warning that says what to do when dictation or the extension's own requests fail certificate verification, such as behind a TLS-inspecting proxy"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Claude panel staying blank after the editor cached an incomplete copy of its files; it now recovers by itself, or says what went wrong and how to fix it"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed Session history filling up with empty \"Untitled\" sessions each time you start a new session without sending a message"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed long slash-command messages such as /goal filling the chat panel; they now fold behind Show more like other prompts (anthropics/claude-code#97469)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed long messages not folding behind Show more after the chat panel is made narrower"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Ctrl+J in the chat input always inserting a newline: it is now left to VS Code and the OS when \"ctrl+j\" is set to null in the Chat context of ~/.claude/keybindings.json"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a mod's \"From the … plugin\" label above the prompt being drawn over the slash command and @-mention menus (anthropics/claude-code#102981)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an empty list item, paragraph or code block, and list items renumbered from 1, when pasting copied LaTeX math"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the feedback error showing only an HTTP status when your organization does not accept feedback"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Improved Edit and Write speed in the chat panel: the wait for new problems after each edit is now 0.75 seconds in most cases, down from 1 to 1.5 seconds"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed the Add connector list in routine forms saying no connectors were available while they were still loading"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the cloud environment editor shuffling environment variables and adding backslashes to values that contain both kinds of quote"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the self-hosted environment details dialog in admin settings so its title, tabs and buttons stay in view while only the content scrolls"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the \"read documentation\" tool row in cloud sessions, which showed escaped JSON instead of a readable page"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved a cloud session's Changes pane, which now says when it lists only pushed commits or only Claude's edits"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack posting a draft you approved for a channel into your DM by mistake; a post with no channel is now refused so it can go to the approved channel"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Allow and Deny on Claude's approval cards in Slack doing nothing when the session had stopped; your answer now restarts the session"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude ignoring untagged messages in a Slack channel after its workspace moved to a different Claude organization, including unshared channels on Enterprise Grid"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude in a Slack channel posting a threaded reply before reading a newer message someone had just added to that thread"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Slack page in Claude Tag admin settings saying no workspaces were connected when the list failed to load; it now shows an error with a Retry button"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a finished review showing no check on the pull request when earlier tries to create it failed; a final try now adds a completed check"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a push queued behind a running review still starting a review after @claude review stop; its check now closes and says why"
        }
      ]
    },
    {
      "version": "2.1.308",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.307",
      "items": [
        {
          "kind": "追加",
          "text": "Added /claude-api api-version to move Claude API code to API version 2026-10-21"
        },
        {
          "kind": "追加",
          "text": "Added the claude_code.safety_event OpenTelemetry event for each tool call a permission rule, auto mode, a safety check, a hook or the sandbox stopped, prompted or sent back"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing with a model-not-found error when CLAUDE_CODE_DISABLE_1M_CONTEXT is set and the model is an alias with the [1m] suffix, such as opus[1m]"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt-caching-scope beta header being sent behind custom ANTHROPIC_BASE_URL gateways and on Foundry, where it has no effect"
        },
        {
          "kind": "追加",
          "text": "Fixed MCP servers showing \"needs authentication\" in claude -p on macOS while the login keychain was locked; they now say why, and the next run after an unlock connects without a new sign-in"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers being reported as timed out, and staying failed in headless runs, when a macOS or Linux computer went to sleep while they were connecting"
        },
        {
          "kind": "修正",
          "text": "Fixed HTTP MCP tool calls being sent twice when the connection closed mid-call; only read-only or idempotent tools are now retried"
        },
        {
          "kind": "修正",
          "text": "Fixed a turn sometimes starting without an SDK MCP server's latest tools when a background task was running"
        },
        {
          "kind": "修正",
          "text": "Fixed some \"Autocompact is thrashing\" errors in turns that read many PDF pages, images or other large tool results"
        },
        {
          "kind": "修正",
          "text": "Fixed /autocompact in cloud sessions going back to the default window after the session restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed a conversation cleared with /clear sometimes coming back when a cloud or self-hosted runner session restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS being ignored in Claude apps gateway sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed telemetry from Claude Desktop sessions behind a Claude apps gateway being rejected when OTEL_EXPORTER_OTLP_HEADERS is set"
        },
        {
          "kind": "修正",
          "text": "Fixed /permissions > Recently denied not showing the denied shell command, and auto mode's local classifier ignoring an approval from there when it checks a retried command; approving a row now names the command, not its description"
        },
        {
          "kind": "修正",
          "text": "Fixed /help and the / command menu showing long model-facing descriptions for bundled skills such as /claude-api instead of their short descriptions"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent transcripts recording placeholder token usage and an empty stop reason for streamed responses"
        },
        {
          "kind": "修正",
          "text": "Fixed model switches through the Agent SDK's setModel(), and apps built on it, being refused when the API took more than 5 seconds to confirm the model; Claude Code now waits up to 15 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed a background command stopped through a connected app (such as the desktop app archiving an idle session) being reported to Claude as stopped by the user; the notice now names its output file"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch in Cowork cloud sessions reporting a tool error when a site answered with a 4xx status or a robots.txt refusal; it is now a normal result, as in local sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed write tools on a directly configured GitHub MCP server showing a form that closed without creating anything in the desktop app's Code tab"
        },
        {
          "kind": "修正",
          "text": "Fixed Artifact tool reads failing with a connection reset when the server had closed a reused connection"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed sessions with --use-anthropic-git-proxy committing a .claude/settings.local.json left in the clone by an earlier session"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed archiving or requeueing a session, or stopping the runner, during its checkout hook leaving the hook's processes running and the runner's slot held"
        },
        {
          "kind": "改善",
          "text": "Improved recovery from unparseable tool calls: Claude Code now retries the call up to twice before ending the turn with an error"
        },
        {
          "kind": "改善",
          "text": "Improved fork subagents launched together: each is now told which launch is its own, so forks are much less likely to try to start each other's work"
        },
        {
          "kind": "改善",
          "text": "Improved browser sign-in: the success page now appears as soon as sign-in completes, without waiting for your account profile to load"
        },
        {
          "kind": "改善",
          "text": "Improved web search errors in cloud and self-hosted runner sessions: a search refused with a 403 that gives a reason now shows that reason instead of a generic \"Authentication error\""
        },
        {
          "kind": "改善",
          "text": "Improved the time to the first reply in cloud sessions when one of the desktop app's MCP servers can't connect"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control connect time for sessions whose transcript contains large pasted images or PDF reads"
        },
        {
          "kind": "変更",
          "text": "Changed the notice Claude gets when the WebSearch budget is used up to also tell it not to query search engines in a browser or through computer use"
        },
        {
          "kind": "変更",
          "text": "Changed the axScreenReader setting and CLAUDE_AX_SCREEN_READER in a settings env block to apply only from user, managed or --settings settings (since 2.1.305)"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed checkout hooks to be stopped after 30 minutes by default, failing the session's setup; if yours needs longer, raise --checkout-hook-timeout-min or set it to 0"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed the certificate file built for Anthropic-managed git to filter its trusted certificates as the CLI does; a [runner:warn] line gives the number left out"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a notice on the microphone button when voice dictation stops by itself (15 seconds without recognized speech, or the 2-minute limit), saying why and that the text so far is kept"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a long prompt expanded with Show more covering the whole chat panel: a pinned prompt is now capped at 40% of the panel and scrolls"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed part of a list item or table cell with LaTeX math pasting as a new list or table in rich text editors"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed dictation failing behind a TLS-inspecting proxy when NODE_EXTRA_CA_CERTS is set only in ~/.claude/settings.json; it now also follows CLAUDE_CODE_CERT_STORE"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the \"still open somewhere else\" notice to also cover a Claude process left over from an extension restart, which usually ends on its own within about 10 minutes"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed voice dictation to filter its trusted certificates as the CLI does"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the extension's own requests to filter their trusted certificates as the CLI does, and to trust the NODE_EXTRA_CA_CERTS file named in the environment or in user settings"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the repository picker saying \"No repositories match\" while a search was still running; it now shows \"Searching…\" until the results arrive"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the \"Waiting for a runner\" status on self-hosted environments being cut off; with on-demand runners it now counts up from your last message and shows failed attempts"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added @claude review stop (also off and pause) to Code Review, ending an @claude review always subscription on a pull request without starting a new review"
        }
      ]
    },
    {
      "version": "2.1.306",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed claude -p inside cloud sessions reporting \"Not logged in\" when started without the session's environment variables"
        },
        {
          "kind": "修正",
          "text": "Fixed an API error being replaced by \"prompt is too long\", and an unneeded compaction, in sessions with many MCP tools"
        }
      ]
    },
    {
      "version": "2.1.305",
      "items": [
        {
          "kind": "追加",
          "text": "Added sandbox.allowNestedUserNamespaces so sandboxed commands on Linux can create user namespaces (Chromium, rootless podman); this lets them get around the sandbox's file protections"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS so unattended retry mode (CLAUDE_CODE_RETRY_WATCHDOG) notices a usage limit that was lifted before its reset"
        },
        {
          "kind": "修正",
          "text": "Fixed every request failing on Vertex, Bedrock and other providers when the endpoint or a gateway rejects tool search, and behind gateways with ToolSearch disallowed or left out of --tools (a 2.1.304 regression): Claude Code now retries without it"
        },
        {
          "kind": "修正",
          "text": "Fixed /effort and /autocompact settings not applying when the model name differed from a modelOverrides value by letter case or a [1m] tag"
        },
        {
          "kind": "追加",
          "text": "Fixed new worktrees in a bare repository sometimes starting from local HEAD instead of the default branch, and unchanged subagent worktrees sometimes not being cleaned up"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands on a full disk failing with a raw ENOSPC file path: the error now says the disk is full and that nothing ran"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP server passed by a cloud session or by the SDK's setMcpServers being replaced later in the session by a same-named server from your own settings"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude naming the wrong model for a subagent's work after the subagent switched to a fallback model"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions and teammates not telling Claude when a compaction had to leave the oldest messages out of its summary to fit"
        },
        {
          "kind": "修正",
          "text": "Fixed more cases of scheduled Cowork cloud sessions waiting five minutes for each subagent whose WebFetch needed a URL approval that nobody was there to give"
        },
        {
          "kind": "修正",
          "text": "Fixed Workflow resume re-running already-completed pipeline() and parallel() agents instead of serving them from the run's journal"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control leaving empty \"(session)\" entries in /resume after switching conversations with /resume"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage rows being cut off in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed startup warnings printing as raw text above the logo: they now go to the debug log, and permission rules that restrict nothing show as warning rows under the banner"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode: search boxes now say \"Search:\" instead of a symbol VoiceOver read as \"telephone recorder\", and highlighted prompt text, such as Ctrl+R search matches and \"ultrathink\", no longer has spaces inside words"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed a start script that shares only its stdout with the runner or orchestrator failing with Resource temporarily unavailable when TERM is set (a 2.1.300 regression)"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed repository access failing since 2.1.296 when a git credential helper or askpass program reads its settings through GIT_CONFIG"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed the orchestrator reporting a spawn-runner hook as timed out when a runner it started in the background kept its output open"
        },
        {
          "kind": "修正",
          "text": "Improved /usage: each warning is now a one-line fix that names its source, and f applies the fixes; the same fixes appear in VS Code and /doctor"
        },
        {
          "kind": "改善",
          "text": "Improved MCP consent dialogs so an Enter meant for the prompt is less likely to be taken as Accept"
        },
        {
          "kind": "改善",
          "text": "Improved a mod's Image to draw its picture in iTerm2 3.5 and later with fullscreen rendering, where it showed only its alt text"
        },
        {
          "kind": "追加",
          "text": "Remote Control: Improved the spawn-mode messages: pressing w now says the new mode is saved for the folder, and a later claude remote-control start that uses the saved mode says where it came from"
        },
        {
          "kind": "変更",
          "text": "Changed allowedMcpServers to stop filtering managed-mcp.json stdio servers that use ${VAR} only in env: one your allowlist left out now loads on upgrade; use deniedMcpServers to keep it off"
        },
        {
          "kind": "変更",
          "text": "Changed plugins that Claude Desktop mounts by path to no longer keep their allowed-tools when your organization's managed settings set allowManagedPermissionRulesOnly"
        },
        {
          "kind": "変更",
          "text": "Changed the /artifacts delete confirmation to take 1 or Enter to keep, 2 to delete, and Esc to cancel; y and n no longer answer it"
        },
        {
          "kind": "変更",
          "text": "Changed a mod's docked pane to stay within 45% of the terminal's width, including a width kept from a wider terminal"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a \"Running start-up hooks\" spinner status, with a screen reader announcement, while SessionStart or Setup hooks run"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the spinner cutting off \"Compacting...\" when your spinnerVerbs setting replaces the built-in verbs with short ones"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the message shown when a session does not start in time and no hook is running: it now leads with the output logs and lists causes instead of pointing to sign-in and network first"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the Cloud environments admin page wrongly refusing to save an existing environment with an \"installs packages\" error"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved deleting a self-hosted environment so the dialog and error messages say what blocks the delete and what it will affect"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added public Slack channels Claude hasn't joined to the Claude Tag admin Add place search, so admins can set one up from there"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude Tag access bundles so a repository that moved to another GitHub account can be added again"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a routine set up in a Slack DM thread no longer posting after another routine in that thread restarted the conversation; both now keep posting there"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed routines set up in a Slack thread reporting success without posting after the conversation ended; those runs are now skipped and the creator is told"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude Tag admin pages in large organizations so plugin, skill and bundle edits work while the channel list is still loading"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review sometimes not reviewing the newest commit when several pushes landed on a pull request during a review"
        },
        {
          "kind": "変更",
          "text": "[Code Review] Changed Code Review re-reviews so they no longer open with LGTM while earlier blocking findings are still open"
        }
      ]
    },
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
    }
  ]
};
