import { useState } from "react";
import { Moon, Sun, Globe, Bell, Brain, Activity, Bone, Wind, Droplets, Heart, Calendar, Pill, FileText, X, Award, CheckCircle } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, type Lang } from "./shared/UnifiedComponents";

export function LandingPage() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const t = theme.translations[lang];
  const colors = dark ? theme.dark : theme.light;

  const deptIcons = [Bone, Wind, Droplets, Heart, Brain];
  const deptColors = ["#3B82F6","#10B981","#8B5CF6","#EF4444","#F59E0B"];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} style={{ background: colors.bg, color: colors.text, minHeight: "100vh", fontFamily: lang === "ar" ? "'Cairo',sans-serif" : "'Inter',sans-serif", transition: "all 0.3s" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="home" />

      {/* HERO */}
      <section style={{ background: dark ? "linear-gradient(135deg,#0D1825,#0F1E35)" : "linear-gradient(135deg,#1A1A2E,#0F3460)", padding: "88px 24px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(0,102,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.05) 1px,transparent 1px)", backgroundSize:"40px 40px", pointerEvents:"none" }} />
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,102,255,0.15)", border:"1px solid rgba(0,102,255,0.3)", borderRadius:20, padding:"6px 16px", marginBottom:24 }}>
          <Activity size={14} color="#60A5FA" />
          <span style={{ color:"#60A5FA", fontSize:13, fontWeight:600 }}>{lang==="ar" ? "مدعوم بالذكاء الاصطناعي" : "AI-Powered Healthcare"}</span>
        </div>
        <h1 style={{ color:"white", fontSize:52, fontWeight:800, marginBottom:20, lineHeight:1.2, position:"relative" }}>
          {lang==="ar" ? "مسار شفائك يبدأ هنا" : "Your Healing Path Starts Here"}
        </h1>
        <p style={{ color:"#94A3B8", fontSize:18, maxWidth:600, margin:"0 auto 36px", lineHeight:1.8 }}>
          {lang==="ar" ? "منصة طبية ذكية تجمع حجز المواعيد والذكاء الاصطناعي في مكان واحد" : "A smart medical platform combining appointment booking and AI in one place"}
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <button style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"14px 32px", borderRadius:12, fontSize:16, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 20px rgba(0,102,255,0.4)", display:"flex", alignItems:"center", gap:8 }}>
            <Calendar size={18} />{lang==="ar" ? "احجز موعداً الآن" : "Book Appointment"}
          </button>
          <button style={{ background:"transparent", color:"white", border:"2px solid rgba(255,255,255,0.3)", padding:"14px 32px", borderRadius:12, fontSize:16, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:8 }}>
            <Brain size={18} />{lang==="ar" ? "جرّب المساعد الذكي" : "Try AI Assistant"}
          </button>
        </div>
        <div style={{ display:"flex", gap:16, justifyContent:"center", marginTop:48, flexWrap:"wrap" }}>
          {["500+","5","20+"].map((v,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:16, padding:"16px 28px", textAlign:"center" }}>
              <div style={{ color:"#60A5FA", fontSize:28, fontWeight:800 }}>{v}</div>
              <div style={{ color:"#94A3B8", fontSize:13, marginTop:4 }}>{lang==="ar" ? ["مريض مسجل","قسم طبي","طبيب متخصص"][i] : ["Registered Patients","Medical Depts","Specialist Doctors"][i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section style={{ background: colors.bgSecondary, padding:"64px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <h2 style={{ textAlign:"center", fontSize:32, fontWeight:800, marginBottom:8, color:colors.text }}>{lang==="ar" ? "أقسامنا الطبية" : "Our Medical Departments"}</h2>
          <div style={{ width:48, height:4, background:"linear-gradient(90deg,#0066FF,#00A3FF)", borderRadius:2, margin:"0 auto 40px" }} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:16 }}>
            {(lang==="ar" ? ["العظمية","الصدرية","الكلى","القلبية","العصبية"] : ["Orthopedics","Pulmonology","Nephrology","Cardiology","Neurology"]).map((name,i) => {
              const Icon = deptIcons[i];
              return (
                <div key={i} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:"24px 16px", textAlign:"center", cursor:"pointer", boxShadow: dark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ width:56, height:56, background:`${deptColors[i]}18`, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                    <Icon size={26} color={deptColors[i]} />
                  </div>
                  <div style={{ fontWeight:700, fontSize:15, color:colors.text, marginBottom:6 }}>{name}</div>
                  <div style={{ fontSize:12, color:colors.textSecondary, lineHeight:1.5 }}>{(lang==="ar" ? ["أمراض وجراحات العظام","أمراض الجهاز التنفسي","أمراض الكلى والمسالك","أمراض القلب والأوعية","أمراض الجهاز العصبي"] : ["Bones & joints surgery","Lungs & respiratory","Kidney & urinary tract","Heart & vascular","Nervous system"])[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section style={{ background:colors.bg, padding:"64px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <h2 style={{ textAlign:"center", fontSize:32, fontWeight:800, marginBottom:8, color:colors.text }}>{lang==="ar" ? "نخبة من الأطباء المتخصصين" : "Our Specialist Doctors"}</h2>
          <div style={{ width:48, height:4, background:"linear-gradient(90deg,#0066FF,#00A3FF)", borderRadius:2, margin:"0 auto 40px" }} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[
              {name:lang==="ar"?"د. محمد الأحمد":"Dr. Mohammad Al-Ahmad", spec:lang==="ar"?"استشاري جراحة العظام":"Orthopedic Surgeon", exp:lang==="ar"?"12 سنة خبرة":"12 yrs exp", init:"م.أ", rating:4.8, reviews:124},
              {name:lang==="ar"?"د. سارة خليل":"Dr. Sara Khalil", spec:lang==="ar"?"أخصائية أمراض القلب":"Cardiologist", exp:lang==="ar"?"8 سنوات خبرة":"8 yrs exp", init:"س.خ", rating:4.9, reviews:89},
              {name:lang==="ar"?"د. أحمد ياسين":"Dr. Ahmad Yaseen", spec:lang==="ar"?"استشاري جراحة الأعصاب":"Neurosurgeon", exp:lang==="ar"?"15 سنة خبرة":"15 yrs exp", init:"أ.ي", rating:4.7, reviews:210},
            ].map((doc,i) => (
              <div key={i} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:20, padding:24, textAlign:"center", boxShadow: dark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ width:80, height:80, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:22, color:"white", fontWeight:800 }}>{doc.init}</div>
                <div style={{ fontWeight:800, fontSize:17, color:colors.text, marginBottom:4 }}>{doc.name}</div>
                <div style={{ color:"#0066FF", fontSize:13, fontWeight:600, marginBottom:8 }}>{doc.spec}</div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:16 }}>
                  <span style={{ background:colors.bgSecondary, color:colors.textSecondary, fontSize:12, padding:"4px 10px", borderRadius:20 }}>{doc.exp}</span>
                  <span style={{ color:"#F59E0B", fontSize:13, fontWeight:700 }}>★ {doc.rating}</span>
                </div>
                <button style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"10px", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer" }}>
                  {lang==="ar" ? "احجز موعداً" : "Book Appointment"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section style={{ background: dark ? "#0D1825" : "#1A1A2E", padding:"64px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,102,255,0.2)", border:"1px solid rgba(0,102,255,0.3)", borderRadius:20, padding:"6px 16px", marginBottom:20 }}>
            <Brain size={14} color="#60A5FA" /><span style={{ color:"#60A5FA", fontSize:12, fontWeight:600 }}>AI-Powered</span>
          </div>
          <h2 style={{ color:"white", fontSize:32, fontWeight:800, marginBottom:10 }}>{lang==="ar" ? "المساعد الطبي الذكي" : "AI Medical Assistant"}</h2>
          <p style={{ color:"#94A3B8", fontSize:16, marginBottom:48 }}>{lang==="ar" ? "اكتب أعراضك وسيوجهك الذكاء الاصطناعي للقسم والطبيب المناسب" : "Describe your symptoms and our AI will guide you to the right specialist"}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {(lang==="ar" ? ["تحليل الأعراض","قراءة التحاليل","تحليل الأشعة"] : ["Symptom Analysis","Lab Results Reading","Radiology Analysis"]).map((feat,i) => {
              const icons = [Activity,Pill,FileText];
              const Icon = icons[i];
              return (
                <div key={i} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:"32px 24px", textAlign:"center" }}>
                  <div style={{ width:64, height:64, background:"rgba(0,102,255,0.15)", border:"1px solid rgba(0,102,255,0.3)", borderRadius:20, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px" }}>
                    <Icon size={28} color="#60A5FA" />
                  </div>
                  <div style={{ color:"white", fontWeight:700, fontSize:17, marginBottom:10 }}>{feat}</div>
                  <div style={{ color:"#94A3B8", fontSize:14, lineHeight:1.7 }}>{(lang==="ar" ? ["أدخل أعراضك ونوجهك للتخصص المناسب","ارفع صورة التحليل للقراءة الأولية","ارفع صورة الأشعة للتحليل الذكي"] : ["Enter symptoms, get directed to right specialist","Upload lab results for preliminary reading","Upload X-ray for AI-powered analysis"])[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: dark ? "#080E18" : "#0D1117", padding:"32px 24px", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:12 }}>
          <div style={{ width:32, height:32, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="18" height="13" viewBox="0 0 22 16" fill="none"><path d="M1 8 L4 8 L6 3 L8 13 L10 6 L12 10 L14 8 L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color:"white", fontWeight:700, fontSize:16 }}>HealPath</span>
        </div>
        <p style={{ color:"#475569", fontSize:13 }}>© 2026 HealPath — {lang==="ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}</p>
      </footer>

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
