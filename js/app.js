"use strict";

// ── DATA ──────────────────────────────────────────────────────
const DATA = {
  wifeName: "Ainul Afifa",
  acceptedNames: ["Ainul Afifa", "Ainul", "Ainul Cantik"],
  identityCard: {
    status: "SANGAT SPESIAL",
    threatLevel: "SANGAT IMUT",
    additionalFinding: "Berhasil mencuri hati seorang pria sejak hari pertama.",
  },
  scanItems: [
    { label: "Kebaikan", value: "100%", progress: 100, status: "ok" },
    { label: "Kesabaran", value: "99%", progress: 99, status: "ok" },
    { label: "Keimutan", value: "???", progress: null, status: "error" },
    { label: "Drama level", value: "5/7", progress: 71, status: "warn" },
    {
      label: "Arti baginya",
      value: "∞",
      progress: null,
      status: "overflow",
    },
    {
      label: "Perasaan suaminya",
      value: "PENUH",
      progress: null,
      status: "overflow",
    },
  ],
  scanResult: {
    title: "SISTEM GAGAL",
    message:
      "Sistem tidak berhasil menghitung\nbetapa berartinya kamu baginya.",
    reason: "Angkanya terlalu besar.",
  },
  complaints: [
    { id: "annoying", label: "Suamiku nyebelin 😤" },
    { id: "quiet", label: "Suamiku terlalu pendiam" },
    { id: "busy", label: "Suamiku terlalu sibuk" },
    { id: "forgot", label: "Suamiku lupa sesuatu" },
    { id: "gift", label: "Aku belum dapat kado 🎁" },
  ],
  complaintResponses: {
    annoying: {
      ticketId: "WIFE-2026-001",
      priority: "SANGAT PENTING",
      assignedTo: "Suami (langsung)",
      resolution: "Hug gratis telah disiapkan.",
      note: "Tiket ini tidak bisa dibatalkan.",
    },
    quiet: {
      ticketId: "WIFE-2026-002",
      priority: "PENTING",
      assignedTo: "Departemen Komunikasi Suami",
      resolution: "Sedang dalam perbaikan.",
      note: "Mungkin dia hanya tidak tahu harus bilang apa.",
    },
    busy: {
      ticketId: "WIFE-2026-003",
      priority: "TINGGI",
      assignedTo: "Manajemen Waktu Suami",
      resolution: "Sedang ditangani oleh pihak yang bertanggung jawab.",
      note: "Kamu selalu jadi prioritas pertama.",
    },
    forgot: {
      ticketId: "WIFE-2026-004",
      priority: "KRITIS",
      assignedTo: "Suami (segera)",
      resolution: "Sedang ditangani oleh pihak yang bertanggung jawab.",
      note: "Mohon bersabar. 😌",
    },
    gift: {
      ticketId: "WIFE-2026-005",
      priority: "DARURAT LEVEL 5",
      assignedTo: "Suami (ASAP)",
      resolution: "Sedang ditangani oleh pihak yang bertanggung jawab.",
      note: "Mohon bersabar. 😌",
    },
  },
  transitionLines: [
    "Oke.",
    "Cukup bercandanya.",
    "Ada sesuatu yang sebenarnya\ningin aku sampaikan.",
  ],

  // ── STAGE 6: PHOTO GALLERY ────────────────────────────────
  // Tambahkan path foto di sini. Letakkan file di assets/images/.
  // Null atau path tidak valid akan dilewati otomatis.
  photos: [
    "assets/images/memory-01.jpg",
    "assets/images/memory-02.jpg",
    "assets/images/memory-03.jpg",
    "assets/images/memory-04.jpg",
    "assets/images/memory-05.jpg",
    "assets/images/memory-06.jpg",
  ],

  // ── STAGE 7: OPEN WHEN ────────────────────────────────────
  // condition: teks pada kartu. message: pesan yang muncul saat dibuka.
  // Isi sesuai dengan kata-katamu sendiri.
  openWhen: [
    {
      id: "ow-01",
      condition: "Open when\nkamu kangen aku",
      message:
        "Aku juga kangen kamu. Selalu.\n\nKalau rasanya jauh, ingat — tidak ada jarak yang benar-benar memisahkan kita. Aku ada di sini, meskipun tidak selalu bisa diucapkan.",
    },
    {
      id: "ow-02",
      condition: "Open when\nkamu sedih",
      message:
        "Boleh sedih. Tidak apa-apa.\n\nKamu tidak harus kuat terus. Dan kamu tidak harus menanggungnya sendirian. Aku di sini.",
    },
    {
      id: "ow-03",
      condition: "Open when\nkamu butuh pelukan",
      message:
        "Kalau aku bisa, aku sudah memelukmu dari tadi.\n\nTapi untuk sekarang — anggap saja ini pelukan panjang. Yang tidak akan aku lepas sampai kamu bilang cukup.",
    },
    {
      id: "ow-04",
      condition: "Open when\nkamu butuh senyum",
      message:
        "Kamu tahu tidak?\n\nSenyummu adalah hal yang paling aku suka di dunia ini. Bukan karena terlihat bagus — tapi karena aku tahu kamu bahagia.\n\nSekarang senyum dulu. Beneran. 😌",
    },
    {
      id: "ow-05",
      condition: "Open when\nkamu meragukan dirimu",
      message:
        "Kamu jauh lebih kuat dari yang kamu kira.\n\nAku melihat itu setiap hari. Kamu mungkin tidak menyadarinya — tapi aku selalu menyadarinya.\n\nPercaya padaku.",
    },
    {
      id: "ow-06",
      condition: "Open when\nkamu ingin tahu seberapa aku mencintaimu",
      message:
        "Aku tidak bisa menghitung.\n\nBukan karena tidak mau — tapi karena tidak ada angka yang cukup besar untuk itu.\n\nKamu adalah alasan aku ingin menjadi versi terbaik dari diriku.",
    },
  ],

  // ── STAGE 8: LOVE LETTER ──────────────────────────────────
  letter: {
    date: "September 2026",
    salutation: "Sayang,",
    paragraphs: [
      "Aku nggak pintar ngomong soal perasaan. Kamu pasti tahu itu.",
      "Tapi sejak Februari 2022, kamu sudah lihat banyak versi aku — yang berantakan, yang diam, yang kadang nggak tahu harus ngapain. Dan kamu tetap di sini.",
      "Aku sadar aku belum bisa memberikan semua yang seharusnya kamu dapat. Itu sesuatu yang terus aku pikirkan. Tapi satu hal yang aku tahu pasti — kehadiranmu bukan sesuatu yang bisa aku gantikan dengan apapun.",
    ],
    coreLine: "Aku nggak mau kehilangan kamu.",
    closing: "Makasih sudah bertahan.",
    signature: "— Suamimu ❤️",
  },

  letterAudio: {
    enabled: false,
    src: "assets/audio/love-letter.mp3",
    label: "Dengarkan aku",
  },

  // ── STAGE 9: FINAL REVEAL ─────────────────────────────────
  finalReveal: {
    birthdayText: "Happy Birthday",
    birthdayName: "Sayang. ❤️",
  },

  year: new Date().getFullYear(),
};

