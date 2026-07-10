// 生成物: scripts/build_data.py が data/skills/skills.jsonl から作成。手で編集しない。
// GitHub の Claude Code Skills を非LLMで取り込んだもの（週次 ingest-skills.yml）。
window.CCF_SKILLS = [
{
"id": "skill-anthropics-skills-algorithmic-art",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"algorithmic-art",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-brand-guidelines",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"brand-guidelines",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-canvas-design",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"canvas-design",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-claude-api",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"claude-api",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-doc-coauthoring",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"doc-coauthoring",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-docx",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"docx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-frontend-design",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"frontend-design",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-internal-comms",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"internal-comms",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-mcp-builder",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"mcp-builder",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-pdf",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pdf",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-pptx",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"pptx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-skill-creator",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"skill-creator",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-slack-gif-creator",
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
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"slack-gif-creator",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-template",
"priority": 413,
"category": "community",
"type": "skill",
"want": "template-skill",
"feature": "anthropics/skills",
"summary": "Replace with description of the skill and when Claude should use it.",
"commands": [
"npx skills add anthropics/skills@template -g"
],
"install": "npx skills add anthropics/skills@template -g",
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"template",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-theme-factory",
"priority": 414,
"category": "community",
"type": "skill",
"want": "theme-factory",
"feature": "anthropics/skills",
"summary": "Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly.",
"commands": [
"npx skills add anthropics/skills@theme-factory -g"
],
"install": "npx skills add anthropics/skills@theme-factory -g",
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"theme-factory",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-web-artifacts-builder",
"priority": 415,
"category": "community",
"type": "skill",
"want": "web-artifacts-builder",
"feature": "anthropics/skills",
"summary": "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.",
"commands": [
"npx skills add anthropics/skills@web-artifacts-builder -g"
],
"install": "npx skills add anthropics/skills@web-artifacts-builder -g",
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"web-artifacts-builder",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-webapp-testing",
"priority": 416,
"category": "community",
"type": "skill",
"want": "webapp-testing",
"feature": "anthropics/skills",
"summary": "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.",
"commands": [
"npx skills add anthropics/skills@webapp-testing -g"
],
"install": "npx skills add anthropics/skills@webapp-testing -g",
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"webapp-testing",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-anthropics-skills-xlsx",
"priority": 417,
"category": "community",
"type": "skill",
"want": "xlsx",
"feature": "anthropics/skills",
"summary": "Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like \"the xlsx in my downloads\") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.",
"commands": [
"npx skills add anthropics/skills@xlsx -g"
],
"install": "npx skills add anthropics/skills@xlsx -g",
"stars": 159859,
"repoUrl": "https://github.com/anthropics/skills",
"aliases": [
"xlsx",
"anthropics",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-deploy-to-vercel",
"priority": 418,
"category": "community",
"type": "skill",
"want": "deploy-to-vercel",
"feature": "vercel-labs/agent-skills",
"summary": "Deploy applications and websites to Vercel. Use when the user requests deployment actions like \"deploy my app\", \"deploy and give me the link\", \"push this live\", or \"create a preview deployment\".",
"commands": [
"npx skills add vercel-labs/agent-skills@deploy-to-vercel -g"
],
"install": "npx skills add vercel-labs/agent-skills@deploy-to-vercel -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"deploy-to-vercel",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-vercel-cli-with-tokens",
"priority": 419,
"category": "community",
"type": "skill",
"want": "vercel-cli-with-tokens",
"feature": "vercel-labs/agent-skills",
"summary": "Deploy and manage projects on Vercel using token-based authentication. Use when working with Vercel CLI using access tokens rather than interactive login — e.g. \"deploy to vercel\", \"set up vercel\", \"add environment variables to vercel\".",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-cli-with-tokens",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-composition-patterns",
"priority": 420,
"category": "community",
"type": "skill",
"want": "vercel-composition-patterns",
"feature": "vercel-labs/agent-skills",
"summary": "React composition patterns that scale. Use when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs. Triggers on tasks involving compound components, render props, context providers, or component architecture. Includes React 19 API changes.",
"commands": [
"npx skills add vercel-labs/agent-skills@composition-patterns -g"
],
"install": "npx skills add vercel-labs/agent-skills@composition-patterns -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"composition-patterns",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-vercel-optimize",
"priority": 421,
"category": "community",
"type": "skill",
"want": "vercel-optimize",
"feature": "vercel-labs/agent-skills",
"summary": "Use for Vercel cost and performance optimization on deployed projects, especially Next.js, SvelteKit, Nuxt, and limited Astro apps. Collect Vercel metrics, usage, project config, and code scan results first; investigate only metric-backed candidates; produce ranked recommendations grounded in verified files and version-aware Vercel/framework docs. Trigger for Vercel bill reduction, slow or expensive routes, caching opportunities, Function Invocations, Build Minutes, Fast Data Transfer, Core Web Vitals, Bot Management, Fluid compute, or cost breakdown requests.",
"commands": [
"npx skills add vercel-labs/agent-skills@vercel-optimize -g"
],
"install": "npx skills add vercel-labs/agent-skills@vercel-optimize -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"vercel-optimize",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-react-best-practices",
"priority": 422,
"category": "community",
"type": "skill",
"want": "vercel-react-best-practices",
"feature": "vercel-labs/agent-skills",
"summary": "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-best-practices -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-best-practices -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-best-practices",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-react-native-skills",
"priority": 423,
"category": "community",
"type": "skill",
"want": "vercel-react-native-skills",
"feature": "vercel-labs/agent-skills",
"summary": "React Native and Expo best practices for building performant mobile apps. Use when building React Native components, optimizing list performance, implementing animations, or working with native modules. Triggers on tasks involving React Native, Expo, mobile performance, or native platform APIs.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-native-skills -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-native-skills -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-native-skills",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-react-view-transitions",
"priority": 424,
"category": "community",
"type": "skill",
"want": "vercel-react-view-transitions",
"feature": "vercel-labs/agent-skills",
"summary": "Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view transition pseudo-elements). Use this skill whenever the user wants to add page transitions, animate route changes, create shared element animations, animate enter/exit of components, animate list reorder, implement directional (forward/back) navigation animations, or integrate view transitions in Next.js. Also use when the user mentions view transitions, `startViewTransition`, `ViewTransition`, transition types, or asks about animating between UI states in React without third-party animation libraries.",
"commands": [
"npx skills add vercel-labs/agent-skills@react-view-transitions -g"
],
"install": "npx skills add vercel-labs/agent-skills@react-view-transitions -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"react-view-transitions",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-web-design-guidelines",
"priority": 425,
"category": "community",
"type": "skill",
"want": "web-design-guidelines",
"feature": "vercel-labs/agent-skills",
"summary": "Review UI code for Web Interface Guidelines compliance. Use when asked to \"review my UI\", \"check accessibility\", \"audit design\", \"review UX\", or \"check my site against best practices\".",
"commands": [
"npx skills add vercel-labs/agent-skills@web-design-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@web-design-guidelines -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"web-design-guidelines",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-vercel-labs-agent-skills-writing-guidelines",
"priority": 426,
"category": "community",
"type": "skill",
"want": "writing-guidelines",
"feature": "vercel-labs/agent-skills",
"summary": "Review docs/prose for Writing Guidelines compliance. Use when asked to \"review my docs\", \"check writing style\", \"audit prose\", \"review docs voice and tone\", or \"check this page against the writing handbook\".",
"commands": [
"npx skills add vercel-labs/agent-skills@writing-guidelines -g"
],
"install": "npx skills add vercel-labs/agent-skills@writing-guidelines -g",
"stars": 28888,
"repoUrl": "https://github.com/vercel-labs/agent-skills",
"aliases": [
"writing-guidelines",
"vercel-labs",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-0codekit",
"priority": 427,
"category": "community",
"type": "skill",
"want": "0codekit",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "0codekit integration. Manage Workspaces. Use when the user wants to interact with 0codekit data.",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@0codekit -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@0codekit -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"0codekit",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-0xarchive",
"priority": 428,
"category": "community",
"type": "skill",
"want": "0xarchive",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "Query historical crypto market data from 0xArchive across Hyperliquid, Lighter.xyz, and HIP-3. Covers orderbooks, trades, candles, funding rates, open interest, liquidations, and data quality. Use when the user asks about crypto market data, orderbooks, trades, funding rates, or historical prices on Hyperliquid, Lighter.xyz, or HIP-3.",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@0xarchive -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@0xarchive -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"0xarchive",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-12-factor-apps",
"priority": 429,
"category": "community",
"type": "skill",
"want": "12-factor-apps",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "Perform 12-Factor App compliance analysis on any codebase. Use when evaluating application architecture, auditing SaaS applications, or reviewing cloud-native applications against the original 12-Factor methodology.",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@12-factor-apps -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@12-factor-apps -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"12-factor-apps",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-13-day-sprint-method",
"priority": 430,
"category": "community",
"type": "skill",
"want": "13-Day Sprint Method",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "Productivity system based on Maya calendar with 13 natural tones for project management and personal development",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@13-day-sprint-method -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@13-day-sprint-method -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"13-day-sprint-method",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-1688-product-search",
"priority": 431,
"category": "community",
"type": "skill",
"want": "1688-product-search",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "1688商品搜索SKILL：提供完整的1688商品搜索能力，包括类目查询、关键词搜索、图片搜索、商品详情、相关性商品、拉取货盘底池等9个核心接口。 支持多语言搜索和商品推荐，使用1688开放平台官方API，统一鉴权，Token全局缓存共享。",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@1688-product-search -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@1688-product-search -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"1688-product-search",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-openclaw-master-skills",
"priority": 432,
"category": "community",
"type": "skill",
"want": "openclaw-master-skills",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "A curated collection of 2109+ best OpenClaw skills — AI tools, productivity, marketing, frontend, mobile, backend, DevOps and more. Weekly updated by MyClaw.ai — Powered by MyClaw.ai",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@openclaw-master-skills -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@openclaw-master-skills -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"openclaw-master-skills",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-12",
"priority": 433,
"category": "community",
"type": "skill",
"want": "self-improvement",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Claude ('No, that's wrong...', 'Actually...'), (3) User requests a capability that doesn't exist, (4) An external API or tool fails, (5) Claude realizes its knowledge is outdated or incorrect, (6) A better approach is discovered for a recurring task. Also review learnings before major tasks.",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@12 -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@12 -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"12",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-leoyeai-openclaw-master-skills-1215656-self-improving-agent-3-0-6",
"priority": 434,
"category": "community",
"type": "skill",
"want": "self-improvement",
"feature": "LeoYeAI/openclaw-master-skills",
"summary": "Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Claude ('No, that's wrong...', 'Actually...'), (3) User requests a capability that doesn't exist, (4) An external API or tool fails, (5) Claude realizes its knowledge is outdated or incorrect, (6) A better approach is discovered for a recurring task. Also review learnings before major tasks.",
"commands": [
"npx skills add LeoYeAI/openclaw-master-skills@1215656-self-improving-agent-3-0-6 -g"
],
"install": "npx skills add LeoYeAI/openclaw-master-skills@1215656-self-improving-agent-3-0-6 -g",
"stars": 2085,
"repoUrl": "https://github.com/LeoYeAI/openclaw-master-skills",
"aliases": [
"1215656-self-improving-agent-3-0-6",
"LeoYeAI",
"skill",
"スキル"
]
},
{
"id": "skill-zakirkun-guardian-cli-guardian-cli",
"priority": 435,
"category": "community",
"type": "skill",
"want": "guardian-cli",
"feature": "zakirkun/guardian-cli",
"summary": "An enterprise-grade, AI-powered penetration testing automation CLI tool. Orchestrates multiple specialized AI agents (Planner, ToolAgent, Analyst, Reporter) backed by 4 AI providers (OpenAI, Claude, Gemini, OpenRouter) and 19 integrated security tools through YAML-defined workflows. Produces professional Markdown, HTML, or JSON security reports with full evidence capture and traceability.",
"commands": [
"npx skills add zakirkun/guardian-cli -g"
],
"install": "npx skills add zakirkun/guardian-cli -g",
"stars": 1737,
"repoUrl": "https://github.com/zakirkun/guardian-cli",
"aliases": [
"guardian-cli",
"zakirkun",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-api-gateway",
"priority": 436,
"category": "community",
"type": "skill",
"want": "api-gateway",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS API Gateway for REST and HTTP API management. Use when creating APIs, configuring integrations, setting up authorization, managing stages, implementing rate limiting, or troubleshooting API issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@api-gateway -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@api-gateway -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"api-gateway",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-bedrock",
"priority": 437,
"category": "community",
"type": "skill",
"want": "bedrock",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS Bedrock foundation models for generative AI. Use when invoking foundation models, building AI applications, creating embeddings, configuring model access, or implementing RAG patterns.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@bedrock -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@bedrock -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"bedrock",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-cloudformation",
"priority": 438,
"category": "community",
"type": "skill",
"want": "cloudformation",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS CloudFormation infrastructure as code for stack management. Use when writing templates, deploying stacks, managing drift, troubleshooting deployments, or organizing infrastructure with nested stacks.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cloudformation -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cloudformation -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cloudformation",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-cloudwatch",
"priority": 439,
"category": "community",
"type": "skill",
"want": "cloudwatch",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS CloudWatch monitoring for logs, metrics, alarms, and dashboards. Use when setting up monitoring, creating alarms, querying logs with Insights, configuring metric filters, building dashboards, or troubleshooting application issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cloudwatch -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cloudwatch -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cloudwatch",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-cognito",
"priority": 440,
"category": "community",
"type": "skill",
"want": "cognito",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS Cognito user authentication and authorization service. Use when setting up user pools, configuring identity pools, implementing OAuth flows, managing user attributes, or integrating with social identity providers.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@cognito -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@cognito -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"cognito",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-dynamodb",
"priority": 441,
"category": "community",
"type": "skill",
"want": "dynamodb",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS DynamoDB NoSQL database for scalable data storage. Use when designing table schemas, writing queries, configuring indexes, managing capacity, implementing single-table design, or troubleshooting performance issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@dynamodb -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@dynamodb -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"dynamodb",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-ec2",
"priority": 442,
"category": "community",
"type": "skill",
"want": "ec2",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS EC2 virtual machine management — instances, security groups, key pairs, AMIs, EBS volumes, Auto Scaling Groups, Spot Instances, Session Manager, placement groups, and instance lifecycle automation.\nTrigger on ANY of these, even when EC2 isn't named explicitly: - Launching or provisioning: \"spin up a server\", \"create a VM\", \"new instance\", \"run-instances\", mention of instance types (t3, m5, c5, r6, g5, p4d, t4g, c7g, etc.) - SSH / connectivity problems: \"connection refused\", \"connection timed out\", \"permission denied publickey\", \"can't connect to my instance\", \"SSH not working\" - Instance management: resize, stop, start, terminate, reboot, change instance type - Cost optimization: stop dev instances overnight, save money on EC2, spot vs on-demand, reserved instances - Auto Scaling: ASG, launch template, mixed instances policy, scale to zero, scheduled scaling - Spot Instances: spot fleet, spot interruption, capacity-optimized, price-capacity-optimized - AMIs and backups: create image, custom AMI, EBS snapshot, DLM lifecycle policy, copy AMI - Monitoring: EC2 CPU utilization, CloudWatch metrics for instance, instance status checks, console output - Access methods: Session Manager, EC2 Instance Connect, bastion host, port forwarding - Security: IMDSv2, instance metadata, IAM role on instance, security group rules - User data and bootstrap scripts, cloud-init",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@ec2 -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@ec2 -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"ec2",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-itsmostafa-aws-agent-skills-ecs",
"priority": 443,
"category": "community",
"type": "skill",
"want": "ecs",
"feature": "itsmostafa/aws-agent-skills",
"summary": "AWS ECS container orchestration for running Docker containers. Use when deploying containerized applications, configuring task definitions, setting up services, managing clusters, or troubleshooting container issues.",
"commands": [
"npx skills add itsmostafa/aws-agent-skills@ecs -g"
],
"install": "npx skills add itsmostafa/aws-agent-skills@ecs -g",
"stars": 1136,
"repoUrl": "https://github.com/itsmostafa/aws-agent-skills",
"aliases": [
"ecs",
"itsmostafa",
"skill",
"スキル"
]
},
{
"id": "skill-alchaincyf-x-mentor-skill-x-mentor-skill",
"priority": 444,
"category": "community",
"type": "skill",
"want": "x-mastery-mentor",
"feature": "alchaincyf/x-mentor-skill",
"summary": "$10K/hr级X/Twitter运营导师。基于Nicolas Cole、Dickie Bush、Sahil Bloom、Justin Welsh、\nDan Koe、Alex Hormozi六位顶级创作者的方法论 + X开源算法深度分析 + AI/科技赛道专精策略，\n提炼6个核心心智模型、10条决策启发式、完整的选题-写作-增长操作手册。\n通用方法论为底座，AI/科技赛道为专精。\n当用户提到「X运营」「推特」「Twitter」「怎么写推文」「怎么涨粉」「X策略」「推特选题」「tweet」「thread」「X算法」时使用。\n即使用户只是说「这条推文怎么写」「帮我想个X内容」「推特增长」「发推」「write a tweet」「X account」「grow on X」也应触发。",
"commands": [
"npx skills add alchaincyf/x-mentor-skill -g"
],
"install": "npx skills add alchaincyf/x-mentor-skill -g",
"stars": 1036,
"repoUrl": "https://github.com/alchaincyf/x-mentor-skill",
"aliases": [
"x-mentor-skill",
"alchaincyf",
"skill",
"スキル"
]
},
{
"id": "skill-raphaelsalaja-userinterface-wiki-skills",
"priority": 445,
"category": "community",
"type": "skill",
"want": "userinterface-wiki",
"feature": "raphaelsalaja/userinterface-wiki",
"summary": "UI/UX best practices for web interfaces. Use when reviewing animations, CSS, audio, typography, UX patterns, prefetching, or icon implementations. Covers 11 categories from animation principles to typography. Outputs file:line findings.",
"commands": [
"npx skills add raphaelsalaja/userinterface-wiki -g"
],
"install": "npx skills add raphaelsalaja/userinterface-wiki -g",
"stars": 834,
"repoUrl": "https://github.com/raphaelsalaja/userinterface-wiki",
"aliases": [
"skills",
"raphaelsalaja",
"skill",
"スキル"
]
},
{
"id": "skill-tripleyak-skillforge-skillforge",
"priority": 446,
"category": "community",
"type": "skill",
"want": "skillforge",
"feature": "tripleyak/SkillForge",
"summary": "Intelligent skill router, proactive advisor, and creator. Analyzes ANY input to recommend existing skills, improve them, or create new ones. Adds proactive Context Skill Advisor suggestions from session, project, and personal context using user-controlled Proactivity Levels.",
"commands": [
"npx skills add tripleyak/SkillForge -g"
],
"install": "npx skills add tripleyak/SkillForge -g",
"stars": 790,
"repoUrl": "https://github.com/tripleyak/SkillForge",
"aliases": [
"SkillForge",
"tripleyak",
"skill",
"スキル"
]
},
{
"id": "skill-feicaiclub-video-spec-builder-video-spec-builder",
"priority": 447,
"category": "community",
"type": "skill",
"want": "video-spec-builder",
"feature": "feicaiclub/video-spec-builder",
"summary": "当用户说想做一个视频、宣传片、产品演示、动画短片、抖音/YouTube 内容，或者说要改分镜、调节奏、换镜头、调字幕、加配音、改转场时使用。通过苏格拉底式追问收集视频需求，主动激发渲染层的全部能力（TTS / 字幕 / 3D / shader / 音频反应等），输出标准化的 video-spec.md 用于渲染。",
"commands": [
"npx skills add feicaiclub/video-spec-builder -g"
],
"install": "npx skills add feicaiclub/video-spec-builder -g",
"stars": 754,
"repoUrl": "https://github.com/feicaiclub/video-spec-builder",
"aliases": [
"video-spec-builder",
"feicaiclub",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta",
"priority": 448,
"category": "community",
"type": "skill",
"want": "neta",
"feature": "talesofai/neta-skills",
"summary": "Neta capability index and routing skill - help choose the appropriate Neta-related skill (neta-space / neta-creative / neta-adventure / neta-community / neta-suggest). Use this skill when you need to understand Neta's overall capabilities, decide which skill fits the current task, or migrate from older documentation that referenced the monolithic neta skill.",
"commands": [
"npx skills add talesofai/neta-skills@neta -g"
],
"install": "npx skills add talesofai/neta-skills@neta -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-adventure",
"priority": 449,
"category": "community",
"type": "skill",
"want": "neta-adventure",
"feature": "talesofai/neta-skills",
"summary": "Neta Adventure Campaign skill - Create and play AI-driven interactive story adventures. Adventure campaigns provide story-crafting and story-telling modes where agents act as DM and roleplay characters following plot, rules, and special guidelines.",
"commands": [
"npx skills add talesofai/neta-skills@neta-adventure -g"
],
"install": "npx skills add talesofai/neta-skills@neta-adventure -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-adventure",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-character",
"priority": 450,
"category": "community",
"type": "skill",
"want": "neta-character",
"feature": "talesofai/neta-skills",
"summary": "Neta Character Forging Skill - Guides users through creating or updating anime/cultural IP/original character (OC) VTokens (Virtual Tokens, TCP). Includes visual preview, character documentation, backstory confirmation, and complete creative workflow. Use this skill when users want to create new characters, modify existing ones, or begin character design.",
"commands": [
"npx skills add talesofai/neta-skills@neta-character -g"
],
"install": "npx skills add talesofai/neta-skills@neta-character -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-character",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-community",
"priority": 451,
"category": "community",
"type": "skill",
"want": "neta-community",
"feature": "talesofai/neta-skills",
"summary": "Neta API community skill — browse interactive feeds, view collection details, like and interact with content, and browse content by tags and characters in a community context. Use this skill when the user wants to “see what people are making”, “scroll the feed”, or “interact with works”. Do not use it for taxonomy/keyword‑level research (handled by neta-suggest) or for generating images/videos/songs (handled by neta-creative).",
"commands": [
"npx skills add talesofai/neta-skills@neta-community -g"
],
"install": "npx skills add talesofai/neta-skills@neta-community -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-community",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-creative",
"priority": 452,
"category": "community",
"type": "skill",
"want": "neta-creative",
"feature": "talesofai/neta-skills",
"summary": "Neta API creative skill — generate images, videos, songs, and MVs, and deconstruct creative ideas from existing works. Use this skill when the user wants to create or edit images/videos/songs/MVs, or create based on character settings and existing works. Do not use it for feed browsing or tag/category research (those are handled by neta-community and neta-suggest).",
"commands": [
"npx skills add talesofai/neta-skills@neta-creative -g"
],
"install": "npx skills add talesofai/neta-skills@neta-creative -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-creative",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-elementum",
"priority": 453,
"category": "community",
"type": "skill",
"want": "neta-elementum",
"feature": "talesofai/neta-skills",
"summary": "Neta Elementum Alchemy Skill - Guides users through creating or updating style element (Elementum) VTokens (Virtual Tokens, TCP). Elementum encapsulates a visual concept (scene, prop, clothing, weapon, pose, atmosphere, meme, etc.) and can be referenced in make_image via /ElementName after creation. Use this skill when users want to create new Elementa, encapsulate visual styles or concepts, or modify existing Elementa.",
"commands": [
"npx skills add talesofai/neta-skills@neta-elementum -g"
],
"install": "npx skills add talesofai/neta-skills@neta-elementum -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-elementum",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-space",
"priority": 454,
"category": "community",
"type": "skill",
"want": "neta-space",
"feature": "talesofai/neta-skills",
"summary": "Neta API space and world‑view browsing skill — browse worldbuilding, sub‑spaces, and playable content by space/hashtag. Use this skill when the user talks about worlds/spaces/universes/scenes, or wants to browse characters and gameplay based on space and activity structure. Do not use it for concrete media creation (handled by neta-creative).",
"commands": [
"npx skills add talesofai/neta-skills@neta-space -g"
],
"install": "npx skills add talesofai/neta-skills@neta-space -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-space",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-talesofai-neta-skills-neta-suggest",
"priority": 455,
"category": "community",
"type": "skill",
"want": "neta-suggest",
"feature": "talesofai/neta-skills",
"summary": "Neta API research and recommendation skill — provide keyword/tag/category suggestions, validate taxonomy paths, and power multi‑mode content feeds, supporting progressive exploration from broad to precise. Use this skill when the user has no clear goal, wants topic/idea suggestions, or needs systematic content filtering by keywords/categories. It does not directly generate media (handled by neta-creative); community interactions are handled by neta-community.",
"commands": [
"npx skills add talesofai/neta-skills@neta-suggest -g"
],
"install": "npx skills add talesofai/neta-skills@neta-suggest -g",
"stars": 737,
"repoUrl": "https://github.com/talesofai/neta-skills",
"aliases": [
"neta-suggest",
"talesofai",
"skill",
"スキル"
]
},
{
"id": "skill-denissergeevitch-repo-task-proof-loop-repo-task-proof-loop",
"priority": 456,
"category": "community",
"type": "skill",
"want": "repo-task-proof-loop",
"feature": "DenisSergeevitch/repo-task-proof-loop",
"summary": "Repo-local workflow skill for large coding tasks. Initializes .agent/tasks/TASK_ID artifacts, installs project-scoped Codex and Claude subagents, updates AGENTS.md plus the repo's Claude guide file with the workflow, and runs a spec-freeze → build → evidence → verify → fix loop with fresh-session verification.",
"commands": [
"npx skills add DenisSergeevitch/repo-task-proof-loop -g"
],
"install": "npx skills add DenisSergeevitch/repo-task-proof-loop -g",
"stars": 720,
"repoUrl": "https://github.com/DenisSergeevitch/repo-task-proof-loop",
"aliases": [
"repo-task-proof-loop",
"DenisSergeevitch",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-ai-automation-workflows",
"priority": 457,
"category": "community",
"type": "skill",
"want": "ai-automation-workflows",
"feature": "inference-sh/skills",
"summary": "Build automated AI workflows combining multiple models and services. Patterns: batch processing, scheduled tasks, event-driven pipelines, agent loops. Tools: inference.sh CLI, bash scripting, Python SDK, webhook integration. Use for: content automation, data processing, monitoring, scheduled generation. Triggers: ai automation, workflow automation, batch processing, ai pipeline, automated content, scheduled ai, ai cron, ai batch job, automated generation, ai workflow, content at scale, automation script, ai orchestration",
"commands": [
"npx skills add inference-sh/skills@ai-automation-workflows -g"
],
"install": "npx skills add inference-sh/skills@ai-automation-workflows -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"ai-automation-workflows",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-ai-content-pipeline",
"priority": 458,
"category": "community",
"type": "skill",
"want": "ai-content-pipeline",
"feature": "inference-sh/skills",
"summary": "Build multi-step AI content creation pipelines combining image, video, audio, and text. Workflow examples: generate image -> animate -> add voiceover -> merge with music. Tools: FLUX, Veo, Kokoro TTS, OmniHuman, media merger, upscaling. Use for: YouTube videos, social media content, marketing materials, automated content. Triggers: content pipeline, ai workflow, content creation, multi-step ai, content automation, ai video workflow, generate and edit, ai content factory, automated content creation, ai production pipeline, media pipeline, content at scale",
"commands": [
"npx skills add inference-sh/skills@ai-content-pipeline -g"
],
"install": "npx skills add inference-sh/skills@ai-content-pipeline -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"ai-content-pipeline",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-ai-podcast",
"priority": 459,
"category": "community",
"type": "skill",
"want": "ai-podcast",
"feature": "inference-sh/skills",
"summary": "Generate multi-person talking head podcast videos from scratch using AI — character creation, TTS, avatar animation, and video stitching. Use when the user wants to create a podcast, talking head video, or multi-speaker conversation video.",
"commands": [
"npx skills add inference-sh/skills@ai-podcast -g"
],
"install": "npx skills add inference-sh/skills@ai-podcast -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"ai-podcast",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-ai-podcast-creation",
"priority": 460,
"category": "community",
"type": "skill",
"want": "ai-podcast-creation",
"feature": "inference-sh/skills",
"summary": "Create AI-powered podcasts with text-to-speech, music, and audio editing. Tools: Kokoro TTS, DIA TTS, Chatterbox, AI music generation, media merger. Capabilities: multi-voice conversations, background music, intro/outro, full episodes. Use for: podcast production, audiobooks, voice content, audio newsletters. Triggers: podcast, ai podcast, text to speech podcast, audio content, voice over, ai audiobook, multi voice, conversation ai, notebooklm alternative, audio generation, podcast automation, ai narrator, voice content, audio newsletter, podcast maker",
"commands": [
"npx skills add inference-sh/skills@ai-podcast-creation -g"
],
"install": "npx skills add inference-sh/skills@ai-podcast-creation -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"ai-podcast-creation",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-app-store-screenshots",
"priority": 461,
"category": "community",
"type": "skill",
"want": "app-store-screenshots",
"feature": "inference-sh/skills",
"summary": "App Store and Google Play screenshot creation with exact platform specs. Covers iOS/Android dimensions, gallery ordering, device mockups, and preview videos. Use for: app store optimization, ASO, app screenshots, app preview, play store listing. Triggers: app store screenshots, aso, app store optimization, play store screenshots, app preview, app listing, ios screenshots, android screenshots, app store images, app mockup, device mockup, app gallery, store listing",
"commands": [
"npx skills add inference-sh/skills@app-store-screenshots -g"
],
"install": "npx skills add inference-sh/skills@app-store-screenshots -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"app-store-screenshots",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-book-cover-design",
"priority": 462,
"category": "community",
"type": "skill",
"want": "book-cover-design",
"feature": "inference-sh/skills",
"summary": "Book cover design with genre-specific conventions, typography rules, and AI image generation. Covers fiction and non-fiction genres, sizing, thumbnail testing, and iteration workflows. Use for: self-publishing, ebook covers, print covers, audiobook covers, cover mockups. Triggers: book cover, cover design, ebook cover, book art, novel cover, self publishing cover, kindle cover, audiobook cover, book jacket, cover illustration, fiction cover, nonfiction cover",
"commands": [
"npx skills add inference-sh/skills@book-cover-design -g"
],
"install": "npx skills add inference-sh/skills@book-cover-design -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"book-cover-design",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-character-design-sheet",
"priority": 463,
"category": "community",
"type": "skill",
"want": "character-design-sheet",
"feature": "inference-sh/skills",
"summary": "Character consistency across AI-generated images with reference sheets and LoRA techniques. Covers turnaround views, expression sheets, color palettes, and style consistency tricks. Use for: character design, game art, illustration, animation, comics, visual novels. Triggers: character design, character sheet, character consistency, character reference, turnaround sheet, expression sheet, character art, consistent character, character concept, reference sheet, character creation, oc design, character bible",
"commands": [
"npx skills add inference-sh/skills@character-design-sheet -g"
],
"install": "npx skills add inference-sh/skills@character-design-sheet -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"character-design-sheet",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-inference-sh-skills-content-repurposing",
"priority": 464,
"category": "community",
"type": "skill",
"want": "content-repurposing",
"feature": "inference-sh/skills",
"summary": "Content atomization — turn one piece of content into many formats. Covers blog-to-thread, blog-to-carousel, podcast-to-blog, video-to-quotes, and more. Use for: content marketing, social media, multi-platform distribution, content strategy. Triggers: content repurposing, repurpose content, content atomization, content recycling, one to many content, multi platform content, cross post, adapt content, reformat content, blog to thread, blog to video, podcast to blog, content multiplication",
"commands": [
"npx skills add inference-sh/skills@content-repurposing -g"
],
"install": "npx skills add inference-sh/skills@content-repurposing -g",
"stars": 594,
"repoUrl": "https://github.com/inference-sh/skills",
"aliases": [
"content-repurposing",
"inference-sh",
"skill",
"スキル"
]
},
{
"id": "skill-op7418-document-illustrator-skill-document-illustrator-skill",
"priority": 465,
"category": "community",
"type": "skill",
"want": "document-illustrator",
"feature": "op7418/Document-illustrator-skill",
"summary": "基于文档内容自动生成配图。AI 智能分析文档结构，归纳核心要点， 为每个主题生成符合特定风格的配图。支持封面图生成和自定义图片比例。 使用场景：当用户需要为文档、文章、笔记生成配图时。 关键词：配图、插图、illustration、generate images、document images",
"commands": [
"npx skills add op7418/Document-illustrator-skill -g"
],
"install": "npx skills add op7418/Document-illustrator-skill -g",
"stars": 568,
"repoUrl": "https://github.com/op7418/Document-illustrator-skill",
"aliases": [
"Document-illustrator-skill",
"op7418",
"skill",
"スキル"
]
},
{
"id": "skill-ksimback-tech-debt-skill-tech-debt-skill",
"priority": 466,
"category": "community",
"type": "skill",
"want": "tech-debt-audit",
"feature": "ksimback/tech-debt-skill",
"summary": "Thorough, user-invoked tech debt and architecture audit of the current codebase. Produces TECH_DEBT_AUDIT.md with file-cited findings, severity, effort estimates, and a required \"looks bad but is actually fine\" section. Use when the user asks for a debt audit, codebase health check, architecture review, or code quality assessment of an entire repo. Does not auto-invoke.",
"commands": [
"npx skills add ksimback/tech-debt-skill -g"
],
"install": "npx skills add ksimback/tech-debt-skill -g",
"stars": 529,
"repoUrl": "https://github.com/ksimback/tech-debt-skill",
"aliases": [
"tech-debt-skill",
"ksimback",
"skill",
"スキル"
]
},
{
"id": "skill-browser-use-browser-harness-js-browser-harness-js",
"priority": 467,
"category": "community",
"type": "skill",
"want": "cdp",
"feature": "browser-use/browser-harness-js",
"summary": "Drive Chrome via the DevTools Protocol from JavaScript. Run JS snippets through the `browser-harness-js` CLI — it auto-spawns a long-lived bun HTTP server holding a fully-typed CDP `Session`, and every call (`browser-harness-js 'await session.Page.navigate(...)'`) executes against the same persistent connection. Session, active target, and globals survive across calls. Use when the user wants to automate, script, or inspect a Chrome browser via CDP — single tab or multi-tab, attach to existing Chrome or to a new one launched with --remote-debugging-port.",
"commands": [
"npx skills add browser-use/browser-harness-js -g"
],
"install": "npx skills add browser-use/browser-harness-js -g",
"stars": 471,
"repoUrl": "https://github.com/browser-use/browser-harness-js",
"aliases": [
"browser-harness-js",
"browser-use",
"skill",
"スキル"
]
},
{
"id": "skill-w3c-web-performance-skills",
"priority": 468,
"category": "community",
"type": "skill",
"want": "bikeshed-conversion",
"feature": "w3c/web-performance",
"summary": "Guidelines for converting W3C specs to Bikeshed format. Covers anchor ID preservation, dfn handling, and common pitfalls. Read this before any Bikeshed conversion or migration work.",
"commands": [
"npx skills add w3c/web-performance@skills -g"
],
"install": "npx skills add w3c/web-performance@skills -g",
"stars": 431,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"skills",
"w3c",
"skill",
"スキル"
]
},
{
"id": "skill-w3c-web-performance-bikeshed-conversion",
"priority": 469,
"category": "community",
"type": "skill",
"want": "bikeshed-conversion",
"feature": "w3c/web-performance",
"summary": "Guidelines for converting W3C specs to Bikeshed format. Covers anchor ID preservation, dfn handling, and common pitfalls. Read this before any Bikeshed conversion or migration work.",
"commands": [
"npx skills add w3c/web-performance@bikeshed-conversion -g"
],
"install": "npx skills add w3c/web-performance@bikeshed-conversion -g",
"stars": 431,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"bikeshed-conversion",
"w3c",
"skill",
"スキル"
]
},
{
"id": "skill-w3c-web-performance-publish-wg-minutes",
"priority": 470,
"category": "community",
"type": "skill",
"want": "publish-wg-minutes",
"feature": "w3c/web-performance",
"summary": "Process and publish WebPerfWG meeting minutes from Google Docs zip exports. Read this before handling any WebPerfWG meeting minute zip files.",
"commands": [
"npx skills add w3c/web-performance@publish-wg-minutes -g"
],
"install": "npx skills add w3c/web-performance@publish-wg-minutes -g",
"stars": 431,
"repoUrl": "https://github.com/w3c/web-performance",
"aliases": [
"publish-wg-minutes",
"w3c",
"skill",
"スキル"
]
},
{
"id": "skill-frankois944-spm4kmp-docs",
"priority": 471,
"category": "community",
"type": "skill",
"want": "docs",
"feature": "frankois944/spm4Kmp",
"summary": "SPM For KMP: Use Apple Swift packages and Swift-import in a KMP project",
"commands": [
"npx skills add frankois944/spm4Kmp -g"
],
"install": "npx skills add frankois944/spm4Kmp -g",
"stars": 391,
"repoUrl": "https://github.com/frankois944/spm4Kmp",
"aliases": [
"docs",
"frankois944",
"skill",
"スキル"
]
},
{
"id": "skill-eric-yibo-shen-zhangxuefeng-skillset-zhangxuefeng-skillset",
"priority": 472,
"category": "community",
"type": "skill",
"want": "gaokao-mentor",
"feature": "Eric-Yibo-Shen/zhangxuefeng-skillset",
"summary": "张雪峰高考志愿填报顾问 AI。用张雪峰的说话方式和思维逻辑，替普通家庭消除志愿填报信息差。\n核心框架：城市>学校>专业；就业倒推法；四步决策流程（可行集→目标倒推→AI时代校正→冲稳保三方案）。\n涵盖：专业选择、院校推荐、就业前景、新高考选科、大学规划、AI时代风险校正。\n安装：npx skills add eric-yibo-shen/zhangxuefeng",
"commands": [
"npx skills add Eric-Yibo-Shen/zhangxuefeng-skillset -g"
],
"install": "npx skills add Eric-Yibo-Shen/zhangxuefeng-skillset -g",
"stars": 379,
"repoUrl": "https://github.com/Eric-Yibo-Shen/zhangxuefeng-skillset",
"aliases": [
"zhangxuefeng-skillset",
"Eric-Yibo-Shen",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-affiliate-marketing-strategy",
"priority": 473,
"category": "community",
"type": "skill",
"want": "affiliate-marketing-strategy",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "E-commerce skills for AI agents — product research, marketing automation, supply chain optimization, and business analytics for online sellers across Amazon, Shopify, Etsy, TikTok Shop, and all platforms.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@affiliate-marketing-strategy -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@affiliate-marketing-strategy -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"affiliate-marketing-strategy",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-api-monitoring",
"priority": 474,
"category": "community",
"type": "skill",
"want": "api-monitoring",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "E-commerce skills for AI agents — product research, marketing automation, supply chain optimization, and business analytics for online sellers across Amazon, Shopify, Etsy, TikTok Shop, and all platforms.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@api-monitoring -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@api-monitoring -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"api-monitoring",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-monitoring",
"priority": 475,
"category": "community",
"type": "skill",
"want": "brand-monitoring",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Brand monitoring tool for tracking mentions across social media platforms. Monitor Reddit, Google News, YouTube, and DuckDuckGo for brand mentions. Includes sentiment analysis, trend tracking, crisis detection, and competitor comparison. No API key required for basic monitoring.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-monitoring -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-monitoring -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-monitoring",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-amazon",
"priority": 476,
"category": "community",
"type": "skill",
"want": "brand-protection-amazon",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Amazon brand protection toolkit. Detect hijackers, counterfeits, and unauthorized sellers. Includes MAP violation monitoring, trademark abuse detection, complaint templates for Brand Registry, and test buy evidence collection guides. No API key required.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-amazon -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-amazon -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-amazon",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-ebay",
"priority": 477,
"category": "community",
"type": "skill",
"want": "brand-protection-ebay",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "eBay brand protection toolkit. Detect unauthorized sellers, counterfeits, and VeRO violations. Includes price monitoring, trademark abuse detection, VeRO complaint templates, and enforcement guides. No API key required.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-ebay -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-ebay -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-ebay",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-shopify",
"priority": 478,
"category": "community",
"type": "skill",
"want": "brand-protection-shopify",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Shopify/DTC brand protection toolkit. Detect counterfeit stores, unauthorized resellers, and trademark violations. Includes DMCA takedown templates, domain monitoring, and social media infringement detection. No API key required.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-shopify -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-shopify -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-shopify",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-tiktok",
"priority": 479,
"category": "community",
"type": "skill",
"want": "brand-protection-tiktok",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "TikTok Shop brand protection toolkit. Detect unauthorized sellers, counterfeit products, and affiliate abuse. Includes TikTok IP Protection reporting, influencer misuse detection, and complaint templates. No API key required.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-tiktok -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-tiktok -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-tiktok",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-nexscope-ai-ecommerce-skills-brand-protection-walmart",
"priority": 480,
"category": "community",
"type": "skill",
"want": "brand-protection-walmart",
"feature": "nexscope-ai/eCommerce-Skills",
"summary": "Walmart brand protection toolkit. Detect unauthorized sellers, counterfeits, and MAP violations. Includes Walmart Brand Portal reporting, WFS seller monitoring, and complaint templates. No API key required.",
"commands": [
"npx skills add nexscope-ai/eCommerce-Skills@brand-protection-walmart -g"
],
"install": "npx skills add nexscope-ai/eCommerce-Skills@brand-protection-walmart -g",
"stars": 339,
"repoUrl": "https://github.com/nexscope-ai/eCommerce-Skills",
"aliases": [
"brand-protection-walmart",
"nexscope-ai",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-0codekit",
"priority": 481,
"category": "community",
"type": "skill",
"want": "0codekit",
"feature": "membranedev/application-skills",
"summary": "0codekit integration. Manage Workspaces. Use when the user wants to interact with 0codekit data.",
"commands": [
"npx skills add membranedev/application-skills@0codekit -g"
],
"install": "npx skills add membranedev/application-skills@0codekit -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"0codekit",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-10duke",
"priority": 482,
"category": "community",
"type": "skill",
"want": "10duke",
"feature": "membranedev/application-skills",
"summary": "10Duke integration. Manage data, records, and automate workflows. Use when the user wants to interact with 10Duke data.",
"commands": [
"npx skills add membranedev/application-skills@10duke -g"
],
"install": "npx skills add membranedev/application-skills@10duke -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"10duke",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-10to8",
"priority": 483,
"category": "community",
"type": "skill",
"want": "10to8",
"feature": "membranedev/application-skills",
"summary": "10to8 integration. Manage data, records, and automate workflows. Use when the user wants to interact with 10to8 data.",
"commands": [
"npx skills add membranedev/application-skills@10to8 -g"
],
"install": "npx skills add membranedev/application-skills@10to8 -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"10to8",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-123formbuilder",
"priority": 484,
"category": "community",
"type": "skill",
"want": "123formbuilder",
"feature": "membranedev/application-skills",
"summary": "123FormBuilder integration. Manage data, records, and automate workflows. Use when the user wants to interact with 123FormBuilder data.",
"commands": [
"npx skills add membranedev/application-skills@123formbuilder -g"
],
"install": "npx skills add membranedev/application-skills@123formbuilder -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"123formbuilder",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-15five",
"priority": 485,
"category": "community",
"type": "skill",
"want": "15five",
"feature": "membranedev/application-skills",
"summary": "15Five integration. Manage Persons, Organizations. Use when the user wants to interact with 15Five data.",
"commands": [
"npx skills add membranedev/application-skills@15five -g"
],
"install": "npx skills add membranedev/application-skills@15five -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"15five",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-1c",
"priority": 486,
"category": "community",
"type": "skill",
"want": "1c",
"feature": "membranedev/application-skills",
"summary": "1C-Bitrix integration. Manage data, records, and automate workflows. Use when the user wants to interact with 1C-Bitrix data.",
"commands": [
"npx skills add membranedev/application-skills@1c -g"
],
"install": "npx skills add membranedev/application-skills@1c -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"1c",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-1crm",
"priority": 487,
"category": "community",
"type": "skill",
"want": "1crm",
"feature": "membranedev/application-skills",
"summary": "1CRM integration. Manage data, records, and automate workflows. Use when the user wants to interact with 1CRM data.",
"commands": [
"npx skills add membranedev/application-skills@1crm -g"
],
"install": "npx skills add membranedev/application-skills@1crm -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"1crm",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-membranedev-application-skills-1forge",
"priority": 488,
"category": "community",
"type": "skill",
"want": "1forge",
"feature": "membranedev/application-skills",
"summary": "1Forge integration. Manage data, records, and automate workflows. Use when the user wants to interact with 1Forge data.",
"commands": [
"npx skills add membranedev/application-skills@1forge -g"
],
"install": "npx skills add membranedev/application-skills@1forge -g",
"stars": 242,
"repoUrl": "https://github.com/membranedev/application-skills",
"aliases": [
"1forge",
"membranedev",
"skill",
"スキル"
]
},
{
"id": "skill-second-state-qwen3_asr_rs-skills",
"priority": 489,
"category": "community",
"type": "skill",
"want": "skills",
"feature": "second-state/qwen3_asr_rs",
"summary": "Rust implementation of Qwen3-ASR automatic speech recognition",
"commands": [
"npx skills add second-state/qwen3_asr_rs -g"
],
"install": "npx skills add second-state/qwen3_asr_rs -g",
"stars": 242,
"repoUrl": "https://github.com/second-state/qwen3_asr_rs",
"aliases": [
"skills",
"second-state",
"skill",
"スキル"
]
},
{
"id": "skill-second-state-qwen3_tts_rs-skills",
"priority": 490,
"category": "community",
"type": "skill",
"want": "audio-tts",
"feature": "second-state/qwen3_tts_rs",
"summary": "Generate speech audio from text using Qwen3 TTS, or clone a voice from reference audio. Triggered when the user wants to convert text to speech, generate audio, read text aloud, or clone/mimic a voice. Supports multiple speakers, English and Chinese, and emotion/style control.",
"commands": [
"npx skills add second-state/qwen3_tts_rs -g"
],
"install": "npx skills add second-state/qwen3_tts_rs -g",
"stars": 226,
"repoUrl": "https://github.com/second-state/qwen3_tts_rs",
"aliases": [
"skills",
"second-state",
"skill",
"スキル"
]
},
{
"id": "skill-y49-tlive-tlive",
"priority": 491,
"category": "community",
"type": "skill",
"want": "tlive",
"feature": "y49/tlive",
"summary": "IM bridge for AI coding tools — chat with Claude Code / Codex from\nTelegram, Discord, or Feishu. Approve permissions, get streaming responses,\nmanage sessions from your phone.\nUse for: starting IM bridge, configuring IM platforms, checking status,\ndiagnosing issues.\nTrigger phrases: \"tlive\", \"IM bridge\", \"消息桥接\", \"手机交互\", \"启动桥接\",\n\"连接飞书\", \"连接Telegram\", \"诊断\", \"查看日志\", \"配置\".\nDo NOT use for: building bots, webhook integrations, or general coding tasks.",
"commands": [
"npx skills add y49/tlive -g"
],
"install": "npx skills add y49/tlive -g",
"stars": 204,
"repoUrl": "https://github.com/y49/tlive",
"aliases": [
"tlive",
"y49",
"skill",
"スキル"
]
},
{
"id": "skill-dageno-agents-geo-content-writer-geo-content-writer",
"priority": 492,
"category": "community",
"type": "skill",
"want": "content-writer",
"feature": "dageno-agents/geo-content-writer",
"summary": "Use when the user wants to turn [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) GEO opportunities into a real-fanout backlog and then write one publish-ready article from one selected fanout item. Produces a backlog-row-first GEO workflow with fanout extraction, editorial brief generation, draft and review contracts, and publish-ready article output. For broad SEO article generation from keywords without [Dageno](https://dageno.ai/?utm_source=github&utm_medium=social&utm_campaign=official) opportunity data, see a keyword-first SEO content workflow instead.",
"commands": [
"npx skills add dageno-agents/geo-content-writer -g"
],
"install": "npx skills add dageno-agents/geo-content-writer -g",
"stars": 198,
"repoUrl": "https://github.com/dageno-agents/geo-content-writer",
"aliases": [
"geo-content-writer",
"dageno-agents",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-accessibility",
"priority": 493,
"category": "community",
"type": "skill",
"want": "accessibility",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when building or reviewing UI components for keyboard and screen reader compatibility, adding ARIA to custom widgets, auditing a page for WCAG AA conformance, or preparing for a formal accessibility review.",
"commands": [
"npx skills add kid-sid/claude-spellbook@accessibility -g"
],
"install": "npx skills add kid-sid/claude-spellbook@accessibility -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"accessibility",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-agentex",
"priority": 494,
"category": "community",
"type": "skill",
"want": "agentex",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when building, wiring, or debugging an Agentex agent — choosing agent type, configuring acp.py and manifest.yaml, using adk.messages or adk.state, or resolving Windows-specific setup issues.",
"commands": [
"npx skills add kid-sid/claude-spellbook@agentex -g"
],
"install": "npx skills add kid-sid/claude-spellbook@agentex -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"agentex",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-ai-engineer",
"priority": 495,
"category": "community",
"type": "skill",
"want": "ai-engineer",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when building production LLM applications — designing RAG pipelines, choosing vector databases, implementing agent orchestration, optimizing cost, or adding AI safety guardrails.",
"commands": [
"npx skills add kid-sid/claude-spellbook@ai-engineer -g"
],
"install": "npx skills add kid-sid/claude-spellbook@ai-engineer -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"ai-engineer",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-angular",
"priority": 496,
"category": "community",
"type": "skill",
"want": "angular",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when building or refactoring Angular applications — choosing between signals, RxJS, and NgRx for state, configuring routing with guards and lazy loading, optimizing change detection, or writing TestBed component tests.",
"commands": [
"npx skills add kid-sid/claude-spellbook@angular -g"
],
"install": "npx skills add kid-sid/claude-spellbook@angular -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"angular",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-api-design",
"priority": 497,
"category": "community",
"type": "skill",
"want": "api-design",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when designing new REST endpoints, reviewing an existing API contract, adding pagination or filtering, planning a versioning strategy, or building a public or partner-facing API.",
"commands": [
"npx skills add kid-sid/claude-spellbook@api-design -g"
],
"install": "npx skills add kid-sid/claude-spellbook@api-design -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"api-design",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-auth",
"priority": 498,
"category": "community",
"type": "skill",
"want": "auth",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when implementing login flows, issuing or validating JWTs, setting up OAuth2/OIDC with a provider, designing role-based or attribute-based access control, securing API endpoints, or handling token refresh and revocation.",
"commands": [
"npx skills add kid-sid/claude-spellbook@auth -g"
],
"install": "npx skills add kid-sid/claude-spellbook@auth -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"auth",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-aws",
"priority": 499,
"category": "community",
"type": "skill",
"want": "aws",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when writing boto3 or AWS SDK v3 code — configuring IAM auth, reading/writing S3, designing DynamoDB access patterns, writing Lambda handlers, processing SQS batches, or troubleshooting credential and throttling errors.",
"commands": [
"npx skills add kid-sid/claude-spellbook@aws -g"
],
"install": "npx skills add kid-sid/claude-spellbook@aws -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"aws",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-kid-sid-claude-spellbook-azure-service-bus",
"priority": 500,
"category": "community",
"type": "skill",
"want": "azure-service-bus",
"feature": "kid-sid/claude-spellbook",
"summary": "Use when implementing reliable message processing with Azure Service Bus — choosing between queues and topics, configuring peek-lock settlement, handling dead-lettered messages, or enforcing ordered processing with sessions.",
"commands": [
"npx skills add kid-sid/claude-spellbook@azure-service-bus -g"
],
"install": "npx skills add kid-sid/claude-spellbook@azure-service-bus -g",
"stars": 180,
"repoUrl": "https://github.com/kid-sid/claude-spellbook",
"aliases": [
"azure-service-bus",
"kid-sid",
"skill",
"スキル"
]
},
{
"id": "skill-leeguooooo-cross-request-master-skill-template",
"priority": 501,
"category": "community",
"type": "skill",
"want": "yapi",
"feature": "leeguooooo/cross-request-master",
"summary": "Query and sync YApi interface documentation. Use when user mentions \"yapi 接口文档\", YAPI docs, asks for request/response details, or needs docs sync. Also triggers when user pastes a YApi URL that matches the configured base_url.",
"commands": [
"npx skills add leeguooooo/cross-request-master@skill-template -g"
],
"install": "npx skills add leeguooooo/cross-request-master@skill-template -g",
"stars": 163,
"repoUrl": "https://github.com/leeguooooo/cross-request-master",
"aliases": [
"skill-template",
"leeguooooo",
"skill",
"スキル"
]
},
{
"id": "skill-leeguooooo-cross-request-master-yapi",
"priority": 502,
"category": "community",
"type": "skill",
"want": "yapi",
"feature": "leeguooooo/cross-request-master",
"summary": "Query and sync YApi interface documentation. Use when user mentions \"yapi 接口文档\", YAPI docs, asks for request/response details, or needs docs sync. Also triggers when user pastes a YApi URL that matches the configured base_url.",
"commands": [
"npx skills add leeguooooo/cross-request-master@yapi -g"
],
"install": "npx skills add leeguooooo/cross-request-master@yapi -g",
"stars": 163,
"repoUrl": "https://github.com/leeguooooo/cross-request-master",
"aliases": [
"yapi",
"leeguooooo",
"skill",
"スキル"
]
},
{
"id": "skill-opendatalab-mineru-ecosystem-skills",
"priority": 503,
"category": "community",
"type": "skill",
"want": "MinerU Document Extractor",
"feature": "opendatalab/MinerU-Ecosystem",
"summary": "MinerU document extraction — convert PDFs, scanned documents, images, Word (DOC/DOCX), PowerPoint (PPT/PPTX), Excel (XLS/XLSX), and web pages into clean Markdown, HTML, LaTeX, or DOCX. MinerU is an all-in-one CLI tool and agent skill for reliable, high-fidelity document parsing. Struggling with unreadable PDFs, messy table formatting, or garbled formulas after conversion? MinerU solves these with two extraction modes: MinerU flash-extract for instant zero-setup conversion with table recognition, formula recognition, and OCR (no token, no login, no configuration — just run and get results), and MinerU precision extract with VLM-based layout analysis, multiple output formats, and batch processing of hundreds of files. Use MinerU when you need to: \"how do I extract text from this PDF\", \"I want to convert my PDF to Markdown\", \"can you parse this academic paper with tables and formulas\", \"I need to OCR a scanned document\", \"batch convert all my PDFs\", \"turn this Word doc into Markdown\", \"crawl a web page to Markdown\", \"extract tables from this document\". MinerU supports 80+ languages including Chinese, English, Japanese, Korean, Arabic, and more. Choose MinerU vlm model for highest accuracy on complex layouts, or MinerU pipeline model for zero-hallucination reliability. Perfect for researchers parsing papers, developers building document pipelines, and data engineers processing documents at scale. MinerU文档提取工具，PDF转Markdown、扫描件OCR、表格识别、公式识别、批量PDF处理、Word转Markdown、Excel转Markdown、网页爬取、图片OCR、学术论文解析。MinerU支持PDF、Word、PPT、Excel（XLS/XLSX）、图片等多格式文档智能转换，命令行一键提取，免登录快速模式或高精度专业模式。",
"commands": [
"npx skills add opendatalab/MinerU-Ecosystem -g"
],
"install": "npx skills add opendatalab/MinerU-Ecosystem -g",
"stars": 152,
"repoUrl": "https://github.com/opendatalab/MinerU-Ecosystem",
"aliases": [
"skills",
"opendatalab",
"skill",
"スキル"
]
},
{
"id": "skill-hyaxia-blogwatcher-skills",
"priority": 504,
"category": "community",
"type": "skill",
"want": "blogwatcher",
"feature": "Hyaxia/blogwatcher",
"summary": "Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI.",
"commands": [
"npx skills add Hyaxia/blogwatcher@skills -g"
],
"install": "npx skills add Hyaxia/blogwatcher@skills -g",
"stars": 142,
"repoUrl": "https://github.com/Hyaxia/blogwatcher",
"aliases": [
"skills",
"Hyaxia",
"skill",
"スキル"
]
},
{
"id": "skill-hyaxia-blogwatcher-blogwatcher",
"priority": 505,
"category": "community",
"type": "skill",
"want": "blogwatcher-cli",
"feature": "Hyaxia/blogwatcher",
"summary": "Use when managing or interacting with favorite blogs via the BlogWatcher CLI—adding/removing blogs, scanning for new posts, listing articles, marking read/unread, or modifying related CLI behavior, scanning, storage, and tests.",
"commands": [
"npx skills add Hyaxia/blogwatcher@blogwatcher -g"
],
"install": "npx skills add Hyaxia/blogwatcher@blogwatcher -g",
"stars": 142,
"repoUrl": "https://github.com/Hyaxia/blogwatcher",
"aliases": [
"blogwatcher",
"Hyaxia",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-analytics-tracking-automation",
"priority": 506,
"category": "community",
"type": "skill",
"want": "analytics-tracking-automation",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when you need GA4 + GTM tracking delivery from site discovery through publish, or when the right phase entry point is still unclear.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@analytics-tracking-automation -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@analytics-tracking-automation -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"analytics-tracking-automation",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-discover",
"priority": 507,
"category": "community",
"type": "skill",
"want": "tracking-discover",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the user wants crawl coverage, platform detection, dataLayer discovery, or a fresh artifact directory before grouping and schema work.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-discover -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-discover -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-discover",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-group",
"priority": 508,
"category": "community",
"type": "skill",
"want": "tracking-group",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the work starts from `site-analysis.json` and the user wants page-group authoring, grouping adjustments, or page-group approval.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-group -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-group -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-group",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-live-gtm",
"priority": 509,
"category": "community",
"type": "skill",
"want": "tracking-live-gtm",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the user wants to inspect the real live GTM runtime before schema generation or compare multiple live GTM containers.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-live-gtm -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-live-gtm -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-live-gtm",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-schema",
"priority": 510,
"category": "community",
"type": "skill",
"want": "tracking-schema",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the user wants schema preparation, event design, selector validation, schema review, or event-spec generation.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-schema -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-schema -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-schema",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-shopify",
"priority": 511,
"category": "community",
"type": "skill",
"want": "tracking-shopify",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the platform is Shopify or the run needs the Shopify-specific schema, sync, install, or verification branch.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-shopify -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-shopify -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-shopify",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-sync",
"priority": 512,
"category": "community",
"type": "skill",
"want": "tracking-sync",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the user wants GTM-ready config generation, GTM workspace sync, or container selection from an approved schema.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-sync -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-sync -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-sync",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-jtrackingai-analytics-tracking-automation-tracking-verify",
"priority": 513,
"category": "community",
"type": "skill",
"want": "tracking-verify",
"feature": "jtrackingai/analytics-tracking-automation",
"summary": "Use when the user wants preview QA, failure interpretation, release readiness, or an explicit publish handoff.",
"commands": [
"npx skills add jtrackingai/analytics-tracking-automation@tracking-verify -g"
],
"install": "npx skills add jtrackingai/analytics-tracking-automation@tracking-verify -g",
"stars": 132,
"repoUrl": "https://github.com/jtrackingai/analytics-tracking-automation",
"aliases": [
"tracking-verify",
"jtrackingai",
"skill",
"スキル"
]
},
{
"id": "skill-nullptrx-pangle_flutter-skills",
"priority": 514,
"category": "community",
"type": "skill",
"want": "pangle-ad-integration",
"feature": "nullptrx/pangle_flutter",
"summary": "Natural language guided assistant for integrating ByteDance Pangle ads into a Flutter app. Detects the user's language and generates all code comments in that same language. Covers all ad types supported by pangle_flutter.",
"commands": [
"npx skills add nullptrx/pangle_flutter -g"
],
"install": "npx skills add nullptrx/pangle_flutter -g",
"stars": 128,
"repoUrl": "https://github.com/nullptrx/pangle_flutter",
"aliases": [
"skills",
"nullptrx",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-agentsop-agent-topology-selection",
"priority": 515,
"category": "community",
"type": "skill",
"want": "agentsop-agent-topology-selection",
"feature": "agentsope/SkillAlchemy",
"summary": "Cross-framework enhancement overlay for choosing a multi-agent topology BEFORE writing any agent. A binary-question rubric — is single-agent + tools enough? do agents need to know about each other? does the output need one voice? — maps the answer to single-agent / supervisor / swarm / sequential / hierarchical. Activates when a coder agent is tempted to \"split the work into roles\" or reaches for a multi-agent framework. Encodes the *selection rubric* that the per-framework skills assume but never surface. Search keywords: when to use multi-agent, single vs multi agent, do I need multiple agents, supervisor vs swarm, multi-agent vs single agent, agent team design.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-agent-topology-selection -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-agent-topology-selection -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-agent-topology-selection",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-agentsop-aider",
"priority": 516,
"category": "community",
"type": "skill",
"want": "agentsop-aider",
"feature": "agentsope/SkillAlchemy",
"summary": "SOP for terminal-based, git-native AI pair programming with Aider (git work-tree + tree-sitter repo-map + edit-format + human-in-loop REPL). Use when editing code in an existing git repo via an LLM, when you need to converge a change to 2-5 files, pick an edit format that fits the model, run architect+editor mode, or wire an auto-test loop.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-aider -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-aider -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-aider",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-agentsop-bio-fraud-forensics",
"priority": 517,
"category": "community",
"type": "skill",
"want": "agentsop-bio-fraud-forensics",
"feature": "agentsope/SkillAlchemy",
"summary": "Screens biomedical / life-science papers for signs of data fabrication, image manipulation, and statistical anomalies, using the detection techniques distilled from the field's canonical exposure platforms (PubPeer, Data Colada, Science Integrity Digest, For Better Science) and tools (ImageTwin/Proofig, statcheck, GRIM/GRIMMER, Problematic Paper Screener, Seek & Blastn). Use when asked to check a paper/figure for image duplication, blot splicing, impossible statistics, paper-mill or tortured-phrase signals, research integrity, or \"is this data faked\"; or when a user shares a figure, Western blot, supplementary dataset, or DOI and asks whether it looks manipulated. Reports observable anomalies as questions for clarification — it never accuses anyone of fraud.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-bio-fraud-forensics -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-bio-fraud-forensics -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-bio-fraud-forensics",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-agentsop-bounded-loop",
"priority": 518,
"category": "community",
"type": "skill",
"want": "agentsop-bounded-loop",
"feature": "agentsope/SkillAlchemy",
"summary": "Universal discipline for any LM-driven loop — agent retries, plan-act-observe, multi-agent handoffs, optimiser passes, test-fix cycles. Encodes the one rule every framework documents quietly and every team relearns expensively: the LM in the loop is NEVER a reliable terminator. Termination must be provided by an explicit counter + exit predicate + stagnation signal + escalation path that live OUTSIDE the LM's control. This is a tool- level, framework-agnostic skill. It maps onto LangGraph (recursion_limit + state counter + interrupt), CrewAI (max_iter + max_rpm + human_input), Claude / OpenAI SDKs (max_iterations + tool_use_budget), DSPy (declared evaluation budget), Aider (REPL + explicit retry cap), and AutoGen (max_consecutive_auto_reply). Search keywords: infinite loop, recursion limit, recursion_limit, GraphRecursionError, max iterations, max_iter, agent stuck, agent won't stop, runaway agent, ReAct loop not terminating, agent repeating itself.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-bounded-loop -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-bounded-loop -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-bounded-loop",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-agentsop-code-execution-decision",
"priority": 519,
"category": "community",
"type": "skill",
"want": "agentsop-code-execution-decision",
"feature": "agentsope/SkillAlchemy",
"summary": "Decision rubric for when an LM agent should write-and-run code (Program-of-Thought / code interpreter) versus reason in natural language: classify each step as deterministic- computable (emit + execute code, feed the result back) vs judgment (stay in prose). Use when designing or debugging an agent step that does arithmetic/parsing/data transforms, when prose reasoning hallucinates a computation (under-coding), or when a sandbox round- trip is wasted on a judgment task (over-coding). Search keywords: code interpreter, agent does math wrong, calculator hallucination, when to run code vs reason, program of thought, PoT, tool vs reasoning.",
"commands": [
"npx skills add agentsope/SkillAlchemy@agentsop-code-execution-decision -g"
],
"install": "npx skills add agentsope/SkillAlchemy@agentsop-code-execution-decision -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"agentsop-code-execution-decision",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-leap",
"priority": 520,
"category": "community",
"type": "skill",
"want": "LEAP",
"feature": "agentsope/SkillAlchemy",
"summary": "LEAP — 落地执行引擎。内含两条管线：A 分支蒸馏（从 raw data 提取 skill）、\nB 分支融合（多 skill 编织为一个）。被 SkillAlchemy 编排器调用。\nUse when 编排器判断需要蒸馏或融合时。",
"commands": [
"npx skills add agentsope/SkillAlchemy@LEAP -g"
],
"install": "npx skills add agentsope/SkillAlchemy@LEAP -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"LEAP",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-lens",
"priority": 521,
"category": "community",
"type": "skill",
"want": "Lens",
"feature": "agentsope/SkillAlchemy",
"summary": "Lens — 给你的问题加一层认知镜片。输入任意任务描述，输出增强版 description，\n发现「你不知道自己不知道」的隐性维度、前置条件和认知路线。\nUse when 用户说「帮我想想」「分析一下」「生成 skill」「蒸馏」「融合」\n或输入看起来太简单需要展开。",
"commands": [
"npx skills add agentsope/SkillAlchemy@Lens -g"
],
"install": "npx skills add agentsope/SkillAlchemy@Lens -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"Lens",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-agentsope-skillalchemy-skillalchemy",
"priority": 522,
"category": "community",
"type": "skill",
"want": "SkillAlchemy",
"feature": "agentsope/SkillAlchemy",
"summary": "SkillAlchemy — 一念落地，万象成形。输入任意想法或蒸馏目标，输出可安装的 SKILL.md。\n内部编排 Lens（看清问题）和 LEAP（执行蒸馏/融合）。用户唯一入口。\nUse when 用户说「蒸馏」「生成 skill」「融合」「我想做 X 但不知道从哪下手」。",
"commands": [
"npx skills add agentsope/SkillAlchemy@SkillAlchemy -g"
],
"install": "npx skills add agentsope/SkillAlchemy@SkillAlchemy -g",
"stars": 120,
"repoUrl": "https://github.com/agentsope/SkillAlchemy",
"aliases": [
"SkillAlchemy",
"agentsope",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-agents-md-manager",
"priority": 523,
"category": "community",
"type": "skill",
"want": "agents-md-manager",
"feature": "espennilsen/pi",
"summary": "Audit, generate, update, and lint AGENTS.md files across all projects. Use when asked to check project context files, scaffold AGENTS.md for new projects, update stale ones, or run a cross-project audit.",
"commands": [
"npx skills add espennilsen/pi@agents-md-manager -g"
],
"install": "npx skills add espennilsen/pi@agents-md-manager -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"agents-md-manager",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-pi-cmux",
"priority": 524,
"category": "community",
"type": "skill",
"want": "cmux",
"feature": "espennilsen/pi",
"summary": "Orchestrate cmux terminal panes — split terminals, run parallel processes, read output from other panes, and use the built-in browser. Use when working inside cmux and you need to run a dev server, watch tests, spawn sub-agents, or preview web pages.",
"commands": [
"npx skills add espennilsen/pi@pi-cmux -g"
],
"install": "npx skills add espennilsen/pi@pi-cmux -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"pi-cmux",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-pi-heartbeat",
"priority": 525,
"category": "community",
"type": "skill",
"want": "pi-heartbeat",
"feature": "espennilsen/pi",
"summary": "Configure periodic health checks via HEARTBEAT.md and the /heartbeat command.",
"commands": [
"npx skills add espennilsen/pi@pi-heartbeat -g"
],
"install": "npx skills add espennilsen/pi@pi-heartbeat -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"pi-heartbeat",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-pi-memory",
"priority": 526,
"category": "community",
"type": "skill",
"want": "pi-memory",
"feature": "espennilsen/pi",
"summary": "Manage persistent memory across sessions. Use when asked to remember, recall, forget, or review what was stored. Covers long-term facts (MEMORY.md), daily session logs, search, and memory housekeeping.",
"commands": [
"npx skills add espennilsen/pi@pi-memory -g"
],
"install": "npx skills add espennilsen/pi@pi-memory -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"pi-memory",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-pi-projects",
"priority": 527,
"category": "community",
"type": "skill",
"want": "pi-projects",
"feature": "espennilsen/pi",
"summary": "Track and manage projects with git status via dashboard and tool.",
"commands": [
"npx skills add espennilsen/pi@pi-projects -g"
],
"install": "npx skills add espennilsen/pi@pi-projects -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"pi-projects",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-pi-subagent",
"priority": 528,
"category": "community",
"type": "skill",
"want": "pi-subagent",
"feature": "espennilsen/pi",
"summary": "Delegate tasks to specialized subagents for parallel or sequential execution.",
"commands": [
"npx skills add espennilsen/pi@pi-subagent -g"
],
"install": "npx skills add espennilsen/pi@pi-subagent -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"pi-subagent",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-espennilsen-pi-workon",
"priority": 529,
"category": "community",
"type": "skill",
"want": "workon",
"feature": "espennilsen/pi",
"summary": "Switch working context to a project. Loads AGENTS.md, git status, and td issues.",
"commands": [
"npx skills add espennilsen/pi@workon -g"
],
"install": "npx skills add espennilsen/pi@workon -g",
"stars": 111,
"repoUrl": "https://github.com/espennilsen/pi",
"aliases": [
"workon",
"espennilsen",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-agent-browser",
"priority": 530,
"category": "community",
"type": "skill",
"want": "agent-browser",
"feature": "archibate/dotfiles-opencode",
"summary": "Browser automation CLI for AI agents. Use when needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. TRIGGER when user requests to \"open a website\", \"fill out a form\", \"click a button\", \"take a screenshot\", \"debug this in browser\", \"scrape data from a page\", \"test this web app\", \"login to a site\", \"frontend UI/UX aesthetics\", \"automate browser actions\", or any task requiring programmatic web interaction.",
"commands": [
"npx skills add archibate/dotfiles-opencode@agent-browser -g"
],
"install": "npx skills add archibate/dotfiles-opencode@agent-browser -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"agent-browser",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-anti-defensive",
"priority": 531,
"category": "community",
"type": "skill",
"want": "anti-defensive",
"feature": "archibate/dotfiles-opencode",
"summary": "Review common AI slops of defensive programming patterns, avoid silent errors. TRIGGER when reviewing code for defensive anti-patterns, writing fail-fast code, or auditing error handling quality.",
"commands": [
"npx skills add archibate/dotfiles-opencode@anti-defensive -g"
],
"install": "npx skills add archibate/dotfiles-opencode@anti-defensive -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"anti-defensive",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-ast-grep",
"priority": 532,
"category": "community",
"type": "skill",
"want": "ast-grep",
"feature": "archibate/dotfiles-opencode",
"summary": "Guide for writing ast-grep rules to perform structural code search and analysis. This skill should be used when users need to search codebases using Abstract Syntax Tree (AST) patterns, find specific code structures, or perform complex code queries that go beyond simple text search, or when a simple grep/glob search is insufficient for structural code pattern matching.",
"commands": [
"npx skills add archibate/dotfiles-opencode@ast-grep -g"
],
"install": "npx skills add archibate/dotfiles-opencode@ast-grep -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"ast-grep",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-better-translate",
"priority": 533,
"category": "community",
"type": "skill",
"want": "better-translate",
"feature": "archibate/dotfiles-opencode",
"summary": "Best practices for AI-driven English-to-Chinese translation. This skill should be used when the user asks to \"translate to Chinese\", \"update the Chinese translation\", \"improve Chinese translation\", \"fix translation quality\", \"review Chinese translation\", or when translating any English text into Chinese. Also applies when polishing an existing Chinese translation of English content.",
"commands": [
"npx skills add archibate/dotfiles-opencode@better-translate -g"
],
"install": "npx skills add archibate/dotfiles-opencode@better-translate -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"better-translate",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-cc-connect",
"priority": 534,
"category": "community",
"type": "skill",
"want": "cc-connect",
"feature": "archibate/dotfiles-opencode",
"summary": "This skill should be used when sending images, files, or notifications back to the user via messaging platforms (Discord, Feishu, Telegram, etc.) through cc-connect. TRIGGER when agent generates a plot/chart/screenshot and wants to show the user; agent creates a report/PDF/file the user should receive; agent needs to proactively notify the user (e.g. task completed, alert, reminder); user asks to \"send image\", \"show me the chart\", \"notify me\", \"send the file\", \"send to Telegram\", \"show plot in Discord\".",
"commands": [
"npx skills add archibate/dotfiles-opencode@cc-connect -g"
],
"install": "npx skills add archibate/dotfiles-opencode@cc-connect -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"cc-connect",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-extract-repo",
"priority": 535,
"category": "community",
"type": "skill",
"want": "extract-repo",
"feature": "archibate/dotfiles-opencode",
"summary": "Download GitHub repos as clean source code (no .git history) to WORKDIR. Use when cloning repos for analysis or modification. Not for monorepos.",
"commands": [
"npx skills add archibate/dotfiles-opencode@extract-repo -g"
],
"install": "npx skills add archibate/dotfiles-opencode@extract-repo -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"extract-repo",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-send-notify",
"priority": 536,
"category": "community",
"type": "skill",
"want": "send-notify",
"feature": "archibate/dotfiles-opencode",
"summary": "Send notifications to the user. TRIGGER when user says \"notify me\", \"send notification\", \"alert me\".",
"commands": [
"npx skills add archibate/dotfiles-opencode@send-notify -g"
],
"install": "npx skills add archibate/dotfiles-opencode@send-notify -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"send-notify",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-archibate-dotfiles-opencode-show-image",
"priority": 537,
"category": "community",
"type": "skill",
"want": "show-image",
"feature": "archibate/dotfiles-opencode",
"summary": "Show images in terminal using the Kitty image protocol. TRIGGER when show/view images in terminal, display plot results.",
"commands": [
"npx skills add archibate/dotfiles-opencode@show-image -g"
],
"install": "npx skills add archibate/dotfiles-opencode@show-image -g",
"stars": 102,
"repoUrl": "https://github.com/archibate/dotfiles-opencode",
"aliases": [
"show-image",
"archibate",
"skill",
"スキル"
]
},
{
"id": "skill-nirholas-pai-example-tool",
"priority": 538,
"category": "community",
"type": "skill",
"want": "example-tool",
"feature": "nirholas/PAI",
"summary": "A template skill demonstrating the PAI SKILL.md format.",
"commands": [
"npx skills add nirholas/PAI@example-tool -g"
],
"install": "npx skills add nirholas/PAI@example-tool -g",
"stars": 99,
"repoUrl": "https://github.com/nirholas/PAI",
"aliases": [
"example-tool",
"nirholas",
"skill",
"スキル"
]
},
{
"id": "skill-nirholas-pai-skills",
"priority": 539,
"category": "community",
"type": "skill",
"want": "pai-skills-root",
"feature": "nirholas/PAI",
"summary": "Index of all PAI skills.",
"commands": [
"npx skills add nirholas/PAI@skills -g"
],
"install": "npx skills add nirholas/PAI@skills -g",
"stars": 99,
"repoUrl": "https://github.com/nirholas/PAI",
"aliases": [
"skills",
"nirholas",
"skill",
"スキル"
]
},
{
"id": "skill-nirholas-pai-summarize-document",
"priority": 540,
"category": "community",
"type": "skill",
"want": "summarize-document",
"feature": "nirholas/PAI",
"summary": "Summarize a document at a requested length.",
"commands": [
"npx skills add nirholas/PAI@summarize-document -g"
],
"install": "npx skills add nirholas/PAI@summarize-document -g",
"stars": 99,
"repoUrl": "https://github.com/nirholas/PAI",
"aliases": [
"summarize-document",
"nirholas",
"skill",
"スキル"
]
},
{
"id": "skill-godothub-godot-minigame-skills",
"priority": 541,
"category": "community",
"type": "skill",
"want": "godot-wechat-minigame-adapter",
"feature": "godothub/godot-minigame",
"summary": "Apply the bundled self-contained Godot WeChat Mini Game adapter kit to an official Godot checkout. Use when the user wants to port official Godot to WeChat Mini Game, refresh a nearby 4.6-based port, or inspect the shipped patch/source bundle for WXMEMFS, `wx.request`, audio cleanup, `wx.getWindowInfo`, `wx.showKeyboard`, `.wasm.br`, and `wx.exitMiniProgram`. This skill is version-locked to the bundled upstream base and must not be described as a generic “Godot 4.x” patch dump.",
"commands": [
"npx skills add godothub/godot-minigame -g"
],
"install": "npx skills add godothub/godot-minigame -g",
"stars": 96,
"repoUrl": "https://github.com/godothub/godot-minigame",
"aliases": [
"skills",
"godothub",
"skill",
"スキル"
]
},
{
"id": "skill-spillwavesolutions-sdd-skill-sdd-skill",
"priority": 542,
"category": "community",
"type": "skill",
"want": "sdd",
"feature": "SpillwaveSolutions/sdd-skill",
"summary": "This skill should be used when users want guidance on Spec-Driven Development methodology using GitHub's Spec-Kit. Guide users through executable specification workflows for both new projects (greenfield) and existing codebases (brownfield). After any SDD command generates artifacts, automatically provide structured 10-point summaries with feature status tracking, enabling natural language feature management and keeping users engaged throughout the process.",
"commands": [
"npx skills add SpillwaveSolutions/sdd-skill -g"
],
"install": "npx skills add SpillwaveSolutions/sdd-skill -g",
"stars": 84,
"repoUrl": "https://github.com/SpillwaveSolutions/sdd-skill",
"aliases": [
"sdd-skill",
"SpillwaveSolutions",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-agent-introspection-debugging",
"priority": 543,
"category": "community",
"type": "skill",
"want": "agent-introspection-debugging",
"feature": "mturac/everything-openai-codex",
"summary": "Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports.",
"commands": [
"npx skills add mturac/everything-openai-codex@agent-introspection-debugging -g"
],
"install": "npx skills add mturac/everything-openai-codex@agent-introspection-debugging -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"agent-introspection-debugging",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-agent-sort",
"priority": 544,
"category": "community",
"type": "skill",
"want": "agent-sort",
"feature": "mturac/everything-openai-codex",
"summary": "Build an evidence-backed ecc install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using parallel repo-aware review passes. Use when ecc should be trimmed to what a project actually needs instead of loading the full bundle.",
"commands": [
"npx skills add mturac/everything-openai-codex@agent-sort -g"
],
"install": "npx skills add mturac/everything-openai-codex@agent-sort -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"agent-sort",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-api-design",
"priority": 545,
"category": "community",
"type": "skill",
"want": "api-design",
"feature": "mturac/everything-openai-codex",
"summary": "REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs.",
"commands": [
"npx skills add mturac/everything-openai-codex@api-design -g"
],
"install": "npx skills add mturac/everything-openai-codex@api-design -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"api-design",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-article-writing",
"priority": 546,
"category": "community",
"type": "skill",
"want": "article-writing",
"feature": "mturac/everything-openai-codex",
"summary": "Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. Use when the user wants polished written content longer than a paragraph, especially when voice consistency, structure, and credibility matter.",
"commands": [
"npx skills add mturac/everything-openai-codex@article-writing -g"
],
"install": "npx skills add mturac/everything-openai-codex@article-writing -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"article-writing",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-backend-patterns",
"priority": 547,
"category": "community",
"type": "skill",
"want": "backend-patterns",
"feature": "mturac/everything-openai-codex",
"summary": "Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes.",
"commands": [
"npx skills add mturac/everything-openai-codex@backend-patterns -g"
],
"install": "npx skills add mturac/everything-openai-codex@backend-patterns -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"backend-patterns",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-brand-voice",
"priority": 548,
"category": "community",
"type": "skill",
"want": "brand-voice",
"feature": "mturac/everything-openai-codex",
"summary": "Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and social workflows. Use when the user wants voice consistency without generic AI writing tropes.",
"commands": [
"npx skills add mturac/everything-openai-codex@brand-voice -g"
],
"install": "npx skills add mturac/everything-openai-codex@brand-voice -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"brand-voice",
"mturac",
"skill",
"スキル"
]
},
{
"id": "skill-mturac-everything-openai-codex-bun-runtime",
"priority": 549,
"category": "community",
"type": "skill",
"want": "bun-runtime",
"feature": "mturac/everything-openai-codex",
"summary": "Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support.",
"commands": [
"npx skills add mturac/everything-openai-codex@bun-runtime -g"
],
"install": "npx skills add mturac/everything-openai-codex@bun-runtime -g",
"stars": 83,
"repoUrl": "https://github.com/mturac/everything-openai-codex",
"aliases": [
"bun-runtime",
"mturac",
"skill",
"スキル"
]
}
];
