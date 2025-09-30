const OWNER_WA_ORDER = "628388521107";     // Pemesanan & keranjang/wishlist
const OWNER_WA_FEEDBACK = "6283849745507"; // Feedback & rating & chat owner

const SOCIALS = {
  instagram: "https://instagram.com/yourshop",
  tiktok: "https://tiktok.com/@yourshop",
  x: "https://x.com/yourshop",
  github: "https://github.com/vyx300"
};

const PRODUCTS = [
  {id:"r1", brand:"tiktok", name:"suntik follower tiktok", price:3000, rating:4.7, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", brand:"tiktok", name:"suntik viewer tiktok", price:3000, rating:4.5, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", brand:"tiktok", name:"suntik like tiktok", price:3000, rating:4.5, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", brand:"tiktok", name:"suntik komentar random tiktok", price:3000, rating:4.5, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", brand:"tiktok", name:"suntik live tiktok", price:3000, rating:4.5, image:"assets/product/SUNTIKTT.jpg"},
  {id:"v1", brand:"instagram", name:"follower instagram", price:7000, rating:4.6, image:"https://qu.ax/vnZKg.gif"},
  {id:"v2", brand:"instagram", name:"viewer instagram", price:3000, rating:4.4, image:"assets/product/fot1.jpg"},
  {id:"v2", brand:"instagram", name:"like instagram", price:3000, rating:4.4, image:"assets/product/fot2.jpg"},
  {id:"s1", brand:"saluran", name:"pengikut saluran whatsapp", price:5000, rating:4.6, image:"assets/product/fot3.jpg"},
  {id:"s1", brand:"saluran", name:"reaksi post saluran👍❤😂😮😥🙏", price:4000, rating:4.6, image:"assets/product/fot4.jpg"},
  {id:"s2", brand:"aplikasi", name:"aplikasi qris no ktp", price:3000, rating:4.2, image:"assets/product/qrisnoktp.jpg"},
  {id:"c1", brand:"website", name:"web portofolio diri", price:40000, rating:4.8, image:"assets/product/fot6.jpg"},
  {id:"c2", brand:"website", name:"web pendaftaran & pengenalan", price:200000, rating:4.7, image:"assets/product/webpengenalan.png"},
  {id:"c2", brand:"website", name:"web penjualanan barang,produk dan jasa", price:200000, rating:4.7, image:"assets/product/Webpenjualanan.jpg"},
  {id:"c2", brand:"website", name:"source code", price:40000, rating:4.7, image:"assets/product/Kode.jpg"},
  {id:"o1", brand:"akun bloodstrike", name:"akun polosan mele", price:25000, rating:4.6, image:"assets/product/akun3.jpg"},
  {id:"o2", brand:"akun bloodstrike", name:"akun zero nullifer dan 3 ultra lainnya", price:15000, rating:4.3, image:"assets/product/akun1.jpg"},
  {id:"o2", brand:"akun bloodstrike", name:"akun polosan nacho ultra/dj prindapan", price:15000, rating:4.3, image:"assets/product/akun2.jpg"},
  {id:"g1", brand:"BOT whatsapp", name:"sewa bot whatsapp jaga grup 2 minggu 1 grup", price:5000, rating:4.4, image:"assets/product/sewa bot wa.jpg"},
  {id:"g1", brand:"BOT whatsapp", name:"sewa bot whatsapp jaga grup 2 minggu 2 grup", price:8000, rating:4.4, image:"assets/product/sewa bot wa.jpg"},
  {id:"g2", brand:"aplikasi", name:"aplikasi ban/unban wa1", price:7000, rating:4.5, image:"assets/product/apkban1.jpg"},
  {id:"g2", brand:"aplikasi", name:"aplikasi ban/unban wa2", price:7000, rating:4.5, image:"assets/product/apkban2.jpg"},
  {id:"g2", brand:"aplikasi", name:"aplikasi virus/spm 1", price:15000, rating:4.5, image:"assets/product/elite_logo.png"},
  {id:"g2", brand:"aplikasi", name:"aplikasi virus/phising", price:15000, rating:4.5, image:"assets/product/elite_logo.png"},
  {id:"g2", brand:"aplikasi", name:"aplikasi virus/mlw", price:15000, rating:4.5, image:"assets/product/elite_logo.png"},
  {id:"g2", brand:"aplikasi", name:"aplikasi virus/spyw", price:15000, rating:4.5, image:"assets/product/elite_logo.png"},
  {id:"g2", brand:"nokos", name:"nokos indo", price:6000, rating:4.5, image:"assets/product/nokos indo.jpg"},
];

