const PROFILE = {
  name: "Amin El Filali",
  bio: "Independent developer helping businesses save time with automation tools, browser extensions, and custom-built web applications.",
  avatarSrc: "./assets/avatar.png",

  links: [
    { label: "My Website", url: "https://elfilaliamin.com" },
    { label: "Gumroad Store", url: "https://tashildegital.gumroad.com/" },
    { label: "TPT Store", url: "https://www.teacherspayteachers.com/store/amin-el-filali" },
    { label: "Medium ", url: "https://medium.com/@elfilaliamin" },
  ],

    social: [
    { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/elfilali.medamin/", icon: iconInstagramBetter() },
    { platform: "pinterest", label: "Pinterest", url: "https://www.pinterest.com/elfilaliamin1", icon: iconPinterestBetter() },
    ],
};

function safeUrl(url) {
  try {
    const u = new URL(url);
    if (u.protocol === "http:" || u.protocol === "https:") return u.toString();
  } catch {}
  return null;
}

function setHint(msg) {
  const el = document.getElementById("hint");
  if (!el) return;
  el.textContent = msg || "";
}

function render() {
  document.title = `${PROFILE.name} — Links`;

  const avatar = document.getElementById("avatar");
  avatar.src = PROFILE.avatarSrc;

  document.getElementById("name").textContent = PROFILE.name;
  document.getElementById("bio").textContent = PROFILE.bio;

  const linksRoot = document.getElementById("links");
  linksRoot.innerHTML = "";

    for (const item of PROFILE.links) {
    const url = safeUrl(item.url);
    if (!url) continue;

    const a = document.createElement("a");
    a.className = "link";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", `${item.label} (opens in new tab)`);

    const label = document.createElement("span");
    label.className = "linkLabel";
    label.textContent = item.label;

    a.append(label);
    linksRoot.appendChild(a);
    }

  const socialRoot = document.getElementById("social");
  socialRoot.innerHTML = "";

    for (const s of PROFILE.social) {
    const url = safeUrl(s.url);
    if (!url) continue;

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", `${s.label} (opens in new tab)`);
    a.title = s.label;

    a.dataset.platform = (s.platform || s.label || "").toLowerCase();

    a.innerHTML = s.icon;
    socialRoot.appendChild(a);
    }

  // Tiny UX: show hint when user focuses a social icon via keyboard
  socialRoot.addEventListener("focusin", (e) => {
    const a = e.target.closest("a");
    if (a?.title) setHint(a.title);
  });
  socialRoot.addEventListener("focusout", () => setHint(""));

  // Also show hint on hover (desktop)
  socialRoot.addEventListener("mouseover", (e) => {
    const a = e.target.closest("a");
    if (a?.title) setHint(a.title);
  });
  socialRoot.addEventListener("mouseout", () => setHint(""));
}

/* ---------- Better SVG Icons ---------- */
/* Clean, modern stroke-based Instagram */
function iconInstagramBetter() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9A4.7 4.7 0 0 1 2.8 16.5v-9A4.7 4.7 0 0 1 7.5 2.8Z"
            stroke="currentColor" stroke-width="1.9" />
      <path d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
            stroke="currentColor" stroke-width="1.9" />
      <path d="M17.3 6.7h.01"
            stroke="currentColor" stroke-width="3.4" stroke-linecap="round" />
    </svg>
  `;
}

/* Cleaner Pinterest (filled) */
function iconPinterestBetter() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.2c-5.2 0-9.4 3.5-9.4 8.5 0 3.3 2 5.2 3.2 5.2.5 0 .7-1.2.7-1.7 0-.5-1.3-1.6-1.3-3.6 0-4.1 3.2-7.1 7.4-7.1 3.6 0 6.2 2 6.2 5.7 0 2.8-1.1 8-4.6 8-1.2 0-2.3-.9-1.9-2.2.5-1.6 1.4-3.2 1.4-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.4-2.3 3.2 0 1.1.4 1.9.4 1.9s-1.2 5.3-1.4 6.3c-.5 2-.1 4.5 0 4.8.1.2.3.3.4.1.2-.2 2.3-2.9 2.9-4.8.2-.6.9-3.3.9-3.3.5.9 1.9 1.7 3.3 1.7 4.3 0 7.4-4 7.4-9.3C20.9 6.1 17.3 2.2 12 2.2Z"
            fill="currentColor" opacity="0.95"/>
    </svg>
  `;
}

render();