// ── UTILS ────────────────────────────────────────────────────
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const norm = (s) =>
  s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// ── STATE ────────────────────────────────────────────────────
const State = (() => {
  const KEY = "foryou_v1";
  const d = {
    hasEntered: false,
    identityVerified: false,
    analysisViewed: false,
    prankCompleted: false,
    couponsClaimed: [],
    letterOpened: false,
    letterRead: false,
    finalRevealed: false,
  };
  let s = (() => {
    try {
      const r = localStorage.getItem(KEY);
      return r ? { ...d, ...JSON.parse(r) } : { ...d };
    } catch {
      return { ...d };
    }
  })();
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
  };
  return {
    get: (k) => s[k],
    set: (k, v) => {
      s[k] = v;
      save();
    },
    reset: () => {
      s = { ...d };
      save();
    },
  };
})();

// ── STAGE ENGINE ─────────────────────────────────────────────
const Stages = (() => {
  let cur = null;
  const hooks = {};
  const on = (id, fn) => {
    hooks[id] = fn;
  };
  const go = (toId, delay = 0) => {
    setTimeout(() => {
      const toEl = document.getElementById(toId);
      if (!toEl) return;
      if (cur) {
        const fr = document.getElementById(cur);
        fr.classList.add("exiting");
        fr.setAttribute("aria-hidden", "true");
        setTimeout(() => fr.classList.remove("active", "exiting"), 560);
      }
      const activate = () => {
        toEl.classList.add("active", "entering");
        toEl.setAttribute("aria-hidden", "false");
        setTimeout(() => toEl.classList.remove("entering"), 1300);
        cur = toId;
        if (hooks[toId]) hooks[toId]();
      };
      setTimeout(activate, cur ? 260 : 0);
    }, delay);
  };
  return { go, on };
})();

