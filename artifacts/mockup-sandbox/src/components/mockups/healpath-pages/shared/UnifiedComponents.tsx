import { useState } from "react";
import { Moon, Sun, Bell, Brain, X, Activity, Pill, Bone, Calendar, Globe } from "lucide-react";

export type Lang = "ar" | "en";

export const theme = {
  translations: {
    ar: {
      nav: { home:"الرئيسية", doctors:"الأطباء", pharmacy:"الصيدلية", jobs:"التوظيف", articles:"المقالات" },
      login:"تسجيل الدخول", register:"إنشاء حساب",
      tagline:"مسار الشفاء", langToggle:"EN",
      aiTitle:"المساعد الطبي الذكي", aiOnline:"متصل",
      aiGreeting:"مرحباً! أخبرني عن أعراضك وسأساعدك في التوجه للقسم المناسب.",
      aiUserMsg:"عندي ألم في الركبة اليمنى وصعوبة في المشي منذ أسبوع.",
      aiResponse:"بناءً على الأعراض، يُنصح بمراجعة:",
      aiDept:"قسم العظمية", aiDoctor:"د. محمد الأحمد — أخصائي عظام",
      aiDisclaimer:"هذا تحليل استرشادي ولا يُغني عن الطبيب",
      aiBook:"احجز موعداً الآن", aiPlaceholder:"اكتب أعراضك هنا...",
      tabs:["الأعراض","التحاليل","الأشعة"],
      floatLabel:"المساعد الطبي",
    },
    en: {
      nav: { home:"Home", doctors:"Doctors", pharmacy:"Pharmacy", jobs:"Careers", articles:"Articles" },
      login:"Log In", register:"Sign Up",
      tagline:"Your Healing Path", langToggle:"عربي",
      aiTitle:"AI Medical Assistant", aiOnline:"Online",
      aiGreeting:"Hello! Tell me your symptoms and I'll guide you to the right department.",
      aiUserMsg:"I have pain in my right knee and difficulty walking for a week.",
      aiResponse:"Based on your symptoms, we recommend:",
      aiDept:"Orthopedics Dept.", aiDoctor:"Dr. Mohammad Al-Ahmad — Orthopedist",
      aiDisclaimer:"This is a preliminary analysis, not a substitute for a doctor",
      aiBook:"Book Appointment Now", aiPlaceholder:"Describe your symptoms...",
      tabs:["Symptoms","Lab Tests","Radiology"],
      floatLabel:"AI Assistant",
    }
  },
  dark: {
    bg:"#0F1621", bgSecondary:"#1A2332", card:"#1E2A3A",
    text:"#E8F0FE", textSecondary:"#94A3B8", border:"#2A3A4A",
    nav:"#0D1825", input:"#1E2A3A",
  },
  light: {
    bg:"#FFFFFF", bgSecondary:"#F0F6FF", card:"#FFFFFF",
    text:"#1A1A2E", textSecondary:"#6B7280", border:"#E5EEFF",
    nav:"#1A1A2E", input:"#F8FAFF",
  }
};

// Global store using simple react state (lifted up per component via props)
export function useHealPathStore() {
  const [lang, setLang] = useState<Lang>("ar");
  const [dark, setDark] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  return { lang, setLang, dark, setDark, aiOpen, setAiOpen };
}