/* ===========================
   Helpers
=========================== */
const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));
const fmt = n => new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).format(n);
const toWA = (number, text) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
const getParam = (k) => new URLSearchParams(location.search).get(k);

/* ===========================
   State (localStorage)
=========================== */
const LS = {
  themeKey: "rayavape.theme",
  cartKey: "rayavape.cart",
  wishKey: "rayavape.wishlist",
};
const getCart = () => JSON.parse(localStorage.getItem(LS.cartKey) || "[]");
const setCart = (v) => localStorage.setItem(LS.cartKey, JSON.stringify(v));
const getWish = () => JSON.parse(localStorage.getItem(LS.wishKey) || "[]");
const setWish = (v) => localStorage.setItem(LS.wishKey, JSON.stringify(v));

/* ===========================
   Theme
=========================== */
function applyTheme(saved){
  const isLight = saved === "light";
  document.documentElement.classList.toggle("light", isLight);
}
function initThemeToggle(){
  const saved = localStorage.getItem(LS.themeKey) || "dark";
  applyTheme(saved);
  const btn = $("#themeToggle");
  if(btn){
    btn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light");
      localStorage.setItem(LS.themeKey, isLight ? "light" : "dark");
    });
  }
}

/* ===========================
   Navbar / Basic
=========================== */
function initBasics(){
  const yearEl = $("#year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const waTop = $("#waBtnTop");
  const waHero = $("#waBtnHero");
  const msg = "Halo min, saya ingin tanya tentang harga.";
  if(waTop) waTop.href = toWA(OWNER_WA_FEEDBACK, msg);
  if(waHero) waHero.href = toWA(OWNER_WA_FEEDBACK, msg);

  // Socials
  if($("#igLink")) $("#igLink").href = SOCIALS.instagram;
  if($("#tiktokLink")) $("#tiktokLink").href = SOCIALS.tiktok;
  if($("#xLink")) $("#xLink").href = SOCIALS.x;
  if($("#githubLink")) $("#githubLink").href = SOCIALS.github;

  // Hamburger menu
  const hamb = $("#hamburger");
  if(hamb){
    hamb.addEventListener("click", () => {
      const tb = $(".toolbar");
      tb.style.display = tb.style.display === "flex" ? "none" : "flex";
    });
  }
}

/* ===========================
   Reveal on Scroll
=========================== */
function initReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, {threshold:.12});
  $$(".reveal").forEach(el => io.observe(el));
}

/* ===========================
   Scroll to Top
=========================== */
function initScrollTop(){
  const btn = $("#scrollTop");
  if(!btn) return;
  window.addEventListener("scroll", ()=>{
    btn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  btn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
}

/* ===========================
   Filters & Chips
=========================== */
function initBrands(){
  const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort();
  const filterBrand = $("#filterBrand");
  if(filterBrand){
    brands.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b; opt.textContent = b;
      filterBrand.appendChild(opt);
    });
  }
  const chips = $("#brandChips");
  if(chips){
    brands.forEach(b => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.textContent = b;
      chip.addEventListener("click", ()=>{
        $("#filterBrand").value = b;
        renderProducts();
        $$(".chip", chips).forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        document.getElementById("products").scrollIntoView({behavior:"smooth", block:"start"});
      });
      chips.appendChild(chip);
    });
  }
}