// ── PARTICLES ────────────────────────────────────────────────
(() => {
  const cv = document.getElementById("particle-canvas");
  if (!cv || window.matchMedia("(prefers-reduced-motion:reduce)").matches)
    return;
  const cx = cv.getContext("2d");
  let W, H;
  const resize = () => {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);
  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.1 + 0.2,
    dx: (Math.random() - 0.5) * 0.14,
    dy: -(Math.random() * 0.18 + 0.04),
    o: Math.random() * 0.38 + 0.08,
  }));
  const tick = () => {
    cx.clearRect(0, 0, W, H);
    for (const p of pts) {
      cx.beginPath();
      cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      cx.fillStyle = `rgba(123,110,246,${p.o})`;
      cx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -4) {
        p.y = H + 4;
        p.x = Math.random() * W;
      }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;
    }
    requestAnimationFrame(tick);
  };
  tick();
})();

// ── S1: ACCESS ───────────────────────────────────────────────
Stages.on("stage-access", () => {
  setTimeout(() => document.getElementById("btn-enter")?.focus(), 800);
});
document.getElementById("btn-enter")?.addEventListener("click", function () {
  this.disabled = true;
  this.textContent = "···";
  State.set("hasEntered", true);
  Stages.go("stage-identity", 400);
});

// ── S2: IDENTITY ─────────────────────────────────────────────
Stages.on("stage-identity", () => {
  const inp = document.getElementById("identity-input"),
    res = document.getElementById("identity-result"),
    fb = document.getElementById("identity-feedback"),
    wrap = document.getElementById("identity-input-wrap"),
    vbtn = document.getElementById("btn-verify"),
    nbtn = document.getElementById("btn-identity-next");
  if (res) res.innerHTML = "";
  if (fb) {
    fb.textContent = "";
    fb.className = "feedback";
  }
  if (wrap) wrap.style.display = "";
  if (vbtn) {
    vbtn.style.display = "";
    vbtn.disabled = false;
  }
  if (nbtn) nbtn.style.display = "none";
  if (inp) {
    inp.value = "";
    setTimeout(() => inp.focus(), 650);
  }
});

const runVerify = async () => {
  const inp = document.getElementById("identity-input"),
    fb = document.getElementById("identity-feedback"),
    res = document.getElementById("identity-result"),
    vbtn = document.getElementById("btn-verify"),
    nbtn = document.getElementById("btn-identity-next");
  const val = norm(inp?.value ?? "");
  if (!val) {
    fb.textContent = "Nice try. 😌";
    fb.className = "feedback error";
    inp?.focus();
    return;
  }
  vbtn.disabled = true;
  fb.className = "feedback";
  for (const [msg, dur] of [
    ["Menganalisis identitas...", 700],
    ["Memverifikasi database...", 650],
    ["Pencocokan data...", 550],
  ]) {
    fb.textContent = msg;
    await wait(dur);
  }
  const accepted = DATA.acceptedNames.map(norm);
  if (!accepted.includes(val)) {
    fb.textContent = "";
    res.innerHTML = `<div class="identity-fail fade-in"><span class="fail-label">DATA NOT FOUND</span><p class="fail-msg">Hmm...<br/>Nama ini tidak ada di database.</p><p class="fail-hint">Coba lagi. 😌</p></div>`;
    vbtn.disabled = false;
    inp.value = "";
    setTimeout(() => inp.focus(), 300);
    return;
  }
  // Verified — build card safely
  res.innerHTML = "";
  fb.textContent = "";
  const card = document.createElement("div");
  card.className = "identity-card fade-in";
  const cl = document.createElement("span");
  cl.className = "card-label";
  cl.textContent = "TERVERIFIKASI ✓";
  const nm = document.createElement("div");
  nm.className = "identity-name";
  nm.textContent = DATA.wifeName;
  const blk = document.createElement("div");
  blk.className = "sys-block";
  blk.style.marginTop = "0";
  [
    ["Status", DATA.identityCard.status, "ok"],
    ["Threat Level", DATA.identityCard.threatLevel, "warn"],
    ["Temuan", DATA.identityCard.additionalFinding, ""],
  ].forEach(([k, v, cls]) => {
    const r = document.createElement("div");
    r.className = "sys-row";
    const ke = document.createElement("span");
    ke.className = "sys-key";
    ke.textContent = k;
    const ve = document.createElement("span");
    ve.className = `sys-val${cls ? " " + cls : ""}`;
    if (cls === "") ve.style.fontSize = ".8rem";
    ve.textContent = v;
    r.appendChild(ke);
    r.appendChild(ve);
    blk.appendChild(r);
  });
  card.appendChild(cl);
  card.appendChild(nm);
  card.appendChild(blk);
  res.appendChild(card);
  document.getElementById("identity-input-wrap").style.display = "none";
  vbtn.style.display = "none";
  State.set("identityVerified", true);
  await wait(2000);
  if (nbtn) {
    nbtn.style.display = "inline-flex";
    nbtn.classList.add("fade-in");
    setTimeout(() => nbtn.focus(), 100);
  }
};
document.getElementById("btn-verify")?.addEventListener("click", runVerify);
document.getElementById("identity-input")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") runVerify();
});
document
  .getElementById("btn-identity-next")
  ?.addEventListener("click", () => Stages.go("stage-analysis"));

