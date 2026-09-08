/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.263",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.261",
      "items": [
        {
          "kind": "追加",
          "text": "Added an \"Organization policy\" line to /status and claude doctor that says why your organization's policy could not be loaded, such as a proxy not passing the endpoint through"
        },
        {
          "kind": "追加",
          "text": "Added bashOutputMaxChars and taskOutputMaxChars settings to raise how much command and background-task output Claude receives inline before it is saved to a file, up to 128K characters"
        },
        {
          "kind": "追加",
          "text": "Added --append-subagent-system-prompt-file to read the subagent system prompt from a file, for prompts too large to pass on the command line"
        },
        {
          "kind": "追加",
          "text": "Added /skill-doctor to show which loaded skills go unused and what they cost in context, so you can prune them"
        },
        {
          "kind": "修正",
          "text": "Fixed typed or pasted characters occasionally landing out of order or being dropped during fast input or key repeat"
        },
        {
          "kind": "修正",
          "text": "Fixed /add-dir <subdirectory> printing a false \"couldn't be resolved\" error when the working directory is on a /net automount"
        },
        {
          "kind": "修正",
          "text": "Fixed the Bedrock setup wizard hanging when AWS or an AWS credential helper never responds (it now times out with a clear error), and its model checks failing behind a TLS-inspecting proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions discarding a plugin synced from claude.ai when managed settings force-enable it in enabledPlugins, then falling back to a marketplace clone that could fail"
        },
        {
          "kind": "修正",
          "text": "Fixed being unable to delete the character immediately before an inline [Image #N] chip in the prompt input"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session losing hook output and other context around parallel tool calls, which changed the resumed request"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control showing a stale permission mode when a phone, browser, or claude.ai app attaches to a terminal session or after the mode changes in the terminal"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions showing as still working (stuck spinner and Stop button) after stopping a turn from a connected phone or browser, or after a local slash command like /clear"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK and cloud sessions ignoring a Stop or interrupt sent just after the first prompt, before the turn had started; the turn now stops instead of running to completion"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control uploading a session pulled with /teleport into the connected session, which appeared appended to the original on phone and web"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control's inbound event stream failing behind TLS-inspecting corporate proxies on native Windows"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions showing the default effort level on claude.ai when the effort comes from settings"
        },
        {
          "kind": "修正",
          "text": "Fixed gcpAuthRefresh opening a browser at startup when the Google credential check was slow, even though the credential was still valid"
        },
        {
          "kind": "修正",
          "text": "Fixed claude.ai connectors staying absent for the whole session when the startup connector fetch timed out — the CLI now retries in the background"
        },
        {
          "kind": "修正",
          "text": "Fixed sustained high CPU usage when a background agent could not be resumed and its wake-up was retried in a tight loop"
        },
        {
          "kind": "修正",
          "text": "Fixed feature flags gated to a newer version occasionally applying to an older Claude Code version running on the same machine"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage and the VS Code usage panel dropping a model-specific weekly limit row when the usage endpoint is rate limited or when opened right after startup"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p --resume <file> adopting a malformed session ID recorded in the transcript; it now resumes under a fresh session ID instead"
        },
        {
          "kind": "修正",
          "text": "Fixed the terminal progress indicator (iTerm2, Ghostty, ConEmu) showing the session as finished while a background workflow or agent was still running"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare layout glitch where a box could render with the wrong height after its container switched between row and column direction"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway client IP when a trusted proxy appends a port to X-Forwarded-For; with an access list set, an unreadable entry now gets 403"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway telling Claude Desktop to export OpenTelemetry as JSON even when the terminal CLI uses protobuf, so protobuf-only collectors rejected Desktop's data"
        },
        {
          "kind": "修正",
          "text": "Fixed Desktop and web showing a session as busy while it only watches an artifact for updates"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude in Chrome file_upload failing with \"paths: expected array, received undefined\" in local Cowork sessions run from the Claude Desktop app"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage to an offline Remote Control session on another machine reading as delivered; the result now says delivery is queued until that machine reconnects"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin install hints from CLIs run in background Bash commands: they are now detected, and the raw <claude-code-hint> tag no longer leaks into the conversation"
        },
        {
          "kind": "修正",
          "text": "Fixed in-process agent-team teammates re-sending their first-turn tool and skill announcements on the second turn, which changed the request prefix and missed the prompt cache"
        },
        {
          "kind": "改善",
          "text": "Improved the /model picker and the VS Code model pill to show a model's name instead of its raw Bedrock, Vertex AI, or LLM gateway ID when Claude Code recognizes it"
        },
        {
          "kind": "改善",
          "text": "Improved startup on Google Vertex AI when GOOGLE_APPLICATION_CREDENTIALS is set: API client creation no longer re-runs Google Cloud project discovery or spawns extra gcloud processes"
        },
        {
          "kind": "改善",
          "text": "Improved streaming performance: already-rendered blocks are no longer re-checked by layout on each update"
        },
        {
          "kind": "改善",
          "text": "Improved the dangerous-rm safety prompt to also catch rm -rf on positional parameters and inside double-quoted sh -c scripts"
        },
        {
          "kind": "改善",
          "text": "Improved handling when the API sends no response headers: the retry now waits up to API_TIMEOUT_MS (10 minutes by default) instead of another 3 minutes, and the messages say what to change"
        },
        {
          "kind": "追加",
          "text": "Changed a Claude apps gateway 403 on the managed settings load (at startup or after /login) to say Claude Code may not be enabled for the organization, instead of advising a new sign-in"
        },
        {
          "kind": "変更",
          "text": "Changed machines whose managed settings pin forceLoginMethod: \"gateway\" to ignore a leftover API key or claude.ai login and ask for /login; Bedrock, Vertex AI, and Foundry sessions are unaffected"
        },
        {
          "kind": "変更",
          "text": "Changed auto mode to treat a link that packs content into a public diagram renderer's URL as an upload to that site: no longer auto-approved unless you asked for it"
        },
        {
          "kind": "変更",
          "text": "Changed the prompt's word-editing keys to match Bash: Ctrl+W deletes back to whitespace, Alt+F and Alt+D stop at word end, punctuation separates words; keybindingFlavor no longer has any effect"
        },
        {
          "kind": "変更",
          "text": "Changed /context token counting to use a local estimate when the token-counting API is unavailable, instead of extra small-model requests"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a \"Build a custom style\" walkthrough to the Output styles menu that writes a custom output style file and lists it right away"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an Add server form and a Remove action to the MCP servers dialog, so MCP servers can be added and removed without leaving the IDE"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a hollow ring in the session list for sessions open in a terminal, another VS Code window, or Claude Desktop, so they no longer look closed"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a fold button to permission and question prompts so the conversation behind them can be read without dismissing them; the space beside the prompt now scrolls the conversation"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added \"Archive session\" to the session list's right-click menu and gave Unarchive its own icon"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a session teleported from Claude Code on the web treating a question that was cut off when the cloud session shut down as declined"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session tab's Rename box opening empty for a tab restored with the window; it now starts with the current name"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed collapsed sections in the session list panel briefly showing expanded each time the panel loaded"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Focus view showing a tool call as still running after Claude had moved on, such as while a question waited for your answer"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list's active-row highlight going stale when an unfocused Claude tab's session ID is corrected"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Cmd/Ctrl+Shift+T reopen and deep-link opens placing the Claude tab outside the Claude editor group when a Claude tab has focus"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the session tab's \"Add to group\" putting a session opened from Claude Code on the Web in two groups; it now moves the entry the session list shows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the model picker showing models an organization has since disabled until the window was reloaded twice"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a tab opened from the session list jumping back to that session, and a tab opened from a Web session restarting its teleport or staying empty, after VS Code reloads the tab's view"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed /btw side-question history from earlier sessions being overwritten when a question is asked right after a window reload or while a settings file has errors"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the pending question card not reappearing after the Claude panel reloads when signed in with a Claude.ai or Console account"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed claude.ai-only features staying visible in a window's other Claude panels after one panel picked up a third-party provider from a settings file"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen appearing despite the Disable Login Prompt setting when Claude Code reports no login or a request fails for lack of one"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the next queued permission prompt keeping text typed on the previous prompt and accepting an immediate second click"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed install-plugin links opening the Claude sidebar without the install dialog in a window where only the session list had been shown"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the sidebar usage meter staying empty on a new window until the Account & usage dialog was opened, and a 0% usage limit being left out of the meter"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed \"Start new session in this group\" losing the group after New conversation, and a missing unread dot for a session that finished before the sidebar's unread list loaded"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the editor tab badge showing unread during a running turn or missing on a tab opened from the session list, and \"Add Session Tab to Group\" doing nothing for an archived session"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Enable Remote Control for all sessions\" so flipping it also applies right away to sessions open in other VS Code windows"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list's Open filter for sessions continued from claude.ai whose tab was still recorded under the web session, and labeled the filter menu's sections for screen readers"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the model picker to one flat list of every model, with rows kept for older model spellings listed last"
        }
      ]
    },
    {
      "version": "2.1.260",
      "items": [
        {
          "kind": "追加",
          "text": "Added a diff panel that opens beside the conversation in fullscreen mode and shows your uncommitted changes as Claude edits; toggle it with /diff"
        },
        {
          "kind": "追加",
          "text": "Added a likely cause for prompt-cache misses (e.g. tool definitions or system prompt changed, idle past the TTL) to /cost and the status line's prompt_cache field"
        },
        {
          "kind": "追加",
          "text": "Added /reload-plugins to headless sessions, so it appears in the Claude Code Desktop and SDK command lists"
        },
        {
          "kind": "追加",
          "text": "Added a text form of /advisor (/advisor, /advisor <model>, /advisor off) for the desktop app, Remote Control, and other headless (-p/Agent SDK) sessions"
        },
        {
          "kind": "追加",
          "text": "Added oidc.scope_on_refresh to the Claude apps gateway for IdPs that return an id_token on refresh only when asked for openid again"
        },
        {
          "kind": "追加",
          "text": "Added Claude apps gateway support for newer Claude Desktop keys in desktop policy blocks, including userPluginMarketplacesEnabled and userPluginUploadsEnabled"
        },
        {
          "kind": "修正",
          "text": "Fixed Edit/Write/Read permission rules whose path contains parentheses being dropped as invalid or ignored by the Bash sandbox, which left \"read-only\" folders writable"
        },
        {
          "kind": "修正",
          "text": "Fixed one file permission rule with an uncompilable pattern (e.g. an unclosed [) making every file edit fail with Invalid regular expression; such a deny rule now guards the literal path it spells"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving zsh commands that hide a command substitution in a REPORTTIME, REPORTMEMORY or DIRSTACKSIZE assignment; these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock model discovery, token counting and AWS SSO/STS credential calls failing with \"unable to get local issuer certificate\" when the corporate root CA is only in the OS certificate store"
        },
        {
          "kind": "修正",
          "text": "Fixed permissions.blockReadsOutsideWorkingDirectories on macOS hiding the user's git config from sandboxed git and hiding a worktree-isolated sub-agent's own checkout"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings not loading for claude.ai Enterprise/Team users who also had a leftover API key from an earlier /login"
        },
        {
          "kind": "修正",
          "text": "Fixed /status listing a signed-in claude.ai account and a configured API key as if both were in effect; the credential not in use is now marked"
        },
        {
          "kind": "修正",
          "text": "Fixed managed skillOverrides entries keyed on a bundled skill's alias (e.g. checkup for /doctor) not applying, and Skill(name) deny rules not covering a nested skill listed as <dir>:name"
        },
        {
          "kind": "修正",
          "text": "Fixed model: fable agents ignoring the [1m] tag on an ANTHROPIC_DEFAULT_FABLE_MODEL pin and silently running with a 200K context window"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker not showing Fable 5.1 for organizations that can use it, which was only accepted when typed as /model claude-fable-5-1"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt caching on Claude Fable 5.1 not covering the context attached after tool results, so it was re-sent as uncached input on every tool-call turn"
        },
        {
          "kind": "修正",
          "text": "Fixed model switching staying blocked for the rest of the session after a plugin hook load failure; each switch now re-checks and the refusal names the cause"
        },
        {
          "kind": "修正",
          "text": "Fixed model switching being blocked for the session when an organization-managed plugin's marketplace could not be loaded"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK-provided MCP servers (e.g. Desktop connectors) sometimes missing from the first turn and only appearing on the next one"
        },
        {
          "kind": "追加",
          "text": "Fixed Claude in Chrome tools failing with \"Not connected\" mid-task in cloud-hosted claude.ai sessions when a connector was added or removed"
        },
        {
          "kind": "修正",
          "text": "Fixed flags, joined emoji and accented letters splitting across wrapped lines, and stale text staying on screen when a flag or joined emoji falls in the terminal's last two columns (now shown as …)"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control accepting a model pick that is not a valid model name; it is now refused with an error instead of failing on the next message"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind and --rewind-files reporting success when checkpoint backup files were missing and nothing was actually restored"
        },
        {
          "kind": "修正",
          "text": "Fixed /rewind leaving stale file-read tracking from the rewound-away turns, which caused \"File unchanged since last read\" stubs and full-file re-injection after external edits"
        },
        {
          "kind": "修正",
          "text": "Fixed -p --resume/--continue (as used by the desktop app) failing on every retry once a session's worktree directory lost its git metadata; it now fails once, then resumes without the worktree"
        },
        {
          "kind": "修正",
          "text": "Fixed a subagent that resumed another agent via SendMessage never being woken by that agent's completion (the notification went to the main conversation instead)"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: an in-process teammate's transcript losing messages, or going blank, during long API retry waits (e.g. under CLAUDE_CODE_RETRY_WATCHDOG) as retry notices evicted real messages"
        },
        {
          "kind": "修正",
          "text": "Fixed a session that moved to the background appearing twice in ListAgents (once as a phantom \"interactive\" twin with the same name) and receiving SendMessage deliveries in the viewer"
        },
        {
          "kind": "修正",
          "text": "Fixed intermittent \"task output swap refused\" errors when many sessions share a project directory"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+Z in fullscreen leaving the shell on the alternate screen, drawn over the paused interface"
        },
        {
          "kind": "修正",
          "text": "Fixed Workflow tool subagents being restarted as stalled while a long context compaction was still in progress"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins from a URL marketplace failing to install with \"marketplace entry path does not stay inside the marketplace directory\" when a host app (e.g. Claude Desktop) stores it as a directory"
        },
        {
          "kind": "修正",
          "text": "Fixed an extra browser tab opening when an artifact is published in a session you're driving from claude.ai, the desktop app, or mobile (Remote Control)"
        },
        {
          "kind": "修正",
          "text": "Fixed the Artifact tool's first call failing with an \"Invalid tool parameters\" validation error in some Cowork sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed IDE line selections being dropped when running a skill or slash command (the \"N lines selected\" context now reaches Claude)"
        },
        {
          "kind": "修正",
          "text": "Fixed repository detection for GitLab projects in nested subgroups (e.g. gitlab.com/group/subgroup/project)"
        },
        {
          "kind": "修正",
          "text": "Fixed owner/repo#123 issue references in rendered output linking to github.com when working in a GitLab repository; they now link to the gitlab.com issue"
        },
        {
          "kind": "修正",
          "text": "Glob/Grep: Fixed the search path being probed on disk before the permission check; a missing path is now reported after permission is decided, as Read does"
        },
        {
          "kind": "その他",
          "text": "Reverted the 2.1.259 change applying Read() deny rules to Bash arguments; it denied npm run build under a Read(./**/build/**) rule in every mode and made cd … && grep prompt even in auto mode"
        },
        {
          "kind": "改善",
          "text": "Improved structured output: Workflow agent({schema}) rejects a JSON Schema that can never be satisfied up front, and retry-cap errors now include the last validation failure"
        },
        {
          "kind": "改善",
          "text": "Improved deleting a background session whose worktree has unpushed commits: the message now names the branch and commit count, and deleting again discards the worktree"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway's refresh-failure log to name the step that failed"
        },
        {
          "kind": "改善",
          "text": "Improved idle CPU usage of non-interactive (-p / SDK) sessions"
        },
        {
          "kind": "改善",
          "text": "Improved the Claude apps gateway on Amazon Bedrock: input tokens for an aborted request are now counted with AWS's free CountTokens API (grant bedrock:CountTokens) instead of a one-token request"
        },
        {
          "kind": "改善",
          "text": "Improved the settings error for rules such as Edit(C:\\dir\\(name)\\**), where \\( is read as an escaped parenthesis rather than a path separator, to suggest an unambiguous spelling"
        },
        {
          "kind": "改善",
          "text": "Improved auto-compact for 1M-context models: Opus and Fable sessions now compact shortly before the 1M-token limit, and recovery compaction on very large contexts no longer times out at 10 minutes"
        },
        {
          "kind": "改善",
          "text": "Improved /ultrareview and claude ultrareview to wait up to 45 minutes (previously 30) for long-running cloud reviews"
        },
        {
          "kind": "改善",
          "text": "Improved /effort on Claude Fable 5.1 so changing effort mid-session no longer invalidates the prompt cache"
        },
        {
          "kind": "その他",
          "text": "Updated the bundled claude-api skill so its Go, Java, and C# samples use current-generation model IDs, and clarified that cheaper worker or sub-agent models should be current-generation too"
        },
        {
          "kind": "変更",
          "text": "Changed ctrl+l / cmd+k in fullscreen mode to clear the transcript view like a terminal clear; scroll up to see earlier messages"
        },
        {
          "kind": "変更",
          "text": "Changed permission rules with text after the closing parenthesis (e.g. Bash(ls) x), which never matched anything, to be reported as invalid settings instead of being silently ignored"
        },
        {
          "kind": "変更",
          "text": "Changed server-managed settings so a managed CLAUDE.md (claudeMd) no longer triggers the security approval dialog; hooks, shell-command, sandbox, and unsafe env settings still require approval"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome to follow your organization's Claude in Chrome admin setting; when an admin turns it off, --chrome, /chrome and the browser tools are unavailable"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway to send orgPluginSettings in the list form read by Claude Desktop 1.15200.0 and later; older desktops ignore it"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway to also refuse to start, naming the field, when a desktop policy misspells a field in a nested object of a managedMcpServers or orgPluginSettings entry"
        },
        {
          "kind": "変更",
          "text": "Changed commands typed at the ! bash-mode prompt to run outside the sandbox even when strict sandbox mode (sandbox.allowUnsandboxedCommands: false) is on, like typing into your own terminal"
        },
        {
          "kind": "変更",
          "text": "Changed self-hosted runner --kill-session-after-min to release a session that is only waiting on its user (paused, resumable on the next message) instead of killing it and reporting a failure"
        },
        {
          "kind": "変更",
          "text": "Removed the one-hour time limit on background commands started by subagents; they now run until they exit or are stopped, matching the main session"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added the selected effort level to the footer model pill, fixed a stale effort level after switching models, and returned the footer pills to their earlier compact size"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added Open and Closed to the session list's status filter menu"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the welcome screen disappearing in a new session when Remote Control turns on automatically"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session history picker loading a session a second time when it is already open in another tab; it now switches to that tab"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session tab's Rename command silently doing nothing while the tab's view was reloading; it now always applies"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed a half-finished message, an empty tool card or an extra \"Thought for\" line staying on screen after Claude Code retried a dropped response"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed \"Enable Remote Control for all sessions\" not applying to a session tab that was still starting when the toggle was flipped"
        }
      ]
    },
    {
      "version": "2.1.259",
      "items": [
        {
          "kind": "追加",
          "text": "Added managedMcpServers managed setting: organizations can provide HTTP/SSE MCP servers to every user (same entry shape as .mcp.json); entries that name a command to run are skipped"
        },
        {
          "kind": "追加",
          "text": "Added --permission-prompts none for unattended headless hosts: anything that would prompt is denied automatically while the active permission mode (including auto mode) keeps deciding"
        },
        {
          "kind": "追加",
          "text": "Added recognition of glab mr create/merge/close/reopen/note/update so GitLab merge requests show as MR !N in the collapsed tool summary and refresh the footer MR badge"
        },
        {
          "kind": "追加",
          "text": "Added --json to claude plugin validate for a machine-readable validation report"
        },
        {
          "kind": "修正",
          "text": "Fixed concurrent sessions silently reverting each other's ~/.claude.json changes — workspace trust no longer resets and MCP/project state is no longer lost when running many sessions at once"
        },
        {
          "kind": "修正",
          "text": "Fixed a conversation whose thinking was rejected once being rejected again on every later turn"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash Read() deny rules not covering files given as option values (--ignore-revs-file=.env, -f.env, @file), git diff/git grep file operands, or cd DIR && cat FILE compounds; grep -r/cp -r over a directory holding a denied file now asks"
        },
        {
          "kind": "修正",
          "text": "Fixed the prompt cache being invalidated when the OAuth token refreshed in sessions with telemetry disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode showing a blank conversation after a long turn with hundreds of tool calls"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode running a turn on a model it doesn't support when a command or skill's frontmatter model: named one; the turn now keeps the session model"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_MAX_CONTEXT_TOKENS being ignored for Vertex-style model IDs (@YYYYMMDD suffix) of model versions Claude Code doesn't recognize"
        },
        {
          "kind": "修正",
          "text": "Fixed the live output preview of a running shell command hiding its newest lines when an earlier line wrapped"
        },
        {
          "kind": "修正",
          "text": "Fixed a background GitHub connection check that ran on every launch for claude.ai users; the result is now remembered across launches"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume failing (and --continue opening an empty conversation) when a saved session contains an attachment entry with no payload"
        },
        {
          "kind": "修正",
          "text": "Fixed frontmatter model: on custom commands and skills being ignored in interactive sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed Artifact publishing failing once with an \"unexpected parameter note\" error in conversations continued from an older version"
        },
        {
          "kind": "修正",
          "text": "Fixed managed forceRemoteSettingsRefresh being ignored at startup when a policy helper configured by MDM or the managed settings file had already run"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree isolation refusing hook-created worktrees on machines where git rev-parse fails with a message other than \"not a git repository\""
        },
        {
          "kind": "修正",
          "text": "Fixed OpenTelemetry metrics and events from cloud sessions missing the user.email, organization.id, and user.account_uuid attributes"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers that disconnect while their tools are being listed at startup showing as connected with no tools instead of reporting the error"
        },
        {
          "kind": "修正",
          "text": "Fixed the file edit permission dialog sometimes showing a changed line cut short with no indication"
        },
        {
          "kind": "修正",
          "text": "Fixed repository detection dropping a known repo identity after a transient git probe failure"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings silently going unenforced when the managed-settings file, a drop-in, the MDM plist, or the HKLM value cannot be parsed: Claude Code now refuses to start and names the source"
        },
        {
          "kind": "修正",
          "text": "Fixed Stop not actually stopping background agents and workflows in remote-control sessions: killed tasks now stay visible and re-stoppable until their processes exit"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a workflow run while its previous stopped run was still exiting, which could run duplicate copies of its agents"
        },
        {
          "kind": "修正",
          "text": "Fixed marketplace repo URLs on github.com with a trailing slash or dangling ?/# producing an unusable .git clone URL"
        },
        {
          "kind": "修正",
          "text": "Fixed blocking Stop hooks causing the turn after a block to lose the model's reasoning from that turn and, on some models, miss the prompt cache"
        },
        {
          "kind": "修正",
          "text": "Fixed remote (claude.ai) sessions taking 60 seconds to start a turn after a browser-hosted MCP server's page had gone away"
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions refusing common Bash loops, xargs pipelines and launcher-wrapped commands that cannot reach the main checkout"
        },
        {
          "kind": "改善",
          "text": "Improved terminal resize and first-render performance for long responses by reusing text measurements"
        },
        {
          "kind": "改善",
          "text": "Improved /workflows agent detail: JSON outcomes are pretty-printed with syntax colors and real line breaks, and long outcomes fold behind an expand toggle"
        },
        {
          "kind": "改善",
          "text": "Improved headless/SDK session start: the first turn begins up to 50 ms sooner when MCP servers finish connecting"
        },
        {
          "kind": "改善",
          "text": "Improved /install-github-app to explain it is GitHub-only and point to the GitLab CI/CD docs when run inside a GitLab repository"
        },
        {
          "kind": "改善",
          "text": "Improved nested background subagent results to be saved in the parent subagent's transcript, so resumed subagents keep them and shared transcripts show the delivery"
        },
        {
          "kind": "変更",
          "text": "Changed allowedMcpServers to govern only servers users add: a literal managed-mcp.json server your allowlist used to filter out now loads on upgrade; use deniedMcpServers to keep it off"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added an Active quick filter and a status filter menu (Needs input, Working, Completed) to the session list sidebar"
        },
        {
          "kind": "修正",
          "text": "Fixed remote and scheduled sessions doing nothing after a connector-tool permission prompt was approved while the session was paused"
        }
      ]
    },
    {
      "version": "2.1.258",
      "items": [
        {
          "kind": "追加",
          "text": "Fixed Claude Code failing to launch on macOS 12 (Monterey), a regression introduced in 2.1.255"
        },
        {
          "kind": "修正",
          "text": "Fixed remote and scheduled sessions failing with \"user messages must have non-empty content\" after a re-sent permission approval could not be applied"
        }
      ]
    },
    {
      "version": "2.1.257",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Fable 5.1 (claude-fable-5-1), now the default Fable model — 1M context, $10/$50 per Mtok with $0.25/Mtok cache reads"
        },
        {
          "kind": "追加",
          "text": "Added \"Time format\" (timeFormat) and timeZone settings: 12-hour, 24-hour, 24-hour UTC, or a strftime pattern for the turn-end clock and transcript-view timestamps"
        },
        {
          "kind": "追加",
          "text": "Added a Containment Escape rule to auto mode so cloud metadata-credential fetches, egress evasion, and cross-tenant reach are no longer auto-approved unless your environment marks them expected"
        },
        {
          "kind": "追加",
          "text": "Added CLAUDE_CODE_SUBAGENT_MODEL_FORCE to apply CLAUDE_CODE_SUBAGENT_MODEL (or the main model) to every subagent, ignoring per-spawn and agent-definition model overrides"
        },
        {
          "kind": "追加",
          "text": "Added s in /effort to change effort for the current session only, matching /model"
        },
        {
          "kind": "追加",
          "text": "Added a /doctor warning for stale sandbox mask files left by a killed session"
        },
        {
          "kind": "追加",
          "text": "Added a one-time prompt in auto mode before the first file read outside the working directories, with the option to block such reads (permissions.blockReadsOutsideWorkingDirectories)"
        },
        {
          "kind": "追加",
          "text": "Added support for a gateway-supplied description on discovered /model picker entries (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY); entries without one still read \"From gateway\""
        },
        {
          "kind": "修正",
          "text": "Fixed settings in a .claude/ folder created after startup not being picked up until restart"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions dispatched from an agent view opened with ← always starting in the original session's permission mode, overriding the target directory's defaultMode and the agent's permissionMode"
        },
        {
          "kind": "追加",
          "text": "Fixed keybindings.json rebinds of Ctrl+G being ignored in claude agents; its Ctrl+S / Ctrl+T are now rebindable via the new Agents context"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions failing to start on macOS npm installs during a self-update, and on Windows when a stale daemon lock file pointed at a reused process id"
        },
        {
          "kind": "修正",
          "text": "Fixed the working spinner stopping while a response streams behind a slash-command panel"
        },
        {
          "kind": "修正",
          "text": "Fixed a background session's state.json detail repeating its own dispatch prompt after a scheduled wake-up"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents keeping a background session you re-prompted buried in Completed after it finished again; Completed now orders by the latest finish"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --bg from a directory that was just deleted reporting \"backgrounded\" and leaving a crashed session row; it now prints the reason and exits 1"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control connecting mid-session re-sending the Bash tool definition, causing a prompt-cache miss"
        },
        {
          "kind": "修正",
          "text": "Fixed a doubly-listed custom Authorization header overriding the configured credential on Bedrock, Mantle, Vertex, and WIF, and the Vertex setup wizard picking up a leftover Anthropic profile from ~/.config/anthropic"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway sending stray host Authorization or profile headers to Foundry, Vertex, and Bedrock, and Foundry Entra ID upstreams not starting when ANTHROPIC_FOUNDRY_API_KEY is set"
        },
        {
          "kind": "修正",
          "text": "Fixed a leftover Anthropic API key or auth token being sent alongside your Foundry subscription key in API-key mode"
        },
        {
          "kind": "修正",
          "text": "Fixed /schedule routines whose prompt was saved without a message role and then ran with nothing to do"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents not saying that a background session is waiting for you to approve a message from another session, or who sent it"
        },
        {
          "kind": "修正",
          "text": "Fixed a prompt stashed with Ctrl+S inside an opened background session being lost when the session went idle or was stopped and then reopened"
        },
        {
          "kind": "修正",
          "text": "Fixed telemetry (OTEL) settings pushed through server-managed settings being ignored on warm starts, including desktop-app Code sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed a teammate permission request being answered twice when the leader's mailbox write was briefly locked"
        },
        {
          "kind": "修正",
          "text": "Fixed a phantom duplicate slash-command row rendering below the in-flight turn while a command's auto-continued response streamed"
        },
        {
          "kind": "修正",
          "text": "Fixed policyHelper timeoutMs and refreshIntervalMs values above the timer maximum (2147483647) causing failures or re-runs every millisecond; they are now clamped"
        },
        {
          "kind": "修正",
          "text": "Fixed the token counter freezing or crawling after switching to another subagent's transcript, and made background subagents' and teammates' counters update live while a response streams"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox network hosts written with a trailing dot (example.com.): a deniedDomains entry didn't block the host inside the sandbox, and \"don't ask again\" for such a host kept prompting"
        },
        {
          "kind": "修正",
          "text": "Fixed dismissing the Remote Control consent prompt (Esc, or n at claude remote-control) counting as consent, so the next request connected without asking"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp reconnect and enable still connecting a settings-file MCP server that a managed MCP allow/deny list or strictPluginOnlyCustomization loaded after startup should block"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp remove leaving a remote server's stored OAuth credentials behind when strictPluginOnlyCustomization locks MCP to plugin-only servers"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control (claude remote-control) sessions started from the Claude app ignoring the selected model and running on the machine's default instead"
        },
        {
          "kind": "修正",
          "text": "Fixed --disallowedTools and session deny rules being dropped after the first settings reload when allowManagedPermissionRulesOnly is enabled"
        },
        {
          "kind": "修正",
          "text": "Fixed --resume listing a backgrounded conversation twice and --continue reopening its stalled pre-background copy; --continue now also opens finished background sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed fullscreen mode not letting you click ! shell command output to expand it"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions left running an older Claude Code binary piling up across auto-updates instead of being retired"
        },
        {
          "kind": "修正",
          "text": "Fixed claude agents --json briefly switching the terminal to raw mode and undoing another program's terminal settings on exit"
        },
        {
          "kind": "修正",
          "text": "Fixed Proactive output style sessions busy-looping with filler messages and repeated log reads instead of idling while a background command or Monitor they started is still running"
        },
        {
          "kind": "修正",
          "text": "Fixed subagents stopping when a response was cut off mid-stream by a computer sleep, dropped connection, or server error; they now automatically continue instead of ending with an incomplete response"
        },
        {
          "kind": "修正",
          "text": "Fixed ← doing nothing in the /btw panel inside a claude agents session: it now returns to the agents list (even mid-answer), and the panel comes back when you reopen the session"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions with an advisor model set missing the prompt cache on background requests (compaction, /recap, prompt suggestions) and re-sending the full conversation uncached each time"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p exiting about 5 seconds after its final result while a Monitor the model armed was still running; it now waits for the watch to fire or time out"
        },
        {
          "kind": "修正",
          "text": "Fixed a permissions.ask rule being skipped in auto mode when the matching command ran inside a compound command or subshell, letting it run without the confirmation prompt"
        },
        {
          "kind": "修正",
          "text": "Fixed plugins being able to read files outside their own directory through a declared command, agent, skill, hooks or other component path that is a symlink; such paths are now refused with an error"
        },
        {
          "kind": "修正",
          "text": "Fixed /add-dir rejecting a directory inside the current working directory; it now loads that directory's skills, commands, and agents like --add-dir does at startup"
        },
        {
          "kind": "修正",
          "text": "Fixed the main agent not being told when you resume a subagent you had stopped from its transcript view"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when pasting ANSI-colored text (e.g. a CI log) into dialogs like /feedback"
        },
        {
          "kind": "修正",
          "text": "Fixed claude mcp add/remove hanging or exhausting memory when the project's .mcp.json is a FIFO or a device-file symlink; it now fails fast with an actionable message"
        },
        {
          "kind": "修正",
          "text": "Fixed unbounded memory growth when non-JSONL data is piped into claude -p --input-format stream-json; it now fails fast with a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed backgrounding a turn (← or Ctrl+B) while a subagent or other tool was running occasionally making the background session treat that tool as rejected instead of re-running it"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash Read()/Edit() deny rules not applying to < file redirects and reader commands like tac and egrep; a deny rule on any argument or redirect target now refuses the command"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming or messaging a subagent whose transcript had grown past 5 MB (for example after reading many images) failing with \"No transcript found\""
        },
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions refusing Bash loops, $VAR reads, \"$(…)\" and heredocs that never touch git as \"too complex to verify that it stays inside the worktree\""
        },
        {
          "kind": "修正",
          "text": "Fixed /model and /effort showing a prompt-cache warning after rewinding a conversation back to empty"
        },
        {
          "kind": "修正",
          "text": "Fixed prompt-cache misses on every turn in long screenshot-heavy sessions once images exceeded the per-request size cap"
        },
        {
          "kind": "修正",
          "text": "Fixed the Edit permission prompt's diff view rendering emoji and multi-code-point characters with incorrect widths"
        },
        {
          "kind": "修正",
          "text": "Fixed WebSocket MCP server connection failures being logged as \"[object ErrorEvent]\" instead of the underlying error"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions failing to open with \"Couldn't start the background service\" while another Claude Code process was downloading an npm update; the start now waits for it"
        },
        {
          "kind": "修正",
          "text": "Fixed background commands that detach from their shell (for example under timeout or setsid) surviving a task stop or Claude Code exit"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude not being told when you stop a background command from the tasks panel or a connected client"
        },
        {
          "kind": "修正",
          "text": "Fixed stopping a background subagent leaving its monitors running"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed git commands in a linked worktree losing write access to the repository's common .git directory after cd into a subdirectory"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock and Bedrock Mantle requests going silent during long hidden-thinking phases on Opus 4.7 and later, which let idle timeouts cut the connection; the stream now carries progress events"
        },
        {
          "kind": "修正",
          "text": "Fixed launching Claude Code after a Claude apps gateway expired or revoked your session: it now says the session ended and offers /login instead of reporting a network error"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions losing git/GitHub credentials for the rest of the session when the session's network proxy failed to start at launch; it now retries in the background and recovers"
        },
        {
          "kind": "修正",
          "text": "Fixed leftover cc-daemon-* folders in the system temp directory after an interrupted background daemon start; the cleanupPeriodDays retention sweep now removes them"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving certain [[ ]] conditionals that zsh parses differently from bash; these commands now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed the managed-settings approval prompt showing the generic warning instead of its telemetry wording when the settings also turn detailed tracing or raw API body logging off, or trace export on"
        },
        {
          "kind": "修正",
          "text": "Fixed agent-team teammates in tmux/iTerm2 panes sometimes staying open after acknowledging a shutdown request"
        },
        {
          "kind": "修正",
          "text": "Fixed the keyless Console sign-in (\"Sign in with your Console account\") not applying your organization's server-managed settings, and /status not showing the Organization for that sign-in"
        },
        {
          "kind": "改善",
          "text": "Improved rendering performance: less re-render work per turn in long conversations, streaming no longer slows down as the reply grows, and background-agent updates no longer re-render the whole screen"
        },
        {
          "kind": "改善",
          "text": "Improved prompt input responsiveness by reducing per-keystroke rendering work"
        },
        {
          "kind": "改善",
          "text": "Improved policy helper diagnostics — refresh failures now show in /status, declining the managed-settings dialog prints why Claude Code exited, and helper timeouts are reported as timeouts"
        },
        {
          "kind": "改善",
          "text": "Improved /code-review --comment to post findings on GitLab merge requests via glab mr note instead of reporting the target as unsupported"
        },
        {
          "kind": "改善",
          "text": "Improved notifications: an MCP elicitation or permission ask queued under another dialog now sends its idle desktop notification at the same delay as a visible ask"
        },
        {
          "kind": "改善",
          "text": "Improved verbose/transcript output: async hook completion notices that arrive together now appear on one line instead of one line per hook"
        },
        {
          "kind": "追加",
          "text": "Improved claude self-hosted-runner --configure-git to also enable git push negotiation, so the first push of a new branch from a stale clone uploads only the new commits instead of the whole tree"
        },
        {
          "kind": "改善",
          "text": "Improved liveness reporting to SDK hosts while a response is held open by gateway keep-alives, so long waits under a raised CLAUDE_STREAM_IDLE_TIMEOUT_MS are not mistaken for a hung session"
        },
        {
          "kind": "改善",
          "text": "Improved MCP connection and OAuth debug/error logs so credentials carried in a server's URL or request headers are redacted"
        },
        {
          "kind": "追加",
          "text": "Improved /fork to keep the original conversation's prompt cache in the new background session: its worktree briefing now arrives as a message instead of a system-prompt change"
        },
        {
          "kind": "改善",
          "text": "Improved emoji autocomplete to accept the remaining GitHub/Slack shortcode aliases (:satisfied:, :telephone:, :collision:, …)"
        },
        {
          "kind": "追加",
          "text": "Changed --effort to lift a new model's default-effort hold for that session only rather than permanently; an effort picked on claude.ai for a Remote Control session now applies during the hold"
        },
        {
          "kind": "変更",
          "text": "Changed a policyHelper in MDM or managed-settings.json shadowed at launch by cached server-managed settings to run (or exit) as soon as the fetch reports them removed, not at the next launch"
        },
        {
          "kind": "変更",
          "text": "Changed managedSourcesBehavior: \"merge\" to take sandbox.credentials.awsPairs and sandbox.ripgrep whole from the highest managed source that sets them instead of combining the sources' values"
        },
        {
          "kind": "変更",
          "text": "Changed gateway model discovery (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1) to run even when CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set, since it only queries your gateway"
        },
        {
          "kind": "変更",
          "text": "Changed claude --resume <session-id> --bg to continue that session under its own ID when nothing is running it, instead of silently starting a copy; a copy is now announced"
        },
        {
          "kind": "変更",
          "text": "Changed /btw history browsing from ←/→ to Shift+←/Shift+→ (or [/]), stepping through your recent side questions and back to the live answer"
        },
        {
          "kind": "変更",
          "text": "Changed defaultMode: \"bypassPermissions\" in .claude/settings.json or .claude/settings.local.json to be ignored, like \"auto\"; set it in user or managed settings, or pass --permission-mode"
        },
        {
          "kind": "変更",
          "text": "Changed fable and best in Claude apps gateway sessions to keep resolving to Fable 5 for now, since gateways not yet configured for Fable 5.1 reject it; pick Fable 5.1 in /model to use it"
        },
        {
          "kind": "変更",
          "text": "Changed --add-dir, /add-dir, and additionalDirectories to refuse network paths (UNC shares, /net/<host> automounts) with a message before touching them; on Windows use a mapped drive letter"
        },
        {
          "kind": "変更",
          "text": "Changed Claude apps gateway sign-in and token refresh requests to verify the gateway's pinned TLS certificate, as the managed settings fetch already does"
        },
        {
          "kind": "変更",
          "text": "Changed Cowork and claude.ai cloud sessions: reading an artifact that isn't yours now always asks you first, even in auto mode"
        },
        {
          "kind": "変更",
          "text": "Removed the Ctrl+E command explanation on Bash and PowerShell permission prompts"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added collapsible ACCOUNT & USAGE and SESSION MANAGER section headers to the session list panel, with the account email, the usage meter, and a View details link opening the usage dialog"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a model pill to the input footer that shows the current model and opens the model picker, with an Effort row and a \"More models\" page"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added a collapse toggle to the Ungrouped section of the session list"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Added output style selection to the command menu, including custom styles"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed third-party provider deployments (Bedrock, Vertex, and others) still showing claude.ai-only features (remote sessions, dictation, usage) and calling claude.ai with a leftover login"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the session list panel's usage meter staying blank after the panel loads; it now shows the last known usage immediately"
        },
        {
          "kind": "追加",
          "text": "[VSCode] Fixed the \"Enable Remote Control for all sessions\" toggle so turning it on or off applies to sessions that are already open, not only to new ones"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed screen reader announcements: a control character before a fence or heading no longer drops visible lines from speech, and bold markers spanning a heading are no longer mis-paired"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the action menu to list slash commands in a filterable \"Slash commands\" dialog instead of inline; picking one runs it; the MCP servers dialog gained the same filter box"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed \"Delete session\" to \"Archive session\": archived sessions move to a collapsible \"Archived sessions\" group at the bottom of the list with an Unarchive action"
        }
      ]
    },
    {
      "version": "2.1.252",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed Bash commands failing with \"task output swap refused (tasks dir moved or linked)\" on some Macs"
        },
        {
          "kind": "修正",
          "text": "Fixed \"always allow\" not saving in a project that has no .claude/settings.local.json yet"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control sessions hosted by Claude Desktop or VS Code stalling for minutes after a tool finished when the connection to claude.ai was degraded"
        },
        {
          "kind": "修正",
          "text": "Fixed background task notifications with very large failure output (for example git errors on a full disk) making the conversation exceed the API request size limit"
        }
      ]
    },
    {
      "version": "2.1.251",
      "items": [
        {
          "kind": "追加",
          "text": "Added PreModelSwitch and PostModelSwitch hook events (block, confirm, or annotate a model switch); SessionStart resume hooks now receive session staleness and the estimated re-cache cost"
        },
        {
          "kind": "追加",
          "text": "Added live streaming of a foreground subagent's tool calls and results to Remote Control clients (background subagents, the default, still show status only)"
        },
        {
          "kind": "追加",
          "text": "Added a Spend limit bar to /usage and a rate_limits.spend_limit status line field for developers behind a Claude apps gateway with spend limits"
        },
        {
          "kind": "追加",
          "text": "Added a per-session prompt-cache line to /cost (hit ratio, misses, tokens re-cached, warm/cold) and a matching prompt_cache object for status line scripts"
        },
        {
          "kind": "追加",
          "text": "Added attach, logs, stop, respawn, and rm to claude --help; the --resume message for a running background session now names the exact claude attach <id> command"
        },
        {
          "kind": "修正",
          "text": "Fixed file tools (Read, Write, Edit) following a symlink swapped inside the working directory after the permission check, which could read or write outside the approved location"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin commands declared in a marketplace entry being able to point outside the plugin directory; such paths are now rejected with a path-traversal error"
        },
        {
          "kind": "修正",
          "text": "Fixed project settings being able to enable detailed beta tracing or raw API body logging, and a lower-scope beta tracing endpoint bypassing an OTLP collector pinned by managed settings or a host app"
        },
        {
          "kind": "修正",
          "text": "Fixed the Workflow tool reading (and quoting in errors) a scriptPath outside what the session may read before the permission check ran"
        },
        {
          "kind": "修正",
          "text": "Fixed Grep and Glob not applying Read(...) deny rules to files reached through a symlinked search path"
        },
        {
          "kind": "修正",
          "text": "Fixed conversations getting stuck on \"text content blocks must be non-empty\" errors after a turn where the model produced only thinking"
        },
        {
          "kind": "修正",
          "text": "Fixed the first launch on a fresh install starting in default mode instead of auto mode for accounts whose startup default is auto mode"
        },
        {
          "kind": "修正",
          "text": "Fixed Opus 5 requests failing with \"effort … is not supported when thinking is disabled\" when effort was xhigh/max and thinking was turned off; effort is now sent as high in that case"
        },
        {
          "kind": "修正",
          "text": "Fixed replying to a message Claude Desktop delivered from another session: SendMessage to that session id now delivers through Claude Desktop instead of failing with \"not reachable\""
        },
        {
          "kind": "修正",
          "text": "Fixed TUI lag with many parallel subagents: per-second progress ticks now replace their predecessor instead of piling up in the transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed agent teams: a teammate's final answer not reaching the team lead — it now arrives in the idle notification instead of a content-free \"available\" notice"
        },
        {
          "kind": "修正",
          "text": "Fixed background subagents being unable to reply to a message from an unnamed sibling or parent agent (from was the agent type, which is not an address)"
        },
        {
          "kind": "修正",
          "text": "Fixed managed-settings disableAutoMode arriving mid-session not moving an already-running auto-mode session back to default mode"
        },
        {
          "kind": "修正",
          "text": "Fixed a \"switch to Opus 1M for 5x more context\" tip that appeared even when the current Opus model already has a 1M context window"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude apps gateway sessions treating a stored Anthropic profile (e.g. a Console sign-in) as active: listing it in /status and retrying gateway 401s with it, though requests never use it"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud sessions telling Claude the model had changed when the host was only setting the session's initial model"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control reporting a failure when an organization's policy disables it; it now shows a single quiet notice instead"
        },
        {
          "kind": "修正",
          "text": "Fixed /mcp reconnect on Remote Control showing a generic withheld-detail error instead of the real remedy when a server was disabled in another session"
        },
        {
          "kind": "修正",
          "text": "Fixed --input-format stream-json: client-injected assistant tool calls sent without a message id were merged into the first one and their results lost, including when resuming older sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed session transcripts being silently overwritten when a directory change relocated a session onto an existing same-ID transcript"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions and their subagents being unable to edit files inside a git worktree they created with git worktree add"
        },
        {
          "kind": "修正",
          "text": "Fixed background sessions occasionally starting without any plugin skills (and staying that way) when another Claude Code process was refreshing the plugin marketplace at the same moment"
        },
        {
          "kind": "修正",
          "text": "Fixed selecting text in an opened background session inside tmux over SSH: it now copies to the tmux buffer like a foreground session instead of falling back to OSC 52"
        },
        {
          "kind": "修正",
          "text": "Fixed SDK and cloud sessions hanging indefinitely when an SDK MCP server's handshake acknowledgment was lost; the wait now times out after 70 seconds and marks only that server failed"
        },
        {
          "kind": "修正",
          "text": "Fixed self-hosted runner leaving a stuck session's Bash tool processes running after the session was force-stopped"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage-credits for Team and Enterprise members whose admin set the org's usage-credit limit to $0: it now offers to ask the admin instead of saying a cap was reached"
        },
        {
          "kind": "修正",
          "text": "Fixed --worktree --tmux with a merge-request number on a gitlab.com origin trying a doomed GitHub-style fetch first instead of fetching the GitLab ref directly"
        },
        {
          "kind": "修正",
          "text": "Fixed Ctrl+G failing with \"Emacs quit unexpectedly\" in background sessions for editors that open /dev/tty, such as emacs -nw and micro"
        },
        {
          "kind": "修正",
          "text": "Fixed an additionalDirectories entry containing a null byte crashing startup, or breaking /add-dir and later settings updates when it came from an SDK host, IDE, or hook; it is now skipped"
        },
        {
          "kind": "修正",
          "text": "Fixed the MCP server menu's copy shortcut: it now says how the sign-in URL was copied instead of always claiming success"
        },
        {
          "kind": "修正",
          "text": "Fixed italic text (such as the session recap line) rendering as highlighted blocks in GNU screen and in tmux sessions using a screen terminal type"
        },
        {
          "kind": "追加",
          "text": "Fixed claude mcp add --header and claude mcp add-json help text naming the wrong transports"
        },
        {
          "kind": "修正",
          "text": "Fixed claude ultrareview and /ultrareview waiting the full 30 minutes when the cloud session fails to start; they now stop early and report the reason"
        },
        {
          "kind": "修正",
          "text": "Fixed Bash permission checks auto-approving commands that assign an arithmetic expression to an integer shell variable (e.g. OPTIND=1/0, RANDOM=2+2); these now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed backgrounded sessions (←, /background, --bg) losing a Vertex/Bedrock gateway (ANTHROPIC_*_BASE_URL + CLAUDE_CODE_SKIP_*_AUTH) exported in the shell, so every request failed"
        },
        {
          "kind": "修正",
          "text": "Fixed claude --bg --model fable on Max plans stopping to ask for usage credits while the interactive session on the same account still had Fable allowance"
        },
        {
          "kind": "修正",
          "text": "Fixed the one-time \"make auto mode your default\" offer appearing in unattended sessions (e.g. agent-team teammate panes), where a stray keypress could accept it unread"
        },
        {
          "kind": "修正",
          "text": "Fixed the managed-settings approval prompt re-appearing after signing in again to the same Claude apps gateway when the settings are unchanged"
        },
        {
          "kind": "修正",
          "text": "Fixed disabled /bug and /share reporting that /feedback was disabled; tips, /help, and refusal messages no longer suggest /feedback when an org policy or env var turns it off"
        },
        {
          "kind": "修正",
          "text": "Fixed cloud session creation advising GitHub setup after a transient GitHub connection failure — the message now says to retry instead"
        },
        {
          "kind": "改善",
          "text": "Improved CPU usage during turns in interactive sessions by cutting redundant UI re-renders"
        },
        {
          "kind": "改善",
          "text": "Improved install size: the native binary is about 5 MB smaller"
        },
        {
          "kind": "改善",
          "text": "Improved cloud sessions: when the session's network proxy drops a connection during a Bash command, the tool result now names the host and reason instead of only \"connection reset\""
        },
        {
          "kind": "改善",
          "text": "Improved /schedule to explain that MCP servers configured in Claude Code can't be attached to cloud routines, instead of a bare \"No MCP connectors\" message"
        },
        {
          "kind": "改善",
          "text": "Improved framing of messages from your own subagents: Claude is told the sender is a worker inside this session, not an unrelated Claude session"
        },
        {
          "kind": "改善",
          "text": "Improved the prompt placeholder to read \"Message @name…\" while viewing a background subagent or fork transcript opened from the subagent panel or /tasks"
        },
        {
          "kind": "改善",
          "text": "Improved sanitization of MCP server names in error messages, menus, and command results"
        },
        {
          "kind": "改善",
          "text": "Improved Amazon Bedrock session start under CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST (e.g. Claude Desktop): a session given a Bedrock model ID or ARN no longer waits for inference-profile discovery"
        },
        {
          "kind": "変更",
          "text": "Improved the managed settings approval dialog to list only the settings that changed since you last approved them"
        },
        {
          "kind": "改善",
          "text": "Improved retry when the model's tool call is malformed: the broken output is now dropped from the retry context, including on Bedrock, Vertex, and Foundry"
        },
        {
          "kind": "変更",
          "text": "Changed /radio to be available on Bedrock, Vertex AI, Foundry, and Claude Platform on AWS, and when telemetry is disabled"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome so browser actions always go through Claude Code's permission checks, including in sessions with telemetry disabled, which previously used the Chrome extension's own prompts"
        },
        {
          "kind": "変更",
          "text": "Changed CLAUDE_CODE_SUBAGENT_MODEL to set the default subagent model rather than override everything: an agent definition's model: and an explicit per-spawn model now take precedence over it"
        },
        {
          "kind": "変更",
          "text": "Changed the default commit trailer to Co-Authored-By: Claude Code when the active model isn't a recognized Claude model (e.g. third-party models behind a custom ANTHROPIC_BASE_URL)"
        },
        {
          "kind": "変更",
          "text": "Changed the default model for seat-based Enterprise subscriptions to Opus 5, matching other premium plans"
        },
        {
          "kind": "変更",
          "text": "Changed /effort to save your default effort level per model, so each model keeps its own setting when you switch"
        },
        {
          "kind": "変更",
          "text": "Changed analytics to no longer turn off before sign-in solely because managed settings force gateway login (or cannot be read); they stay off once signed in to the gateway or via DISABLE_TELEMETRY"
        },
        {
          "kind": "変更",
          "text": "Changed the footer PR badge on Bedrock, Vertex, and Foundry, and when telemetry is off, to call the GitHub API directly (via gh auth token, GH_TOKEN, or GITHUB_TOKEN) instead of gh pr view"
        },
        {
          "kind": "変更",
          "text": "Changed how Bash command output files are created and read back when commands run in the sandbox, so a sandboxed command cannot redirect or replace them"
        },
        {
          "kind": "変更",
          "text": "Changed plugin/LSP install suggestions and the auto-mode default offer to wait until you've sent or cleared what you're typing, so the Enter that sends your prompt can't answer them"
        },
        {
          "kind": "変更",
          "text": "Changed server-managed settings that terminate sandbox TLS, route sandbox traffic through your own proxy, inject credentials, or weaken sandbox isolation to require approval before they apply"
        },
        {
          "kind": "変更",
          "text": "Changed ANTHROPIC_CUSTOM_HEADERS from managed or project settings to require approval when it sets a credential, org/tenant, routing, or API-behavior header (e.g. Authorization, Host)"
        },
        {
          "kind": "変更",
          "text": "Changed project-level .claude/settings.json env to no longer set CLAUDE_CONFIG_DIR, CLAUDE_CODE_TMPDIR, or TMPDIR/TMP/TEMP; set them in your shell, user, or managed settings instead"
        },
        {
          "kind": "変更",
          "text": "Removed syntax highlighting for six rarely used languages (1c, gml, isbl, mathematica, maxima, sqf); the binary is 2.5 MB smaller"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the sign-in screen's \"Bedrock, Foundry, or Vertex\" button opening the docs at the top of the page instead of the third-party provider setup section"
        },
        {
          "kind": "変更",
          "text": "[VSCode] Changed the Remote Control banner to a footer pill (shown while Remote Control is on or has failed) that opens the session on claude.ai/code; turn it on or off with /remote-control"
        }
      ]
    }
  ]
};
