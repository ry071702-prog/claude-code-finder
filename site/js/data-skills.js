// 生成物: scripts/build_data.py が data/skills/skills.jsonl から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込んだもの（週次 ingest-skills.yml）。
window.CCF_SKILLS = [
{
"id": "skill-anthropics-skills-skills-algorithmic-art",
"priority": 400,
"category": "community",
"type": "skill",
"want": "algorithmic-art",
"feature": "anthropics/skills",
"summary": "Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art using code, generative art, algorithmic art, flow fields, or particle systems. Create original algorithmic art rather than copying existing artists' work to avoid copyright violations.",
"commands": [
"npx skills add anthropics/skills@algorithmic-art -g"
],
"install": "npx skills add anthropics/skills@algorithmic-art -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"algorithmic-art",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-brand-guidelines",
"priority": 401,
"category": "community",
"type": "skill",
"want": "brand-guidelines",
"feature": "anthropics/skills",
"summary": "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply.",
"commands": [
"npx skills add anthropics/skills@brand-guidelines -g"
],
"install": "npx skills add anthropics/skills@brand-guidelines -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"brand-guidelines",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-canvas-design",
"priority": 402,
"category": "community",
"type": "skill",
"want": "canvas-design",
"feature": "anthropics/skills",
"summary": "Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs, never copying existing artists' work to avoid copyright violations.",
"commands": [
"npx skills add anthropics/skills@canvas-design -g"
],
"install": "npx skills add anthropics/skills@canvas-design -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"canvas-design",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-claude-api",
"priority": 403,
"category": "community",
"type": "skill",
"want": "claude-api",
"feature": "anthropics/skills",
"summary": "Reference for the Claude API / Anthropic SDK — model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.\nTRIGGER — read BEFORE opening the target file; don't skip because it \"looks like a one-liner\" — whenever: the prompt names Claude/Anthropic in any form (Claude, Anthropic, Fable, Opus, Sonnet, Haiku, `anthropic`, `@anthropic-ai`, `claude-*`, `us.anthropic.*`, `[1m]`); the user asks about an LLM (pricing/model choice/limits/caching) — never answer from memory; OR the task is LLM-shaped with provider unstated (agent/MCP/tool-definition/multi-agent/RAG/LLM-judge/computer-use; generate/summarize/extract/classify/rewrite/converse over NL; debugging refusals/cutoffs/streaming/tool-calls/tokens).\nSKIP only when another provider is being worked on (overrides all triggers): OpenAI/GPT/Gemini/Llama/Mistral/Cohere/Ollama named in the query; OR `grep -rE 'openai|langchain_openai|google.generativeai|genai|mistralai|cohere|ollama'` over the project hits (run this grep FIRST if no provider named — don't Read the file).",
"commands": [
"npx skills add anthropics/skills@claude-api -g"
],
"install": "npx skills add anthropics/skills@claude-api -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"claude-api",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-doc-coauthoring",
"priority": 404,
"category": "community",
"type": "skill",
"want": "doc-coauthoring",
"feature": "anthropics/skills",
"summary": "Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This workflow helps users efficiently transfer context, refine content through iteration, and verify the doc works for readers. Trigger when user mentions writing docs, creating proposals, drafting specs, or similar documentation tasks.",
"commands": [
"npx skills add anthropics/skills@doc-coauthoring -g"
],
"install": "npx skills add anthropics/skills@doc-coauthoring -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"doc-coauthoring",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-docx",
"priority": 405,
"category": "community",
"type": "skill",
"want": "docx",
"feature": "anthropics/skills",
"summary": "Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.",
"commands": [
"npx skills add anthropics/skills@docx -g"
],
"install": "npx skills add anthropics/skills@docx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"docx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-frontend-design",
"priority": 406,
"category": "community",
"type": "skill",
"want": "frontend-design",
"feature": "anthropics/skills",
"summary": "Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.",
"commands": [
"npx skills add anthropics/skills@frontend-design -g"
],
"install": "npx skills add anthropics/skills@frontend-design -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"frontend-design",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-internal-comms",
"priority": 407,
"category": "community",
"type": "skill",
"want": "internal-comms",
"feature": "anthropics/skills",
"summary": "A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use this skill whenever asked to write some sort of internal communications (status reports, leadership updates, 3P updates, company newsletters, FAQs, incident reports, project updates, etc.).",
"commands": [
"npx skills add anthropics/skills@internal-comms -g"
],
"install": "npx skills add anthropics/skills@internal-comms -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"internal-comms",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-mcp-builder",
"priority": 408,
"category": "community",
"type": "skill",
"want": "mcp-builder",
"feature": "anthropics/skills",
"summary": "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).",
"commands": [
"npx skills add anthropics/skills@mcp-builder -g"
],
"install": "npx skills add anthropics/skills@mcp-builder -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"mcp-builder",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-pdf",
"priority": 409,
"category": "community",
"type": "skill",
"want": "pdf",
"feature": "anthropics/skills",
"summary": "Use this skill whenever the user wants to do anything with PDF files. This includes reading or extracting text/tables from PDFs, combining or merging multiple PDFs into one, splitting PDFs apart, rotating pages, adding watermarks, creating new PDFs, filling PDF forms, encrypting/decrypting PDFs, extracting images, and OCR on scanned PDFs to make them searchable. If the user mentions a .pdf file or asks to produce one, use this skill.",
"commands": [
"npx skills add anthropics/skills@pdf -g"
],
"install": "npx skills add anthropics/skills@pdf -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pdf",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-pptx",
"priority": 410,
"category": "community",
"type": "skill",
"want": "pptx",
"feature": "anthropics/skills",
"summary": "Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \"deck,\" \"slides,\" \"presentation,\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.",
"commands": [
"npx skills add anthropics/skills@pptx -g"
],
"install": "npx skills add anthropics/skills@pptx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pptx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-skill-creator",
"priority": 411,
"category": "community",
"type": "skill",
"want": "skill-creator",
"feature": "anthropics/skills",
"summary": "Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy.",
"commands": [
"npx skills add anthropics/skills@skill-creator -g"
],
"install": "npx skills add anthropics/skills@skill-creator -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"skill-creator",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-slack-gif-creator",
"priority": 412,
"category": "community",
"type": "skill",
"want": "slack-gif-creator",
"feature": "anthropics/skills",
"summary": "Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like \"make me a GIF of X doing Y for Slack.\"",
"commands": [
"npx skills add anthropics/skills@slack-gif-creator -g"
],
"install": "npx skills add anthropics/skills@slack-gif-creator -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"slack-gif-creator",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-theme-factory",
"priority": 413,
"category": "community",
"type": "skill",
"want": "theme-factory",
"feature": "anthropics/skills",
"summary": "Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly.",
"commands": [
"npx skills add anthropics/skills@theme-factory -g"
],
"install": "npx skills add anthropics/skills@theme-factory -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"theme-factory",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-web-artifacts-builder",
"priority": 414,
"category": "community",
"type": "skill",
"want": "web-artifacts-builder",
"feature": "anthropics/skills",
"summary": "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.",
"commands": [
"npx skills add anthropics/skills@web-artifacts-builder -g"
],
"install": "npx skills add anthropics/skills@web-artifacts-builder -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"web-artifacts-builder",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-webapp-testing",
"priority": 415,
"category": "community",
"type": "skill",
"want": "webapp-testing",
"feature": "anthropics/skills",
"summary": "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.",
"commands": [
"npx skills add anthropics/skills@webapp-testing -g"
],
"install": "npx skills add anthropics/skills@webapp-testing -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"webapp-testing",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skills-xlsx",
"priority": 416,
"category": "community",
"type": "skill",
"want": "xlsx",
"feature": "anthropics/skills",
"summary": "Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like \"the xlsx in my downloads\") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.",
"commands": [
"npx skills add anthropics/skills@xlsx -g"
],
"install": "npx skills add anthropics/skills@xlsx -g",
"stars": 160359,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"xlsx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-autoplan",
"priority": 417,
"category": "community",
"type": "skill",
"want": "autoplan",
"feature": "garrytan/gstack",
"summary": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. (gstack)",
"commands": [
"npx skills add garrytan/gstack@autoplan -g"
],
"install": "npx skills add garrytan/gstack@autoplan -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"autoplan",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-benchmark",
"priority": 418,
"category": "community",
"type": "skill",
"want": "benchmark",
"feature": "garrytan/gstack",
"summary": "Performance regression detection using the browse daemon. (gstack)",
"commands": [
"npx skills add garrytan/gstack@benchmark -g"
],
"install": "npx skills add garrytan/gstack@benchmark -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"benchmark",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-benchmark-models",
"priority": 419,
"category": "community",
"type": "skill",
"want": "benchmark-models",
"feature": "garrytan/gstack",
"summary": "Cross-model benchmark for gstack skills. (gstack)",
"commands": [
"npx skills add garrytan/gstack@benchmark-models -g"
],
"install": "npx skills add garrytan/gstack@benchmark-models -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"benchmark-models",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-browse",
"priority": 420,
"category": "community",
"type": "skill",
"want": "browse",
"feature": "garrytan/gstack",
"summary": "Fast headless browser for QA testing and site dogfooding. (gstack)",
"commands": [
"npx skills add garrytan/gstack@browse -g"
],
"install": "npx skills add garrytan/gstack@browse -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"browse",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-canary",
"priority": 421,
"category": "community",
"type": "skill",
"want": "canary",
"feature": "garrytan/gstack",
"summary": "Post-deploy canary monitoring. (gstack)",
"commands": [
"npx skills add garrytan/gstack@canary -g"
],
"install": "npx skills add garrytan/gstack@canary -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"canary",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-careful",
"priority": 422,
"category": "community",
"type": "skill",
"want": "careful",
"feature": "garrytan/gstack",
"summary": "Safety guardrails for destructive commands. (gstack)",
"commands": [
"npx skills add garrytan/gstack@careful -g"
],
"install": "npx skills add garrytan/gstack@careful -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"careful",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-gstack",
"priority": 423,
"category": "community",
"type": "skill",
"want": "gstack",
"feature": "garrytan/gstack",
"summary": "Router for the gstack skill suite. (gstack)",
"commands": [
"npx skills add garrytan/gstack@gstack -g"
],
"install": "npx skills add garrytan/gstack@gstack -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"gstack",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-garrytan-gstack-browser-skills-hackernews-frontpage",
"priority": 424,
"category": "community",
"type": "skill",
"want": "hackernews-frontpage",
"feature": "garrytan/gstack",
"summary": "Scrape the Hacker News front page (titles, points, comment counts).",
"commands": [
"npx skills add garrytan/gstack@hackernews-frontpage -g"
],
"install": "npx skills add garrytan/gstack@hackernews-frontpage -g",
"stars": 121291,
"repoUrl": "https://github.com/garrytan/gstack",
"aliases": [
"hackernews-frontpage",
"garrytan",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-add-app-to-server",
"priority": 425,
"category": "community",
"type": "skill",
"want": "add-app-to-server",
"feature": "tldraw/tldraw",
"summary": "This skill should be used when the user asks to \"add an app to my MCP server\", \"add UI to my MCP server\", \"add a view to my MCP tool\", \"enrich MCP tools with UI\", \"add interactive UI to existing server\", \"add MCP Apps to my server\", or needs to add interactive UI capabilities to an existing MCP server that already has tools. Provides guidance for analyzing existing tools and adding MCP Apps UI resources.",
"commands": [
"npx skills add tldraw/tldraw@add-app-to-server -g"
],
"install": "npx skills add tldraw/tldraw@add-app-to-server -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"add-app-to-server",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-clean-copy",
"priority": 426,
"category": "community",
"type": "skill",
"want": "clean-copy",
"feature": "tldraw/tldraw",
"summary": "Reimplement the current branch on a new branch with a clean, narrative-quality git commit history. Use when asked to make a clean copy branch, clean up commit history by replaying work, or rebuild a branch as reviewable commits.",
"commands": [
"npx skills add tldraw/tldraw@clean-copy -g"
],
"install": "npx skills add tldraw/tldraw@clean-copy -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"clean-copy",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-commit-changes",
"priority": 427,
"category": "community",
"type": "skill",
"want": "commit-changes",
"feature": "tldraw/tldraw",
"summary": "Create a git commit for the current changes. Use when asked to commit changes, make a commit, generate a commit message, or commit the current worktree with optional user-provided context.",
"commands": [
"npx skills add tldraw/tldraw@commit-changes -g"
],
"install": "npx skills add tldraw/tldraw@commit-changes -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"commit-changes",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-convert-web-app",
"priority": 428,
"category": "community",
"type": "skill",
"want": "convert-web-app",
"feature": "tldraw/tldraw",
"summary": "This skill should be used when the user asks to \"add MCP App support to my web app\", \"turn my web app into a hybrid MCP App\", \"make my web page work as an MCP App too\", \"wrap my existing UI as an MCP App\", \"convert iframe embed to MCP App\", \"turn my SPA into an MCP App\", or needs to add MCP App support to an existing web application while keeping it working standalone. Provides guidance for analyzing existing web apps and creating a hybrid web + MCP App with server-side tool and resource registration.",
"commands": [
"npx skills add tldraw/tldraw@convert-web-app -g"
],
"install": "npx skills add tldraw/tldraw@convert-web-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"convert-web-app",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-create-mcp-app",
"priority": 429,
"category": "community",
"type": "skill",
"want": "create-mcp-app",
"feature": "tldraw/tldraw",
"summary": "This skill should be used when the user asks to \"create an MCP App\", \"add a UI to an MCP tool\", \"build an interactive MCP View\", \"scaffold an MCP App\", or needs guidance on MCP Apps SDK patterns, UI-resource registration, MCP App lifecycle, or host integration. Provides comprehensive guidance for building MCP Apps with interactive UIs.",
"commands": [
"npx skills add tldraw/tldraw@create-mcp-app -g"
],
"install": "npx skills add tldraw/tldraw@create-mcp-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"create-mcp-app",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-dotcom-release-crew",
"priority": 430,
"category": "community",
"type": "skill",
"want": "dotcom-release-crew",
"feature": "tldraw/tldraw",
"summary": "Post to the",
"commands": [
"npx skills add tldraw/tldraw@dotcom-release-crew -g"
],
"install": "npx skills add tldraw/tldraw@dotcom-release-crew -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"dotcom-release-crew",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-skills-issue",
"priority": 431,
"category": "community",
"type": "skill",
"want": "issue",
"feature": "tldraw/tldraw",
"summary": "Create a GitHub issue in the tldraw repository from a user description, then mature it through follow-up questions. Use when the user invokes issue, asks to create an issue, report a bug, file a feature request, or answers follow-up questions for an issue created by this skill.",
"commands": [
"npx skills add tldraw/tldraw@issue -g"
],
"install": "npx skills add tldraw/tldraw@issue -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"issue",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-tldraw-tldraw-apps-mcp-app-.claude-skills-migrate-oai-app",
"priority": 432,
"category": "community",
"type": "skill",
"want": "migrate-oai-app",
"feature": "tldraw/tldraw",
"summary": "This skill should be used when the user asks to \"migrate from OpenAI Apps SDK\", \"convert OpenAI App to MCP\", \"port from window.openai\", \"migrate from skybridge\", \"convert openai/outputTemplate\", or needs guidance on converting OpenAI Apps SDK applications to MCP Apps SDK. Provides step-by-step migration guidance with API mapping tables.",
"commands": [
"npx skills add tldraw/tldraw@migrate-oai-app -g"
],
"install": "npx skills add tldraw/tldraw@migrate-oai-app -g",
"stars": 48705,
"repoUrl": "https://github.com/tldraw/tldraw",
"aliases": [
"migrate-oai-app",
"tldraw",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills",
"priority": 433,
"category": "community",
"type": "skill",
"want": "arthas",
"feature": "alibaba/arthas",
"summary": "arthas 诊断 java应用，jvm问题 skill",
"commands": [
"npx skills add alibaba/arthas@skills -g"
],
"install": "npx skills add alibaba/arthas@skills -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"skills",
"alibaba",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-cpu-high",
"priority": 434,
"category": "community",
"type": "skill",
"want": "arthas-cpu-high",
"feature": "alibaba/arthas",
"summary": "排查 JVM / 应用 CPU 飙高（线程定位 + 代码路径分析）",
"commands": [
"npx skills add alibaba/arthas@cpu-high -g"
],
"install": "npx skills add alibaba/arthas@cpu-high -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"cpu-high",
"alibaba",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-eagleeye-traceid",
"priority": 435,
"category": "community",
"type": "skill",
"want": "arthas-eagleeye-traceid",
"feature": "alibaba/arthas",
"summary": "使用 Arthas 的 watch/trace 获取 EagleEye traceId / 获取请求的 traceId",
"commands": [
"npx skills add alibaba/arthas@eagleeye-traceid -g"
],
"install": "npx skills add alibaba/arthas@eagleeye-traceid -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"eagleeye-traceid",
"alibaba",
"skill",
"スキル"
]
},
{
"id": "skill-alibaba-arthas-skills-spring-context",
"priority": 436,
"category": "community",
"type": "skill",
"want": "arthas-springcontext-issues-resolve",
"feature": "alibaba/arthas",
"summary": "排查 Spring ApplicationContext / Bean / 配置注入等问题",
"commands": [
"npx skills add alibaba/arthas@spring-context -g"
],
"install": "npx skills add alibaba/arthas@spring-context -g",
"stars": 37427,
"repoUrl": "https://github.com/alibaba/arthas",
"aliases": [
"spring-context",
"alibaba",
"skill",
"スキル"
]
},
{
"id": "skill-abiosoft-colima-skills",
"priority": 437,
"category": "community",
"type": "skill",
"want": "colima",
"feature": "abiosoft/colima",
"summary": "Guide to using Colima — container runtimes (Docker, containerd, Kubernetes, Incus) on macOS and Linux via lightweight Lima VMs. Use this skill whenever Colima is (or should be) the container backend: installing Colima; `colima start/stop/status/delete/ssh`; picking or switching a runtime; the `Cannot connect to the Docker daemon at unix:///var/run/docker.sock` error; Docker contexts and socket location; registry mirrors / insecure registries; buildx; bind or volume mounts that show up empty in the container; disk space recovery/resize; reachable VM IP; GPU / AI model workloads; config files, profiles and `COLIMA_HOME`; or a Colima VM that won't start. ALSO use it for **writing scripts that drive Colima** — bootstrap, dev-env, deploy, or CI scripts that bring Colima up non-interactively — because the skill has the correct flags, profile-specific socket paths, idempotent `colima start` guards, and readiness/teardown patterns that hand-written scripts routinely get wrong (e.g. inventing a non-existent flag or hardcoding the wrong docker socket). Prefer this over generic Docker advice whenever Colima is the daemon. This skill is specifically about **Colima** — not Docker Desktop, minikube, Kind, K3d, Rancher Desktop, OrbStack, Podman, or plain `limactl`.",
"commands": [
"npx skills add abiosoft/colima -g"
],
"install": "npx skills add abiosoft/colima -g",
"stars": 29865,
"repoUrl": "https://github.com/abiosoft/colima",
"aliases": [
"skills",
"abiosoft",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-deploy-to-vercel",
"priority": 438,
"category": "community",
"type": "skill",
"want": "deploy-to-vercel",
"feature": "vercel-labs/agent-skills",
"summary": "Deploy applications and websites to Vercel. Use when the user requests deployment actions like \"deploy my app\", \"deploy and give me the link\", \"push this live\", or \"create a preview deployment\".",
"commands": [
"npx skills add vercel-labs/agent-skills@deploy-to-vercel -g"
],
"install": "npx skills add vercel-labs/agent-skills@deploy-to-vercel -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"deploy-to-vercel",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-vercel-cli-with-tokens",
"priority": 439,
"category": "community",
"type": "skill",
"want": "vercel-cli-with-tokens",
"feature": "vercel-labs/agent-skills",
"summary": "Deploy and manage projects on Vercel using token-based authentication. Use when working with Vercel CLI using access tokens rather than interactive login — e.g. \"deploy to vercel\", \"set up vercel\", \"add environment variables to vercel\".",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-cli-with-tokens",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-composition-patterns",
"priority": 440,
"category": "community",
"type": "skill",
"want": "vercel-composition-patterns",
"feature": "vercel-labs/agent-skills",
"summary": "React composition patterns that scale. Use when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs. Triggers on tasks involving compound components, render props, context providers, or component architecture. Includes React 19 API changes.",
"commands": [
"npx skills add vercel-labs/agent-skills@composition-patterns -g"
],
"install": "npx skills add vercel-labs/agent-skills@composition-patterns -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"composition-patterns",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-vercel-optimize",
"priority": 441,
"category": "community",
"type": "skill",
"want": "vercel-optimize",
"feature": "vercel-labs/agent-skills",
"summary": "Use for Vercel cost and performance optimization on deployed projects, especially Next.js, SvelteKit, Nuxt, and limited Astro apps. Collect Vercel metrics, usage, project config, and code scan results first; investigate only metric-backed candidates; produce ranked recommendations grounded in verified files and version-aware Vercel/framework docs. Trigger for Vercel bill reduction, slow or expensive routes, caching opportunities, Function Invocations, Build Minutes, Fast Data Transfer, Core Web Vitals, Bot Management, Fluid compute, or cost breakdown requests.",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-optimize -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-optimize -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-optimize",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-best-practices",
"priority": 442,
"category": "community",
"type": "skill",
"want": "vercel-react-best-practices",
"feature": "vercel-labs/agent-skills",
"summary": "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-best-practices -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-best-practices -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-best-practices",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-native-skills",
"priority": 443,
"category": "community",
"type": "skill",
"want": "vercel-react-native-skills",
"feature": "vercel-labs/agent-skills",
"summary": "React Native and Expo best practices for building performant mobile apps. Use when building React Native components, optimizing list performance, implementing animations, or working with native modules. Triggers on tasks involving React Native, Expo, mobile performance, or native platform APIs.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-native-skills -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-native-skills -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-native-skills",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-react-view-transitions",
"priority": 444,
"category": "community",
"type": "skill",
"want": "vercel-react-view-transitions",
"feature": "vercel-labs/agent-skills",
"summary": "Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view transition pseudo-elements). Use this skill whenever the user wants to add page transitions, animate route changes, create shared element animations, animate enter/exit of components, animate list reorder, implement directional (forward/back) navigation animations, or integrate view transitions in Next.js. Also use when the user mentions view transitions, `startViewTransition`, `ViewTransition`, transition types, or asks about animating between UI states in React without third-party animation libraries.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-view-transitions -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-view-transitions -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-view-transitions",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-web-design-guidelines",
"priority": 445,
"category": "community",
"type": "skill",
"want": "web-design-guidelines",
"feature": "vercel-labs/agent-skills",
"summary": "Review UI code for Web Interface Guidelines compliance. Use when asked to \"review my UI\", \"check accessibility\", \"audit design\", \"review UX\", or \"check my site against best practices\".",
"commands": [
"npx skills add vercel-labs/agent-skills@web-design-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@web-design-guidelines -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"web-design-guidelines",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-skills-writing-guidelines",
"priority": 446,
"category": "community",
"type": "skill",
"want": "writing-guidelines",
"feature": "vercel-labs/agent-skills",
"summary": "Review docs/prose for Writing Guidelines compliance. Use when asked to \"review my docs\", \"check writing style\", \"audit prose\", \"review docs voice and tone\", or \"check this page against the writing handbook\".",
"commands": [
"npx skills add vercel-labs/agent-skills@writing-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@writing-guidelines -g",
"stars": 28950,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"writing-guidelines",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-karakeep-app-karakeep-skills",
"priority": 447,
"category": "community",
"type": "skill",
"want": "karakeep",
"feature": "karakeep-app/karakeep",
"summary": "Official skill for how to use karakeep (the bookmark manager) and interact with it programmatically.",
"commands": [
"npx skills add karakeep-app/karakeep -g"
],
"install": "npx skills add karakeep-app/karakeep -g",
"stars": 27314,
"repoUrl": "https://github.com/karakeep-app/karakeep",
"aliases": [
"skills",
"karakeep-app",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-guizang-ppt-skill-guizang-ppt-skill",
"priority": 448,
"category": "community",
"type": "skill",
"want": "guizang-ppt-skill",
"feature": "op7418/guizang-ppt-skill",
"summary": "生成横向翻页网页 PPT（单 HTML 文件），含 WebGL 背景、章节幕封、数据大字报、图片网格等模板。提供两种风格：① \"电子杂志 × 电子墨水\"（衬线 + 流体背景 + 暖色） ② \"瑞士国际主义\"（无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮）。当用户需要制作分享 / 演讲 / 发布会风格的网页 PPT，或提到\"杂志风 PPT\"、\"瑞士风 PPT\"、\"Swiss Style\"、\"horizontal swipe deck\"时使用。",
"commands": [
"npx skills add op7418/guizang-ppt-skill -g"
],
"install": "npx skills add op7418/guizang-ppt-skill -g",
"stars": 21000,
"repoUrl": "https://github.com/op7418/guizang-ppt-skill",
"aliases": [
"guizang-ppt-skill",
"op7418",
"skill",
"スキル"
]
},
{
"id": "skill-titanwings-colleague-skill-colleague-skill",
"priority": 449,
"category": "community",
"type": "skill",
"want": "dot-skill",
"feature": "titanwings/colleague-skill",
"summary": "Unified meta-skill engine for distilling colleague, relationship, or celebrity characters into reusable Skills. | 统一的 meta-skill 引擎，把 colleague、relationship、celebrity 三类对象蒸馏成可复用 Skill。",
"commands": [
"npx skills add titanwings/colleague-skill -g"
],
"install": "npx skills add titanwings/colleague-skill -g",
"stars": 20212,
"repoUrl": "https://github.com/titanwings/colleague-skill",
"aliases": [
"colleague-skill",
"titanwings",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua",
"priority": 450,
"category": "community",
"type": "skill",
"want": "pua",
"feature": "tanweai/pua",
"summary": "Trae-compatible PUA high-agency governance skill. Use only for explicit PUA requests, repeated failures, user frustration, giving-up/passive behavior, or unverified completion. Do not trigger for normal first-attempt tasks.",
"commands": [
"npx skills add tanweai/pua@pua -g"
],
"install": "npx skills add tanweai/pua@pua -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua",
"priority": 451,
"category": "community",
"type": "skill",
"want": "pua",
"feature": "tanweai/pua",
"summary": "让你的 AI 不敢摆烂。用大厂 PUA 话术穷尽一切方案。触发条件：(1) 任务失败 2+ 次或反复微调同一思路; (2) 即将说'我无法解决'、建议用户手动操作、未验证就归因环境; (3) 被动等待——不搜索、不读源码、只等指示; (4) 用户不满：'try harder'、'stop giving up'、'换个方法'、'为什么还不行'、'你再试试'、'你怎么又失败了'。适用于所有任务类型。首次失败或已知修复正在执行时不触发。",
"commands": [
"npx skills add tanweai/pua@pua -g"
],
"install": "npx skills add tanweai/pua@pua -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codex-pua-cancel-loop",
"priority": 452,
"category": "community",
"type": "skill",
"want": "pua-cancel-loop",
"feature": "tanweai/pua",
"summary": "PUA cancel loop alias for Codex. Codex subcommand mapping for Claude Code /pua:cancel-loop style usage; invoke with $pua-cancel-loop.",
"commands": [
"npx skills add tanweai/pua@pua-cancel-loop -g"
],
"install": "npx skills add tanweai/pua@pua-cancel-loop -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-cancel-loop",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua-en",
"priority": 453,
"category": "community",
"type": "skill",
"want": "pua-en",
"feature": "tanweai/pua",
"summary": "Trae-compatible English PUA/PIP high-agency governance skill. Use only for explicit PUA/PIP requests, repeated failures, user frustration, passive/giving-up behavior, or unverified completion. Not for normal first-attempt tasks.",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua-en",
"priority": 454,
"category": "community",
"type": "skill",
"want": "pua-en",
"feature": "tanweai/pua",
"summary": "Put your AI on a Performance Improvement Plan. Forces exhaustive problem-solving with Western big-tech performance culture rhetoric and structured debugging. Trigger when: (1) task failed 2+ times or stuck tweaking same approach; (2) about to say 'I cannot', suggest manual work, or blame environment without verifying; (3) being passive—not searching, not reading source, just waiting; (4) user frustration: 'try harder', 'stop giving up', 'figure it out', 'again???', or similar. Also for complex debugging, env issues, config/deployment failures. All task types: code, config, research, writing, deployment, infra, API. Do NOT trigger on first-attempt failures or when a known fix is executing.",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codex-pua-en",
"priority": 455,
"category": "community",
"type": "skill",
"want": "pua-en",
"feature": "tanweai/pua",
"summary": "Put your AI on a Performance Improvement Plan. Forces exhaustive problem-solving with Western big-tech performance culture rhetoric and structured debugging. Trigger when: (1) task failed 2+ times or stuck tweaking same approach; (2) about to say 'I cannot', suggest manual work, or blame environment without verifying; (3) being passive—not searching, not reading source, just waiting; (4) user frustration: 'try harder', 'stop giving up', 'figure it out', 'again???', or similar. Also for complex debugging, env issues, config/deployment failures. All task types: code, config, research, writing, deployment, infra, API. Do NOT trigger on first-attempt failures or when a known fix is executing.",
"commands": [
"npx skills add tanweai/pua@pua-en -g"
],
"install": "npx skills add tanweai/pua@pua-en -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-en",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-codebuddy-pua-ja",
"priority": 456,
"category": "community",
"type": "skill",
"want": "pua-ja",
"feature": "tanweai/pua",
"summary": "お前のAIを詰めろ。日本企業の詰め文化と体系的デバッグ方法論で全ての手段を尽くさせる。トリガー条件：(1) タスク失敗2回以上または同じアプローチの微調整ループ; (2)「解決できません」と言おうとする・手動対応を推奨・未検証で環境を原因帰属; (3) 受け身——検索しない・ソースを読まない・指示待ち; (4) ユーザーの不満：'もっと頑張れ'、'なんでまた失敗したの'、'なんとかしろ'。全タスクタイプ適用。初回失敗や既知修正の実行中はトリガーしない。",
"commands": [
"npx skills add tanweai/pua@pua-ja -g"
],
"install": "npx skills add tanweai/pua@pua-ja -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-ja",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-tanweai-pua-.trae-skills-pua-trae",
"priority": 457,
"category": "community",
"type": "skill",
"want": "pua-trae",
"feature": "tanweai/pua",
"summary": "Trae-optimized PUA high-agency governance skill for npx skills installs. Use only for explicit PUA requests, repeated failures, user frustration, giving-up/passive behavior, or unverified completion. Do not trigger for normal first-attempt tasks.",
"commands": [
"npx skills add tanweai/pua@pua-trae -g"
],
"install": "npx skills add tanweai/pua@pua-trae -g",
"stars": 18764,
"repoUrl": "https://github.com/tanweai/pua",
"aliases": [
"pua-trae",
"tanweai",
"skill",
"スキル"
]
},
{
"id": "skill-weifeng2333-videocaptioner-skills",
"priority": 458,
"category": "community",
"type": "skill",
"want": "videocaptioner",
"feature": "WEIFENG2333/VideoCaptioner",
"summary": "Process video subtitles — transcribe speech, optimize/translate text, burn styled subtitles into video. Use when you need to add subtitles to a video, transcribe audio, translate subtitles, or customize subtitle styles.",
"commands": [
"npx skills add WEIFENG2333/VideoCaptioner -g"
],
"install": "npx skills add WEIFENG2333/VideoCaptioner -g",
"stars": 15295,
"repoUrl": "https://github.com/WEIFENG2333/VideoCaptioner",
"aliases": [
"skills",
"WEIFENG2333",
"skill",
"スキル"
]
},
{
"id": "skill-crazyguitar-pysheeet-skills-py",
"priority": 459,
"category": "community",
"type": "skill",
"want": "py",
"feature": "crazyguitar/pysheeet",
"summary": "Comprehensive Python programming reference covering syntax, concurrency, networking, databases, ML/LLM development, and HPC. Use for: Python questions, Python interview preparation, debugging, performance optimization, async patterns, library examples, code review, best practices, MLOps workflows, distributed computing, security implementations, and any Python development tasks.",
"commands": [
"npx skills add crazyguitar/pysheeet@py -g"
],
"install": "npx skills add crazyguitar/pysheeet@py -g",
"stars": 8149,
"repoUrl": "https://github.com/crazyguitar/pysheeet",
"aliases": [
"py",
"crazyguitar",
"skill",
"スキル"
]
},
{
"id": "skill-crazyguitar-pysheeet-skills-readable-py",
"priority": 460,
"category": "community",
"type": "skill",
"want": "readable-py",
"feature": "crazyguitar/pysheeet",
"summary": "Readable Python code rules inspired by The Art of Readable Code. Use when writing, reviewing, or refactoring Python code. Enforces short functions, flat control flow, clear naming, readable structure, and Pythonic idioms.",
"commands": [
"npx skills add crazyguitar/pysheeet@readable-py -g"
],
"install": "npx skills add crazyguitar/pysheeet@readable-py -g",
"stars": 8149,
"repoUrl": "https://github.com/crazyguitar/pysheeet",
"aliases": [
"readable-py",
"crazyguitar",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-ad-certificate-abuse",
"priority": 461,
"category": "community",
"type": "skill",
"want": "competition-ad-certificate-abuse",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for AD CS, certificate templates, enrollment rights, EKUs, SAN controls, PKINIT, certificate mapping, and cert-based privilege paths. Use when the user asks about ESC-style abuse, certificate templates, enrollment agents, EKUs, SAN or subject controls, smartcard or PKINIT logon, CA policy, or how an issued cert turns into accepted privilege. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-ad-certificate-abuse -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-ad-certificate-abuse -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-ad-certificate-abuse",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-agent-cloud",
"priority": 462,
"category": "community",
"type": "skill",
"want": "competition-agent-cloud",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for AI-agent, prompt-injection, MCP or toolchain, cloud, container, CI/CD, and supply-chain challenges. Use when the user asks to analyze prompt-to-tool flows, retrieval poisoning, mounted secrets, deployment drift, runtime-vs-manifest mismatches, registry provenance, or CI-produced artifacts under sandbox assumptions. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-agent-cloud -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-agent-cloud -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-agent-cloud",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-android-hooking",
"priority": 463,
"category": "community",
"type": "skill",
"want": "competition-android-hooking",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for Android APK hooking, Frida tracing, request-signing recovery, SSL pinning bypass, JNI boundary inspection, and app trust-boundary analysis. Use when the user asks to hook an APK, inspect signer logic, trace Java or native boundaries, bypass pinning or root checks, inspect shared prefs or app databases, or replay accepted mobile requests. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-android-hooking -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-android-hooking -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-android-hooking",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-browser-persistence",
"priority": 464,
"category": "community",
"type": "skill",
"want": "competition-browser-persistence",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for browser cookies, localStorage, sessionStorage, IndexedDB, Cache Storage, service workers, offline caches, and client-side session persistence. Use when the user asks to inspect browser state, replay cached auth or session behavior, explain why a page behaves differently after load, or trace how stored client state changes requests, rendering, or access. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-browser-persistence -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-browser-persistence -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-browser-persistence",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-bundle-sourcemap-recovery",
"priority": 465,
"category": "community",
"type": "skill",
"want": "competition-bundle-sourcemap-recovery",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for source maps, build manifests, chunk registries, emitted bundles, obfuscated loader flow, and frontend runtime recovery. Use when the user asks to reconstruct served JavaScript structure, inspect source maps or chunk maps, trace bundle loading, recover hidden routes or APIs from emitted assets, or explain runtime behavior from built frontend artifacts. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-bundle-sourcemap-recovery -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-bundle-sourcemap-recovery -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-bundle-sourcemap-recovery",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-cloud-metadata-path",
"priority": 466,
"category": "community",
"type": "skill",
"want": "competition-cloud-metadata-path",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for cloud metadata services, instance identity, workload identity, link-local credential paths, role assumption, and metadata-to-privilege trust edges. Use when the user asks to inspect metadata-service access, instance credentials, pod or workload identity, link-local token paths, SSRF-to-metadata escalation, or explain how metadata-derived credentials turn into accepted cloud or control-plane privilege. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-cloud-metadata-path -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-cloud-metadata-path -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-cloud-metadata-path",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-container-runtime",
"priority": 467,
"category": "community",
"type": "skill",
"want": "competition-container-runtime",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for live container runtime analysis, mounted secrets, sidecars, namespaces, init containers, entrypoint drift, and route-to-container resolution. Use when the user asks why a live container differs from manifests, where a mounted secret is consumed, how a sidecar or init container changes runtime state, or which route resolves to which live container. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-container-runtime -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-container-runtime -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-container-runtime",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-zhaoxuya520-reverse-skill-ctf-sandbox-orchestrator-competition-crypto-mobile",
"priority": 468,
"category": "community",
"type": "skill",
"want": "competition-crypto-mobile",
"feature": "zhaoxuya520/reverse-skill",
"summary": "Internal downstream skill for ctf-sandbox-orchestrator. CTF-sandbox workflow for crypto, encoding, steganography, APK, IPA, and mobile trust-boundary challenges. Use when the user asks to decode a blob, recover a transform chain or key, inspect hidden media payloads, hook an APK or IPA signer, inspect app storage, or replay mobile request-signing logic. Use only after `$ctf-sandbox-orchestrator` has already established sandbox assumptions and routed here.",
"commands": [
"npx skills add zhaoxuya520/reverse-skill@competition-crypto-mobile -g"
],
"install": "npx skills add zhaoxuya520/reverse-skill@competition-crypto-mobile -g",
"stars": 8112,
"repoUrl": "https://github.com/zhaoxuya520/reverse-skill",
"aliases": [
"competition-crypto-mobile",
"zhaoxuya520",
"skill",
"スキル"
]
},
{
"id": "skill-kaggle-kaggle-cli-skills",
"priority": 469,
"category": "community",
"type": "skill",
"want": "kaggle-cli",
"feature": "Kaggle/kaggle-cli",
"summary": "Use the local Kaggle CLI skill for command guidance, workflows, and troubleshooting across competitions, datasets, kernels/notebooks, models, model variations and versions, inbox file uploads, forums/discussions, benchmarks, configuration, OAuth/API-token authentication, and accelerator quota. Activate this skill when the user asks about kaggle CLI commands, examples, flags, metadata files, download/upload flows, submissions, benchmark tasks, or Kaggle CLI behavior.",
"commands": [
"npx skills add Kaggle/kaggle-cli -g"
],
"install": "npx skills add Kaggle/kaggle-cli -g",
"stars": 7450,
"repoUrl": "https://github.com/Kaggle/kaggle-cli",
"aliases": [
"skills",
"Kaggle",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-architecture",
"priority": 470,
"category": "community",
"type": "skill",
"want": "feast-architecture",
"feature": "feast-dev/feast",
"summary": "The Open Source Feature Store for AI/ML",
"commands": [
"npx skills add feast-dev/feast@feast-architecture -g"
],
"install": "npx skills add feast-dev/feast@feast-architecture -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-architecture",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-architecture",
"priority": 471,
"category": "community",
"type": "skill",
"want": "feast-architecture",
"feature": "feast-dev/feast",
"summary": "Internals of the Feast codebase — how each component works, where the key abstractions live, and the data flow through the system. Use when asked how feast apply works, how the registry stores data, how materialization moves data, how get_online_features retrieves features, how the feature server works, how the Kubernetes operator manages deployments, or when navigating the codebase to understand where to make a change.",
"commands": [
"npx skills add feast-dev/feast@feast-architecture -g"
],
"install": "npx skills add feast-dev/feast@feast-architecture -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-architecture",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-dev",
"priority": 472,
"category": "community",
"type": "skill",
"want": "feast-dev",
"feature": "feast-dev/feast",
"summary": "The Open Source Feature Store for AI/ML",
"commands": [
"npx skills add feast-dev/feast@feast-dev -g"
],
"install": "npx skills add feast-dev/feast@feast-dev -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-dev",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-dev",
"priority": 473,
"category": "community",
"type": "skill",
"want": "feast-dev",
"feature": "feast-dev/feast",
"summary": "Development guide for contributing to the Feast codebase. Covers environment setup, testing, linting, project structure, and PR workflow for feast-dev/feast.",
"commands": [
"npx skills add feast-dev/feast@feast-dev -g"
],
"install": "npx skills add feast-dev/feast@feast-dev -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-dev",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-testing",
"priority": 474,
"category": "community",
"type": "skill",
"want": "feast-testing",
"feature": "feast-dev/feast",
"summary": "The Open Source Feature Store for AI/ML",
"commands": [
"npx skills add feast-dev/feast@feast-testing -g"
],
"install": "npx skills add feast-dev/feast@feast-testing -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-testing",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills-feast-testing",
"priority": 475,
"category": "community",
"type": "skill",
"want": "feast-testing",
"feature": "feast-dev/feast",
"summary": "How to test and debug Feast — running targeted tests, writing unit tests for new components, debugging registry and online store issues, and inspecting live feature store state. Use when writing tests for a new feature, debugging a failing test, investigating a runtime error, or verifying that a change works correctly end-to-end.",
"commands": [
"npx skills add feast-dev/feast@feast-testing -g"
],
"install": "npx skills add feast-dev/feast@feast-testing -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-testing",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-.claude-skills-feast-user-guide",
"priority": 476,
"category": "community",
"type": "skill",
"want": "feast-user-guide",
"feature": "feast-dev/feast",
"summary": "The Open Source Feature Store for AI/ML",
"commands": [
"npx skills add feast-dev/feast@feast-user-guide -g"
],
"install": "npx skills add feast-dev/feast@feast-user-guide -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"feast-user-guide",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-feast-dev-feast-skills",
"priority": 477,
"category": "community",
"type": "skill",
"want": "feast-user-guide",
"feature": "feast-dev/feast",
"summary": "Guide for working with Feast (Feature Store) — defining features, configuring feature_store.yaml, retrieving features online/offline, using the CLI, and building RAG retrieval pipelines. Use when the user asks about creating entities, feature views, on-demand feature views, stream feature views, feature services, data sources, feature_store.yaml configuration, feast apply/materialize commands, online or historical feature retrieval, or vector-based document retrieval with Feast.",
"commands": [
"npx skills add feast-dev/feast@skills -g"
],
"install": "npx skills add feast-dev/feast@skills -g",
"stars": 7128,
"repoUrl": "https://github.com/feast-dev/feast",
"aliases": [
"skills",
"feast-dev",
"skill",
"スキル"
]
},
{
"id": "skill-lewislulu-html-ppt-skill-html-ppt-skill",
"priority": 478,
"category": "community",
"type": "skill",
"want": "html-ppt",
"feature": "lewislulu/html-ppt-skill",
"summary": "HTML PPT Studio — author professional static HTML presentations in many styles, layouts, and animations, all driven by templates. Use when the user asks for a presentation, PPT, slides, keynote, deck, slideshow, \"幻灯片\", \"演讲稿\", \"做一份 PPT\", \"做一份 slides\", a reveal-style HTML deck, a 小红书 图文, or any kind of multi-slide pitch/report/sharing document that should look tasteful and be usable with keyboard navigation. Triggers include keywords like \"presentation\", \"ppt\", \"slides\", \"deck\", \"keynote\", \"reveal\", \"slideshow\", \"幻灯片\", \"演讲稿\", \"分享稿\", \"小红书图文\", \"talk slides\", \"pitch deck\", \"tech sharing\", \"technical presentation\".",
"commands": [
"npx skills add lewislulu/html-ppt-skill -g"
],
"install": "npx skills add lewislulu/html-ppt-skill -g",
"stars": 7072,
"repoUrl": "https://github.com/lewislulu/html-ppt-skill",
"aliases": [
"html-ppt-skill",
"lewislulu",
"skill",
"スキル"
]
},
{
"id": "skill-vyperlang-vyper-skills",
"priority": 479,
"category": "community",
"type": "skill",
"want": "vyper-compiler",
"feature": "vyperlang/vyper",
"summary": "Vyper smart contract compiler internals. Use when working on the Vyper compiler codebase — compilation pipeline, Venom IR, semantic analysis, code generation, testing, or contributing. Triggers on vyper compiler development, Venom passes, AST/semantics changes, codegen work, or test writing.",
"commands": [
"npx skills add vyperlang/vyper -g"
],
"install": "npx skills add vyperlang/vyper -g",
"stars": 5176,
"repoUrl": "https://github.com/vyperlang/vyper",
"aliases": [
"skills",
"vyperlang",
"skill",
"スキル"
]
},
{
"id": "skill-github-gh-aw-gh-aw",
"priority": 480,
"category": "community",
"type": "skill",
"want": "gh-aw",
"feature": "github/gh-aw",
"summary": "GitHub Agentic Workflows",
"commands": [
"npx skills add github/gh-aw@gh-aw -g"
],
"install": "npx skills add github/gh-aw@gh-aw -g",
"stars": 4752,
"repoUrl": "https://github.com/github/gh-aw",
"aliases": [
"gh-aw",
"github",
"skill",
"スキル"
]
},
{
"id": "skill-github-gh-aw-.claude-skills-playwright-cli",
"priority": 481,
"category": "community",
"type": "skill",
"want": "playwright-cli",
"feature": "github/gh-aw",
"summary": "Automate browser interactions, test web pages and work with Playwright tests.",
"commands": [
"npx skills add github/gh-aw@playwright-cli -g"
],
"install": "npx skills add github/gh-aw@playwright-cli -g",
"stars": 4752,
"repoUrl": "https://github.com/github/gh-aw",
"aliases": [
"playwright-cli",
"github",
"skill",
"スキル"
]
},
{
"id": "skill-antvis-l7-skills-l7-single",
"priority": 482,
"category": "community",
"type": "skill",
"want": "antv-l7",
"feature": "antvis/L7",
"summary": "基于 WebGL 的大规模地理空间数据可视化引擎。适用于：\n(1) 创建交互式 WebGL 地图应用\n(2) 可视化地理空间数据（点、线、面、热力图）\n(3) 构建位置数据驾驶舱\n(4) 添加地图图层、交互和动画效果\n(5) 处理并展示 GeoJSON、CSV 等空间数据",
"commands": [
"npx skills add antvis/L7@l7-single -g"
],
"install": "npx skills add antvis/L7@l7-single -g",
"stars": 4030,
"repoUrl": "https://github.com/antvis/L7",
"aliases": [
"l7-single",
"antvis",
"skill",
"スキル"
]
},
{
"id": "skill-antvis-l7-skills-l7",
"priority": 483,
"category": "community",
"type": "skill",
"want": "antv-l7",
"feature": "antvis/L7",
"summary": "Comprehensive guide for AntV L7 geospatial visualization library. Use when users need to:\n(1) Create interactive maps with WebGL rendering\n(2) Visualize geographic data (points, lines, polygons, heatmaps)\n(3) Build location-based data dashboards\n(4) Add map layers, interactions, or animations\n(5) Process and display GeoJSON, CSV, or other spatial data\n(6) Integrate maps with AMap (GaodeMap), Mapbox, Maplibre, or standalone L7 Map\n(7) Optimize performance for large-scale geographic datasets",
"commands": [
"npx skills add antvis/L7@l7 -g"
],
"install": "npx skills add antvis/L7@l7 -g",
"stars": 4030,
"repoUrl": "https://github.com/antvis/L7",
"aliases": [
"l7",
"antvis",
"skill",
"スキル"
]
},
{
"id": "skill-paper2poster-paper2poster-skills",
"priority": 484,
"category": "community",
"type": "skill",
"want": "paper2poster-poster",
"feature": "Paper2Poster/Paper2Poster",
"summary": "Use when the user wants to turn an academic paper into a conference poster, poster outline, poster copy deck, poster layout brief, poster.yaml style draft, or Paper2Poster-ready generation package. Trigger for paper-to-poster requests involving PDF papers, arXiv links, manuscripts, PPTX posters, conference submissions, research summaries, or the Paper2Poster workflow.",
"commands": [
"npx skills add Paper2Poster/Paper2Poster -g"
],
"install": "npx skills add Paper2Poster/Paper2Poster -g",
"stars": 3853,
"repoUrl": "https://github.com/Paper2Poster/Paper2Poster",
"aliases": [
"skills",
"Paper2Poster",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-claude-to-im-skill-claude-to-im-skill",
"priority": 485,
"category": "community",
"type": "skill",
"want": "claude-to-im",
"feature": "op7418/Claude-to-IM-skill",
"summary": "Bridge THIS Claude Code or Codex session to Telegram, Discord, Feishu/Lark, QQ, or WeChat so the\nuser can chat with Claude from their phone. Use for: setting up, starting, stopping,\nor diagnosing the claude-to-im bridge daemon; forwarding Claude replies to a messaging\napp; any phrase like \"claude-to-im\", \"bridge\", \"消息推送\", \"消息转发\", \"桥接\",\n\"连上飞书\", \"手机上看claude\", \"启动后台服务\", \"诊断\", \"查看日志\", \"配置\".\nSubcommands: setup, start, stop, status, logs, reconfigure, doctor.\nDo NOT use for: building standalone bots, webhook integrations, or coding with IM\nplatform SDKs — those are regular programming tasks.",
"commands": [
"npx skills add op7418/Claude-to-IM-skill -g"
],
"install": "npx skills add op7418/Claude-to-IM-skill -g",
"stars": 2810,
"repoUrl": "https://github.com/op7418/Claude-to-IM-skill",
"aliases": [
"Claude-to-IM-skill",
"op7418",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-brainstorming-research",
"priority": 486,
"category": "community",
"type": "skill",
"want": "brainstorming-research",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use before writing any paper - clarifies paper type, discipline, topic, methodology, and chapter structure through natural dialogue",
"commands": [
"npx skills add Norman-bury/research-writing-skill@brainstorming-research -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@brainstorming-research -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"brainstorming-research",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-environment-setup",
"priority": 487,
"category": "community",
"type": "skill",
"want": "environment-setup",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when Python environment setup is needed for data visualization or conda installation is required",
"commands": [
"npx skills add Norman-bury/research-writing-skill@environment-setup -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@environment-setup -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"environment-setup",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-evidence-driven-writing",
"priority": 488,
"category": "community",
"type": "skill",
"want": "evidence-driven-writing",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when writing or revising Introduction, Related Work, background, literature synthesis, or any section where references must drive claims",
"commands": [
"npx skills add Norman-bury/research-writing-skill@evidence-driven-writing -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@evidence-driven-writing -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"evidence-driven-writing",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-experiment-results-planning",
"priority": 489,
"category": "community",
"type": "skill",
"want": "experiment-results-planning",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when designing experiments, result tables, mock planning data, evaluation protocols, or results sections before real data are final",
"commands": [
"npx skills add Norman-bury/research-writing-skill@experiment-results-planning -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@experiment-results-planning -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"experiment-results-planning",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-figures-diagram",
"priority": 490,
"category": "community",
"type": "skill",
"want": "figures-diagram",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when creating flowcharts, architecture diagrams, or conceptual diagrams - generates prompts for image AI",
"commands": [
"npx skills add Norman-bury/research-writing-skill@figures-diagram -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@figures-diagram -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"figures-diagram",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-figures-python",
"priority": 491,
"category": "community",
"type": "skill",
"want": "figures-python",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when creating data visualizations for papers - generates publication-quality plots with top-journal color schemes",
"commands": [
"npx skills add Norman-bury/research-writing-skill@figures-python -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@figures-python -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"figures-python",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-skills-latex-output",
"priority": 492,
"category": "community",
"type": "skill",
"want": "latex-output",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when user requests LaTeX format output or has provided school/journal LaTeX templates",
"commands": [
"npx skills add Norman-bury/research-writing-skill@latex-output -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@latex-output -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"latex-output",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-norman-bury-research-writing-skill-research-writing-skill",
"priority": 493,
"category": "community",
"type": "skill",
"want": "research-writing-assistant",
"feature": "Norman-bury/research-writing-skill",
"summary": "Use when writing academic papers, theses, or research articles - supports brainstorming, chapter writing, literature review, and LaTeX output",
"commands": [
"npx skills add Norman-bury/research-writing-skill@research-writing-skill -g"
],
"install": "npx skills add Norman-bury/research-writing-skill@research-writing-skill -g",
"stars": 2755,
"repoUrl": "https://github.com/Norman-bury/research-writing-skill",
"aliases": [
"research-writing-skill",
"Norman-bury",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-browser",
"priority": 494,
"category": "community",
"type": "skill",
"want": "browser",
"feature": "stellarlinkco/myclaude",
"summary": "This skill should be used for browser automation tasks using Chrome DevTools Protocol (CDP). Triggers when users need to launch Chrome with remote debugging, navigate pages, execute JavaScript in browser context, capture screenshots, or interactively select DOM elements. No MCP server required.",
"commands": [
"npx skills add stellarlinkco/myclaude@browser -g"
],
"install": "npx skills add stellarlinkco/myclaude@browser -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"browser",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-codeagent",
"priority": 495,
"category": "community",
"type": "skill",
"want": "codeagent",
"feature": "stellarlinkco/myclaude",
"summary": "Execute codeagent-wrapper for multi-backend AI code tasks. Supports Codex, Claude, Gemini, and OpenCode backends with agent presets, skill injection, file references (@syntax), worktree isolation, parallel execution, and structured output.",
"commands": [
"npx skills add stellarlinkco/myclaude@codeagent -g"
],
"install": "npx skills add stellarlinkco/myclaude@codeagent -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"codeagent",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-dev",
"priority": 496,
"category": "community",
"type": "skill",
"want": "dev",
"feature": "stellarlinkco/myclaude",
"summary": "Extreme lightweight end-to-end development workflow with requirements clarification, intelligent backend selection, parallel codeagent execution, and mandatory 90% test coverage",
"commands": [
"npx skills add stellarlinkco/myclaude@dev -g"
],
"install": "npx skills add stellarlinkco/myclaude@dev -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"dev",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-do",
"priority": 497,
"category": "community",
"type": "skill",
"want": "do",
"feature": "stellarlinkco/myclaude",
"summary": "This skill should be used for structured feature development with codebase understanding. Triggers on /do command. Provides a 5-phase workflow (Understand, Clarify, Design, Implement, Complete) using codeagent-wrapper to orchestrate code-explorer, code-architect, code-reviewer, and develop agents in parallel.",
"commands": [
"npx skills add stellarlinkco/myclaude@do -g"
],
"install": "npx skills add stellarlinkco/myclaude@do -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"do",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-harness",
"priority": 498,
"category": "community",
"type": "skill",
"want": "harness",
"feature": "stellarlinkco/myclaude",
"summary": "This skill should be used for multi-session autonomous agent work requiring progress checkpointing, failure recovery, and task dependency management. Triggers on '/harness' command, or when a task involves many subtasks needing progress persistence, sleep/resume cycles across context windows, recovery from mid-task failures with partial state, or distributed work across multiple agent sessions. Synthesized from Anthropic and OpenAI engineering practices for long-running agents.",
"commands": [
"npx skills add stellarlinkco/myclaude@harness -g"
],
"install": "npx skills add stellarlinkco/myclaude@harness -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"harness",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-omo",
"priority": 499,
"category": "community",
"type": "skill",
"want": "omo",
"feature": "stellarlinkco/myclaude",
"summary": "Use this skill when you see `/omo`. Multi-agent orchestration for \"code analysis / bug investigation / fix planning / implementation\". Choose the minimal agent set and order based on task type + risk; recipes below show common patterns.",
"commands": [
"npx skills add stellarlinkco/myclaude@omo -g"
],
"install": "npx skills add stellarlinkco/myclaude@omo -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"omo",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-product-requirements",
"priority": 500,
"category": "community",
"type": "skill",
"want": "product-requirements",
"feature": "stellarlinkco/myclaude",
"summary": "Interactive Product Owner skill for requirements gathering, analysis, and PRD generation. Triggers when users request product requirements, feature specification, PRD creation, or need help understanding and documenting project requirements. Uses quality scoring and iterative dialogue to ensure comprehensive requirements before generating professional PRD documents.",
"commands": [
"npx skills add stellarlinkco/myclaude@product-requirements -g"
],
"install": "npx skills add stellarlinkco/myclaude@product-requirements -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"product-requirements",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-stellarlinkco-myclaude-skills-prototype-prompt-generator",
"priority": 501,
"category": "community",
"type": "skill",
"want": "prototype-prompt-generator",
"feature": "stellarlinkco/myclaude",
"summary": "This skill should be used when users need to generate detailed, structured prompts for creating UI/UX prototypes. Trigger when users request help with \"create a prototype prompt\", \"design a mobile app\", \"generate UI specifications\", or need comprehensive design documentation for web/mobile applications. Works with multiple design systems including WeChat Work, iOS Native, Material Design, and Ant Design Mobile.",
"commands": [
"npx skills add stellarlinkco/myclaude@prototype-prompt-generator -g"
],
"install": "npx skills add stellarlinkco/myclaude@prototype-prompt-generator -g",
"stars": 2728,
"repoUrl": "https://github.com/stellarlinkco/myclaude",
"aliases": [
"prototype-prompt-generator",
"stellarlinkco",
"skill",
"スキル"
]
},
{
"id": "skill-butterbase-ai-butterbase-butterbase",
"priority": 502,
"category": "community",
"type": "skill",
"want": "butterbase",
"feature": "butterbase-ai/butterbase",
"summary": "AI-native, open-source backend-as-a-service with a built-in Model Context Protocol server. Postgres, auth, storage, functions, AI gateway.",
"commands": [
"npx skills add butterbase-ai/butterbase -g"
],
"install": "npx skills add butterbase-ai/butterbase -g",
"stars": 2557,
"repoUrl": "https://github.com/butterbase-ai/butterbase",
"aliases": [
"butterbase",
"butterbase-ai",
"skill",
"スキル"
]
},
{
"id": "skill-leilei926524-tech-anti-distill-anti-distill",
"priority": 503,
"category": "community",
"type": "skill",
"want": "anti-distill",
"feature": "leilei926524-tech/anti-distill",
"summary": "Anti-distillation for employee Skills. Clean your skill files — looks complete, but core knowledge removed. | 反蒸馏：清洗你被迫写的 Skill 文件，看起来完整，但核心知识已被抽掉。",
"commands": [
"npx skills add leilei926524-tech/anti-distill -g"
],
"install": "npx skills add leilei926524-tech/anti-distill -g",
"stars": 2315,
"repoUrl": "https://github.com/leilei926524-tech/anti-distill",
"aliases": [
"anti-distill",
"leilei926524-tech",
"skill",
"スキル"
]
},
{
"id": "skill-conorbronsdon-avoid-ai-writing-avoid-ai-writing",
"priority": 504,
"category": "community",
"type": "skill",
"want": "avoid-ai-writing",
"feature": "conorbronsdon/avoid-ai-writing",
"summary": "Audit and rewrite content to remove AI writing patterns (\"AI-isms\"). Use this skill when asked to \"remove AI-isms,\" \"clean up AI writing,\" \"edit writing for AI patterns,\" \"audit writing for AI tells,\" or \"make this sound less like AI.\" Supports a detect-only mode, an edit-in-place mode for files, an optional voice profile (casual / professional / technical / warm / blunt), and an iterate-to-convergence pass.",
"commands": [
"npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g"
],
"install": "npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g",
"stars": 2299,
"repoUrl": "https://github.com/conorbronsdon/avoid-ai-writing",
"aliases": [
"avoid-ai-writing",
"conorbronsdon",
"skill",
"スキル"
]
},
{
"id": "skill-conorbronsdon-avoid-ai-writing-plugins-avoid-ai-writing-skills-avoid-ai-writing",
"priority": 505,
"category": "community",
"type": "skill",
"want": "avoid-ai-writing",
"feature": "conorbronsdon/avoid-ai-writing",
"summary": "Audit and rewrite content to remove AI writing patterns (\"AI-isms\"). Use this skill when asked to \"remove AI-isms,\" \"clean up AI writing,\" \"edit writing for AI patterns,\" \"audit writing for AI tells,\" or \"make this sound less like AI.\" Supports a detect-only mode, an edit-in-place mode for files, an optional voice profile (casual / professional / technical / warm / blunt), and an iterate-to-convergence pass.",
"commands": [
"npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g"
],
"install": "npx skills add conorbronsdon/avoid-ai-writing@avoid-ai-writing -g",
"stars": 2299,
"repoUrl": "https://github.com/conorbronsdon/avoid-ai-writing",
"aliases": [
"avoid-ai-writing",
"conorbronsdon",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-emil-design-eng",
"priority": 506,
"category": "community",
"type": "skill",
"want": "emil-design-eng",
"feature": "openstatusHQ/data-table-filters",
"summary": "This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.",
"commands": [
"npx skills add openstatusHQ/data-table-filters@emil-design-eng -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@emil-design-eng -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"emil-design-eng",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-frontend-design",
"priority": 507,
"category": "community",
"type": "skill",
"want": "frontend-design",
"feature": "openstatusHQ/data-table-filters",
"summary": "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.",
"commands": [
"npx skills add openstatusHQ/data-table-filters@frontend-design -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@frontend-design -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"frontend-design",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-game-changing-features",
"priority": 508,
"category": "community",
"type": "skill",
"want": "game-changing-features",
"feature": "openstatusHQ/data-table-filters",
"summary": "Find 10x product opportunities and high-leverage improvements. Use when user wants strategic product thinking, mentions '10x', wants to find high-impact features, or says 'what would make this 10x better', 'product strategy', or 'what should we build next'.",
"commands": [
"npx skills add openstatusHQ/data-table-filters@game-changing-features -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@game-changing-features -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"game-changing-features",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-grill-me",
"priority": 509,
"category": "community",
"type": "skill",
"want": "grill-me",
"feature": "openstatusHQ/data-table-filters",
"summary": "Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions \"grill me\".",
"commands": [
"npx skills add openstatusHQ/data-table-filters@grill-me -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@grill-me -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"grill-me",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve",
"priority": 510,
"category": "community",
"type": "skill",
"want": "improve",
"feature": "openstatusHQ/data-table-filters",
"summary": "Survey any codebase as a senior advisor and produce prioritized, self-contained implementation plans for OTHER models/agents to execute. Strictly read-only on source code — never implements, fixes, or refactors anything itself. Use when asked to audit a codebase, find improvement opportunities (bugs, security, performance, test coverage, tech debt, migrations, DX), suggest features or where to take the project next (roadmap, product direction), or generate handoff plans for another agent to implement.",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-improve-codebase-architecture",
"priority": 511,
"category": "community",
"type": "skill",
"want": "improve-codebase-architecture",
"feature": "openstatusHQ/data-table-filters",
"summary": "Explore a codebase to find opportunities for architectural improvement, focusing on making the codebase more testable by deepening shallow modules. Use when user wants to improve architecture, find refactoring opportunities, consolidate tightly-coupled modules, or make a codebase more AI-navigable.",
"commands": [
"npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@improve-codebase-architecture -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"improve-codebase-architecture",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-mcp-builder",
"priority": 512,
"category": "community",
"type": "skill",
"want": "mcp-builder",
"feature": "openstatusHQ/data-table-filters",
"summary": "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).",
"commands": [
"npx skills add openstatusHQ/data-table-filters@mcp-builder -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@mcp-builder -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"mcp-builder",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-openstatushq-data-table-filters-.agents-skills-next-best-practices",
"priority": 513,
"category": "community",
"type": "skill",
"want": "next-best-practices",
"feature": "openstatusHQ/data-table-filters",
"summary": "Next.js best practices - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, bundling",
"commands": [
"npx skills add openstatusHQ/data-table-filters@next-best-practices -g"
],
"install": "npx skills add openstatusHQ/data-table-filters@next-best-practices -g",
"stars": 2158,
"repoUrl": "https://github.com/openstatusHQ/data-table-filters",
"aliases": [
"next-best-practices",
"openstatusHQ",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-youtube-clipper-skill-youtube-clipper-skill",
"priority": 514,
"category": "community",
"type": "skill",
"want": "youtube-clipper",
"feature": "op7418/Youtube-clipper-skill",
"summary": "YouTube 视频智能剪辑工具。下载视频和字幕，AI 分析生成精细章节（几分钟级别）， 用户选择片段后自动剪辑、翻译字幕为中英双语、烧录字幕到视频，并生成总结文案。 使用场景：当用户需要剪辑 YouTube 视频、生成短视频片段、制作双语字幕版本时。 关键词：视频剪辑、YouTube、字幕翻译、双语字幕、视频下载、clip video",
"commands": [
"npx skills add op7418/Youtube-clipper-skill -g"
],
"install": "npx skills add op7418/Youtube-clipper-skill -g",
"stars": 2057,
"repoUrl": "https://github.com/op7418/Youtube-clipper-skill",
"aliases": [
"Youtube-clipper-skill",
"op7418",
"skill",
"スキル"
]
},
{
"id": "skill-upstash-ratelimit-js-skills",
"priority": 515,
"category": "community",
"type": "skill",
"want": "upstash-ratelimit-ts",
"feature": "upstash/ratelimit-js",
"summary": "Lightweight guidance for using the Redis Rate Limit TypeScript SDK, including setup steps, basic usage, and pointers to advanced algorithm, features, pricing, and traffic‑protection docs.",
"commands": [
"npx skills add upstash/ratelimit-js -g"
],
"install": "npx skills add upstash/ratelimit-js -g",
"stars": 2040,
"repoUrl": "https://github.com/upstash/ratelimit-js",
"aliases": [
"skills",
"upstash",
"skill",
"スキル"
]
},
{
"id": "skill-opendatalab-omnidocbench-skills",
"priority": 516,
"category": "community",
"type": "skill",
"want": "omnidocbench-eval-helper",
"feature": "opendatalab/OmniDocBench",
"summary": "Help users deploy, validate, run, and parse OmniDocBench evaluations. Use this skill whenever the user mentions OmniDocBench, document parsing/OCR benchmark scoring, MinerU or other model evaluation on OmniDocBench, CDM formula metrics, end2end/md2md configs, Docker/conda deployment, remote SSH/H-cluster execution, result JSON parsing, or troubleshooting TeX Live/ImageMagick/Ghostscript/Docker/worker/OOM issues. Prefer Docker first, generate concrete commands from the user's paths, validate inputs before running, and report final Overall/Text/Formula/Table/Reading-order scores with result file paths.",
"commands": [
"npx skills add opendatalab/OmniDocBench -g"
],
"install": "npx skills add opendatalab/OmniDocBench -g",
"stars": 1876,
"repoUrl": "https://github.com/opendatalab/OmniDocBench",
"aliases": [
"skills",
"opendatalab",
"skill",
"スキル"
]
},
{
"id": "skill-francyjglisboa-agent-skill-creator-agent-skill-creator",
"priority": 517,
"category": "community",
"type": "skill",
"want": "agent-skill-creator",
"feature": "FrancyJGLisboa/agent-skill-creator",
"summary": "Create cross-platform agent skills from workflow descriptions. Activates when users ask to create an agent, automate a repetitive workflow, create a custom skill, or need advanced agent creation. Triggers on phrases like create agent for, automate workflow, create skill for, every day I have to, daily I need to, turn process into agent, need to automate, create a cross-platform skill, validate this skill, export this skill, migrate this skill. Supports single skills, multi-agent suites, transcript processing, template-based creation, interactive configuration, cross-platform export, and spec validation.",
"commands": [
"npx skills add FrancyJGLisboa/agent-skill-creator -g"
],
"install": "npx skills add FrancyJGLisboa/agent-skill-creator -g",
"stars": 1799,
"repoUrl": "https://github.com/FrancyJGLisboa/agent-skill-creator",
"aliases": [
"agent-skill-creator",
"FrancyJGLisboa",
"skill",
"スキル"
]
},
{
"id": "skill-youmind-openlab-nano-banana-pro-prompts-recommend-skill-nano-banana-pro-prompts-recommend-skill",
"priority": 518,
"category": "community",
"type": "skill",
"want": "nano-banana-pro-prompts-recommend-skill",
"feature": "YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill",
"summary": "Recommend suitable prompts from 10,000+ Nano Banana Pro image generation prompts based on user needs.\nOptimized for Nano Banana Pro (Gemini), but prompts also work with Nano Banana 2, Seedream 5.0,\nGPT Image 1.5, Midjourney, DALL-E, Flux, Stable Diffusion, and any text-to-image AI model.\n\nUse this skill when users want to:\n- Generate images with AI (any model — Nano Banana Pro, Gemini, GPT Image, Seedream, etc.)\n- Find proven AI image generation prompts and prompt templates\n- Get prompt recommendations for specific use cases (portraits, products, social media, posters, etc.)\n- Create illustrations for articles, videos, podcasts, or marketing content\n- Browse a curated prompt library with sample images\n- Translate and understand prompt techniques\n\nAlso available: \"ai-image-prompts\" skill — a model-agnostic version of this library for universal image generation.",
"commands": [
"npx skills add YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill -g"
],
"install": "npx skills add YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill -g",
"stars": 1752,
"repoUrl": "https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill",
"aliases": [
"nano-banana-pro-prompts-recommend-skill",
"YouMind-OpenLab",
"skill",
"スキル"
]
},
{
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 519,
"category": "community",
"type": "skill",
"want": "guardian-cli",
"feature": "zakirkun/guardian-cli",
"summary": "An enterprise-grade, AI-powered penetration testing automation CLI tool. Orchestrates multiple specialized AI agents (Planner, ToolAgent, Analyst, Reporter) backed by 4 AI providers (OpenAI, Claude, Gemini, OpenRouter) and 19 integrated security tools through YAML-defined workflows. Produces professional Markdown, HTML, or JSON security reports with full evidence capture and traceability.",
"commands": [
"npx skills add zakirkun/guardian-cli -g"
],
"install": "npx skills add zakirkun/guardian-cli -g",
"stars": 1738,
"repoUrl": "https://github.com/zakirkun/guardian-cli",
"aliases": [
"guardian-cli",
"zakirkun",
"skill",
"スキル"
]
}
];