// ── S3: ANALYSIS ─────────────────────────────────────────────
Stages.on("stage-analysis", runAnalysis);
async function runAnalysis() {
  const cont = document.getElementById("scan-rows"),
    res = document.getElementById("analysis-result"),
    nbtn = document.getElementById("btn-analysis-next");
  if (!cont || !res) return;
  cont.innerHTML = "";
  res.className = "analysis-result";
  res.innerHTML = "";
  if (nbtn) nbtn.style.display = "none";
  DATA.scanItems.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "scan-row";
    row.setAttribute("role", "listitem");
    row.id = `sr${i}`;
    const lb = document.createElement("span");
    lb.className = "scan-label";
    lb.textContent = item.label;
    const mid = document.createElement("span");
    if (item.progress !== null && item.progress !== undefined) {
      const w = document.createElement("div");
      w.className = "progress-wrap";
      const f = document.createElement("div");
      f.className = "progress-fill";
      f.id = `pf${i}`;
      f.style.setProperty("--target-width", `${item.progress}%`);
      w.appendChild(f);
      mid.appendChild(w);
    }
    const st = document.createElement("span");
    st.className = `scan-status ${item.status}`;
    st.textContent = item.value;
    row.appendChild(lb);
    row.appendChild(mid);
    row.appendChild(st);
    cont.appendChild(row);
  });
  for (let i = 0; i < DATA.scanItems.length; i++) {
    await wait(300 + i * 55);
    document.getElementById(`sr${i}`)?.classList.add("visible");
    const pf = document.getElementById(`pf${i}`);
    if (pf) setTimeout(() => pf.classList.add("animated"), 80);
  }
  await wait(850);
  const t = document.createElement("span");
  t.className = "result-title";
  t.textContent = DATA.scanResult.title;
  const m = document.createElement("p");
  m.className = "result-msg";
  // m.textContent = DATA.scanResult.message;
  const r2 = document.createElement("p");
  r2.className = "result-reason";
  r2.textContent = DATA.scanResult.reason;
  res.appendChild(t);
  res.appendChild(m);
  res.appendChild(r2);
  res.classList.add("visible");
  State.set("analysisViewed", true);
  await wait(2000);
  if (nbtn) {
    nbtn.style.display = "inline-flex";
    nbtn.classList.add("fade-in");
    setTimeout(() => nbtn.focus(), 100);
  }
}
document
  .getElementById("btn-analysis-next")
  ?.addEventListener("click", () => Stages.go("stage-prank"));

// ── S4: PRANK ────────────────────────────────────────────────
Stages.on("stage-prank", showComplaintList);
function showComplaintList() {
  const body = document.getElementById("support-body");
  if (!body) return;
  body.innerHTML = "";
  const intro = document.createElement("p");
  intro.className = "body-text";
  intro.textContent = "Apa masalahnya?";
  intro.style.cssText = "text-align:center;margin-bottom:var(--space-6,1.5rem)";
  body.appendChild(intro);
  const list = document.createElement("div");
  list.className = "complaint-list";
  body.appendChild(list);
  DATA.complaints.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "complaint-btn fade-in-up";
    btn.style.animationDelay = `${i * 75}ms`;
    btn.textContent = c.label;
    btn.addEventListener("click", () => showTicket(c.id));
    list.appendChild(btn);
  });
}
async function showTicket(id) {
  const resp = DATA.complaintResponses[id];
  const body = document.getElementById("support-body");
  if (!resp || !body) return;
  body.innerHTML = "";
  const ld = document.createElement("div");
  ld.style.cssText =
    "text-align:center;color:var(--text-muted);font-size:var(--text-sm);padding:1rem 0";
  ld.textContent = "Membuat tiket...";
  body.appendChild(ld);
  await wait(750);
  body.innerHTML = "";
  const tk = document.createElement("div");
  tk.className = "ticket fade-in";
  const tid = document.createElement("span");
  tid.className = "ticket-id";
  tid.textContent = `TIKET #${resp.ticketId}`;
  tk.appendChild(tid);
  [
    ["Prioritas", resp.priority],
    ["Diteruskan ke", resp.assignedTo],
    ["Resolusi", resp.resolution],
  ].forEach(([k, v]) => {
    const rw = document.createElement("div");
    rw.className = "ticket-row";
    const ke = document.createElement("span");
    ke.className = "ticket-key";
    ke.textContent = k;
    const ve = document.createElement("span");
    ve.className = "ticket-val";
    ve.textContent = v;
    rw.appendChild(ke);
    rw.appendChild(ve);
    tk.appendChild(rw);
  });
  const nt = document.createElement("div");
  nt.className = "ticket-note";
  nt.textContent = resp.note;
  tk.appendChild(nt);
  body.appendChild(tk);
  const beat = document.createElement("div");
  beat.className = "second-beat";
  beat.style.display = "none";
  beat.innerHTML =
    "🤖 &nbsp; Sistem ini tidak bisa memeluk kamu.<br/>Tapi aku bisa.";
  body.appendChild(beat);
  const bw = document.createElement("div");
  bw.style.cssText =
    "margin-top:1.5rem;display:flex;gap:.75rem;flex-direction:column";
  const sb = document.createElement("button");
  sb.className = "btn-primary";
  sb.textContent = "Lanjutkan →";
  sb.style.cssText = "display:none;width:100%";
  sb.addEventListener("click", () => {
    State.set("prankCompleted", true);
    Stages.go("stage-transition");
  });
  bw.appendChild(sb);
  const bb = document.createElement("button");
  bb.className = "btn-ghost";
  bb.textContent = "← Keluhan lain";
  bb.style.margin = "0 auto";
  bb.addEventListener("click", showComplaintList);
  bw.appendChild(bb);
  body.appendChild(bw);
  await wait(1300);
  beat.style.display = "block";
  beat.classList.add("fade-in");
  await wait(900);
  sb.style.display = "block";
  sb.classList.add("fade-in");
  setTimeout(() => sb.focus(), 100);
}

