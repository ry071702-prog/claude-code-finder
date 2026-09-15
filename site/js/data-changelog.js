/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.271",
      "items": [
        {
          "kind": "追加",
          "text": "Added fast mode in Claude Code Remote sessions (cloud and self-hosted runners): the host's fast-mode setting or /fast typed in the session applies where your organization allows it"
        },
        {
          "kind": "追加",
          "text": "Added mouse support to the /config panel in fullscreen mode: the wheel scrolls the settings list, a click on a setting's value changes it, and the row under the pointer is highlighted"
        },
        {
          "kind": "追加",
          "text": "Added claude self-hosted-runner --drain-marker-file <path>: when that file exists at a SIGTERM drain, the runner reports its exit to the server as a host drain (telemetry only)"
        },
        {
          "kind": "追加",
          "text": "Added per-command allowed_domains to Bash, PowerShell and Monitor in auto mode with sandboxing: the hosts a command needs are reviewed with it and opened for it alone; other hosts are refused"
        },
        {
          "kind": "追加",
          "text": "Added omitClaudeMd to agent frontmatter and --agents JSON, letting custom and plugin subagents run without user, project and local CLAUDE.md files; managed policy files still load"
        },
        {
          "kind": "追加",
          "text": "Added --accept-command <sha256> to claude plugin install and claude plugin update to accept exactly the command a previous --json run displayed, instead of -y"
        },
        {
          "kind": "追加",
          "text": "Added support for a multiplier above 1, up to 10, in the modelPricing managed setting and the Claude apps gateway pricing block, for marked-up internal chargeback rates"
        },
        {
          "kind": "追加",
          "text": "Added a spinner tip pointing Bedrock, Vertex AI, Foundry and LLM gateway users to the Claude desktop app; the claude.ai desktop app tip now suggests /desktop, which offers to download the app"
        },
        {
          "kind": "修正",
          "text": "Fixed a cached organization policy being reused after switching accounts, organizations, or API keys, and the policy not refreshing until the hourly check when the credential changes mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed the tool and command lists not updating when the organization policy finishes loading after startup or changes mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed an enterprise managed-mcp.json that can't be read or parsed being ignored: it now keeps exclusive MCP control (user, project and plugin servers don't load) and warns at startup"
        },
        {
          "kind": "修正",
          "text": "Fixed org policy being fetched through, and rejected by, third-party local proxies set via ANTHROPIC_UNIX_SOCKET; they are again treated like other custom gateways, including for Remote Control"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions rejecting every subagent tool call (\"updatedInput … failed schema validation\") when a workflow or agent approval was applied after the session's worker restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed /fast off answering \"Fast mode unavailable\" instead of turning fast mode off when the organization has fast mode disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions started with CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK re-sending fast requests every turn after the API rejected fast mode; the rejection now stands and its reason is shown"
        },
        {
          "kind": "修正",
          "text": "Fixed fast mode under CLAUDE_CODE_RETRY_WATCHDOG failing the turn on a usage-credits limit, or retrying an overload at fast speed, instead of falling back to standard speed"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks missing the file that fmt, column and similar commands read when it follows an option the checker doesn't recognize"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks skipping files a wildcard expands to when the wildcard sits in a command's pattern or option value (for example grep -v dir/* file)"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks so that shell variable declaration flags cannot misrepresent the command being run"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands with two directory changes, a subshell, or a cd+git chain skipping the prompt under permissions.blockReadsOutsideWorkingDirectories in bypass and auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a stale .git/config.lock breaking git checkout -b, git push -u and git config for the rest of a session after a sandboxed command failed to start (Linux)"
        },
        {
          "kind": "修正",
          "text": "Fixed settings file changes made outside the session going unnoticed on macOS machines whose system file-event service is saturated; the watcher now falls back to polling"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed claude -p sessions whose tools all come from MCP servers failing with \"At least one tool must have defer_loading=false\""
        },
        {
          "kind": "修正",
          "text": "Fixed turns failing with \"API returned an empty or malformed response\" when an LLM gateway returns the non-streaming reply as text/plain"
        },
        {
          "kind": "修正",
          "text": "Fixed sustained high CPU usage and repeated tool-list requests when an MCP server sends list_changed notifications in a tight loop"
        },
        {
          "kind": "追加",
          "text": "Fixed MCP OAuth mishandling client registrations: denying consent forced a new one, one for another redirect URI was reused, and a concurrent write could delete a valid one or keep a mismatched one"
        },
        {
          "kind": "修正",
          "text": "Fixed tool search returning no match when Claude selects an MCP tool by its bare name instead of its full mcp__server__tool name"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+O cancelling pending MCP server reconnects, and /mcp sent from Remote Control failing while the transcript view is open"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude in Chrome prompt telling the model to load tools through ToolSearch when ToolSearch is unavailable"
        },
        {
          "kind": "修正",
          "text": "Fixed cross-session messages held by the receiving session's permission-mode policy leaving no trace: headless senders now get a delivery notice, and SendMessage results no longer imply it was read"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude starting a second copy of a background command (such as a watch task or dev server) that was still running after the conversation was compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed /model warning about losing the conversation cache when switching back to the model the conversation actually ran on"
        },
        {
          "kind": "修正",
          "text": "Fixed /reload-skills reporting a skill count that disagreed with the slash menu after /cd"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume and /continue showing only 1-2 sessions in fullscreen mode on short terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume and /teleport keeping the previous conversation's file-read tracking, so Claude could edit files the resumed conversation had never read"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume dropping the 1M context window ([1m]) when the resumed session's model family differs from the configured default model"
        },
        {
          "kind": "修正",
          "text": "Fixed artifacts attached with /artifacts disappearing from the session after --resume"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions (claude --bg, claude agents) not watching the artifacts they publish for republishes made elsewhere"
        },
        {
          "kind": "修正",
          "text": "Fixed custom agents, slash commands and output styles beyond the first not loading from a virtual drive that reports inode 0, such as an encrypted vault mounted as a Windows drive"
        },
        {
          "kind": "追加",
          "text": "Fixed self-hosted runner sessions silently losing all host config (settings, skills, plugins, MCP servers) when the host config directory exceeds 64 MiB; added --host-config-snapshot disk|memory"
        },
        {
          "kind": "修正",
          "text": "Fixed skills synced from claude.ai staying on disk indefinitely after signing out; copies not refreshed within cleanupPeriodDays now move to the recoverable trash at the next launch"
        },
        {
          "kind": "修正",
          "text": "Fixed spinner tips suggesting commands that aren't available for your account type or are disabled in your session"
        },
        {
          "kind": "修正",
          "text": "Fixed the /add-dir path input: the left and right arrow keys now move the cursor, and Enter adds only the typed path instead of also adding the highlighted completion"
        },
        {
          "kind": "修正",
          "text": "Fixed text fields outside the main prompt moving a leading ! to the end of what you typed (!foo came out as foo!)"
        },
        {
          "kind": "修正",
          "text": "Fixed the interactive /hooks menu crashing when a hook matcher is named after an inherited object property such as __proto__ or constructor"
        },
        {
          "kind": "修正",
          "text": "Fixed a fullscreen rendering glitch where text kept a stale background color after the box around it lost its background"
        },
        {
          "kind": "修正",
          "text": "Fixed Delete in st and Alt+arrow keys in rxvt-unicode not working in attached background sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal's replies to capability queries (^[[?1;2c) appearing at the shell prompt or in an editor when Claude Code exits, is suspended, or opens an editor right after starting"
        },
        {
          "kind": "改善",
          "text": "Improved terminal rendering performance: large diffs and long transcripts render faster, with fewer slow frames"
        },
        {
          "kind": "改善",
          "text": "Improved startup time slightly by skipping a redundant validation of built-in model data on every launch"
        },
        {
          "kind": "改善",
          "text": "Improved hook feedback: while a SessionStart, UserPromptSubmit, PreToolUse or SessionEnd hook runs, the spinner says so with elapsed time, and Esc cancels a prompt waiting on a SessionStart hook"
        },
        {
          "kind": "改善",
          "text": "Improved the spinner status during long thinking: it now reads \"deep in thought\" after 45s, and shows \"picking the thought back up\" while recovering from the output-token limit"
        },
        {
          "kind": "改善",
          "text": "Improved dynamic workflows to pause when you hit your usage limit and continue automatically when it resets, instead of dropping the affected agents"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control to leave fewer empty sessions on claude.ai when setup fails on a flaky network"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude in Chrome message in cloud sessions when the browser can't be reached: it now says the computer may be asleep before it suggests an install"
        },
        {
          "kind": "改善",
          "text": "Improved claude mcp serve: a running tool call now sends a progress update every 30 seconds, so clients show it is still running and idle timeouts don't abort a long command that prints nothing"
        },
        {
          "kind": "改善",
          "text": "Improved Foundry and Claude Platform on AWS sessions: an alwaysLoad MCP server that finishes connecting mid-conversation is usable on the next turn without a tool-search round trip"
        },
        {
          "kind": "改善",
          "text": "Improved Markdown files published as artifacts: they now render as styled document pages (title header, document typography, syntax-highlighted code)"
        },
        {
          "kind": "改善",
          "text": "Improved Artifact tool publish errors: a publish with no file now says to write the page to a file first, and an unsupported file type is reported before a missing favicon"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's error when a page declares a capability its contract version lacks: it now lists every supported capability and notes when a newer contract version has it"
        },
        {
          "kind": "改善",
          "text": "Improved artifact watching: a session can now watch up to 10 published artifacts at once for republishes made elsewhere, up from 5"
        },
        {
          "kind": "改善",
          "text": "Improved PDF @-mentions to say \"page count unknown\" instead of a page count guessed from the file size when pdfinfo cannot count the pages"
        },
        {
          "kind": "改善",
          "text": "Improved /mobile to show a single QR code for claude.ai/mobile, which opens the right app store for your phone"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode so that a skill's or slash command's inline ! shell commands follow default-mode permission rules instead of the classifier; a command no rule decides runs as a reviewed tool call"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode so a subagent reports back to its caller through a dedicated hand-back call that the safety classifier reviews, instead of its last message being reviewed after the fact"
        },
        {
          "kind": "変更",
          "text": "Changed Monitor watches to always have a deadline (at most 30 minutes; 10 in single-prompt -p runs) and notify Claude to re-arm, replacing the no-timeout persistent option"
        },
        {
          "kind": "変更",
          "text": "Changed the IDE selection indicator in the prompt to a [⧉ …] pill that wraps with the text instead of squeezing multi-line prompts; delete it with Backspace to leave the selection out"
        },
        {
          "kind": "変更",
          "text": "Changed the default dynamic workflow size to small on Pro plans and lowered the medium size guideline from 15 to 10 agents"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway, Bedrock, Vertex AI, and Foundry sessions so that they no longer refresh a leftover claude.ai login that the session does not use"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled claude-api skill to enable eager_input_streaming on streaming custom tools, and to start deliverable-shaped Managed Agents work with user.define_outcome"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an Attach Open File setting that, when turned off, stops the open file from being added to messages; selected text is still attached"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Hooks and Permission rules dialogs reporting a save that landed as failed, and the Hooks dialog going blank under a plugin-only policy lock or showing color codes in save errors"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Hooks dialog saves: no duplicate hook on replace, a header name retyped in other capitals keeps its secret, and settings.local.json is gitignored before the save returns"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed session history showing only the current session when the workspace is on a Windows mapped network drive or SUBST drive"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list's Active filter hiding open idle sessions when Open is also checked in the filter menu"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed a new chat switching back to the previous chat when the session list refreshed"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed open tabs and the side bar keeping the old config folder until a window reload after CLAUDE_CONFIG_DIR changed in the environmentVariables setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed console windows flashing on Windows when the extension runs background commands such as git, ripgrep, and the sign-in status check"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the prompt cache clock's hover text appearing only after a delay, and the auto-compact icon showing the browser's own tooltip beside its popup"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the Hooks dialog: a save refused because of the settings file itself now opens a popup with an \"Open settings file\" button and the reason behind \"Copy error\""
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the on state of toggle switches from Claude orange to the editor theme's button color"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed a cloud session sometimes taking about ten minutes to respond after its process exited while the session still looked live; sending a message now restarts it right away"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Changed the Routines page on claude.ai/code to a new layout with Yours and Templates tabs and two-column routine cards that show run status, and removed its calendar view"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a Custom network access option to the Cloud environments editor in admin settings, with the same allowed-domains list the environment dialog on claude.ai/code offers"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the Cloud environments admin page: it shows the default environment for Claude Tag and Claude Code, with a link to change it, and marks the recommended kind to create"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in a channel where it stays active losing its working context about once an hour when the conversation is mostly in threads; thread activity now keeps it from being reset"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a thread that asked Claude to watch a pull request no longer hearing about CI failures, comments and reviews after Claude was restarted in that thread"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed deleting the first message of a thread Claude had already replied in not ending Claude's work there; it now stops, as it did when a message with no replies was deleted"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude holding back a post because of an earlier instruction addressed to a different bot or assistant; only instructions addressed to Claude bind it, and it asks when unsure"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the reply-mode card Claude posts on joining a busy channel saying it \"sees a lot of automated posts\" when the channel is only chatty or large; the card now names the real reason"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved the Environment picker in Claude Tag admin settings: options are labeled Anthropic-hosted or self-hosted, with links to edit that environment or create one"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a pull request in a repository reviewed once per PR sometimes getting no review when a commit arrived while its review was waiting to start; it now reviews the requested commit"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed Code Review occasionally posting the same findings two or three times when GitHub reported an error for a review it had in fact created"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed follow-up reviews re-posting a security finding a person had already resolved when a later push moved the lines it was anchored to"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed reopening a finished /ultrareview cloud session in the Claude app starting the whole review over again unprompted"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PowerShell commands failing with \"Exit code 1\" and no output when the session's temp output path reaches 260 characters"
        }
      ]
    },
    {
      "version": "2.1.270",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed read-only git commands in Bash unexpectedly asking for permission after a session had been running for a while (regression in 2.1.269)"
        }
      ]
    },
    {
      "version": "2.1.269",
      "items": [
        {
          "kind": "追加",
          "text": "Added claude plugin eval: run a plugin's eval suite against Claude Code and get scored, reproducible results (JSON + HTML report); see claude plugin eval --help"
        },
        {
          "kind": "追加",
          "text": "Added /output-style [name] to list and switch output styles, including over Remote Control and in cloud and other headless sessions"
        },
        {
          "kind": "追加",
          "text": "Added a diff of the files a Bash command changed to the Bash tool result when the Bash tool handles file edits (setting bashEditDiffEnabled)"
        },
        {
          "kind": "追加",
          "text": "Added OTEL_METRICS_INCLUDE_REPOSITORY to tag OpenTelemetry metrics and events with vcs.* repository attributes; commit events get vcs.ref.head.* with OTEL_LOG_TOOL_DETAILS"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS to extend the LLM gateway /v1/models discovery timeout (default 3s)"
        },
        {
          "kind": "追加",
          "text": "Added a spinner tip suggesting /focus for a view with just your prompt, a one-line work summary, and the response"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS (1–256) to raise the Workflow tool's per-run concurrent agent limit for inference-bound fan-outs"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt cache being partially invalidated on the turn after a response was cut off at the output-token limit and automatically resumed"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where resuming a session after interrupting Claude mid-thought could change how earlier context was re-sent, hurting prompt-cache reuse"
        },
        {
          "kind": "修正",
          "text": "Fixed F1/F2/F4 not working in kitty-protocol terminals and Delete in st, Alt+arrows acting as Escape in rxvt-unicode, and Shift+punctuation typing the unshifted key in WezTerm (regression in 2.1.247)"
        },
        {
          "kind": "修正",
          "text": "Fixed remote and headless sessions reporting \"waiting for your input\" while background agents were still running (set CLAUDE_CODE_BG_TASKS_REPORT_RUNNING=0 to restore the old behavior)"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal's replies to capability queries (^[[?1;2c) appearing as stray text at startup in some terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed rows at the top or bottom of the transcript going blank in fullscreen after resizing the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed a deny or ask permission rule starting with ! applying beyond the settings source that wrote it; such a rule now applies only within its own source, and a bare ! negation is ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed the git status Claude is told after a compaction: it is now the current status, not the one from the start of the session"
        },
        {
          "kind": "修正",
          "text": "Fixed synced plugin MCP servers not connecting when a remote session resumes"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed headless sessions losing a turn's replies when the model was switched or a request was retried mid-turn"
        },
        {
          "kind": "修正",
          "text": "Fixed terminal escape codes, line breaks and oversized text from a background task's on-disk record reaching the task list and task notifications when work is resumed"
        },
        {
          "kind": "修正",
          "text": "Fixed CMYK JPEG images failing to attach with \"cannot decode\"; they are now converted and resized like other JPEGs"
        },
        {
          "kind": "修正",
          "text": "Fixed the managed settings approval dialog not naming the collector for a gRPC telemetry endpoint set without a scheme"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin headersHelper consent prompts showing a URL path that could be misread as a different host"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin errors showing [redacted URL] in place of a relative Windows path with a folder name that starts with @"
        },
        {
          "kind": "修正",
          "text": "Fixed missing cursor in the permission-rule, auto-mode-rule, add-directory, session-rename and feedback-review text fields when the terminal's native cursor is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed repeated clicks on a /fork receipt, each under a second apart, never backgrounding the session right away while it waited for the current tool to finish"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin LSP servers that reject shutdown params (e.g. rust-analyzer) being left running at session end; exit is now sent even if shutdown fails"
        },
        {
          "kind": "修正",
          "text": "Fixed the attribution reminder overriding a CLAUDE.md or memory rule against commit and pull request attribution; lines set by managed settings still apply"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt suggestions being dropped for text in Japanese, Chinese, Thai and other languages written without spaces between words"
        },
        {
          "kind": "修正",
          "text": "Fixed synchronized output being assumed from the terminal's name in GNOME Terminal and Konsole versions that do not support it"
        },
        {
          "kind": "修正",
          "text": "Fixed permission_denials in --output-format stream-json results omitting Read, Edit and Write calls blocked by a path-scoped deny rule"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions run through the SDK or the desktop app showing an unknown status in other sessions' agent list"
        },
        {
          "kind": "修正",
          "text": "Fixed /insights failing on Bedrock, Vertex, Foundry, and gateway deployments whose account can't reach the default Opus model by using the session model there instead"
        },
        {
          "kind": "修正",
          "text": "Fixed organization policy limits not loading for the session when another Claude Code process refreshed the login at the same moment"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Desktop sessions using Bedrock, Vertex, or a gateway not getting the contextual \"what Claude needs\" turn-end notification text"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers reconnecting when an updated config only changed the order of the server URL's query parameters"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt box's top border splitting into extra lines when viewing a background agent whose name or description has line breaks or is wider than the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions getting permanently stuck on \"Prompt is too long\" when auto-compaction had no complete earlier exchange to summarize (mostly Agent SDK sessions with very large prompts)"
        },
        {
          "kind": "修正",
          "text": "Fixed /goal runs silently stalling after API errors, network drops, or token limits: the goal now retries with backoff, or pauses and says why, including until a usage limit resets"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt cache misses in cloud sessions by waiting briefly for server configuration before the first request"
        },
        {
          "kind": "修正",
          "text": "Fixed /btw answers that contained made-up tool calls and output: the side question is now told not to write them, and any that appear are flagged as not executed"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN re-running a turn that had failed with an API error over 6 hours earlier, or longer ago than CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS when set"
        },
        {
          "kind": "修正",
          "text": "Fixed organization plugins enabled through managed settings not loading in headless sessions and on Claude Desktop (once Desktop bundles this CLI version); they load from the next session"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin archives extracted for a session being readable by other local users, extracted files keeping world-writable bits from the archive, and stale files surviving re-extraction"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit() deny rules and the write-path check not applying to the file a Bash tee command writes; a Bash(tee:*) allow rule no longer covers destinations outside the working directories"
        },
        {
          "kind": "修正",
          "text": "Fixed stray characters like 22c, or a terminal's color or version reply, being typed into the prompt at startup over slow connections (ssh, browser terminals)"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal's block cursor showing under the interface in rxvt-unicode after leaving or re-entering fullscreen"
        },
        {
          "kind": "修正",
          "text": "Fixed the cursor block staying visible after returning from an external editor in fullscreen mode on rxvt-unicode"
        },
        {
          "kind": "修正",
          "text": "Fixed the interface being drawn twice after returning from an external editor (Ctrl+G) outside fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed the interface being drawn twice in Konsole after returning from an external editor"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed PowerShell tool commands sent to the background stopping when Claude Code exits"
        },
        {
          "kind": "改善",
          "text": "Improved the /diff panel to open fully rendered in one step instead of showing a loading state first"
        },
        {
          "kind": "改善",
          "text": "Improved prompt suggestion filtering for Japanese, Chinese and Korean text: mixed-script and single-word suggestions are kept, and meta or evaluative text is dropped as it is for English"
        },
        {
          "kind": "改善",
          "text": "Improved the Skill tool's \"Unknown skill\" error to name the plugin skill's full name when a bare name matches exactly one plugin skill"
        },
        {
          "kind": "改善",
          "text": "Improved keyboard support over SSH and in unrecognized terminals: terminals that answer the kitty keyboard query (such as foot and Alacritty 0.16+) now get Shift+Enter and Ctrl+Shift shortcuts"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness in long sessions: transcript updates no longer re-process the whole conversation to build the collapsed tool-use summaries"
        },
        {
          "kind": "改善",
          "text": "Improved first-party sessions with telemetry disabled: an alwaysLoad MCP server that finishes connecting mid-conversation is usable on the next turn without a tool-search round trip"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview --post to post the PR comment directly when the findings arrive and print the comment link, instead of starting a second cloud session to post it"
        },
        {
          "kind": "変更",
          "text": "Changed artifact database reads that save into the session scratchpad so they no longer stop for working-folder approval"
        },
        {
          "kind": "変更",
          "text": "Changed skills synced from claude.ai in cloud sessions to be named anthropic-skills:<name>, matching Claude Desktop; the bare name still works when nothing else uses it"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an agent map: an \"N agents\" footer pill opens a map of the session's sub-agents with per-agent cards, Stop agent, and read-only transcripts"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Hooks dialog to the command menu for viewing hooks and adding, editing, or removing them in user, project, and local settings; managed, plugin, and session hooks stay read-only"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added live progress rows for running subagents under the tool-call groups in Focus view"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Permission rules dialog that lists permission rules and adds or removes them in user, project, and local settings; startup-option, session-only, and managed rules stay read-only"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Cancel button to the Switch account screen that returns to your session as the current account"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Focus view showing a turn started by a delivered plain-text prompt, such as a scheduled task's, as part of the previous turn"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the footer's prompt cache clock hiding its minutes when the panel is narrow"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list keeping sessions from the default folder when CLAUDE_CONFIG_DIR is set in a settings file or the environmentVariables setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a plan preview that finished loading late sometimes hiding its comment box or showing an older plan"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a plan preview accepting comments that went nowhere after its Claude tab closed"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the prompt cache clock and reopen notice for a session compacted after its last reply and then closed, which now reads as cold when reopened"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a session renamed in the extension while Remote Control is on keeping its old name on claude.ai/code"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"Enable Remote Control for all sessions\" toggle keeping its last position after the setting was reset to default from a terminal"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed restored Claude tabs not counting as open in the session list after a window reload until clicked, and their row opening a second tab"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Switch account making a tab forget its dismissed usage-limit warnings when you sign back in as the same account"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a session rename being replaced by the generated name after a window reload when the session was renamed during a long turn"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sidebar usage meter keeping a stale per-model weekly limit row after the account loses that limit"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed a rare case where an @-mention sent with the keyboard shortcut while a new chat view was still starting could be inserted into the input long after the keystroke"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list jumping down when the Account & usage header appeared a moment after opening the Claude side bar"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved documents and messages written for someone other than the user: Claude now writes them for that audience and names it at the top of its reply"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved screen reader and keyboard accessibility in the slash-command menu, @-mention menu, output-style picker, Send/Stop button, permission and question cards, and onboarding checklist"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the current-file chip in the message box: an X now removes it, replacing the Hide toggle"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Removed the Claude Code items from a session tab's right-click menu and the editor title bar's \"...\" menu; they could not act on the tab the menu was opened on"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added taking back a queued message in a cloud session before Claude reads it: remove it from the queue, or press Esc or Up, and the text returns to the message box"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed /model default in a cloud session leaving every later message failing in organizations that restrict which models Claude Code can use"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed one-off scheduled routines occasionally running a second time after a transient server error"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed routine runs that use subagents sometimes being treated as finished too early, which could skip the retry after a real failure or start a duplicate run"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed file links in cloud session transcripts opening a GitHub 404 when Claude was working from a subfolder of the repository"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed the Cloud environments admin page to list every environment instead of capping each table at five rows behind a Show more control that could be unreachable"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed claude.ai/code for Free-plan users to open the plans page with a path to upgrade, instead of a \"Disabled by org admin\" page with no way forward"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a confirmation dialog before Connect all or Disconnect on a GitHub installation in admin settings, to guard against accidental organization-wide changes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed threads occasionally going silent after a failed turn because the failure notice was dropped when Slack briefly rate-limited it; the notice is now retried"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude accepting a switch to a model your organization hasn't enabled and then quietly answering with a fallback model; it now declines and says an admin can enable it"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a table posting as raw pipe text when Claude attached files to the same message; the table now posts as a normal reply and the files follow with a plain caption"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed @Claude !restart at the top level of a channel where Claude isn't active starting an unrelated conversation; it now privately says there is nothing to restart"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed plugin rows in Slack access settings showing an unlabeled raw ID with no way to turn the plugin off; they now show its name and link to the bundle that manages it"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the shared-session banner and Share dialog on sessions started from Slack claiming the whole organization could open the link; they now name the Slack channel's audience"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved load time of the admin settings page and its Slack channel picker, most noticeably for organizations with many channels or several connected workspaces"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Improved scheduled routines in Slack channels: a routine run can now reply in an existing thread instead of always posting a new top-level channel message"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Improved the timestamp on Claude's live progress checklists to show each reader's local time and how long ago it was updated, instead of a fixed UTC time"
        }
      ]
    },
    {
      "version": "2.1.268",
      "items": [
        {
          "kind": "追加",
          "text": "Added to the Claude apps gateway: with pricing: set in gateway.yaml, signed-in Claude Code clients receive the same rates through managed settings, so /cost and telemetry match the spend meter"
        },
        {
          "kind": "追加",
          "text": "Added a startup warning for gateways when access_control.allow_cidrs is empty, and a one-time warning the first time a request arrives from a public address"
        },
        {
          "kind": "追加",
          "text": "Added the gatewayInternalNetworks managed setting, letting administrators allow /login to a Claude apps gateway on their organization's own public IPv4 block"
        },
        {
          "kind": "追加",
          "text": "Added claude self-hosted-runner --remove-session-state (default off): delete each session's per-session directories under <base-dir>/_sessions/ when the session ends"
        },
        {
          "kind": "追加",
          "text": "Added configDirectory to the output of claude auth status --json"
        },
        {
          "kind": "追加",
          "text": "Added --json to claude plugin install, uninstall, update, enable and disable, and errorDetails/noteDetails to each row of claude plugin list --json"
        },
        {
          "kind": "追加",
          "text": "Added browser-tab icons for published artifacts, chosen by Claude to match each page"
        },
        {
          "kind": "修正",
          "text": "Fixed every turn failing with HTTP 400 on third-party Anthropic-compatible endpoints (ANTHROPIC_BASE_URL) since 2.1.265: a regex in the Artifact tool's input schema that those endpoints reject"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch hanging indefinitely on a server that keeps the response open without finishing; a fetch now fails after 300 seconds. Set CLAUDE_CODE_WEBFETCH_DEADLINE_MS to override the deadline (0 turns it off)"
        },
        {
          "kind": "修正",
          "text": "Fixed a respawned in-process teammate picking up tools or a system prompt from a same-named agent file in a folder you have not trusted"
        },
        {
          "kind": "修正",
          "text": "Fixed sustained high CPU usage: a busy loop in long-running idle sessions no longer pins a CPU core, and rapid terminal focus reports during a session recap no longer keep the CPU high"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude sometimes replying \"your message came through empty\" after an MCP tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed deny and ask permission rules on symlinked directories (/etc, /tmp, /var on macOS; /bin on Linux) not applying when a path was given by its real location, and Bash commands ignoring deny rules written on a symlinked path spelling"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a Read or Edit deny rule did not apply when an env -C, eval or similar command the permission checker cannot analyze was on the same line"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin and marketplace errors showing a token or password from a git source URL"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp and /plugin server details, claude mcp list/get, and MCP login errors showing secrets resolved from ${VAR} placeholders in MCP configs"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt caching and extended thinking breaking mid-session for SDK sessions using excludeDynamicSections: the first message is no longer re-rendered each request"
        },
        {
          "kind": "修正",
          "text": "Fixed entitled users being told a model is restricted after restart or in the Desktop Code tab when a cached model-access denial was stale"
        },
        {
          "kind": "修正",
          "text": "Fixed a running session silently switching to the organization's default model when another Claude Code process refreshed a stale model-access entry"
        },
        {
          "kind": "修正",
          "text": "Fixed long-context 429s on Fable models showing the usage-credits consent prompt instead of the 1M-context message on Pro and Team plans"
        },
        {
          "kind": "修正",
          "text": "Fixed workload identity federation via a profile (as claude-code-action configures it): processes sharing the profile could fail mid-run with 401 … jti reused"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP server OAuth sign-in failing with \"No available ports for OAuth redirect\" when the local callback port range can't be bound"
        },
        {
          "kind": "修正",
          "text": "Fixed the conversation summary produced by /compact and auto-compact mangling text that contained $ sequences"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a conversation that ended with /compact: its restored-file notes now load in the same order on every resume"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK prompt suggestions, side questions and /rename sending the conversation from before a compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed @ file and / command suggestions not appearing after recalling a previous prompt with the up arrow and editing it"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents: pressing ← again at a natural pace to go back to the agent list no longer gets ignored until you pause for over a second"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents session delete getting stuck when a worktree can't be removed: the message names the cause and next step, and for a git worktree ctrl+x again deletes the directory anyway"
        },
        {
          "kind": "修正",
          "text": "Fixed background agent and workflow rows in the agents panel expanding to many lines when their text contained line breaks"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Slack sessions losing their Slack tools when org managed settings set an MCP allowlist"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome asking to allow the host \"https\" when a navigation URL had a scheme but a host that could not be parsed"
        },
        {
          "kind": "修正",
          "text": "Fixed the spinner wrapping onto several lines when the current task's label is long; the label and the \"Next:\" task line now stay within one terminal row"
        },
        {
          "kind": "修正",
          "text": "Fixed the /bug and /feedback description field showing no cursor when the terminal's native cursor is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions served by claude remote-control showing a generated name instead of their session title in ListAgents"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate rejecting plugin paths whose directory name begins with two dots, which the plugin loader accepts"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins silently skipping a default monitors file or root SKILL.md that could not be checked"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch's error for localhost and other dotless hostnames to explain why the URL is refused and suggest curl"
        },
        {
          "kind": "修正",
          "text": "Fixed PermissionRequest hooks not firing in --print mode"
        },
        {
          "kind": "修正",
          "text": "Fixed policy-helper warnings not printing on headless (-p) runs"
        },
        {
          "kind": "修正",
          "text": "Fixed /resume listing a /fork background session under its parent's name instead of its own ⑂ fork name"
        },
        {
          "kind": "修正",
          "text": "Fixed /remote-control and other claude.ai-gated commands to suggest /login when signed out instead of showing a Claude for Enterprise migration message"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS not extending SessionEnd hooks that have no per-hook timeout (they were still cancelled after 1.5 seconds)"
        },
        {
          "kind": "修正",
          "text": "Fixed /autofix-pr and other cloud-session commands saying to retry or install the Claude GitHub App when no GitHub account is connected; they now point to /web-setup or the web connect page"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud-session commands such as /teleport and /remote-env to explain when an organization policy turns them off, instead of answering \"Unknown command\""
        },
        {
          "kind": "修正",
          "text": "Fixed Bash sandbox instructions over-stating confinement: no unenforced path lists when filesystem isolation is off, and strict mode no longer claims commands can never run unsandboxed"
        },
        {
          "kind": "改善",
          "text": "Improved fullscreen mode: adding or removing a prompt line (Shift+Enter) now repaints as fast as typing a character instead of re-rendering the visible transcript"
        },
        {
          "kind": "改善",
          "text": "Improved --continue / --resume: the conversation appears immediately instead of waiting for SessionStart hooks, and the first message no longer re-reads the whole transcript"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness during tool-heavy turns by no longer redrawing the transcript for a hidden per-tool-batch reminder"
        },
        {
          "kind": "改善",
          "text": "Improved startup time in projects with .claude/workflows/ scripts: listing them no longer parses each script"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode denials: the message Claude receives now names the rule that blocked the action and asks Claude to try a safer method and finish unrelated work before stopping to ask you"
        },
        {
          "kind": "改善",
          "text": "Improved Claude in Chrome: long page reads now stay inline instead of being saved to a file and read back"
        },
        {
          "kind": "改善",
          "text": "Improved the MEMORY.md truncation warning to say how many lines were cut and where the cut starts"
        },
        {
          "kind": "改善",
          "text": "Improved the terminal permission prompt for artifacts: it now leads with the ask's question"
        },
        {
          "kind": "改善",
          "text": "Improved the prompt footer: an editor or /diff selection now shows inside the prompt input, and fullscreen mode shows Remote Control status in the header instead of the footer"
        },
        {
          "kind": "改善",
          "text": "Improved the \"Usage credits required for 1M context\" message to say that usage credits turned on mid-session take effect after restarting Claude Code"
        },
        {
          "kind": "改善",
          "text": "Improved /plugin: installing, enabling or disabling a plugin now takes effect when you close the menu; /reload-plugins is no longer needed afterwards"
        },
        {
          "kind": "変更",
          "text": "Changed the system prompt on Bedrock, Vertex and Foundry to deliver environment, model and settings details as attachments, matching first-party sessions"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Vertex and Foundry sessions to keep the tool list byte-stable across a conversation (late-connecting tools load deferred instead of rewriting it), matching first-party sessions"
        },
        {
          "kind": "変更",
          "text": "Changed the task-tracking tools (TaskCreate/Get/Update/List, TodoWrite) to be offered only on Claude 3.x, Opus 4.0–4.7, Sonnet 4.0–4.6, Haiku 4.5; set CLAUDE_CODE_ENABLE_TODO_TOOLS=1 elsewhere"
        },
        {
          "kind": "変更",
          "text": "Changed the artifact data-edit permission prompt in the terminal to a card that shows the document count and who can open the artifact"
        },
        {
          "kind": "変更",
          "text": "Changed local Cowork sessions set to skip all approvals: the Artifact tool now refuses a local file outside the session's folders, or behind a symlink, instead of reading it without asking"
        },
        {
          "kind": "変更",
          "text": "Changed plain WebFetch deny and ask rules to no longer apply to Artifact tool reads and updates; use an Artifact rule (or WebFetch(domain:claude.ai)) to block or gate them"
        },
        {
          "kind": "変更",
          "text": "Changed the \"N MCP servers need authentication\" startup notice to announce each server once instead of at every launch"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list, settings toggles, and chat tabs when CLAUDE_CONFIG_DIR is set in a settings file or the environmentVariables setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the model pill, model picker and command menu going blank in open tabs for a few seconds after a login, logout or account switch"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Auto disappearing from the mode picker in new-tab or just-reloaded conversations when a project or local setting overrides the model named in ~/.claude/settings.json"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed session names reverting to the last prompt after a window reload when a SessionStart hook is configured"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the footer's model pill and Remote Control pill waiting for the new tab's Claude process to start when another tab in the window is already up"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a second Claude process running through its full startup when a session tab's launch arrived more than half a second after its config read"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed resuming a session from the session list ignoring claudeCode.preferredLocation: \"sidebar\" (it always opened a panel), and programmatic opens resetting that setting to \"panel\""
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Windows issues: the WSL install prompt no longer appears on machines without WSL installed, and IDE diagnostics are now returned correctly for Windows files when WSL is installed"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the custom style builder saving a User level style in a folder the CLI does not read when CLAUDE_CONFIG_DIR is set through settings"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added Left and Right arrow keys to change where an always-allow permission rule is saved, for keyboard and screen reader users"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a \"Claude Code: Focus last message\" command that moves keyboard focus to the newest message in the conversation, for keyboard and screen reader users"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the Manage plugins dialog to apply installs, enables, disables and uninstalls to open sessions without a restart"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed some artifact permission prompts to omit the \"don't ask again\" choice, matching the terminal"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed cloud sessions running longer than about six hours silently losing files saved to persisted session folders; saves now persist for up to a day"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed \"Invalid effort level\" errors when a routine resumes a session, or a session starts with no set effort, in orgs where an admin caps a model's effort"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Improved routine creation from a conversation: when the new routine has no connectors, Claude now says so and how to add them instead of only confirming it"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the admin settings page hanging on a loading skeleton or going blank after a transient load failure; a section that fails to load now shows a Retry button"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a link from a Slack channel's configure page back to the organization's Claude in Slack admin settings"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a Slack Enterprise Grid channel losing its Claude settings (repository, environment, access) after a Slack admin moved it to another workspace"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved how Claude explains a blocked action: it now says whether a permission check, its own decision to confirm first, or missing access stopped it"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved reply speed: Claude now runs several read-only lookups (searching Slack, reading a thread, finding people) at once instead of one after another"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved formatting of comparisons: sentence-length comparisons now come as lists instead of wide tables that scroll sideways, and long table cells wrap"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed @Claude !restart in a thread with its own session sometimes also posting a contradictory \"this thread is handled by the channel session\" notice"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved the message shown when your Claude account is in a different organization than the Slack workspace: it now explains how to connect the workspace to your org"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Markdown links whose URL is wrapped in angle brackets showing as literal bracket text in Slack instead of a clickable link"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a workspace guest's top-level @mention in a channel where guests may use Claude sometimes getting a \"your Slack account isn't connected\" reply instead of an answer"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a channel's long-running session being replaced with a fresh one mid-conversation; the scheduled refresh now waits until the channel and its threads are quiet"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed channel-settings cards clicked more than once telling the proposing session the change was refused after it had already applied; the outcome is now sent once"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed memory in public channels: each channel now keeps its own notes, and Claude no longer recalls notes it saved in other public channels; workspace notes stay shared"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Added a note under the still-open findings list in follow-up reviews: resolving a finding's thread, not just replying to it, stops later reviews from counting it as open"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed reviews sometimes ending as incomplete when one of the agents verifying a finding failed midway; the review now replaces that agent and reaches a verdict"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a push-triggered review that was queued behind a running review still posting after the pull request had been converted to draft"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed reviews ignoring a directory's CLAUDE.md conventions when the PR edited a root file (e.g. README.md) that only shares a name with a file that CLAUDE.md lists"
        }
      ]
    },
    {
      "version": "2.1.267",
      "items": [
        {
          "kind": "追加",
          "text": "Added maxEffortLevel setting (top-level or per model under modelSettings): caps the effort level on every provider, including Bedrock, Vertex and Foundry; users can still pick a lower level"
        },
        {
          "kind": "追加",
          "text": "Added --system-prompt-snapshot off to render the system prompt fresh on every request instead of reusing the conversation's recorded prompt (for iterating on prompt text)"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork scheduled tasks in the cloud failing at startup for organizations whose managed settings require sandboxing"
        },
        {
          "kind": "修正",
          "text": "Fixed /context and other local command output rendering blank on mobile clients"
        },
        {
          "kind": "修正",
          "text": "Fixed shift+enter and option+backspace not working after reconnecting to a tmux or ssh session inside an agent view"
        },
        {
          "kind": "修正",
          "text": "Fixed the dim last-prompt header not appearing at the top of the conversation when scrolling up in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Workflow agent() calls with large output schemas being refused in auto mode instead of being checked by the safety classifier"
        },
        {
          "kind": "修正",
          "text": "Fixed a case where a marketplace entry path containing a backslash could bypass the containment check for fetched marketplaces on macOS and Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed expired AWS or Google Cloud credentials under a host app such as Claude Desktop retrying ten times with a generic \"request failed\" before the re-authenticate error appeared"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session after /compact or another slash command ran via -p --resume: a spurious \"Continue from where you left off.\" turn is no longer inserted"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a large session (transcript over 5 MB): parallel tool calls and their hook output are no longer dropped from the reloaded conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed managed allowedHttpHookUrls, httpHookAllowedEnvVars and allowedChannelPlugins to admit nothing, not everything, when unreadable"
        },
        {
          "kind": "修正",
          "text": "Fixed /login on machines whose managed settings require Claude apps gateway sign-in: Esc now closes the dialog instead of doing nothing"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publishes cut off by a dropped connection mid-upload: they now retry once when Claude Code can tell the upload never completed, instead of reporting an unknown outcome"
        },
        {
          "kind": "修正",
          "text": "Fixed effort: frontmatter on custom commands, skills, and subagents being ignored on models whose default effort is still pinned (Opus 4.7, Opus 4.8, Fable 5)"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publish failing with an unhelpful error when the page file isn't valid UTF-8 or contains a replacement character (U+FFFD); the error now names the line and column to fix"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents @ directory menu not listing repositories created after the session started"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients that join a Claude Desktop or VS Code session showing a stale permission mode until it was changed again"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control exiting and dropping every attached session when its server credential expires (about 30 days after start); the host now re-registers and keeps going"
        },
        {
          "kind": "修正",
          "text": "Fixed the usage-limit warning flickering on and off during a session when requests for different models or modes report different limit windows"
        },
        {
          "kind": "修正",
          "text": "Fixed earlier reasoning being dropped when an MCP server re-sends, or a built-in tool re-renders, a tool the model already loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a tool that disappears mid-conversation, from a disconnected MCP server or an upgrade, rewriting the tool list and discarding earlier thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed a background worker forked from a conversation adding EnterWorktree to the conversation's tool block mid-session, which broke prompt-cache reuse"
        },
        {
          "kind": "追加",
          "text": "Fixed mid-session MCP and plugin tools being added to the tool list in sessions without ToolSearch, which broke prompt-cache reuse; supported models now receive them as deferred definitions"
        },
        {
          "kind": "修正",
          "text": "Fixed switching models with /model re-sending every tool definition (a prompt-cache miss); commit and PR attribution text now arrives as a conversation note that updates on model changes"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions rewriting the inline tool set when an MCP connector reconnects at a different moment than before"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions re-rendering tool descriptions instead of replaying the recorded ones when the first turn ran a tool"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt-cache misses and dropped extended thinking when a claude.ai connector's tools change between a session and its resume"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions rewriting earlier MCP tool announcements (and dropping extended thinking) before their connectors reconnect"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt-cache break when a print-mode (-p) conversation is resumed interactively: the system prompt prefix no longer changes"
        },
        {
          "kind": "変更",
          "text": "Improved the /diff panel: it no longer flashes \"0 files changed\" and a spinner before settling, and its empty state is centered in the panel"
        },
        {
          "kind": "改善",
          "text": "Improved the Bash tool's description guidance so Claude describes what a command does in plain words instead of echoing the command"
        },
        {
          "kind": "改善",
          "text": "Improved sandbox guidance so Claude suggests /copy when clipboard commands such as pbcopy fail inside the sandbox"
        },
        {
          "kind": "改善",
          "text": "Improved --resume first-render time for sessions with many Bash tool calls"
        },
        {
          "kind": "改善",
          "text": "Improved prompt input responsiveness: keystrokes no longer occasionally wait a frame behind spinner or streaming repaints"
        },
        {
          "kind": "改善",
          "text": "Improved prompt-cache stability: subagents and sessions started with --system-prompt or --append-system-prompt now record the system prompt and tool definitions once instead of re-rendering them"
        },
        {
          "kind": "改善",
          "text": "Improved Artifact tool publish errors: when a publish is refused, the message now says why and what to do about it"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed --use-anthropic-git-proxy to be reported to the server at registration and to print a warning for each session that still clones through the legacy git proxy"
        },
        {
          "kind": "変更",
          "text": "Gateway: Changed forward_user_identity upstreams to return a 429 as-is to a developer whose email was forwarded, instead of failing over to the next upstream, so the proxy's per-user limits hold"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the extension host hanging at 100% CPU when forking, editing an earlier message, or rewinding in a conversation whose saved transcript contains a cyclic parent link"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed pasting a screenshot on WSL2/WSLg inserting raw image bytes into the chat input; the image is now attached when the clipboard provides it, otherwise the paste is ignored"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed chat diff blocks always rendering with a dark editor theme; they now follow the active VS Code color theme, including high contrast"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed mixed right-to-left and English text rendering in the wrong order while typing in the message input"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed accepting an edit in the diff view on a file with Windows (CRLF) line endings failing with \"String not found in file\""
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed @-mentions dropping files whose paths contain spaces"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sessions list view failing to load in windows connected over Remote-SSH when the workspace folder exists only on the remote host"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed runaway ripgrep processes when viewing files in large or symlink-heavy workspaces"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed GitHub Enterprise Server sessions showing your GitHub account as disconnected once its token expired; PR and issue operations now refresh it automatically"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed gh and GitHub API calls failing in organizations without the Claude GitHub App; they now use your connected GitHub account and say so when none is connected"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a \"Use a custom connector\" link to the preset connection forms in Claude Tag admin settings, so you can switch to a custom connection without starting over"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude replying \"The API rejected the request as invalid\" when the organization has run out of usage credits; the reply now says so and explains how to add more"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed thread requests to edit or delete a message Claude posted at the channel's top level being answered with a correction instead of reaching the session that posted it"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed **Connect** on Tool access requests under Admin settings > Review requests failing with \"Authorization failed\" or showing the requested access bundle as deleted"
        }
      ]
    },
    {
      "version": "2.1.266",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed a 2.1.265 regression affecting LLM-gateway and proxy setups: the undocumented CLAUDE_CODE_USE_GATEWAY environment variable, previously ignored unless ANTHROPIC_BASE_URL and ANTHROPIC_AUTH_TOKEN were both set, began forcing Cloud-gateway sign-in on its own in 2.1.265, so configurations that set it alongside an API key, apiKeyHelper, or custom auth headers failed every request with \"Not signed in to the Cloud gateway\". The variable on its own is ignored again; no configuration change is needed"
        }
      ]
    },
    {
      "version": "2.1.265",
      "items": [
        {
          "kind": "追加",
          "text": "Added user.email and user.groups to the telemetry Claude Desktop and Cowork send through a Claude apps gateway, matching terminal sessions"
        },
        {
          "kind": "追加",
          "text": "Added support for pointing --plugin-dir at a folder of plugins: each child folder with a manifest loads, and children added or removed while running are picked up"
        },
        {
          "kind": "追加",
          "text": "Added a 1 GB cap on tool results saved to disk; the in-conversation preview says when a saved file was truncated"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a foreground-spawned subagent changing its tool list and system prompt prefix, which broke prompt-cache reuse for that agent"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teammates and resumed subagents moving SubagentStart hook context and preloaded skills out of the prompt prefix on later turns, which broke prompt-cache reuse"
        },
        {
          "kind": "修正",
          "text": "Fixed resume after the previous process died while a tool was running: the last prompt is no longer rewritten, and the interrupted tool call is kept and marked interrupted"
        },
        {
          "kind": "修正",
          "text": "Fixed /model opusplan[1m] being rejected with \"Model not found\""
        },
        {
          "kind": "修正",
          "text": "Fixed syntax-highlighted code in permission prompts and messages sometimes omitting a character after a Ruby ?, Erlang $, or Perl $ sigil"
        },
        {
          "kind": "修正",
          "text": "Fixed the fullscreen transcript jumping by one row whenever the slash-command or @-file suggestion list opened or closed"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin path containing a backslash bypassing the symlink containment check on macOS and Linux"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin directories whose names begin with two dots being wrongly refused as outside the plugin root"
        },
        {
          "kind": "修正",
          "text": "Fixed VS Code and SDK sessions occasionally requiring re-login when a session was closed while refreshing its token"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions sending the end-of-turn signal before the reply's last message, which could show a reply as finished in the Claude app before its last part arrived"
        },
        {
          "kind": "修正",
          "text": "Fixed background (--bg) sessions occasionally being retired mid-turn when a message arrived just before the idle timeout"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code's own git status and diff probes running clean filters configured by a nested repository inside the working tree"
        },
        {
          "kind": "修正",
          "text": "Fixed the advisor tool and its instructions being re-decided per request from the request's model; the decision is now made once and announced in the conversation when it changes"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publish accepting connector tool names the connector doesn't expose; the publish is now refused when none of the declared tools exist, and warned when only some don't"
        },
        {
          "kind": "修正",
          "text": "Fixed /add-dir <subdirectory> refusing to load a subdirectory's agents when managed settings lock only skills to plugins, and promising agents when only agents are locked"
        },
        {
          "kind": "修正",
          "text": "Fixed two-key keyboard shortcuts cancelling silently when the second key arrived more than a second later, as happens inside tmux; they now wait 3 seconds and show a notice when they time out"
        },
        {
          "kind": "修正",
          "text": "Fixed forked skills (context: fork) not streaming their kickoff prompt and, with --forward-subagent-text, their text turns as progress events in stream-json"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin's default component folder that the OS cannot check, such as a symlink loop, being silently skipped; it is now reported in /plugin with the error code"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's OTLP telemetry relay pausing all forwarding to a collector for 30 seconds after it rejected a few payloads as malformed or too large"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin Discover/Browse and claude plugin list --json --available showing no description or display name for marketplace plugins whose metadata lives only in their plugin.json"
        },
        {
          "kind": "修正",
          "text": "Fixed /login showing \"no gateway URL is configured\" when re-run in a session that signed in to a Claude apps gateway set by managed settings"
        },
        {
          "kind": "修正",
          "text": "Fixed /model claiming a model was \"saved as your default\" when the settings file couldn't be written; it now says the save failed and why"
        },
        {
          "kind": "修正",
          "text": "Fixed /clear from Remote Control waiting on SessionStart hooks and on open terminal dialogs before completing"
        },
        {
          "kind": "修正",
          "text": "Fixed the /config dialog changing height when switching between its tabs"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a workflow run after its container restarted; a resume whose run journal is missing now fails with a clear error instead of rerunning every agent"
        },
        {
          "kind": "修正",
          "text": "Fixed the claude-api skill's error-code reference: model access failures return 404 and unavailable beta headers return 400, not 403"
        },
        {
          "kind": "追加",
          "text": "Fixed non-interactive sessions (-p with stream-json input, Agent SDK, cloud sessions) resetting the shell working directory at each new user message; a cd now persists across turns"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers configured as http that only speak the legacy HTTP+SSE transport never connecting; Claude Code now falls back to SSE as the MCP spec describes"
        },
        {
          "kind": "修正",
          "text": "Fixed some claude.ai connectors in cloud sessions showing as needing authentication even though they are connected in claude.ai (servers that answer an unsupported request with HTTP 401)"
        },
        {
          "kind": "修正",
          "text": "Fixed remote sessions keeping their sandbox container alive while a connector approval or sign-in link waits for you"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions showing long model-facing recovery instructions in \"background task didn't finish\" notices instead of a short status line"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed Read, Write and Edit refusing every file (\"symlink resolution changed after permission was checked\") when running inside an AppContainer or restricted-token sandbox"
        },
        {
          "kind": "追加",
          "text": "Improved --worktree startup on large repositories: the new worktree is now checked out in parallel (git 2.32+)"
        },
        {
          "kind": "改善",
          "text": "Improved /workflows agent detail: tool calls are marked running, failed or done, the subagent's task list is shown when it has one, and Enter unfolds the listed calls with their inputs and results"
        },
        {
          "kind": "改善",
          "text": "Improved slash commands typed mid-prompt: matches now show in a list (Tab opens it outside fullscreen) instead of a single suggestion, and a plugin skill is now found by its bare name"
        },
        {
          "kind": "改善",
          "text": "Improved remote MCP servers that need sign-in: Claude Code no longer registers an OAuth client with them until you actually authenticate"
        },
        {
          "kind": "改善",
          "text": "Improved the time to resume long sessions that read many files"
        },
        {
          "kind": "修正",
          "text": "Improved the error shown when an image over the size limits cannot be decoded: it now names the cause and how to fix it instead of only citing the limit"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's read of an artifact someone else wrote: the summary now treats the page as untrusted content and flags embedded instructions rather than relaying them"
        },
        {
          "kind": "その他",
          "text": "Updated the .claude folder permission option to say what it actually allows: editing files in the project's .claude folder (or ~/.claude) for the session"
        },
        {
          "kind": "変更",
          "text": "Changed machines with forceLoginGatewayUrl in managed settings to be Claude apps gateway sessions from startup, like forceLoginMethod: \"gateway\"; a leftover claude.ai login or API key is not used"
        },
        {
          "kind": "変更",
          "text": "Changed image processing to use the runtime's built-in image support; the CLI no longer extracts a native image module to the temp directory"
        },
        {
          "kind": "変更",
          "text": "Changed plugin display metadata to prefer the marketplace entry over plugin.json on the Installed tab and claude plugin details, filling gaps from plugin.json"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway sessions to export OpenTelemetry directly to a collector the gateway's managed settings name in OTEL_EXPORTER_OTLP_ENDPOINT, instead of through the gateway's relay; sessions without a named collector still use the relay"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added automatic archiving of sessions inactive for a set period (new \"Archive inactive sessions\" setting, default 14 days)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sidebar chat coming back blank after Reload Window or a restart when the conversation had been open for more than 10 minutes"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the timeline dot sitting below the text on the \"Remote Control is active\" message"
        }
      ]
    },
    {
      "version": "2.1.263",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    }
  ]
};
