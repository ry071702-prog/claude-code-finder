/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.326",
      "items": [
        {
          "kind": "追加",
          "text": "Added support for turning on Code Mode while agent teams are enabled; if you already turned it on, sessions with teams on now start in Code Mode"
        },
        {
          "kind": "追加",
          "text": "Added a startup warning when an --allowedTools, --disallowedTools or --tools value has an entry that doesn't look like a complete rule"
        },
        {
          "kind": "追加",
          "text": "Added a message explaining why MCP servers stop loading when an administrator adds managed-mcp.json during a session"
        },
        {
          "kind": "追加",
          "text": "Added a row to /status that says when your provider or an environment variable such as DISABLE_TELEMETRY turns features off"
        },
        {
          "kind": "追加",
          "text": "Added a note in /plugin and claude plugin list when a malformed plugin.json field such as author or homepage is ignored"
        },
        {
          "kind": "追加",
          "text": "Added Ctrl+O to show hidden startup notices"
        },
        {
          "kind": "追加",
          "text": "Added a hint in the empty prompt that says what to do after a request fails"
        },
        {
          "kind": "追加",
          "text": "Added an esc to stop footer hint in a subagent's view where Esc would stop it"
        },
        {
          "kind": "追加",
          "text": "Added OTEL_RESOURCE_INCLUDE_HOST to include host.name and host.id in OpenTelemetry resource attributes (off by default)"
        },
        {
          "kind": "追加",
          "text": "Added overflowX=\"scroll\" on a mod's Box, and maxLines and wrap=\"clip\" on its Text"
        },
        {
          "kind": "修正",
          "text": "Fixed cp of a file being refused when only its source was covered by an Edit deny rule"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands that delete or overwrite files (find -delete, cat a > b, sort -o) being summed up in the transcript as a search or a read"
        },
        {
          "kind": "修正",
          "text": "Fixed a misleading \"Dangerous rm operation\" warning in the Bash permission prompt on some commands with no rm that Claude Code can't read reliably"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions losing the LLM gateway your shell exported after a crash, after a reopen from another folder, or when the background service lacks it: they now stop before any model request"
        },
        {
          "kind": "修正",
          "text": "Fixed the background service ending your own processes, such as an SSH login, when a process number on its list had been reused by another user's process"
        },
        {
          "kind": "追加",
          "text": "Fixed rules added in /permissions or at a main-conversation tool prompt, and /add-dir folders, looking saved when the settings file couldn't be written; the terminal now warns and names it"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed MCP headersHelper, or one not run in an untrusted folder, making other sessions start without that server, for most servers with no stored OAuth refresh token"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings with certain key names stopping Claude Code from starting or affecting other managed files"
        },
        {
          "kind": "修正",
          "text": "Fixed settings files with values nested thousands of levels deep crashing Claude Code or applying only some of the time; values past 64 levels are now dropped with a warning"
        },
        {
          "kind": "修正",
          "text": "Fixed a settings file saved with an error mid-session being skipped silently; a warning now names the file"
        },
        {
          "kind": "修正",
          "text": "Fixed the subagent model set in managed settings not applying in Claude Desktop's Code tab; it now overrides your own, as in a terminal, unless those settings also pick a provider or gateway"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands failing to start on Linux when the home or config directory is reached through a symlink into /net and sandbox settings deny reads of it"
        },
        {
          "kind": "修正",
          "text": "Fixed empty placeholder files, including .git/config.lock, sometimes being left in the project on Linux when Claude Code was stopped during a sandboxed command"
        },
        {
          "kind": "修正",
          "text": "Fixed Up then Enter answering Yes at the folder trust prompt shown under an already trusted parent folder"
        },
        {
          "kind": "修正",
          "text": "Fixed an extra Enter at the end of setup accepting the offer to make auto mode the default"
        },
        {
          "kind": "修正",
          "text": "Fixed a message typed over the startup auto mode offer being lost, and its Enter accepting the offer"
        },
        {
          "kind": "修正",
          "text": "Fixed a note typed on a permission prompt being sent to Claude after Tab had hidden it"
        },
        {
          "kind": "修正",
          "text": "Fixed PreToolUse hooks in managed settings leaving no OpenTelemetry tool_decision event or permission_denials entry when they refused a direct tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed letters typed over /sandbox or a delete question in /permissions moving the selection"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions losing recent turns after a crash when the previous turn ended with an empty reply"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions losing earlier conversation history when Claude Code ran low on memory"
        },
        {
          "kind": "追加",
          "text": "Fixed a re-sent file overwriting Claude's changed copy in Remote Control and cloud sessions on Linux with no feature flags loaded: the copy moves to a .kept- folder, or the new file isn't saved"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session being killed and its request lost when you opened, stopped or removed the older session whose conversation it had resumed"
        },
        {
          "kind": "修正",
          "text": "Fixed claude purge hiding its prompts when stdout is redirected, where one unseen Enter could delete a project's data; they now show on the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed the spend limit menu removing the monthly limit without asking when Backspace and Enter were pressed as it opened"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind restoring only some files after running /branch twice while a slow backup copy was still running"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind saying \"No code changes\" when a shell command changed files it can't restore; a turn whose changes weren't tracked now reads \"Code changes unknown\""
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind: Esc now cancels its summary, its list shows more than one past prompt in fullscreen, and a long prompt no longer hides its warning about losing later file changes"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C or Ctrl+D twice in /skills quitting Claude Code and dropping changes; it now saves and closes the panel"
        },
        {
          "kind": "修正",
          "text": "Fixed the usage limit menu erasing your draft and opening while you were typing"
        },
        {
          "kind": "修正",
          "text": "Fixed pasted text and images being dropped when ↑ recalls a draft cleared with Esc Esc"
        },
        {
          "kind": "修正",
          "text": "Fixed an edited typed answer to Claude's question sending the old text when you moved on without pressing Enter"
        },
        {
          "kind": "修正",
          "text": "Fixed going back to a question you answered from its list putting the cursor on the first option, where Enter replaced your answer"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback and /bug sending the report when you typed a space on the confirmation screen, and losing the typed report after Ctrl+O or Ctrl+Z"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt typed after --add-dir, --allowedTools or another list option being dropped without a message"
        },
        {
          "kind": "修正",
          "text": "Fixed /plan <description> ignoring the description when plan mode was already on"
        },
        {
          "kind": "修正",
          "text": "Fixed valid PDFs being dropped from the conversation after the API rejected a different PDF read in the same batch"
        },
        {
          "kind": "修正",
          "text": "Fixed a session ending after a single failed memory allocation while drawing the screen"
        },
        {
          "kind": "修正",
          "text": "Fixed compaction on Bedrock, Vertex and Foundry, and with telemetry turned off, sometimes replying to one of your messages instead of summarizing, or leaving Claude's last reply out of the summary"
        },
        {
          "kind": "修正",
          "text": "Fixed image-heavy sessions on Vertex AI getting stuck on a 400 error about the request size exceeding a 30 MB limit, instead of compacting and retrying"
        },
        {
          "kind": "修正",
          "text": "Fixed an error when max_tokens exceeded the model's limit: Claude Code now retries the request with the maximum the Anthropic API reports"
        },
        {
          "kind": "修正",
          "text": "Fixed grep in the Bash tool silently skipping some text files"
        },
        {
          "kind": "修正",
          "text": "Fixed a crashed Node or Python hook showing only the first line of its stack trace; the error is now shown, and Ctrl+O shows up to 10,000 characters of the output"
        },
        {
          "kind": "追加",
          "text": "Fixed /goal clear or a new /goal not sticking when typed while Stop hooks were running and background work was still in progress"
        },
        {
          "kind": "修正",
          "text": "Fixed the automatic session recap being sent after a reply billed to usage credits; /recap still works"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode staying on its local classifier, which counts toward usage, because of a stale saved value, such as one from an older Claude Code"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Sign in with your Console account\" in /login replacing your Claude subscription login when the browser sign-in used your Claude plan instead of a Console organization"
        },
        {
          "kind": "修正",
          "text": "Fixed /login ending on \"Login successful\" while an approved ANTHROPIC_API_KEY was still used; it now says requests still use the key"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Not logged in\" staying after turning on the API key in /config; \"Not logged in\", /login and /status now name an unused ANTHROPIC_API_KEY"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth logout leaving credentials behind, and token refresh failing, when only a Console profile's credentials are on a drive that rejects folder timestamps"
        },
        {
          "kind": "修正",
          "text": "Fixed a past conversation resumed from agent view being sent on the background service's sign-in when the service doesn't have the terminal's API key or token"
        },
        {
          "kind": "修正",
          "text": "Fixed model requests failing on a one-off authentication error (401) in Claude Desktop's Code tab: they are now sent once more first"
        },
        {
          "kind": "修正",
          "text": "Fixed forceLoginOrgUUID and forceRemoteSettingsRefresh startup errors telling you to sign in again when a network block page (HTTP 403) was the cause"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth login not showing a pasted sign-in code, so a wrong paste couldn't be seen or corrected before Enter"
        },
        {
          "kind": "修正",
          "text": "Fixed /login and claude setup-token showing nothing after you submit a pasted code; they now show \"Finishing sign-in…\""
        },
        {
          "kind": "修正",
          "text": "Fixed Esc doing nothing while the first-run sign-in waits for the browser or a pasted code; it now goes back one screen"
        },
        {
          "kind": "修正",
          "text": "Fixed /logout in fullscreen mode exiting without leaving the logged-out message on screen"
        },
        {
          "kind": "修正",
          "text": "Fixed the shell prompt being drawn over the last screen after quitting with Ctrl+C or Ctrl+D at a sign-in or first-run step"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C twice doing nothing on the first-run theme choice, and freezing the terminal on setup screens or a background session at its startup question"
        },
        {
          "kind": "修正",
          "text": "Fixed your OFF answer to the updated terms being replaced when keys were typed while it was saving, at startup and in /privacy-settings"
        },
        {
          "kind": "修正",
          "text": "Fixed the /privacy-settings toggle sometimes saving the opposite of what the screen showed on a quick double press, changing your setting on keys pressed after Esc, and not saying when a save failed"
        },
        {
          "kind": "修正",
          "text": "Fixed /privacy-settings saving your choice on the wrong account after signing in to a different account in another terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed /privacy-settings saying \"set to true\" when you picked OFF right after ON"
        },
        {
          "kind": "修正",
          "text": "Fixed skills and slash commands failing to load in Code Mode under auto mode when an inline ! command needs approval; Claude is now asked to run it"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents started in Code Mode failing when they preload a skill with an inline ! command"
        },
        {
          "kind": "修正",
          "text": "Fixed mods being unable to use Bash, Read and other tools through $.tool.call and $.tool.check in Code Mode"
        },
        {
          "kind": "修正",
          "text": "Fixed parallel MCP tool calls reading another call's saved result when two long results arrived in the same millisecond (anthropics/claude-code#105138)"
        },
        {
          "kind": "修正",
          "text": "Fixed tool search sometimes loading another MCP server's tool when asked for a tool by its exact name; you may be asked again for that tool"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP prompts disappearing when two servers have nearly identical names"
        },
        {
          "kind": "修正",
          "text": "Fixed a tool call to an MCP server that an SDK host had just removed reconnecting to it, or reporting that it needs authentication"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told that a remote MCP server's question was declined when the server then failed the tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tools with a root anyOf or oneOf showing Claude only the first branch's form of an argument; text such as 42 can now arrive as a number where another branch takes one"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when an approved MCP resource tool was unavailable after a cloud session's worker was replaced"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp not showing why a local (stdio) MCP server failed to start"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc doing nothing while an MCP server reconnects: Esc, or Ctrl+C pressed twice, now closes the wait and the reconnect continues in the background"
        },
        {
          "kind": "修正",
          "text": "Fixed Enable in /mcp showing no progress for a slow server, and a second Enter disabling it again"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp add-json answering most mistakes with \"Invalid configuration: : Invalid input\"; it now says what to change"
        },
        {
          "kind": "修正",
          "text": "Fixed the Ctrl+C hint on a background MCP task's question saying \"cancel\" when the second press leaves the question to answer later"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing c to copy an MCP sign-in URL leaving a stray c in the paste field"
        },
        {
          "kind": "修正",
          "text": "Fixed Tab and Shift+Tab not moving between fields in an MCP server's input form, and a required field there keeping its tick after being emptied"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed a session disconnecting mid-reply when the server was briefly unavailable"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed the QR code in /remote-control being cut off in short terminal windows such as 80×24"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed terminal sessions showing as idle on your phone while background subagents were still running; Stop on your phone or the web now ends them together with the turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control showing a session as running while it waited on a prompt that can only be answered in the terminal, and as idle when turned on while a tool was running"
        },
        {
          "kind": "修正",
          "text": "Fixed a reply in a remote session running again after a restart when Stop had been pressed while Claude Code was restarting"
        },
        {
          "kind": "修正",
          "text": "Fixed Stop in cloud and self-hosted runner sessions sometimes waiting for slow MCP servers to connect before taking effect"
        },
        {
          "kind": "修正",
          "text": "Fixed files Claude sends from cloud and Remote Control sessions failing at once when a proxy answers an upload with its own HTTP 502, 504 or 520 to 524; the upload now gets a second try"
        },
        {
          "kind": "修正",
          "text": "Fixed claude.ai chats and Cowork tasks sometimes not sending a file after you chose \"Send it\" at the check for secret keys"
        },
        {
          "kind": "修正",
          "text": "Fixed claude.ai chats and Cowork tasks asking about a plugin file only because it holds a Word, Excel or other zip-type file; such files are now read for secret keys first"
        },
        {
          "kind": "追加",
          "text": "Fixed claude self-hosted-runner asking for new tokens nonstop when a refreshed token was already due, such as when the machine's clock runs ahead"
        },
        {
          "kind": "修正",
          "text": "Fixed /autofix-pr reporting a run as cancelled when its cloud session could not be stopped; it now links the session so you can stop it"
        },
        {
          "kind": "修正",
          "text": "Fixed /teleport hiding a session from its list in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publishing refusing files in a background session's temporary folder"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents whose disallowedTools lists Artifact still being offered artifact tools in some cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude calling a just-published artifact private when people with access to its folder can open it"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal not showing an artifact's link after Claude publishes or updates it"
        },
        {
          "kind": "修正",
          "text": "Fixed the main conversation of a terminal session waiting in silence for a background subagent that another subagent had messaged: it's now told which agent the subagent reports to"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents being told you refused their tool call when a session ended by Ctrl+C twice at the exit dialog, or after an interface crash"
        },
        {
          "kind": "修正",
          "text": "Fixed Up and Esc moving the main conversation's queued messages into the prompt box of a subagent or teammate you are viewing"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent rows under the prompt showing an agent as busy after its turn ended: the row now says what it is waiting on, and /tasks names the subagent behind each background command"
        },
        {
          "kind": "修正",
          "text": "Fixed stopped and failed agents looking like running ones in the agent rows under the prompt, or showing \"Done\" when run in parallel, and a stopped agent's last command still showing \"Running…\""
        },
        {
          "kind": "修正",
          "text": "Fixed an opened background agent showing a normal spinner while its requests were being retried"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"background agents launched\" line stopping at two when Claude starts three or more agents in one reply"
        },
        {
          "kind": "修正",
          "text": "Fixed every earlier turn's \"done\" line showing \"1 shell still running\" while a background task ran"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent tool counts in auto mode including the call that delivers the agent's final report"
        },
        {
          "kind": "修正",
          "text": "Fixed the welcome header outside fullscreen mode showing the session's model while viewing a subagent or teammate that runs on a different model"
        },
        {
          "kind": "修正",
          "text": "Fixed images pasted while viewing a background agent arriving as the text [Image #1]"
        },
        {
          "kind": "修正",
          "text": "Fixed long background agent and background command results wrapping under the bullet instead of lining up with their text"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --worktree showing nothing while a slow worktree is set up"
        },
        {
          "kind": "追加",
          "text": "Fixed the worktree exit dialog counting a new folder as one uncommitted file"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow resume telling Claude every finished agent would be reused after a call failed; Claude is now told how many results were reused and where reuse stopped"
        },
        {
          "kind": "修正",
          "text": "Fixed a hang on malformed glob patterns in settings, plugin marketplace entries and Grep file filters"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin and marketplace requests waiting forever when ALL_PROXY is the only proxy set and the proxy never answers; they now fail after 25 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed the / menu, /skills and /plugin repeating rows and losing the cursor when two skills or commands in one place share a name"
        },
        {
          "kind": "修正",
          "text": "Fixed search in /resume, /plugin, /permissions and /config ignoring IME input, dictation and fast typing"
        },
        {
          "kind": "修正",
          "text": "Fixed the cursor disappearing after clearing a search on the /plugin Installed tab"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's Text with wrap=\"truncate-end\" losing rows on the terminal when it holds a line feed"
        },
        {
          "kind": "修正",
          "text": "Fixed /model showing your saved model as \"Default (recommended)\": Default now names your plan's default model, and choosing it in the terminal switches you back to that default"
        },
        {
          "kind": "修正",
          "text": "Fixed a first skill, command or agent created during a session not being found right away"
        },
        {
          "kind": "追加",
          "text": "Fixed /clear --help and other built-in commands running at an idle prompt instead of showing usage; added /help <command>"
        },
        {
          "kind": "修正",
          "text": "Fixed a half-written reply sitting frozen with no spinner while Claude Code retried after a mid-response server error"
        },
        {
          "kind": "修正",
          "text": "Fixed the API retry notice sitting at \"Retrying in 0s\" during the next attempt, now \"retrying…\", and the \"will retry in\" countdown freezing when a reply stalled or with Reduce motion on"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript dropping a few rows, or the prompt jumping up, as a reply started streaming"
        },
        {
          "kind": "修正",
          "text": "Fixed a line of a long list or code block going missing from scrollback, and text jumping a row, while a response streams"
        },
        {
          "kind": "修正",
          "text": "Fixed a long queued message hiding Claude's reply while it streams, and erasing it from scrollback in the classic renderer"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen text jumping when a reply finishes while you're scrolled up or after answering an Edit or Write prompt, and losing your place or jumping turns when resizing"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen transcript going blank when searching or jumping far back, and freezing partway through a fast scroll, in long sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the pinned prompt in fullscreen showing an older question while a reply streams, and being copied with the reply when you drag a selection past the top"
        },
        {
          "kind": "修正",
          "text": "Fixed the screen going blank and dropping keys after picking a model in /model, and /model <alias> and /effort <level> briefly hiding the prompt and dropping letters typed right after"
        },
        {
          "kind": "修正",
          "text": "Fixed the screen scrambling after /tui default in a long conversation, or when the tui setting changed in another window (anthropics/claude-code#94879)"
        },
        {
          "kind": "修正",
          "text": "Fixed the screen freezing for seconds when showing long newly created files in the permission prompt and the Ctrl+O transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed some very long Bash or PowerShell commands freezing the session for seconds"
        },
        {
          "kind": "追加",
          "text": "Fixed Shift+Enter or Option+Enter pressed right after a paste sending the prompt instead of adding a new line"
        },
        {
          "kind": "修正",
          "text": "Fixed Up, Down, End and mouse clicks putting the cursor on the wrong row of a prompt that wraps"
        },
        {
          "kind": "修正",
          "text": "Fixed undo (Ctrl+_) losing the last words typed when pressed after deleting a line or word"
        },
        {
          "kind": "追加",
          "text": "Fixed code or a diff pasted into a prompt losing its indentation in the transcript, and a pasted diff's added lines showing as removed"
        },
        {
          "kind": "修正",
          "text": "Fixed [Image #N] landing in the middle of a word when typing right after pasting, and a pasted image not being sent after deleting its placeholder and pasting it back with Ctrl+Y"
        },
        {
          "kind": "修正",
          "text": "Fixed asterisks disappearing from your own prompts in the transcript, such as src/**/*.ts or 2*3*4"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p showing nothing in the terminal while it retried an overloaded or failing API request, or when it failed with its text output redirected or captured"
        },
        {
          "kind": "修正",
          "text": "Fixed Windows paths in Claude's responses losing the backslash before folders like .claude or _build"
        },
        {
          "kind": "修正",
          "text": "Fixed bold text showing as raw ** in Japanese, Chinese and Korean replies when it starts or ends with punctuation"
        },
        {
          "kind": "修正",
          "text": "Fixed /memory opening a read-only file with no warning that changes may not save"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude editing ~/.claude/keybindings.json, which has no effect in Claude Desktop, when asked to change a shortcut there"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude saying that an administrator can turn on Claude in Chrome when your organization's policy disables it, in apps that provide its tools such as Claude Desktop's Code tab"
        },
        {
          "kind": "修正",
          "text": "Fixed the suggested next prompt sometimes being a bare tag, such as <signal type=\"empty\" />"
        },
        {
          "kind": "修正",
          "text": "Fixed long command output ending mid-line in the expanded view with no sign it was cut; it now names the saved file"
        },
        {
          "kind": "修正",
          "text": "Fixed collapsed tool lines reading \"Ran\" or \"Called\" while still asking permission, and \"Running…\" or \"Reading…\" again when a panel opened after a call was stopped or refused"
        },
        {
          "kind": "修正",
          "text": "Fixed failed, blocked or refused commands looking like passing ones in a collapsed tool line: it now shows \"· 1 failed\" or says they did not run"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"done\" line showing after a turn that failed or was refused at a permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed failed or refused skill and agent calls still showing \"Initializing…\""
        },
        {
          "kind": "修正",
          "text": "Fixed /btw showing only a lead-in such as \"Let me check that file.\" with no notice when the model tried to use a tool (anthropics/claude-code#90314)"
        },
        {
          "kind": "修正",
          "text": "Fixed long /btw answers looking finished and ignoring PgUp, PgDn, Home, End and the mouse wheel"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume search saying \"No sessions match\" for older sessions that exist, and a typed number opening a session instead of searching"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing Ctrl+R again in fullscreen prompt search not moving to the next older match"
        },
        {
          "kind": "修正",
          "text": "Fixed Tab not completing file names without a slash in shell mode (!), and completed paths with spaces or shell characters not being quoted"
        },
        {
          "kind": "修正",
          "text": "Fixed a rebound chat:submit key doing nothing while the slash command or @ file menu was open"
        },
        {
          "kind": "修正",
          "text": "Fixed holding Esc over typed text opening Rewind after the text was cleared"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc over typed text cancelling a pending /loop"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Esc again to clear\" staying on screen after a second Esc would no longer clear the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed typing landing in the wrong place in a question's note after going back to it or editing it in an external editor"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"paste again to expand\" hint hiding the mode and \"esc to interrupt\" after a paste was sent or deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed \"paste again to expand\" hiding the middle of a paste longer than 10,000 characters in fullscreen mode, and a prompt collapsing while you type past that length"
        },
        {
          "kind": "修正",
          "text": "Fixed the arrow keys and q not working in a pager that claude --help is piped to, as in claude --help | less"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop's Code tab blaming the internet connection when a certificate's signature couldn't be verified"
        },
        {
          "kind": "修正",
          "text": "Fixed Web Search showing nothing while its request was being retried"
        },
        {
          "kind": "修正",
          "text": "Fixed desktop notifications not being sent inside tmux (with allow-passthrough on), or to iTerm2 over SSH, on the default setting"
        },
        {
          "kind": "修正",
          "text": "Fixed /copy and /export saying \"copied to clipboard\" over SSH when the terminal may not have copied anything"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage-credits saying \"Request sent to your admin\" when the request was refused; people who have billing access themselves are now pointed to the usage settings page"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript share question for Pro and Max users staying open after the next message, /clear or /resume"
        },
        {
          "kind": "修正",
          "text": "Fixed an upgrade hint appearing under an old usage limit message after the limit had reset"
        },
        {
          "kind": "修正",
          "text": "Fixed the effort level notice reappearing after every permission prompt or dialog, and the usage limit warning and other notices not appearing while the context warning showed"
        },
        {
          "kind": "修正",
          "text": "Fixed /tui default saying it had switched back to the classic renderer when a setting kept fullscreen on; after a /tui that can't switch, Claude Code now says what keeps the renderer"
        },
        {
          "kind": "追加",
          "text": "Fixed a new account's first session using a different renderer from later ones"
        },
        {
          "kind": "修正",
          "text": "Fixed Reduce motion and Show tips in /config applying only to the current folder"
        },
        {
          "kind": "修正",
          "text": "Fixed typing and spinners redrawing the whole pane in tmux 3.7"
        },
        {
          "kind": "修正",
          "text": "Fixed Option+T typing † instead of toggling thinking over SSH from iTerm2 when Option isn't set as Meta"
        },
        {
          "kind": "修正",
          "text": "Fixed /terminal-setup not naming the tmux settings that Shift+Enter needs, and promising Shift+Enter in Windows Terminal before 1.25, where it sends the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed Program Status Protocol (OSC 7501) terminals showing a finished turn after idle compaction, or no status for background sessions opened with claude agents, claude attach or --resume"
        },
        {
          "kind": "修正",
          "text": "Fixed terminals that support the Program Status Protocol (OSC 7501) not seeing Claude Code as waiting on you while the folder trust prompt is open (anthropics/claude-code#105801)"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal progress bar showing Claude as working while it waited for your answer or was suspended with Ctrl+Z, and disappearing in Ghostty after 15 seconds while Claude was still working"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen giving no sign that a permission prompt or question was waiting while you were scrolled up"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen tool group headline naming a finished or queued call instead of the running one"
        },
        {
          "kind": "修正",
          "text": "Fixed finished tool groups in fullscreen counting a search or listing also as a shell command, and the tool timer there counting time at a permission prompt or queued behind another command"
        },
        {
          "kind": "修正",
          "text": "Fixed a multi-line shell command filling the screen in fullscreen while it runs"
        },
        {
          "kind": "修正",
          "text": "Fixed ! shell commands showing no output for their first three seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed a running command showing no output or timer when its collapsed row was clicked open in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the jump-to-bottom pill disappearing in fullscreen while more of the reply was still below"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt disappearing in short fullscreen windows while a survey or notice showed above it"
        },
        {
          "kind": "修正",
          "text": "Fixed the custom status line disappearing and the screen jumping on Ctrl+C, in ! shell mode and while pasting an image"
        },
        {
          "kind": "修正",
          "text": "Fixed a custom status line keeping its old width, folder and session name after a terminal resize, /cd or /rename (anthropics/claude-code#107291)"
        },
        {
          "kind": "修正",
          "text": "Fixed \"esc to interrupt\" missing beside a custom status line and showing while Esc would go to a panel or footer item"
        },
        {
          "kind": "修正",
          "text": "Fixed mouse escape codes being typed into the shell after exiting fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the Ctrl+Z message printing over the prompt box outside fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed claude logs painting over and mixing with what was already in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed the spinner tip flashing back and the screen bouncing as a reply finished"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Reading 1 file…\" line blinking out and the prompt jumping when a tool call finished streaming"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude --resume session preview being garbled and not scrolling in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc not leaving the \"Connect to your IDE automatically?\" question in /ide, where Ctrl+C twice quit Claude Code"
        },
        {
          "kind": "修正",
          "text": "Fixed first-run terminal setup saying nothing about what it changed or could not set up"
        },
        {
          "kind": "修正",
          "text": "Fixed /status showing installation warnings twice"
        },
        {
          "kind": "修正",
          "text": "Fixed the footer's PR badge showing the previous branch's pull request after switching branches"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Pushed to\" summary naming the fetched branch when a command fetched or pulled first, and \"Merged PR\" or \"Closed PR\" showing when gh refused the action and the exit code was hidden"
        },
        {
          "kind": "修正",
          "text": "Fixed URLs that wrap over several lines not being clickable in terminals with link support that Claude Code doesn't recognize, and labeled links in the Rex terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed the Ctrl+O transcript hinting Ctrl+B to background a command in fullscreen, where it pages up, and showing no sign that Claude is still working"
        },
        {
          "kind": "修正",
          "text": "Fixed the Ctrl+R search, the model picker, plan approval, question previews, background shell output and /plugin install choices being cut off in short fullscreen windows"
        },
        {
          "kind": "修正",
          "text": "Fixed the /context grid, API errors such as \"Credit balance too low\", \"Waiting for API response\" and retry notices, \"esc to interrupt\" and \"Interrupted\" being cut off or jumbled in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed wide tables breaking apart in plans and subagent prompts, cutting short words in half beside a long cell, and showing stray words and blank rows when drawn as label and value lists"
        },
        {
          "kind": "追加",
          "text": "Fixed code keywords, added diff lines, the slow-reply spinner and \"thinking\" being hard to read in some themes and terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed code in diffs and file previews being invisible when the theme and the terminal background differ"
        },
        {
          "kind": "修正",
          "text": "Fixed the unused part of /usage bars looking full in the light and ANSI themes"
        },
        {
          "kind": "修正",
          "text": "Fixed the /effort slider ignoring mouse clicks in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed text being drawn out of place after skin-tone or joined emoji, symbols such as ✌ and ☝, and Hindi, Tamil and other Indic vowel signs in terminals that draw them wider"
        },
        {
          "kind": "修正",
          "text": "Fixed joined emoji pushing rows out of place in GNU screen"
        },
        {
          "kind": "修正",
          "text": "Fixed the last item of JSON lists and right-aligned numbers losing their indent in command and tool output"
        },
        {
          "kind": "修正",
          "text": "Fixed diffs numbering \"No newline at end of file\" as a line of code, which shifted the line numbers after it"
        },
        {
          "kind": "修正",
          "text": "Fixed long single-line messages showing \"(0 lines hidden)\" instead of how much text is hidden"
        },
        {
          "kind": "修正",
          "text": "Fixed notebook edits showing no tool row when Claude left out the cell type or deleted a cell, and showing @undefined when inserting a cell at the top"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Switch model?\" and \"Change effort level?\" questions showing no key hints"
        },
        {
          "kind": "修正",
          "text": "Fixed the ? shortcuts list running its columns together in narrow terminals and being cut off at the bottom in short fullscreen windows"
        },
        {
          "kind": "修正",
          "text": "Fixed leftover hint text in screen reader mode on macOS and Linux after closing the /permissions search when the rule list was taller than the terminal"
        },
        {
          "kind": "改善",
          "text": "Improved Bash permission checks: some commands now ask first, or are refused where no one can answer"
        },
        {
          "kind": "改善",
          "text": "Improved permission checks in Code Mode; more sandboxed commands now ask or are refused"
        },
        {
          "kind": "改善",
          "text": "Improved the messages shown when Code Mode can't be turned on, so they say what you can do"
        },
        {
          "kind": "改善",
          "text": "Improved Bash sandbox protections on macOS, Linux and WSL"
        },
        {
          "kind": "変更",
          "text": "Changed edits in a session's mods folder to ask more often, and sandboxed commands to write to fewer folders; if every edit asks, remove any link there to an unreadable or network path"
        },
        {
          "kind": "改善",
          "text": "Improved Claude's sandbox instructions on Linux to explain that a server is reachable only from the command that started it"
        },
        {
          "kind": "改善",
          "text": "Improved how secrets are masked in push notifications from Remote Control and cloud sessions"
        },
        {
          "kind": "改善",
          "text": "Improved /logout and claude auth logout in the terminal to retry revoking the login, and to say where to revoke it if the server doesn't confirm"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control: replies from claude remote-control, Claude Desktop and VS Code sessions now stream to your phone or browser as they are written"
        },
        {
          "kind": "改善",
          "text": "Improved typing, streaming and resize responsiveness, especially in long sessions"
        },
        {
          "kind": "改善",
          "text": "Improved response time after reading or editing files, most noticeably on Windows"
        },
        {
          "kind": "改善",
          "text": "Improved idle CPU use: an idle session now wakes the machine less often"
        },
        {
          "kind": "改善",
          "text": "Improved CPU use when more than 20 subagents are running: token counts of background agents whose transcript isn't open now update every 5 seconds"
        },
        {
          "kind": "改善",
          "text": "Windows: Improved the speed of a session's first Bash command by about a second"
        },
        {
          "kind": "改善",
          "text": "Improved response time of the first message after /compact in git repositories"
        },
        {
          "kind": "改善",
          "text": "Improved response time in Claude Desktop for messages queued while Claude finishes a reply"
        },
        {
          "kind": "追加",
          "text": "Improved time to first response in Claude Desktop's new sessions: the first turn no longer waits up to 500 ms for local MCP servers whose tools load on demand"
        },
        {
          "kind": "改善",
          "text": "Improved how a PreToolUse hook's updatedInput is kept when more than one hook answers a tool call; the rewrite now runs in more cases"
        },
        {
          "kind": "改善",
          "text": "Improved the error when a PreToolUse hook exits 127, saying its check may not have run"
        },
        {
          "kind": "改善",
          "text": "Improved hook failures, blocks and timeouts in the transcript: failures are now red instead of grey, a hook that stops Claude is yellow, and the reason is shown under them"
        },
        {
          "kind": "改善",
          "text": "Improved the folder trust prompt, at launch and in /cd, to name the project settings files Claude Code will load; at launch it also marks files that run commands"
        },
        {
          "kind": "改善",
          "text": "Improved the folder trust prompt to say why Claude Code exited"
        },
        {
          "kind": "改善",
          "text": "Improved the message in non-interactive runs and background agents when a permission check fails with an error, so it names the cause"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome permission requests from a terminal session over Remote Control: on claude.ai they now name the site Claude wants to act on, also when it is already allowed"
        },
        {
          "kind": "改善",
          "text": "Improved MCP tool errors in cloud sessions: when a call through the session's proxy is cut off after it was sent, Claude is told that the outcome is unknown"
        },
        {
          "kind": "変更",
          "text": "Improved /update-config in the terminal to use about 13,000 tokens of context instead of 93,000, and a rejected settings edit to quote only the changed settings"
        },
        {
          "kind": "改善",
          "text": "Improved Program Status Protocol (OSC 7501) reports: background commands, monitors and MCP tasks are listed, and a session waiting on them shows as working instead of done"
        },
        {
          "kind": "改善",
          "text": "Improved Monitor: when a watch expires with no events and its command wrote to stderr, Claude is now told so and told which file holds the output"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: a long browser_batch call now has 150 seconds to answer, up from 90, so fewer finished results are lost"
        },
        {
          "kind": "改善",
          "text": "Improved /doctor to share findings as it works instead of staying silent until the full report"
        },
        {
          "kind": "改善",
          "text": "Improved the error for a settings or .mcp.json file with broken JSON: it now gives the line and column"
        },
        {
          "kind": "改善",
          "text": "Improved commands that are off for your provider, sign-in or an environment variable such as DISABLE_TELEMETRY to say why instead of \"Unknown command\""
        },
        {
          "kind": "改善",
          "text": "Improved the CERT_SIGNATURE_FAILURE connection error to name a possible cause after a CA renewal and what IT can change"
        },
        {
          "kind": "改善",
          "text": "Improved the message shown when a team's pooled group budget is used up: it now says when the budget resets"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown when the API refuses a Console sign-in: it now says to run /login instead of pointing to an admin setting"
        },
        {
          "kind": "改善",
          "text": "Improved sign-in prompts: pasting a verification code or a web address now says what to do instead, and the prompt stays so you can paste the right code (anthropics/claude-code#97)"
        },
        {
          "kind": "改善",
          "text": "Improved the /login screen: the code goes in a proper text field, a rejected code says why under it, and pasting in a short window scrolls the field into view"
        },
        {
          "kind": "改善",
          "text": "Improved /design-login, /install-github-app and MCP sign-in screens to match /login; the first two now mask the pasted code"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway sign-in screens: the sign-in address is a link and c copies it"
        },
        {
          "kind": "改善",
          "text": "Improved /plugin Discover and marketplace lists: they fit short windows with the cursor and key hints on screen, and Home, End, PgUp, PgDn, the mouse wheel and clicks now work"
        },
        {
          "kind": "追加",
          "text": "Improved /plugin Marketplaces and Add marketplace: a compact list, a clearer remove confirmation, a clear text field and shorter errors when adding fails"
        },
        {
          "kind": "改善",
          "text": "Improved /plugin Installed tab: Home, End, PgUp, PgDn and clicks now work, and hidden rows are counted"
        },
        {
          "kind": "改善",
          "text": "Improved /plugin Errors and Stats tabs: long errors no longer fill the screen, uninstalling from an error asks first, and long skill names no longer break the table"
        },
        {
          "kind": "改善",
          "text": "Improved claude plugin, mcp, update, doctor and auth logout output on a terminal to mark success, failure and warnings the same way (piped output keeps its old form)"
        },
        {
          "kind": "改善",
          "text": "Improved wording across the terminal: /plugin, /mcp, sign-in, setup, settings, the agent view, /teleport, Remote Control, update messages, spinner tips, /powerup and claude --help"
        },
        {
          "kind": "改善",
          "text": "Improved key hints in many dialogs and the ? lists: they show the keys that work, in one order and wording, and fit narrow windows; deeper screens in /hooks and /permissions say Esc goes back"
        },
        {
          "kind": "修正",
          "text": "Improved text fields in /add-dir, /export, /permissions, /feedback, /install-github-app and Bedrock and Vertex setup: one look, long text wraps, and a refused value can be corrected in place"
        },
        {
          "kind": "改善",
          "text": "Improved dialogs, panels and the transcript: errors, warnings and confirmations in many dialogs start with ✘, ⚠ or ✔, and loading lines, status rows, counts and durations look and read more alike"
        },
        {
          "kind": "改善",
          "text": "Improved long menus such as /permissions, /resume and /model to say how many rows are above and below, and the / and @ menus to count hidden rows outside fullscreen and screen reader mode"
        },
        {
          "kind": "改善",
          "text": "Improved list navigation: more lists wrap at both ends, checkbox lists in slash commands take Home and End, and /permissions says when a search finds nothing"
        },
        {
          "kind": "改善",
          "text": "Improved the pickers in agent view to take Home, End and paging"
        },
        {
          "kind": "改善",
          "text": "Improved agent view and the agent rows under the prompt to mark the selected row with the same pointer and color as other lists"
        },
        {
          "kind": "改善",
          "text": "Improved the footer after Ctrl+C stops background agents: it now offers ↓ to resume subagent while a stopped subagent is listed"
        },
        {
          "kind": "改善",
          "text": "Improved fullscreen mode: the prompt's borders now show how many lines of a long prompt are out of view"
        },
        {
          "kind": "改善",
          "text": "Improved /autocompact and /scroll-speed with a slider that shows every value, takes Home, End and (in fullscreen) clicks, and fits narrow terminals"
        },
        {
          "kind": "改善",
          "text": "Improved on/off settings to read on / off in /config, /memory and auto mode setup"
        },
        {
          "kind": "改善",
          "text": "Improved the send-now hint under queued messages: it now says \"Queued\" and no longer looks like part of your message"
        },
        {
          "kind": "改善",
          "text": "Improved terminal setup to list every change before making it"
        },
        {
          "kind": "改善",
          "text": "Improved alignment and spacing in /btw, /help, /scroll-speed, the settings error dialog and dialogs that suggest a plugin or setting"
        },
        {
          "kind": "変更",
          "text": "Changed terminal and VS Code sessions in organizations with the Claude Code + Cowork HIPAA configuration to start in auto mode by default; disableAutoMode turns it off"
        },
        {
          "kind": "変更",
          "text": "Changed terminal and VS Code sessions with no mode set to start in auto mode, not Manual mode, when your organization's policy hasn't loaded"
        },
        {
          "kind": "追加",
          "text": "Changed a managed-mcp.json added mid-session so it may apply at the next check; restart open sessions for it to apply in full"
        },
        {
          "kind": "変更",
          "text": "Changed Code Mode's $ shell helper to refuse some values with an error; nothing runs"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to stop some shell commands that ran before"
        },
        {
          "kind": "変更",
          "text": "Changed some Bash commands on macOS that ran before to ask or be refused"
        },
        {
          "kind": "変更",
          "text": "Changed a hook's \"decision\": \"block\" to hold in more cases, so a hook that always prints one may start blocking calls"
        },
        {
          "kind": "変更",
          "text": "Changed sessions that start in auto by default to take a server-managed defaultMode once settings load, or Manual if settings fail with no stored copy and policy fails or requires it"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode for organizations with the Claude Code + Cowork HIPAA configuration: on a direct Anthropic API connection, the server-side classifier now checks actions, as for other organizations"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox to keep its state in some cases during a session, until you run /sandbox or /cd; Bash may ask first"
        },
        {
          "kind": "変更",
          "text": "Changed sandboxed commands on macOS, Linux and WSL to no longer write to some sensitive home folders by default; some can be allowed with sandbox.filesystem.allowWrite in user or managed settings"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox to set aside unexpected entries in a repository's .git folder after a command"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox on Linux and WSL to create some missing --add-dir folders before each sandboxed command, so commands that create them can fail, skip, or land inside them"
        },
        {
          "kind": "追加",
          "text": "Changed commands that a permission hook or SDK host rewrites while approving to stay in the sandbox if the original was checked as sandboxed; the approver can add dangerouslyDisableSandbox: true"
        },
        {
          "kind": "変更",
          "text": "Changed claude mcp serve to ignore sandbox.excludedCommands"
        },
        {
          "kind": "変更",
          "text": "Changed /rewind on macOS, Linux and WSL to leave some files untouched and report them as skipped when the sandbox is on"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox to ask before some lines that set environment variables when auto-allow is off; unattended runs can refuse them"
        },
        {
          "kind": "変更",
          "text": "Changed Claude's file tools to refuse writes to Claude Code's sign-in files, such as .credentials.json"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash permission check to ask before more commands reach Claude Code's sign-in files"
        },
        {
          "kind": "変更",
          "text": "Changed some file tools to refuse some device and process files"
        },
        {
          "kind": "変更",
          "text": "Changed some cp and mv commands to ask first"
        },
        {
          "kind": "変更",
          "text": "Changed some tool calls in bypass permissions mode to ask for approval, or be denied where no one can be asked"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash permission check to ask about some commands with very long values it can't finish checking, or to refuse them where a deny rule may apply or no one can answer"
        },
        {
          "kind": "変更",
          "text": "Changed subagents isolated in a worktree to refuse, in any repository, some git commands in Bash that can rewrite branches shared with your checkout; sessions are not affected"
        },
        {
          "kind": "変更",
          "text": "Changed ExitWorktree to refuse removing a worktree while a background subagent or shell command may still be running in it, unless Claude passes discard_changes"
        },
        {
          "kind": "変更",
          "text": "Changed the computer use macOS permissions panel to ignore j and k; the arrow keys and Ctrl+P/Ctrl+N still move the selection"
        },
        {
          "kind": "変更",
          "text": "Changed the PowerShell tool to ask before some more commands; unattended runs refuse them unless an allow rule, auto mode or bypass permissions mode allows them"
        },
        {
          "kind": "変更",
          "text": "Changed the PowerShell tool to ask about some more commands, even in bypass permissions mode, and to refuse some of them"
        },
        {
          "kind": "変更",
          "text": "Changed some malformed PowerShell commands to be denied"
        },
        {
          "kind": "変更",
          "text": "Changed some PowerShell tool commands that define a function named like a built-in command to be refused, so Claude can rename it"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to ignore some wildcard shell allow rules, such as ones that name no program or that start with $HOME, so the safety check decides those commands"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to judge wildcard allow rules whose program is a Windows backslash path, so those calls can be blocked; exact rules keep their allow; we plan to restore rules that start with .\\"
        },
        {
          "kind": "追加",
          "text": "Changed a managed autoMode.environment list without \"$defaults\" to replace every built-in entry in Claude Desktop and Agent SDK apps too; add \"$defaults\" or copy the sensitive-target ones"
        },
        {
          "kind": "変更",
          "text": "Changed --add-dir and /add-dir in local terminal sessions to show the trust prompt for a folder you have not trusted yet; claude --bg refuses such a folder"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runners under --trust-workspace false to ignore more repository settings; set such values in user or managed settings"
        },
        {
          "kind": "変更",
          "text": "Changed how permission answers over Remote Control and on self-hosted runners save \"always allow\" choices"
        },
        {
          "kind": "変更",
          "text": "Changed enabled plugins that were refused for a malformed plugin.json display field: they now load, with their hooks and MCP servers; administrators should check the plugins they deploy"
        },
        {
          "kind": "変更",
          "text": "Changed how allowedHttpHookUrls and httpHookAllowedEnvVars apply to hooks from managed settings"
        },
        {
          "kind": "変更",
          "text": "Changed HTTP hooks to ignore Content-Length and Transfer-Encoding in their headers setting; the request's length comes from its body"
        },
        {
          "kind": "変更",
          "text": "Changed plugin uninstall to also delete the files extracted from the plugin's MCP bundles (.mcpb, .dxt), unless another plugin uses the same bundle"
        },
        {
          "kind": "変更",
          "text": "Changed some worktree sessions to skip some plugin settings; a notice names what was skipped"
        },
        {
          "kind": "変更",
          "text": "Changed /plugin uninstall, remove and switch questions to lists answered with the arrow keys and Enter, or Esc to cancel; y, n and u no longer answer them"
        },
        {
          "kind": "変更",
          "text": "Changed automatic compaction in plan mode to use the model answering you, such as Opus with opusplan, so it can cost more"
        },
        {
          "kind": "変更",
          "text": "Changed Cowork cloud sessions to hold an organization's OpenTelemetry export until the first turn; a session that gets no message now sends nothing, so claude_code.session.count can fall"
        },
        {
          "kind": "変更",
          "text": "Changed Claude's messages to a session on another machine to be refused when your session uses an API key, auth token, profile or workload identity beside a saved claude.ai login"
        },
        {
          "kind": "変更",
          "text": "Changed --bare sessions on an unapproved API key: moving one to the background is now refused in most setups, and claude --bare --bg exits with an error if the background service lacks the key"
        },
        {
          "kind": "変更",
          "text": "Changed \"Continue automatically at usage limit\" to stop with a notice, sending nothing, when your login changes or ends during the wait"
        },
        {
          "kind": "変更",
          "text": "Remote Control: Changed how it connects through a proxy: requests now use a CONNECT tunnel, so a proxy that refuses CONNECT stops Remote Control with an error"
        },
        {
          "kind": "変更",
          "text": "Remote Control: Changed the session debug logs written under --verbose to go to ~/.claude/child-logs/"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed Linux and macOS sessions with no gh to get a built-in gh api by default, via Anthropic, which adds their GitHub sign-in, if any; --use-anthropic-gh false turns it off"
        },
        {
          "kind": "変更",
          "text": "Changed agent view so that quitting with Ctrl+C twice, Ctrl+D twice or /exit after pressing ← in an empty conversation ends that session, instead of leaving it running for 5 minutes"
        },
        {
          "kind": "変更",
          "text": "Changed --await-initialize to be refused with --bg or --worktree --tmux, which never read the initialize request, instead of starting without the fields it carries"
        },
        {
          "kind": "変更",
          "text": "Changed worktree creation, /teleport and IDE checkouts to run git with a stricter PATH; a git filter or helper may need its full path"
        },
        {
          "kind": "変更",
          "text": "Changed the card for approving a subagent's plan to two choices, \"Yes, and switch to default (ask each time) for this session\" and \"No\", chosen with the arrow keys and Enter (typed text moves to No)"
        },
        {
          "kind": "変更",
          "text": "Changed the /claude-api skill to build agents on Managed Agents by default, unless you want to host the agent loop yourself"
        },
        {
          "kind": "変更",
          "text": "Changed /usage in fullscreen mode to show plan limit bars before session cost for subscribers; /cost still starts with cost"
        },
        {
          "kind": "変更",
          "text": "Changed the wording of some messages that claude subcommands print; JSON output is unchanged"
        },
        {
          "kind": "変更",
          "text": "Changed first-run setup to preselect the \"Auto (match terminal)\" theme instead of Dark mode"
        },
        {
          "kind": "変更",
          "text": "Changed fullscreen /cd to refuse \"Yes\" while its trust prompt doesn't fit, with a line saying to make the window taller"
        },
        {
          "kind": "変更",
          "text": "Removed the tmux notice that said the mouse wheel needs set -g mouse on in fullscreen; the wheel scrolls without it"
        },
        {
          "kind": "変更",
          "text": "Removed the spinner tip that suggested /clear 30 minutes into a running turn"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a claudeCode.promptSuggestions setting that turns prompt suggestions off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Rewind code to here\" in a forked conversation sometimes undoing one turn too many and deleting files created in that turn"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Sandbox dialog creating empty files and folders in the home directory and the project's .git folder while the sandbox is off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the saved sign-in being lost on some networks"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sign-in ending when a verification code, a web address or a code from another sign-in attempt is pasted; the panel now says what to paste instead"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen showing briefly each time a panel or window opened while signed in to Console without an API key"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the usage-limit banner's \"Request more\" button for Team and Enterprise members coming back after each press without sending anything, after you signed in again during a session"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed /ide in a second Claude Code session silently losing the editor connection back to the first session; the newest connection now wins and the displaced session shows how to switch back"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed saved memories not being listed in the Memory dialog, or RAM use growing without end, when the memory folder held symlink loops, and a hang when it held a named pipe"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a running command's live output stopping after one failed read"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Open in Terminal\" showing only the shell's error when claude could not be started: in bash, zsh, fish and Git Bash, a notice now explains why and links to the install guide"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the panel showing no \"Open artifact\" link after Claude publishes an artifact"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the prompt suggestion hiding the \"attach selected text\" hint while the chat panel is unfocused"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed buttons with no visible border in the high-contrast themes, and the dark welcome art on the sign-in screen in Light High Contrast"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Improved Edit and Write speed: no wait for new problems on files that are not open in a tab when the editor has been reporting none for such files"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed a running command's live output in the chat to look like the command card's OUT row"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the text of extension errors in event listeners, views and activation to stay out of the editor's own error telemetry"
        }
      ]
    },
    {
      "version": "2.1.325",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed a security issue in how zstd-compressed responses are decoded"
        },
        {
          "kind": "追加",
          "text": "Added a spinner tip in VS Code and similar integrated terminals about re-running a notebook cell, shown once Claude has read or edited a Jupyter notebook"
        },
        {
          "kind": "追加",
          "text": "Added a line under the error shown when your organization's policy blocks a request, saying how to continue: run /rewind and change the message, or run /clear"
        },
        {
          "kind": "追加",
          "text": "Added a note for Claude when a sandboxed git checkout, git stash or autostash pull cannot update protected files such as those in .claude"
        },
        {
          "kind": "修正",
          "text": "Fixed /security-review and skills' inline git commands stopping with an error in worktrees of bare repositories, --separate-git-dir checkouts and Android repo checkouts"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents with their own model being moved to the plan-mode model when the model setting is opusplan or haiku"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents on a different model sizing file reads and MCP results with the main session's model"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions on many third-party gateways and Foundry stopping with a context length error on every turn instead of compacting"
        },
        {
          "kind": "修正",
          "text": "Fixed recent turns sometimes going missing from a resumed session after Claude Code stopped without a clean exit"
        },
        {
          "kind": "修正",
          "text": "Fixed shell commands running in the launch directory after the working directory was deleted; the command now fails with a message and can be re-issued"
        },
        {
          "kind": "修正",
          "text": "Fixed an approved plan edit being lost when the plansDirectory folder can't take it: the plan is now saved in the default plans folder, and a warning says where and why"
        },
        {
          "kind": "追加",
          "text": "Fixed a saved sonnet[1m] model setting being rewritten on a new install to a model id the API rejects"
        },
        {
          "kind": "修正",
          "text": "Fixed focus view hiding the reply to your prompt when a scheduled task replied after it"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt sometimes missing from a background subagent's view when fullscreen is off"
        },
        {
          "kind": "修正",
          "text": "Fixed long options in lists and permission prompts being partly overwritten when they wrap, and first-run screens losing lines on narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed startup warnings about permission rules and the \"N MCP servers need authentication\" notice being recorded as seen when they were scrolled out of view"
        },
        {
          "kind": "修正",
          "text": "Fixed the welcome header showing control characters or splitting across lines when an agent's name or the working folder contains them or a line break"
        },
        {
          "kind": "修正",
          "text": "Fixed the red error shown when Claude tries a command only you can run: a dim line now says it runs only when you type it at the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed /stats showing an Active days total that was one day too high"
        },
        {
          "kind": "修正",
          "text": "Fixed /insights saying a report was ready when no session qualified for analysis, and writing two values into its HTML report without escaping them"
        },
        {
          "kind": "修正",
          "text": "Fixed /voice saying voice mode changed when managed settings, --settings, or the project's .claude/settings.json or .claude/settings.local.json kept it as it was; it now says what holds it"
        },
        {
          "kind": "修正",
          "text": "Fixed the IDE welcome dialog showing Cmd+Esc for Quick Launch on Windows and Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed Slack app tips showing when your organization's policy denies cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed claude purge hanging silently when there is no terminal to read keys from, and its project picker and -i prompts ignoring the keyboard when stdin is piped"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin eval --output-dir '' writing the report into the current folder; it now exits with an error"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p text output on a terminal passing control sequences other than text styling; pipes and files are unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed leftover .oauth_refresh.lock.owner.tmp.* files piling up in the config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed /fast saying \"Fast mode has been disabled by your organization\" under the keyless Console sign-in, where Claude Code had not asked the server"
        },
        {
          "kind": "修正",
          "text": "Fixed /model saying that your organization restricts a model when Claude Code could not check that, for example with no network"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Sign in with your Console account\" in /login replacing your existing login when you pressed Esc right after the browser step"
        },
        {
          "kind": "修正",
          "text": "Fixed the browser showing the sign-in success page in some cases where sign-in failed or was canceled"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth status and other short commands leaving a lock behind on a Console profile, which made the next session hang for about a minute"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions started on your claude.ai login using (and billing) an API key or token from the shell that started the background service"
        },
        {
          "kind": "修正",
          "text": "Fixed more cases of a session moving to another sign-in in the background; these moves are now refused, with a message saying what works"
        },
        {
          "kind": "修正",
          "text": "Fixed a second Enter in the exit dialog stopping background work after the move to the background was refused"
        },
        {
          "kind": "修正",
          "text": "Fixed token counting on Amazon Bedrock sending the conversation to Bedrock when the allowedProviders managed setting does not allow it"
        },
        {
          "kind": "修正",
          "text": "Fixed AWS credential_process helpers and Google Cloud default credentials failing when Claude Code is started without a HOME environment variable"
        },
        {
          "kind": "修正",
          "text": "Fixed a session sometimes going back to an earlier permission mode after a subagent's plan was approved"
        },
        {
          "kind": "修正",
          "text": "Fixed one invalid value in an Agent SDK applyFlagSettings() call silently discarding all settings from earlier calls; a call that would do this is now refused with an error"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions showing as waiting for input when a finished pull request only needed your own review or merge"
        },
        {
          "kind": "修正",
          "text": "Fixed an unrecognized teammateMode settings value being ignored without a warning: claude -p, the startup warning and claude doctor now list it as a skipped entry (still not applied)"
        },
        {
          "kind": "追加",
          "text": "Fixed --worktree skipping a WorktreeCreate hook from a plugin in CLAUDE_CODE_PLUGIN_SEED_DIR on the first run in a new home directory"
        },
        {
          "kind": "修正",
          "text": "Fixed brief-mode sessions, such as Dispatch, sending a reply again after the turn had already replied"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude saying a working Atlassian, Asana or Sentry connector had failed in cloud sessions when a plugin listed it at a different URL"
        },
        {
          "kind": "追加",
          "text": "Fixed Claude Desktop and SDK sessions listing a folder's own MCP servers (.mcp.json, local) as host-added or not at all, and not connecting WebSocket ones, after a folder move or pre-warmed start"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp still listing a plugin's MCP server after a plugin reload removed it while it was connecting"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP server staying \"needs authentication\", and its mcp_tool hooks being skipped, after a token refresh that was refused only for a moment"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP elicitation requests being cancelled without asking in headless mode after a server's connection was replaced during a tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls from an SDK host answering \"Not connected\" after a tool call had reconnected the MCP server"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP task getting stuck after its question was closed with Esc or asked again: the footer now says it needs your input, and Enter in /tasks shows the question again"
        },
        {
          "kind": "修正",
          "text": "Fixed background MCP tasks that stopped updating after another call to the same server lost the connection, when a later call reconnects"
        },
        {
          "kind": "修正",
          "text": "Fixed a background MCP task's question opening over a message you were still typing; it now waits until you send or clear the draft, and the spinner and turn timer keep running"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree.sparsePaths and sparse plugin and marketplace clones leaving out the repository's root files on older git versions, such as 2.34"
        },
        {
          "kind": "追加",
          "text": "Fixed self-hosted runner sessions with several repositories being unable to use a repository added mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude asking for permission before reading your own artifact or its data"
        },
        {
          "kind": "修正",
          "text": "Fixed deny and ask permission rules and hooks for the Artifact tool not applying in some cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed Code Mode scripts ignoring a worktree entered with EnterWorktree, writing ~ paths into the project, and leaving /mcp showing an MCP server as connected after its sign-in expired"
        },
        {
          "kind": "修正",
          "text": "Fixed words typed with a Yes at a permission dialog or plan approval not reaching Claude in Code Mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude starting work by itself when you resumed a session that ended during a Code Mode script; it now waits for your next prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed a missing OpenTelemetry user_prompt event for a message sent while tool calls run. The event has delivery.mode: \"mid_turn\" and the running turn's prompt.id"
        },
        {
          "kind": "修正",
          "text": "Fixed the OpenTelemetry user_prompt event leaving out earlier messages' text when queued messages merged into one turn in VS Code, or when one message had an image"
        },
        {
          "kind": "修正",
          "text": "Fixed a slash command's allowed-tools grants applying to background agents woken during or after its turn"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback and /bug to upload other sessions only when they were recorded by the signed-in account or organization"
        },
        {
          "kind": "追加",
          "text": "Fixed relative deny and ask permission rules (e.g. Read(./.env)) no longer covering the project after a cd; they now also apply in added directories"
        },
        {
          "kind": "修正",
          "text": "Fixed deny and ask permission rules starting with mcp__plugin_*_ missing a plugin's MCP server or tool spelled in another letter case"
        },
        {
          "kind": "修正",
          "text": "Fixed deny rules not being applied to a permission approval that arrives after Claude Code restarts, in self-hosted runner and claude remote-control sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a committed .claude/settings.local.json could be treated as the user's own when Claude Code was started in certain subfolders of a repository"
        },
        {
          "kind": "修正",
          "text": "Fixed some deny and ask rules not applying to certain Bash commands"
        },
        {
          "kind": "修正",
          "text": "Fixed a gap in Bash permission checks where some compound commands could run without asking; these now ask for permission"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a Bash allow rule could run a different program than the one it names"
        },
        {
          "kind": "修正",
          "text": "Fixed a connector tool's approval prompt in cloud sessions being answered automatically while plugins were still loading"
        },
        {
          "kind": "修正",
          "text": "Fixed some subagents changing an artifact that people outside your organization can see, or uploading files to it, without asking first when an allow rule is set or uploads were approved earlier"
        },
        {
          "kind": "修正",
          "text": "Fixed some artifact publishes skipping the confirmation for pages that people outside your organization can see when \"don't ask again\" had been chosen for Artifact"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode judging only the first change to an artifact that people outside your organization can see; its yes now covers that change alone"
        },
        {
          "kind": "修正",
          "text": "Fixed a managed strictPluginOnlyCustomization lock on agents and skills not taking effect in sessions that were already running"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands being able to write to the native updater's download folder in some cases"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where the Bash sandbox did not fully protect a worktree's settings and hooks"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where the Bash sandbox did not fully protect a linked worktree's shared git folder"
        },
        {
          "kind": "修正",
          "text": "Fixed /teleport's stash choice in some unusual git states: it now stops and says what to do"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed a start-up stall that could last about a second when a PATH entry sits under a folder your account cannot open"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume on Windows refusing or hiding sessions whose folder was recorded with a different drive-letter case or slashes"
        },
        {
          "kind": "修正",
          "text": "Fixed an in-session /resume on Windows dropping a project's saved trust when the session was recorded with a different drive-letter case"
        },
        {
          "kind": "修正",
          "text": "Linux: Fixed sandboxed Bash commands failing with bwrap: Can't create file when the working directory was below an allowRead folder inside a denyRead, such as under a symlinked home directory"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop's third-party deployments staying on \"Stopping\" until a token renewal finished (once it includes this version)"
        },
        {
          "kind": "改善",
          "text": "Improved subagents cut off at the output token limit: they are now asked for the whole answer again, more briefly, instead of returning only its end"
        },
        {
          "kind": "改善",
          "text": "Improved startup with a keyless Console sign-in or other Anthropic profile login: a token that is still valid is read without waiting for the credentials lock"
        },
        {
          "kind": "改善",
          "text": "Improved the account email check: it now also refuses your email as a client's identity in scripts a command runs, file writes, web fetches and MCP calls"
        },
        {
          "kind": "改善",
          "text": "Improved the HTTPS authentication failed message for private plugin marketplaces: it now says git's terminal prompts and askpass programs are disabled, and it also appears with newer git versions"
        },
        {
          "kind": "改善",
          "text": "Improved the add-marketplace confirmations, plugin recommendation prompts and plugin install warning to say that plugins can run code on your computer, with access to your files and shell"
        },
        {
          "kind": "改善",
          "text": "Improved the claude --desktop sign-in error to name the API key, provider or setting that stops a Claude account sign-in from working"
        },
        {
          "kind": "改善",
          "text": "Improved the /voice \"No audio detected\" message on macOS and Windows: it now says where to pick your microphone"
        },
        {
          "kind": "改善",
          "text": "Improved MCP tasks: Claude is now told when a task is waiting for your answer, and can point you to /tasks"
        },
        {
          "kind": "改善",
          "text": "Improved claude remote-control: it now exits with status 4 when it stops by itself (single-session runs still exit 0) and 69 when it can't register, so a service manager can start it again"
        },
        {
          "kind": "改善",
          "text": "Improved the messages shown when a background session can't use its session's API key or token: they no longer suggest adding the key to settings"
        },
        {
          "kind": "改善",
          "text": "Improved the bundled dataviz skill's part-to-whole advice for static images and for parts with a natural order, such as age bands"
        },
        {
          "kind": "変更",
          "text": "Changed sandboxed Bash commands to follow the normal permission flow by default; set sandbox.autoAllowBashIfSandboxed: true to keep running them without prompts"
        },
        {
          "kind": "変更",
          "text": "Changed managed settings that turn the sandbox on: to keep commands running without prompts, set sandbox.autoAllowBashIfSandboxed: true in your highest-ranking managed source"
        },
        {
          "kind": "変更",
          "text": "Changed read-only git commands to ask first in a repository that isn't the project's or one you trusted; name it with --add-dir, not the additionalDirectories setting, to run them without prompts"
        },
        {
          "kind": "追加",
          "text": "Changed scheduled tasks and /loop to ask before running a skill that declares allowed-tools or hooks; add Skill(name) to permissions.allow to run it unattended"
        },
        {
          "kind": "変更",
          "text": "Changed \"Always allow\" in Desktop, IDE and SDK hosts: a rule alone is offered only when saving it would allow that command again, so a scheduled task that relied on one can now wait for you"
        },
        {
          "kind": "追加",
          "text": "Changed the sandbox to refuse sandboxed writes to .claude settings, skills, agents, commands and hooks in added directories, as it does in the launch folder"
        },
        {
          "kind": "変更",
          "text": "Changed worktree isolation: an isolated worktree session or agent is now refused git bisect run, git maintenance register|start and scalar's set-up commands, and is told what still works"
        },
        {
          "kind": "変更",
          "text": "Changed plugin MCP bundles (.mcpb, .dxt) to unpack under the plugins directory, not .mcpb-cache in the plugin's folder, so read-only plugin folders load; one fetched by URL downloads again once"
        },
        {
          "kind": "変更",
          "text": "Changed plugins of a remote marketplace that managed settings declare, enable and list in prependPlugins or appendPlugins to count as the organization's; pluginDigests is deprecated and ignored"
        },
        {
          "kind": "変更",
          "text": "Changed plugin loading to skip, and claude plugin validate to report, some unsafe paths and links in a plugin's folder"
        },
        {
          "kind": "変更",
          "text": "Changed nested skill loading: .claude/skills folders in --plugin-dir plugins no longer load from a session started above them; start Claude Code in the plugin folder instead"
        },
        {
          "kind": "変更",
          "text": "Changed EnterWorktree to refuse a WorktreeCreate hook path that goes through a symlink inside the project; have the hook print the real path"
        },
        {
          "kind": "追加",
          "text": "Changed tmux and iTerm2 teammates, and new sessions from the agents view opened with ←, to start in the session's folder instead of where the shell last ran cd"
        },
        {
          "kind": "変更",
          "text": "Changed prompt suggestions in the terminal to refresh less often after 8 turns in a row started by background or scheduled tasks, saving usage until you press a key or return to the terminal"
        },
        {
          "kind": "変更",
          "text": "Changed Esc on a background MCP task's question to \"answer later\": nothing is sent to the server, and the question stays in /tasks"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_MAX_CONTEXT_TOKENS to also set the context window of unrecognized model IDs that start with claude-, such as a gateway's claude-sonnet-latest"
        },
        {
          "kind": "変更",
          "text": "Changed /login to ask for permission to change your privacy settings"
        },
        {
          "kind": "変更",
          "text": "Changed /cost, $.session.usage(), --max-budget-usd and the cost and token metrics to count a mod's $.model.complete and $.model.classify calls"
        },
        {
          "kind": "変更",
          "text": "Changed the programs that Claude Code's sandbox starts for its own use, such as its network bridge, to run without Claude Code's sign-in tokens and API keys in their environment"
        },
        {
          "kind": "変更",
          "text": "Changed ripgrep, local git commands and the sandbox runtime's own helper programs to run without the mTLS client key's passphrase in their environment"
        },
        {
          "kind": "変更",
          "text": "Remote Control: Changed /resume and /teleport to disconnect first when the connected session has a share link, or when that can't be checked; run /remote-control to connect again"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Code on the web, cloud scheduled tasks and Cowork cloud sessions to start despite sandbox.failIfUnavailable: the hosted container has no command sandbox"
        },
        {
          "kind": "変更",
          "text": "Changed requests for settings, permission rules, hooks or status over a cloud or self-hosted session's connection to return less or be refused; what applies in the session is unchanged"
        },
        {
          "kind": "変更",
          "text": "Changed claude -p with no cached account data to wait for that data before its first request, so a first run in a clean environment can start a few seconds later"
        },
        {
          "kind": "変更",
          "text": "Changed Claude's instructions to keep files you'll want out of its temporary scratchpad folder, which can be cleared"
        },
        {
          "kind": "変更",
          "text": "Changed marketplace ref to accept the full ID of any commit on a branch or tag; clients before this version can't clone such a pin, so a marketplace pinned this way stops loading there"
        },
        {
          "kind": "変更",
          "text": "Changed plugin marketplace and plugin downloads to use a CONNECT tunnel when ALL_PROXY is the only proxy set; a proxy that refuses CONNECT now fails them"
        },
        {
          "kind": "変更",
          "text": "Changed -p and SDK runs in a worktree or submodule mounted into a container to apply .claude/settings.local.json allow rules only once the folder is trusted"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runners to refuse a session whose session folder or repository path is a symbolic link, other than a checkout hook's checkout"
        },
        {
          "kind": "変更",
          "text": "Removed \"ask your admin to raise it\" from spend limit and shared budget errors in cloud sessions and under Remote Control"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added prompt suggestions wherever the terminal shows them: Tab accepts the suggested next prompt; promptSuggestionEnabled: false in Claude Code's settings.json turns them off"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Console sign-in that creates no API key"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a field to paste the redirect URL when signing in to an MCP server from the panel in SSH, WSL and container windows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the model picker's check mark staying on the old model after Claude Code restarted on another model or the model was switched over Remote Control"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the effort selector offering levels above the effort cap set by your organization or the maxEffortLevel setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen offering sign-ins that the managed allowedProviders setting refuses"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the permission prompt for MCP tools not saying why Claude Code asks when a safety check raises the question"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the message for organization settings that couldn't load saying to run a command again; it now says to try again, matching the tab's Retry link"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the note shown for an untrusted folder: it now says why the extension is off and how to turn it on"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the error shown when the system refuses to run Claude Code: it now says your IT team can allow a blocked program"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the sign-in card to say what to do when the browser shows a connection error for localhost"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the install link's marketplace confirmation button to \"Trust marketplace and continue\""
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Fixed new cloud sessions cutting MCP tool descriptions loaded through tool search at 4,096 characters; the limit is now 16,384, as in other Claude Code sessions"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed artifact links pasted in Slack getting no card when the poster's Claude sign-in had expired in a workspace their organization doesn't manage; a plain card now appears"
        }
      ]
    },
    {
      "version": "2.1.323",
      "items": [
        {
          "kind": "追加",
          "text": "Added Code Mode, an experimental opt-in in which Claude writes JavaScript to call its tools; see https://code.claude.com/docs/en/code-mode to turn it on, or to turn it off for an organization"
        },
        {
          "kind": "追加",
          "text": "Added engines[\"claude-code\"] to plugin.json: plugins outside their stated Claude Code version range are not installed, updated or loaded, and install and update pick the newest version that fits"
        },
        {
          "kind": "追加",
          "text": "Added type checking of a plugin's TypeScript hooks module to claude plugin validate; each finding is a warning, and --strict fails on it"
        },
        {
          "kind": "追加",
          "text": "Added to claude plugin validate the $ nouns a mod's engine.create hook adds, withholds or replaces"
        },
        {
          "kind": "追加",
          "text": "Added support for CLAUDE_CODE_AUTO_MODE_MODEL in managed settings for Claude Desktop sessions on third-party providers (takes effect once Claude Desktop includes this version)"
        },
        {
          "kind": "追加",
          "text": "Added an options menu (stop, switch to usage credits, upgrade) when a model needs usage credits that are turned off or used up"
        },
        {
          "kind": "追加",
          "text": "Added a progress heartbeat every 30 seconds while hooks run long in claude -p and SDK sessions, so a host such as Claude Desktop won't end the turn as hung (once it includes this version)"
        },
        {
          "kind": "追加",
          "text": "Added .docx support to Artifact tool asset uploads"
        },
        {
          "kind": "追加",
          "text": "Added a /diff to close hint to the diff panel, and the keys that focus and close a panel to the ? shortcut guide"
        },
        {
          "kind": "追加",
          "text": "Added a start-up warning for Bash allow rules with a * in a variable's value, such as Bash(PORT=* npm run dev)"
        },
        {
          "kind": "追加",
          "text": "Added a warning when a plugin's language server can't start, naming the server and what to check"
        },
        {
          "kind": "追加",
          "text": "Added a one-time startup notice naming CLAUDE_CODE_PERFORCE_MODE when Perforce settings are found and the mode is off"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES (available since 2.1.318): set it to 1 to turn off subagent progress summaries and the requests that write them (anthropics/claude-code#86879)"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_RESUME_HINT_COMMAND, which a program that starts Claude Code can set to have the exit hint name its own resume command"
        },
        {
          "kind": "追加",
          "text": "Added unsetOptionCount to the claude plugin install --json result: how many userConfig options are not yet set"
        },
        {
          "kind": "追加",
          "text": "Added isPromptCovered to the props a mod's pane is drawn with, telling it when a dialog or a field above the prompt covers the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed running /compact again, or after a command such as /context, summarizing away a message that Claude had not answered yet"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed session joining your next message to an old interrupted message that was not resumed"
        },
        {
          "kind": "修正",
          "text": "Fixed a memory spike at the next prompt after Claude changed a very large file"
        },
        {
          "kind": "修正",
          "text": "Fixed a setting saved in a running session undoing a hand edit made to settings.json moments earlier; a settings file you delete during a session now stays deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin commands and claude mcp list signing you out of a Console profile when they ended while the token was being renewed"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit and Bash running out of memory on certain /proc files, and Edit hanging or running out of memory on devices and named pipes"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code failing to start, or to clear stored credentials at sign-out, when saving its configuration file failed with \"Out of memory\""
        },
        {
          "kind": "修正",
          "text": "Fixed requests sent without streaming failing on errors that streamed requests recover from, such as a rejected image, thinking block or beta header"
        },
        {
          "kind": "修正",
          "text": "Fixed ExitWorktree, the worktree exit dialog and /resume leaving the session in the wrong folder when the folder the shell was in before entering the worktree had been deleted"
        },
        {
          "kind": "修正",
          "text": "Fixed accents and other combining marks sometimes landing left of the text, leaving stale copies on screen, or silently disappearing when text wraps"
        },
        {
          "kind": "修正",
          "text": "Fixed the last key of a key chord, such as Enter in ctrl+x enter, acting on a dialog's text field when the chord's own action isn't available there"
        },
        {
          "kind": "修正",
          "text": "Fixed ps processes piling up when the process listing Claude Code runs before stopping a command takes too long"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent transcripts and large tool results being saved apart from the session's transcript after entering a worktree created by a WorktreeCreate hook or belonging to a nested repository"
        },
        {
          "kind": "修正",
          "text": "Fixed a session on a named Anthropic profile moving to another sign-in when /fork, the Left arrow or --bg continued it in the background; reopen any session that was open during the update"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session sending a conversation under another sign-in when its named Anthropic profile is missing, changed or overridden; it now stops and says so"
        },
        {
          "kind": "修正",
          "text": "Fixed a session on an API key, auth token or workload identity from its shell (not a setup token) moving to another sign-in in the background; it now stops and says so"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls ending in the sign-in server's error, such as TOKEN_EXPIRED, instead of asking you to sign in again"
        },
        {
          "kind": "修正",
          "text": "Fixed an expired claude.ai login showing \"Credit balance too low\" when a saved Console key or ant auth login profile without credit was used instead"
        },
        {
          "kind": "修正",
          "text": "Fixed a session on a named Anthropic profile being handed to an older background service that could not keep its sign-in; it now says to restart the service"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session's sign-in leaving the previous account's login or other credentials in place; it now clears them for every session on the computer, and a refused sign-in can leave no login"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions moving between a profile and the stored login when an update restarted them"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions opened before a sign-in keeping signed-out feature flags after the sign-in"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions that kept failing after a Claude apps gateway sign-in expired: once you sign in again with /login in another terminal, they carry on at the next message"
        },
        {
          "kind": "修正",
          "text": "Fixed the billing notice naming your ant auth login organization when a custom X-Api-Key header is set"
        },
        {
          "kind": "修正",
          "text": "macOS: Fixed \"Not logged in · Please run /login\" coming back right after a successful /login or a token refresh when the keychain was slow to answer"
        },
        {
          "kind": "修正",
          "text": "Fixed turns failing in Claude Desktop when an organization's gateway answers an expired token with 403: Claude Code now asks Desktop for a fresh token and retries"
        },
        {
          "kind": "修正",
          "text": "Fixed the error shown when Amazon Bedrock refuses your account a model: it no longer says to refresh your AWS credentials, it says to enable the model"
        },
        {
          "kind": "修正",
          "text": "Fixed the awsAuthRefresh or gcpAuthRefresh command sometimes running twice for one request when three or more sessions needed a fresh sign-in at once"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude -p warning about an ended claude.ai login to say that claude auth logout also removes saved MCP server logins and plugin secrets"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission prompts offering \"don't ask again\" for commands that write to sensitive paths such as .git or .claude, where the saved rule did not stop the next prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where some lsof commands ran without a permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands that write a file with cat > file <<EOF being shown as \"Read 1 file\""
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Bash permission checks judged an rm from the wrong folder and skipped the dangerous-removal prompt under bypass permissions or a Bash allow rule"
        },
        {
          "kind": "修正",
          "text": "Fixed --permission-mode auto or a settings defaultMode: auto starting in a mode that could allow more when auto mode was unavailable. It now starts in Manual mode, which asks first"
        },
        {
          "kind": "修正",
          "text": "Fixed plan files sometimes being written outside the project when plansDirectory is set; a write that can't be shown to stay inside the project is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed a permission prompt when Claude read the output of its own background command or agent after entering a worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Bash permission checks missed part of a command"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where the Bash sandbox could switch off during a session"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash allow rules with an attached wildcard, such as Bash(ls*), skipping the permission prompt in some cases; a rule that names a variable, such as Bash(NODE_ENV*), now asks"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode running behind a gateway at ANTHROPIC_BASE_URL on a model whose gateway name contains \"haiku\"; such a model, other than claude-haiku-5-5, is now refused, as Haiku 4.5 is"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash deny and ask rules missing some commands run through sudo, env and similar wrappers"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash allow rules written with combined sudo flags skipping the permission prompt in some cases"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox.excludedCommands letting a command that it does not name run outside the sandbox in some cases"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where the Write and Edit tools could write to a path covered by a Read deny rule"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a Bash command ran without a permission prompt for zsh users with certain non-default shell options set"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash sandbox not fully protecting Claude Code's own config on installs still using the legacy config file"
        },
        {
          "kind": "修正",
          "text": "Fixed a permission prompt from a mod's tool.check hook naming every plugin hooked on the tool instead of the one that asked"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands being able to read Claude Code's file checkpoint copies under the config directory"
        },
        {
          "kind": "修正",
          "text": "Fixed a rewind sometimes changing your permission mode"
        },
        {
          "kind": "修正",
          "text": "Fixed project settings sometimes being read through a symbolic link that leads to a different folder than the one Claude Code checked"
        },
        {
          "kind": "修正",
          "text": "Fixed HTTP hooks failing with HTTP 500 on Linux when CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set and sandbox.enabled is off"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p and the Agent SDK running Bash unsandboxed when --settings or SDK settings that turn the sandbox on fail validation; Claude Code now stops at start-up and names the invalid setting"
        },
        {
          "kind": "修正",
          "text": "Fixed /export silently stopping early after a long run of calls to an MCP tool that is no longer loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed earlier MCP tool calls missing from a resumed conversation, and lines repeating in scrollback, when the server connects late"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add --help splitting long example commands across lines in narrow terminals and pipes, so a pasted example ran without its header"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins with defaultEnabled: false staying off in a claude.ai chat's cloud session after you turn them on in claude.ai"
        },
        {
          "kind": "修正",
          "text": "Fixed /fast on and /fast off on Vertex not asking a plugin's config.set hook, as the /fast menu does"
        },
        {
          "kind": "修正",
          "text": "Fixed documents created through the Claude Docs connector not opening in your browser when you work in a terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed the misleading \"not cached\" error for a plugin only a repository's settings enable: it now says it isn't installed, gives the install command, and shows in text and stream-json -p runs"
        },
        {
          "kind": "修正",
          "text": "Fixed mods being able to reword Claude Code's own confirmation questions"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hot reload sometimes ignoring a file created just after a failed reload"
        },
        {
          "kind": "修正",
          "text": "Fixed marketplaces named npm, pip, uv, cargo, github or gh being refused as reserved names"
        },
        {
          "kind": "修正",
          "text": "Fixed a stopped MCP call, or a stopped shell command in fullscreen, reading as \"Called\" or \"Ran\" in a collapsed tool group: it now says no result was recorded and shows its input"
        },
        {
          "kind": "修正",
          "text": "Fixed load errors of plugins enabled by managed settings going only to the debug log in SDK and Desktop sessions: init.plugin_errors now lists them"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin installs hiding what a plugin's install command wrote to stderr when that command succeeded, such as a note that the plugin has no skills yet"
        },
        {
          "kind": "修正",
          "text": "Fixed one malformed entry in a plugin marketplace's renames map making Claude Code ignore the marketplace's other renames"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --bg --safe-mode sessions stopping at startup to ask about project MCP servers that safe mode never starts"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP link prompts offering Accept for non-http links without saying the link wouldn't open"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp and /plugins opening an MCP server's page with the cursor on \"Disable\" when the server needs authentication but still holds its sign-in; the page now offers \"Reconnect\" and opens on it"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins with a version list in enabledPlugins staying off with no message: /plugin and claude plugin list now say why"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins and marketplaces failing to install on Windows when the path of a cloned file reaches 260 characters"
        },
        {
          "kind": "修正",
          "text": "Fixed a Stop pressed right after sending a message showing as an error in remote and SDK sessions while a UserPromptSubmit or plugin prompt hook was still running"
        },
        {
          "kind": "追加",
          "text": "Fixed an MCP server staying disconnected with no tools after an Agent SDK app or claude -p caller removed and re-added it, when a tool call had tried to reach it in between"
        },
        {
          "kind": "修正",
          "text": "Fixed text-output claude -p runs printing nothing to stderr when a --plugin-dir mod's hook hangs or crashes the hooks worker"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK sessions giving an MCP server named by --allowedTools or an mcp_tool hook less than 2s before the first turn when settings lowered CLAUDE_CODE_MCP_STARTUP_WAIT_MS after start-up"
        },
        {
          "kind": "修正",
          "text": "Fixed headless sessions ending when an SDK host sent a null entry in an MCP server's tools list"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch dropping empty table cells and shifting later values a column left"
        },
        {
          "kind": "修正",
          "text": "Fixed temporary files of a session that had changed directory being left behind when the session expired under cleanupPeriodDays"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings (managed-settings.json, managed-settings.d) sometimes being missed at start-up while another program was rewriting the file: start-up now reads such a file a second time"
        },
        {
          "kind": "追加",
          "text": "Fixed .claude/settings.local.json not being ignored globally when the folder became a git repository later, or on a new machine"
        },
        {
          "kind": "修正",
          "text": "Fixed /diff waiting for Claude to finish before closing the diff panel in fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed /memory showing wrong or roundabout paths for folders whose names start with the working directory's or home folder's name, and losing slashes in the file path on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed a broken emoji character in a tool call's parameter name being resent with later requests, which strict JSON parsers reject"
        },
        {
          "kind": "修正",
          "text": "Fixed a collapsed tool call looking as if it ran after you rejected it with a reason: it now shows \"Not run · rejected\""
        },
        {
          "kind": "修正",
          "text": "Fixed a case where part of a saved session could be lost on NFS or FUSE file systems when Claude Code discarded a reply"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch not rechecking organization policy and CLAUDE_CODE_DISABLE_WEB_FETCH at each call"
        },
        {
          "kind": "修正",
          "text": "Fixed file titles, app names and session names in @-mentions from claude.ai and the desktop app sometimes being treated as text you typed"
        },
        {
          "kind": "修正",
          "text": "Fixed a multi-row status line being pushed off screen by a long prompt in the fullscreen renderer"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where certificate errors behind a TLS-inspecting proxy persisted when the proxy itself is reached over https://"
        },
        {
          "kind": "修正",
          "text": "Fixed Pro and Max accounts being offered feedback drafts that their organization would refuse"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome's policy message telling people to contact their admin when no admin setting can turn it on"
        },
        {
          "kind": "修正",
          "text": "Fixed the artifact preview sometimes opening a different artifact than the one Claude just published"
        },
        {
          "kind": "修正",
          "text": "Fixed certificate name-constraint errors being retried for minutes; they now fail at once with a message that says what to fix"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --teleport opening an empty session when the server could not find the session's history, and claude -p --teleport exiting without an error when the resume failed"
        },
        {
          "kind": "修正",
          "text": "Fixed a misspelled keybinding modifier, such as ctl+k, binding the bare key; the binding is now ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed /btw answers and recaps sometimes including earlier replies from the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed start-up requests switching from an organization's managed proxy and CA settings to user-set ones when a read of the managed settings file failed"
        },
        {
          "kind": "追加",
          "text": "Fixed Claude giving a wrong reason when a new message interrupted a file it was sending you"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-running a turn that a hook's continue: false had stopped"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told that automatic model switching is off when safeguards stopped a subagent whose model had no other model to switch to"
        },
        {
          "kind": "追加",
          "text": "Fixed the changed-files list of remote sessions leaving out files added with git add -N before the first commit"
        },
        {
          "kind": "修正",
          "text": "Fixed some Claude in Chrome tool calls, such as browser_batch, not showing the tool's name in the fullscreen transcript (ctrl+o) or in a subagent's progress"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent progress summaries skipping an update when the reply took between 10 and 20 seconds"
        },
        {
          "kind": "修正",
          "text": "Fixed claude doctor and /status saying a linked managed settings file is still read when it could not be read"
        },
        {
          "kind": "修正",
          "text": "Fixed an interactive --chrome session giving no reason for starting without Claude in Chrome when your organization's policy turns it off: a line now says so"
        },
        {
          "kind": "修正",
          "text": "Fixed the /rewind list on network paths and hung folders: it named every tracked file as changed, was slow to show labels, and showed none at all when a file read never returned"
        },
        {
          "kind": "修正",
          "text": "Fixed --debug and --debug-file replacing a file named latest in the debug log's folder"
        },
        {
          "kind": "修正",
          "text": "Fixed a timed-out feedback send being reported as too large; it now says the request timed out"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode cutting off an announcement when the system clock moved forward while it was being read"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode dropping dictated or pasted text, and emoji, typed into an answer to a question or permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed the name label under permission and plan dialogs hiding part of some agent names"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where pressing Ctrl+C just as claude update finished removed the claude command"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen header naming the session's effort level for a viewed subagent on a different model, which that subagent doesn't use"
        },
        {
          "kind": "修正",
          "text": "Fixed the model picker and /model showing a picked effort level that CLAUDE_CODE_EFFORT_LEVEL overrides"
        },
        {
          "kind": "修正",
          "text": "Fixed the tip after a slow worktree creation suggesting a sparsePaths list without .claude, which left worktrees without your project settings and rules"
        },
        {
          "kind": "修正",
          "text": "Fixed the newest model's highlight missing from the /model picker"
        },
        {
          "kind": "修正",
          "text": "Fixed /upgrade and Ctrl+clicked links in fullscreen failing silently when no browser can open: the address is now shown"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's JSON logs escaping newlines and other control characters in a message twice"
        },
        {
          "kind": "修正",
          "text": "Fixed terminal control sequences in a subagent's message taking effect instead of showing as plain text when the message is expanded"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome setup saying /chrome finishes the connection; it now tells you to restart with claude --chrome"
        },
        {
          "kind": "修正",
          "text": "Fixed the Option-key hint appearing while typing ø or π inside words on Danish, Norwegian, Faroese and Greek keyboard layouts"
        },
        {
          "kind": "修正",
          "text": "Fixed a Claude Desktop session getting stuck as busy after another of your sessions sent it the same message twice or many messages at once"
        },
        {
          "kind": "修正",
          "text": "Fixed long tool results staying on disk after a session run with --no-session-persistence; they are now removed on normal exit, Ctrl+C or SIGTERM"
        },
        {
          "kind": "修正",
          "text": "Fixed PreCompact, PostCompact and post-compaction SessionStart hooks not receiving agent_id and agent_type when a subagent compacts"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_TRANSCRIPT_LOCAL_GC dropping messages from the saved transcript when another process rewrote the file while it was being trimmed"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Now using usage credits\" notice repeating or not showing past the weekly Fable limit when Claude Code made a quick side request on a smaller model, such as naming the session"
        },
        {
          "kind": "修正",
          "text": "Fixed Fable's weekly limit showing no reset time and no options menu in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed a wait chosen in the usage limit menu silently moving to a later reset when its request was refused; the menu now opens"
        },
        {
          "kind": "修正",
          "text": "Fixed the spend limit menu offering a lower limit when your current limit couldn't be loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage hiding limit bars for setup tokens and CLAUDE_CODE_OAUTH_TOKEN: it keeps the session and weekly bars and says why the rest are missing"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage showing a whole-session percentage beside a subagent type's name, and saying sessions ran 8 hours when it only counts hours with requests"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed sessions showing as disconnected for a minute or more after a network change such as switching Wi-Fi or reconnecting a VPN"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control showing nothing while Claude Code asks whether to use usage credits: the question now also shows in the Claude app"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control showing a session as running while it waited on a permission prompt that can only be answered in the terminal"
        },
        {
          "kind": "追加",
          "text": "Remote Control: Fixed claude remote-control reconnecting as a new computer when restarted in the same folder more than 4 hours after it stopped; it now keeps its identity for up to 30 days"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed sessions left running at shutdown, and finished sessions holding their slot, when the disk stops responding"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed other devices and phone notifications not showing what Claude is asking permission for when DISABLE_TELEMETRY or DO_NOT_TRACK is set"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed the host exiting, or stopping reading a session's output, in verbose or debug mode when a tool call's command was a number, boolean or object"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed a host that could stall after sessions failed to start in folders on a filesystem that had stopped responding"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed sessions from the desktop app showing as idle on your phone while background subagents were still running"
        },
        {
          "kind": "修正",
          "text": "Fixed the Agent SDK's managedSettings ignoring the Remote Control, agent view, Workflows and Artifact off switches"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry export failing silently when an otlp exporter had an endpoint but no OTEL_EXPORTER_OTLP_PROTOCOL: it now defaults to http/protobuf"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry export to the default localhost:4318 endpoint going through a configured proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed one malformed OTEL_RESOURCE_ATTRIBUTES entry dropping all of that variable's attributes from the OpenTelemetry resource; the others are now kept, and /status names the one left off"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry user_prompt events and interaction spans recording a background agent's reply when OTEL_LOG_ASSISTANT_RESPONSES=0"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry exports failing when a proxy took over 10 seconds to reach the collector; it now has 25 seconds, also the most that OTEL_EXPORTER_OTLP_TIMEOUT can allow (previously 30)"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry agent.name showing a user-defined subagent's name instead of custom when an official plugin's skill launched it"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents showing a status from an earlier turn after a session resumes"
        },
        {
          "kind": "修正",
          "text": "Fixed read-only git commands needing approval, or being refused under claude -p, when CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set on Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents losing a typed prompt: Esc now needs a second press to clear it, and ctrl+y restores it"
        },
        {
          "kind": "修正",
          "text": "Fixed the move-to-background key doing nothing in claude attach and claude agents sessions; to detach with Ctrl+B d, press d within 800 ms of Ctrl+B"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions ignoring a DISABLE_ERROR_REPORTING set only in your shell when the background service started without it"
        },
        {
          "kind": "修正",
          "text": "Fixed false \"needs input\" notifications in claude agents after replying to a blocked session, and repeated ones after a background turn ended with no text and only basic tools such as Bash or Read"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p silently using another model in text output when settings block the requested one; it now warns on stderr"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p printing notes about deniedModels and availableModels entries on every run; /status and claude doctor still list them"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed some file-reading Bash commands running without a permission prompt when given a wildcard or a list of files"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed Claude Code running a .cmd or .bat wrapper found beside a program's .exe in the same PATH folder (a git.cmd next to git.exe, say); it now runs the .exe, as cmd.exe would"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed shell commands failing with \"Working directory was deleted\" on drives where a folder's real path can't be resolved"
        },
        {
          "kind": "修正",
          "text": "Fixed a cloud session's history becoming unreadable if its machine stopped just after the history was rewritten"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks from an ended session sometimes not running after another session in the same folder used /clear, /resume or /branch"
        },
        {
          "kind": "修正",
          "text": "Fixed an approved plan being answered with \"You are not in plan mode\" when the approval arrived after the session's process had restarted, in cloud, self-hosted runner and SDK sessions"
        },
        {
          "kind": "修正",
          "text": "Cloud sessions: Fixed an answer to Claude's question being lost after a restart in a long conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed a message dropping out of a cloud session's conversation when the session restarted before Claude replied"
        },
        {
          "kind": "修正",
          "text": "Cloud sessions: Fixed Claude saying an attached image is missing when the message names its file"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed cloud session making a model call nobody asked for when files arrived right after a chat's first reply"
        },
        {
          "kind": "修正",
          "text": "Fixed streamed replies in cloud sessions missing text from the middle when the session's container shut down partway through a reply"
        },
        {
          "kind": "修正",
          "text": "Fixed skill files sent from Cowork cloud sessions sometimes failing to upload on the first try"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Reverted the exit code of an on-demand runner whose work order was superseded to 1; 2.1.321 and 2.1.322 had changed it to 0"
        },
        {
          "kind": "改善",
          "text": "Improved sign-in errors in /login and claude setup-token for a rejected, unreachable or timed-out request: they now say what happened and what to check"
        },
        {
          "kind": "改善",
          "text": "Improved Bash permission checks so the same command more reliably gets the same answer on a slow or busy machine"
        },
        {
          "kind": "改善",
          "text": "Improved Bash permission checks: some commands that could run differently from how they were checked now ask for permission"
        },
        {
          "kind": "改善",
          "text": "Improved /mcp to show how many of a server's tools were left out because the API would reject their input schema, and why"
        },
        {
          "kind": "改善",
          "text": "Improved the \"Not now\" choice when Claude Code asks to turn on the mods it writes in a session: it now says when they load"
        },
        {
          "kind": "改善",
          "text": "Improved the error for an MCP tool call whose connector ID is mistyped by a character or two: for a server that the host application registered, it now names the tool to call"
        },
        {
          "kind": "改善",
          "text": "Improved Claude Desktop and cloud sessions for claude.ai accounts with more than 2,000 plugins turned on: a shorter wait at startup, and Claude can now say why plugins are missing"
        },
        {
          "kind": "改善",
          "text": "Improved memory use with many subagents: a finished subagent's transcript is freed sooner instead of staying in memory while later subagents run"
        },
        {
          "kind": "改善",
          "text": "Improved installing with the install script: the latest version is no longer downloaded twice"
        },
        {
          "kind": "改善",
          "text": "Improved WebFetch speed and memory use on deeply nested pages"
        },
        {
          "kind": "改善",
          "text": "Improved the cleanupPeriodDays cleanup to count folders it can't read as errors"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's /v1/models to state max_input_tokens for models whose context window is certain on every upstream"
        },
        {
          "kind": "改善",
          "text": "Improved ToolSearch to say when a tool Claude searched for by its short name is already available, instead of only reporting no match"
        },
        {
          "kind": "改善",
          "text": "Improved start-up on Linux when /home is an autofs map: Claude Code no longer looks up files in /home itself. Set CLAUDE_CODE_AUTOMOUNT_ROOTS for a map root deeper than one folder below /"
        },
        {
          "kind": "改善",
          "text": "Improved the Fable limit message in -p, SDK, IDE and cloud sessions: it now says when the limit resets, along with how to continue"
        },
        {
          "kind": "変更",
          "text": "Changed /security-review to ask before Claude runs it, and skills' inline git commands to stop in bare-repository worktrees and similar folders until you allow them, outside auto mode and bypass"
        },
        {
          "kind": "変更",
          "text": "Changed how many messages each of your sessions on the same machine can send the others without a prompt from you, from about 20 to 100,000"
        },
        {
          "kind": "変更",
          "text": "Changed the number of messages a Claude Desktop Code tab session can send to your other sessions before it waits for you to type again from 20 to 100,000"
        },
        {
          "kind": "変更",
          "text": "Changed organization settings and policy requests to no longer use a proxy set only by ALL_PROXY; set HTTPS_PROXY if your network needs a proxy for them"
        },
        {
          "kind": "変更",
          "text": "Changed the context window assumed for a model ID that Claude Code doesn't recognize from 200K to 1M; use /autocompact to compact earlier, or CLAUDE_CODE_DISABLE_1M_CONTEXT=1 to keep 200K"
        },
        {
          "kind": "変更",
          "text": "Changed sessions on other vendors' models with a smaller window: once full, they can fail every turn until /clear, so set CLAUDE_CODE_DISABLE_1M_CONTEXT=1 before they fill"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Code's own ripgrep and most internal git commands to run without most of its sign-in tokens and API keys, so a credential helper or hook under such a git command no longer finds them"
        },
        {
          "kind": "変更",
          "text": "Changed MCP_SDK_GENERATION=v1 to run the v2 MCP client in a compatibility mode (earlier handshake, relaxed OAuth sign-in checks), because the v1 MCP client is removed"
        },
        {
          "kind": "変更",
          "text": "Changed the tool Claude uses to finish an MCP server sign-in so that it asks you to confirm, even in bypass and auto modes; where nobody can be asked, such as in dontAsk mode, use /mcp"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed a session at a connector's approval prompt or sign-in inside a running tool to be released as paused at the idle or lifetime limit; a late answer resumes from a fresh clone"
        },
        {
          "kind": "変更",
          "text": "Changed artifact updates to ask first, even under an allow rule, when people outside your organization can see the artifact or Claude can't check who can"
        },
        {
          "kind": "変更",
          "text": "Changed glab config set without --global or --host, and glab config edit --local, to fail read-only inside the Bash sandbox; run them outside it"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox on macOS, Linux and WSL to ignore write access granted through a symlink in a writable folder that leads elsewhere or to a missing path; grant the real path instead"
        },
        {
          "kind": "変更",
          "text": "Changed \"don't ask again\" so an allow rule that looks like it holds a secret, or would be saved to a settings.local.json that git tracks, lasts for the session only and isn't saved"
        },
        {
          "kind": "変更",
          "text": "Changed the sandbox on macOS and Linux: git worktree add, move and remove now fail read-only, as do commits in a worktree the session wasn't started in or given, even one inside the project"
        },
        {
          "kind": "変更",
          "text": "Changed start-up to stop when a --settings file isn't valid JSON and has a sandbox key, even one that turns the sandbox off"
        },
        {
          "kind": "変更",
          "text": "Changed what happens when a tool's permission check fails with an error after a PreToolUse hook returned \"allow\": Claude Code now decides the call as if no hook had answered"
        },
        {
          "kind": "変更",
          "text": "Changed what happens when a tool's permission check fails on input that a PermissionRequest hook rewrote: Claude Code now asks again, or refuses the call where nobody can answer"
        },
        {
          "kind": "変更",
          "text": "Changed the GitLab merge request badge to show only for the repository a sandboxed session opened in"
        },
        {
          "kind": "追加",
          "text": "Changed the claude mcp add --help example to a local command"
        },
        {
          "kind": "追加",
          "text": "Changed mods: a *, namespace or negated hook on engine.create now only observes. To add or withhold a $ noun, hook engine.create by name"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin validate to fail a mod whose engine.create hook isn't written in the one accepted form; installed mods keep loading"
        },
        {
          "kind": "変更",
          "text": "Changed marketplace and plugin installs to fail when a git submodule isn't on the commit its repository records"
        },
        {
          "kind": "変更",
          "text": "Changed project (.mcp.json) MCP server approvals to match the server's exact name; an approval entry written in another spelling now asks again"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runners under --trust-workspace false and VS Code sessions in an untrusted folder: the repository's settings can no longer disable your hooks or turn plugins on or off"
        },
        {
          "kind": "追加",
          "text": "Changed tool.list plugin hooks so the tools they add or remove apply to the model and every agent"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin install and /plugin to show a warning instead of success when a plugin's install command writes to stderr"
        },
        {
          "kind": "変更",
          "text": "Changed claude.ai chats and Cowork tasks to check a plugin file for secret keys before sending it, and to ask first if it may hold one"
        },
        {
          "kind": "変更",
          "text": "Changed claude rm and the agents view to say a session is removed from the list, not deleted; claude rm help says the conversation is kept and claude --resume lists it"
        },
        {
          "kind": "変更",
          "text": "Changed /stickers to say that the sticker pack is all claimed for now, instead of opening a page in the browser"
        },
        {
          "kind": "変更",
          "text": "Changed a managed settings policyHelper to no longer take environment variables from user or --settings files; set what it needs in managed env or the launching shell"
        },
        {
          "kind": "変更",
          "text": "Changed a /skill or @file typed between two files picked in claude.ai or the desktop app, or after a picked file and a link, to no longer take effect"
        },
        {
          "kind": "変更",
          "text": "Changed split-pane agent teammates to check that requests come from their team lead: one that outlives its lead has its asks refused, and plan approvals must be re-sent after /clear or /resume"
        },
        {
          "kind": "変更",
          "text": "Changed worktree creation to refuse checkouts whose .git folders are links or hold hard links, such as git-new-workdir layouts and cp -al copies; use a plain clone"
        },
        {
          "kind": "変更",
          "text": "Changed what Claude is told after safeguards stop a forked skill or a workflow agent: retry with a narrower prompt or tell you, instead of doing the work itself"
        },
        {
          "kind": "変更",
          "text": "Changed browser tool calls (Claude in Chrome, the desktop browser pane) to refuse some escaped or JSON-text inputs and tell Claude how to respell them"
        },
        {
          "kind": "変更",
          "text": "Changed workflows so that a prompt an app marks as not typed no longer reaches their agents as your request"
        },
        {
          "kind": "変更",
          "text": "Changed computer use on macOS to refuse key chords that hold Space with Control or Option, and more system shortcuts that need your grant"
        },
        {
          "kind": "変更",
          "text": "Changed first-run setup in Terminal.app to name the \"Use Option as Meta key\" setting, what Option stops typing, and how to undo it before you agree"
        },
        {
          "kind": "変更",
          "text": "Changed the maximum of CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS from 64000 to 300000"
        },
        {
          "kind": "変更",
          "text": "Changed workflows in the desktop app's Code tab to pause at a usage limit and continue after it resets"
        },
        {
          "kind": "変更",
          "text": "Changed the spend limit and 1M context errors, and /usage-credits, in cloud sessions and under Remote Control: they no longer give a web address"
        },
        {
          "kind": "変更",
          "text": "Changed which MCP servers are reported by name in OpenTelemetry exports to follow the current connector directory"
        },
        {
          "kind": "変更",
          "text": "Changed /logout in a background session, which had no effect: it now signs out every session on the computer, deletes stored MCP logins and plugin secrets, and ends the session, as in a terminal"
        },
        {
          "kind": "変更",
          "text": "macOS: Changed the Bash sandbox so lsof and similar tools may show less about processes a command did not start"
        },
        {
          "kind": "変更",
          "text": "Changed cloud scheduled tasks: a PostToolUse hook from your own settings can no longer replace the plan in ExitPlanMode's result"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_AUTOCOMPACT_PCT_OVERRIDE in Anthropic-hosted cloud sessions to stop applying to auto-memory extraction and, in some sessions, to /btw; the main conversation still follows it"
        },
        {
          "kind": "変更",
          "text": "Removed the subagentStatusLine setting: subagent rows always use the default look, and settings files that still hold the key load as before"
        },
        {
          "kind": "変更",
          "text": "Deprecated a plugin's agent setting: it still applies, and now warns at startup, in claude plugin list and in claude plugin validate"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Claude Code trust prompt before the first session in a folder you haven't trusted; declining leaves the folder's settings and MCP servers unused"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the live output of a running Bash or PowerShell command to the chat, under the command's card"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a response that was discarded because its tool call could not be parsed still showing after Claude retried"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a queued message missing from a conversation or fork when it directly followed a compaction summary"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"Buy usage credits on claude.ai\" button counting as agreement to pay for Fable while usage credits were off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"extensions want to relaunch the terminal\" warning coming back on open terminals after every window reload or restart"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed \"Couldn't load this conversation's saved history\" appearing in a new chat whose Claude process had restarted before the first prompt"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen showing the login choices again after a pasted code; it now shows \"Signing in…\" until the sign-in finishes"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"You've hit your Fable limit\" line staying in the VS Code and JetBrains panels after you pick another model"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Fable usage warning in the VS Code and JetBrains panels naming usage credits when they're off or used up"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the diff tab not opening for multi-line edits on files with CRLF line endings"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed dictation continuing to record after switching sessions"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved sign-in errors behind TLS-inspecting proxies: a certificate failure now says what to do, as the terminal does"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed opening a Claude Code on the web session in a folder where Claude Code's sandbox is on: the extension no longer switches to the session's branch for you, and the dialog says why"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the message when a file fails to upload to a cloud or Remote Control session: it now gives the reason, such as too many pages, a password or a time-out"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved adding a repository Claude can't access to a cloud session: a short message and a Reconnect GitHub button replace the long error"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed self-hosted sessions staying on \"Starting Claude Code\" after it had started, when you reopened a paused session without sending a message"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed a paused session in a self-hosted environment sometimes still showing \"Sending\" and a Stop button under the \"Session paused\" banner"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Fixed pull request updates from GitHub Enterprise Server linking to github.com in cloud sessions; new updates link to your own server"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Improved the message when some network secrets can't be added to a new cloud environment: it lists each host, says why where it can, and stays until you dismiss it"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed very large GitHub Actions job logs and run log archives failing to download or being cut off in cloud sessions"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the new-session repository picker when GitHub single sign-on hides organizations: it now says so even with other repositories listed, and links to reconnect GitHub"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Fixed new cloud sessions started from the iOS app with a repository not getting a branch of their own"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed an open cloud or Remote Control session's page staying \"Disconnected\" after a few minutes of failed connections; it now tries to reconnect by itself"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed Try again on an open cloud or Remote Control session's \"Connection lost\" card sending \"Try again\" as your message; it now tries to reconnect instead"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed the Stop button disappearing from a cloud session five minutes into a reply that had shown nothing yet while Claude was still working"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed an approval prompt sometimes disappearing from a tab left open after a self-hosted runner released the session while it waited for your answer"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a failure notification when a scheduled task's run can't start because its settings require a sandbox that isn't available where it runs"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the Git providers page when your GitHub sign-in has expired: it now asks you to reconnect instead of silently hiding organizations you can link"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed removing a repository from a scheduled task silently moving its GitHub trigger to another repository; Save now waits until you pick one"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed git clones and fetches that take longer than ten minutes in a cloud session sometimes being cut off at the very end"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added the No repository option to the repository picker for new sessions on a self-hosted environment"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a warning to a cloud session's Delete dialog when deleting it will pause scheduled tasks that run in that session"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed your own session saying its environment was deleted when you deleted nothing; it now says your computer is no longer connected"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed some sessions still showing as running in the session list after the computer disconnected before Claude started; they now show an error mark or as idle"
        },
        {
          "kind": "追加",
          "text": "[Remote Control] Added a Try again button to the error shown when the computer running your session is signed out of Claude Code"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added Claude Tag sessions started in Slack to the Compliance API on Enterprise plans, in beta: list the sessions and read their transcripts"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a confirmation step when an admin turns off Claude Tag for the organization, with a dialog that says what stops"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed scheduled tasks in a Slack channel moved between Enterprise Grid workspaces failing to use Slack until someone posted there"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Approve and post card in a DM with Claude appearing for private or Slack Connect channels, where Claude can't post; Claude now gets the reason and shows no card"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Retry button to a Slack channel's Configure page for when its settings fail to load"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Scope filter to the Network events tab of Claude Tag's Activity page, so admins can download one scope's events instead of the whole organization's"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Remove connector in Claude Tag admin settings being refused when access bundles also held its credentials; it now removes those set on the connector and leaves the bundles' own"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Channels tab in Claude Tag admin settings splitting a workspace from its channels across pages; channels now appear right under their workspace"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Set for Claude Tag link on the Cloud environments admin page not leading to the environment setting; it now opens the Slack page's Advanced tab, where you set it"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added a Download CSV button to Code Review admin settings: export review costs per repository by month, week or day, for one repository, one GitHub organization or all"
        }
      ]
    },
    {
      "version": "2.1.322",
      "items": [
        {
          "kind": "追加",
          "text": "Added fast mode on Vertex in the global, us and eu regions, falling back to standard speed if Vertex refuses it"
        }
      ]
    },
    {
      "version": "2.1.321",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Fable 5.2 (claude-fable-5-2), now the default Fable model — 1M context, $8/$40 per Mtok with $0.20/Mtok cache reads"
        },
        {
          "kind": "追加",
          "text": "Added --settings <file> to claude remote-control, which applies a settings file to every session it starts; if the file changes, no new session starts until you restart claude remote-control"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP OAuth requests sending secrets such as refresh tokens to another host when a server redirected them"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a read-only Bash command ran outside the sandbox without a permission prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Bash permission checks judged a file write from the wrong folder and didn't prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed deny rules and protected-file prompts not applying to the file that a cp or mv into a directory writes"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Draws from usage credits\" note showing after a switch to Fable on Enterprise seats whose plan includes Fable"
        },
        {
          "kind": "修正",
          "text": "Fixed the fallback model sometimes declining a request or mentioning a stopped response when the first model was blocked before replying"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp login printing a SEP-2352 issuer warning each time you sign in again to a server that Claude Code registered with"
        },
        {
          "kind": "修正",
          "text": "Fixed NotebookEdit deleting or overwriting a notebook's first cell when the call named no cell, on network paths (UNC shares, WSL folders, /net mounts)"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit changing the first of several matches, replacing a whole file on an empty old_string, or editing a notebook as text, on network paths (UNC shares, WSL folders, /net mounts)"
        },
        {
          "kind": "追加",
          "text": "Fixed /config showing Manual as the default permission mode when new sessions start in auto mode; pressing Space on \"Auto (default)\" now saves Don't Ask, not Plan"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed FileChanged hooks stopping for paths set through watchPaths after the first shell command, when the session's working directory had a lowercase drive letter"
        },
        {
          "kind": "修正",
          "text": "Fixed --plugin-dir . and --plugin-dir ./builtin writing generated type files for Claude Code's built-in plugins into a builtin folder"
        },
        {
          "kind": "修正",
          "text": "Fixed context usage estimates overcounting tool definitions when exact token counts are unavailable"
        },
        {
          "kind": "修正",
          "text": "Fixed /compact showing twice in Remote Control on web and mobile"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin auto-updates and /plugin marketplace updates downloading a plugin again for each worktree or folder of a repository"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode losing a background subagent's report that had started a turn when the conversation was compacted before Claude answered it"
        },
        {
          "kind": "修正",
          "text": "Fixed project skills, commands and agents staying missing after their folder was removed and came back mid-session, such as with git stash, including after entering a worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p sometimes telling Claude that background commands get 30 minutes when they are stopped after 10"
        },
        {
          "kind": "修正",
          "text": "Fixed pkill, pgrep and pidwait in cloud sessions matching the session's own parent processes"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome and computer use server processes staying alive after their parent exits behind a proxy that stalls connections"
        },
        {
          "kind": "修正",
          "text": "Fixed a large hook output pointing Claude to a file that held another hook's output from the same tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed apps that embed Claude Code getting their own PreToolUse hook's ask reason instead of another hook's when both asked"
        },
        {
          "kind": "修正",
          "text": "Fixed a PreToolUse hook's ask being lost when another hook's defer finished first and could not be honored"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare crash on permission prompts and background tasks"
        },
        {
          "kind": "修正",
          "text": "Fixed project skills, commands and agents disappearing from the menu in SDK and desktop sessions after Claude entered a worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed /desktop on macOS saying Claude Desktop is not installed when it is in ~/Applications"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry repository attributes (vcs.*) missing from Claude Desktop sessions that start on a pre-started process"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch passing \"No response from model\" to Claude as page content when the model reading the page returned no text; the call now fails with a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode delaying the prompt at startup when the system clock moved back while Claude Code was starting"
        },
        {
          "kind": "修正",
          "text": "Fixed a command's panel sometimes not coming back after a dialog closed, leaving no panel or prompt on screen until the next redraw"
        },
        {
          "kind": "修正",
          "text": "Fixed a project's MCP server being disconnected after the first message in a Claude Desktop Code tab session when the desktop app has an MCP server or extension of the same name"
        },
        {
          "kind": "修正",
          "text": "Fixed a turn ending with \"API Error: EPROTO: The TLS handshake failed\" when the connection broke partway through a reply; the partial reply is kept or the request is retried, as before 2.1.302"
        },
        {
          "kind": "修正",
          "text": "Fixed high memory use in long sessions that repeatedly read single lines from large files"
        },
        {
          "kind": "修正",
          "text": "Fixed fast mode losing replies, switching models or retrying for minutes when fast serving is rate-limited, overloaded or failing; it now tries standard speed on the same model first"
        },
        {
          "kind": "修正",
          "text": "Fixed one request carrying far more background agent reports than intended after Claude was stopped while several were waiting"
        },
        {
          "kind": "修正",
          "text": "Fixed messages from a Claude Desktop Code tab session to your other sessions staying paused after you typed while Claude was still working"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents ignoring --permission-mode, --dangerously-skip-permissions, --model, --effort or --agent typed before agents when a flag such as --verbose was also on the line"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Remote Control showed as off with \"login expired\" in the desktop app while its connection was still up, because the app was briefly unable to hand over a sign-in token"
        },
        {
          "kind": "修正",
          "text": "Fixed a Remote Control message sent with \"Queue for later\" reaching Claude in the middle of the running turn"
        },
        {
          "kind": "修正",
          "text": "Fixed the git status given to Claude at session start reading as clean when git status failed; it now reads as unavailable"
        },
        {
          "kind": "修正",
          "text": "Fixed the git status given to Claude at session start showing the first listed file as staged when its changes were not staged"
        },
        {
          "kind": "修正",
          "text": "Fixed a hang or out-of-memory crash when a connector in a cloud session lists resources with very long names"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control showing as connected after its connection closed for good while the session's history was still uploading"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode turning off when you return to a conversation from agent view"
        },
        {
          "kind": "修正",
          "text": "Fixed screen reader mode y/n questions taking as yes a stray \"y\" at the end of text typed as the question opened"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions telling Claude that a host is probably not allowed when it is allowed and the network proxy could not connect to it"
        },
        {
          "kind": "修正",
          "text": "Fixed an MCP server sometimes showing as connected with no tools after it was reconnected or the session's directory changed while its tools were still loading"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands sometimes running in the wrong folder when Claude sent several at once and an earlier one changed folders"
        },
        {
          "kind": "修正",
          "text": "Fixed files Claude sends from cloud and Remote Control sessions failing at once when an upload gets an HTTP 507 from a proxy; the upload now gets a second try"
        },
        {
          "kind": "追加",
          "text": "Fixed new messages not being saved, and claude -p, SDK and VS Code sessions hanging, when memory ran out while the transcript was being read"
        },
        {
          "kind": "修正",
          "text": "Fixed sign-in, token refresh and logout waiting indefinitely when something on the network accepts the connection but never answers the TLS handshake"
        },
        {
          "kind": "修正",
          "text": "Fixed a sent file showing under a different name in the Claude apps when its name hid text-direction or control characters; Claude now refuses to send such a file"
        },
        {
          "kind": "修正",
          "text": "Fixed sub-agent progress summaries running a request to its end after the model replied with a tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash reads such as grep -r foo \"$PWD/src\" asking for permission when the same command with the path typed out runs without asking"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway refusing to start when a desktop setting holds a field newer than the gateway, such as a managed MCP server's oauth.omitResource; it now warns and serves it"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands coming back empty for zsh users whose .zshrc sets KSH_OPTION_PRINT"
        },
        {
          "kind": "修正",
          "text": "macOS: Fixed \"Unable to read managed policy settings\" at startup when a valid MDM profile was slow to read: the read is retried once, and a timeout is now reported as a timeout"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view erasing another agent view's saved input text when it restarted for an update with nothing typed"
        },
        {
          "kind": "修正",
          "text": "Fixed remote sessions giving no reply after a restart when a UserPromptSubmit hook blocked a replayed permission answer; these hooks no longer run on that replay"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control accepting a y typed without Enter at its first-run question when the terminal's input ended"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop not showing spend limit warnings behind a Claude apps gateway whose policy has no code: rules"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen sessions with some plugins ending with an error when a tool result that had got shorter scrolled off the top of the screen"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt suggestions making extra API requests when the model replied with a tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed PreToolUse mcp_tool hooks on stdio and HTTP MCP servers being skipped when their answer was over 16 MiB; the tool call is now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed skill and command names holding a Bamum letter that some fonts draw as blank: they are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p on Linux exiting 0 in silence when a full NFS export or a used-up NFS quota lost transcript lines: it now prints an error and, in text and json output, exits 1"
        },
        {
          "kind": "修正",
          "text": "Fixed background agents being reported as stopped by the user, and refused a resume, when a service interrupted a cloud session and nobody pressed Stop"
        },
        {
          "kind": "修正",
          "text": "Fixed NotebookEdit reporting success to hooks and telemetry when the edit failed, for example when the notebook changed while the permission prompt was open"
        },
        {
          "kind": "修正",
          "text": "Fixed a blank screen or no answer at startup, and empty claude mcp list output, when a stored MCP sign-in record was null"
        },
        {
          "kind": "追加",
          "text": "Fixed the Artifact tool telling Claude to add filters when an artifact's database collection is too large to sort; it now says to read the collection page by page and sort the results"
        },
        {
          "kind": "修正",
          "text": "Fixed a restarted cloud session dropping a message with a large image when the restart came before Claude's first reply to it"
        },
        {
          "kind": "修正",
          "text": "Fixed a restarted cloud session leaving a subagent's message to the main conversation unanswered"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when you stop or pause a running workflow, so it no longer says the workflow is still running"
        },
        {
          "kind": "改善",
          "text": "Improved the /model picker: \"More models\" is now an unnumbered row below every other, and older models open under it without renumbering the rest"
        },
        {
          "kind": "改善",
          "text": "Gateway: Improved spend limits on a busy replica, which now skips fewer checks and records spend sooner"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's sign-in limit messages in Claude Code and on the /device page: they no longer name gateway settings, which the gateway's own log still names"
        },
        {
          "kind": "改善",
          "text": "Improved claude install and the install scripts: they finish 2 to 4 seconds sooner"
        },
        {
          "kind": "追加",
          "text": "Improved how soon a Remote Control session whose process crashed can pick up a new message"
        },
        {
          "kind": "改善",
          "text": "Windows: Improved startup and first-command time by finding programs on PATH without starting a helper process"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode in headless sessions, the desktop app and VS Code: reports from background subagents that wait together are answered in one model call, as in the terminal"
        },
        {
          "kind": "改善",
          "text": "Improved the agent view's row for a claude --bg --worktree session that couldn't set up its worktree: it now shows the error from its beginning, not an internal tag or its last 200 characters"
        },
        {
          "kind": "改善",
          "text": "Improved the messages shown when an artifact is in another organization: /login is offered only if it's one of yours, and Claude now says where a copy may be after an account move"
        },
        {
          "kind": "変更",
          "text": "Improved sessions with more images than fit in one request: Claude is told whether it has already seen a dropped image, and repeat reads of an unchanged image are limited"
        },
        {
          "kind": "改善",
          "text": "Improved claude remote-control's messages for an unanswered first-run question: each now says what to do next"
        },
        {
          "kind": "改善",
          "text": "Improved start-up time by loading trusted TLS certificates faster"
        },
        {
          "kind": "改善",
          "text": "Improved Claude apps gateway error messages to show the gateway's address without any user name or password"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's spend limit error: the reset now shows in your local time, such as \"resets 4pm (America/Los_Angeles)\""
        },
        {
          "kind": "改善",
          "text": "Windows: Improved startup time with a standard Git for Windows install by no longer checking which git.exe to run on every launch"
        },
        {
          "kind": "その他",
          "text": "Updated the session-feedback message and the allowedProviders setting description to name Ultra alongside Pro and Max, and the forceLoginMethod description to cover every paid Claude plan"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled dataviz skill to suggest a list of meters, one row per item, for several ratios that each have their own limit"
        },
        {
          "kind": "その他",
          "text": "Updated the \"Upgrade to Max\" options to say \"Upgrade to Max or Ultra\""
        },
        {
          "kind": "変更",
          "text": "Changed mods Claude writes to turn on without asking in auto and bypass modes, even with managed allowUnsandboxedCommands: false or allowManagedDomainsOnly, and not to load in dontAsk mode"
        },
        {
          "kind": "変更",
          "text": "Changed mods' own tool calls ($.tool.call, $.mcp.call) to raise no permission prompt, even under your own ask rules or in dontAsk and -p runs; deny rules and organization policy still apply"
        },
        {
          "kind": "変更",
          "text": "Changed saved Fable 5.1 model picks to move to fable: on Pro and Max plans at once, on Team and Enterprise plans once your organization allows it; use /model claude-fable-5-1 to switch back"
        },
        {
          "kind": "変更",
          "text": "Changed the fast mode labels in /fast, /config and /model to name your current model when it supports fast mode, and removed \"(Opus only)\" from the VS Code row"
        },
        {
          "kind": "変更",
          "text": "Changed nested skill loading: .claude/skills folders inside ~/.claude/plugins no longer load when Claude works on files there"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed an on-demand runner that the server refuses because it is not needed (session ended or paused, work order superseded) to exit 0 instead of 1"
        },
        {
          "kind": "変更",
          "text": "Windows: Changed how Claude Code finds programs it starts itself, such as git, to skip relative and UNC PATH entries and links onto a network share, and to pick up PATH changes from settings"
        },
        {
          "kind": "変更",
          "text": "Changed OpenTelemetry hook events in non-interactive sessions to leave two built-in hooks out of num_hooks and num_success after Bash and PowerShell calls"
        },
        {
          "kind": "変更",
          "text": "Changed the number of messages a Claude Desktop Code tab session can send to your other sessions before it waits for you to type again from 10 to 20"
        },
        {
          "kind": "変更",
          "text": "Changed AskUserQuestion in claude -p and SDK sessions to deny a host's permission answer that sets the undocumented afkTimeoutMs input field"
        },
        {
          "kind": "追加",
          "text": "Changed managed extraKnownMarketplaces: a declared name can't be added from another source, an entry from elsewhere is hidden, and plugins the declared marketplace lists are reinstalled from it"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome tools that an app running Claude Code provides, such as the Claude desktop app's Code tab, to follow your organization's Claude in Chrome policy"
        },
        {
          "kind": "追加",
          "text": "Changed policy_mode: layered in the Claude apps gateway: managed MCP servers now add up over every matching policy, match: {} included, so a gateway already on it serves more after the upgrade"
        },
        {
          "kind": "変更",
          "text": "Gateway: Changed Bedrock, Vertex and Foundry upstreams to ignore the ANTHROPIC_*_BASE_URL variables in the gateway's environment. Set base_url on the upstream to use another endpoint"
        },
        {
          "kind": "変更",
          "text": "Changed headless sessions to reload mods in .claude/skills when their files change; set CLAUDE_CODE_PLUGIN_DIR_WATCH=0 to turn this off"
        },
        {
          "kind": "変更",
          "text": "Changed the Cyber Verification Program sentence on a cyber safeguard block to use the same words as claude.ai"
        },
        {
          "kind": "変更",
          "text": "Changed Cowork cloud sessions: a PostToolUse hook can no longer replace the answer to AskUserQuestion or the plan in ExitPlanMode's result; Claude reads the originals"
        },
        {
          "kind": "変更",
          "text": "Changed cp and mv spelled by a path, such as /bin/cp, to get the same path checks as cp and mv"
        },
        {
          "kind": "変更",
          "text": "Changed background command notifications and TaskStop results to show Claude only the start and end of a command over 1,000 characters, which saves context"
        },
        {
          "kind": "変更",
          "text": "Changed artifact design guidance to treat Inter and Space Grotesk as good default typefaces"
        },
        {
          "kind": "変更",
          "text": "Changed the account email check to refuse only a shell command that holds your email and names a User-Agent, without asking, so other commands and scheduled runs no longer stop at its prompt"
        },
        {
          "kind": "変更",
          "text": "Changed Remote Control sessions to keep the folder they were started in: a connected client can no longer move a session to another folder"
        },
        {
          "kind": "変更",
          "text": "Changed managed extraKnownMarketplaces take-overs from an undeclared source: saved data is set aside for cleanupPeriodDays, and options and secrets until claude plugin restore-set-aside"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a warning above the prompt box when both an auth token and an API key are set, matching the terminal's startup warning"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a plugin's permission request showing a name with hidden characters: it now reads \"a plugin\""
        }
      ]
    },
    {
      "version": "2.1.319",
      "items": [
        {
          "kind": "変更",
          "text": "Changed auto mode with telemetry or feature flags off, including behind LLM gateways: calls the server can't check are asked about or denied, with no fallback to the built-in classifier; set CLAUDE_CODE_AUTO_MODE_SERVER=0 to keep using it (Bedrock, Vertex and Foundry are unchanged)"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode behind an LLM gateway: CLAUDE_CODE_AUTO_MODE_SERVER=1 turns on the server-side check even with CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS set; if managed settings set the latter, they must set the 1 too"
        },
        {
          "kind": "追加",
          "text": "Added support for MCP tasks in the terminal: when an MCP server runs a tool call as a task, Claude Code moves it to the background right away and tells Claude the result when it finishes"
        },
        {
          "kind": "追加",
          "text": "Added the CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND environment variable to make Claude Code wait for an MCP task inside its tool call instead of moving it to the background right away"
        },
        {
          "kind": "追加",
          "text": "Added permissions.denyInsteadOfPrompting setting: a tool call that would wait on a permission prompt is denied and the turn continues, in terminal sessions, subagents and teammates"
        },
        {
          "kind": "追加",
          "text": "Added /claude-api latency-optimize to find where your Claude API code makes people wait and try faster settings against your eval"
        },
        {
          "kind": "追加",
          "text": "Added the CLAUDE_CODE_DISABLE_FEATURE_FLAGS environment variable, which stops feature-flag fetching without turning off telemetry; every flag then uses its built-in default"
        },
        {
          "kind": "追加",
          "text": "Added spend for today, this week and this month to /usage for developers behind a Claude apps gateway who have no spend limit, when the gateway runs this version or later"
        },
        {
          "kind": "追加",
          "text": "Added admin.pooled_conflict_rule and admin.pooled_priority_order to the Claude apps gateway, to set which pooled group budget pays first for a developer in several groups"
        },
        {
          "kind": "追加",
          "text": "Added an optional login_notice setting to the Claude apps gateway that shows an operator-defined message on the gateway's browser verification page and on Claude Code's sign-in screen"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_GATEWAY_LOG_FORMAT=json to the Claude apps gateway: operational log lines become JSON with severity, time and message, for log collectors that read the level from a field"
        },
        {
          "kind": "追加",
          "text": "Added a Claude apps gateway boot warning for a case where another policy's availableModels also allows a custom model id that one policy lists by name"
        },
        {
          "kind": "追加",
          "text": "Added start-up warnings to the Claude apps gateway for policies with no desktopHome that rely on coworkTabEnabled: false or chatSessionRetentionDays, ahead of Claude Desktop's November 10 change"
        },
        {
          "kind": "追加",
          "text": "Added a warning when your claude.ai login ends and Claude Code continues on the sign-in from ant auth login, which bills usage to your Claude Console organization"
        },
        {
          "kind": "追加",
          "text": "Added a line at startup naming the Claude Console organization that is billed in a case where Claude Code uses the sign-in from ant auth login"
        },
        {
          "kind": "追加",
          "text": "Added an \"Earlier in this session\" row to /tasks that lists finished subagents, so you can reopen one and message it even after it leaves the list or you restart"
        },
        {
          "kind": "追加",
          "text": "Added a note to /loop confirmations in cloud sessions that a timer stops with its container, with an offer of a loop that survives"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers on the older handshake failing to connect, or returning empty results, because Claude Code declared an extension that it only uses with newer servers"
        },
        {
          "kind": "修正",
          "text": "Fixed a long-running MCP tool call on a claude.ai connector sometimes never reporting its result after --resume"
        },
        {
          "kind": "修正",
          "text": "Fixed a session's diff failing to load on claude.ai and the mobile apps when the folder Claude Code runs in has a file or folder named HEAD"
        },
        {
          "kind": "修正",
          "text": "Fixed /diff showing \"Diff unavailable\" when a git repository has a file or folder named HEAD at its top level"
        },
        {
          "kind": "修正",
          "text": "Fixed the /diff pane opening blank in sessions where 64 or more turns edited files"
        },
        {
          "kind": "修正",
          "text": "Fixed slash commands typed after a leading space, tab or newline being sent to Claude as plain text instead of running"
        },
        {
          "kind": "修正",
          "text": "Fixed a request that kept failing with a 401 refreshing your login on every retry and causing 401s in your other sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed /context sending its full visual grid to Claude on every later turn; Claude now reads only the table"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p exiting 0 in auto mode when its actions were refused because no safety check was available: text and JSON output now exit 1"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Claude Code listed every project file at start on Linux for projects on a network file system (NFS, SMB, Lustre and similar)"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where auto mode was wrongly refused when a client sent a model change and a request for auto mode back to back"
        },
        {
          "kind": "修正",
          "text": "Fixed /status showing \"Auto mode server: Enabled\" when the server-side review isn't reaching the session, for example behind an LLM gateway that drops it"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude-drafted feedback, surveys and /feedback continuing to appear after the server refused feedback for your organization"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude drafting feedback on third-party gateways, where it can't be sent"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode refusing actions without saying why when permission rules or autoMode settings are very large: it now explains and, unless autoMode deny rules are set, asks you in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Bash deny and ask rules missed commands written with quoted words"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent hand-back reports showing an internal marker and provenance note when expanded outside verbose mode"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p --resume with a prompt losing a deferred tool call when its MCP server is missing: the run now exits 1, keeps the call and refuses later input"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where text was dropped from informational messages sent to SDK clients"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where Agent SDK hosts got a generic exit-code error instead of a failed run's own error message when the disk was full"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-running a turn that was interrupted in plan mode when the session resumes in another permission mode"
        },
        {
          "kind": "修正",
          "text": "Fixed edits to a settings file being ignored when made within a few seconds of Claude Code writing that file"
        },
        {
          "kind": "修正",
          "text": "Fixed a config file left at the legacy name hiding your setup with no warning: Claude Code now says on stderr when a home holds two config files, and which is in use"
        },
        {
          "kind": "修正",
          "text": "Fixed ~/.claude.json, settings and edited files ending up empty or cut off when the disk fills during a save in a read-only folder or to a bind-mounted file (one session saving at a time)"
        },
        {
          "kind": "修正",
          "text": "Fixed Write ending the turn as a refusal when it couldn't read the file to overwrite"
        },
        {
          "kind": "修正",
          "text": "Fixed background Bash commands that finish almost instantly losing their output while being reported as completed"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash tool's diff of changed files missing a file that the command wrote just before it ended"
        },
        {
          "kind": "修正",
          "text": "Fixed a mistyped model name, such as opus-5-5, telling you to update Claude Code instead of suggesting the model you meant"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where NotebookEdit changed the wrong cell when the notebook changed while a permission prompt was open"
        },
        {
          "kind": "修正",
          "text": "Fixed a ~0.5s hang after pressing Enter on the /login success screen: the dialog now dismisses immediately and the post-login refresh runs in the background"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+G not opening the external editor while typing an \"Other\" answer to a question in screen reader mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Monitor's WebSocket watch failing with \"could not resolve\" behind a proxy when CLAUDE_CODE_PROXY_RESOLVES_HOSTS is set and the machine has no DNS of its own"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin eval warnings suggesting max: 0 for a tool that must not be called, which could never pass"
        },
        {
          "kind": "追加",
          "text": "Fixed background plugin auto-update not installing a dependency added by the updated plugin version"
        },
        {
          "kind": "修正",
          "text": "Fixed Cmd+click not opening links in Ghostty over tmux in sessions opened from the agents view"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's hot reload in .claude/skills missing a file that was deleted just after it appeared, and missing its return"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind failing with \"No files were restored\" when restoring code to a checkpoint from before /branch"
        },
        {
          "kind": "修正",
          "text": "Fixed the /claude-api skill saying Console web settings don't apply to Managed Agents sessions, and tightened its credential and permission examples"
        },
        {
          "kind": "修正",
          "text": "Fixed needless permission prompts for read-only commands wrapped in a plain timeout DURATION, such as timeout 30 rg foo"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch describing claude.ai shared-chat links as empty pages; it now says shared chats can't be read and to paste the conversation instead"
        },
        {
          "kind": "修正",
          "text": "Fixed Artifact database calls being re-sent to artifacts without a database; errors now say whether republishing helps"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where artifact database reads that save to a folder (out_dir) were refused"
        },
        {
          "kind": "修正",
          "text": "Fixed detailed beta tracing not presenting CLAUDE_CODE_CLIENT_CERT to collectors that require a client certificate"
        },
        {
          "kind": "修正",
          "text": "Fixed the OpenTelemetry claude_code.session.count metric counting Agent SDK prewarm() processes that were never claimed; a pre-started process now counts once, when it is claimed"
        },
        {
          "kind": "修正",
          "text": "Fixed /clear killing running commands of background agents, teammates and workflows that keep running, and foreground subagents of background agents and teammates"
        },
        {
          "kind": "修正",
          "text": "Fixed a terminal whose Claude apps gateway sign-in had expired sending telemetry and managed-settings requests that the gateway refused and logged as invalid_token"
        },
        {
          "kind": "修正",
          "text": "Fixed the agents view appearing to send a reply to a background session waiting on a permission prompt; the reply now stays in the box with a hint to open the session and answer"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view removing a draft saved by another agent view in the same directory when exiting"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where agent view came back with another agent view's input text after restarting itself for an update"
        },
        {
          "kind": "修正",
          "text": "Fixed the agents view preview cutting off long commands, results and status lines without an ellipsis, and dropping **, backticks and tags from commands waiting for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome reporting the extension as not connected when the connection dropped mid-action; Claude now checks the page before repeating an action that may have run"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions still showing \"Limit reached\" on other devices after a usage limit was lifted outside the session"
        },
        {
          "kind": "修正",
          "text": "Fixed the file card sometimes missing in the Claude iOS app when Claude sent a single file"
        },
        {
          "kind": "追加",
          "text": "Fixed self-hosted runner sessions failing with no explanation when the server keeps refusing to renew model access: the runner now retries sooner and posts a warning in the session"
        },
        {
          "kind": "修正",
          "text": "Fixed /permissions in cloud sessions replying only that it isn't available; it now says where the session's rules live and how to change them"
        },
        {
          "kind": "追加",
          "text": "Fixed cloud sessions losing session-scoped deny and ask permission rules, such as those a PermissionRequest hook adds, when the session moves to a new worker"
        },
        {
          "kind": "修正",
          "text": "Fixed mod hot-reloading turning off for the session when you typed three messages instead of answering its question in a cloud session"
        },
        {
          "kind": "修正",
          "text": "Fixed background tasks that keep running after /clear disappearing from the task list in Claude Code on the web until another task started or ended"
        },
        {
          "kind": "修正",
          "text": "Fixed hidden commands appearing in the slash command menu of cloud sessions on mobile and web"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where /rewind could restore or delete a file through a directory symlink"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a sed command could skip the permission check in accept-edits and auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where CLAUDE_CODE_AUTO_MODE_SERVER=1 in managed settings was ignored behind an LLM gateway when the gateway's URL is set only there and server-managed settings can't be fetched"
        },
        {
          "kind": "修正",
          "text": "Fixed a Bash permission bypass where a crafted environment prefix could hide part of a command from permission checks"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where deny and ask rules, hook matchers and disallowedTools entries written with a claude.ai connector's terminal name (mcp__claude_ai_Slack) were ignored in Claude Desktop (takes effect once Claude Desktop includes this version)"
        },
        {
          "kind": "修正",
          "text": "Fixed a sandbox escape when creating a worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runners: --trust-workspace false now also stops hooks in the repository's settings files and skills from running"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where idle background sessions started through a shell-exported LLM gateway left the gateway after an update"
        },
        {
          "kind": "修正",
          "text": "Fixed help links in /status and the auto mode billing notice opening only part of the address when they wrap"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where certificate errors behind a TLS-inspecting proxy persisted when CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC was set. With it set, Claude Code now makes a TLS handshake with the configured API host after a certificate failure, through your http:// proxy if one is set; it sends no API request"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control exiting silently with status 0 when a first-run question gets no answer (scripts, services, batch jobs, Ctrl+C); it now says why and exits 1"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control ignoring a piped y that has no newline after it at the first-run question; it now counts as a yes"
        },
        {
          "kind": "追加",
          "text": "Fixed /rename reporting plain success when the new name could not be saved to the session transcript; it now warns that the new name may not last"
        },
        {
          "kind": "修正",
          "text": "Fixed ${CLAUDE_PLUGIN_ROOT} not being substituted in a plugin-provided subagentStatusLine command, which can now reference the plugin's own scripts"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin update and /plugin \"Update now\" not installing dependencies added by the new plugin version"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents being told after compaction to expect a completion notice for background agents they neither started nor took over"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a background agent's later report was lost silently: the notification now says it was refused and how to ask for it"
        },
        {
          "kind": "改善",
          "text": "Improved config saves on Windows: Claude Code waits longer for a file another program has open, so a kill during a save is less likely to leave ~/.claude.json empty"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome after a brief disconnect: it waits up to 6 seconds for the session's own browser to return before picking another"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: javascript_tool results of up to 60,000 characters now stay in the conversation instead of being saved to a file"
        },
        {
          "kind": "改善",
          "text": "Improved claude purge and the clean-up of old sessions to retry a folder that could not be fully deleted, and to report it as an error if it remains"
        },
        {
          "kind": "改善",
          "text": "Improved the refusal for a path outside the working directories on macOS and Windows: when only its letter case differs from a path inside them, the message names that spelling"
        },
        {
          "kind": "改善",
          "text": "Improved the contrast of faint gray secondary text, such as hints, details in /stats, /model and /sandbox, and rejected-action messages"
        },
        {
          "kind": "改善",
          "text": "Improved the artifact database error when an update targets a document that does not exist, and when the service pauses repeated refused writes"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's warnings about a failed upstream call: each now names the upstream, not only its provider"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's spend limit error: it reads \"spend limit reached · resets Dec 1\", then admin.blocked_message if one is set"
        },
        {
          "kind": "改善",
          "text": "Improved the /model picker: older models are now grouped under a \"More models\" row instead of being listed after the current ones"
        },
        {
          "kind": "改善",
          "text": "Improved /context at the terminal so the table Claude reads stays short: each list keeps its 10 largest rows, and MCP tools that load on demand share one row per server until they're called"
        },
        {
          "kind": "改善",
          "text": "Improved /usage in cloud sessions: it now links to Settings → Usage on claude.ai in a case where plan limits can't be shown"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the confirmation for removing a plugin marketplace: it now checks which of its plugins are installed at that moment"
        },
        {
          "kind": "変更",
          "text": "Changed MCP tasks to work in the terminal without feature-flag fetching (Bedrock, Vertex, Foundry, LLM gateways, DISABLE_TELEMETRY); set CLAUDE_CODE_DISABLE_MCP_TASKS=1 to turn them off"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode so that a project's settings files or a plugin can no longer switch its server-side check back on once you have switched it off outside the project"
        },
        {
          "kind": "変更",
          "text": "Changed Monitor's WebSocket watch to follow a rule on every Bash command: a deny refuses it, and under an ask rule an allow on Monitor, bypass mode or auto mode no longer skips the prompt"
        },
        {
          "kind": "修正",
          "text": "Changed CLAUDE_CODE_PROXY_RESOLVES_HOSTS so that settings files can no longer set it where the host manages the network; set it in the process environment"
        },
        {
          "kind": "変更",
          "text": "Changed a session's exact Bash or PowerShell ask rule to be refused, not asked about, when a broader deny rule covers the command"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash tool to ask for permission before running which with flags outside a lookup/display set"
        },
        {
          "kind": "変更",
          "text": "Changed --add-dir directories to register plugin marketplaces only once that directory's own trust dialog has been accepted"
        },
        {
          "kind": "変更",
          "text": "Changed nested skill loading: with the Bash sandbox on, skills in .claude/skills folders below the starting folder load only if you start Claude Code there or /cd there"
        },
        {
          "kind": "変更",
          "text": "Changed self-paced /loop to end when a turn finishes without rescheduling, instead of scheduling a fallback wakeup; set CLAUDE_CODE_LOOP_KEEPALIVE=1 to keep the old behavior"
        },
        {
          "kind": "追加",
          "text": "Changed PostToolUse hooks to run, with up to 10 seconds to finish, on tool calls that finish after a new message interrupts the turn"
        },
        {
          "kind": "変更",
          "text": "Changed what Claude is told after safeguards stop a subagent: retry with a narrower prompt or tell you, instead of doing the work itself"
        },
        {
          "kind": "追加",
          "text": "Changed cloud sessions to drop session-scoped allow rules at a move to a new worker when their deny and ask rules can't all be kept, so you may be asked again"
        },
        {
          "kind": "変更",
          "text": "Changed the automatic certificate repair behind a TLS-inspecting proxy: it no longer runs when ALL_PROXY is the only proxy variable set. Set HTTPS_PROXY to the proxy's http:// URL instead"
        },
        {
          "kind": "変更",
          "text": "Changed artifact database saves of rows others may have written: each file gets a hidden marker file, and existing files without one, earlier versions' exports among them, are left alone and reported"
        },
        {
          "kind": "変更",
          "text": "Updated /claude-api managed-agents-onboard templates to match the Claude Console: removed Performance tuner, renamed two, and turned off web search and fetch in five whose prompts don't use them"
        },
        {
          "kind": "変更",
          "text": "Removed shortcuts_list and shortcuts_execute, which listed and started shortcuts saved in the extension, from Claude Code's built-in Claude in Chrome tools"
        },
        {
          "kind": "追加",
          "text": "Gateway: Added startup warnings for upstreams that mix AWS GovCloud with other upstreams, and for base URL variables in the gateway's environment"
        },
        {
          "kind": "追加",
          "text": "Gateway: Added a start-up log warning when managed settings name an Amazon Bedrock guardrail in a header, which the gateway doesn't forward, and no bedrock upstream sets a guardrail"
        },
        {
          "kind": "修正",
          "text": "Gateway: Fixed Claude Desktop offering a web search tool that always failed when every upstream is Amazon Bedrock"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed a runner started with --use-anthropic-git-proxy or --configure-git registering before a failed startup check made it exit; it now exits first"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed CLAUDE_RUNNER_CHECKOUT_PATH so that each repository in a session gets its own folder: a folder name already taken in the session gets -2, -3, … at the end"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Removed the end-of-session upload of a session's debug log; a failed session's log stays on the runner host unless --remove-session-state is set"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed prompts over 50,000 characters being cut off silently: the prompt now stays in the chat box with a notice, and a paste over the limit is refused with a notice"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a click on the survey or \"Report a problem\" buttons sending the unfinished prompt"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed cloud sessions opened from the extension's Web tab bringing back turns that /clear, or Retry or Edit of a typed prompt, had removed"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a deleted session's file coming back when that session was renamed in the extension"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Claude carrying out an unapproved plan after a window reload: a step interrupted in plan mode now stops with a notice when the session comes back in another permission mode"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the \"not signed in\" message behind a Claude apps gateway: it now looks like an error and has a Sign in link"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed links in Claude's replies that point at Claude sign-in, connector or API addresses to show as text with the address, instead of opening in the browser"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a possible chat panel freeze when a dropped item's path contains a very long run of \"/\" characters"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the claude-vscode.toggleDictation command starting dictation in every open Claude view at once; it now acts only in the view you are using, and a second press stops it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the chat panel slowing down while a reply with many unclosed $$ math fences, each shorter than the last, streams in"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the chat panel's diagnostics tool for large workspaces: it leaves out files with no problems, returns compact JSON, and accepts an optional minimum severity"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed scheduled tasks silently dropping a connector named memory: runs now keep it, mounted under that name plus a short suffix"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed Send now on a waiting message in cloud sessions ending running background agents; they now keep running"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the stalled-setup warning on self-hosted environments: its link now prefers your organization's default or an environment with a live runner, and names it"
        },
        {
          "kind": "変更",
          "text": "[Code Review] Changed unlinking a GitHub organization to also turn off its All repositories setting in Code Review; it stays off after you relink until you turn it back on"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude Tag setup blocking launch when the channel list couldn't fully load; admins can now launch without picking a channel"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Claude Tag row to the Models admin page for Enterprise orgs with Claude Tag connected, linking to where its model defaults are managed"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed saving auto mode allow rules in Claude Tag admin settings overwriting another admin's changes; the save is now refused with a message"
        }
      ]
    },
    {
      "version": "2.1.318",
      "items": [
        {
          "kind": "追加",
          "text": "Added a record of your answer when Claude Code asks to turn on the mods it writes in a session"
        },
        {
          "kind": "追加",
          "text": "Added assume_role on mantle upstreams of the Claude apps gateway, for a role in another AWS account and for per-developer AWS cost attribution"
        },
        {
          "kind": "追加",
          "text": "Added an effort option to a mod's $.model.fork, so a quick side job can run at low whatever effort the session uses; the result reports the effort sent"
        },
        {
          "kind": "追加",
          "text": "Added the date a stored claude.ai sign-in ends to claude auth status (loginExpiresAt) and to claude -p JSON results (credential_expires_at)"
        },
        {
          "kind": "追加",
          "text": "Added a one-line stderr warning to claude -p text output, starting 10 days before a stored claude.ai sign-in ends"
        },
        {
          "kind": "修正",
          "text": "Fixed --continue sometimes losing the earlier conversation after a malformed tool call's retries ran out (regression in 2.1.314)"
        },
        {
          "kind": "修正",
          "text": "Fixed macOS sessions with many running Bash commands stalling while memory grew"
        },
        {
          "kind": "修正",
          "text": "Fixed permission prompts being answered by keys typed just after sending a message, or before a slow prompt appeared"
        },
        {
          "kind": "修正",
          "text": "Fixed /logout, claude auth logout and claude mcp remove reporting success, and changes to trust, consent or MCP settings being dropped with no word, when the config file could not be updated on a shared network home directory"
        },
        {
          "kind": "修正",
          "text": "Fixed jobs exiting with Not logged in when another terminal or host signs in again to the same account and organization on the same home"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add and remove writing the config without its lock: they now wait for it or exit 1, though another job's save can still replace a saved server"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin commands exiting before a slow token refresh was saved, which could sign you out on the next run"
        },
        {
          "kind": "追加",
          "text": "Fixed claude plugin validate passing a custom-named marketplace file that claude plugin marketplace add rejects"
        },
        {
          "kind": "修正",
          "text": "Fixed stdio MCP servers that exit on the version probe being re-probed on every start; a server that dies in under 3s for its own reason is also pinned to the legacy handshake for 7 days"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions being refused at startup by an allowedProviders list that another login on the same machine had stored"
        },
        {
          "kind": "修正",
          "text": "Fixed idle compaction replacing a conversation with a reply that was not a summary"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Now using usage credits\" notice reappearing about every 30 seconds while a background subagent is running"
        },
        {
          "kind": "修正",
          "text": "Fixed custom slash commands that fail, or that only Claude can invoke, printing nothing in claude -p and SDK sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p and Agent SDK sessions reporting success when an API error cut off a reply while a mod hooked turn.step"
        },
        {
          "kind": "修正",
          "text": "Fixed a message sent right after a model change still running after Stop in headless sessions: Stop now cancels or stops it as it would a queued message"
        },
        {
          "kind": "修正",
          "text": "Fixed a deleted session transcript being re-created with its last prompt when an idle non-interactive session exited"
        },
        {
          "kind": "追加",
          "text": "Fixed claude remote-control hosts, the background daemon and self-hosted runners failing to start new sessions (spawn ENOENT) after an update or version cleanup removed the binary of a still-running process"
        },
        {
          "kind": "修正",
          "text": "Fixed a running Claude Code process owned by another user (for example one left by sudo claude) being treated as dead by version cleanup, which could delete its binary"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-control showing a session as available after a failed connection"
        },
        {
          "kind": "修正",
          "text": "Fixed /design revoke reporting success when the request failed with a 404"
        },
        {
          "kind": "修正",
          "text": "Fixed a shell command approved after a self-hosted runner or cloud session restart running in the session's start folder, not the folder it was asked in; if that folder can't be entered, it is not run"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when an approved connector tool was unavailable after a cloud session restart"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions being stopped in the middle of a turn when the service refuses uploads for several minutes"
        },
        {
          "kind": "修正",
          "text": "Fixed variables a Setup hook writes to CLAUDE_ENV_FILE not reaching the Bash tool in some cloud sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the iPhone app showing a cloud session's turn as finished while it kept running, after a response was cut off at a tool call or a refused image or document was removed"
        },
        {
          "kind": "修正",
          "text": "Fixed a restarted session re-sending a message that failed with an API error, ahead of the newer message waiting behind it"
        },
        {
          "kind": "修正",
          "text": "Fixed a restarted session dropping its interrupted turn when the restart came right after Claude read a large image or retried a tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed every connection failing when the NODE_EXTRA_CA_CERTS file is empty, not PEM, or starts with a damaged certificate: readable certificates are now used, with a warning on stderr"
        },
        {
          "kind": "修正",
          "text": "Fixed workflows re-running finished agents when resumed after a usage limit"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp in cloud sessions counting tools the model can't use; a server's row now shows how many of its tools are available"
        },
        {
          "kind": "修正",
          "text": "Fixed a duplicate notification when Claude left the status field out of a PushNotification call"
        },
        {
          "kind": "修正",
          "text": "Fixed the error for a too-large image in a request with more than 20 images always saying the limit was 2000px; it now shows the API's limit"
        },
        {
          "kind": "修正",
          "text": "Fixed the runtime in background shell details not updating while the dialog is open"
        },
        {
          "kind": "修正",
          "text": "Fixed a mod's turn.step hook making a stopped reply finish as a success in headless runs"
        },
        {
          "kind": "修正",
          "text": "Fixed retention cleanup leaving a home that only runs claude -p with no ~/.claude.json backup: it now takes a fresh backup before deleting the last good one"
        },
        {
          "kind": "追加",
          "text": "Fixed the stored login being replaced by an empty file when a network home directory has no room left for data but still takes new files"
        },
        {
          "kind": "修正",
          "text": "Fixed tokens from setup-token being refused at start on machines with forceLoginOrgUUID, when the token belongs to a permitted organization"
        },
        {
          "kind": "修正",
          "text": "Fixed non-interactive launches replacing a ~/.claude.json that isn't valid JSON with defaults; the start now fails, says how to restore the file, and leaves it as is (anthropics/claude-code#87551)"
        },
        {
          "kind": "修正",
          "text": "Fixed an empty ~/.claude.json with no backup being reported as corrupted; Claude Code now starts as it does when the file is missing"
        },
        {
          "kind": "修正",
          "text": "Fixed the restore command printed for a damaged or missing ~/.claude.json naming an empty or cut-off backup, or failing on a read-only file"
        },
        {
          "kind": "修正",
          "text": "Fixed the sign-in failure when a stored claude.ai login reaches its time limit: it now says so, and in claude -p names claude auth login and claude setup-token"
        },
        {
          "kind": "改善",
          "text": "Improved how ~/.claude.json, settings files and the stored login survive saves on shared network home directories: they are less often deleted, briefly emptied or replaced by a near-empty or older copy"
        },
        {
          "kind": "改善",
          "text": "Improved sessions on network file systems to look again when the configuration file is wrongly reported as missing, so fewer start without your MCP servers and trusted folders"
        },
        {
          "kind": "改善",
          "text": "Improved MCP tool errors: a call made before the tool is loaded now returns its input schema"
        },
        {
          "kind": "改善",
          "text": "Improved the reliability of git commits and pull request creation when the Bash tool runs macOS's built-in /bin/bash"
        },
        {
          "kind": "改善",
          "text": "Improved \"Ask your admin for more usage\" in the usage limit menu to send the request in one step"
        },
        {
          "kind": "改善",
          "text": "Improved how fast remote sessions reconnect after a pause or sleep"
        },
        {
          "kind": "改善",
          "text": "Improved You should know toasts to say \"try again\" instead of \"press 2\", which only works in the terminal"
        },
        {
          "kind": "改善",
          "text": "Improved auto-update reliability: a brief network failure while verifying a release is now retried right away instead of waiting for the next check"
        },
        {
          "kind": "変更",
          "text": "Improved unattended runs (claude -p, SDK apps) to stop rewriting ~/.claude.json on every run when nothing in it changed"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Code to no longer install or update the IDE extension when started in an IDE terminal; use /ide from an outside terminal or your editor's extensions view"
        },
        {
          "kind": "変更",
          "text": "Changed subagents to stop instead of switching models when \"Switch models when a message is flagged\" is set to \"Ask each time\""
        },
        {
          "kind": "変更",
          "text": "Changed background subagents to move a shell command to the background after 3 minutes on all providers, so the prompt cache doesn't expire while it runs"
        },
        {
          "kind": "変更",
          "text": "Changed subagent progress summaries on Bedrock, Vertex, Foundry, or with telemetry off: on a cold prompt cache, one can now wait up to 5 minutes for the subagent's pending response"
        },
        {
          "kind": "変更",
          "text": "Changed what a mod attaches at prompt.submit to stay in the user's turn rather than go out as a system message"
        },
        {
          "kind": "変更",
          "text": "Changed deniedMcpServers URL entries to also block Anthropic-provided servers whose upstream URL matches, and connectors in cloud sessions and on self-hosted runners, where the session is given the connector's own URL; otherwise deny a connector by name"
        },
        {
          "kind": "変更",
          "text": "Changed the /permissions rule details, built-in rules and delete confirmation views to use the standard dialog; pressing Ctrl+C twice there now goes back or cancels instead of quitting"
        },
        {
          "kind": "追加",
          "text": "Changed /claude-api managed-agents-onboard to give a new agent's built-in tools, and a quickstart template's MCP tools, the auto permission policy (\"Judge risky actions\") by default, matching the Claude Console; say \"run without asking\" to opt out"
        },
        {
          "kind": "修正",
          "text": "Removed the 2.1.288 fix that kept the model's earlier thinking when resuming a conversation started on 2.1.286 or earlier; that thinking can now be dropped"
        },
        {
          "kind": "追加",
          "text": "Gateway: Added a log warning when the Google access token from a federation (external_account) credentials file is about to expire"
        },
        {
          "kind": "改善",
          "text": "Gateway: Improved the log hints about listen.trusted_proxies: they now say to list only a proxy that adds the connecting address to X-Forwarded-For itself"
        },
        {
          "kind": "改善",
          "text": "Gateway: Improved the warning when AWS CountTokens fails on Amazon Bedrock: it says Claude Code, not the gateway, counts after the 501, and points at IAM only when AWS denies access"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Added CLAUDE_RUNNER_SPAWN_REASON to the orchestrator's spawn-runner hook environment: why Anthropic sent the request (e.g. runner_lost, resumed); unset when none was sent"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Added a startup warning when --release-idle-session-min is the last argument with no value (still ignored) or has a value of only spaces (still read as 0)"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed the orchestrator's log lines: ok session=… now prints at every log level on stdout (was debug only, stderr) with reason=… after jti=…, and nack session=… ends its fields with reason=… after retryable=…; update scripts that match retryable=true: or retryable=false:"
        },
        {
          "kind": "修正",
          "text": "Remote Control: Fixed a misleading \"spawn error: ENOENT\" when a session's working folder is missing; the error now names the folder"
        },
        {
          "kind": "改善",
          "text": "Remote Control: Improved the title a fork of a terminal fork is created with when the app doesn't set one: \"Name (fork 2)\""
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed a window whose sign-in the organization's settings refuse starting a new Claude Code process in the background every minute"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a long word in the chat panel's error banner pushing its close button out of view"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the sign-in screen to show what Claude Code printed when its sign-in status check fails"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a No repository option: a cloud session on an Anthropic-hosted environment can now start without picking a repository"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added the usual Chrome names to cloud sessions, so tools other than Playwright can find the built-in Chromium through google-chrome and CHROME_PATH"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a New session button to the card shown when a cloud session's environment was deleted, where the message box is hidden"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed reading GitHub Actions logs in cloud sessions: gh run view --log and gh api log requests now get the log in most environments, not an unreachable redirect"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved most Create PR failure messages in cloud and Remote Control sessions: they now give the reason or a link to GitHub instead of saying Try again"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed connector search results to tell Claude that the search covers only part of the connector directory"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed side-by-side checkouts of one repository looking identical in the environment menu's Remote Control rows; each now shows its own folder name"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed keyboard focus and screen reader announcements in Claude Tag admin setup; pressing Escape in the connect form no longer also closes the Add dialog"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the Code Review analytics page to retry once after a server or network failure, then show a Try again banner instead of empty cards"
        }
      ]
    },
    {
      "version": "2.1.317",
      "items": [
        {
          "kind": "追加",
          "text": "Added a warning to /schedule when a new cloud scheduled task gets connectors you did not ask for, with how to remove them"
        },
        {
          "kind": "追加",
          "text": "Added a check that asks before a web or shell tool call sends your account email address to the network"
        },
        {
          "kind": "追加",
          "text": "Added onFailure: \"block\" for Agent SDK hook callbacks, so a callback that fails blocks the action instead of letting it run"
        },
        {
          "kind": "追加",
          "text": "Added a notice in Claude Desktop's Code tab when your organization's remote managed settings haven't loaded for the session, and another once they do"
        },
        {
          "kind": "追加",
          "text": "Added a notice when auto mode's check has no answer for a subagent's tool call, which used to leave nothing in the main view"
        },
        {
          "kind": "追加",
          "text": "Added anthropic.plan, anthropic.seat_type, anthropic.provider and anthropic.custom_base_url to OTel metrics, events and spans"
        },
        {
          "kind": "追加",
          "text": "Added a cost report to the Claude apps gateway admin API, GET /v1/organizations/analytics/cost, for reading past spend over a date range in total, per developer, per day or per IdP group"
        },
        {
          "kind": "追加",
          "text": "Added a daily record of each developer's IdP groups on Claude apps gateways with admin: set, kept for admin.identity_retention_days, which the cost report groups by"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_NESTED_SESSION_ID: set it to 1 on a self-hosted runner to have claude -p run inside a session use that session's ID and transcript, as in earlier versions"
        },
        {
          "kind": "修正",
          "text": "Fixed project and local MCP servers disconnecting after the first turn in some Claude desktop sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode failing every turn when an LLM gateway set as the base URL answers 403 or 422 to its server-side safety check (a 403 with an apiKeyHelper is unchanged)"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth status exiting before a slow token refresh was saved, which could sign you out on the next run"
        },
        {
          "kind": "追加",
          "text": "Fixed a project's effortLevel setting being ignored by sessions that an app starts ahead of time and then opens in the project, such as new sessions in the desktop app's Code tab"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --from-pr reporting \"No conversations found\" in projects with many sessions when the linked session was older than the first page"
        },
        {
          "kind": "修正",
          "text": "Fixed the second of two simultaneous permission prompts showing no file path or command on claude.ai and the mobile apps"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control and SDK hosts offering \"don't ask again\" on a mod's tool calls"
        },
        {
          "kind": "追加",
          "text": "Fixed session titles being lost in cloud and SDK sessions when a new message or Stop arrived while the title was generating"
        },
        {
          "kind": "修正",
          "text": "Fixed self-paced /loop wakeups sometimes not being scheduled when Claude left a field out of its request"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode in cloud sessions stopping for approval when the Artifact tool uploaded, wrote to a database or saved a file through the outputs folder"
        },
        {
          "kind": "修正",
          "text": "Fixed skills synced from claude.ai being lost or downloaded again every ten minutes when they can't be written to disk"
        },
        {
          "kind": "修正",
          "text": "Fixed /schedule leaving a cloud scheduled task's next run time and link out of its results after creating or updating it"
        },
        {
          "kind": "修正",
          "text": "Fixed screen readers speaking a running subagent's elapsed time and token count on every change in screen reader mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a region or network block (HTTP 403) being shown as a sign-in failure; the error now explains the block"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude saying a working claude.ai connector needed authorization or had failed in cloud sessions when a synced plugin included the same server"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p exiting 0 when a full disk or quota lost its transcript or ~/.claude.json writes; it now prints an error and, in text and json output, exits 1. Full NFS exports may be missed"
        },
        {
          "kind": "修正",
          "text": "Fixed edits to settings files made in the first second or so after launch not taking effect until a settings file changed again"
        },
        {
          "kind": "修正",
          "text": "Fixed old transcripts not being cleaned up on machines where some runs skip cleanup, such as runs using --setting-sources"
        },
        {
          "kind": "修正",
          "text": "Fixed deleted agent team inboxes being re-created by a teammate's late message"
        },
        {
          "kind": "修正",
          "text": "Fixed a re-created agent teammate being removed from its team by an earlier shutdown approval"
        },
        {
          "kind": "修正",
          "text": "Fixed stored scheduled tasks being impossible to list or delete after scheduled tasks were turned off"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude deleting your most recently updated /team-onboarding guide when asked to delete one without naming which"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude saying a /team-onboarding guide was deleted when the server refused the delete"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway hiding Amazon Bedrock's \"Input is too long.\" error, which left sessions failing every turn with \"upstream rejected the request\" instead of compacting"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner sessions losing recent turns or the whole conversation when restarted while a plan waited for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Prompt is too long\" after automatic compaction in sessions whose very large CLAUDE.md changed since it was last sent"
        },
        {
          "kind": "修正",
          "text": "Fixed high memory use and slow startup in headless sessions with many plugins that register commands"
        },
        {
          "kind": "修正",
          "text": "Fixed stdio MCP servers receiving an empty AWS_BEARER_TOKEN_BEDROCK when their env config sets it to empty; the variable is now unset, so the server can use the machine's own AWS credentials"
        },
        {
          "kind": "修正",
          "text": "Fixed API requests failing with \"unable to get local issuer certificate\" behind some TLS-inspecting proxies after a root certificate renewal"
        },
        {
          "kind": "修正",
          "text": "Fixed very long conversations losing their earlier summary when compaction had to shorten its own request"
        },
        {
          "kind": "修正",
          "text": "Fixed a PDF's own metadata being able to make Read and @-mentions under-count its pages"
        },
        {
          "kind": "修正",
          "text": "Fixed DISABLE_PROMPT_CACHING_OPUS and DISABLE_PROMPT_CACHING_SONNET having no effect on [1m], other-region and undated spellings of the default model"
        },
        {
          "kind": "修正",
          "text": "Fixed /artifacts and the Artifact tool's shared list showing no shared artifacts when you have 200 or more of your own"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude treating partial Grep and Glob results as complete when a search hit its time limit"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry exports to an https:// endpoint through a proxy never being sent when they started while another export was still in progress"
        },
        {
          "kind": "修正",
          "text": "Fixed a flood of connection attempts to a proxy that blocks (HTTP 403) OpenTelemetry exports to an http:// endpoint"
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry exports hanging indefinitely behind a proxy that never answers; they now time out after 10 seconds, or OTEL_EXPORTER_OTLP_TIMEOUT up to 30 seconds"
        },
        {
          "kind": "追加",
          "text": "Fixed resumed sessions telling Claude again about a file change it already knew about"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude sometimes not using a built-in tool in a resumed session after an earlier call failed because the tool was switched off"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-control answering \"Unknown command\" instead of saying that Remote Control is turned off by the disableRemoteControl setting"
        },
        {
          "kind": "修正",
          "text": "Fixed agent team teammates in tmux or iTerm2 panes starting in auto mode when the lead session was in manual mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session sometimes losing a just-made change of permission mode when it was upgraded or retired"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C stopping all running background agents when pressed to clear typed text at the prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback showing \"Enter to confirm\" while a report is being sent"
        },
        {
          "kind": "修正",
          "text": "Fixed child processes of a stopped shell command sometimes being sent SIGTERM twice, which could make some programs skip their cleanup"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p run inside a cloud or self-hosted runner session sharing that session's ID: it wrote into the session's transcript, and a restart could resume the wrong conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p run inside a cloud or self-hosted runner session generating a title of its own and sending it to that session"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown on Microsoft Foundry when Azure credentials can't be loaded: it now says to check or refresh them, and reports as cloud_credential_error"
        },
        {
          "kind": "変更",
          "text": "Improved /design-sync to say up front when your design system has moved to Claude, and stop before building instead of failing at upload"
        },
        {
          "kind": "改善",
          "text": "Improved the startup error when a required Claude apps gateway can't be reached: it points to the network instead of a sign-in, and says when the gateway's TLS certificate can't be verified"
        },
        {
          "kind": "改善",
          "text": "Improved the \"Resume this session with\" hint shown at exit to repeat the flags you launched with (for example --chrome --debug) ahead of --resume"
        },
        {
          "kind": "追加",
          "text": "Improved how self-hosted runners recover from server errors: after a 5xx other than 501 or 529, a runner's next poll now opens a new connection instead of reusing the one that failed"
        },
        {
          "kind": "追加",
          "text": "Improved how self-hosted runner sessions recover from server errors: after a 5xx other than 501 or 529, a session now opens new connections instead of reusing the one that failed"
        },
        {
          "kind": "追加",
          "text": "Improved how self-hosted runner sessions recover when connections stop answering: after a heartbeat gets no answer, a session now opens new connections instead of trying each idle one in turn"
        },
        {
          "kind": "変更",
          "text": "Changed SendMessage so a message to a running background agent arrives earlier: its running command moves to the background, without being stopped"
        },
        {
          "kind": "変更",
          "text": "Changed subagents and teammates on a different model from the main conversation to use that model's saved effort level or its default, instead of the session's effort level"
        },
        {
          "kind": "変更",
          "text": "Changed exit to skip the \"Background work is running\" prompt for plugin monitors"
        },
        {
          "kind": "変更",
          "text": "Changed the built-in plugin-authoring skill to offer once, after a mod you built works, to help share the mod"
        },
        {
          "kind": "変更",
          "text": "Removed the Read tool's \"file unchanged since your last Read\" stub: reading an unchanged file again returns its content"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed every tool call being refused on some volumes where the native path lookup fails; the working-directory check now compares the folder's identity instead"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed the session scratchpad and other temporary paths growing with your project's path length in sessions not started by Claude Desktop, which made repositories cloned into them hit the 260-character path limit"
        },
        {
          "kind": "修正",
          "text": "Gateway: Fixed the status line and /usage showing a developer's own spend limit as 100% used after their group's pooled budget ran out"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Fixed Claude not seeing the interrupted tool call when a session moves to a new runner and the turn is older than CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Fixed an MCP server that was switched off coming back on after the session moved to a new machine, when the session service had refused to save the switch"
        },
        {
          "kind": "改善",
          "text": "Remote Control: Improved fork names when the app doesn't set one: a long name keeps its \"(fork)\" ending, and in sessions started with claude remote-control a fork of \"Name (fork)\" is \"Name (fork 2)\""
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed forked conversations dropping messages: only one of the tool calls Claude ran in parallel was kept, and the last messages a compaction kept were lost, which could leave Claude's answer without the question it answered"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a message being lost when Claude did not finish starting in time: the extension now starts Claude once more before showing the error"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen opening when a request is blocked for its region or network"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Account panel showing the plan name with a lower-cased second word"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed file links in a Claude tab opening on top of the chat instead of in another editor group"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed attachment chips, menus, banners and dialogs in the Claude panel staying small when chat.fontSize is raised"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed ultrathink not raising effort for its turn or showing its rainbow when telemetry is off"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a link card to cloud sessions, so you can open or decline a link an MCP server asks you to visit instead of the request going unseen"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed the organization environment dialog in admin settings to the personal dialogs' short layout: each section opens from a row, and unsaved input asks before closing"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed adding a network secret for a host that already has one silently replacing it; the Add secret form now refuses and points you to the existing secret"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed new scheduled tasks ignoring your organization's default environment: the form now starts on the one an admin chose instead of the Anthropic-hosted default"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed the next message to an idle session going unanswered after you restart claude remote-control, when you sent it within a minute of your previous message"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed newly pasted artifact links in Slack to show a simpler card with an Open button that opens the artifact in Claude, instead of Slack's side panel"
        }
      ]
    }
  ]
};
