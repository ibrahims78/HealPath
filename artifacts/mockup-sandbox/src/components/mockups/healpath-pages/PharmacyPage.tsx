import { useState } from "react";
import { Search, ShoppingCart, Pill, Plus, Minus, X, CreditCard, MapPin } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, type Lang } from "./shared/UnifiedComponents";

const MEDICINES = {
  ar: [
    { id:1, name:"باراسيتامول 500mg", sci:"Paracetamol", price:2500, inStock:true, cat:"مسكنات" },
    { id:2, name:"أموكسيسيلين 250mg", sci:"Amoxicillin", price:4500, inStock:true, cat:"مضادات حيوية" },
    { id:3, name:"فيتامين C 1000mg", sci:"Ascorbic Acid", price:3500, inStock:false, cat:"فيتامينات" },
    { id:4, name:"أسبرين 100mg", sci:"Aspirin", price:1500, inStock:true, cat:"قلب وضغط" },
    { id:5, name:"أملوديبين 5mg", sci:"Amlodipine", price:5500, inStock:true, cat:"قلب وضغط" },
    { id:6, name:"ميتفورمين 500mg", sci:"Metformin", price:3000, inStock:true, cat:"سكري" },
  ],
  en: [
    { id:1, name:"Paracetamol 500mg", sci:"Paracetamol", price:2500, inStock:true, cat:"Painkillers" },
    { id:2, name:"Amoxicillin 250mg", sci:"Amoxicillin", price:4500, inStock:true, cat:"Antibiotics" },
    { id:3, name:"Vitamin C 1000mg", sci:"Ascorbic Acid", price:3500, inStock:false, cat:"Vitamins" },
    { id:4, name:"Aspirin 100mg", sci:"Aspirin", price:1500, inStock:true, cat:"Cardiology" },
    { id:5, name:"Amlodipine 5mg", sci:"Amlodipine", price:5500, inStock:true, cat:"Cardiology" },
    { id:6, name:"Metformin 500mg", sci:"Metformin", price:3000, inStock:true, cat:"Diabetes" },
  ]
};

const pillColors = ["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#06B6D4"];

