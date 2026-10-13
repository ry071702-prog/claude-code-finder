/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
    {
      "version": "2.1.294",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed prompt and agent hooks written as instructions (such as \"Block commands that...\") allowing what they should block"
        },
        {
          "kind": "改善",
          "text": "Improved how prompt hooks on Stop and SubagentStop written as instructions (such as \"Carry on if the build is broken\") are judged, so Claude is less likely to stop early"
        }
      ]
    },
    {
      "version": "2.1.293",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Haiku 5.5 (claude-haiku-5-5), now the default Haiku model on the Anthropic API — 1M context, $0.10/$0.50 per Mtok ($0.50/$2.50 for prompts over 100K)"
        },
        {
          "kind": "追加",
          "text": "Added agentType to the subagentStatusLine payload, so scripts can tell custom subagent types apart"
        },
        {
          "kind": "追加",
          "text": "Added isDeferred to $.tool.register for mods: false lists the tool's schema in the prompt from the start instead of behind tool search"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude sometimes treating its own last actions before a context compaction as done after it, and retracting or redoing finished work"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory leak where an HTTP MCP connection kept every request it had sent until it closed"
        },
        {
          "kind": "修正",
          "text": "Fixed a message sent while Claude was working being lost when ← moved the session to the background; if a queued message can't move, ← now stays put and says so"
        },
        {
          "kind": "修正",
          "text": "Fixed /model effort ←/→ wrapping past the highest or lowest level, which could accidentally save Low as a model's default effort"
        },
        {
          "kind": "修正",
          "text": "Fixed /tui disconnecting Claude in Chrome in a session started with --chrome, and ignoring --no-chrome"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told to continue or message subagents with SendMessage in sessions, including resumed ones, where a host, a permission rule or a --tools list removed that tool"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents and --agent sessions being told a built-in tool was disabled for the whole session when only their own tool list left it out"
        },
        {
          "kind": "追加",
          "text": "Fixed a claude.ai-synced skill's edited description sometimes not reaching the model until a new conversation or /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed claude logs, stop, kill, rm and claude daemon status, stop, uninstall sometimes signing you out when your login had expired or was about to"
        },
        {
          "kind": "修正",
          "text": "Fixed the footer's agents count disappearing after a momentary failure to read the sessions folder (for example, too many open files)"
        },
        {
          "kind": "修正",
          "text": "Fixed a custom agent named worker being shown as \"Agent\" when it starts, and the agent detail dialog's title losing the agent type once the agent finishes"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool's transcript row briefly reading Artifact(\"(unprintable path)\") while a publish call was still streaming in"
        },
        {
          "kind": "修正",
          "text": "Fixed the /ultrareview upload on Linux wrongly refusing some repositories, such as one inside another checkout, over a settings file that \"could not be parsed\" while a sandboxed command was running"
        },
        {
          "kind": "修正",
          "text": "Fixed the /ultrareview upload's refusal over split-index files advising a git command that could leave git unable to read its index"
        },
        {
          "kind": "修正",
          "text": "Fixed replies in very long Remote Control and cloud sessions that could still appear a block at a time instead of streaming in"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control uploading a session's starting history again after every credential recovery"
        },
        {
          "kind": "修正",
          "text": "Fixed PushNotification reporting \"Remote Control inactive\" in sessions started with claude remote-control"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hooks on classic.* events being skipped while the plugin hooks worker restarts, which left settings hooks to answer without them"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin test failing for mods that call $.session.append; tests can read the appended rows back with the new mock.session"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin eval refusing every Bash-granting run on Macs with Docker Desktop (links under ~/.docker/bin); the refusal now names which part of a credential store held the link"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway refusing to start when a desktop policy sets Claude Desktop's built-in browser keys, such as builtinBrowserEnabled"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents offering bypass permissions that background sessions then ignored when consent was saved only in .claude/settings.local.json or a --settings file; it now asks for consent first, and a session that ignores bypass shows a short notice that stays"
        },
        {
          "kind": "修正",
          "text": "Fixed ← backgrounding a session after 10 seconds while the prompt held unsent text (it now cancels the move) or a question was waiting for your answer"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc, or No without feedback, on a permission prompt not stopping the turn when ← had just been pressed to move the session to the background"
        },
        {
          "kind": "修正",
          "text": "Fixed the agents view briefly replacing the session list with placeholder rows when the sessions folder could not be read (for example, too many open files)"
        },
        {
          "kind": "修正",
          "text": "Fixed path-scoped rules and nested CLAUDE.md files not loading when Claude views a file with a single-file cat, head, tail, sed -n or grep command in the Bash tool instead of the Read tool"
        },
        {
          "kind": "修正",
          "text": "Fixed pasted text that begins and ends with the same words sometimes being sent to Claude as if it had been typed"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill name in pasted text being treated as typed when an accent typed or pasted right after the paste merged into its last letter"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback returning to the drafts list after Ctrl+O or Ctrl+Z while a report was sending, leaving the send impossible to cancel"
        },
        {
          "kind": "修正",
          "text": "Fixed claude purge stopping silently (exit 0, or a hang in a terminal) when a file or folder could not be deleted; it now deletes the rest, lists what it could not delete, and exits 1"
        },
        {
          "kind": "修正",
          "text": "Fixed keybindings.json checks: a lone \" \" (space key) is no longer reported as an error, and keys like \"ctrl+ k\" now get a warning"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode >> and << on a line of only spaces leaving the cursor past the end of the line, where a following x deleted nothing"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode: after deleting whole lines in Visual mode (V then d) the cursor lands on the first non-blank, and . after it acts on the cursor's line"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed stopping a status line, hook, or shell command sometimes terminating an unrelated process that had been given the same process ID"
        },
        {
          "kind": "その他",
          "text": "Reverted the auto mode denial message change from 2.1.281 that told Claude a denial covers the outcome, not only the exact command"
        },
        {
          "kind": "修正",
          "text": "Reverted the 2.1.290 fix for cloud sessions staying asleep after a container restart lost a pending /loop wakeup or scheduled task; Claude is no longer told, and the session stays asleep"
        },
        {
          "kind": "改善",
          "text": "Improved startup for Team and Enterprise organizations: policy and managed settings are fetched earlier, and a stalled request is retried after 3 seconds"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: fewer page actions are refused when the browser is slow to report its tabs"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude in Chrome message in cloud sessions when the browser can't be reached: if you belong to more than one organization, it now says the extension must be signed in to the same one, and how to change that"
        },
        {
          "kind": "変更",
          "text": "Improved the Bash edit diff note to say the listed files changed while the command ran, which can include writes by other processes"
        },
        {
          "kind": "改善",
          "text": "Improved artifacts: Claude pins libraries to exact versions two weeks old or older"
        },
        {
          "kind": "変更",
          "text": "Changed claude.ai skill syncing to check for changes about every 40 minutes, instead of every 10, while no session is in use"
        },
        {
          "kind": "変更",
          "text": "Changed the order of agent lists and of MCP servers announced to the model: names with non-ASCII characters now sort after ASCII names"
        },
        {
          "kind": "変更",
          "text": "Changed OpenTelemetry claude_code.at_mention logging to emit at most 100 agent and 100 MCP-resource events each time a prompt is read"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed the orchestrator to sleep 4 to 6 seconds between polls instead of a constant 5, so several replicas for one environment stop polling at the same moment"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack saying a workspace isn't set up in Enterprise Grid channels shared across workspaces when Slack labels a message with a workspace that isn't connected"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack stopping mid-task in a channel when an admin changed the channel's connectors, plugins, skills or rules; the change now applies once Claude finishes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed asking Claude in Slack to run a thread's routine now with extra notes starting a separate run that couldn't post back; the run now continues in that thread"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed an access bundle's Add a connector dialog in Claude Tag admin settings showing every Google connector as connected after one Google sign-in"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude Tag admin settings to list an Enterprise Grid that isn't connected yet, with a Connect button"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude in Slack to join announcement channels, where only admins can post, without posting its intro"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the limit on channel rules in Claude Tag admin settings from 20 to 50 for each workspace and for the organization-wide Slack page"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Improved Code Review's Add a repository dialog to list each repository that couldn't be added and why, such as missing GitHub write access"
        }
      ]
    },
    {
      "version": "2.1.292",
      "items": [
        {
          "kind": "追加",
          "text": "Added --marketplace <source> to claude plugin install: adds the marketplace if needed, under the same policy checks as claude plugin marketplace add, then installs the plugin from it"
        },
        {
          "kind": "追加",
          "text": "Added an effort parameter to the Agent tool, so Claude runs a sub-agent at the effort level you ask for"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_OVERLOADED_RETRY_BASE_DELAY_MS environment variable to set a longer base delay for the backoff when retrying an overloaded (529) request"
        },
        {
          "kind": "追加",
          "text": "Added prompt.autocomplete, an event a mod hooks to add its own rows to the prompt box's autocomplete list"
        },
        {
          "kind": "追加",
          "text": "Added prompt caching to $.model.complete for mods: prompt and system take blocks of text, and cache: true on a block caches the request up to it"
        },
        {
          "kind": "追加",
          "text": "Added workflow agents to the agent.spawn mod hook, with their run and index, so a mod can refuse them"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent definitions with permissionMode: auto entering auto mode when auto mode is unavailable (disabled by settings, circuit breaker, or a model that doesn't support it)"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands being able to read the staged file copies of /ultrareview uploads under ~/.claude/seed-admin"
        },
        {
          "kind": "修正",
          "text": "Fixed a managed sandbox read-deny path (and user ones beside it) that appears or re-points mid-session not dropping project grants inside it or ending credential injection from files it covers"
        },
        {
          "kind": "修正",
          "text": "Fixed a notebook or PDF read on macOS and Windows being able to return a file outside what was approved, through a link swapped in mid-read"
        },
        {
          "kind": "修正",
          "text": "Fixed a tampered on-disk cache of server-managed settings being able to switch off or unseat the built-in policy plugin while the settings fetch failed"
        },
        {
          "kind": "修正",
          "text": "Fixed rm -rf on the 8.3 short name or another alternate Windows spelling of the home folder or a drive not being treated as removing it"
        },
        {
          "kind": "修正",
          "text": "Security: Fixed PreToolUse hook approvals and auto mode bypassing the permission prompt for file reads from network (UNC) paths"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill's or slash command's allowed-tools rule coming back in a later turn when you leave auto mode or plan mode partway through that turn"
        },
        {
          "kind": "修正",
          "text": "Fixed NO_PROXY being ignored for Claude Code's own API requests (sign-in, policy, feedback, artifacts) when HTTPS_PROXY is set"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP tool with a name longer than 128 characters making every request fail; that tool is now left out and an MCP error names it"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin commands such as marketplace add and install running before an organization's managed settings had loaded on a first run"
        },
        {
          "kind": "修正",
          "text": "Fixed one-shot claude -p and Agent SDK runs stopping a background command 5 seconds after the final result, and one-shot claude -p runs dropping a scheduled wakeup; both are now waited for"
        },
        {
          "kind": "修正",
          "text": "Fixed plan mode not being restored when resuming a session from the claude --resume session picker or with /resume"
        },
        {
          "kind": "修正",
          "text": "Fixed saved scheduled tasks created after /resume, /branch or /clear never firing, and saved tasks ignoring later creates and deletes after two writes to the tasks file milliseconds apart"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session's /loop silently stopping when the session's process restarted (for example after a crash), because its pending wakeup was lost"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob reporting no matches when the file or folder they were given could not be read; Claude now retries once or tells you"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool returning only the first entry, with no error, when a PDF's pages was a list such as \"6,9,15\"; it now returns an error saying to read each page or range separately"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mentioned text files over 256KB being left out silently: Claude is now told the file's size and to read it in portions"
        },
        {
          "kind": "修正",
          "text": "Fixed the usage limit alert repeating once per background agent when agents failed on a limit that had already stopped the main conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control viewers seeing an empty subagent pane for background subagents in sessions hosted by the desktop app or an IDE"
        },
        {
          "kind": "修正",
          "text": "Fixed cross-session delivery notices showing two sessions with similar names as one recipient, and the expiry notice blaming the desktop app when a terminal session let the message lapse"
        },
        {
          "kind": "修正",
          "text": "Fixed Send now in the desktop app ending the subagent a turn was waiting on when another message was already queued"
        },
        {
          "kind": "修正",
          "text": "Fixed /bug, /share and /feedback <text> starting over after Ctrl+O or Ctrl+Z while a report was being sent, and closing as cancelled after it had been sent"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-env replacing your saved default environment when you pressed Enter right away: the list now opens on your default, and no row has a check mark when no default is in effect"
        },
        {
          "kind": "修正",
          "text": "Fixed some pasted text reaching Claude as typed text when several pastes overlapped in one prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode leaving the cursor past the end of a line, j/k losing their column on shorter lines, and f/t/F/T/;/, jumping to, or deleting up to, a match on another line of the prompt"
        },
        {
          "kind": "追加",
          "text": "Fixed /add-dir path box letting Shift+Enter or a paste add a line break, and treating fast-typed \"tab\", \"up\" or \"down\" as those keys"
        },
        {
          "kind": "修正",
          "text": "Fixed fast typing, input-method text and decomposed accents being dropped while a prompt footer row was selected, and ! leaving the row selected"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode sending a full-screen clear on every window resize and Ctrl+L when iTerm2 is detected, which may be what filled iTerm2's scrollback with stale pages"
        },
        {
          "kind": "修正",
          "text": "Fixed a spurious \"could not be examined\" note for @-words that name no file when a Read deny rule is set and the working directory is under a symlink"
        },
        {
          "kind": "追加",
          "text": "Fixed \"instruction file not loaded\" lines going stale or missing after /cd or a permission change, and added a transcript line when a nested one isn't loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a compaction summary that repeated /name letting Claude invoke a skill that is reserved for the user"
        },
        {
          "kind": "修正",
          "text": "Fixed Write, Edit, NotebookEdit and LSP rows, and single Read, Grep and Glob rows, hiding why a mod denied the call: the row now shows the reason"
        },
        {
          "kind": "修正",
          "text": "Fixed a cloud session showing a turn that never ended when its worker was stopped just as the turn finished"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions with a large transcript sometimes asking for a permission again after it was approved"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks and other queued notifications being lost in cloud sessions when a message was retried or edited while Claude was reading them"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions forgetting the thinking setting chosen in the client when the session's container restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork cloud sessions saying a proxy blocked artifacts when Anthropic couldn't confirm the organization's settings"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins whose hooks module makes many $.state calls through one const taking minutes to load or validate"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate listing a matcher or state value for a hooks module that the engine reads from elsewhere"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate listing a $.state value read through a top-level var that was declared again or reassigned; such a module is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's served $ method restarting the hook origin, which could run a guard hook with a .catch above it again without end"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin interface calls made while the plugin hooks worker restarts running without the hooks other plugins put on them"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's config.set, state.set, env.set or agent.spawn hook that denies after calling next(e) being answered as a refusal: the hook is now reported as failed, by name"
        },
        {
          "kind": "修正",
          "text": "Fixed /theme, the /config Theme menu and the first-run theme step saving a theme before a plugin's config.set hook was asked"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's tool.check hook answering allow running a tool that requires your answer (a question, a plan approval) without showing its dialog"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's start-up prompt, command or subagent being queued a second time when the hooks worker was replaced"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hook that called next(e) and then failed while the turn was interrupted letting the call through; the call is now rejected"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's prompt drop or setting deny being ignored when its reason was longer than 4,096 characters"
        },
        {
          "kind": "追加",
          "text": "Fixed an organization's plugin being unloaded on its own reload, or after another plugin crashed, when it returned a $ name that a user-installed mod had added; the mod is now unloaded instead"
        },
        {
          "kind": "修正",
          "text": "Fixed tool calls made while the plugin hooks worker restarts being answered without the plugins' permission hooks"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin tool.call hooks seeing some tool calls before misnamed parameters were repaired; a hook now sees the arguments the tool will run with"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's guard hook with a .catch being skipped silently for calls another mod's hook makes beneath the guard's own $ call; its .catch is now asked"
        },
        {
          "kind": "改善",
          "text": "Improved startup of claude -p and SDK sessions: the first turn no longer waits for HTTP and SSE MCP servers to answer resources/list"
        },
        {
          "kind": "改善",
          "text": "Improved rendering speed of long bulleted or numbered replies: they stream, resize and re-open in the transcript (ctrl+o) much faster"
        },
        {
          "kind": "改善",
          "text": "Improved Ctrl+C draft recovery: a cleared prompt now stays reachable with Up after a slash command or a sent message"
        },
        {
          "kind": "改善",
          "text": "Improved hook output handling: <system-reminder> tags written in a hook's output are escaped before they reach Claude"
        },
        {
          "kind": "改善",
          "text": "Improved tool input handling: Grep accepts file_path for path, and Write, WebFetch and Read ignore a few stray parameters instead of failing the call"
        },
        {
          "kind": "改善",
          "text": "Improved the steps shown when a marketplace declared in a settings file has a name that looks like an official Anthropic marketplace"
        },
        {
          "kind": "修正",
          "text": "Improved sandbox auto-allow: with strict sandbox mode set in user, managed or --settings settings, an interpreter command with an env var prefix like FOO=bar python3 app.py runs unprompted"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's listing: Claude now sees how many published artifacts you have and can list up to 200 at once instead of 50"
        },
        {
          "kind": "改善",
          "text": "Improved cloud sessions after a restart: Claude is now told which stopped background agents it can resume by id"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude in Chrome message in claude.ai cloud sessions when the browser can't be reached: Claude is now told it may continue with alternatives if the user prefers"
        },
        {
          "kind": "改善",
          "text": "Improved the /focus tip: it now invites you to try focus view mid-turn and shows how to switch back"
        },
        {
          "kind": "改善",
          "text": "Improved startup with local (stdio) MCP servers that ignore the newer protocol check: after one slow connect they are remembered for 7 days and connected the older way without the wait"
        },
        {
          "kind": "変更",
          "text": "Changed local (stdio) MCP server connections to negotiate protocol version 2026-07-28 by default on every install, including Bedrock, Vertex and Foundry; MCP_PROTOCOL_NEGOTIATION=legacy opts out"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin test: a failed expect inside a hook the test registered, or a stub answer the engine refuses, now fails the test instead of passing silently"
        },
        {
          "kind": "変更",
          "text": "Changed usage limit messages to write claude.ai settings links with https:// so terminals and apps can make them clickable"
        },
        {
          "kind": "追加",
          "text": "Changed scheduled and Run now routine runs to publish a new artifact only you can see without asking for approval; artifacts that request connectors or other access still ask"
        },
        {
          "kind": "変更",
          "text": "Changed agent names to allow at most 256 characters: a longer one is rejected, and a skill's or a plugin file's name longer than that is ignored"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed routine runs occasionally staying listed as running for hours after they had finished"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed editing or duplicating a routine turning off its push notifications when the routine had no saved notification setting"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed SVG, HEIC, TIFF and other less common image files failing to attach; they now attach as regular files"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed approval prompts offering \"Always allow\" for connector tools that an organization set to require approval; the choice had no effect"
        },
        {
          "kind": "追加",
          "text": "[Remote Control] Fixed the first message of a new Remote Control session started from claude.ai/code accepting only images; it now accepts PDFs and other files like later messages"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added an Edit button to the Allowed domains card on a channel's Configure page, so Enterprise admins can open the access bundle that sets the channel's domains"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed replies sent in a Slack thread while Claude was still on its first request there being held until that request finished, or missed when sent seconds apart"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Slack threads woken only by GitHub pull request activity or a routine staying on their original model after an admin changed the channel or workspace default model"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude sometimes posting a spend limit notice in Slack when the real cause was that your organization had run out of usage credits"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a session hanging until interrupted when a permission prompt that can't be answered from Slack was denied automatically"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved @Claude !status in a channel to say when Claude has stopped reading its untagged messages, why, and that an @-mention starts it reading again"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the first message of a Slack thread continued with !fork to a card showing where it came from, the request, and who asked, with a link to the original thread"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the organization-wide and default spend limit boxes on Claude Tag's spend limits page in admin settings to save only when you press Save or Enter, not when you click away"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added the period's total with its change from the previous period, and a breakdown by repository, to the PRs reviewed chart in Code Review analytics"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Fixed a queued review failing when the pull request moved to a new base branch and the old one was deleted; the commit is now re-queued for review"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed reviews ignoring a CLAUDE.md's rules when the pull request edits that file; reviews now use its version from the base branch"
        }
      ]
    },
    {
      "version": "2.1.291",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed a regression in 2.1.290 where cloud sessions could drop answers to permission prompts"
        },
        {
          "kind": "修正",
          "text": "Fixed a regression in 2.1.288 where the last messages of a session could be lost when quitting"
        }
      ]
    },
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
    }
  ]
};
