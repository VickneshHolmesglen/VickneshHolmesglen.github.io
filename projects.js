// All site content lives here. Edit this file to add or update a project;
// index.html never needs touching.
//
// status: "live" | "in-progress" | "private"
// links: only real URLs. Leave a link out rather than pointing it nowhere.

window.SITE = {
  name: "Vicknesh Bhuvanesweran",
  role: "AI automation & evaluation",
  pitch:
    "I come from warehousing and logistics. I find repetitive operational work, make AI do it, and then measure whether it actually does it reliably.",
  links: {
    github: "https://github.com/VickneshHolmesglen",
    linkedin: "", // TODO: paste your LinkedIn URL
    resume: "", // TODO: add resume.pdf to this folder and set this to "resume.pdf"
  },
};

window.PROJECTS = [
  {
    id: "P-01",
    title: "Logistics AI Evaluation",
    status: "in-progress",
    pitch:
      "20 realistic warehouse and logistics tasks run through Claude, ChatGPT and Gemini, scored on accuracy, safety, clarity and usefulness.",
    shows: ["AI evaluation", "Rubric design", "Logistics domain knowledge"],
    detail:
      "Includes deliberate traps: a pallet count that must round up, a vaccine fridge temperature excursion, undeclared lithium batteries, and a law that does not exist.",
    links: {},
  },
  {
    id: "P-02",
    title: "Warehouse Exceptions Agent",
    status: "in-progress",
    pitch:
      "An AI agent that turns a daily stock report into a short list of what needs attention: low stock, expiring batches, count mismatches.",
    shows: ["Process automation", "Agent building", "Test and iterate"],
    detail: "Case study with before/after examples and the time it saves.",
    links: {},
  },
  {
    id: "P-03",
    title: "Project Intelligence RAG",
    status: "live",
    pitch:
      "A question-answering system over software project docs and code that cites its sources and refuses when the evidence is too weak.",
    shows: ["RAG", "Evaluation", "Python / FastAPI", "Testing"],
    detail:
      "On its benchmark: 33 of 36 answerable questions correct, no false refusals, and 11 of 12 unanswerable questions correctly refused. The README opens with a demo of a real session.",
    links: { code: "https://github.com/VickneshHolmesglen/AIJP" },
  },
  {
    id: "P-04",
    title: "Sanctuary Defenders",
    status: "live",
    pitch: "A tower defence game built in Godot 4 with an AI-assisted development workflow.",
    shows: ["Godot 4", "Game design", "AI-assisted development"],
    detail: "",
    links: { code: "https://github.com/VickneshHolmesglen/TDEF" },
  },
];

// "Employers ask for X -> here is where I've shown it." Taken from current
// Seek / Indeed AI roles that do not require IT certifications.
window.SKILLS = [
  ["Clear writing and careful judgement", "P-01"],
  ["Hands-on use of AI tools (Claude, ChatGPT, Copilot)", "P-01, P-02, P-04"],
  ["Spotting inefficiencies in everyday workflows", "P-02"],
  ["Build, test and refine until reliable", "P-02, P-03"],
  ["Domain expertise to judge AI output", "P-01 (logistics, pharma distribution)"],
  ["Evaluation / quality review", "P-01, P-03"],
];