// ── S5: TRANSITION ───────────────────────────────────────────
Stages.on("stage-transition", runTransition);
async function runTransition() {
  const cont = document.getElementById("transition-lines"),
    nbtn = document.getElementById("btn-transition-next");
  if (!cont) return;
  cont.innerHTML = "";
  if (nbtn) nbtn.style.display = "none";
  const sched = [0, 900, 2000];
  DATA.transitionLines.forEach((text, i) => {
    const p = document.createElement("p");
    p.className = "transition-line";
    p.textContent = text;
    cont.appendChild(p);
    setTimeout(() => p.classList.add("reveal"), sched[i] ?? i * 1000);
  });
  await wait(3500);
  if (nbtn) {
    nbtn.style.display = "inline-flex";
    nbtn.classList.add("fade-in");
    setTimeout(() => nbtn.focus(), 100);
  }
}
document
  .getElementById("btn-transition-next")
  ?.addEventListener("click", () => Stages.go("stage-photos"));
document.getElementById("btn-replay")?.addEventListener("click", () => {
  State.reset();
  location.reload();
});

// ── EASTER EGG ───────────────────────────────────────────────
(() => {
  const K = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let seq = [];
  document.addEventListener("keydown", (e) => {
    seq.push(e.key);
    if (seq.length > K.length) seq.shift();
    if (seq.join(",") === K.join(",")) triggerEgg();
    seq = seq.length > K.length ? seq.slice(-K.length) : seq;
  });
  let tmr;
  const footer = document.getElementById("footer-credit");
  footer?.addEventListener("pointerdown", () => {
    tmr = setTimeout(triggerEgg, 2000);
  });
  footer?.addEventListener("pointerup", () => clearTimeout(tmr));
  footer?.addEventListener("pointerleave", () => clearTimeout(tmr));
  footer?.addEventListener("pointermove", () => clearTimeout(tmr));
  const ov = document.getElementById("easter-egg");
  function triggerEgg() {
    if (!ov) return;
    ov.classList.add("active");
    ov.removeAttribute("aria-hidden");
    ov.addEventListener("click", closeEgg, { once: true });
  }
  function closeEgg() {
    ov?.classList.remove("active");
    ov?.setAttribute("aria-hidden", "true");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && ov?.classList.contains("active")) closeEgg();
  });
  // Auto close after 5s (without preventing manual close)
  ov?.addEventListener(
    "transitionend",
    () => {
      if (ov.classList.contains("active")) setTimeout(closeEgg, 5000);
    },
    { once: false },
  );
})();

// ── S6: PHOTOS ────────────────────────────────────────────────
Stages.on("stage-photos", initPhotos);

function initPhotos() {
  const stage = document.getElementById("stage-photos");
  if (!stage) return;
  stage.scrollTop = 0;
  stage.addEventListener(
    "scroll",
    function hide() {
      stage.classList.add("scrolled");
      stage.removeEventListener("scroll", hide);
    },
    { passive: true },
  );

  buildPhotoGallery();
  observePhotoEls();
}

