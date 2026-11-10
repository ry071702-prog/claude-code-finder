/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
    {
      "version": "2.1.316",
      "items": [
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_ULTRATHINK, which turns the ultrathink keyword off"
        },
        {
          "kind": "追加",
          "text": "Added pooled group budgets to the Claude apps gateway: one monthly budget that a group's members share, on top of each member's own limit, set with pooled_budget on the spend limits admin API"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP to keep system cross-certificates that certify each other in a loop, for servers whose private CA needs one"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_SUBAGENT_EFFORT to set the effort level subagents run at when nothing else names one, instead of inheriting the session's"
        },
        {
          "kind": "追加",
          "text": "Added managed.policy_mode: layered to the Claude apps gateway: every policy that matches a developer applies, each merged over the ones listed below it, not only the first"
        },
        {
          "kind": "追加",
          "text": "Added guardrail.input_tagging on Claude apps gateway Bedrock upstreams, which wraps prompts in the input tags that an Amazon Bedrock guardrail's prompt attacks filter needs; all_messages_and_system also tags the system prompt"
        },
        {
          "kind": "変更",
          "text": "Deprecated fast mode for Opus 4.8 as of October 30, 2026; it will be removed on November 30, 2026. After removal, fast mode requests on Opus 4.8 return an error and do not fall back to standard Opus 4.8. Migrate to Opus 5.5 to keep the speedup"
        },
        {
          "kind": "修正",
          "text": "Fixed shell commands being left running on macOS and Linux when Claude Code exits by itself, for example when credentials are refused or a cloud session is archived"
        },
        {
          "kind": "修正",
          "text": "Fixed bash aliases with line breaks in their value (except in Git Bash), and functions whose names start with a dash, being garbled or lost in the Bash tool's shell"
        },
        {
          "kind": "修正",
          "text": "Fixed bash scripts started from the Bash tool stopping after their first command when SHELLOPTS is exported"
        },
        {
          "kind": "修正",
          "text": "Fixed PowerShell hooks not blocking on exit code 2 when the command begins with a type cast, param, using or an attribute"
        },
        {
          "kind": "修正",
          "text": "Fixed some network requests hanging when a compressed response was cut off or corrupted"
        },
        {
          "kind": "修正",
          "text": "Fixed sonnet, opus and haiku on Vertex AI and Amazon Bedrock showing an error mid-session instead of switching to an older model when the newest is not yet available to the account or region"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway not checking every model a request names against availableModels, deniedModels and models; a request that names a blocked model now gets a 400 naming the field"
        },
        {
          "kind": "修正",
          "text": "Fixed claude auth login refusing to run where managed settings require a Claude apps gateway; in a terminal it now shows the gateway sign-in"
        },
        {
          "kind": "修正",
          "text": "Fixed --restricted sessions uploading files from outside the working directories when a Read allow rule covered them"
        },
        {
          "kind": "修正",
          "text": "Fixed prompts containing invisible characters needing a second Enter to send; plain prompts now send cleaned on the first Enter, and commands still wait for review"
        },
        {
          "kind": "修正",
          "text": "Fixed sub-agents that inherited a parent sub-agent's model moving to the main model when a background job or message woke them"
        },
        {
          "kind": "追加",
          "text": "Fixed a managed autoMode.allow list without \"$defaults\" getting the built-in exceptions back from a host app's --settings, a first rule added in /permissions, or /auto-mode-setup"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions and cloud scheduled tasks not being marked as failed when auto mode stopped a turn because the server returned no safety verdict"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p text output sometimes not saying why auto mode stopped a turn when a background agent was still running"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_AUTO_MODE_SERVER=1 being ignored in sessions started by a host application (such as Claude Desktop) behind a proxy or LLM gateway with experimental betas turned off"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin MCP headersHelper scripts receiving a corrupted CLAUDE_PLUGIN_ROOT and server URL when a credential-named environment variable was set to a switch value such as 1"
        },
        {
          "kind": "修正",
          "text": "Fixed the SDK register_repo_root control request not loading the CLAUDE.md of a directory outside the working directory (with CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1)"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool showing ? for artifact database access rules at the self level, and not quoting those rules back when it refuses a republish that would drop them"
        },
        {
          "kind": "修正",
          "text": "Fixed /model <id> not warning when the model isn't recognized by this version and auto-compact will assume a 200K context window"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"hold space to speak\" hint using up its three showings in one session, and showing an empty key when push-to-talk is unbound"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob never returning when the search process is killed at the timeout but does not exit, seen on Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare case where resuming a conversation did not restore its plan, when /clear or /resume had been run while part of that conversation was still being saved"
        },
        {
          "kind": "修正",
          "text": "Fixed first-run setup dropping words from the security notes and the terminal-setup explanation in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed the Enterprise survey card taking a typed 1 or 0 after a short pause; a typed answer now needs Enter"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed a message sent while Claude was working being answered after a Stop, once the session's process had been replaced"
        },
        {
          "kind": "追加",
          "text": "Self-hosted runner: Fixed an MCP server's on/off switch sometimes being lost when a session moved to a new machine"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed the Bash tool losing your aliases and functions in Git Bash when the rc file sets errexit and pipefail and only winpty aliases, or none, are defined"
        },
        {
          "kind": "改善",
          "text": "Improved /code-review started from the Code tab in Claude Desktop or on the web: cloud and claude remote-control sessions now show the findings card, not a plain-text list"
        },
        {
          "kind": "改善",
          "text": "Improved /diff on large repositories: each refresh usually runs one fewer full-repository git command, and refreshes are spaced out when git is slow"
        },
        {
          "kind": "改善",
          "text": "Improved the messages shown when /ultrareview, a cloud session or a cloud agent finds no GitHub remote: they now say to create a repository at https://github.com/new, and /ultrareview no longer suggests a gh command that gh rejects"
        },
        {
          "kind": "修正",
          "text": "Improved SSL certificate errors to name the likely causes, among them a server that leaves out an intermediate certificate, and the fix for each"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode so that an autoMode.allow list without \"$defaults\" no longer removes the built-in rule on scheduled-task prompts"
        },
        {
          "kind": "変更",
          "text": "Changed server-managed settings for Team and Enterprise logins: settings fetched from Anthropic's API now apply without an approval prompt, and a stored copy that doesn't verify is refused"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added sign-in to a Claude apps gateway from the chat panel, with no terminal needed"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed ultrathink to run its turn at xhigh effort and show in a rainbow in the chat box, as in the terminal"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the missing Effort slider, Ultracode switch and model name when the model setting has the [1m] tag, such as opus[1m]"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed saved /btw side-question history being deleted too early while a settings file has errors"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a conversation coming back in Auto mode after a reload or restart when its plan was approved with \"Yes, and manually approve edits\""
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a form card to cloud sessions, so you can fill in or decline a form an MCP server asks for instead of the request being canceled without you seeing it"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a \"Catching up…\" line that shows while a cloud or Remote Control session you switch back to is still bringing its messages up to date"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Changed network secrets so Enterprise members can add and delete them on their own cloud environments, instead of only viewing them"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the Changes pane for cloud sessions: the note about what the list leaves out is now a badge beside the branch name, not a row above the diff"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed file search in a cloud session's Files pane showing folders as ../.. paths after Claude changed directory; results now show their path from the project's root"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude refusing to edit or append to a canvas it made in a Slack channel, from that channel, once the canvas was also shared to another channel or a DM"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed untagged replies going unanswered in a Slack Connect thread when both organizations have installed Claude and Slack delivered the reply to the other organization's app"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a cloud scheduled task's live status checklist in Slack staying half-done; a run can now edit the top-level messages it posted during that run"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed a Slack channel's Respond automatically switch to a \"How Claude participates\" choice on the channel's Configure page and in Claude Tag admin settings"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added a findings-by-severity card to the Code Review analytics page, showing the period's total findings, a daily chart stacked by severity, and each severity's count"
        }
      ]
    },
    {
      "version": "2.1.314",
      "items": [
        {
          "kind": "追加",
          "text": "Added permissions.blockWritesOutsideWorkingDirectories: Write, Edit and NotebookEdit refuse paths outside the working directories in every permission mode"
        },
        {
          "kind": "追加",
          "text": "Added an optional groups list to Claude apps gateway upstreams: only developers in the listed IdP groups are sent to that upstream, on failover too"
        },
        {
          "kind": "追加",
          "text": "Added guardrail_trace to Claude apps gateway Bedrock upstreams, to log which Amazon Bedrock guardrail filter fired on a request, without the matched text"
        },
        {
          "kind": "追加",
          "text": "Added idle compaction to VS Code and Claude Desktop's Code tab: a 200K+ token conversation left idle is summarized, and the summary is used on your next message if the prompt cache has expired"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions failing turn after turn with \"Invalid effort level\" when an organization's admin caps a model's effort: Claude Code now lowers the effort, retries, and says which level it uses"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p exiting with code 0 and no output when startup failed; it now prints the error and exits 1"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock sessions with many images failing every turn and /compact with \"400 Input is too long.\" instead of removing older images and compacting"
        },
        {
          "kind": "修正",
          "text": "Fixed Microsoft Foundry sessions failing when the resource has no deployment for the default Sonnet, Opus or Haiku model: Claude Code now falls back to an older model of that family"
        },
        {
          "kind": "修正",
          "text": "Fixed repeated refused requests behind a gateway that doesn't accept tool search's tool_reference blocks: the request is sent again once without tool search, and the session remembers"
        },
        {
          "kind": "修正",
          "text": "Fixed TLS connections failing with UNABLE_TO_GET_ISSUER_CERT when the system certificate store holds a renewed root certificate that is cross-signed with its predecessor"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers that also work without sign-in showing \"needs authentication\" after their stored sign-in stopped working; they are now used signed out"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp logout reporting success when the MCP sign-in was not removed, for example while the macOS keychain is locked over SSH"
        },
        {
          "kind": "修正",
          "text": "Fixed extra sign-in renewals when several sessions share an Anthropic profile login and the credentials lock is busy"
        },
        {
          "kind": "修正",
          "text": "Fixed claude ultrareview and claude remote-control asking the workspace trust question in a CI job that has a terminal; with CI set they now refuse an untrusted folder at once"
        },
        {
          "kind": "修正",
          "text": "Fixed an administrator's TLS trust settings in managed settings not being applied in Claude Desktop sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed model switching being refused on machines with managed plugin settings when one of your own --plugin-dir or --plugin-url plugins had a broken manifest or failed to download"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bedrock and Vertex model upgrade offer coming back at every start when managed settings pin the model"
        },
        {
          "kind": "修正",
          "text": "Fixed forceRemoteSettingsRefresh set only in remote managed settings no longer applying once the stored copy had expired, which let sessions start without policy when the server could not be reached"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Continue automatically at usage limit\" continuing more than three times without a prompt from you when a task restarted itself between waits (a /goal check-in, a background or scheduled task)"
        },
        {
          "kind": "修正",
          "text": "Fixed background and cloud sessions started with Ultracode turning it back on at their next start after it had been switched off"
        },
        {
          "kind": "修正",
          "text": "Fixed the last broken reply and its retry prompts staying in the conversation after Claude gave up on a tool call that could not be parsed"
        },
        {
          "kind": "修正",
          "text": "Fixed a PreCompact hook with very large output making compaction fail or repeat; each hook's output is now cut at 10,000 characters"
        },
        {
          "kind": "修正",
          "text": "Fixed background diff refreshes briefly taking the repository's index lock, which could make a git command run at the same moment fail with \"Unable to create '.git/index.lock': File exists\""
        },
        {
          "kind": "修正",
          "text": "Fixed markdown tables jumping between grid and stacked layouts on half-typed rows while streaming, and long tables falling back to raw pipes"
        },
        {
          "kind": "修正",
          "text": "Fixed the /resume picker showing the text of CLAUDE.md or CLAUDE.local.md as a session's title when the session only ran slash commands"
        },
        {
          "kind": "修正",
          "text": "Fixed /btw answering from the main conversation when asked from a subagent's open transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed pasting an image over SSH to a Linux machine doing nothing silently; the prompt now says to copy the file over and paste its path"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control sessions that failed to start when the session service was slow for a moment: the worker's registration is now retried with growing waits"
        },
        {
          "kind": "修正",
          "text": "Fixed model switches over Remote Control that take over 8 seconds getting a \"still pending\" error instead of the final result"
        },
        {
          "kind": "修正",
          "text": "Fixed the sandbox.excludedCommands setting description saying listed commands always run outside the sandbox; it now says every command in a call must match an entry"
        },
        {
          "kind": "修正",
          "text": "Fixed shell and MCP calls that auto mode, a deny rule or a PreToolUse hook blocked, or that otherwise did not run, reading as if they ran in a collapsed tool group"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox protections not applying to a worktree entered by claude -p --resume or --continue"
        },
        {
          "kind": "修正",
          "text": "Fixed hooks matching Bash not running on shell commands started by the Monitor tool; such hooks can block or ask, but not approve or rewrite those commands"
        },
        {
          "kind": "修正",
          "text": "Fixed a settings file excluded with --setting-sources still supplying some settings, such as auto mode rules and saved permission consents"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode reporting a call as blocked, and listing it in /permissions, when its safety check gave no verdict"
        },
        {
          "kind": "修正",
          "text": "Fixed a Claude apps gateway Vertex upstream hanging for minutes when a Google token endpoint accepts the connection and never answers"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's start-up warning for a deprecated Claude Desktop key that it still serves as written saying \"stops being accepted\" after the key's end date"
        },
        {
          "kind": "追加",
          "text": "Fixed /upgrade opening the browser and starting a new login for plans billed through the App Store or Google Play; it now says where to change the plan"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume, and rewinding past a switch to another model after a refusal, moving a session on a model name Claude Code doesn't recognize to a different model"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing when a gateway or cloud provider refuses one of Claude Code's beta headers by name: the request is sent again without it"
        },
        {
          "kind": "修正",
          "text": "Fixed model IDs spelled with a dot behind an LLM gateway, such as claude-opus-4.8, being treated as an older model with the wrong context window, output limit, effort, thinking mode and cost"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients showing a stray \"Compacted (ctrl+o to see full summary)\" row after /compact"
        },
        {
          "kind": "修正",
          "text": "Fixed the cloud sessions tip and the Remote Control idle notice showing when an organization's policy turns those features off"
        },
        {
          "kind": "追加",
          "text": "Fixed a resumed claude.ai cloud session making a model call nobody asked for when the previous worker stopped just after receiving a new chat's files"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch in Cowork cloud sessions silently dropping a PDF's text past 100,000 characters; it now says how much was unread and where to read on"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude being told only that a command was declined after you stopped it with Esc or Stop in a cloud session or the IDE; it now also hears that the command may have run"
        },
        {
          "kind": "修正",
          "text": "Fixed blank lines at the top of a code block disappearing when the code block opens a quote"
        },
        {
          "kind": "修正",
          "text": "Fixed a blank line appearing above some ⎿ rows in the transcript view (Ctrl+O)"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode dw, dW, yw and yW carrying on past the end of the line, and made w and W stop on empty lines"
        },
        {
          "kind": "修正",
          "text": "Fixed x and Enter in the agent panel sometimes acting on the wrong agent when another agent started or finished"
        },
        {
          "kind": "修正",
          "text": "Fixed pasted text and dragged-in files being lost in Claude's question dialog unless the \"Other\" row had focus"
        },
        {
          "kind": "修正",
          "text": "Fixed pasted text being lost when a row in the prompt footer was selected"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode p over a character selection ignoring whether the yanked text was whole lines"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode aw and iw taking the line break at the end of a line"
        },
        {
          "kind": "修正",
          "text": "Fixed ↓ selecting footer items hidden by the ? help menu, the command list or a paste hint"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc on a command's panel, such as /btw, also interrupting the subagent whose transcript is open"
        },
        {
          "kind": "修正",
          "text": "Fixed the welcome header in fullscreen mode showing the session's model while viewing a subagent or teammate that runs on a different model"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen transcript being left mid-conversation after \"Restore conversation\" in the rewind menu while scrolled up"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare case where a deleted session could reappear in the resume list as an almost empty entry"
        },
        {
          "kind": "修正",
          "text": "Fixed prompts containing tags such as <bash-stdout> or <local-command-stdout> not being acknowledged to a local stream-json host"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions staying untitled when the first prompt failed (for example on a usage limit) and the conversation continued afterward"
        },
        {
          "kind": "追加",
          "text": "Fixed the skill file watcher checking every removed skill kept in ~/.claude/skills/.trash, which added file system load that grew with each removal"
        },
        {
          "kind": "修正",
          "text": "Fixed the session name from /rename disappearing while Claude asks for permission or a plan decision, so side-by-side sessions stay identifiable"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions that fail to start being reported as a deleted daemon binary when the binary is still on disk"
        },
        {
          "kind": "修正",
          "text": "Fixed the tip and idle reminder about push notifications appearing when the push settings in /config are hidden or your organization has turned off Remote Control"
        },
        {
          "kind": "修正",
          "text": "Fixed ~/.claude/skills/.trash and ~/.claude/plugins/.trash growing without limit: each now holds about 1024 entries, whatever cleanupPeriodDays says"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash edit diff listing a whole file as changed when a CRLF file under git's line-ending conversion was re-saved unchanged or had one line edited"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed an idle session moving to another runner instead of pausing when the runner's request to pause it lost its connection before Anthropic answered"
        },
        {
          "kind": "改善",
          "text": "Improved memory use in long headless and SDK turns that run many subagents: the parent session no longer keeps each subagent's tool results until the turn ends"
        },
        {
          "kind": "改善",
          "text": "Improved prompt history: Ctrl+R now matches text inside collapsed [Pasted text] pills"
        },
        {
          "kind": "改善",
          "text": "Improved the /design-sync upload prompt to show the folder, the project and the files it will upload or delete"
        },
        {
          "kind": "改善",
          "text": "Improved /permissions review tab, now called Recently blocked: the footer says what Esc will do with marked rows"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode's blocked calls: messages name the command, say Claude may retry and auto mode checks again, and point to /permissions to review"
        },
        {
          "kind": "改善",
          "text": "Improved permission prompts: a long reason takes fewer rows, so it pushes the command being approved off the screen on fewer terminals"
        },
        {
          "kind": "改善",
          "text": "Improved the cloud session error shown while a request refused for your claude.ai login is still being retried: it now also suggests claude auth login"
        },
        {
          "kind": "改善",
          "text": "Improved the behavior of stored claude.ai, Team, and Enterprise logins when MDM and remote settings differ on base URL or apiKeyHelper"
        },
        {
          "kind": "改善",
          "text": "Improved /config in agent view to say how to stop agent view opening by default"
        },
        {
          "kind": "改善",
          "text": "Improved session auto-titles: a session that starts with a skill or a prompt-based command such as /security-review now gets a title from it instead of staying untitled"
        },
        {
          "kind": "改善",
          "text": "Improved --resume speed and memory use on damaged transcripts"
        },
        {
          "kind": "改善",
          "text": "Improved /context speed in sessions with ten thousand or more MCP tools"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Improved the error shown when a session's branch isn't on the git remote: it now covers a never-pushed branch, says how to fix each case, and no longer suggests retrying"
        },
        {
          "kind": "その他",
          "text": "Updated the /claude-api skill: its Datadog setup for API tracing now sends the dd-llmobs-enabled: true header, as the Console does, and its ant install instructions drop the outdated macOS xattr step"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled dataviz skill to advise printing y-axis tick labels in full under 10,000, and horizontal ones in full under a million where they fit"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled dataviz skill to answer donut and pie chart requests with ranked bars or a segmented bar that prints its values"
        },
        {
          "kind": "変更",
          "text": "Changed Claude's file tools to ask before editing the local copy of your organization's server-managed settings, as they do for your settings files"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview to check workspace trust before it runs git, as claude ultrareview does"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash tool's shell to clear any inherited which alias or function and to stop passing exported which/unsetenv functions to commands, so which is the system command or zsh builtin"
        },
        {
          "kind": "変更",
          "text": "Changed /permissions Recently blocked to refuse approving a call you can't read in full, including one the terminal is too short to show"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode in Cowork cloud sessions: a hook's allow of an MCP tool call now counts as no answer, so the classifier or a permission prompt decides"
        },
        {
          "kind": "変更",
          "text": "Changed hook if conditions such as Monitor(tail *) to match the Monitor tool's shell commands as Bash(tail *) matches Bash's"
        },
        {
          "kind": "変更",
          "text": "Changed the claude-api skill to ask to read a Managed Agents workflow run's workflow before changing the agent to improve that run"
        },
        {
          "kind": "変更",
          "text": "Changed flagged requests to retry on another model, not end in a refusal, when ANTHROPIC_DEFAULT_OPUS_MODEL, availableModels or deniedModels leaves only an older Opus model, or none"
        },
        {
          "kind": "変更",
          "text": "Changed idle compaction to also run for subscribers with telemetry turned off, and on Bedrock, Vertex, Foundry and LLM gateways once the one-hour prompt cache is on"
        },
        {
          "kind": "変更",
          "text": "Changed FORCE_HYPERLINK=false (also no and off) to turn hyperlinks off instead of on"
        },
        {
          "kind": "変更",
          "text": "macOS: Changed git grep in most commands that Claude runs to use the C locale, to avoid a reported memory leak in macOS's regex library on files that aren't valid UTF-8"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Clear authentication\" for MCP servers reporting success when the saved sign-in could not be removed"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed missing spinner and Stop button while a queued message's hooks run"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed session group changes that cannot be saved, such as a delete, failing silently; an error notification now appears"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Cmd+F / Ctrl+F not opening the find widget in the plan preview tab"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the voice dictation shortcut (Ctrl+D) doing nothing under non-Latin keyboard layouts such as Russian, Greek or Hebrew"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed missed one-time saved scheduled tasks being deleted without asking when the extension opened without a chat"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed CLAUDE_CODE_DISABLE_CFC_PROMPT to also stop the extension adding the Claude in Chrome instructions to a session's messages; the browser tools stay available"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added an Include completed button to the Scheduled tasks page when finished one-off tasks are the only ones hidden, so you can show them without opening the Sort menu"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Fixed recently used self-hosted environments never appearing among the recent environments on the new session card"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed cloud sessions reporting uncommitted changes every turn after Claude moved a branch to a commit it had pushed from another worktree"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the self-hosted environment details dialog in admin settings squeezing its content out of view in very short windows or at high zoom; the dialog now scrolls"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the permission mode picker staying on Auto after a running cloud or Remote Control session refused the switch; it now shows the mode in use and tells you"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved scheduled tasks: runs in Anthropic's cloud now load the plugins enabled on your claude.ai account"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved Test connection for GitHub Enterprise in admin settings to also connect the way cloud sessions do, and to warn you when that second test fails"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Improved cloud session transcripts: a rename row now names the new title, and repository and environment lists show as a table instead of one line of JSON"
        },
        {
          "kind": "変更",
          "text": "[Cloud sessions] Changed cloud sessions from the web, desktop and mobile apps to start even when a setup script exits with an error, instead of failing to start"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed the permission mode button in Remote Control sessions showing the wrong mode until you typed; while your computer is online it now shows the real mode on open"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a dismissible link to the Claude Tag API docs on the Bundles and Channels tabs in admin settings, for Enterprise organizations with Slack connected"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed @Claude !restart giving up after one failed workspace check in channels shared across Enterprise Grid workspaces; it now retries, then asks you to run it again"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a second confirmation DM and channel note when you connect your Claude account from Slack twice from the same link within a few minutes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed follow-up messages in Slack showing no sign of progress while Claude's session waits for a self-hosted runner; Claude now posts a wait notice in the thread"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude sometimes not answering a tag in its own thread in Slack Connect channels where both organizations have installed Claude"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Retry on plugin and skill pages in Claude Tag admin settings discarding unsaved access changes after a failed load; your edits now stay in place"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the repositories control in Claude Tag admin settings showing the same action twice; its menu now lists only what the button doesn't already do"
        }
      ]
    },
    {
      "version": "2.1.312",
      "items": [
        {
          "kind": "追加",
          "text": "Added oidc.user_id_claim to the Claude apps gateway, to identify people by an id_token claim other than sub, such as Microsoft Entra ID's oid"
        },
        {
          "kind": "追加",
          "text": "Added click to send: in fullscreen, clicking the \"to send now\" hint under a queued message sends it right away, as its key does"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings and organization policy not being fetched for the rest of the session after signing in from the VS Code extension"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude overwriting a very large CLAUDE.md, rules file or @-included file in a subdirectory after seeing only its start; Write now asks Claude to read it all or edit in place"
        },
        {
          "kind": "修正",
          "text": "Fixed per-directory and paths: skills not being found after a Bash cd deeper into a git repository"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare case where the first reply after resuming a session in the terminal could be missing the next time the session was resumed"
        },
        {
          "kind": "修正",
          "text": "Fixed a command with an invalid name stopping all commands from loading, which could leave claude -p with no output"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool sometimes failing on PDF pages with \"pdftoppm failed: Could not write image\" when the clean-up of old session files ran at the same time"
        },
        {
          "kind": "修正",
          "text": "Fixed the spinner, OpenTelemetry effort values and transcripts naming a newly picked effort level during a task before the model applied it; they now show the level in force"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model and /effort cache warning saying the re-read waits for your next message; a change made while Claude is working can trigger it sooner"
        },
        {
          "kind": "修正",
          "text": "Fixed some sessions showing as waiting on you when the last message only mentioned items waiting on you mid-sentence"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view restoring input text on the next launch after it was cleared with Ctrl+C just before exiting"
        },
        {
          "kind": "修正",
          "text": "Fixed agent view reopening in shell mode after exiting with Ctrl+D from an empty ! input"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode d, c and y with a gj or gk count larger than the lines left deleting or copying text; like Vim, they now only move the cursor"
        },
        {
          "kind": "修正",
          "text": "Fixed /verify showing a long description meant for Claude in /help and the / command menu instead of a short one"
        },
        {
          "kind": "改善",
          "text": "Improved the prompt's effort indicator: a change made mid-task now says it may wait for your next message, and the note clears when it no longer applies"
        },
        {
          "kind": "修正",
          "text": "Improved WebFetch errors in cloud sessions: a host that does not resolve is now explained as possibly outside the allowed network domains, so Claude names the host to allow"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Vertex, Foundry and Mantle to use the shorter system prompt for model names Claude Code doesn't recognize, such as custom deployment names and inference profile ARNs, even when they front Sonnet or Haiku; set CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0 to keep the full prompt"
        },
        {
          "kind": "変更",
          "text": "Changed automatic model switches after a flagged message to also cover model names Claude Code doesn't recognize, such as custom deployment names; set CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK=1 to turn them off"
        },
        {
          "kind": "変更",
          "text": "Changed usage limit messages to call the 5-hour window the \"5-hour limit\" instead of the \"session limit\""
        },
        {
          "kind": "変更",
          "text": "Changed cloud sessions started from the CLI to get their names and branch names from the server"
        },
        {
          "kind": "変更",
          "text": "Changed prompt and agent hooks to run at most 24 at a time per session, sub-agents included, plus at most 12 that have waited longer than their event's timeout; a timeout under 1 second now counts as 1 second"
        },
        {
          "kind": "変更",
          "text": "Changed a subagent's autoCompactWindow to lower the window set by CLAUDE_CODE_AUTO_COMPACT_WINDOW, where it had no effect before; it still never raises that window"
        },
        {
          "kind": "修正",
          "text": "Changed OpenTelemetry mcp_server.name to report the real name of fixed-URL remote MCP servers declared by plugins from the official Anthropic marketplace, instead of custom"
        },
        {
          "kind": "変更",
          "text": "Changed Claude Code to stop sending the claude_code.safety_event OpenTelemetry event"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sessions ending on a bare exit code when your organization's settings couldn't be loaded or were refused at startup; the tab now says why and offers Retry or Sign in again"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed usage limit resets to show a clock time (\"Resets at 3:10 PM\") and to say \"5-hour limit\""
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added an effort level to the model picker when you create or edit a routine that runs in the cloud"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added a Bash editor with colors, line numbers and a Copy button to the setup script box in cloud environment settings"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved the step shown when Claude adds a repository to a cloud session: opening it now shows a short table of what happened instead of raw JSON"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed resending an unchanged message after a failed send in a cloud session sometimes running it twice"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed a failed cloud environment creation showing its error only as a toast outside the open dialog; it now appears inside the dialog"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed Edit in a routine's menu on the Routines page going to the routine's page without opening its edit dialog"
        },
        {
          "kind": "修正",
          "text": "[Remote Control] Fixed an unarchived Remote Control session showing as working until a computer reconnected; it now shows as idle"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude Tag's retry notice in Slack to name the model in use, or say rate limits were hit, instead of a generic API error"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed a Claude Tag channel's on/off switch and agent settings falling back to workspace defaults when an older private Slack channel goes public and gets a new ID"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack not replying in channels whose environment has network access set to None"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack sometimes posting a file in the wrong thread when it was answering in another thread of the same channel"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review reviewing an outdated commit, or none at all, when GitHub delivered a push event late; it now reviews the pull request's current commit"
        }
      ]
    }
  ]
};
