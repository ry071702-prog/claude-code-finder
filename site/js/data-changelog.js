/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
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
    },
    {
      "version": "2.1.282",
      "items": [
        {
          "kind": "追加",
          "text": "Added a maxProseWidth setting that caps the width of Claude's prose in wide terminals while tables and code blocks keep the full width"
        },
        {
          "kind": "追加",
          "text": "Added a startup notice, and /status and claude doctor entries, listing telemetry variables in a project's settings files that were ignored or that turned telemetry off"
        },
        {
          "kind": "追加",
          "text": "Added the allowClaudeInChromeWithManagedMcp managed setting to let claude --chrome run alongside an exclusive managed-mcp.json; the error shown when Chrome is blocked now names it"
        },
        {
          "kind": "追加",
          "text": "Added store.readiness_grace_seconds to the Claude apps gateway so /readyz can stay ready through a short Postgres outage such as a database failover"
        },
        {
          "kind": "追加",
          "text": "Added a scrollbar to the /feedback drafts list in fullscreen mode; it appears while the mouse is over the list"
        },
        {
          "kind": "修正",
          "text": "Fixed every request failing with a 400 error in conversations whose history holds web search results the API cannot decrypt (for example, from a turn answered through a third-party gateway)"
        },
        {
          "kind": "修正",
          "text": "Fixed more cases of continued or resumed sessions (--continue, --resume) re-sending earlier messages in a changed form, which could make the API drop Claude's earlier reasoning"
        },
        {
          "kind": "修正",
          "text": "Fixed earlier extended thinking being dropped when /model, /rename, /artifacts or another immediate slash command was used while Claude was working"
        },
        {
          "kind": "修正",
          "text": "Fixed continued or resumed conversations losing earlier extended thinking when relaunched with a --tools list that leaves out a built-in tool offered earlier in the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions failing on every turn with an \"Invalid data in redacted_thinking block\" API error; Claude Code now drops the conversation's thinking blocks and retries once"
        },
        {
          "kind": "修正",
          "text": "Fixed compaction failing when the summarization request is refused; it now retries on a fallback model"
        },
        {
          "kind": "修正",
          "text": "Fixed a failed turn (\"Effort 'xhigh' isn't available with thinking turned off\") after a safety-related model switch in sessions with thinking off and effort above high"
        },
        {
          "kind": "修正",
          "text": "Fixed an unanswered Fable usage-credits prompt switching models in SDK-hosted sessions such as Claude Desktop; the turn now ends instead, and Remote Control clients now see the model-switch notice"
        },
        {
          "kind": "修正",
          "text": "Fixed /model with a full Fable model id stopping at an API error instead of opening the usage-credits prompt when the plan needs usage credits that aren't turned on yet"
        },
        {
          "kind": "修正",
          "text": "Fixed requests failing for up to a minute with an \"another Claude Code process is refreshing it\" login error after that other process was closed or killed mid-refresh"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions started while another Claude Code window was refreshing the sign-in (common with several VS Code windows) not retrying their organization policy fetch"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE.md and rules being read at startup through a repository symlink reaching macOS's /Network via .. or a /.vol-style kernel path, or a rules link to macOS's /home being listed"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission rules with a mid-pattern :* being skipped in settings files while --allowedTools honored them; they now work from every source, with a startup warning on how they match"
        },
        {
          "kind": "修正",
          "text": "Fixed a command approved on a restored permission prompt running twice when a remote session's worker restarted"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings ignoring a mistyped value for boolean lock keys such as disableClaudeAiConnectors or allowManagedPermissionRulesOnly; the lock now applies and startup names the key"
        },
        {
          "kind": "修正",
          "text": "Fixed managed permissions, autoMode, worktree and attribution settings being ignored entirely when one nested value was invalid; the rest of the block now still applies"
        },
        {
          "kind": "修正",
          "text": "Fixed repository, user and --add-dir skills, commands and skills-directory plugin manifests pre-approving their own tools via allowed-tools under managed allowManagedPermissionRulesOnly"
        },
        {
          "kind": "修正",
          "text": "Fixed safeguard block messages on Amazon Bedrock and Bedrock Mantle not showing a request ID; block messages now also show the message ID"
        },
        {
          "kind": "修正",
          "text": "Vertex AI: Fixed web search not being offered for models Claude Code doesn't recognize yet, such as newly released ones"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash and PowerShell hiding a full disk quota behind \"Exit code 1\" and leaving large output files in temp"
        },
        {
          "kind": "修正",
          "text": "Fixed tool input validation errors naming only an unknown, missing or mistyped parameter when other parameters in the same call were also invalid; those are now listed too"
        },
        {
          "kind": "修正",
          "text": "Fixed pasted multi-line text being submitted line by line after the terminal's bracketed paste mode was reset mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt's example text flashing and disappearing at startup in projects with a SessionStart hook"
        },
        {
          "kind": "修正",
          "text": "Fixed a blank screen flashing before the first frame when starting in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed garbled, misplaced rows in the non-fullscreen renderer after the screen got shorter while still taller than the terminal, e.g. deleting a prompt line while a shell command streams output"
        },
        {
          "kind": "修正",
          "text": "Fixed a stale character left in the last column of a diff when a redrawn line's CJK character or emoji wrapped to the next row"
        },
        {
          "kind": "修正",
          "text": "Fixed the cursor landing before the end of a prompt recalled from history when the prompt contains a tab"
        },
        {
          "kind": "修正",
          "text": "Fixed the send-now hint showing ctrl+enter on terminals that send it as a newline (Windows Terminal before 1.25); it now shows ctrl+x ctrl+s there"
        },
        {
          "kind": "修正",
          "text": "Fixed claude remote-control --debug failing with \"Unknown argument: --debug\", although Remote Control's own eligibility error says to run with --debug"
        },
        {
          "kind": "修正",
          "text": "Fixed /install-github-app saying \"cancelled\" and then still pushing the branch and saving the API key secret; leaving now stops the remaining steps and reports what was already done"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback, /bug and /share on Bedrock, Vertex and other third-party providers still saving the report file after you cancelled during the save"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin uninstall reporting success and deleting the plugin's saved options when its settings file still enabled it or could not be read; it now stops and names the file"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin uninstall deleting a plugin's saved options and secrets when the list of installed plugins could not be read after the removal; they are now kept and the uninstall says so"
        },
        {
          "kind": "修正",
          "text": "Fixed a key typed right after / in /skills moving the skill list instead of reaching the search box"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal cursor jumping from the /skills search box to the skill list while typing, which could hide the caret and put IME input in the wrong place"
        },
        {
          "kind": "修正",
          "text": "Fixed lists with a scrollbar, such as /skills and /mcp, being two columns narrower outside fullscreen mode, where the scrollbar can never appear"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent panel footer wrapping onto two lines with long rebound keys, and its \"Esc to collapse\" hint ignoring a rebound collapse key"
        },
        {
          "kind": "修正",
          "text": "Fixed a doubled  ·  separator in the /tasks dialog footer when the stop-all-agents shortcut is unbound in keybindings.json"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact publishes failing when Claude gave the version a label longer than 60 characters; the label is now shortened"
        },
        {
          "kind": "修正",
          "text": "Fixed screen-reader mode, quoted lists and very long lists dropping the blank lines at the top of a code block that opens a list item, directly or inside a quote"
        },
        {
          "kind": "修正",
          "text": "Fixed PDF page-read error messages: paths with accented or non-Latin characters now appear readably, and a folder named like \"password\" or \"invalid\" can no longer make the error name the wrong cause"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode >> indenting empty lines, r with a count longer than the line changing text, 2J joining one line too many, and a count on the last line (2dd, 2>>) shifting or deleting it"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode cursor placement: after dd, dj, dG or a whole-line p/P it lands on the first non-blank, yy no longer moves it, and Esc after an emoji no longer leaves it inside the emoji"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode ignoring a count typed before . when repeating x, s, p, d or c, and whole-line p/P, o, O, J, >> and << acting on the wrong line when a line above wraps"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode leaving the cursor past the end of a prompt recalled from history or pulled back from the queue in normal mode, so x did nothing"
        },
        {
          "kind": "改善",
          "text": "Improved the time to resume very large sessions, including ones that were never compacted"
        },
        {
          "kind": "改善",
          "text": "Improved the error shown on Windows when a session can't be resumed because its transcript file could not be read (EBADF): it now names possible causes and what to try"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude Desktop unknown-model error to suggest switching to a different model"
        },
        {
          "kind": "改善",
          "text": "Improved rendering of unusual Unicode in permission prompts"
        },
        {
          "kind": "改善",
          "text": "Improved /artifacts: titles line up in one column, details are dropped whole instead of cut mid-word, and the list supports PgUp/PgDn, Home/End, the mouse wheel and clicks"
        },
        {
          "kind": "その他",
          "text": "Updated the claude-api skill: pre-output refusal billing now links to the How refusals are billed docs, mid-stream refusals bill at normal rates, and pre-output refusals count against rate limits"
        },
        {
          "kind": "その他",
          "text": "Updated the claude-api skill to recommend ant apply for keeping Managed Agents resources as version-controlled files"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to use the server-side classifier by default on a direct Anthropic API connection when telemetry is off (CLAUDE_CODE_AUTO_MODE_SERVER=0 opts out)"
        },
        {
          "kind": "変更",
          "text": "Changed sandbox.excludedCommands to ignore project and local settings entries when managed settings or --settings set allowUnsandboxedCommands: false, or managed allowManagedDomainsOnly: true"
        },
        {
          "kind": "変更",
          "text": "Changed project and local settings to ignore OpenTelemetry variables that turn on export, set its endpoint, or capture content, like CLAUDE_CODE_ENABLE_TELEMETRY and OTEL_LOG_*"
        },
        {
          "kind": "変更",
          "text": "Changed Windows/WSL managed settings so an admin policy that is present but invalid or unreadable (HKLM, managed-settings.json) keeps user-writable HKCU and WSL /etc/claude-code from applying"
        },
        {
          "kind": "変更",
          "text": "Changed Skill(anthropic-skills:*) and Skill(claude-ai:*) allow rules to cover only skills synced from claude.ai, not plugins or other skills that merely use such a name"
        },
        {
          "kind": "変更",
          "text": "Changed skill folders, command files and workflow commands in the anthropic-skills or claude-ai namespace to no longer load; a plugin so named still loads but yields name ties to synced skills"
        },
        {
          "kind": "変更",
          "text": "Changed MCP servers configured under the name anthropic-skills or claude-ai to list no skills or prompts (their tools still work); rename the server in your MCP configuration to list them again"
        },
        {
          "kind": "変更",
          "text": "Changed the ultracode visuals in /effort and the prompt input to plain styling (no ripple, border flourish or keyword glimmer) and removed the dynamic-workflows spinner tip"
        },
        {
          "kind": "変更",
          "text": "Changed the Clawd mascot's feet in the start-up banner to sit under the corners of his body"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed long replies falling behind the stream: the panel no longer re-parses the whole reply on every update"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the dictation mic button covering the message input's scrollbar when the input is tall enough to scroll"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Remote Control sessions started on this computer not opening from their Web entry in the session list; they now open the local conversation unless it's running elsewhere"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed an editor tab's sign-in screen hanging silently after the extension host restarts; it now shows the \"stopped responding\" notice too"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added Claude GitHub App status to Settings › Connectors › GitHub: whether the app is installed and reachable for your account, plus steps to connect, install or reconnect"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added \"Open repository\" and \"Open compare page\" links to the repository menu of a cloud session whose repository is hosted on a Git server other than GitHub"
        },
        {
          "kind": "追加",
          "text": "[Cloud sessions] Added attaching a repository from a different GitHub owner, such as a fork's upstream, to a running cloud session that already has one, including sessions started from Slack"
        },
        {
          "kind": "修正",
          "text": "[Cloud sessions] Fixed the next run time shown for an hourly routine being 30 minutes off for people in half-hour-offset time zones such as India"
        },
        {
          "kind": "改善",
          "text": "[Cloud sessions] Improved how quickly the Routines page and the sidebar's Scheduled list load for accounts whose past sessions scheduled many check-in reminders"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed auto-join channel patterns saved for one workspace in Claude Tag admin settings being ignored on an Enterprise Grid org-wide install; Claude now joins matching new channels"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude not responding in an Enterprise Grid channel shared between two workspaces of one organization when the channel's Claude Tag version was saved from the other workspace"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the earlier Claude in Slack app's progress card for sessions on a GitHub Enterprise Server repository: it now names the repository and offers a working Create PR button"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Slack threads whose model has been retired falling back to another model on every reply, slower and with a fallback note each time; the thread now moves to a working model"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed files Claude uploads to Slack not being able to carry a caption containing a table; captions now render with the same formatting as replies"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude's threads in Slack's Agents & tools view sometimes being listed under their first message instead of their name; later renames now update the list too"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed removing a GitHub organization's grant from an access bundle's Repositories tab in Claude Tag admin settings failing to save after that GitHub organization was disconnected"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Claude always replying \"Couldn't check this channel just now\" in a channel shared with a Grid workspace it isn't added to; the notice now says which workspace needs the app"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the cost and token totals in Claude's reply footer reading many times too high after the session's cloud worker restarted"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the bordered cards Claude uses in Slack replies for plans, tables and details to render wide by default instead of a narrow width"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed newly connected Slack workspaces to follow the current default model instead of keeping whichever model was the default when they were connected"
        }
      ]
    },
    {
      "version": "2.1.281",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude apps gateway support for newer Claude Desktop keys in desktop policy blocks, including blockReadsOutsideWorkingDirectories and disableBypassPermissionsMode"
        },
        {
          "kind": "追加",
          "text": "Added assume_role on Claude apps gateway Bedrock upstreams: the gateway calls Bedrock as an IAM role it assumes through STS, in another AWS account if needed, optionally one session per developer"
        },
        {
          "kind": "追加",
          "text": "Added guardrail: {id, version} on Claude apps gateway Bedrock upstreams to apply an Amazon Bedrock guardrail to every request sent through them (set it on all Bedrock upstreams or none)"
        },
        {
          "kind": "追加",
          "text": "Added telemetry.resource_attributes to the Claude apps gateway config, to put fixed labels on the telemetry of Claude Desktop and /login sessions"
        },
        {
          "kind": "追加",
          "text": "Added \"attribution\": false in settings.json to hide all commit and PR attribution; older CLI versions skip a settings file that holds it, so keep the object form in files shared across versions"
        },
        {
          "kind": "追加",
          "text": "Added MCP URL-mode elicitation on 2026-07-28 protocol connections, so servers can ask Claude Code to open a browser-based flow; no waiting dialog is left on screen when the server has no way to confirm completion"
        },
        {
          "kind": "追加",
          "text": "Added MCP server checks to claude plugin validate: it reports .mcp.json entries that would be silently dropped at load, undeclared ${user_config.*} references, and insecure URLs"
        },
        {
          "kind": "追加",
          "text": "Added an auto mode recommendation to /insights that estimates how many permission prompts auto mode could have handled in your recent sessions"
        },
        {
          "kind": "追加",
          "text": "Added a scrollbar to the /skills, /mcp and /plugin Installed lists in fullscreen mode, like the one /workflows now has: it appears while the mouse is over the list and can be clicked or dragged"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash (\"unrecoverable interface error\") that could end a session while an API request was being retried"
        },
        {
          "kind": "修正",
          "text": "Fixed a turn that could retry indefinitely, ignoring --max-turns, when the model alternated unparseable tool calls and output-limit truncation"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed sessions re-sending earlier turns in a changed form (a parallel tool-call turn, an MCP tool call's input or a tool-search result while its server was still reconnecting, or a tool-search result whose loading turn was interrupted), which could make the API drop the conversation's prior reasoning"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a very large session sometimes restoring only its last few messages"
        },
        {
          "kind": "修正",
          "text": "Fixed a session resumed after a restart during a pending permission prompt sending a different history than before, which broke the prompt cache from that point"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session that ended during a tool call: Claude now sees the call and is told its outcome is unknown, and a manual resume no longer adds a hidden \"Continue\" message"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions with an earlier advisor result the API could no longer read failing one request every turn and repeatedly losing earlier reasoning; the history is now repaired once"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt cache being lost when an MCP server disconnects mid-conversation, or is still connecting after a resume, while tool search is off (for example behind a proxy or gateway)"
        },
        {
          "kind": "修正",
          "text": "Fixed responses cut short by a proxy or gateway that closes the stream cleanly being shown as complete with no warning, and tool calls running twice on duplicated stream events"
        },
        {
          "kind": "修正",
          "text": "Fixed responses failing with \"Content block not found\" when a proxy drops a stream event mid-response; the partial response is now kept, and web search keeps results that already arrived"
        },
        {
          "kind": "修正",
          "text": "Fixed an empty completed response being requested twice when the connection dropped before the stream's final event"
        },
        {
          "kind": "修正",
          "text": "Fixed the stop reason being lost when a proxy sends a trailing usage-only frame"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RETRY_WATCHDOG sessions failing on the first 5xx or dropped connection after a run of 429/529 waits, and sleeping uncapped and silently on a long Retry-After from a 5xx"
        },
        {
          "kind": "修正",
          "text": "Fixed fast mode retrying rate-limited requests back to back when the server sent Retry-After: 0"
        },
        {
          "kind": "修正",
          "text": "Fixed a tool that returned an oversized image leaving sibling tool calls unanswered and still running, or ending the turn with no final message"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations getting permanently stuck on \"tool_use.name: String should have at most 200 characters\" after the model called a tool by an overlong name"
        },
        {
          "kind": "修正",
          "text": "Fixed tool calls failing with \"Failed to get memory usage\", or being reported as failed after they ran, when Claude Code cannot read its own memory usage, for example when it has run out of file descriptors"
        },
        {
          "kind": "修正",
          "text": "Fixed --input-format stream-json sessions (Agent SDK, VS Code extension) and scheduled cloud sessions failing every turn with an error when an earlier assistant message had plain-string content"
        },
        {
          "kind": "修正",
          "text": "Fixed non-interactive sessions (-p, Agent SDK) failing on the next turn after the directory they were started in was deleted mid-session"
        },
        {
          "kind": "修正",
          "text": "Fixed headless sessions with host-side (SDK) MCP servers stalling on the first message when the host stops responding mid-handshake; remote sessions now wait a few seconds at most"
        },
        {
          "kind": "修正",
          "text": "Fixed interactive startup waiting on the managed-settings network request (about 80 ms, 17+ seconds when the network is unreachable) when no MCP servers or plugins are configured"
        },
        {
          "kind": "修正",
          "text": "Fixed a delay of up to two minutes before responding when reading or @-mentioning a PDF larger than 3 MB"
        },
        {
          "kind": "修正",
          "text": "Fixed an interrupted Read of specific PDF pages leaving its page render running for up to two minutes"
        },
        {
          "kind": "修正",
          "text": "Fixed permission dialogs and attachment checks reading a path under macOS's /.vol, /.nofollow or /.resolve (which can reach a network mount) before approval"
        },
        {
          "kind": "修正",
          "text": "Fixed a recursive rm whose target is only command-substitution output, such as rm -rf \"$(pwd)\", running unprompted in auto and --dangerously-skip-permissions mode; it now asks even with a Bash allow rule, unless run with CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT=1"
        },
        {
          "kind": "修正",
          "text": "Fixed a permission rule containing a NUL byte being expanded into a wildcard match; such a rule now matches nothing"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox excludedCommands entries not matching git rev-parse --git-dir, programs named like shell builtins, and commit messages containing [WIP] or # lines"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed Bash commands being unable to write to $TMPDIR when CLAUDE_CODE_TMPDIR is set"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --bg starting a background session, and running its project hooks, in a directory that had not passed the workspace trust prompt; it now asks for trust first, or exits when not run interactively"
        },
        {
          "kind": "修正",
          "text": "Fixed --setting-sources (and SDK settingSources) not being forwarded to spawned sessions: teammates, /bg, claude agents sessions and --worktree --tmux now start with the parent's restriction"
        },
        {
          "kind": "修正",
          "text": "Fixed Read, Write, Edit and NotebookEdit: a file path containing a null byte now fails that tool call with a clear error instead of ending the whole turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Write refusing a call that gives the file path or content twice under two parameter names with identical values"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE.md and rules files from an --add-dir directory inside the working directory being sent to the model twice in headless and SDK sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed remote sessions staying on \"needs approval\" with a stale prompt after a permission prompt and a sandbox network-access prompt overlapped and both were answered"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions not telling Claude about background agents that finished just before a worker restart"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled routine and notification turns in remote sessions not receiving turn-start notices (newly available tools, MCP changes, date, todos) until after the first tool call"
        },
        {
          "kind": "修正",
          "text": "Fixed scheduled tasks and /loop wakeups being fired again every second when their delivery failed, which could make Claude Code exit at the end of a turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control reporting \"disabled by your organization's policy\" when the org policy simply hadn't loaded yet; it now retries the fetch and says it couldn't verify"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool missing from Remote Control sessions that claude remote-control starts for you to open from Claude Desktop, claude.ai or the mobile app"
        },
        {
          "kind": "修正",
          "text": "Fixed macOS credential writes dropping stored MCP OAuth tokens or deleting the keychain entry when the login keychain was locked (e.g. right after wake)"
        },
        {
          "kind": "修正",
          "text": "Fixed gcpAuthRefresh/awsAuthRefresh login processes being left running (and holding their localhost callback port on Windows) when Claude Code exits or the refresh times out"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Not logged in · Run /login\" footer and missing claude.ai connectors persisting in a session after logging in from another Claude Code process"
        },
        {
          "kind": "修正",
          "text": "Fixed mcp_tool hooks on blocking events (PreToolUse and similar) being skipped while their MCP server was still connecting; they now wait for it, up to the MCP connect timeout"
        },
        {
          "kind": "修正",
          "text": "Fixed the same MCP server being connected twice when a plugin or claude.ai connector and a configured server spell its URL differently (host letter case, default port, trailing slash)"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP_CONNECTION_NONBLOCKING=0 giving up on claude.ai connectors after 1s instead of honoring MCP_CONNECT_TIMEOUT_MS"
        },
        {
          "kind": "修正",
          "text": "Fixed --channels plugin entries being checked against the installed plugin's marketplace alone; the installed plugin's name must now match the entry as well"
        },
        {
          "kind": "修正",
          "text": "Fixed --plugin-dir on a folder of plugins that also has a .claude-plugin/marketplace.json loading one empty plugin instead of the plugins in it"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin uninstall refusing to remove a project-scope plugin that isn't enabled, saying it is \"enabled at project scope\" while claude plugin disable says it is already disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin update failing for project-scoped plugins when --scope is omitted — it now resolves the scope the plugin is installed at instead of assuming user"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin validate reporting privacyPolicyUrl, supportUrl and other listing metadata keys in plugin.json as unknown fields"
        },
        {
          "kind": "修正",
          "text": "Fixed known_marketplaces.json recording a marketplace as refreshed when its remote could not be reached and CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE kept the existing clone"
        },
        {
          "kind": "修正",
          "text": "Fixed the /plugin Errors tab showing no confirmation after its last error is resolved"
        },
        {
          "kind": "修正",
          "text": "Fixed /plugin starting a second uninstall or update of the same plugin when Enter was pressed again while the first was still running"
        },
        {
          "kind": "追加",
          "text": "Fixed a y held while /plugin checks a marketplace source adding the marketplace the instant the \"Add marketplace?\" question appears, before it can be read"
        },
        {
          "kind": "修正",
          "text": "Fixed 1 answering Yes in /permissions' delete and remove-directory confirms while the pointer is on No, which let a held 1 remove one workspace directory after another"
        },
        {
          "kind": "修正",
          "text": "Fixed Alt+T and /config offering to turn thinking off on models that can't; thinking now stays on there, with a one-line reason in place of the switch"
        },
        {
          "kind": "追加",
          "text": "Fixed /context total leaving out messages added since the last response; it now matches its categories and can read higher than the status line"
        },
        {
          "kind": "修正",
          "text": "Fixed /model showing the raw API error JSON and request ID when the API refuses the picked model; it now shows the server's message and says the model was not changed"
        },
        {
          "kind": "修正",
          "text": "Fixed API errors from an HTML error page (such as a proxy's 429 or 502 page) printing the page's raw markup or leaving out the HTTP status, and error messages breaking onto a second line when the server's error text ended in a newline"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback, /bug and /share still sending your report after you cancelled it while it was being sent"
        },
        {
          "kind": "修正",
          "text": "Fixed /feedback, /bug and /share failing every send with \"Couldn't send feedback\" after a Remote Control Stop arrived while the dialog was open"
        },
        {
          "kind": "修正",
          "text": "Fixed /ide showing \"No available IDEs detected\" while also listing a running IDE"
        },
        {
          "kind": "追加",
          "text": "Fixed the terminal being left in a broken state (crash or garbled input) when /setup-bedrock or /setup-vertex restarts Claude Code to apply new settings"
        },
        {
          "kind": "修正",
          "text": "Fixed /config exiting when respectGitignore or copyFullResponse in ~/.claude.json holds null"
        },
        {
          "kind": "修正",
          "text": "Fixed the session name from /rename disappearing while Claude asks a multiple-choice question, so side-by-side sessions stay identifiable"
        },
        {
          "kind": "修正",
          "text": "Fixed one-line pastes showing on their own lines in the sent message for prompts from VS Code or Remote Control and for expanded paste placeholders"
        },
        {
          "kind": "修正",
          "text": "Fixed a message queued while Claude is working losing or changing the IDE selection it was written with, and queued messages not showing their selection"
        },
        {
          "kind": "修正",
          "text": "Fixed pressing Shift+Tab twice quickly landing on the wrong permission mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C or Ctrl+D pressed twice quitting Claude Code instead of closing the dialog in the remaining dialogs and pickers, such as /memory, /hooks, /mcp (including a server's sign-in screen), /export, /copy, /theme, and /teleport's uncommitted-changes and login prompts (where Esc also quit)"
        },
        {
          "kind": "修正",
          "text": "Fixed keys that arrive in one burst of input (e.g. over Remote Control), such as an arrow key followed by Enter, x or s, acting on the previous selection: a stale effort level in /effort and the model picker, and the previously highlighted row in /skills, the background task rows under the prompt, MCP server prompts and /install-github-app"
        },
        {
          "kind": "修正",
          "text": "Fixed /install-github-app updating the workflow after \"Skip workflow update\" was chosen, running setup twice on a repeated Enter, and ↑ on the repository step blocking a typed repository name when no repository was detected"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode: dj/dk/dG/dgg and their c/y forms acting on part of a line; 1G going to the last line; d0/c0/y0 doing nothing; the cursor being off by one after . repeats an insert; and o/p on a !-prefixed line switching to shell mode"
        },
        {
          "kind": "修正",
          "text": "Fixed vim mode cw on a space, an empty line, a word's last letter or a one-letter word also changing the next word; word motions stopping inside words in Hindi, Bengali and other scripts; and ., p or P that inserts text starting with ! switching to shell mode, losing text or editing the wrong character"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt cursor moving one character too far after an accent typed as its own key"
        },
        {
          "kind": "修正",
          "text": "Fixed an extra blank line above a list item whose text starts on the line after its bullet, in screen-reader mode, quoted lists and long lists"
        },
        {
          "kind": "修正",
          "text": "Fixed bulleted lists of plain numbers (like - 316.) showing as letters, roman numerals or the wrong numbers"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent panel's footer hint ignoring keys rebound in keybindings.json, and showing a stray  ·  when the stop-all-agents shortcut is unbound"
        },
        {
          "kind": "修正",
          "text": "Fixed the agent panel footer offering \"Enter to view\" and \"x to stop\" on the agent you are already viewing (where x types into its input), and \"Enter to view\" on the main row when main is already shown"
        },
        {
          "kind": "修正",
          "text": "Fixed a mouse click on an agent-panel row leaving the keyboard cursor on the previously selected row"
        },
        {
          "kind": "修正",
          "text": "Fixed Esc interrupting the running turn instead of deselecting the selected agent-panel row"
        },
        {
          "kind": "修正",
          "text": "Fixed PgUp and PgDn doing nothing in a dialog's list (for example /skills) in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed /heapdump summary saying most memory is native when it is in the JS heap snapshot"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash edit-diff snapshot directories piling up in the temp folder: abandoned ones are now deleted right away and the rest when Claude Code exits"
        },
        {
          "kind": "追加",
          "text": "Fixed /workflows moving the pointer to a different run, and x stopping it, when a new run started while the list was open"
        },
        {
          "kind": "修正",
          "text": "Fixed the selected tab in tabbed dialogs (/config, /plugin, /permissions) showing no highlight while the tab bar has focus when color is off (NO_COLOR)"
        },
        {
          "kind": "修正",
          "text": "Fixed the mouse wheel over the /plugin Installed list scrolling the pane behind it instead of the list"
        },
        {
          "kind": "修正",
          "text": "Fixed the hover highlight lingering on a list row in fullscreen mode after scrolling or filtering moved it away from the mouse"
        },
        {
          "kind": "修正",
          "text": "Fixed long list rows, such as in the /remote-control menu, wrapping onto a second line in narrow terminals; they're now cut with …"
        },
        {
          "kind": "修正",
          "text": "Fixed /hooks and /mcp detail views printing a long value over the row below it in narrow terminals"
        },
        {
          "kind": "修正",
          "text": "Fixed lists such as a skill's state options in /plugin not being answerable by typing a number in screen-reader mode"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed Bash commands that write to $TMPDIR/… failing with \"Permission denied\""
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed a race in which Claude Code sessions updating at the same moment could delete each other's claude.exe backup, which could leave no claude.exe behind"
        },
        {
          "kind": "改善",
          "text": "Improved Claude Desktop sign-in and usage-limit error messages to point at the app instead of terminal commands"
        },
        {
          "kind": "改善",
          "text": "Improved startup: managed settings and policy fetches no longer retry requests that can never succeed"
        },
        {
          "kind": "改善",
          "text": "Improved interactive startup time: git reads, startup telemetry and the Bedrock/Vertex model-upgrade checks no longer run before the first frame"
        },
        {
          "kind": "改善",
          "text": "Improved the time to resume long sessions that read many files; the restored file cache now matches the files as they were read"
        },
        {
          "kind": "改善",
          "text": "Improved the time to resume very long sessions that have been compacted, most noticeably through the Agent SDK and Claude Desktop"
        },
        {
          "kind": "改善",
          "text": "Improved \"Prompt is too long\" recovery in sessions dominated by one very large first prompt: that prompt is now summarized on its own instead of being left out of the summary"
        },
        {
          "kind": "追加",
          "text": "Improved auto mode after resuming a session in a new process: the permission classifier can now reuse its earlier prompt cache instead of rewriting it"
        },
        {
          "kind": "改善",
          "text": "Improved the auto mode denial message so Claude treats a denial as covering the outcome, not only the exact command"
        },
        {
          "kind": "改善",
          "text": "Improved the dangerous-rm check to also flag a removal at a shell variable followed by a top-level directory name, at a variable derived from the working directory, or at a backslash-only target"
        },
        {
          "kind": "改善",
          "text": "Improved sandbox guidance on macOS: when a local dev server can't bind a port, Claude now points to sandbox.network.allowLocalBinding"
        },
        {
          "kind": "改善",
          "text": "Improved --agents to accept the path to a JSON file (with -p) as well as inline JSON, and to allow an empty prompt"
        },
        {
          "kind": "改善",
          "text": "Improved /batch to run where a WorktreeCreate hook provides the agent worktrees, not only inside a git repository"
        },
        {
          "kind": "追加",
          "text": "Improved plugin hook-failure errors to name the offending plugin, and added a claude plugin validate warning when a shell-form hook leaves ${CLAUDE_PLUGIN_ROOT} unquoted (it breaks on plugin paths with spaces)"
        },
        {
          "kind": "改善",
          "text": "Improved the / menu, /skills, /context and the /plugin Installed list to show skills synced from claude.ai by their short name when no other command uses it, not anthropic-skills:<name>"
        },
        {
          "kind": "改善",
          "text": "Improved /deep-research reliability on long research briefs by removing unused required fields from the scope step's output"
        },
        {
          "kind": "改善",
          "text": "Improved the writing in published artifact pages: the bundled artifact-design skill now asks Claude for plain, direct prose"
        },
        {
          "kind": "改善",
          "text": "Improved artifact publishing on slow connections: large page uploads are now sent compressed"
        },
        {
          "kind": "改善",
          "text": "Improved the large CLAUDE.md startup notice to also count instruction files together, so many mid-sized files and @-imports are caught"
        },
        {
          "kind": "改善",
          "text": "Improved debug logs to name settings env variables ignored because the session's launch environment already sets them"
        },
        {
          "kind": "改善",
          "text": "Improved keyboard navigation in tabbed dialogs such as /permissions and /usage: ↑/↓ move focus between the tab row and the content, and a list responds to keys only while it has focus"
        },
        {
          "kind": "改善",
          "text": "Improved /help and /sandbox: ←/→ and Tab switch tabs from inside a tab's list, and ↓ on an empty Custom commands tab in /help no longer leaves the keys stuck until Esc"
        },
        {
          "kind": "追加",
          "text": "Improved /install-github-app, /desktop, the /permissions auto mode environment prompts, and the /plugin \"Add marketplace?\" and \"Run this command?\" prompts: they now use the standard dialog frame with key hints, and Ctrl+C or Ctrl+D cancels them on the second press like other dialogs"
        },
        {
          "kind": "改善",
          "text": "Improved the /workflows and /mcp lists: they page (PgUp/PgDn, Home/End) and take j/k and the mouse like other lists, their arrows follow select:previous/select:next rebinds, and x in /workflows stops the run the pointer is on"
        },
        {
          "kind": "追加",
          "text": "Improved the /plugin plugin and marketplace details menus and the /remote-control already-connected menu: they now support Home/End and clicking a row"
        },
        {
          "kind": "改善",
          "text": "Improved the background workflow row below the prompt: it now shows the name, a progress bar, the agent count on wide terminals, elapsed time, total tokens, and the large-workflow warning"
        },
        {
          "kind": "改善",
          "text": "Improved the /plugin Installed list: rows now line up in columns (status, name, type, details) across every section"
        },
        {
          "kind": "改善",
          "text": "Improved /skills: each row now leads with the skill's name, with ✔ or ◯ alone showing on or off, and stays on one line in narrow terminals"
        },
        {
          "kind": "改善",
          "text": "Improved narrow list rows (/skills, /workflows, /feedback): a name keeps 20 columns beside its first detail, and details are shown whole or not at all"
        },
        {
          "kind": "変更",
          "text": "Improved /diff: a scrollbar shows where you are in a long list of changed files, and long paths no longer wrap their rows"
        },
        {
          "kind": "改善",
          "text": "Improved /hooks: a hook's detail screen now says what kind of hook it is and where to change it, instead of always pointing at settings.json, and the hooks-disabled, safe mode and managed-hooks-only notices each say what is happening in one plain sentence"
        },
        {
          "kind": "改善",
          "text": "Improved screen-reader output in /mcp: a disabled server is read as \"off\" instead of \"pending\""
        },
        {
          "kind": "改善",
          "text": "Improved the Remote Control confirmation: its options are briefly inactive again after the terminal window regains focus, so a key pressed while switching back cannot answer it"
        },
        {
          "kind": "変更",
          "text": "Changed send now (ctrl+enter or ctrl+x ctrl+s) to move running tools to the background instead of cancelling the turn"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode so that, where its classifier review runs server-side, read-only and sandboxed shell commands also wait for that review and are blocked when it flags them"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_AUTO_MODE_SERVER to also apply on a direct Anthropic API connection: 0 opts out of the server-side auto mode classifier (the local classifier then counts toward usage), 1 opts in"
        },
        {
          "kind": "変更",
          "text": "Changed the dangerous rm prompt in --dangerously-skip-permissions and auto mode to wait 2 minutes for an answer, then deny the command with a rewrite hint so unattended sessions keep going (CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT=1 turns this off)"
        },
        {
          "kind": "変更",
          "text": "Changed AGENTS.md support to also work on Amazon Bedrock, Google Vertex AI, Microsoft Foundry, LLM gateways, and sessions with telemetry disabled"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway to refuse to start when a managedMcpServers entry's envHelper path starts with \\??\\ or /??/, a path form current Claude Desktop refuses to run"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runners to pass system prompts to Claude Code as private files instead of command-line text, so large prompts no longer fail the launch; a wrapper or command hook that appends --system-prompt or --append-system-prompt must switch to --system-prompt-file or --append-system-prompt-file"
        },
        {
          "kind": "変更",
          "text": "Changed queued messages to show in the conversation above the spinner instead of under it"
        },
        {
          "kind": "変更",
          "text": "Changed the session artifact links under the prompt into one footer pill (⧉ name or ⧉ N) that opens /artifacts, which now lists this session's artifacts first"
        },
        {
          "kind": "変更",
          "text": "Changed the Artifact tool to let Claude load scripts from unpkg.com in artifact pages"
        },
        {
          "kind": "変更",
          "text": "Changed hovering a list row in fullscreen mode, including in /config, to tint the row instead of drawing a second ❯ pointer beside the focused row's"
        },
        {
          "kind": "変更",
          "text": "Changed /mcp: each server's row now starts with its status icon and name, says its state once, and in a narrow terminal drops trailing facts like \"managed\" before shortening the name"
        },
        {
          "kind": "変更",
          "text": "Changed /workflows: each run's row leads with its status icon and elapsed time, and a narrow terminal keeps the run's name and time, dropping the agent and token counts first"
        },
        {
          "kind": "変更",
          "text": "Changed Remote Control attachment downloads to reuse connections and to skip files already downloaded in the session"
        },
        {
          "kind": "変更",
          "text": "Changed MCP resource lists (the resource list tool and @-mention suggestions) to skip MCP Apps UI resources; reading one by URI still works"
        },
        {
          "kind": "変更",
          "text": "Changed claude plugin uninstall --json and the /plugin dialog to say a plugin's data was kept when its folder stays because another installed plugin uses it or install records cannot be read"
        },
        {
          "kind": "変更",
          "text": "Changed the background tasks list (/tasks): pressing x on a running /ultrareview now asks for confirmation before stopping the review"
        },
        {
          "kind": "変更",
          "text": "Removed the leftover \"(removed)\" /agents entry from the command menu and /help; typing /agents still explains where the wizard went"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Continue/Stop prompt in the VS Code and JetBrains panels when auto mode falls back to billed classifier requests, replacing the unanswerable warning line"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed opening a Web session with no messages saving an empty local copy that could not be resumed; an error now says where to continue it"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a claude.ai/code session opening empty or with only part of its conversation, with no error, when the server failed to return its history, part of it failed to load, or a network sign-in page answered in its place; it now shows an error and can be opened again"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed conversations in editor tabs hanging silently after the extension host restarts; the tab now tells you to reopen it from the session list"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Claude attaching option previews to multiple-choice questions in the chat panel, where the question card never shows them"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session manager's cost and usage block wrapping mid-text on a narrow side bar, and showing totals from a previous login after an account switch"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a Fast mode switch to the composer's model menu in cloud sessions, shown when your plan includes fast mode and the selected model supports it"
        },
        {
          "kind": "追加",
          "text": "[Claude Code on the web] Added a settings shortcut on the GitHub setup tip and a \"Troubleshoot GitHub connection\" link in the repository pickers, both opening your GitHub connection page"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed routines with a GitHub trigger for a pull request being converted to draft never firing; they now start a run when the pull request is converted"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed cloud sessions on a repository that isn't hosted on GitHub showing a Create PR button that could never work; the button is now hidden there"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed the GitHub setup tip on claude.ai/code covering the repository picker's search box and rows while the picker is open; it now steps aside until the picker closes"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved the file card shown when a cloud session can't open a file: it now says whether the file no longer exists or the session's permission settings block reading it"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a short line in the Slack thread after someone presses Stop, naming who stopped Claude's response and saying to mention @Claude to continue"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Fixed Slack channels where Claude could permanently stop responding to replies inside threads; affected channels now recover on their own with the next new message to Claude"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude resuming a stopped request after you press Stop in Slack, for example when a check-in fired or a background task ended; messages sent mid-response are now read"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Slack replies arriving many minutes late, or never, after Claude's session crashed mid-task, such as on a failed setup script; it now restarts on its own within minutes"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack promising an automatic restart, then failing generically, when a session's configuration is too large to start; the thread now says why and how to retry"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed very long Slack threads: Claude could silently withhold a reply after judging it against weeks-old messages, and a restart deep into the thread could lose recent context"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude answering every mention with \"Couldn't check this channel just now\" in a Slack channel moved from Enterprise Grid org-wide sharing into a single workspace"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed very large Enterprise Grid workspaces reached mostly through channels shared across workspaces getting \"Couldn't check this channel\" again after a quiet hour"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a Slack request blocked by your organization's inference hook showing a generic retry notice; the thread now shows the hook's deny message and Claude doesn't retry"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude in Slack offering to switch to models your organization can't use; it now lists and offers only models the switch will actually accept"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed requests to DynamoDB and Kinesis account-based endpoints failing to authenticate when sent through an AWS connection in Claude Tag"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Plugins sections in Claude Tag admin settings failing to load for organization admins and listing attached plugins as raw IDs; they now load and show each plugin's name"
        },
        {
          "kind": "変更",
          "text": "[Claude Tag] Changed the routine list Claude gives when asked in a Slack thread to show that thread's own scheduled tasks by default instead of every routine in the channel"
        },
        {
          "kind": "修正",
          "text": "[Code Review] Fixed a pull request getting no review when its reviewed commit was force-pushed away while a failed review was being retried in a repository not set to review every push"
        }
      ]
    },
    {
      "version": "2.1.280",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Opus 5.5 (claude-opus-5-5), now the default Opus model — 1M context, $4/$20 per Mtok with $0.20/Mtok cache reads"
        },
        {
          "kind": "追加",
          "text": "Added mouse support to more lists in fullscreen mode: the wheel scrolls the /skills list, and a skill's state options in /plugin can be clicked"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH to change the 2,048-character cap on MCP tool descriptions and server instructions for every MCP server in the session"
        },
        {
          "kind": "追加",
          "text": "Added hook output sizes and the number of oversized outputs saved to a file to the hook_execution_complete OpenTelemetry event"
        },
        {
          "kind": "修正",
          "text": "Fixed writes through a symlinked path being judged by their in-tree spelling: the prompt names where the write lands, and acceptEdits, allow rules and auto mode no longer approve one landing outside"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode retrying an action over and over when a safety check declined to review it; the action is now denied once, noting that retrying won't help"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode denying actions over and over without pause when a safety check gave no answer; retries now back off, and the turn stops with a message after ten in a row"
        },
        {
          "kind": "修正",
          "text": "Fixed Write calls failing validation when a model sends path, file_text, file_content or a stray description instead of file_path and content"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C or Ctrl+D pressed twice in most dialogs (/model, /effort, /config, /status, /usage, /plugin, /sandbox, /permissions, /artifacts, /mobile, /login, /upgrade, /usage-credits, /install-github-app, /setup-bedrock, /setup-vertex) quitting Claude Code instead of closing the dialog"
        },
        {
          "kind": "修正",
          "text": "Fixed a click that only brought the terminal window to the front also triggering the item under the pointer — in search pickers, tab bars, agent/workflow rows, slash-command links and suggestion dropdowns"
        },
        {
          "kind": "修正",
          "text": "Fixed a stray n closing dialogs and a stray y confirming them; Enter and Esc accept and cancel (bind y/n to confirm:yes/confirm:no in keybindings.json to restore)"
        },
        {
          "kind": "修正",
          "text": "Fixed text fields in dialogs losing a typed letter, digit or Space to a keybinding on that key"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt line staying scrambled on Windows terminals after invisible characters were removed on Enter; the screen is now repainted so you review the exact text that will be sent"
        },
        {
          "kind": "修正",
          "text": "Fixed the invisible-character cleanup removing the zero-width non-joiner that Persian and Arabic text uses to attach a suffix to a Latin word or number, such as the plural of \"PDF\""
        },
        {
          "kind": "修正",
          "text": "Fixed voice dictation not stopping on Ctrl+C (the prompt cleared but the microphone kept recording), Esc not cancelling while a transcript was processing, and held Space starting dictation from the transcript view and vim NORMAL mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a model switch made from a host app (Claude Desktop, VS Code, SDK) while Claude is working causing a prompt-cache miss on the next prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed resumed fork subagents rebuilding their tool list instead of re-sending the one they first used, which broke prompt caching for that agent"
        },
        {
          "kind": "修正",
          "text": "Fixed subagent hand-back messages showing an internal provenance preamble when expanded outside verbose mode"
        },
        {
          "kind": "修正",
          "text": "Fixed installed_plugins.json keeping the install-time commit after updating a plugin from a GitHub repository or git URL that tracks a branch or tag"
        },
        {
          "kind": "修正",
          "text": "Fixed skills in ~/.claude/skills/ being moved to ~/.claude/skills/.trash/ when a manifest.json in that folder listed their names"
        },
        {
          "kind": "修正",
          "text": "Fixed the session feedback survey showing no hover highlight on light and ANSI themes"
        },
        {
          "kind": "修正",
          "text": "Fixed /workflows briefly showing a one-row list before opening the only run"
        },
        {
          "kind": "修正",
          "text": "Fixed the mouse wheel not scrolling selection lists with hidden options (such as /model and /permissions) in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a skill you switched off showing the same red ✘ as a plugin that failed to load in /plugin and /skills; off now shows a dim ◯"
        },
        {
          "kind": "修正",
          "text": "Fixed multi-select option descriptions being indented under the option number instead of under the label"
        },
        {
          "kind": "修正",
          "text": "Fixed the search box in /plugin, /skills and /mcp losing its right border in fullscreen mode"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp showing △ in the server list but ⚠ in the detail view for the same server; the list, detail views and /plugin now all show ⚠"
        },
        {
          "kind": "修正",
          "text": "Fixed Home and End doing nothing in the /config settings list and in selection lists such as /model, /memory and permission prompts"
        },
        {
          "kind": "修正",
          "text": "Fixed PgUp/PgDn in the /skills menu wrapping past the first or last skill instead of stopping there"
        },
        {
          "kind": "修正",
          "text": "Fixed Tab silently changing the selected setting's value in the /config list; it now does nothing there"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations failing on every turn with a \"role 'system' must precede an 'assistant' message\" API error"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations with the advisor on failing every turn with API Error 400 \"Input tag 'advisor_20260301'\" behind a proxy or gateway that doesn't support it; the request now retries without it"
        },
        {
          "kind": "修正",
          "text": "Fixed a session failing on every turn and /compact when its saved history held a malformed notice about MCP tools that could not be loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when resuming a session whose saved transcript holds a malformed system message or a memory-saved notice without its file list"
        },
        {
          "kind": "修正",
          "text": "Fixed one cause of long-running fullscreen sessions exiting with \"Claude Code exited after an unrecoverable interface error\": a damaged cached message list is now rebuilt"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code hanging when a settings file, or a file it re-reads after an edit, is replaced by a named pipe mid-read"
        },
        {
          "kind": "修正",
          "text": "Fixed /config crashing and some on/off preferences being misread when a preference that has moved to settings.json still holds a value like null or \"false\" in ~/.claude.json"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session with unfinished background agents, shells or workflows starting a model turn on its own before you typed anything"
        },
        {
          "kind": "修正",
          "text": "Fixed messages sent to a background subagent being silently lost in headless and SDK sessions when the subagent was finishing its turn"
        },
        {
          "kind": "修正",
          "text": "Fixed a finished subagent's report being lost when the conversation that launched it was compacted before the report was read"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents being unable to use the LSP tool when an LSP plugin is active"
        },
        {
          "kind": "修正",
          "text": "Fixed background shell tasks reporting benign non-zero exits (e.g. grep with no matches) as failures"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions (claude --bg) being unable to run git, hooks, plugins and other helper programs when an environment variable handed to the session contained a NUL character"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+C needing three or four presses to exit while background subagents are running; two presses now exit"
        },
        {
          "kind": "修正",
          "text": "Fixed IDE selection being dropped when a sent prompt comes back into the input, such as pressing Esc to edit it, rewinding to it, or pressing Esc while startup hooks run"
        },
        {
          "kind": "修正",
          "text": "Fixed a ! shell-mode prompt stashed with Ctrl+S coming back as a plain prompt when restored, and / listing file paths right after stashing one"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents showing a blank, unresponsive screen instead of an error when the temp directory is full, not writable or owned by another user"
        },
        {
          "kind": "追加",
          "text": "Fixed an MCP server re-added under the same name after claude mcp remove still showing as needing authentication instead of reconnecting"
        },
        {
          "kind": "修正",
          "text": "Fixed background plugin marketplace auto-update ignoring git credential helpers, so private-repo marketplaces were re-cloned every run or never updated"
        },
        {
          "kind": "修正",
          "text": "Fixed claude plugin update clearing a plugin's recorded commit and moving it to version \"unknown\" when the official marketplace's snapshot file is a link or too large"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool silently disappearing when your organization's policy can't be loaded (for example behind a web proxy); Claude now says what's blocking it"
        },
        {
          "kind": "修正",
          "text": "Fixed artifact republishes silently resetting stored database access rules or dropping the viewer profile scope when that capability was re-sent without them; they are now refused"
        },
        {
          "kind": "修正",
          "text": "Fixed /ultrareview reporting a stopped cloud review as completed or as an error to retry, and waiting out the full timeout when its session was deleted or the signed-in account changed"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude app showing a missing or stale context usage figure for Remote Control and cloud sessions right after /compact or /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed the Claude app's diff view for Remote Control and cloud sessions dropping a branch's committed files whenever there are also uncommitted changes"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud and self-hosted runner sessions failing with \"Authentication failed\" after waiting out a long overload during which the session's access token was rotated"
        },
        {
          "kind": "修正",
          "text": "Fixed memory write conflicts in Cowork sessions showing Claude only the start and end of a memory file over about 10,800 characters, so the retried write dropped the middle"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed lifecycle-hook commits failing to sign under --configure-git"
        },
        {
          "kind": "修正",
          "text": "Windows: Fixed background cleanup deleting a directory symlink or junction used to relocate ~/.claude/session-env, image-cache or another cleaned-up folder"
        },
        {
          "kind": "修正",
          "text": "Self-hosted runner: Fixed a turn that ended right at a --retire-at release losing its finished signal; the runner now briefly waits for the turn to be reported before stopping the session"
        },
        {
          "kind": "追加",
          "text": "Reverted ctrl+l / cmd+k in fullscreen mode clearing the transcript view (added in 2.1.260); they redraw the screen again"
        },
        {
          "kind": "改善",
          "text": "Improved /permissions: focus returns to the rule list after viewing, adding or deleting a rule, and the delete-rule and remove-directory confirmations now default to No"
        },
        {
          "kind": "改善",
          "text": "Improved /permissions tab navigation: ←/→ and Tab pressed in a rule list now switch tabs without moving focus to the tab bar"
        },
        {
          "kind": "改善",
          "text": "Improved /cost cache-miss causes to name thinking mode and thinking display changes"
        },
        {
          "kind": "改善",
          "text": "Improved the Artifact tool so that when Claude cannot read an artifact link it was given, it tells the user before continuing"
        },
        {
          "kind": "改善",
          "text": "Improved /install-github-app: the GitHub CLI check and repository selection steps now show \"Esc to cancel\""
        },
        {
          "kind": "改善",
          "text": "Improved the /artifacts and /workflows lists: a scrollbar at the right edge shows how much of a long list is hidden and where you are in it"
        },
        {
          "kind": "改善",
          "text": "Improved the workflow progress tree: running agents and phases now show a dim dot instead of ⟳"
        },
        {
          "kind": "追加",
          "text": "Improved /plugin's Add Marketplace form in fullscreen: it no longer draws a box inside the pane, and its text and key hints line up with the rest of /plugin"
        },
        {
          "kind": "改善",
          "text": "Improved the /workflows detail view in fullscreen: it no longer draws a second horizontal rule under the pane's divider"
        },
        {
          "kind": "改善",
          "text": "Improved code blocks that don't name a language: they are now colored like inline code, so commands stand out from the surrounding text"
        },
        {
          "kind": "改善",
          "text": "Improved /btw asked while a tool is still running: the side question now knows that call is in progress instead of reading it as a failed one"
        },
        {
          "kind": "改善",
          "text": "Improved the UserPromptSubmit hook timeout notice and the debug log to name which hook command timed out"
        },
        {
          "kind": "改善",
          "text": "Improved @ file suggestions: a file whose name contains the query now ranks above one that only matches across its folder names"
        },
        {
          "kind": "改善",
          "text": "Improved artifact pages: no Print buttons, confirm dialogs or device features the viewer blocks, email and phone details shown as text, and dark mode that reaches form controls and scrollbars"
        },
        {
          "kind": "変更",
          "text": "Improved /ultrareview uploads: renamed copies of key files, such as id_rsa copy or kubeconfig (1).yaml, now also stay on your machine"
        },
        {
          "kind": "改善",
          "text": "Improved the cross-session messaging startup warning to explain that --debug-file writes a debug log to a path you choose"
        },
        {
          "kind": "変更",
          "text": "Changed the default model on Pro and Team Standard plans from Sonnet to Opus, matching Max, Team Premium, and Enterprise"
        },
        {
          "kind": "変更",
          "text": "Changed an effort level saved before /effort became per-model to no longer apply to newly released models such as Opus 5.5; they start at their default until you pick a level"
        },
        {
          "kind": "変更",
          "text": "Changed Opus 4.7, Opus 4.8 and Fable 5 to stop holding their launch-default effort over /effort in -p or the Agent SDK, a project, managed or --settings effortLevel, or a per-model level"
        },
        {
          "kind": "変更",
          "text": "Changed /autocompact's footer hint to name ←/→, the keys that adjust other ordered values"
        },
        {
          "kind": "変更",
          "text": "Changed /fast's footer to name Space as the toggle key"
        },
        {
          "kind": "変更",
          "text": "Self-hosted runner: Changed git in lifecycle hooks to ignore hook folders and programs named in the runner's shared git files; local-path and git:// remotes there now need GIT_ALLOW_PROTOCOL"
        },
        {
          "kind": "追加",
          "text": "Changed plugin marketplaces whose name imitates a reserved marketplace name to be refused when added, and to stop loading if one was already added"
        },
        {
          "kind": "変更",
          "text": "Changed PermissionRequest hooks: an agent-type hook no longer runs there, since its answer could never allow or deny the request; it now shows an error pointing to command or http hooks"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Status dialog, with a typed /status, showing the session's version, account, model and server details"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Sandbox dialog for the sandbox mode, the unsandboxed fallback and excluded commands, opened from the panel menu or by typing /sandbox"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a Claude in Chrome dialog (extension status, the install, reconnect and permissions pages, the enabled-by-default setting), opened from the panel menu or by typing /chrome"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added Export conversation, with a typed /export, to copy or save the conversation as plain text"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added each skill's source, token estimate and on/off state to the Slash commands dialog, with a click to change the state, and a typed /skills that opens it"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a typed /plan that switches to plan mode, sends a first planning prompt, or shows the session's plan"
        },
        {
          "kind": "改善",
          "text": "[VSCode] Improved pasted-text handling in the chat box: a paste over 800 characters or over 2 line breaks is now marked so Claude can tell it from what you typed"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Improved prompt handling in the chat box: invisible Unicode formatting and tag characters are removed from pasted text with a notice, and from anything else before it is sent"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Changed \"Open in New Tab\" to open Claude beside the editor group you are working in rather than after the last group"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the effort chip showing a stale saved effort level instead of the level the session runs at"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Claude Code never starting when the Python extension hangs while activating; it now starts after 60 seconds without the Python environment"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the plan approval card never offering auto mode: when auto mode is available, its first option is now \"Yes, and use auto mode\", as in the terminal"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed arrow-key navigation in the session list stopping after archiving or unarchiving a session from the keyboard"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed paste marker lines showing in your own messages after reopening a session"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Changed the admin Routines on/off setting to live under Admin settings → Capabilities → Remote sessions; the Claude Code admin page now links to it"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed gh and GitHub API calls inside a cloud session on a GitHub Enterprise Server repository failing after about eight hours; the token now renews automatically"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed a routine that resumes an existing session running with its old prompt and name when it was edited moments before the scheduled run started"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed file links in a cloud session transcript that point outside the session's working directory opening a file card that never loads; they're now disabled and say why"
        },
        {
          "kind": "修正",
          "text": "[Claude Code on the web] Fixed auto mode refusing to retry a tool call because an approval prompt that expired unanswered, or was superseded by a newer message, had been recorded as your rejection"
        },
        {
          "kind": "改善",
          "text": "[Claude Code on the web] Improved cloud sessions viewed in the Claude app: Claude now saves files meant for you where the app can open them"
        },
        {
          "kind": "変更",
          "text": "[Claude Code on the web] Removed the empty repository picker shown when starting a session on a self-hosted environment in an organization where an admin has turned GitHub off"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added Slack's native Working indicator, Stop button and thread title to Claude's threads in channels; the indicator stays up until Claude finishes, and Stop interrupts the task"
        },
        {
          "kind": "追加",
          "text": "[Claude Tag] Added a short notice in the Slack channel when a guest joining, or the last guest leaving, changes how Claude responds there under a Restrict or Channel only guest setting"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed scheduled routines silently failing to run in Slack workspaces that were connected to Claude before the workspace joined its Enterprise Grid"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed Claude asking you to re-upload a Slack file when a brief file-scanning outage, not the file, was the problem; it now retries the scan and is told when the scanner is down"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed a bullet in Claude's Slack reply whose text starts with +, - or * rendering as an empty bullet with a stray nested item; it now shows as one bullet with the character kept"
        },
        {
          "kind": "修正",
          "text": "[Claude Tag] Fixed the Slack notice for a failed cloud environment setup script sometimes being a generic \"mention me to retry\"; it now names the setup script and says to fix it first"
        },
        {
          "kind": "改善",
          "text": "[Claude Tag] Improved the GitHub banner in Claude Tag admin settings to say why GitHub isn't connected: not signed in, app not linked or not installed, sign-in expired, or SSO not authorized"
        },
        {
          "kind": "改善",
          "text": "[Code Review] Improved the Code Review check run to say when REVIEW.md instructions were cut or left out of a review for exceeding a size limit, naming the file and the limit"
        }
      ]
    },
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
          "text": "Added AGENTS.md support: in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead; change it under \"Project instructions\" in /config"
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
    }
  ]
};
