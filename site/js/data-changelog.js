/* =====================================================================
 *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）
 *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。
 *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。
 * ===================================================================== */
window.CCF_CHANGELOG = {
  "source": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  "versions": [
    {
      "version": "2.1.226",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.225",
      "items": [
        {
          "kind": "追加",
          "text": "Added gateway spend-limit support to Claude Code's usage warning; the limit-reached message now names the cap, its reset time, and the operator's message (requires the gateway on 2.1.225)"
        },
        {
          "kind": "追加",
          "text": "Added a workspace trust prompt to claude agents for untrusted directories, matching the behavior of claude"
        },
        {
          "kind": "修正",
          "text": "Fixed a transient 401 replacing a long-lived CLAUDE_CODE_OAUTH_TOKEN with a stored login's short-lived token, breaking headless sessions until restart"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP OAuth servers on macOS intermittently failing with a burst of 401 errors, as if never authenticated, after a keychain read timed out"
        },
        {
          "kind": "修正",
          "text": "Fixed auto mode counting a safety-filter refusal of its own permission check toward the consecutive-block limit; the action is still denied, but the model is now told to move on rather than retry"
        },
        {
          "kind": "修正",
          "text": "Fixed cross-session messages staying parked without a notice or expiry in headless sessions and during startup"
        },
        {
          "kind": "修正",
          "text": "Fixed conversation history breaking on Remote Control session resume after very large conversations were compacted"
        },
        {
          "kind": "修正",
          "text": "Fixed hovering over a session in another project in the agents list changing the directory the next agent starts in"
        },
        {
          "kind": "修正",
          "text": "Fixed claude self-hosted-runner registering and then failing every session when --base-dir cannot be created or written; it now exits at startup with a clear error"
        },
        {
          "kind": "修正",
          "text": "Fixed Claude Code on the web sessions being misreported as stuck, re-sending a growing event backlog on every reconnect"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control: photos attached from the Claude app are now shown to Claude directly instead of being read from disk with a separate tool call"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed Focus view folding away the latest to-do list, a pending question's context, and settled answers; thinking-only folds show \"Thought for Ns\" and re-collapse when their turn completes"
        },
        {
          "kind": "その他",
          "text": "SendMessage can now start a conversation with your Remote Control sessions on other machines by name (ListAgents shows them as name [ref]), instead of only replying after they message you first"
        },
        {
          "kind": "その他",
          "text": "SendMessage: a Remote Control recipient you already confirmed is never swapped for a same-named session on this machine when its own list couldn't be checked"
        }
      ]
    },
    {
      "version": "2.1.224",
      "items": [
        {
          "kind": "追加",
          "text": "Added self-hosted environments: claude self-hosted-runner turns your own machines or containers into a place Claude Code web, mobile, and desktop sessions can run, on Team and Enterprise plans"
        },
        {
          "kind": "追加",
          "text": "Added archive plugin source: install plugins from a zip over HTTPS without git or npm, with optional SHA-256 pinning"
        },
        {
          "kind": "追加",
          "text": "Added a cancel-and-confirm step when removing an unavailable paste changes a command's text"
        },
        {
          "kind": "追加",
          "text": "Added ANTHROPIC_BEDROCK_REGION_PREFIX env var for Bedrock to prefer a specific cross-region inference profile over the AWS_REGION-derived one"
        },
        {
          "kind": "追加",
          "text": "Added crossSessionInbound and dialogExpiry settings: cross-session messages sent to a session running with bypassed permissions are held for your approval, and messages to other sessions auto-deliver"
        },
        {
          "kind": "追加",
          "text": "Added sandbox credential-masking options: extract and onExtractNoMatch for structured env values, decode: \"jwt\" with maskClaims for JWT-aware masking, and awsPairs/sigv4 for AWS SigV4 re-signing; these need network.tlsTerminate and are honored only from user, managed, or --settings settings"
        },
        {
          "kind": "追加",
          "text": "Added cross-session SendMessage: Claude Code sessions can now message each other, on any of your machines, with ListAgents to discover them (macOS and Linux)"
        },
        {
          "kind": "修正",
          "text": "Fixed long (>200 char) project paths resolving to another project's session directory under a shared sanitized prefix; session list, rename, fork, delete and /resume no longer cross projects"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage reporting \"Message sent\" when the write to a teammate's inbox had actually failed; failed deliveries are now reported as errors"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox filesystem deny entries written with a trailing slash (e.g. denyRead: \"~/.aws/\") being silently bypassable on Linux and macOS"
        },
        {
          "kind": "修正",
          "text": "Fixed sandbox violation details never appearing in Bash tool results; Claude now sees which file or network access was denied and why"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP tools that connect mid-turn being deferred for tool search without their names announced to the model"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin install records being silently corrupted when the same plugin is installed in multiple projects"
        },
        {
          "kind": "修正",
          "text": "Fixed recalled or restored paste content occasionally attaching wrong data or silently losing text when the paste had aged out or placeholder numbers collided"
        },
        {
          "kind": "修正",
          "text": "Fixed copy-on-select on Wayland sometimes not reaching the clipboard; the two selection writes no longer race"
        },
        {
          "kind": "修正",
          "text": "Fixed the feedback survey's transcript share silently failing on long sessions; a failed share now shows an error instead of a success message"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control auto-start intermittently failing with \"Remote credentials fetch failed\" on a cold start with a stale login token"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control and SDK clients showing a blank \"(no content)\" message after /clear and other output-less commands"
        },
        {
          "kind": "追加",
          "text": "Fixed a Remote Control session recreated after its server session expired uploading prior local conversation history into the new session"
        },
        {
          "kind": "改善",
          "text": "Improved fullscreen mode to keep the full pre-compaction history in scrollback across repeated compactions, instead of only the most recent interval"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control: attached web and mobile clients now see compaction progress and the post-compaction boundary instead of a silent pause; /clear resets now propagate to attached clients"
        },
        {
          "kind": "改善",
          "text": "Improved Remote Control: connection failures now show a persistent failure indicator with details and a reconnect shortcut, instead of only an 8-second toast"
        },
        {
          "kind": "追加",
          "text": "Removed the 200-subagent-per-session spawn cap; long-running sessions no longer refuse new agents (concurrency and depth limits still apply)"
        },
        {
          "kind": "変更",
          "text": "Changed managed settings: the approval prompt no longer re-appears after re-login or org switching when the organization's settings are unchanged"
        },
        {
          "kind": "変更",
          "text": "Changed the feedback-survey transcript share: with your consent it now also uploads the last request's model settings — the system prompt (which includes your CLAUDE.md instructions), tool definitions, and model parameters. Secrets are redacted as before, and these fields are dropped first if the share is too large"
        },
        {
          "kind": "変更",
          "text": "Changed the Bash tool description to always note that command output is displayed to the model, not reliably to the user"
        },
        {
          "kind": "変更",
          "text": "Changed recalled paste placeholder numbers to renumber when accepted into the input"
        },
        {
          "kind": "変更",
          "text": "Changed Remote Control to archive the stale server session instead of leaving a dead one listed when a fresh session is minted after compaction or /resume"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed the extension showing Remote Control as connected after the connection failed"
        },
        {
          "kind": "修正",
          "text": "Fixed a session resume silently reconnecting Remote Control after the user turned it off (--resume, SDK hosts, and the VS Code extension)"
        },
        {
          "kind": "修正",
          "text": "[VSCode] Fixed sessions not honoring remoteControlAtStartup when explicitly enabled"
        }
      ]
    },
    {
      "version": "2.1.223",
      "items": [
        {
          "kind": "追加",
          "text": "Added owner wildcard entries (\"owner/*\") to the strictKnownMarketplaces and blockedMarketplaces managed settings for allowing or blocking all marketplace repos under a GitHub org"
        },
        {
          "kind": "追加",
          "text": "Added a warning when workflow agents, forked skills, slash commands, or resumed background agents' requested subagent model is restricted and the parent model runs instead"
        },
        {
          "kind": "追加",
          "text": "Added a /teleport hint in cloud sessions showing how to continue locally with claude --teleport <session id>"
        },
        {
          "kind": "修正",
          "text": "Fixed a Bash permission bypass where a crafted command could hide parts of itself from permission checks"
        },
        {
          "kind": "追加",
          "text": "Fixed permission prompts so commands padded with tabs or invisible Unicode can no longer hide part of the command from the approval dialog"
        },
        {
          "kind": "修正",
          "text": "Fixed workflow scripts being able to use dynamic import() to run code outside the workflow sandbox"
        },
        {
          "kind": "修正",
          "text": "Fixed a permission gap where an agent definition's bypassPermissions mode ignored the org bypass-permissions disable policy"
        },
        {
          "kind": "修正",
          "text": "Fixed resuming a session after a mid-session /cd coming back empty"
        },
        {
          "kind": "修正",
          "text": "Fixed gateway model discovery hiding Claude models registered under provider-prefixed IDs such as vertex_ai/claude-* or bedrock/anthropic.claude-*"
        },
        {
          "kind": "修正",
          "text": "Fixed modelOverrides keys that aren't Anthropic model IDs being treated as the session's canonical model ID; unknown keys are now ignored as documented"
        },
        {
          "kind": "修正",
          "text": "Fixed managed settings: server-delivered settings no longer disable the env block of a machine-local managed-settings.json or MDM profile; admin env now merges per key"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed commands failing to start on Linux when sandbox.filesystem.denyWrite covers the working directory"
        },
        {
          "kind": "修正",
          "text": "Fixed forked background agents getting stuck \"already resuming\" for the rest of the session when rebuilding the fork's parent prompt failed during resume"
        },
        {
          "kind": "修正",
          "text": "Fixed a resumed session failing every turn, or leaving the interactive app on an unresponsive error screen, when its history held a malformed diagnostics attachment"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare hang when parsing unusual git push output"
        },
        {
          "kind": "修正",
          "text": "Changed CLAUDE_CODE_DISABLE_1M_CONTEXT to hold every Claude model with a native 1M window to 200K via auto-compaction, not just a fixed list; a startup warning now appears when auto-compaction isn't holding the session to 200K"
        },
        {
          "kind": "変更",
          "text": "Changed auto-compact to keep sessions on unrecognized model IDs within the assumed context window instead of letting them grow past it; set CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 to restore the previous behavior"
        },
        {
          "kind": "変更",
          "text": "Changed /review to be an alias of /code-review, which reviews the current diff or a PR (/code-review <level> <pr#>); use /code-review ultra for a deep cloud review"
        },
        {
          "kind": "変更",
          "text": "Changed /code-review with no effort level to reuse the level you typed last; type a level like /code-review high to change it"
        }
      ]
    },
    {
      "version": "2.1.222",
      "items": [
        {
          "kind": "修正",
          "text": "Fixed worktree-isolated sessions and their subagents being able to run destructive git commands against the main checkout; isolation now applies to file edits and Bash in every session type"
        },
        {
          "kind": "修正",
          "text": "Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks (summaries, compaction, renames)"
        },
        {
          "kind": "追加",
          "text": "Fixed /usage-credits on Team and Enterprise showing \"you've already sent a usage credit request\" for members whose earlier request was dismissed, blocking them from sending a new one"
        },
        {
          "kind": "修正",
          "text": "Fixed the startup connectivity check hanging and then failing behind an HTTPS proxy; it now uses the same proxy-aware transport as API requests and times out with a clear message"
        },
        {
          "kind": "修正",
          "text": "Fixed \"Connection closed mid-response\" errors being reported on responses that had actually completed"
        },
        {
          "kind": "修正",
          "text": "Fixed /usage overattributing usage to MCP servers: a server's share now reflects only the requests that actually consumed its tool results, instead of every turn after any call to it"
        },
        {
          "kind": "修正",
          "text": "Fixed sessions not linking to pull requests created after the branch was pushed, including through the GitHub REST API"
        },
        {
          "kind": "修正",
          "text": "Fixed org-restricted model: opus-style subagent and teammate family aliases dropping to the parent model instead of stepping down to the newest org-allowed model in the family"
        },
        {
          "kind": "修正",
          "text": "Fixed stream idle timeout firing on custom ANTHROPIC_BASE_URL gateways despite server keep-alive pings arriving on the wire"
        },
        {
          "kind": "修正",
          "text": "Fixed claude.ai connectors being falsely marked as needing authorization when the session token is invalid — they now show a /login hint instead"
        },
        {
          "kind": "修正",
          "text": "Fixed tool errors not being displayed for tools no longer available locally, for example after an MCP server is removed"
        },
        {
          "kind": "修正",
          "text": "Fixed SendMessage rejecting a long summary — it now truncates instead, so sends no longer fail on a character limit"
        },
        {
          "kind": "修正",
          "text": "Fixed the spinner's effort label in a subagent's transcript view showing the session's effort level instead of the subagent's own effort: setting"
        },
        {
          "kind": "修正",
          "text": "Fixed rare crashes when a file watcher hit a filesystem error or during file-watcher teardown"
        },
        {
          "kind": "修正",
          "text": "Fixed screen readers re-reading the whole input line on every backspace in --ax-screen-reader mode — end-of-line deletions now echo just the deleted characters"
        },
        {
          "kind": "修正",
          "text": "Fixed host model-selection keys not taking precedence over a stale on-disk managed-settings.json when CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST is set"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode safety: messages sent to other agent sessions via SendMessage are now evaluated by the permission classifier before dispatch"
        },
        {
          "kind": "改善",
          "text": "Improved the refusal when Claude tries to invoke a skill with disable-model-invocation: Claude is now told to ask you to run the skill instead of replicating its workflow"
        },
        {
          "kind": "改善",
          "text": "Improved the /diff view, the Remote Control workspace diff, and file-edit diffs in Claude Code on the web sessions to use raw git blob content, ignoring workspace-configured diff drivers and textconv"
        },
        {
          "kind": "変更",
          "text": "Changed Remote Control auto-start so repo-local settings (.claude/settings.json or .claude/settings.local.json) can no longer turn it on (they can still turn it off); enable it at user scope via /config"
        },
        {
          "kind": "変更",
          "text": "Removed ultraplan feature"
        }
      ]
    },
    {
      "version": "2.1.221",
      "items": [
        {
          "kind": "追加",
          "text": "[VSCode] Added Focus view: a chat-menu toggle that hides tool activity behind an expandable per-turn summary with a live running-tool indicator, toggled with Ctrl+Alt+F or the \"Claude Code: Toggle Focus view\" command"
        },
        {
          "kind": "追加",
          "text": "Added mode: \"mask\" for sandbox credential files on Linux and WSL — sandboxed commands read a sentinel copy (the whole file, or just the spans captured by an extract regex) while the sandbox proxy substitutes the real value on egress; on macOS file masking falls back to deny"
        },
        {
          "kind": "追加",
          "text": "Added warnings to claude plugin validate when a marketplace or plugin name would be rejected by Claude Desktop's managed marketplace sync"
        },
        {
          "kind": "追加",
          "text": "Added a prompt-audit subcommand to the claude-api skill for auditing prompts and tool descriptions for patterns written for older models"
        },
        {
          "kind": "修正",
          "text": "Fixed a Bash tool permission-check bypass where zsh could execute hidden commands in [[ ]] regex conditionals; affected commands now prompt for permission"
        },
        {
          "kind": "修正",
          "text": "Fixed PowerShell permission checks mishandling paths containing quote characters on Windows; such paths now prompt for approval"
        },
        {
          "kind": "修正",
          "text": "Fixed the thinking toggle having no effect for the rest of a session that started with thinking off; disabling an MCP server mid-connect no longer silently reverts"
        },
        {
          "kind": "修正",
          "text": "Fixed MCP servers from --mcp-config not being connected before the first turn in print mode (-p), which made the model emit tool calls as literal text"
        },
        {
          "kind": "修正",
          "text": "Fixed @-mentioned files being silently dropped when pressing Esc to retract a prompt and resubmitting it"
        },
        {
          "kind": "修正",
          "text": "Fixed a crash when preparing API requests for SDK MCP tools named after built-in object properties such as constructor"
        },
        {
          "kind": "修正",
          "text": "Fixed WebSearch failing with a 400 error at effort xhigh/max when thinking is disabled"
        },
        {
          "kind": "修正",
          "text": "Fixed sandboxed large uploads failing with TLS errors through the sandbox proxy"
        },
        {
          "kind": "修正",
          "text": "Fixed Team and Enterprise spend-limit message incorrectly blaming the org's monthly limit instead of your individual spend limit"
        },
        {
          "kind": "修正",
          "text": "Fixed Bedrock authentication with AWS SSO named profiles failing in desktop-managed sessions on Windows machines that set a stray HOME environment variable"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_RESUME_INTERRUPTED_TURN=0 not disabling interrupted-turn auto-resume; falsy values are now honored"
        },
        {
          "kind": "修正",
          "text": "Fixed a rare wake-from-sleep race where two Claude Code processes could both refresh the same MCP connector or WIF OAuth token at once, forcing re-authentication"
        },
        {
          "kind": "修正",
          "text": "Fixed renaming a session from Claude Code Desktop or claude.ai not updating the CLI's session name; session names from every rename surface are now sanitized"
        },
        {
          "kind": "修正",
          "text": "Fixed plugin- and org-delivered skills named after terminal-only built-ins (e.g. /help, /feedback) being un-invocable in non-interactive sessions"
        },
        {
          "kind": "修正",
          "text": "Fixed the \"Plugins changed\" notification lingering after plugins were reloaded instead of clearing"
        },
        {
          "kind": "修正",
          "text": "Fixed Vim mode: the yank register now survives dialogs, history search, and the transcript view instead of being silently emptied"
        },
        {
          "kind": "修正",
          "text": "Fixed Vim mode: undoing back to an empty prompt now arms the \"press ← again\" confirm before returning to the agent view"
        },
        {
          "kind": "改善",
          "text": "Improved tool search on Google Vertex AI: re-enabled for Claude 4.5-generation and newer models"
        },
        {
          "kind": "改善",
          "text": "Improved auto mode: permission checks for parallel tool calls are now cache-efficient, and switching modes while a check is pending reliably prompts instead of applying the stale result"
        },
        {
          "kind": "修正",
          "text": "Reduced prompt-cache costs for auto-mode permission checks by reusing the cached conversation prefix across decisions"
        },
        {
          "kind": "改善",
          "text": "Improved Stats panel to count cache tokens in its token totals, with a breakdown by input, output, cache read, and cache write"
        },
        {
          "kind": "改善",
          "text": "Improved /ultrareview error messages when a repo shares no history with its base: a checkout with no branches is now refused up front with advice to create one, and refusal hints no longer suggest git fetch --unshallow on clones that are already complete"
        },
        {
          "kind": "改善",
          "text": "Improved Windows startup: process creation times are now read via a native kernel32 call instead of spawning PowerShell, so endpoint security tools that gate powershell.exe no longer prompt"
        },
        {
          "kind": "変更",
          "text": "Changed background sessions to commit and push to preserve work, open a draft PR only when the task calls for one, follow your CLAUDE.md git instructions, and always end by reporting where the work lives"
        },
        {
          "kind": "変更",
          "text": "Changed /plugin install to refresh a stale marketplace catalog and retry before reporting a plugin not found"
        },
        {
          "kind": "変更",
          "text": "Changed plugins installed from /plugin to activate immediately when safe, instead of always requiring /reload-plugins"
        },
        {
          "kind": "変更",
          "text": "Changed plugins to accept \".\" as a skills path, and the root-level SKILL.md validation error now suggests using the plugin root"
        },
        {
          "kind": "変更",
          "text": "Changed /status to show the session kind: interactive, or a background job that is attached or unattended"
        },
        {
          "kind": "変更",
          "text": "Changed emoji autocomplete to accept common alternate shortcodes like :thumbsup:, :thumbsdown:, and :love:"
        },
        {
          "kind": "追加",
          "text": "Changed sessions forked with /fork to create a new worktree of their own instead of working in the original session's checkout"
        },
        {
          "kind": "変更",
          "text": "Changed Claude in Chrome to close the browser tabs it opens once it no longer needs them"
        },
        {
          "kind": "変更",
          "text": "Changed fast mode to report on the stream when usage credits run out mid-session, instead of failing silently"
        },
        {
          "kind": "変更",
          "text": "Changed Monitor: a watch that exits without producing any output now says so instead of reporting \"stream ended\""
        },
        {
          "kind": "変更",
          "text": "Changed the Gateway model field validation: non-string values are rejected with a 400 instead of being forwarded"
        },
        {
          "kind": "変更",
          "text": "Removed the repeated \"Permission mode changed while the auto-mode classifier call was queued\" notice from approval prompts"
        }
      ]
    },
    {
      "version": "2.1.220",
      "items": [
        {
          "kind": "改善",
          "text": "Bug fixes and reliability improvements"
        }
      ]
    },
    {
      "version": "2.1.219",
      "items": [
        {
          "kind": "追加",
          "text": "Added Claude Opus 5 (claude-opus-5), now the default Opus model — 1M context, fast mode at $10/$50 per Mtok"
        },
        {
          "kind": "追加",
          "text": "Added sandbox.network.strictAllowlist setting to deny non-allowlisted hosts for sandboxed commands without prompting"
        },
        {
          "kind": "追加",
          "text": "Added DirectoryAdded hook that fires after /add-dir or the SDK register_repo_root control request registers a new working directory mid-session"
        },
        {
          "kind": "追加",
          "text": "Added mcp_server_errors to the headless stream-json init event, listing --mcp-config entries skipped by config validation; terminal runs print a startup warning"
        },
        {
          "kind": "追加",
          "text": "Added the workflowSizeGuideline settings key so the advisory Dynamic workflow size guideline can be set from any settings file; the /config row is hidden while one does"
        },
        {
          "kind": "追加",
          "text": "Added nested subagent forwarding in stream-json: subagents spawned at depth-2+ now appear when --forward-subagent-text is set, keyed by their spawning Agent tool_use id"
        },
        {
          "kind": "修正",
          "text": "Fixed claude -p text output dropping the answer already produced when a turn dies on a mid-stream API error"
        },
        {
          "kind": "追加",
          "text": "Added HTTP status and error text to claude mcp list and /mcp when a server fails to connect, and a warning for MCP config values with hidden leading or trailing whitespace"
        },
        {
          "kind": "修正",
          "text": "Fixed the Fable model row showing \"Requires usage credits\" for plans that include it, when a stale cache had baked the label in"
        },
        {
          "kind": "修正",
          "text": "Fixed the /model picker showing the merged Opus row as plain \"Opus\" instead of \"Opus (1M context)\""
        },
        {
          "kind": "修正",
          "text": "Fixed copy-on-select inside GNU screen printing base64 into the terminal instead of copying the selection"
        },
        {
          "kind": "修正",
          "text": "Fixed Remote Control clients keeping a stale fast-mode status after a model switch, reconnect, or failed org check"
        },
        {
          "kind": "修正",
          "text": "Fixed CLAUDE_CODE_GIT_BASH_PATH on Windows exiting or being used as bash when the path isn't a bash/sh binary; it's now ignored with a warning"
        },
        {
          "kind": "修正",
          "text": "Fixed Vim mode: pressing ← on an empty prompt now returns to the agent view from NORMAL mode, not just INSERT"
        },
        {
          "kind": "修正",
          "text": "Fixed screen-reader mode rewriting the entire input line on every keystroke instead of echoing only the typed character"
        },
        {
          "kind": "改善",
          "text": "Improved the \"Remote Control is only available via api.anthropic.com\" error to name the specific setting that caused it"
        },
        {
          "kind": "改善",
          "text": "Improved claude --teleport to show which repo your current checkout points at when it doesn't match the session's repo"
        },
        {
          "kind": "変更",
          "text": "Changed dynamic workflows to default to a medium size guideline (aim for fewer than 15 agents); pick another size or unrestricted with Dynamic workflow size in /config"
        },
        {
          "kind": "修正",
          "text": "Changed managed MCP allowlist/denylist ${VAR} entries to resolve from the startup environment and managed-settings env instead of settings-file env"
        },
        {
          "kind": "追加",
          "text": "Changed the /model picker to highlight only the newest model's name, so the highlight marks the new release rather than an arbitrary subset of the list"
        },
        {
          "kind": "追加",
          "text": "Added the current default workflow size to the running-workflow status line, with a pointer to /config for changing it"
        },
        {
          "kind": "変更",
          "text": "Removed Opus 4.7 from fast mode; /fast now applies to Opus 5 and Opus 4.8"
        },
        {
          "kind": "その他",
          "text": "Updated the claude-api skill to default to Claude Opus 5, with a migration path from Opus 4.8"
        },
        {
          "kind": "その他",
          "text": "Subagents can now spawn nested subagents up to depth 3 by default (was 1); set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 to disable nesting"
        }
      ]
    }
  ]
};