/* ===========================
   Wishlist & Cart
=========================== */
function updateBadges(){
  const cart = getCart();
  const wish = getWish();
  if($("#cartCount")) $("#cartCount").textContent = cart.reduce((a,b)=>a+b.qty,0);
  if($("#wishCount")) $("#wishCount").textContent = wish.length;
}
function addToCart(id){
  const cart = getCart();
  const idx = cart.findIndex(x=>x.id===id);
  if(idx>-1){ cart[idx].qty += 1; } else { cart.push({id, qty:1}); }
  setCart(cart); updateBadges();
  alert("Ditambahkan ke keranjang.");
}
function addToWish(id){
  const wish = new Set(getWish());
  if(wish.has(id)){ wish.delete(id); alert("Dihapus dari wishlist."); }
  else { wish.add(id); alert("Ditambahkan ke wishlist."); }
  setWish([...wish]); updateBadges();
}
function waOrder(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const text = `Halo Min, saya ingin memesan:\n- Produk: ${p.name}\n- Merek: ${p.brand}\n- Harga: ${fmt(p.price)}\n\nMohon info ketersediaan, tahap-tahap & payment.`;
  window.open(toWA(OWNER_WA_ORDER, text), "_blank"); // pakai nomor order
}

/* ===========================
   Render Products
=========================== */
function productCard(p){
  const wish = new Set(getWish());
  return `<article class="card reveal">
    <img class="card-img" src="${p.image}" alt="${p.name}"/>
    <div class="card-body">
      <div class="card-title">
        <h3>${p.name}</h3>
        <span class="price">${fmt(p.price)}</span>
      </div>
      <div class="muted">${p.brand} • ⭐ ${p.rating.toFixed(1)}</div>
      <div class="actions">
        <a class="btn ghost" href="product.html?id=${p.id}">Detail</a>
        <button class="btn" data-add="${p.id}">Tambah</button>
        <button class="btn" data-wa="${p.id}">Beli via WA</button>
        <button class="btn ${wish.has(p.id) ? 'primary' : 'ghost'}" data-wish="${p.id}">💖</button>
      </div>
    </div>
  </article>`;
}
function bindCardButtons(scope=document){
  $$("[data-add]", scope).forEach(b=>b.addEventListener("click", ()=> addToCart(b.dataset.add)));
  $$("[data-wish]", scope).forEach(b=>b.addEventListener("click", ()=> { addToWish(b.dataset.wish); renderProducts(); }));
  $$("[data-wa]", scope).forEach(b=>b.addEventListener("click", ()=> waOrder(b.dataset.wa)));
}
function currentFilters(){
  const q = $("#searchInput")?.value.trim().toLowerCase() || "";
  const brand = $("#filterBrand")?.value || "";
  const fr = $("#filterRating")?.value || "";
  const sp = $("#sortPrice")?.value || "";
  const sr = $("#sortRating")?.value || "";
  return {q, brand, fr, sp, sr};
}
function applyFilters(list){
  const {q, brand, fr, sp, sr} = currentFilters();
  let filtered = list.filter(p => {
    const hit = (p.name + " " + p.brand).toLowerCase().includes(q);
    const okBrand = !brand || p.brand === brand;
    const okRating = !fr || p.rating >= parseFloat(fr);
    return hit && okBrand && okRating;
  });
  if(sp){ filtered.sort((a,b)=> sp==='asc' ? a.price-b.price : b.price-a.price); }
  if(sr){ filtered.sort((a,b)=> sr==='asc' ? a.rating-b.rating : b.rating-a.rating); }
  return filtered;
}
function renderProducts(){
  const root = document.getElementById("products");
  if(!root) return;
  const html = applyFilters(PRODUCTS).map(productCard).join("");
  root.innerHTML = html || `<p class="muted">Produk tidak ditemukan. Coba ubah filter.</p>`;
  bindCardButtons(root);
  initReveal();
}
function initFilters(){
  ["searchInput","filterBrand","filterRating","sortPrice","sortRating"].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener("input", renderProducts);
  });
}