function buildPhotoGallery() {
  const gallery = document.getElementById("photo-gallery");
  if (!gallery) return;
  gallery.innerHTML = "";

  DATA.photos.forEach((src, i) => {
    if (!src) return;

    const item = document.createElement("div");
    item.className = "photo-item";
    item.setAttribute("role", "listitem");

    const img = document.createElement("img");
    img.className = "photo-img";
    img.src = src;
    img.alt = "";
    img.loading = i < 4 ? "eager" : "lazy";
    img.decoding = "async";

    img.onerror = function () {
      item.remove();
    };

    item.appendChild(img);
    gallery.appendChild(item);
  });
}

function observePhotoEls() {
  const stage = document.getElementById("stage-photos");
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll("#stage-photos .photo-item")
      .forEach((el) => el.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // Light stagger so items don't all pop in simultaneously
          const items = [
            ...document.querySelectorAll("#stage-photos .photo-item"),
          ];
          const idx = items.indexOf(e.target);
          const delay = idx >= 0 ? Math.min(idx * 60, 300) : 0;
          setTimeout(() => e.target.classList.add("in-view"), delay);
          io.unobserve(e.target);
        }
      }),
    { root: stage, rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
  );

  document
    .querySelectorAll("#stage-photos .photo-item")
    .forEach((el) => io.observe(el));
}

document
  .getElementById("btn-photos-next")
  ?.addEventListener("click", () => Stages.go("stage-gifts"));

// ── S7: OPEN WHEN ─────────────────────────────────────────────
Stages.on("stage-gifts", initOpenWhen);

let _owRevealInitialized = false;

function initOpenWhen() {
  const stage = document.getElementById("stage-gifts");
  if (!stage) return;
  stage.scrollTop = 0;
  buildOpenWhen();
  observeOwCards();
  if (!_owRevealInitialized) {
    initOwReveal();
    _owRevealInitialized = true;
  }
}

function buildOpenWhen() {
  const grid = document.getElementById("ow-grid");
  if (!grid) return;
  grid.innerHTML = "";

  DATA.openWhen.forEach((item, i) => {
    const isWide =
      DATA.openWhen.length % 2 !== 0 && i === DATA.openWhen.length - 1;
    const card = document.createElement("button");
    card.className = "ow-card" + (isWide ? " ow-card--wide" : "");
    card.id = `ow-${item.id}`;
    card.setAttribute("role", "listitem");
    card.setAttribute("aria-label", item.condition.replace("\n", " "));
    card.setAttribute("tabindex", "0");

    const condEl = document.createElement("span");
    condEl.className = "ow-card-condition";
    condEl.style.whiteSpace = "pre-line";
    condEl.textContent = item.condition;
    card.appendChild(condEl);

    card.addEventListener("click", () => openOwCard(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openOwCard(item);
      }
    });

    grid.appendChild(card);
  });
}

function openOwCard(item) {
  const rev = document.getElementById("ow-reveal");
  const condEl = document.getElementById("ow-reveal-condition");
  const bodyEl = document.getElementById("ow-reveal-body");
  if (!rev || !condEl || !bodyEl) return;

  condEl.textContent = item.condition.replace("\n", " ");

  bodyEl.innerHTML = "";
  item.message.split("\n\n").forEach((para) => {
    const p = document.createElement("p");
    p.className = "ow-reveal-para";
    p.style.whiteSpace = "pre-line";
    p.textContent = para;
    bodyEl.appendChild(p);
  });

  rev.classList.add("active");
  rev.removeAttribute("aria-hidden");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("ow-reveal-close")?.focus(), 350);
}

function initOwReveal() {
  const rev = document.getElementById("ow-reveal");
  const closeBtn = document.getElementById("ow-reveal-close");

  function closeOwReveal() {
    rev.classList.remove("active");
    rev.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeOwReveal);
  rev?.addEventListener("click", (e) => {
    if (e.target === rev) closeOwReveal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && rev?.classList.contains("active"))
      closeOwReveal();
  });
}

function observeOwCards() {
  const stage = document.getElementById("stage-gifts");
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".ow-card")
      .forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const cards = [...document.querySelectorAll(".ow-card")];
          const idx = cards.indexOf(e.target);
          e.target.style.animationDelay = `${idx * 80}ms`;
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      }),
    { root: stage, rootMargin: "0px 0px -5% 0px", threshold: 0.08 },
  );
  document.querySelectorAll(".ow-card").forEach((el) => io.observe(el));
}

document
  .getElementById("btn-gifts-next")
  ?.addEventListener("click", () => Stages.go("stage-letter"));

