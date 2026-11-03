/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
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
    }
  ]
};