/* ===========================
   Detail Page
=========================== */
function renderDetail(){
  const wrap = document.getElementById("detail");
  if(!wrap) return;
  const id = getParam("id");
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p){ wrap.innerHTML = "<p>Produk tidak ditemukan.</p>"; return; }
  wrap.innerHTML = `
    <div class="gallery">
      <img src="${p.image}" alt="${p.name}"/>
    </div>
    <div class="p-info">
      <h1 class="p-title">${p.name}</h1>
      <div class="p-meta">${p.brand} • ⭐ ${p.rating.toFixed(1)}</div>
      <div class="price">${fmt(p.price)}</div>
      <p class="muted">Deskripsi : kami menyediakan layanan lengkap mulai dari jasa suntik sosmed, jual akun blood strike, hingga sewa bot whatsapp dengan fitur canggih yang totalnya 1628 fitur!</p>
      <p class="muted"> suntik follower tiktok (profile bot)mulai dari: harga 3k = 100 followers sd, 38k = 4.000 followers(profile bot)<p>
      <p class="muted"> suntik follower tiktok indonesia mulai dari: harga 10k = 100 followers sd, 85k = 1.000 followers(profile indonesia)<p>
      <p class="muted"> suntik views tiktok mulai dari: harga 3k = 100.000 views sd, 27k = 2.000.000 views<p>
      <p class="muted"> suntik like tiktok mulai dari: harga 3k = 10.000 views sd, 27k = 1.000.000 views(profile bot)<p>
      <p class="muted"> suntik like tiktok indonesia mulai dari: harga 6k = 1.000 views sd, 35k = 7.000 views(profile indonesia)<p>
      <div class="p-cta">
        <button class="btn primary" id="buyWA">Beli via WA</button>
        <button class="btn" id="addCart">Tambah ke Keranjang</button>
        <button class="btn ghost" id="toggleWish">Wishlist ♡</button>
      </div>
      <a class="btn ghost" href="index.html#products">← Kembali ke produk</a>
    </div>
  `;
  $("#buyWA").addEventListener("click", ()=> waOrder(p.id));
  $("#addCart").addEventListener("click", ()=> addToCart(p.id));
  $("#toggleWish").addEventListener("click", ()=> addToWish(p.id));
  initReveal();
}

/* ===========================
   Feedback Form
=========================== */
function initFeedback(){
  const form = $("#feedbackForm");
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $("#fbName").value.trim();
    const rating = $("#fbRating").value.trim();
    const message = $("#fbMessage").value.trim();
    const text = `Feedback Pelanggan rayab store\nNama: ${name || "-"}\nRating: ${rating}\nPesan: ${message}`;
    window.open(toWA(OWNER_WA_FEEDBACK, text), "_blank");
    form.reset();
  });
}

/* ===========================
   Top Buttons (Wishlist / Cart)
=========================== */
function initTopButtons(){
  $("#wishlistBtn")?.addEventListener("click", ()=>{
    const wish = new Set(getWish());
    if(!wish.size){ alert("Wishlist kosong."); return; }
    const items = PRODUCTS.filter(p=> wish.has(p.id));
    const text = "Wishlist saya:\n" + items.map(x=>`- ${x.name} (${fmt(x.price)})`).join("\n");
    window.open(toWA(OWNER_WA_ORDER, text), "_blank");
  });

  $("#cartBtn")?.addEventListener("click", ()=>{
    const cart = getCart();
    if(!cart.length){ alert("Keranjang kosong."); return; }
    const items = cart.map(c => {
      const p = PRODUCTS.find(x=>x.id===c.id);
      return `- ${p.name} x ${c.qty} = ${fmt(p.price*c.qty)}`;
    }).join("\n");
    const total = cart.reduce((sum, c)=>{
      const p = PRODUCTS.find(x=>x.id===c.id); return sum + p.price*c.qty;
    },0);
    const text = `Order Keranjang rayab store:\n${items}\n\nTotal: ${fmt(total)}`;
    window.open(toWA(OWNER_WA_ORDER, text), "_blank");
  });
}
/* ===========================
   Boot
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initBasics();
  initReveal();
  initScrollTop();
  initBrands();
  initFilters();
  renderProducts();
  renderDetail();
  initFeedback();
  initTopButtons();
  updateBadges();
});
