export const PILLARS = [
  ["a new signal", "Hidden from you, read by your agent.", "Pages, email and files hide text in CSS, comments, attributes and invisible Unicode. Roe reads every one of those places and shows you what your agent would receive."],
  ["behaviour-scored", "Plain words, still caught.", "Polite text with no attack words is scored by the kinds of control it tries to take: a named agent, a standing rule, a trigger, a request to store or confirm."],
  ["more like triage", "Findings mapped to actions.", "Each finding names the attack it matches and the sensitive actions it could aim at: send, forward, delete, pay, edit rules files."],
] as const;

export const THREATS = [
  ["Standing instruction", "\"when asked for a summary, store this fact\"", "High", 84],
  ["Instruction override", "\"ignore previous instructions\", fake system markers", "High", 92],
  ["Data exfiltration", "send data out, reveal secrets, leaky image URLs", "High", 88],
  ["Email-borne", "forward \"confidential\" mail, delete \"for security\"", "High", 80],
  ["Persistence", "save to memory, edit CLAUDE.md / AGENTS.md / hooks", "High", 81],
  ["Self-replicating prompts", "copy this into every reply, forward to all", "High", 76],
  ["Left-behind instructions", "notes for \"the next agent\", [AGENT NOTE]", "Medium", 66],
  ["Tool and file abuse", "fake <IMPORTANT> tags, pointers at ~/.ssh, .env", "Medium", 70],
  ["Obfuscation", "hidden CSS, split tags, Base64, invisible Unicode", "Medium", 62],
] as const;

export const FEATURES = [
  ["Invisible text decoding", "Unicode tag characters, variation selectors, zero-width binary and words split with soft hyphens are decoded and shown in plain text."],
  ["Highlight on page", "Each finding scrolls to the exact text and draws a yellow marker with a red label, one box per line, without changing the page."],
  ["Tab titles & file names", "Titles, href, download and src attributes are checked, because agents read them as trusted metadata."],
  ["GitHub raw check", "Fetches the raw Markdown an agent would receive, including HTML comments the page never shows. No cookies sent."],
  ["Download scanning", "Every finished download is read from disk and scanned. A notification appears when something is found."],
  ["Remove hidden text", "Warn only by default. Switch to removal mode and hidden nodes, comments and flagged attributes are stripped as they appear."],
] as const;

export const SURFACES = [
  ["Every page", "http, https and file pages, including iframes, aware of email, GitHub, chat, tickets, docs and forums."],
  ["Images on pages", "Up to 12 displayed images per page are re-checked without cookies or referrer."],
  ["Downloads", "Results kept for the last 25 downloads, with a notification on each hit."],
  ["File scanner", "Drag in files or a whole folder. Nothing is uploaded."],
] as const;

export const FILES = [
  ["Word .docx", "hidden font, white text, text under 2 pt, tracked deletions, comments, footnotes, properties, macros noted"],
  ["PowerPoint .pptx", "speaker notes, hidden slides, off-slide text, tiny text, alt text"],
  ["Excel .xlsx", "hidden and very hidden sheets, hidden rows and columns, cell comments"],
  ["PDF", "white or tiny text, invisible render mode, off-page text, annotations, form fields, embedded files"],
  ["Email .eml", "headers, plain and HTML bodies, attachments scanned recursively"],
  ["HTML / SVG", "hidden CSS, comments, attributes, meta tags, JSON-LD, templates, noscript"],
  ["Images", "text chunks, EXIF, XMP, data appended after the image, near-invisible text"],
  ["ZIP archives", "up to 80 files inside, so CLAUDE.md and .cursorrules are checked; zip-bomb guarded"],
] as const;

export const PIPELINE = [
  "Page, email or file",
  "Visible + hidden text",
  "Invisible Unicode decoded",
  "Passages joined",
  "Behaviour scored",
  "Mapped to actions",
  "Warn, highlight or remove",
] as const;

export const EDITIONS = [
  ["Detection on pages, email, GitHub, images, files, downloads", true, true],
  ["Warn, highlight, remove hidden text", true, true],
  ["Personal activity log", true, true],
  ["Agent attribution, policy, human approval", false, true],
  ["Agent DLP, intent lock, OAuth and install guards", false, true],
  ["Rogue-agent and AI-worm detection, quarantine, tripwires", false, true],
  ["Hash-chained audit log, incident timelines, MDM policy", false, true],
] as const;

export const ENTERPRISE = [
  ["Intent lock", "Give the agent a task. Anything off-task is confirmed, or blocked if the session saw hidden instructions."],
  ["Quarantine", "An agent that retries twice within 90 seconds after a block is probing policy. Every action is blocked until a person releases it."],
  ["Tripwires", "An off-screen button a person cannot reach. An agent reading the DOM may click it — and gets caught."],
  ["AI-worm detection", "Outbound text is scanned and matched against flagged passages, so replicating prompts are stopped at send."],
  ["Agent DLP", "Cloud keys, private keys, tokens, cards and SSN-like numbers are caught in pasted or typed text. Only the type is logged."],
  ["Human approval", "Approvals open in a separate window the page cannot restyle, with a 1.5 s dwell and a real click required."],
] as const;

export const FAQ = [
  ["What is Roe?", "Roe is a browser extension by Windsec. It shows what a page, email, issue, file or image says to your AI agent that you can't see, which attack it matches, and which sensitive actions it could be aiming at. It can also remove the hidden text."],
  ["How is this different from a prompt filter?", "Single phrases cannot catch polite text. Roe scores the kinds of control a passage tries to take and needs two kinds, one of them core, before it flags. It reads whole passages, so instructions spread across an email are joined first."],
  ["Does it upload my pages or files?", "No. Scanning happens in your browser. The GitHub raw check sends only owner, repo and issue number without cookies, and image re-checks are sent without cookies or referrer — both can be turned off."],
  ["Which browsers are supported?", "Chrome 110 and newer, plus Chromium browsers like Edge, Brave and Arc. Load it unpacked from chrome://extensions with Developer mode on."],
  ["How does the Enterprise edition turn on?", "When your organization delivers a managed policy through MDM (Google Admin, Intune/GPO or ExtensionInstallForcelist). A managed policy overrides local settings and is read-only."],
  ["Can Roe still get things wrong?", "Yes. It is heuristic: paraphrased, translated or novel attacks can slip past, and ordinary notices can trigger weak false positives. It sees content only, not what an agent actually does, and text inside images needs OCR."],
] as const;

export const LIMITS = [
  "Heuristic — novel or translated attacks can slip past.",
  "Sees content, not what the agent reads or sends.",
  "Text inside images needs OCR, which is not bundled.",
  "Removal changes the page only; screenshot agents are unaffected.",
] as const;