// ── S8: LOVE LETTER ──────────────────────────────────────────
Stages.on("stage-letter", initLetter);

function initLetter() {
  // Reset scroll
  const scrollEl = document.getElementById("letter-scroll");
  if (scrollEl) {
    scrollEl.scrollTop = 0;
    scrollEl.classList.remove("visible");
  }

  // Reset envelope
  const envBtn = document.getElementById("letter-envelope-btn");
  if (envBtn) envBtn.classList.remove("opening");

  // Reset open button
  const openBtn = document.getElementById("btn-open-letter");
  if (openBtn) {
    openBtn.disabled = false;
    openBtn.style.opacity = "";
  }

  // Reset CTA
  const cta = document.getElementById("letter-cta");
  if (cta) {
    cta.classList.remove("visible");
    cta.setAttribute("aria-hidden", "true");
  }

  // Reset audio
  stopLetterAudio();

  // If already opened: skip prelude, go straight to letter
  if (State.get("letterOpened")) {
    buildLetterContent();
    showLetterContent(false);
    return;
  }
  runLetterPrelude();
}

async function runLetterPrelude() {
  const container = document.getElementById("letter-prelude");
  if (!container) return;
  container.innerHTML = "";
  container.style.cssText = "";

  const lines = [
    { text: "Satu hal lagi.", muted: false },
    { text: "Kali ini\nnggak ada sistem.", muted: true },
    { text: "Nggak ada analisis.", muted: true },
    { text: "Cuma aku.", muted: false },
    { text: "Untuk kamu.", muted: false, warm: true },
  ];

  let delay = 300;
  for (const ln of lines) {
    const el = document.createElement("p");
    el.className =
      "letter-prelude-line" + (ln.muted ? " letter-prelude-line--muted" : "");
    if (ln.warm) {
      el.style.fontStyle = "italic";
      el.style.color = "var(--accent-warm)";
    }
    el.textContent = ln.text;
    container.appendChild(el);
    await wait(delay);
    el.classList.add("reveal");
    delay = ln.muted ? 850 : 1100;
  }

  await wait(1500);
  container.style.transition = "opacity 0.5s ease";
  container.style.opacity = "0";
  await wait(520);
  container.style.display = "none";

  const envWrap = document.getElementById("letter-envelope-wrap");
  if (envWrap) {
    envWrap.setAttribute("aria-hidden", "false");
    envWrap.classList.add("visible");
    setTimeout(() => document.getElementById("btn-open-letter")?.focus(), 400);
  }
}

function buildLetterContent() {
  const L = DATA.letter;
  const dateEl = document.getElementById("letter-date");
  const salEl = document.getElementById("letter-salutation");
  const bodyEl = document.getElementById("letter-body");
  const closeEl = document.getElementById("letter-closing-text");
  const sigEl = document.getElementById("letter-signature");

  if (dateEl) dateEl.textContent = L.date;
  if (salEl) salEl.textContent = L.salutation;
  if (closeEl) closeEl.textContent = L.closing;
  if (sigEl) sigEl.textContent = L.signature;

  if (bodyEl) {
    bodyEl.innerHTML = "";
    L.paragraphs.forEach((para) => {
      const p = document.createElement("p");
      p.className = "letter-para";
      p.textContent = para;
      bodyEl.appendChild(p);
    });
    if (L.coreLine) {
      const core = document.createElement("p");
      core.className = "letter-para letter-para--core";
      core.textContent = L.coreLine;
      bodyEl.appendChild(core);
    }
  }
}

function showLetterContent(animate) {
  const prelude = document.getElementById("letter-prelude");
  if (prelude) prelude.style.display = "none";

  const envWrap = document.getElementById("letter-envelope-wrap");
  if (envWrap) {
    envWrap.classList.remove("visible");
    envWrap.setAttribute("aria-hidden", "true");
  }

  const scrollEl = document.getElementById("letter-scroll");
  if (scrollEl) {
    scrollEl.classList.add("visible");
    scrollEl.scrollTop = 0;
    const readDelay = animate ? 4500 : 1200;
    setTimeout(() => {
      const cta = document.getElementById("letter-cta");
      if (cta) {
        cta.classList.add("visible");
        cta.setAttribute("aria-hidden", "false");
      }
    }, readDelay);
  }

  setupLetterAudio();
  State.set("letterOpened", true);
}

function openLetter() {
  const envBtn = document.getElementById("letter-envelope-btn");
  const openBtn = document.getElementById("btn-open-letter");
  if (openBtn) {
    openBtn.disabled = true;
    openBtn.style.opacity = "0.4";
  }
  if (envBtn) envBtn.classList.add("opening");

  setTimeout(() => {
    buildLetterContent();
    showLetterContent(true);
  }, 480);
}

