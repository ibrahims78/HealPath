import { useState } from "react";
import {
  Moon, Sun, Globe, Bell, User, Menu, X,
  Heart, Brain, Wind, Droplets, Bone, Activity,
  Calendar, Pill, Briefcase, BookOpen, ChevronDown,
  Search, MessageCircle, LogOut, Settings
} from "lucide-react";

const translations = {
  ar: {
    dir: "rtl",
    appName: "HealPath",
    tagline: "مسار الشفاء",
    nav: {
      home: "الرئيسية",
      doctors: "الأطباء",
      pharmacy: "الصيدلية",
      jobs: "التوظيف",
      articles: "المقالات",
    },
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    hero: {
      title: "مسار شفائك يبدأ هنا",
      subtitle: "منصة طبية ذكية تجمع حجز المواعيد والذكاء الاصطناعي في مكان واحد",
      cta1: "احجز موعداً الآن",
      cta2: "جرّب المساعد الذكي",
    },
    stats: ["مريض مسجل", "قسم طبي", "طبيب متخصص"],
    statsValues: ["500+", "5", "+20"],
    departments: "أقسامنا الطبية",
    deptNames: ["العظمية", "الصدرية", "الكلى", "القلبية", "العصبية"],
    deptDesc: [
      "أمراض وجراحات العظام والمفاصل",
      "أمراض الرئتين والجهاز التنفسي",
      "أمراض الكلى والمسالك البولية",
      "أمراض القلب والأوعية الدموية",
      "أمراض الجهاز العصبي",
    ],
    aiSection: "المساعد الطبي الذكي",
    aiDesc: "اكتب أعراضك وسيوجهك الذكاء الاصطناعي للقسم والطبيب المناسب",
    aiFeatures: ["تحليل الأعراض", "قراءة التحاليل", "تحليل الأشعة"],
    aiFeatDesc: [
      "أدخل أعراضك ونوجهك للتخصص المناسب",
      "ارفع صورة نتيجة التحليل للقراءة الأولية",
      "ارفع صورة الأشعة للتحليل بالذكاء الاصطناعي",
    ],
    floatBtn: "المساعد الطبي",
    footer: "جميع الحقوق محفوظة",
    langToggle: "EN",
    darkMode: "الوضع الليلي",
  },
  en: {
    dir: "ltr",
    appName: "HealPath",
    tagline: "Your Healing Path",
    nav: {
      home: "Home",
      doctors: "Doctors",
      pharmacy: "Pharmacy",
      jobs: "Careers",
      articles: "Articles",
    },
    login: "Log In",
    register: "Sign Up",
    hero: {
      title: "Your Healing Path Starts Here",
      subtitle: "A smart medical platform combining appointment booking and AI in one place",
      cta1: "Book Appointment",
      cta2: "Try AI Assistant",
    },
    stats: ["Registered Patients", "Medical Departments", "Specialist Doctors"],
    statsValues: ["500+", "5", "20+"],
    departments: "Our Medical Departments",
    deptNames: ["Orthopedics", "Pulmonology", "Nephrology", "Cardiology", "Neurology"],
    deptDesc: [
      "Bones, joints and spine surgery",
      "Lungs and respiratory diseases",
      "Kidney and urinary tract diseases",
      "Heart and vascular diseases",
      "Central and peripheral nervous system",
    ],
    aiSection: "AI Medical Assistant",
    aiDesc: "Describe your symptoms and our AI will guide you to the right department and doctor",
    aiFeatures: ["Symptom Analysis", "Lab Results Reading", "Radiology Analysis"],
    aiFeatDesc: [
      "Enter symptoms and get directed to the right specialist",
      "Upload lab result images for preliminary reading",
      "Upload X-ray or MRI for AI-powered analysis",
    ],
    floatBtn: "AI Assistant",
    footer: "All rights reserved",
    langToggle: "عربي",
    darkMode: "Dark Mode",
  },
};

const deptIcons = [Bone, Wind, Droplets, Heart, Brain];

