// Renders projects.js into the page. Text only goes in via textContent.
(function () {
  const S = window.SITE, P = window.PROJECTS, K = window.SKILLS;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };
  const link = (href, text, cls) => {
    const a = el("a", cls, text);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  };

  $("year").textContent = new Date().getFullYear();
  $("name").textContent = S.name;
  $("role").textContent = S.role;
  $("pitch").textContent = S.pitch;

  const acts = $("actions");
  if (S.links.resume) acts.append(link(S.links.resume, "Résumé", "btn primary"));
  if (S.links.linkedin) acts.append(link(S.links.linkedin, "LinkedIn", "btn"));
  if (S.links.github) acts.append(link(S.links.github, "GitHub", "btn"));

  const LABEL = { live: "LIVE", "in-progress": "IN PROGRESS", private: "PRIVATE REPO" };
  const grid = $("projects");
  for (const p of P) {
    const card = el("article", "card");
    const top = el("div", "card-top mono");
    top.append(el("span", "pid", p.id), el("span", "status s-" + p.status, LABEL[p.status] || ""));
    card.append(top, el("h3", null, p.title), el("p", "card-pitch", p.pitch));
    if (p.detail) card.append(el("p", "detail", p.detail));
    const tags = el("ul", "tags mono");
    for (const t of p.shows) tags.append(el("li", null, t));
    card.append(tags);
    const ls = el("div", "card-links");
    if (p.links.demo) ls.append(link(p.links.demo, "View →", "btn primary"));
    if (p.links.code) ls.append(link(p.links.code, "Code →", "btn"));
    if (ls.children.length) card.append(ls);
    grid.append(card);
  }

  const tb = $("skills");
  for (const [skill, where] of K) {
    const tr = el("tr");
    tr.append(el("td", null, skill), el("td", "mono", where));
    tb.append(tr);
  }
})();