// ── LOGO SVG ──
export function HealPathLogo({ size = 38 }: { size?: number }) {
  return (
    <div style={{ width:size, height:size, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:size*0.26, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <svg width={size*0.58} height={size*0.42} viewBox="0 0 22 16" fill="none">
        <path d="M1 8 L4 8 L6 3 L8 13 L10 6 L12 10 L14 8 L21 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// ── UNIFIED NAVBAR ──
export function UnifiedNavbar({ lang, dark, setLang, setDark, activePage }: {
  lang: Lang; dark: boolean;
  setLang: (l: Lang) => void;
  setDark: (d: boolean) => void;
  activePage?: string;
}) {
  const t = theme.translations[lang];
  const navBg = dark ? "#0D1825" : "#1A1A2E";
  const isRtl = lang === "ar";
  const navItems = Object.entries(t.nav);

  return (
    <nav style={{ background:navBg, position:"sticky", top:0, zIndex:50, borderBottom:`1px solid ${dark?"#1E2A3A":"#0A1628"}` }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <HealPathLogo />
          <div>
            <div style={{ color:"white", fontWeight:800, fontSize:18, letterSpacing:"-0.3px", lineHeight:1, fontFamily:isRtl?"'Cairo',sans-serif":"'Inter',sans-serif" }}>HealPath</div>
            <div style={{ color:"#60A5FA", fontSize:10, fontWeight:500, lineHeight:1.2, fontFamily:isRtl?"'Cairo',sans-serif":"'Inter',sans-serif" }}>{t.tagline}</div>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display:"flex", alignItems:"center", gap:4 }}>
          {navItems.map(([key,label],i) => (
            <a key={key} href="#" style={{ color: activePage===key||i===0?"#60A5FA":"#CBD5E1", padding:"6px 14px", borderRadius:8, fontSize:14, fontWeight:500, textDecoration:"none", background: activePage===key||i===0?"rgba(96,165,250,0.12)":"transparent", fontFamily:isRtl?"'Cairo',sans-serif":"'Inter',sans-serif" }}>
              {label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          {/* Lang Toggle */}
          <button onClick={() => setLang(lang==="ar"?"en":"ar")} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", color:"white", padding:"5px 12px", borderRadius:20, fontSize:12, fontWeight:700, cursor:"pointer", letterSpacing:"0.5px", fontFamily:"'Inter',sans-serif", display:"flex", alignItems:"center", gap:5 }}>
            <Globe size={12} />{t.langToggle}
          </button>
          {/* Dark Toggle */}
          <button onClick={() => setDark(!dark)} style={{ width:36, height:36, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>
            {dark ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
          {/* Bell */}
          <button style={{ width:36, height:36, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"white", position:"relative" }}>
            <Bell size={16}/>
            <span style={{ position:"absolute", top:6, right:6, width:7, height:7, background:"#EF4444", borderRadius:"50%", border:`1.5px solid ${navBg}` }} />
          </button>
          <button style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.3)", color:"white", padding:"7px 16px", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:isRtl?"'Cairo',sans-serif":"'Inter',sans-serif" }}>{t.login}</button>
          <button style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", color:"white", padding:"7px 16px", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", boxShadow:"0 2px 12px rgba(0,102,255,0.4)", fontFamily:isRtl?"'Cairo',sans-serif":"'Inter',sans-serif" }}>{t.register}</button>
        </div>
      </div>
    </nav>
  );
}

// ── UNIFIED AI FLOAT + DRAWER ──
export function UnifiedAIFloat({ lang, dark, aiOpen, setAiOpen, colors }: {
  lang: Lang; dark: boolean; aiOpen: boolean;
  setAiOpen: (v:boolean) => void;
  colors: typeof theme.dark;
}) {
  const t = theme.translations[lang];
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";

  return (
    <>
      <style>{`@keyframes hp-pulse{0%{transform:scale(0.95);opacity:0.7}70%{transform:scale(1.2);opacity:0}100%{transform:scale(1.2);opacity:0}}`}</style>
      {/* Float Button */}
      <div style={{ position:"fixed", bottom:28, ...(isRtl?{left:28}:{right:28}), zIndex:100 }}>
        <div style={{ position:"absolute", inset:-6, borderRadius:"50%", background:"rgba(0,102,255,0.25)", animation:"hp-pulse 2s ease-out infinite" }} />
        <button onClick={() => setAiOpen(!aiOpen)} style={{ width:56, height:56, background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 24px rgba(0,102,255,0.5)", position:"relative" }}>
          {aiOpen ? <X size={20} color="white"/> : <Brain size={20} color="white"/>}
        </button>
        <div style={{ textAlign:"center", marginTop:6, color:"#0066FF", fontSize:10, fontWeight:700, fontFamily:font, whiteSpace:"nowrap" }}>{t.floatLabel}</div>
      </div>

      {/* Drawer */}
      {aiOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:99 }}>
          <div onClick={() => setAiOpen(false)} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)", backdropFilter:"blur(2px)" }} />
          <div style={{ position:"absolute", top:0, bottom:0, ...(isRtl?{left:0}:{right:0}), width:380, background:colors.card, boxShadow: isRtl?"4px 0 32px rgba(0,0,0,0.3)":"-4px 0 32px rgba(0,0,0,0.3)", display:"flex", flexDirection:"column", fontFamily:font }}>
            {/* Header */}
            <div style={{ background:"linear-gradient(135deg,#1A1A2E,#0F3460)", padding:"18px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, background:"rgba(0,102,255,0.3)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Brain size={18} color="#60A5FA"/>
                </div>
                <div>
                  <div style={{ color:"white", fontWeight:700, fontSize:15 }}>{t.aiTitle}</div>
                  <div style={{ color:"#60A5FA", fontSize:11 }}>● {t.aiOnline}</div>
                </div>
              </div>
              <button onClick={() => setAiOpen(false)} style={{ background:"rgba(255,255,255,0.1)", border:"none", color:"white", width:30, height:30, borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <X size={16}/>
              </button>
            </div>
            {/* Tabs */}
            <div style={{ display:"flex", borderBottom:`1px solid ${colors.border}`, background:colors.card }}>
              {t.tabs.map((tab,i) => (
                <button key={i} style={{ flex:1, padding:"12px 4px", background:i===0?"rgba(0,102,255,0.08)":"transparent", border:"none", borderBottom:i===0?"2px solid #0066FF":"2px solid transparent", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                  {[Activity,Pill,Brain].map((Icon,j) => j===i ? <Icon key={j} size={16} color="#0066FF"/> : null)}
                  <span style={{ fontSize:11, fontWeight:600, color:i===0?"#0066FF":colors.textSecondary }}>{tab}</span>
                </button>
              ))}
            </div>
            {/* Chat */}
            <div style={{ flex:1, overflowY:"auto", padding:16, display:"flex", flexDirection:"column", gap:12 }}>
              {/* AI greeting */}
              <div style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
                <div style={{ width:30, height:30, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Brain size={14} color="white"/>
                </div>
                <div style={{ background:dark?"#1E2A3A":"#EEF4FF", borderRadius:"0 14px 14px 14px", padding:"12px 14px", maxWidth:"80%", fontSize:13, color:colors.text, lineHeight:1.6 }}>
                  {t.aiGreeting}
                </div>
              </div>
              {/* User msg */}
              <div style={{ display:"flex", justifyContent:"flex-end" }}>
                <div style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", borderRadius:"14px 0 14px 14px", padding:"12px 14px", maxWidth:"80%", fontSize:13, color:"white", lineHeight:1.6 }}>
                  {t.aiUserMsg}
                </div>
              </div>
              {/* AI response */}
              <div style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
                <div style={{ width:30, height:30, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Brain size={14} color="white"/>
                </div>
                <div style={{ background:dark?"#1E2A3A":"#EEF4FF", borderRadius:"0 14px 14px 14px", padding:14, maxWidth:"85%", fontSize:13, color:colors.text, lineHeight:1.6 }}>
                  <div style={{ marginBottom:10 }}>{t.aiResponse}</div>
                  <div style={{ background:"rgba(0,102,255,0.1)", border:"1px solid rgba(0,102,255,0.25)", borderRadius:10, padding:"10px 12px", marginBottom:10 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:6 }}>
                      <Bone size={14} color="#0066FF"/>
                      <span style={{ fontWeight:700, color:"#0066FF", fontSize:14 }}>{t.aiDept}</span>
                    </div>
                    <div style={{ fontSize:12, color:colors.textSecondary }}>{t.aiDoctor}</div>
                  </div>
                  <div style={{ fontSize:11, color:colors.textSecondary, marginBottom:12 }}>⚠️ {t.aiDisclaimer}</div>
                  <button style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:10, borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer" }}>
                    {t.aiBook}
                  </button>
                </div>
              </div>
            </div>
            {/* Input */}
            <div style={{ padding:"12px 16px", borderTop:`1px solid ${colors.border}`, background:colors.card, display:"flex", gap:8, alignItems:"center" }}>
              <button style={{ width:36, height:36, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:10, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Pill size={16} color={colors.textSecondary}/>
              </button>
              <input placeholder={t.aiPlaceholder} style={{ flex:1, background:colors.input, border:`1px solid ${colors.border}`, borderRadius:10, padding:"10px 14px", fontSize:13, color:colors.text, outline:"none", direction:isRtl?"rtl":"ltr", fontFamily:font }} />
              <button style={{ width:36, height:36, background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", borderRadius:10, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Activity size={16} color="white"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
