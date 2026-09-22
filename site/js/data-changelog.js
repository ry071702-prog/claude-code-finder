/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.278",
      "items": [
        {
          "kind": "変更",
          "text": "Changed auto mode for Claude API and Enterprise users, and on Bedrock, Vertex, Foundry and gateways, to default to the server-side classifier, which does not charge for classifier overhead (CLAUDE_CODE_AUTO_MODE_SERVER=0 opts out on Bedrock, Vertex, Foundry and gateways); warns on billed fallback. See https://code.claude.com/docs/en/auto-mode-classifier-billing"
        },
        {
          "kind": "追加",
          "text": "Added an Auto mode server row to /status showing whether this session's auto mode classifier runs on the server"
        }
      ]
    },
    {
      "version": "2.1.277",
      "items": [
        {
          "kind": "追加",
          "text": "Added AGENTS.md support: in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead; change it under \"Project instructions\" in /config (not yet on Bedrock, Vertex or Foundry)"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1 for Claude apps gateways whose only egress is a forward proxy: every outbound request hands the proxy the hostname instead of resolving it locally"
        },
        {
          "kind": "追加",
          "text": "Added an optional headers: map on Claude apps gateway upstreams, to send static headers to a proxy you run in front of a provider"
        },
        {
          "kind": "追加",
          "text": "Added a line saying a background task's update is waiting when it finishes while a panel such as /tasks is open"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p and Agent SDK sessions that could hang with no result after an internal error; they now report the error and exit with code 1"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations failing every request with \"text content blocks must be non-empty\" when an earlier assistant turn held an empty text block beside other content, including after --resume"
        },
        {
          "kind": "修正",
          "text": "Fixed being unexpectedly logged out when an older Claude Code build (for example an IDE extension's bundled CLI) runs on the same machine as the current one"
        },
        {
          "kind": "修正",
          "text": "Fixed interactive start-up hanging or showing an error for ANTHROPIC_API_KEY users when ~/.claude.json holds a malformed customApiKeyResponses value"
        },
        {
          "kind": "修正",
          "text": "Fixed update checks erroring every 30 minutes, and claude update hanging when a minimum or maximum version is set, if a proxy returns an invalid version; a malformed minimumVersion is now ignored"
        },
        {
          "kind": "修正",
          "text": "Fixed claude update on winget- or apk-managed installs reporting \"up to date\" when the version lookup failed"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin install sometimes failing and breaking the installed copy when reinstalling a plugin version that a session or another program was using; an unchanged copy is now left alone"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob reporting no matches when the search could not start because the system was out of processes, memory or file handles; they now return an error saying so"
        },
        {
          "kind": "修正",
          "text": "Fixed the Write tool silently ending the turn as a declined permission when the target path is an existing directory; it now reports a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed the Edit tool treating an escaped backslash followed by uXXXX text as a \\uXXXX escape, which could make an edit of a non-ASCII character rewrite an escaped backslash sequence instead"
        },
        {
          "kind": "修正",
          "text": "Fixed the Edit tool reporting \"Invalid regular expression: regular expression too large\" instead of \"String not found in file\" when a very large edit containing non-ASCII text did not match the file"
        },
        {
          "kind": "修正",
          "text": "Fixed a turn ending early with \"Path contains null bytes\" when a tool call's file path contained \\u0000 written as an escape sequence; escaped control characters now stay as literal text"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions (claude --bg) exiting when a plugin's LSP server exited or closed its stdin"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash (\"Type error\") when opening /mcp or /plugin manage with a malformed claudeAiMcpEverConnected value in ~/.claude.json"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash at launch when ~/.claude.json holds a malformed theme value"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash (\"unrecoverable interface error\") when the prompt held text containing terminal color codes, for example a prompt recalled from history or text loaded from the external editor"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when resuming a session whose saved history holds an assistant message stored as a plain string"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions on slow or heavily loaded machines sometimes exiting with \"Claude Code exited after an unrecoverable interface error\" when the first spinner appeared"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare case where the screen could stop updating for the rest of the session after an internal rendering error"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare case on Windows where a turn could stop with an error such as \"Out of memory\" right after Claude replied, so that reply's tool calls never ran"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions continued after /clear (restart, --continue, --resume) missing part of their first message when a SessionStart hook printed output, causing a full prompt-cache miss"
        },
        {
          "kind": "修正",
          "text": "Fixed messages from other agents (such as a subagent's SendMessage) that arrived mid-turn showing up below the \"Ran N shell commands\" row instead of where they arrived"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"copied\" notice not appearing after drag-selecting text in the fullscreen /resume picker and other panels that cover the prompt area"
        },
        {
          "kind": "修正",
          "text": "Fixed $TMPDIR expanding empty in Bash commands that run outside the sandbox while sandboxing is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed WebFetch and WebSearch in Cowork cloud sessions not telling Claude why a request was refused, such as a used-up fetch budget or an admin policy"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude apps gateway's telemetry relay ignoring a collector hostname or domain listed in NO_PROXY when a proxy is set"
        },
        {
          "kind": "修正",
          "text": "Fixed one malformed strictKnownMarketplaces or blockedMarketplaces entry silently disabling the whole enterprise marketplace policy"
        },
        {
          "kind": "修正",
          "text": "Fixed failed auto-updates leaving large staged downloads behind in ~/.cache/claude/staging"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin not stripping terminal control characters from messages on the Installed tab, such as the error of a failed plugin update"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin → Installed and /skills crashing when a skill or legacy command is named like a built-in Object property such as constructor or toString"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin closing with no message when every install in a multi-select failed"
        },
        {
          "kind": "修正",
          "text": "Fixed uninstalled plugins reappearing as \"failed to load\" rows in /plugin Installed, and Remove not clearing such a row"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins from the official marketplace being recorded without their commit in installed_plugins.json, and installed_plugins.json keeping the old commit after updating a pinned-commit plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin reload previews keeping every previewed copy of a plugin archive unpacked until exit, and overwriting the cached --plugin-url archive a reload falls back to when its download fails"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control session bookkeeping failing when ~/.claude.json holds a malformed placeholder record"
        },
        {
          "kind": "修正",
          "text": "Fixed the error after a revoked claude.ai login blaming an expired Anthropic profile; it now leads with /login"
        },
        {
          "kind": "修正",
          "text": "Fixed typed or pasted text occasionally coming out scrambled in the claude agents dispatch input during key repeat or very fast input"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash (\"unrecoverable interface error\") when resuming a session whose saved transcript contains a stop hook summary without a well-formed hook list"
        },
        {
          "kind": "修正",
          "text": "Fixed Enter on a selected agent panel row doing nothing when keybindings.json rebinds Enter in the Chat context, for example to chat:queueSubmit"
        },
        {
          "kind": "修正",
          "text": "Fixed PDF page reads on Windows failing when the working folder's path is long (about 120 characters or more)"
        },
        {
          "kind": "修正",
          "text": "Fixed a headless resume (claude -p --resume, the SDK, a VS Code extension window reload) starting the session's cost and usage totals at zero; headless sessions now save their totals at exit"
        },
        {
          "kind": "修正",
          "text": "Fixed project skills from the main repository not loading in --worktree sessions when .claude/skills is untracked"
        },
        {
          "kind": "修正",
          "text": "Fixed a sandbox.excludedCommands glob exempting an entire compound Bash command from the sandbox when only one part matched; every part must now match"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed subagents and teammates re-rendering the MCP tool definitions they had loaded, which broke prompt caching for that agent"
        },
        {
          "kind": "修正",
          "text": "Fixed rate-limited artifact publishes telling Claude to stop retrying; Claude is now told nothing was published and when to send the same publish again"
        },
        {
          "kind": "修正",
          "text": "Fixed attachments recorded earlier in a conversation being re-rendered after a resume or relaunch, which dropped extended thinking and missed the prompt cache"
        },
        {
          "kind": "修正",
          "text": "Fixed Console sign-in showing only \"Request failed with status code 400\" when the server refuses to create an API key; it now shows the server's message"
        },
        {
          "kind": "修正",
          "text": "Fixed messages typed while Claude is still working sometimes being ignored by the model"
        },
        {
          "kind": "改善",
          "text": "Improved session start-up for SDK and headless (-p) use: the first turn no longer waits on the per-directory CLAUDE.md lookup"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's loopback error messages to name CLAUDE_GATEWAY_ALLOW_LOOPBACK"
        },
        {
          "kind": "改善",
          "text": "Improved /plugin Installed: an MCP server listed apart from its plugin now shows which plugin it belongs to"
        },
        {
          "kind": "改善",
          "text": "Improved claude plugin install on an already-installed plugin: it now says when the marketplace offers a newer version and names the claude plugin update command"
        },
        {
          "kind": "改善",
          "text": "Improved the startup notice overflow line under the logo: it now reads \"N more notices hidden\" instead of \"+N more · /status\""
        },
        {
          "kind": "変更",
          "text": "Improved prompt handling: invisible Unicode formatting and tag characters in a prompt are removed and the cleaned prompt is shown for review before it is sent"
        },
        {
          "kind": "追加",
          "text": "Improved /ultrareview when there's nothing to review: messages say which case you're in, offer a command that reviews your latest commit, and a new repository's first commit is reviewed in full"
        },
        {
          "kind": "改善",
          "text": "Improved artifact link handling so Claude reads claude.ai artifact links with the Artifact tool instead of WebFetch when that tool is available"
        },
        {
          "kind": "改善",
          "text": "Improved the dangerous-rm permission prompt to name the flagged rm command and suggest a ${VAR:?} guard, so headless runs can recover"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's permission prompts: shorter sentences, pages and artifacts named by title or file name, and links listed after the text"
        },
        {
          "kind": "変更",
          "text": "Changed Fable to always appear in /model on the Anthropic API; it is greyed out only when your organization's settings disable it"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash sandbox instructions on Bedrock, Vertex and Foundry to the first-party wording, which frames the sandbox as the boundary of what the task was given"
        },
        {
          "kind": "変更",
          "text": "Changed /ultrareview in non-interactive sessions to refuse when the repository has no base branch or shared history"
        },
        {
          "kind": "変更",
          "text": "Changed subagent results to reach the main agent under a header marking them as subagent output, with the result indented, so text in a subagent's result cannot pass as the session's own instructions"
        },
        {
          "kind": "変更",
          "text": "Changed workflow scripts' computed agent() prompts on Bedrock, Vertex and Foundry to reach the subagent framed as script-authored text, so the safety classifier does not read them as the user"
        },
        {
          "kind": "変更",
          "text": "Removed the background Haiku auto-title request from claude -p runs launched outside an SDK or IDE"
        },
        {
          "kind": "変更",
          "text": "Removed the deprecated TaskOutput tool; Claude reads a background task's output file with Read instead, and the taskOutputMaxChars setting and TASK_MAX_OUTPUT_LENGTH no longer have any effect"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Sign out row to the panel menu, with /logout in the typed command menu"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added background shells and other running tasks to the agent map, each with a Stop, and a typed /tasks that opens it"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Copy response button on responses and a typed /copy"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a one-time notice when inactive sessions are archived automatically, and an \"Unarchive all\" action on the Archived sessions group"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the session's cost and token usage to the Account & usage dialog and the session manager where plan limits do not apply (Vertex, Bedrock, Foundry, API key)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"General config\" menu row showing /config usage text instead of opening settings, and made typed /mcp, /hooks, /memory, /rewind and similar commands open their dialogs"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the effort slider's level not persisting into later sessions on a model that already had a level saved with /effort"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Auto missing from the mode picker for conversations opened in an already-used panel when the saved model setting is a differently-cased alias such as \"Sonnet\""
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed /fast not saving fast mode as the default, so it was lost when the extension relaunched Claude Code"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added Personal and Organization sections to the environment picker on Team and Enterprise plans, and admins can now share a personal environment with the organization"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed organization environments to open as a read-only summary from the Code tab on Team and Enterprise plans, with editing under Admin settings → Cloud environments"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed a cloud environment saved with Custom network access and no domains silently reverting to Trusted; the dialog now asks for at least one domain"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed the admin Claude Code setting labeled \"Web\" to \"Cloud sessions\" and removed the redundant read-only Mobile row beneath it"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed routines created in a Slack channel on an Enterprise Grid org-wide install failing to read other public channels in their workspace when they ran"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the \"Learn more\" links on credential presets in Claude Tag access bundles to open each vendor's credential-setup page instead of a generic API reference"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the Pylon credential preset in Claude Tag access bundles so admins can point it at Pylon's EU host"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Google Cloud credential forms in Claude Tag access bundles: a refused key file now says why, the website and scopes stay locked, and a rejected rotation keeps the pasted key"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the network events log in Claude Tag admin settings showing no response status for requests through connections that use AWS signing, client certificates or a custom CA"
        }
      ]
    },
    {
      "version": "2.1.276",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed every request failing with 400 … Input tag 'advisor_20260301' when ANTHROPIC_BASE_URL points at a proxy or gateway (2.1.275 regression)"
        }
      ]
    },
    {
      "version": "2.1.275",
      "items": [
        {
          "kind": "追加",
          "text": "Added the signed-in account to Claude apps gateway sign-in: when the gateway names it, you confirm it before the credential is saved, and /status shows it"
        },
        {
          "kind": "追加",
          "text": "Added a send-now key (ctrl+enter, or ctrl+x ctrl+s) that interrupts the current turn and sends all queued messages at once; sent and queued messages show in gray until the model receives them"
        },
        {
          "kind": "追加",
          "text": "Added a startup warning when a configured otelHeadersHelper fails, so sessions that silently export no telemetry are noticed"
        },
        {
          "kind": "追加",
          "text": "Added syncing of the skills and plugins enabled on your claude.ai account to terminal sessions signed in with it; opt out with syncClaudeAiSkills: false or syncClaudeAiPlugins: false"
        },
        {
          "kind": "追加",
          "text": "Added /plugin install <plugin> --marketplace <source>, which offers to add the marketplace before installing the plugin"
        },
        {
          "kind": "修正",
          "text": "Fixed a restored memory file's age note changing between requests after a compaction or resume, which caused prompt cache misses"
        },
        {
          "kind": "修正",
          "text": "Fixed --forward-subagent-text stream-json and SDK output dropping the messages of subagents spawned by a context: fork skill, and of forked skills invoked by a subagent or another forked skill"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mention file suggestions being buried below MCP resources when using a custom fileSuggestion command or typing @./@./"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode placing background-task completion notices beneath a long turn's collapsed tool row instead of where they arrived; each notice now closes the open row"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin marketplace update deleting a GitHub marketplace's local copy when the fetch failed and the marketplace was named after its repository"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin and marketplace messages, logs and claude plugin marketplace list showing a password or token stored in a git, ssh or marketplace URL"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed cloud session leaving an unanswered question open in the transcript after a queued message superseded it"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode placing the cursor one character right after a dot-repeated \"!\" or a fast-typed \"i!\" switched a non-empty prompt into shell mode"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode freezing or blanking for several seconds when scrolling up past a large file diff"
        },
        {
          "kind": "修正",
          "text": "Fixed a stray </ccmemory>-style closing tag occasionally appearing in responses"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin messages, logs and the VS Code plugin dialog showing the wrong server for some git addresses"
        },
        {
          "kind": "修正",
          "text": "Fixed a terminal API Error: 400 on every turn for users behind a network gateway that rewrites API error responses when a beta request header is rejected"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands on Linux reporting exit code 0 for failed commands when the shell is zsh"
        },
        {
          "kind": "修正",
          "text": "Fixed the Read tool hanging instead of reporting an error when part of a large file could not be decoded under memory pressure"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume, the resume picker preview, resumed background agents and the transcript view failing on a session whose saved history contains a malformed task-reminder or @-file attachment entry"
        },
        {
          "kind": "追加",
          "text": "Fixed a crash when resuming a conversation whose transcript contains a malformed message entry, and a fullscreen crash when such a conversation received new messages while scrolled up"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions failing to resume or start when their saved transcript contains a malformed message content block"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep, Glob and @-file suggestions hanging or running out of memory on searches over the 20MB output cap, and system ripgrep reporting \"no matches\" instead of an error after a flood of warnings"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind in a forked or background session restoring a zero-filled or truncated file when the session's file-history backups could not be fully copied"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen sessions sometimes exiting with \"Claude Code exited after an unrecoverable interface error\" when typing fast or holding a key with the slash-command dropdown open"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions crashing and restarting their worker when a command fed through stdin ran on a machine that had run out of file descriptors"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash at launch when ~/.claude.json holds a malformed mcpNeedsAuthNoticed value"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume and --continue dropping a conversation's earlier thinking when a built-in tool it started with has since been switched off by a server-side flag"
        },
        {
          "kind": "修正",
          "text": "Fixed text selected with the mouse in the fullscreen claude --resume session picker never reaching the clipboard"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin reload previews replacing a running session's extracted plugin files when the plugin was loaded from a --plugin-dir or --plugin-url archive"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runners with --drain-wait-sec losing the final result of a turn that finished during a SIGTERM drain; the runner now waits briefly for the turn to be reported"
        },
        {
          "kind": "修正",
          "text": "Fixed SubagentStop hooks with a specific matcher firing for every stopping subagent whose agent type was empty"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands being unable to write to project directories named hooks/ or config/"
        },
        {
          "kind": "修正",
          "text": "Fixed Artifact updates failing with \"File not found\" after a session resumes on another machine or its scratchpad is cleared: the page's last published version is restored"
        },
        {
          "kind": "修正",
          "text": "Fixed /update-config writing Write(path) permission rules, which file permission checks don't match, instead of Edit(path) rules"
        },
        {
          "kind": "修正",
          "text": "Fixed four dead documentation URLs (Pricing, Computer Use, Skills, CLI) in the bundled claude-api skill's live-sources table"
        },
        {
          "kind": "改善",
          "text": "Improved prompt caching for a --system-prompt that contains a __SYSTEM_PROMPT_DYNAMIC_BOUNDARY__ line: the text above it is now cached globally, as the SDK's array form already is"
        },
        {
          "kind": "改善",
          "text": "Improved the /desktop error when Claude Desktop does not open: it now says why and what to do next"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's publish and read results: they now say who can open the page and what the owner's Share menu offers"
        },
        {
          "kind": "改善",
          "text": "Improved artifact publish results: they name the tab icon sent, warn when the page contains a NUL byte, and retry a flaky fetch of the newer page to merge after a stale publish"
        },
        {
          "kind": "改善",
          "text": "Improved pasted and attached images: they are now saved where Claude can open them as files without a permission prompt, including in Desktop and VS Code"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's guidance so Claude updates a shared artifact in place when you were given edit access to it, instead of publishing a separate copy"
        },
        {
          "kind": "改善",
          "text": "Improved plan-usage reads: editor windows and non-interactive sessions on one machine now share a read made in the last minute instead of each calling the usage endpoint"
        },
        {
          "kind": "改善",
          "text": "Improved the ListPlugins tool description so Claude knows it lists plugins enabled on your claude.ai account, not plugins installed locally with /plugin"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness when the terminal is slow or paused: output no longer falls further behind while the terminal catches up"
        },
        {
          "kind": "改善",
          "text": "Improved Write and Edit results for files in the synced account-skills folder: they now say the change is not saved to your account and how to save it"
        },
        {
          "kind": "その他",
          "text": "Updated /logout for Claude apps gateway sign-ins to also end the session on gateways that advertise token revocation"
        },
        {
          "kind": "変更",
          "text": "Changed hosted sessions to keep an unanswered permission prompt up after a container restart, instead of asking again"
        },
        {
          "kind": "変更",
          "text": "Changed the Artifact tool to ask for a one-word tab icon on a first publish instead of an emoji favicon"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome in auto mode to skip the extension's per-site check for classifier-approved calls, as bypass mode does, fixing browser_batch \"Permission denied\" after a redirect"
        },
        {
          "kind": "変更",
          "text": "Changed plugins installed from an npm source to be fetched with npm pack --ignore-scripts and integrity-verified, so a package's install scripts no longer run"
        },
        {
          "kind": "変更",
          "text": "Changed scheduled and Run now routine runs to save data to, and republish the page of, an artifact you can edit without asking; public artifacts, first publishes and deletes still ask"
        },
        {
          "kind": "変更",
          "text": "Removed the startup notice that told you a one-off scheduled routine had run since your last session"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added viewing, editing and deleting a saved memory inside the Memory dialog"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added sending an attached image without typing any text"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Retry link to the MCP servers dialog when the server list fails to load"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added accept and reject buttons under each change in the proposed-change diff tab, so an edit can be reviewed change by change"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the transcript creeping toward the bottom in small steps while a permission card waits and content keeps arriving"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed rewound and forked conversations not keeping the permission mode you had picked for the original conversation"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an empty CLAUDE_CONFIG_DIR entry in the environmentVariables setting making Claude Code keep its files in the workspace"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed plugin install links opening the Manage plugins dialog for plugin names and marketplace addresses that can't be used in a link"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Remote Control staying shown as connected after a turn-off that Claude Code reported as failed; it now shows as off"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the scroll to the bottom on send stopping short of the reply when the reply starts arriving during the scroll"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the agent map showing agents a crash left unfinished as stopped instead of failed once the session is reopened"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the \"Continuing the step\" notice not appearing, and the continue limit resetting, after a reload that follows a crash with background tasks still running"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list showing when a session was last reopened, such as after a window reload, instead of when its last message was sent"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Fork conversation from here\" failing on the message right after one sent while Claude was working"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the prompt cache clock showing too few minutes after reopening a session with a message sent while Claude was working"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a background agent that finished while Claude was running a tool losing its completion notice, and its result on the agent map, after a window reload"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a rare case where text selected in a git-ignored file could be sent to Claude after the extension was unresponsive for several seconds"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed renaming a running session reverting to the generated name (regression in 2.1.269)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed slash commands typed while Claude is responding being sent to the model as text instead of running once the response finishes"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed unreadable code in the plan preview and the Hooks and Permission rules dialogs with the High Contrast Light theme"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed /remote-control being ignored while Remote Control is still connecting: running it again now turns Remote Control off immediately"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the conversation pulling you back to the bottom while a reply streams after you scroll up, and added a claudeCode.scrollToBottomOnSend setting to turn off the jump on send"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Manage plugins dialog showing a password or token that was typed into a marketplace URL"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved the agent map: the pill counts running agents and turns red after a failure, the main agent stays in view while the map scrolls, and agents sort by state then end time"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Changed New session in a Claude editor tab to open in the sidebar when Preferred Location is set to Sidebar, instead of always opening another tab"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed a message sent while Claude is working to wait at the bottom of the conversation until Claude starts on it"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a \"New routine\" button to the page shown when a routine link no longer resolves, next to the link back to your routines list"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed routine \"paused\" and \"on hold\" notifications being cut off mid-sentence; the paused-subscription notice now says to turn the routine back on yourself"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed cloud environments with a very long allowed-domains list saving fine and then failing every session start; saving now fails up front and says how much to trim"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed Claude's guidance when a cloud session on a personal account is denied GitHub access: it now links to claude.ai/connect-github instead of an admin settings page"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved what Claude tells you when asked to edit, delete or run a routine it didn't create: it now links to the routine's page so you can do it yourself"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added attach conditions for access bundles in Claude Tag settings: an Owner can let a bundle also apply in channels with guests or Slack Connect channels, not just member-only"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added Amazon CloudWatch, CloudWatch Logs, Amazon SNS, Google Cloud Monitoring and Cloud Logging presets to an access bundle's Credentials tab in Claude Tag admin settings"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added Datadog presets for the US3, AP1, AP2 and US1-FED sites; new Datadog connections are now limited to Datadog's read and query API routes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed S3 uploads from recent AWS CLI and SDK versions failing with a 502 error when sent through an AWS connection"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude treating a channel as inactive, and skipping untagged messages there, while it was still posting in that channel from a routine or a thread"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a thread's \"Claude [task]\" display name reverting to plain \"Claude\" after the session behind that thread was refreshed or restarted"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the model you switched to in a Slack thread silently reverting to the channel's default after that thread's session was restarted or refreshed"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude sometimes replying twice when another app or bot @mentioned it in a top-level channel message"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude's notices in Enterprise Grid channels shared across workspaces: they now say when no workspace is set up yet, or why only organization defaults apply"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed reviews occasionally dropping part of their analysis when one of the reviewing agents returned its findings in an unexpected format"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed pull requests with more than 100 Claude reviews getting a full re-review on every clean merge from the base branch instead of the lighter merge-focused review"
        }
      ]
    },
    {
      "version": "2.1.274",
      "items": [
        {
          "kind": "追加",
          "text": "Added a visible warning when memory usage is critical, with steps to free memory or restart safely"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_MCP_STARTUP_WAIT_MS to bound how long the first non-interactive turn waits for connecting MCP servers (0 = don't wait)"
        },
        {
          "kind": "追加",
          "text": "Added effort attribute to the claude_code.llm_request OpenTelemetry trace span, matching the api_request event"
        },
        {
          "kind": "追加",
          "text": "Added claude_code.managed_settings_resolved OTel event: managed-settings sources and policy helper state; redacted settings and digests with OTEL_LOG_MANAGED_SETTINGS=1"
        },
        {
          "kind": "追加",
          "text": "Added store.connect_timeout_seconds to the Claude apps gateway config to lengthen the Postgres connect timeout (default 5 seconds), and improved the boot error when the database is unreachable to point to store.postgres_url and the configured timeout"
        },
        {
          "kind": "追加",
          "text": "Added enduser.sub, the IdP subject, to the telemetry Claude Desktop and Cowork send through a Claude apps gateway"
        },
        {
          "kind": "追加",
          "text": "Added a Claude apps gateway warning when a replica has more requests open than the 256 it sends upstream at once, and a startup log line showing that limit"
        },
        {
          "kind": "追加",
          "text": "Added click-to-expand for collapsed teammate and agent messages in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions getting stuck endlessly retrying \"unexpected tool_use_id\" 400 errors: corrupted transcripts now self-heal where possible, and otherwise a clear error (with a /rewind hint) ends the loop"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers configured as http that only speak legacy HTTP+SSE failing to connect when they answer the first request with 422 or another 4xx error"
        },
        {
          "kind": "修正",
          "text": "Fixed Streamable HTTP MCP tool calls timing out after about 5 minutes even when a longer per-server timeout was set"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP prompts and resources not refreshing when a server sends list-changed notifications without declaring listChanged"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tool calls refused with 403 insufficient_scope being reported as an expired sign-in: the error now names the missing permissions and points to /mcp re-authentication"
        },
        {
          "kind": "修正",
          "text": "Fixed hook-driven sessions (such as an active /goal) ending with \"Prompt is too long\" instead of compacting when the context overflowed again after a reactive compaction"
        },
        {
          "kind": "修正",
          "text": "Fixed an active /goal being lost when resuming (--continue / --resume) a session that had compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents losing --model, --effort, --permission-mode, --allow-dangerously-skip-permissions and --agent after an auto-update relaunch"
        },
        {
          "kind": "修正",
          "text": "Fixed a per-turn slowdown when a language server publishes project-wide diagnostics for thousands of files"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents with model: \"opus\" on Bedrock, Vertex or Foundry leaving the session's model when its id has no recognizable model family (unless ANTHROPIC_DEFAULT_OPUS_MODEL is set)"
        },
        {
          "kind": "追加",
          "text": "Fixed self-hosted runner sessions failing every turn with a 401 after a few failed token refreshes, until the next scheduled refresh; the runner now keeps retrying, and fetches a new token after a 401"
        },
        {
          "kind": "修正",
          "text": "Fixed clickable links to local file paths doing nothing in VS Code and other terminals that require a file:// URI"
        },
        {
          "kind": "修正",
          "text": "Fixed the transcript renumbering ordered lists in your own messages (typing \"3. 2. 1.\" displayed \"3. 4. 5.\"); numbers and \"N)\" markers now show as typed"
        },
        {
          "kind": "修正",
          "text": "Fixed AskUserQuestion preview notes being attached to a previously chosen option instead of the highlighted one"
        },
        {
          "kind": "修正",
          "text": "Fixed AskUserQuestion preview mode dropping the highlighted option when submitting a note with Enter"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed background agent keeping half of an interrupted tool batch when one of its calls was approved with a message"
        },
        {
          "kind": "修正",
          "text": "Fixed a local claude -p --resume started with CLAUDE_CODE_RESUME_INTERRUPTED_TURN not reporting background tasks the previous process left unfinished"
        },
        {
          "kind": "修正",
          "text": "Fixed the first turn of a cloud session sometimes starting without the tools of an SDK-hosted MCP server that was still connecting"
        },
        {
          "kind": "修正",
          "text": "Fixed background agent notifications claiming the agent had no live background work when it was still waiting on its own background task and would resume"
        },
        {
          "kind": "修正",
          "text": "Fixed error hints in Claude Desktop sessions to suggest slash commands like /usage-credits instead of CLI flags that cannot be used there"
        },
        {
          "kind": "修正",
          "text": "Fixed /schedule saving a routine's prompt without its message role when Claude writes the routine in the shape that listing routines returns"
        },
        {
          "kind": "修正",
          "text": "Fixed /status not showing the apiKeyHelper failure that its own error banner told you to check"
        },
        {
          "kind": "修正",
          "text": "Fixed /fast on in non-interactive sessions reporting on and then turning off under an organization's managed fast mode policy; it now says the organization has disabled it"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool asking you to approve an update to an artifact that it then refused because the session had not read the latest version"
        },
        {
          "kind": "修正",
          "text": "Fixed Cowork and claude.ai cloud sessions with network access on treating reads of a teammate's artifact as if network access were off"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin or marketplace directory with no git repository of its own taking its version from an enclosing git repository, such as a git-managed ~/.claude"
        },
        {
          "kind": "修正",
          "text": "Fixed --strict-mcp-config with an empty --mcp-config holding the first non-interactive turn for up to MCP_TIMEOUT on incidental MCP servers"
        },
        {
          "kind": "修正",
          "text": "Fixed Stop prompt hooks re-sending their whole prompt on every block in a conversation; repeat blocks now name the condition with a 500-character label"
        },
        {
          "kind": "修正",
          "text": "Fixed extra empty editor windows opening at startup on Linux under Wayland when running inside the Cursor or VS Code terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed an unhandled promise rejection in the Claude apps gateway when Postgres drops a connection during a spend check"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway cutting every open stream on SIGTERM: it now lets in-flight requests finish for up to 25 seconds before exiting (CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)"
        },
        {
          "kind": "修正",
          "text": "Fixed installed_plugins.json being rewritten on nearly every start-up when plugin policy comes from remote managed settings, which made Claude Desktop reload every open session's plugins"
        },
        {
          "kind": "修正",
          "text": "Fixed headless and SDK sessions making a separate model call for every background task that finished; completions already queued are now answered by one call"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bash tool re-sourcing the shell profile (a multi-second stall on the next command) after every plugin reload; it now does so only when the plugins' bin/ directories changed"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins with a top-level $schema in hooks/hooks.json showing an \"unknown key\" notice"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP connection errors and the MCP login tool's description showing secrets resolved from ${VAR} placeholders in MCP configs"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks for commands that loop over or assign certain special shell variables; these commands now ask for permission"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions accepting Bash commands with certain nested shell expansions; these are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed the Edit permission prompt preview sometimes showing a different location than the approved edit in files with multi-byte characters"
        },
        {
          "kind": "修正",
          "text": "Fixed background commands being stopped after 30 idle minutes on machines under mild memory pressure; they're now stopped only when memory is critically low, and the debug log says why"
        },
        {
          "kind": "修正",
          "text": "Fixed a message a subagent sends to the main session disappearing from the Claude Desktop transcript after a relaunch"
        },
        {
          "kind": "修正",
          "text": "Fixed a plugin loaded from a .zip being served from a stale extraction after several overlapping reloads"
        },
        {
          "kind": "修正",
          "text": "Fixed a sub-agent's progress summary being replaced by a runaway multi-paragraph reply"
        },
        {
          "kind": "改善",
          "text": "Improved startup in --input-format stream-json sessions: the first turn no longer waits up to 2s for still-connecting MCP servers whose tools tool search defers; they arrive on a later turn"
        },
        {
          "kind": "改善",
          "text": "Improved Monitor tool notifications: a script's final output and its exit now arrive as one notification instead of two, saving a model turn"
        },
        {
          "kind": "改善",
          "text": "Improved Artifact tool errors: when you are not signed in to claude.ai the terminal now says so on the first attempt, and Claude is told to stop retrying a rejected call sooner"
        },
        {
          "kind": "改善",
          "text": "Improved artifact publishing: a publish built on an older version is stopped before it is sent, with the newer page to merge"
        },
        {
          "kind": "改善",
          "text": "Improved safety checks before removing an agent worktree that contains submodule checkouts"
        },
        {
          "kind": "追加",
          "text": "Improved OTEL_LOG_RAW_API_BODIES=file:<dir> output: a new index.jsonl and request_body_id / message.id event attributes link each response to its request file and transcript message"
        },
        {
          "kind": "改善",
          "text": "Improved Claude apps gateway boot: it now tries the first Postgres connection up to three times before exiting, so a database that is reachable a few seconds late no longer fails the boot"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's spend-limit check under load: it now takes one database round trip instead of four, so fewer checks time out on a busy gateway"
        },
        {
          "kind": "改善",
          "text": "Improved Claude apps gateway sign-in rate limit errors: /login now explains the refusal, and the gateway log says which limit was hit and which setting to change"
        },
        {
          "kind": "変更",
          "text": "Changed Bedrock, Vertex, Foundry and telemetry-disabled installs to use the v2 MCP client and MCP 2026-07-28 negotiation with direct HTTP servers by default, as other installs already do (opt out: MCP_SDK_GENERATION=v1 or MCP_PROTOCOL_NEGOTIATION=legacy)"
        },
        {
          "kind": "変更",
          "text": "Changed /code-review to use leaner inline review prompts for every model that has no tuned settings of its own, instead of spawning many review subagents"
        },
        {
          "kind": "変更",
          "text": "Changed \"type\": \"sdk\" MCP entries in .mcp.json, settings, plugins and agent files to be skipped with a warning: only an SDK host application can register in-process servers"
        },
        {
          "kind": "追加",
          "text": "Changed artifact watching in local sessions: a new version published elsewhere no longer starts a turn; Claude learns of it from a later Artifact tool result"
        },
        {
          "kind": "変更",
          "text": "Changed plugin and marketplace clones to leave Git LFS files as pointers instead of downloading them; git lfs pull in the checkout fetches them"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runners to skip a read-only repository the git host refuses at the access check instead of failing the session start"
        },
        {
          "kind": "変更",
          "text": "Changed the /status GitHub line to read \"Cloud sessions\", and /web-setup, /ultrareview, and teleport messages to say \"cloud session\" instead of \"Claude Code on the web\""
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added continuation of the step a window reload interrupted, labeled in the chat, with a Claude Code: Continue After Reload setting to turn it off"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added Memory and Instructions entries to the Customize menu: Memory shows the auto-memory toggles, the saved memories and the memory folders, and Instructions edits the CLAUDE.md files"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a claudeCode.lockEditorGroups setting to stop Claude from locking the editor groups it opens in"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed a /btw side question asked in a new conversation's first seconds occasionally showing another session's side-question history"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a brief freeze when the extension first looks up your global gitignore file"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a message sent while Claude was running a tool disappearing from the conversation after a window reload"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the Manage Plugins enable toggle and MCP servers dialog rows being unreachable from the keyboard"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sign-ins and sign-outs made in a terminal not showing until a reload after CLAUDE_CONFIG_DIR changed in the Environment Variables setting"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Edit diffs in the chat being cut off at the bottom at some panel widths and for long wrapped lines; diff boxes now fit the rows shown"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed overlapping settings writes from the extension leaving ~/.claude/settings.json unparseable or dropping a setting"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed Open in New Tab (Ctrl/Cmd+Shift+Esc) sometimes leaving the new tab's message box unfocused, so typing went nowhere until you clicked it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed reopening a closed Claude tab splitting the editor layout when its locked group still holds another Claude tab and a file"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed New session opening another locked editor group whenever a file tab shared the group with your Claude tab"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed session names shifting sideways in the session picker while typing a search query"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the plan review card cutting off its Send feedback button and reason field when a plan has several comments; the comment list now scrolls"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed inline code and code blocks in chat replies being unreadable under the High Contrast themes"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved screen reader navigation of the conversation: each message is announced as \"You\" or \"Claude\", with the tool name for tool steps"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the default global gitignore file to $XDG_CONFIG_HOME/git/ignore when XDG_CONFIG_HOME is an absolute path"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a \"Compare against\" branch picker to a cloud session's diff view, so you can diff its changes against any branch instead of only the base branch"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed git operations in cloud sessions failing with \"service unavailable\" when GitHub's token renewal briefly errors"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed editing a routine occasionally making it fire twice or re-enabling a routine that had just been paused"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed commits in cloud sessions occasionally failing with a signing error for a few minutes after the session's credentials refreshed"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed the toast after saving a routine whose GitHub trigger couldn't be linked to show the reason, such as a per-repository trigger limit, instead of only \"edit to retry\""
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed sessions sometimes flipping back to unread right after you mark them read"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed routines to skip a run and retry for up to 72 hours when the owner's GitHub connection is missing, instead of switching the routine off at the first failed check"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed a routine's on-hold notice: when your subscription is paused it now tells you to turn the routine back on yourself instead of promising an automatic resume"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a Guests setting to the Add channel and Add workspace forms in Claude Tag admin settings, so owners can pick Inherit, Allow, Channel only or Restrict up front"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude not answering when another Slack app or bot @mentions it; the tag now gets a reply and wakes Claude in a channel it had stopped following after days of inactivity"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude missing another app's message that tagged @Claude right after a new Slack channel was created; it's now delivered once Claude has joined"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude folding a follow-up sent minutes after its last Slack message into it as a silent edit; late updates such as blockers now post as a new reply that notifies"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude's Slack search failing with an error whenever it searched within a single channel; it now returns that channel's matching messages"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a safety-filter stop silently resetting a Slack thread's context when nobody was waiting; Claude now always says so and no longer cancels background work still running"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed email addresses in Claude's Slack replies rendering with a visible mailto: prefix; they now show as the plain, clickable address"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude refusing to watch an Enterprise Grid channel shared with the whole organization when asked from another workspace in the grid"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Environment picker in Claude Tag admin settings showing a raw environment ID instead of the environment's name for archived or app-created environments"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved Claude's live progress checklist in Slack: capped at 2,000 characters, reposted at most every 15 minutes in busy threads, with older \"Latest task list\" links updated"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Removed the repeated guest-attribution note Claude appended to a Slack canvas each time it edited one in a channel using the \"Channel only\" guest setting"
        },
        {
          "kind": "追加",
          "text": "[Code Review] Fixed re-reviews occasionally leaving a fixed finding's thread open when the new review also filed a lower-severity note under it"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed rare reviews ending with \"Code review encountered an error\" when GitHub or an internal service failed transiently at launch; they now wait and retry"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Improved how Code Review words each posted finding: short plain sentences that say who is affected, where the code goes wrong, and the fix up front"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the check-run card and PR comment when a review is skipped because of an organization limit: each cause now links the admin page that fixes it"
        }
      ]
    },
    {
      "version": "2.1.273",
      "items": [
        {
          "kind": "追加",
          "text": "Added x-claude-code-request-class, x-claude-code-agent-type, x-claude-code-prev-tool-durations, x-claude-code-compaction and x-claude-code-context-compacted request headers for LLM gateways; opt in with CLAUDE_CODE_GATEWAY_HINT_HEADERS=1"
        },
        {
          "kind": "追加",
          "text": "Added a notification when an MCP server disconnects mid-session and automatic reconnection gives up, pointing at /mcp"
        },
        {
          "kind": "追加",
          "text": "Added forking a session started with claude --remote-control or /remote-control from the Claude app; the fork runs as a background session on your computer"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash commands the permission checker cannot fully analyze skipping the prompt under permissions.blockReadsOutsideWorkingDirectories, and a subshell hiding a dangerous rm in bypass mode"
        },
        {
          "kind": "修正",
          "text": "Fixed skills synced from claude.ai staying available after your organization turns Skills off; they now move to the recoverable trash"
        },
        {
          "kind": "修正",
          "text": "Fixed allowManagedMcpServersOnly, deniedMcpServers and disableClaudeAiConnectors set via MDM or managed-settings.json being ignored when server-managed settings are also present"
        },
        {
          "kind": "修正",
          "text": "Fixed 401/403 errors on Bedrock, Vertex and Foundry, and Claude apps gateway 403s, telling you to run /login; the message now names the credential to refresh or points to your gateway administrator"
        },
        {
          "kind": "修正",
          "text": "Fixed /login, /upgrade, and /extra-usage discarding earlier thinking from the conversation, which forced a full prompt-cache rewrite on the next request"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode stopping for approval when the Artifact tool uploads a file you attached to the chat in a cloud or Remote Control session"
        },
        {
          "kind": "修正",
          "text": "Fixed a long-running session recreating a stub .git/info/exclude after the repository's .git directory was removed or moved away"
        },
        {
          "kind": "修正",
          "text": "Fixed the main prompt dropping a ! typed at the start while already in shell mode, so negated commands like ! grep … can be typed"
        },
        {
          "kind": "修正",
          "text": "Fixed Read on macOS refusing a dragged-in screenshot, or any file the system reports under a second path, with \"symlink resolution changed after permission was checked\""
        },
        {
          "kind": "修正",
          "text": "Fixed permissions.blockReadsOutsideWorkingDirectories: a memory directory chosen by a repository's settings is no longer loaded into the prompt, recalled, indexed, or used by memory extraction"
        },
        {
          "kind": "修正",
          "text": "Fixed sub-agents and background agents being reported as failed, with their result never delivered, when the final streamed reply omitted token usage or carried no model id"
        },
        {
          "kind": "修正",
          "text": "Fixed the context meter and auto-compact counting advisor-tool turns at roughly twice their real context size, which made auto-compact fire at about half the real window"
        },
        {
          "kind": "修正",
          "text": "Fixed /tui refusing to restart because of an agent-team teammate that had already finished its work and was no longer shown in the agents panel"
        },
        {
          "kind": "追加",
          "text": "Fixed saved scheduled tasks running in the wrong session after .claude/scheduled_tasks.json was copied into another folder, such as a new worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK and --output-format stream-json output dropping a subagent's remaining messages and final report after it is moved to the background mid-run (e.g. by CLAUDE_AUTO_BACKGROUND_TASKS)"
        },
        {
          "kind": "修正",
          "text": "Fixed /install-github-app reporting a SAML single sign-on block as \"admin permissions required\""
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients attached to a Claude Desktop, VS Code or JetBrains session being refused when they ask for the session's context window usage"
        },
        {
          "kind": "修正",
          "text": "Fixed the spinner showing a doubled ellipsis (\"……\") on compaction status lines such as \"Running PreCompact hooks…\""
        },
        {
          "kind": "修正",
          "text": "Fixed a false-positive spinner tip suggesting the frontend-design plugin after reading or publishing Artifacts"
        },
        {
          "kind": "その他",
          "text": "Reverted a 2.1.268 change that checked Read and Edit deny rules on Bash lines the permission checker can't analyze (eval, env -C); commands like time -p make build prompt again instead of being denied"
        },
        {
          "kind": "改善",
          "text": "Improved responsiveness in long sessions: hook progress and sub-agent activity no longer re-process the whole conversation on every update"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's error when a publish includes a file type artifacts don't serve: Claude is told which types are served and what to do instead, and the terminal shows one plain line"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool's page read to state the capabilities and database rules the artifact service holds for the page, for anyone who can publish to it"
        },
        {
          "kind": "変更",
          "text": "Improved artifact database writes: an update can now remove a single field instead of rewriting the whole document"
        },
        {
          "kind": "改善",
          "text": "Improved artifact publishing: a publish whose connection drops after reaching claude.ai is now re-sent safely instead of failing or creating a duplicate version"
        },
        {
          "kind": "改善",
          "text": "Improved the cloud-session GitHub error for an IP allow list, a suspended app installation or SAML single sign-on to show the cause instead of a generic install hint"
        },
        {
          "kind": "改善",
          "text": "Improved /autofix-pr: when gh pr view fails it now shows gh's own error (sign-in, SAML, rate limit) instead of a generic exit-code line"
        },
        {
          "kind": "改善",
          "text": "Improved /autofix-pr to say why GitHub webhook delivery couldn't be set up for the PR (for example, no linked GitHub account) instead of a generic warning"
        },
        {
          "kind": "改善",
          "text": "Improved /web-setup errors: a refused GitHub token now lists the likely reasons and the fix, and a connection failure names a configured proxy or TLS certificate problem"
        },
        {
          "kind": "改善",
          "text": "Improved the in-session SSL certificate and proxy connection errors to name the error code and what to fix, such as NODE_EXTRA_CA_CERTS for an untrusted corporate CA"
        },
        {
          "kind": "改善",
          "text": "Improved the error when a cloud session can't be created because your Claude login expired or was revoked: it now tells you to run /login"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown when an MCP server's sign-in expires mid-session to say how to re-authenticate (/mcp)"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode on Bedrock, Vertex and Foundry to use the local classifier by default for now; set CLAUDE_CODE_AUTO_MODE_SERVER=1 to use the platform's server-side classifier"
        },
        {
          "kind": "変更",
          "text": "Changed OTEL_LOG_TOOL_DETAILS=1 to also include real agent, skill, plugin and MCP server names on cost and token metrics"
        },
        {
          "kind": "変更",
          "text": "Changed sign-in with a Claude account to also request access to your claude.ai plugins"
        },
        {
          "kind": "変更",
          "text": "Changed /bug and /feedback reports to include only model-behavior params (model, system prompt, tools) from the last API request, omitting request metadata and CLAUDE_CODE_EXTRA_BODY fields"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Report a problem\" still appearing, and /bug / /feedback opening a report form, for organizations that have product feedback disabled"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a red \"Claude Code process exited with code 4294967295\" banner appearing after completed turns on Windows"
        },
        {
          "kind": "追加",
          "text": "Windows: Improved the network-path permission check for UNC paths when a mapped network drive was added with --add-dir"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Fixed routines losing access to an organization connector, and still calling the old one, after an admin removed and re-added that connector"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed creating a self-hosted environment from organization settings occasionally failing with a server error and leaving a half-created environment behind"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed the admin \"Share cloud sessions\" setting to live under Data and privacy instead of the Claude Code page, where Data and privacy admins can also manage it"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a \"Discard unsaved changes?\" confirmation before the New routine page or the Edit routine dialog throws away a routine name, prompt or edit you typed"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Removed the full-page desktop-app download screen that new users without a cloud environment saw on Mac and Windows; they now go straight to setup"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the routine detail page: menu and rename in the breadcrumb, the on/off switch and Run now at the top, and run history beside the routine's settings"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude going silent minutes after reinstalling the app when an Enterprise Grid was disconnected but one of its workspaces stayed connected"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed scheduled tasks set up in an organization-shared private Slack channel silently never posting; they now keep running in the thread they were created in"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed replying in an older Slack thread while Claude is mid-task sometimes restarting it from scratch and losing work it had not pushed yet"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude occasionally dropping a message with an incorrect \"couldn't find a Claude Code environment\" notice right after your account token refreshed"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed AWS connections refusing region-less endpoints such as Budgets, Savings Plans, WAF Classic and Import/Export; Global Accelerator requests now sign correctly"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Improved AWS connection failures: when a request can't be signed, such as a hostname with no region, Claude is told why and how to fix it instead of a bare error"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed OAuth client-credentials and JWT-bearer connections failing with providers that return a lowercase token type; requests now send the standard Bearer scheme"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed adding a channel manager being refused on Enterprise Grid shared channels, on channels where Claude hasn't been used yet, and on legacy private channels"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed Claude to start watching related public channels on its own, such as an incident channel a conversation depends on, instead of only when asked"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the admin Memory page not listing Slack channels Claude set up on its own even when they had saved memory; admins can now open, edit and delete that memory"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed merging the base branch into a PR whose earlier review listed \"Additional findings\" triggering a full re-review; these pushes now get the lighter follow-up review"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a whole REVIEW.md being ignored because of an @-mention, a code span wrapped across lines, or a backticked HTML tag; only lines linking to changed files are withheld"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Improved suggested fixes to say what the fix must keep working when other code depends on the behavior being changed"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved review comments that point to a second affected location to state that location's issue in a full sentence instead of a cut-off stub"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed /ultrareview --post so a retry after a GitHub error posts the findings comment exactly once instead of never or twice; the comment now names the reviewed commit"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed empty or content-identical pushes being re-reviewed on GitHub repositories whose owner or name contains a capital letter; these pushes are now skipped"
        }
      ]
    },
    {
      "version": "2.1.272",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
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
    }
  ]
};
