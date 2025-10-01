// Nomor WA
const OWNER_WA_ORDER="6285119323140";
const OWNER_WA_FEEDBACK="6283849745507";

// Produk
const PRODUCTS=[
  {id:"r1", category:"tiktok", name:"suntik follower tiktok", price:3000, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", category:"tiktok", name:"suntik viewer tiktok", price:3000, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", category:"tiktok", name:"suntik like tiktok", price:3000, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", category:"tiktok", name:"suntik komentar random tiktok", price:3000, image:"assets/product/SUNTIKTT.jpg"},
  {id:"r2", category:"tiktok", name:"suntik live tiktok", price:3000, image:"assets/product/SUNTIKTT.jpg"},
  {id:"v1", category:"instagram", name:"follower ig", price:7000, image:"https://qu.ax/vnZKg.gif"},
  {id:"v2", category:"instagram", name:"viewer ig", price:3000, image:"assets/product/fot1.jpg"},
  {id:"v2", category:"instagram", name:"like ig", price:3000, image:"assets/product/fot2.jpg"},
  {id:"s1", category:"saluran", name:"pengikut wa", price:5000, image:"assets/product/fot3.jpg"},
  {id:"s1", category:"saluran", name:"reaksi wa 👍❤😂😮😥🙏", price:4000, image:"assets/product/fot4.jpg"},
  {id:"s2", category:"aplikasi", name:"aplikasi qris no ktp", price:3000, image:"assets/product/qrisnoktp.jpg"},
  {id:"c1", category:"website", name:"portofolio diri", price:80000, image:"assets/product/fot6.jpg"},
  {id:"c2", category:"website", name:"pendaftaran & pengenalan", price:200000, image:"assets/product/webpengenalan.jpg"},
  {id:"c2", category:"website", name:"penjualanan barang,produk dan jasa", price:20000, image:"assets/product/webpenjualanan.jpg"},
  {id:"c2", category:"website", name:"source code", price:40000, image:"assets/product/kode.jpg"},
  {id:"o1", category:"akun bloodstrike", name:"polosan mele", price:25000, image:"assets/product/akun3.jpg"},
  {id:"o2", category:"akun bloodstrike", name:"zero nullifer dan 3 ultra lainnya", price:15000, image:"assets/product/akun1.jpg"},
  {id:"o2", category:"akun bloodstrike", name:"polosan nacho ultra/dj prindapan", price:15000, image:"assets/product/akun2.jpg"},
  {id:"g1", category:"BOT whatsapp", name:"bot whatsapp jaga grup 2 minggu 1 grup", price:5000, image:"assets/product/sewa bot wa.jpg"},
  {id:"g1", category:"BOT whatsapp", name:"bot whatsapp jaga grup 2 minggu 2 grup", price:8000, image:"assets/product/sewa bot wa.jpg"},
  {id:"g2", category:"aplikasi", name:"apk ban/unban wa1", price:7000, image:"assets/product/apkban1.jpg"},
  {id:"g2", category:"aplikasi", name:"apk ban/unban wa2", price:7000, image:"assets/product/apkban2.jpg"},
  {id:"g2", category:"aplikasi", name:"apk virus/spm", price:15000, image:"assets/product/elite_logo.png"},
  {id:"g2", category:"nokos", name:"nokos indo", price:7000, image:"assets/product/nokos indo.jpg"},
];


// References
const chatMessages=document.getElementById("chatMessages");
const chatButtons=document.getElementById("chatButtons");

// Utility
function toWA(number,text){return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;}

// Bot message
function botMsg(text,imgSrc,waLink){
  const div=document.createElement("div"); div.className="botMsg"; div.innerHTML=text;
  if(imgSrc){const img=document.createElement("img"); img.src=imgSrc; div.appendChild(img);}
  if(waLink){const a=document.createElement("a"); a.href=waLink; a.target="_blank"; a.textContent="konsultasi via WA"; div.appendChild(a);}
  chatMessages.appendChild(div); chatMessages.scrollTop=chatMessages.scrollHeight;
}

// Typing effect
function botTyping(text,callback){
  const div=document.createElement("div"); div.className="botMsg"; div.textContent="...";
  chatMessages.appendChild(div); chatMessages.scrollTop=chatMessages.scrollHeight;
  setTimeout(()=>{div.innerHTML=text; chatMessages.scrollTop=chatMessages.scrollHeight; if(callback)callback();},700);
}

// User message
function userMsg(text){const div=document.createElement("div"); div.className="userMsg"; div.textContent=text; chatMessages.appendChild(div); chatMessages.scrollTop=chatMessages.scrollHeight;}

// Clear temp buttons
function clearTempBtns(){const temp=document.getElementById("tempOrderBtns"); if(temp) temp.remove();}

// Category buttons
function showCategoryButtons(){
  clearTempBtns();
  const categories=[...new Set(PRODUCTS.map(p=>p.category))];
  const tempBtns=document.createElement("div"); tempBtns.id="tempOrderBtns";
  categories.forEach(cat=>{
    const b=document.createElement("button"); b.textContent=cat; b.dataset.category=cat;
    b.addEventListener("click",()=>showProductButtons(cat)); tempBtns.appendChild(b);
  });
  chatButtons.appendChild(tempBtns);
}

// Product buttons
function showProductButtons(category){
  clearTempBtns();
  const tempBtns=document.createElement("div"); tempBtns.id="tempOrderBtns";
  PRODUCTS.filter(p=>p.category===category).forEach(p=>{
    const b=document.createElement("button"); b.textContent=p.name; b.dataset.id=p.id;
    b.addEventListener("click",()=>orderProduct(p)); tempBtns.appendChild(b);
  });
  chatButtons.appendChild(tempBtns);
}

// Order product
function orderProduct(product){
  botMsg(`<b>${product.name}</b><br>Harga: Rp${product.price.toLocaleString()}<br>Kategori: ${product.category}`,product.image,toWA(OWNER_WA_ORDER,`Halo, saya ingin memesan ${product.name}`));
  clearTempBtns();
}

// Recommendation
function recommendProducts(option){
  let filtered=[];
  if(option==="best") filtered=PRODUCTS.sort((a,b)=>b.price-a.price).slice(0,3);
  if(option==="cheap") filtered=PRODUCTS.sort((a,b)=>a.price-b.price).slice(0,3);
  if(option==="latest") filtered=PRODUCTS.slice(-3);
  filtered.forEach(p=>botMsg(`<b>${p.name}</b><br>Rp${p.price.toLocaleString()}`,p.image,toWA(OWNER_WA_ORDER,`Halo, saya ingin memesan ${p.name}`)));
}

// Main button actions
chatButtons.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const action=btn.dataset.action;
    userMsg(btn.textContent);
    switch(action){
      case "stok": botTyping("Mau kirim WA untuk menanyakan stok?",()=>botMsg("Klik tombol WA untuk chat.",null,toWA(OWNER_WA_ORDER,"Halo, saya ingin menanyakan tentang produk."))); break;
      case "harga": botTyping("Mau kirim WA untuk info harga?",()=>botMsg("Klik tombol WA untuk chat.",null,toWA(OWNER_WA_ORDER,"Halo, saya ingin menanyakan harga produk."))); break;
      case "order": botTyping("Pilih kategori produk:",showCategoryButtons); break;
      case "admin": botTyping("Chat langsung admin:",()=>botMsg("Klik tombol WA untuk chat.",null,toWA(OWNER_WA_FEEDBACK,"Halo min, saya mau bertanya."))); break;
      case "faq": botTyping("FAQ:\n💳 Pembayaran: Transfer/ E-wallet/dana/qris\n SiCepat\n🛡 Garansi: 1 minggu\n↩️ NO Refund: Chat admin"); break;
      case "produk": PRODUCTS.forEach(p=>botMsg(`<b>${p.name}</b><br>Rp${p.price.toLocaleString()}`,p.image,toWA(OWNER_WA_ORDER,`Halo, saya ingin memesan ${p.name}`))); break;
      case "rekomendasi": recommendProducts("best"); break;
      case "rating": botTyping("Berikan rating 1-5 ⭐:",()=>botMsg("Klik tombol WA untuk rating.",null,toWA(OWNER_WA_FEEDBACK,"Halo, saya ingin memberikan rating produk."))); break;
      default: botTyping("Maaf, saya belum mengerti.");
    }
  });
});