export function DesignSystem() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [dark, setDark] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const t = translations[lang];
  const isRtl = lang === "ar";

  const bg = dark ? "#0F1621" : "#FFFFFF";
  const bgSecondary = dark ? "#1A2332" : "#F0F6FF";
  const bgCard = dark ? "#1E2A3A" : "#FFFFFF";
  const textPrimary = dark ? "#E8F0FE" : "#1A1A2E";
  const textSecondary = dark ? "#94A3B8" : "#6B7280";
  const borderColor = dark ? "#2A3A4A" : "#E5EEFF";
  const navBg = dark ? "#0D1825" : "#1A1A2E";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} style={{ background: bg, color: textPrimary, minHeight: "100vh", fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif", transition: "all 0.3s ease" }}>

      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />

      {/* ── NAVBAR ── */}
      <nav style={{ background: navBg, position: "sticky", top: 0, zIndex: 50, borderBottom: `1px solid ${dark ? "#1E2A3A" : "#0A1628"}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Heartbeat SVG Logo */}
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #0066FF, #00A3FF)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M1 8 L4 8 L6 3 L8 13 L10 6 L12 10 L14 8 L21 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 800, fontSize: 18, letterSpacing: "-0.3px", lineHeight: 1 }}>
                {t.appName}
              </div>
              <div style={{ color: "#60A5FA", fontSize: 10, fontWeight: 500, lineHeight: 1.2 }}>
                {t.tagline}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {Object.values(t.nav).map((link, i) => (
              <a key={i} href="#" style={{ color: i === 0 ? "#60A5FA" : "#CBD5E1", padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none", background: i === 0 ? "rgba(96,165,250,0.12)" : "transparent", transition: "all 0.2s" }}>
                {link}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.5px" }}
            >
              {t.langToggle}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", transition: "all 0.2s" }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Notification */}
            <button style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", position: "relative" }}>
              <Bell size={16} />
              <span style={{ position: "absolute", top: 6, right: 6, width: 7, height: 7, background: "#EF4444", borderRadius: "50%", border: "1.5px solid " + navBg }} />
            </button>

            {/* Login / Register */}
            <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              {t.login}
            </button>
            <button style={{ background: "linear-gradient(135deg, #0066FF, #0052CC)", border: "none", color: "white", padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,102,255,0.4)" }}>
              {t.register}
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: dark ? "linear-gradient(135deg, #0D1825 0%, #0F1E35 50%, #0D1825 100%)" : "linear-gradient(135deg, #1A1A2E 0%, #0F3460 50%, #1A1A2E 100%)", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Decorative grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,102,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
          <Activity size={14} color="#60A5FA" />
          <span style={{ color: "#60A5FA", fontSize: 13, fontWeight: 600 }}>AI-Powered • {lang === "ar" ? "مدعوم بالذكاء الاصطناعي" : "Smart Healthcare"}</span>
        </div>

        <h1 style={{ color: "white", fontSize: 52, fontWeight: 800, marginBottom: 20, lineHeight: 1.2, position: "relative" }}>
          {t.hero.title}
        </h1>
        <p style={{ color: "#94A3B8", fontSize: 18, maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.8 }}>
          {t.hero.subtitle}
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "linear-gradient(135deg, #0066FF, #0052CC)", color: "white", border: "none", padding: "14px 32px", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,102,255,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={18} />
            {t.hero.cta1}
          </button>
          <button style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.3)", padding: "14px 32px", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            <Brain size={18} />
            {t.hero.cta2}
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
          {t.statsValues.map((val, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "16px 28px", textAlign: "center" }}>
              <div style={{ color: "#60A5FA", fontSize: 28, fontWeight: 800 }}>{val}</div>
              <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section style={{ background: bgSecondary, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, marginBottom: 8, color: textPrimary }}>{t.departments}</h2>
          <div style={{ width: 48, height: 4, background: "linear-gradient(90deg, #0066FF, #00A3FF)", borderRadius: 2, margin: "0 auto 40px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {t.deptNames.map((name, i) => {
              const Icon = deptIcons[i];
              return (
                <div key={i} style={{ background: bgCard, border: `1px solid ${borderColor}`, borderRadius: 16, padding: "24px 16px", textAlign: "center", cursor: "pointer", transition: "all 0.2s", boxShadow: dark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,163,255,0.08))", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <Icon size={26} color="#0066FF" />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: textPrimary, marginBottom: 6 }}>{name}</div>
                  <div style={{ fontSize: 12, color: textSecondary, lineHeight: 1.5 }}>{t.deptDesc[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section style={{ background: dark ? "#0D1825" : "#1A1A2E", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,102,255,0.2)", border: "1px solid rgba(0,102,255,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
            <Brain size={14} color="#60A5FA" />
            <span style={{ color: "#60A5FA", fontSize: 12, fontWeight: 600 }}>Powered by AI</span>
          </div>
          <h2 style={{ color: "white", fontSize: 32, fontWeight: 800, marginBottom: 10 }}>{t.aiSection}</h2>
          <p style={{ color: "#94A3B8", fontSize: 16, marginBottom: 48 }}>{t.aiDesc}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {t.aiFeatures.map((feat, i) => {
              const icons = [Activity, Pill, Brain];
              const Icon = icons[i];
              return (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, #0066FF22, #00A3FF22)", border: "1px solid rgba(0,102,255,0.3)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <Icon size={28} color="#60A5FA" />
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{feat}</div>
                  <div style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.7 }}>{t.aiFeatDesc[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: dark ? "#080E18" : "#0D1117", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #0066FF, #00A3FF)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="13" viewBox="0 0 22 16" fill="none">
              <path d="M1 8 L4 8 L6 3 L8 13 L10 6 L12 10 L14 8 L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>{t.appName}</span>
        </div>
        <p style={{ color: "#475569", fontSize: 13 }}>© 2026 {t.appName} — {t.footer}</p>
      </footer>

      {/* ── FLOATING AI BUTTON ── */}
      <div style={{ position: "fixed", bottom: 28, ...(isRtl ? { left: 28 } : { right: 28 }), zIndex: 100 }}>
        {/* Pulse Ring */}
        <div style={{
          position: "absolute", inset: -6, borderRadius: "50%",
          background: "rgba(0,102,255,0.25)",
          animation: "pulse-ring 2s ease-out infinite"
        }} />
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(0.95); opacity: 0.7; }
            70% { transform: scale(1.15); opacity: 0; }
            100% { transform: scale(1.15); opacity: 0; }
          }
        `}</style>
        <button
          onClick={() => setAiOpen(!aiOpen)}
          style={{ width: 58, height: 58, background: "linear-gradient(135deg, #0066FF, #0052CC)", border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(0,102,255,0.5)", position: "relative" }}
        >
          {aiOpen ? <X size={22} color="white" /> : <Brain size={22} color="white" />}
        </button>
        <div style={{ textAlign: "center", marginTop: 6, color: "#0066FF", fontSize: 11, fontWeight: 700 }}>
          {t.floatBtn}
        </div>
      </div>

      {/* ── AI DRAWER ── */}
      {aiOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99 }}>
          {/* Overlay */}
          <div onClick={() => setAiOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }} />
          {/* Drawer */}
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            ...(isRtl ? { left: 0 } : { right: 0 }),
            width: 380, background: bgCard,
            boxShadow: isRtl ? "4px 0 32px rgba(0,0,0,0.3)" : "-4px 0 32px rgba(0,0,0,0.3)",
            display: "flex", flexDirection: "column"
          }}>
            {/* Drawer Header */}
            <div style={{ background: "linear-gradient(135deg, #1A1A2E, #0F3460)", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, background: "rgba(0,102,255,0.3)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Brain size={18} color="#60A5FA" />
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 15 }}>{t.aiSection}</div>
                  <div style={{ color: "#60A5FA", fontSize: 11 }}>● {lang === "ar" ? "متصل" : "Online"}</div>
                </div>
              </div>
              <button onClick={() => setAiOpen(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={16} />
              </button>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: `1px solid ${borderColor}`, background: bgCard }}>
              {[
                { icon: Activity, label: lang === "ar" ? "الأعراض" : "Symptoms" },
                { icon: Pill, label: lang === "ar" ? "التحاليل" : "Lab Tests" },
                { icon: Brain, label: lang === "ar" ? "الأشعة" : "Radiology" },
              ].map((tab, i) => (
                <button key={i} style={{ flex: 1, padding: "12px 4px", background: i === 0 ? "rgba(0,102,255,0.08)" : "transparent", border: "none", borderBottom: i === 0 ? "2px solid #0066FF" : "2px solid transparent", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <tab.icon size={16} color={i === 0 ? "#0066FF" : textSecondary} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? "#0066FF" : textSecondary }}>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Chat Area */}
            <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {/* AI greeting */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #0066FF, #00A3FF)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={14} color="white" />
                </div>
                <div style={{ background: dark ? "#1E2A3A" : "#EEF4FF", borderRadius: "0 14px 14px 14px", padding: "12px 14px", maxWidth: "80%", fontSize: 13, color: textPrimary, lineHeight: 1.6 }}>
                  {lang === "ar" ? "مرحباً! أخبرني عن أعراضك وسأساعدك في التوجه للقسم المناسب." : "Hello! Tell me your symptoms and I'll guide you to the right department."}
                </div>
              </div>

              {/* User message */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "linear-gradient(135deg, #0066FF, #0052CC)", borderRadius: "14px 0 14px 14px", padding: "12px 14px", maxWidth: "80%", fontSize: 13, color: "white", lineHeight: 1.6 }}>
                  {lang === "ar" ? "عندي ألم في الركبة اليمنى وصعوبة في المشي منذ أسبوع." : "I have pain in my right knee and difficulty walking for a week."}
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #0066FF, #00A3FF)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={14} color="white" />
                </div>
                <div style={{ background: dark ? "#1E2A3A" : "#EEF4FF", borderRadius: "0 14px 14px 14px", padding: "14px", maxWidth: "85%", fontSize: 13, color: textPrimary, lineHeight: 1.6 }}>
                  <div style={{ marginBottom: 10 }}>{lang === "ar" ? "بناءً على الأعراض، يُنصح بمراجعة:" : "Based on your symptoms, we recommend:"}</div>
                  <div style={{ background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.25)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                      <Bone size={14} color="#0066FF" />
                      <span style={{ fontWeight: 700, color: "#0066FF", fontSize: 14 }}>
                        {lang === "ar" ? "قسم العظمية" : "Orthopedics Dept."}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: textSecondary }}>
                      {lang === "ar" ? "د. محمد الأحمد — أخصائي عظام — 12 سنة خبرة" : "Dr. Mohammad Al-Ahmad — Orthopedist — 12 yrs exp."}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: textSecondary, marginBottom: 12, display: "flex", alignItems: "center", gap: 4 }}>
                    ⚠️ {lang === "ar" ? "هذا تحليل استرشادي أولي ولا يُغني عن الطبيب" : "This is a preliminary analysis, not a substitute for a doctor"}
                  </div>
                  <button style={{ width: "100%", background: "linear-gradient(135deg, #0066FF, #0052CC)", color: "white", border: "none", padding: "10px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                    {lang === "ar" ? "احجز موعداً الآن" : "Book Appointment Now"}
                  </button>
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div style={{ padding: "12px 16px", borderTop: `1px solid ${borderColor}`, background: bgCard, display: "flex", gap: 8, alignItems: "center" }}>
              <button style={{ width: 36, height: 36, background: dark ? "#1E2A3A" : "#F0F6FF", border: `1px solid ${borderColor}`, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Pill size={16} color={textSecondary} />
              </button>
              <input
                placeholder={lang === "ar" ? "اكتب أعراضك هنا..." : "Describe your symptoms..."}
                style={{ flex: 1, background: dark ? "#1E2A3A" : "#F8FAFF", border: `1px solid ${borderColor}`, borderRadius: 10, padding: "10px 14px", fontSize: 13, color: textPrimary, outline: "none", direction: isRtl ? "rtl" : "ltr" }}
              />
              <button style={{ width: 36, height: 36, background: "linear-gradient(135deg, #0066FF, #0052CC)", border: "none", borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Activity size={16} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
