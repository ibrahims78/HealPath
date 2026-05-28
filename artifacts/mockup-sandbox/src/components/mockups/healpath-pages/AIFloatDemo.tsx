import { useState } from "react";
import { Brain, Activity, Pill, FileText, X, Bone, Calendar, Moon, Sun, Globe, Bell } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, HealPathLogo, type Lang } from "./shared/UnifiedComponents";

export function AIFloatDemo() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bg, color:colors.text, minHeight:"100vh", fontFamily:font }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="home" />

      {/* Demo page backdrop */}
      <div style={{ padding:"40px 24px", maxWidth:1200, margin:"0 auto" }}>
        {/* Intro card */}
        <div style={{ background: dark?"#0D1825":"#1A1A2E", borderRadius:20, padding:"32px 36px", marginBottom:32, textAlign:"center" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,102,255,0.2)", border:"1px solid rgba(0,102,255,0.35)", borderRadius:20, padding:"6px 16px", marginBottom:16 }}>
            <Brain size={14} color="#60A5FA"/>
            <span style={{ color:"#60A5FA", fontSize:12, fontWeight:600 }}>AI Float Demo</span>
          </div>
          <h1 style={{ color:"white", fontSize:32, fontWeight:800, marginBottom:10 }}>
            {lang==="ar"?"زر المساعد الطبي الطاف":"Floating AI Medical Button Demo"}
          </h1>
          <p style={{ color:"#94A3B8", fontSize:15, lineHeight:1.7, maxWidth:560, margin:"0 auto 24px" }}>
            {lang==="ar" ? "الزر الدائري الأزرق في أسفل الشاشة متاح في جميع صفحات التطبيق. انقر عليه لفتح نافذة المساعد الطبي الذكي." : "The blue circular button at the bottom of every page in the app. Click it to open the AI Medical Assistant drawer."}
          </p>
          <button onClick={() => setAiOpen(true)} style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"14px 32px", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:10, boxShadow:"0 6px 20px rgba(0,102,255,0.4)", fontFamily:font }}>
            <Brain size={18}/>{lang==="ar"?"جرّب المساعد الآن":"Try the Assistant Now"}
          </button>
        </div>

        {/* Feature cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom:32 }}>
          {[
            { icon:Activity, color:"#0066FF", title:lang==="ar"?"تحليل الأعراض":"Symptom Analysis", desc:lang==="ar"?"اكتب أعراضك واحصل على توجيه فوري للقسم الطبي المناسب":"Describe symptoms and get instant guidance to the right department" },
            { icon:Pill, color:"#10B981", title:lang==="ar"?"قراءة التحاليل":"Lab Results Reading", desc:lang==="ar"?"ارفع صورة نتيجة التحليل للحصول على شرح مبسط":"Upload your lab result image for a simplified explanation" },
            { icon:FileText, color:"#8B5CF6", title:lang==="ar"?"تحليل الأشعة":"Radiology Analysis", desc:lang==="ar"?"ارفع صورة الأشعة للتحليل الأولي بالذكاء الاصطناعي":"Upload X-ray or MRI for preliminary AI-powered analysis" },
          ].map((feat,i) => {
            const Icon = feat.icon;
            return (
              <div key={i} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:24, boxShadow: dark?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ width:52, height:52, background:`${feat.color}18`, border:`1px solid ${feat.color}30`, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                  <Icon size={24} color={feat.color}/>
                </div>
                <div style={{ fontWeight:800, fontSize:16, color:colors.text, marginBottom:8 }}>{feat.title}</div>
                <div style={{ fontSize:13, color:colors.textSecondary, lineHeight:1.7 }}>{feat.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Flow diagram */}
        <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:28 }}>
          <h2 style={{ fontWeight:800, fontSize:18, color:colors.text, marginBottom:20 }}>{lang==="ar"?"كيف يعمل المساعد الذكي":"How the AI Assistant Works"}</h2>
          <div style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"space-between", flexWrap:"wrap" }}>
            {[
              { step:"1", icon:Activity, label:lang==="ar"?"أدخل الأعراض":"Enter Symptoms", color:"#0066FF" },
              { step:"→", icon:null, label:"", color:"" },
              { step:"2", icon:Brain, label:lang==="ar"?"يحلل الذكاء الاصطناعي":"AI Analyzes", color:"#8B5CF6" },
              { step:"→", icon:null, label:"", color:"" },
              { step:"3", icon:Bone, label:lang==="ar"?"يقترح القسم":"Suggests Dept.", color:"#10B981" },
              { step:"→", icon:null, label:"", color:"" },
              { step:"4", icon:Calendar, label:lang==="ar"?"زر الحجز المباشر":"Direct Booking", color:"#F59E0B" },
            ].map((item,i) => {
              if (item.step==="→") return <div key={i} style={{ color:colors.textSecondary, fontSize:22, fontWeight:300 }}>→</div>;
              const Icon = item.icon!;
              return (
                <div key={i} style={{ textAlign:"center", flex:1, minWidth:100 }}>
                  <div style={{ width:56, height:56, background:`${item.color}18`, border:`1px solid ${item.color}30`, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 10px" }}>
                    <Icon size={24} color={item.color}/>
                  </div>
                  <div style={{ fontSize:11, fontWeight:700, color:`${item.color}`, marginBottom:4 }}>Step {item.step}</div>
                  <div style={{ fontSize:13, fontWeight:600, color:colors.text }}>{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