document
  .getElementById("btn-open-letter")
  ?.addEventListener("click", openLetter);
document
  .getElementById("letter-envelope-btn")
  ?.addEventListener("click", openLetter);
document
  .getElementById("letter-envelope-btn")
  ?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLetter();
    }
  });

// Audio
let _audioEl = null;
let _audioPlaying = false;

function setupLetterAudio() {
  const wrap = document.getElementById("letter-audio-wrap");
  const btn = document.getElementById("btn-letter-audio");
  const labelEl = document.getElementById("btn-audio-label");
  const el = document.getElementById("letter-audio-el");
  const cfg = DATA.letterAudio;
  if (!wrap || !btn || !cfg) return;

  wrap.setAttribute("aria-hidden", "false");

  if (!cfg.enabled) {
    btn.disabled = true;
    btn.setAttribute("aria-label", cfg.label || "Dengarkan aku");
    if (labelEl) labelEl.textContent = cfg.label || "Dengarkan aku";
    return;
  }

  el.src = cfg.src;
  _audioEl = el;
  btn.disabled = false;
  if (labelEl) labelEl.textContent = cfg.label || "Dengarkan aku";

  el.addEventListener("ended", () => {
    _audioPlaying = false;
    btn.classList.remove("playing");
    const icon = btn.querySelector(".btn-audio-icon");
    if (icon) icon.textContent = "▶";
    if (labelEl) labelEl.textContent = cfg.label || "Dengarkan aku";
  });

  btn.addEventListener("click", () => {
    if (!_audioEl) return;
    if (_audioPlaying) {
      _audioEl.pause();
      _audioPlaying = false;
      btn.classList.remove("playing");
      const icon = btn.querySelector(".btn-audio-icon");
      if (icon) icon.textContent = "▶";
      if (labelEl) labelEl.textContent = cfg.label || "Dengarkan aku";
    } else {
      _audioEl
        .play()
        .then(() => {
          _audioPlaying = true;
          btn.classList.add("playing");
          const icon = btn.querySelector(".btn-audio-icon");
          if (icon) icon.textContent = "⏸";
          if (labelEl) labelEl.textContent = "Berhenti";
        })
        .catch(() => {
          btn.disabled = true;
        });
    }
  });
}

function stopLetterAudio() {
  if (_audioEl && _audioPlaying) {
    _audioEl.pause();
  }
  _audioPlaying = false;
  _audioEl = null;
  const btn = document.getElementById("btn-letter-audio");
  const icon = btn?.querySelector(".btn-audio-icon");
  const lbl = document.getElementById("btn-audio-label");
  if (btn) btn.classList.remove("playing");
  if (icon) icon.textContent = "▶";
  if (lbl && DATA.letterAudio)
    lbl.textContent = DATA.letterAudio.label || "Dengarkan aku";
}

// ── FINAL MUSIC ───────────────────────────────────────────────
// Audio hanya dipicu dari interaksi Stage 8 (btn-letter-next).
// Tidak ada autoplay. Satu audio element, satu play call.
let _finalMusicStarted = false;

function startFinalMusic() {
  if (_finalMusicStarted) return;
  const el = document.getElementById("finalMusic");
  if (!el) return;
  _finalMusicStarted = true;
  el.currentTime = 0;
  const p = el.play();
  if (p !== undefined) {
    p.catch((err) => {
      console.warn("Final music playback blocked:", err);
    });
  }
}

document.getElementById("btn-letter-next")?.addEventListener("click", () => {
  State.set("letterRead", true);
  stopLetterAudio();
  // Trigger music — user interaction happens here, before stage transition
  startFinalMusic();
  // Small delay so music has time to start before transition
  setTimeout(() => Stages.go("stage-final"), 300);
});

// ── S9: FINAL REVEAL ─────────────────────────────────────────
Stages.on("stage-final", initFinal);

async function initFinal() {
  const container = document.getElementById("final-inner");
  if (!container) return;
  container.innerHTML = "";
  State.set("finalRevealed", true);

  const FR = DATA.finalReveal;

  // Small breath after transition
  await wait(400);

  // Birthday headline — the only thing that matters
  const bday = document.createElement("div");
  bday.className = "final-birthday";
  bday.innerHTML =
    esc(FR.birthdayText) + "<br><em>" + esc(FR.birthdayName) + "</em>";
  container.appendChild(bday);
  await wait(60);
  bday.classList.add("visible");
}

// ── BOOT ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".stage")
    .forEach((s) => s.setAttribute("aria-hidden", "true"));
  Stages.go("stage-access");
});