export function PharmacyPage() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";

  const [activeTab, setActiveTab] = useState(lang==="ar"?"الكل":"All");
  const [cartOpen, setCartOpen] = useState(true);
  const [delivery, setDelivery] = useState(lang==="ar"?"توصيل":"delivery");

  const cats = lang==="ar" ? ["الكل","مسكنات","مضادات حيوية","فيتامينات","قلب وضغط","سكري"] : ["All","Painkillers","Antibiotics","Vitamins","Cardiology","Diabetes"];
  const meds = MEDICINES[lang];

  const cartItems = [
    { ...meds[0], qty:2 },
    { ...meds[1], qty:1 },
    { ...meds[3], qty:1 },
  ];
  const subtotal = cartItems.reduce((s,i) => s+i.price*i.qty, 0);
  const deliveryFee = delivery==="delivery" ? 1500 : 0;

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bgSecondary, color:colors.text, minHeight:"100vh", fontFamily:font }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="pharmacy" />

      <div style={{ display:"flex", position:"relative" }}>
        {/* Main */}
        <main style={{ flex:1, marginInlineEnd: cartOpen?320:0, transition:"margin 0.3s", minHeight:"calc(100vh - 64px)", overflowY:"auto" }}>
          <div style={{ maxWidth:900, margin:"0 auto", padding:"32px 24px" }}>
            {/* Hero banner */}
            <div style={{ background:"linear-gradient(135deg,#1A1A2E,#0F3460)", borderRadius:20, padding:"32px 28px", marginBottom:28, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(0,102,255,0.15) 1px,transparent 1px)", backgroundSize:"20px 20px", pointerEvents:"none" }} />
              <h1 style={{ color:"white", fontSize:26, fontWeight:800, marginBottom:8, position:"relative" }}>{lang==="ar"?"الصيدلية الإلكترونية":"E-Pharmacy"}</h1>
              <p style={{ color:"#93C5FD", fontSize:15, marginBottom:24, position:"relative" }}>{lang==="ar"?"اطلب دواءك بسهولة وأمان — توصيل سريع لجميع المناطق":"Order your medicine safely — fast delivery everywhere"}</p>
              <div style={{ position:"relative", display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ flex:1, position:"relative" }}>
                  <Search size={18} color="#9CA3AF" style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", ...(isRtl?{right:14}:{left:14}) }} />
                  <input placeholder={lang==="ar"?"ابحث عن دواء...":"Search for medicine..."} style={{ width:"100%", height:48, background:"white", border:"none", borderRadius:12, padding: isRtl?"0 44px 0 16px":"0 16px 0 44px", fontSize:14, color:"#1A1A2E", outline:"none", boxSizing:"border-box", fontFamily:font }} />
                </div>
                <button style={{ height:48, padding:"0 24px", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", borderRadius:12, fontSize:14, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap", fontFamily:font }}>
                  {lang==="ar"?"بحث":"Search"}
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
              {cats.map(c => (
                <button key={c} onClick={() => setActiveTab(c)} style={{ padding:"7px 18px", borderRadius:24, fontSize:13, fontWeight:600, cursor:"pointer", background: activeTab===c?"linear-gradient(135deg,#0066FF,#0052CC)":colors.card, color: activeTab===c?"white":colors.textSecondary, boxShadow: activeTab===c?"0 4px 12px rgba(0,102,255,0.3)":"none", fontFamily:font, border:`1px solid ${activeTab===c?"transparent":colors.border}` }}>
                  {c}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
              {meds.map((med,i) => (
                <div key={med.id} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, overflow:"hidden", boxShadow: dark?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
                  {/* Image area */}
                  <div style={{ height:140, background: dark?colors.bgSecondary:`linear-gradient(135deg,${pillColors[i]}18,${pillColors[i]}08)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                    <div style={{ position:"absolute", top:10, ...(isRtl?{right:10}:{left:10}) }}>
                      <span style={{ background: med.inStock?"#D1FAE5":"#FEE2E2", color: med.inStock?"#059669":"#DC2626", fontSize:11, fontWeight:700, padding:"4px 8px", borderRadius:8 }}>
                        {med.inStock ? (lang==="ar"?"متوفر":"In Stock") : (lang==="ar"?"نفد المخزون":"Out of Stock")}
                      </span>
                    </div>
                    <div style={{ width:72, height:72, background: dark?"rgba(255,255,255,0.08)":"white", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(0,0,0,0.1)" }}>
                      <Pill size={32} color={pillColors[i]} />
                    </div>
                  </div>
                  <div style={{ padding:16 }}>
                    <div style={{ fontWeight:700, fontSize:15, color:colors.text, marginBottom:2 }}>{med.name}</div>
                    <div style={{ fontSize:12, color:colors.textSecondary, marginBottom:14, fontStyle:"italic" }}>{med.sci}</div>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <span style={{ fontWeight:800, fontSize:16, color:"#0066FF" }}>{med.price.toLocaleString()} {lang==="ar"?"ل.س":"SYP"}</span>
                      <button disabled={!med.inStock} style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", background: med.inStock?"linear-gradient(135deg,#1A1A2E,#0F3460)":"#F3F4F6", color: med.inStock?"white":"#9CA3AF", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor: med.inStock?"pointer":"not-allowed", fontFamily:font }}>
                        <ShoppingCart size={14}/>{lang==="ar"?"أضف":"Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Cart Sidebar */}
        <aside style={{ position:"fixed", top:64, ...(isRtl?{left:0}:{right:0}), bottom:0, width:320, background:colors.card, borderInlineStart:`1px solid ${colors.border}`, display:"flex", flexDirection:"column", transform: cartOpen?"translateX(0)":(isRtl?"translateX(-100%)":"translateX(100%)"), transition:"transform 0.3s", zIndex:30, boxShadow: dark?"none":"-4px 0 20px rgba(0,0,0,0.08)" }}>
          {/* Cart Header */}
          <div style={{ padding:"16px 20px", borderBottom:`1px solid ${colors.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, fontWeight:800, fontSize:16, color:colors.text }}>
              <ShoppingCart size={18} color="#0066FF"/>
              {lang==="ar"?"سلة الطلبات":"Cart"}
              <span style={{ background:"#0066FF", color:"white", width:20, height:20, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800 }}>3</span>
            </div>
            <button onClick={() => setCartOpen(false)} style={{ background:"none", border:"none", color:colors.textSecondary, cursor:"pointer" }}><X size={18}/></button>
          </div>

          {/* Cart Items */}
          <div style={{ flex:1, overflowY:"auto", padding:16, display:"flex", flexDirection:"column", gap:12 }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display:"flex", gap:12, background:colors.bgSecondary, borderRadius:14, padding:12, border:`1px solid ${colors.border}` }}>
                <div style={{ width:44, height:44, background:colors.card, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, border:`1px solid ${colors.border}` }}>
                  <Pill size={20} color="#0066FF" />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:13, color:colors.text, marginBottom:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.name}</div>
                  <div style={{ color:"#0066FF", fontWeight:700, fontSize:13, marginBottom:8 }}>{item.price.toLocaleString()} {lang==="ar"?"ل.س":"SYP"}</div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, background:colors.card, border:`1px solid ${colors.border}`, borderRadius:8, padding:"4px 8px" }}>
                      <button style={{ background:"none", border:"none", color:colors.textSecondary, cursor:"pointer", lineHeight:1 }}><Minus size={12}/></button>
                      <span style={{ fontWeight:700, fontSize:13, color:colors.text, width:16, textAlign:"center" }}>{item.qty}</span>
                      <button style={{ background:"none", border:"none", color:colors.textSecondary, cursor:"pointer", lineHeight:1 }}><Plus size={12}/></button>
                    </div>
                    <button style={{ background:"none", border:"none", color:"#EF4444", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:font }}>{lang==="ar"?"حذف":"Remove"}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Footer */}
          <div style={{ padding:16, borderTop:`1px solid ${colors.border}`, background:colors.bgSecondary }}>
            {/* Delivery options */}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontWeight:700, fontSize:13, color:colors.text, marginBottom:10 }}>{lang==="ar"?"طريقة الاستلام":"Delivery Method"}</div>
              {["delivery","pickup"].map(opt => (
                <label key={opt} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", borderRadius:10, marginBottom:6, border:`1px solid ${delivery===opt?"#0066FF":colors.border}`, background: delivery===opt?(dark?"rgba(0,102,255,0.1)":"#EFF6FF"):colors.card, cursor:"pointer" }}>
                  <input type="radio" name="del" checked={delivery===opt} onChange={() => setDelivery(opt)} style={{ accentColor:"#0066FF" }} />
                  <MapPin size={14} color={delivery===opt?"#0066FF":colors.textSecondary} />
                  <span style={{ fontSize:13, fontWeight:600, color: delivery===opt?"#0066FF":colors.text, fontFamily:font }}>
                    {opt==="delivery" ? (lang==="ar"?"توصيل للمنزل":"Home Delivery") : (lang==="ar"?"استلام من الصيدلية":"Pickup")}
                  </span>
                </label>
              ))}
            </div>
            {/* Summary */}
            <div style={{ marginBottom:16 }}>
              {[
                [lang==="ar"?"المجموع الفرعي":"Subtotal", `${subtotal.toLocaleString()} ${lang==="ar"?"ل.س":"SYP"}`],
                [lang==="ar"?"التوصيل":"Delivery", delivery==="delivery"?`1,500 ${lang==="ar"?"ل.س":"SYP"}`:(lang==="ar"?"مجاناً":"Free")],
              ].map(([k,v],i) => (
                <div key={i} style={{ display:"flex", justifyContent:"space-between", marginBottom:8, fontSize:13, color:colors.textSecondary }}>
                  <span>{k}</span><span style={{ fontWeight:600 }}>{v}</span>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"space-between", paddingTop:10, borderTop:`1px solid ${colors.border}`, fontSize:16, fontWeight:800 }}>
                <span style={{ color:colors.text }}>{lang==="ar"?"الإجمالي":"Total"}</span>
                <span style={{ color:"#0066FF" }}>{(subtotal+deliveryFee).toLocaleString()} {lang==="ar"?"ل.س":"SYP"}</span>
              </div>
            </div>
            <button style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"14px", borderRadius:14, fontSize:15, fontWeight:800, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, boxShadow:"0 6px 20px rgba(0,102,255,0.35)", fontFamily:font }}>
              <CreditCard size={16}/>{lang==="ar"?"إتمام الطلب":"Place Order"}
            </button>
          </div>
        </aside>

        {/* Cart toggle button */}
        {!cartOpen && (
          <button onClick={() => setCartOpen(true)} style={{ position:"fixed", bottom:100, ...(isRtl?{left:24}:{right:24}), width:54, height:54, background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 20px rgba(0,102,255,0.4)", zIndex:98 }}>
            <ShoppingCart size={22} color="white"/>
            <span style={{ position:"absolute", top:-2, ...(isRtl?{left:-2}:{right:-2}), width:20, height:20, background:"#EF4444", borderRadius:"50%", fontSize:11, fontWeight:800, color:"white", display:"flex", alignItems:"center", justifyContent:"center" }}>3</span>
          </button>
        )}
      </div>

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
