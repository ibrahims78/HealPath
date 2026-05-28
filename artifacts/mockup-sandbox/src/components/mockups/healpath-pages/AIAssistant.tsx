import { useState } from "react";
import { Brain, Activity, Pill, FileText, Send, Image as ImageIcon, X, CheckCircle2, Bone, Calendar } from "lucide-react";
import { UnifiedNavbar, theme, useHealPathStore, type Lang } from "./shared/UnifiedComponents";

const SAMPLE_CHAT = {
  ar: [
    { role:"ai", text:"مرحباً بك في المساعد الطبي الذكي لـ HealPath! يمكنني مساعدتك في تحليل أعراضك، قراءة نتائج التحاليل، أو تفسير الأشعة. كيف يمكنني مساعدتك اليوم؟" },
    { role:"user", text:"عندي ألم في الركبة اليمنى وصعوبة في المشي منذ أسبوع تقريباً." },
    { role:"ai", text:"شكراً على المعلومات. بناءً على الأعراض التي ذكرتها، قمت بتحليلها وهذه نتائجي الأولية:", type:"analysis" },
  ],
  en: [
    { role:"ai", text:"Welcome to HealPath's AI Medical Assistant! I can help you analyze symptoms, read lab results, or interpret radiology. How can I assist you today?" },
    { role:"user", text:"I have pain in my right knee and difficulty walking for about a week." },
    { role:"ai", text:"Thank you for the information. Based on the symptoms you described, here is my preliminary analysis:", type:"analysis" },
  ]
};

export function AIAssistant() {
  const { lang, dark, setLang, setDark } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";
  const [activeTab, setActiveTab] = useState(0);

  const tabs = lang==="ar" ? ["تحليل الأعراض","قراءة التحاليل","تحليل الأشعة"] : ["Symptom Analysis","Lab Results","Radiology"];
  const tabIcons = [Activity, Pill, FileText];
  const chat = SAMPLE_CHAT[lang];

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bg, color:colors.text, minHeight:"100vh", fontFamily:font, display:"flex", flexDirection:"column" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="home" />

      <div style={{ flex:1, display:"flex", maxWidth:1200, margin:"0 auto", width:"100%", padding:"32px 24px", gap:24 }}>
        {/* Left: Tabs + Chat */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", minHeight:0 }}>
          {/* Header */}
          <div style={{ background: dark?"#0D1825":"#1A1A2E", borderRadius:20, padding:"24px 28px", marginBottom:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8 }}>
              <div style={{ width:48, height:48, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Brain size={24} color="white"/>
              </div>
              <div>
                <div style={{ color:"white", fontWeight:800, fontSize:20 }}>{lang==="ar"?"المساعد الطبي الذكي":"AI Medical Assistant"}</div>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:2 }}>
                  <div style={{ width:8, height:8, background:"#10B981", borderRadius:"50%", animation:"none" }} />
                  <span style={{ color:"#60A5FA", fontSize:12 }}>{lang==="ar"?"متصل ويعمل":"Connected & Active"}</span>
                </div>
              </div>
            </div>
            <p style={{ color:"#94A3B8", fontSize:14, lineHeight:1.7 }}>
              {lang==="ar" ? "مساعد طبي ذكي يحلل أعراضك ويقرأ نتائج التحاليل والأشعة. تنبيه: هذا تحليل استرشادي لا يغني عن استشارة الطبيب." : "An AI medical assistant that analyzes symptoms and reads lab/radiology results. Disclaimer: This is for guidance only and does not replace medical consultation."}
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display:"flex", gap:2, marginBottom:16, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:14, padding:4 }}>
            {tabs.map((tab,i) => {
              const Icon = tabIcons[i];
              return (
                <button key={i} onClick={() => setActiveTab(i)} style={{ flex:1, padding:"10px 8px", borderRadius:10, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, background: activeTab===i?"linear-gradient(135deg,#0066FF,#0052CC)":"transparent", color: activeTab===i?"white":colors.textSecondary, fontFamily:font, fontSize:13, fontWeight: activeTab===i?700:500, boxShadow: activeTab===i?"0 4px 12px rgba(0,102,255,0.3)":"none", transition:"all 0.2s" }}>
                  <Icon size={15}/>{tab}
                </button>
              );
            })}
          </div>

          {/* Chat Area */}
          <div style={{ flex:1, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:16, padding:20, display:"flex", flexDirection:"column", gap:16, minHeight:360, overflowY:"auto" }}>
            {chat.map((msg,i) => (
              <div key={i}>
                {msg.role==="ai" ? (
                  <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                    <div style={{ width:34, height:34, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <Brain size={16} color="white"/>
                    </div>
                    <div>
                      <div style={{ background:dark?"#1E2A3A":"#EEF4FF", borderRadius:"0 16px 16px 16px", padding:"12px 16px", maxWidth:480, fontSize:14, color:colors.text, lineHeight:1.7 }}>
                        {msg.text}
                      </div>
                      {/* Analysis card */}
                      {msg.type==="analysis" && (
                        <div style={{ marginTop:10, background:colors.card, border:`1px solid ${colors.border}`, borderRadius:14, padding:16, maxWidth:480 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                            <div style={{ width:32, height:32, background:"rgba(0,102,255,0.1)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                              <Bone size={16} color="#0066FF"/>
                            </div>
                            <div>
                              <div style={{ fontWeight:800, color:"#0066FF", fontSize:15 }}>{lang==="ar"?"قسم العظمية":"Orthopedics Dept."}</div>
                              <div style={{ fontSize:11, color:colors.textSecondary }}>{lang==="ar"?"احتمال تشخيص: 85%":"Diagnostic confidence: 85%"}</div>
                            </div>
                          </div>
                          <div style={{ background:colors.bgSecondary, borderRadius:10, padding:12, marginBottom:12 }}>
                            <div style={{ fontSize:13, fontWeight:700, color:colors.text, marginBottom:4 }}>{lang==="ar"?"الطبيب المقترح":"Suggested Doctor"}</div>
                            <div style={{ fontSize:13, color:colors.textSecondary }}>{lang==="ar"?"د. محمد الأحمد — استشاري جراحة العظام — 12 سنة خبرة":"Dr. Mohammad Al-Ahmad — Orthopedic Surgeon — 12 yrs exp."}</div>
                          </div>
                          <div style={{ fontSize:12, color:"#F59E0B", marginBottom:14, display:"flex", alignItems:"center", gap:4 }}>
                            ⚠️ {lang==="ar"?"هذا تحليل استرشادي ولا يُغني عن زيارة الطبيب":"This is a guidance analysis only, not a substitute for medical care."}
                          </div>
                          <button style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"10px", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontFamily:font }}>
                            <Calendar size={14}/>{lang==="ar"?"احجز موعداً الآن":"Book Appointment Now"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ display:"flex", justifyContent:"flex-end" }}>
                    <div style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", borderRadius:"16px 0 16px 16px", padding:"12px 16px", maxWidth:400, fontSize:14, color:"white", lineHeight:1.7 }}>
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div style={{ display:"flex", gap:10, marginTop:14, alignItems:"center" }}>
            <button style={{ width:44, height:44, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <ImageIcon size={18} color={colors.textSecondary}/>
            </button>
            <input placeholder={lang==="ar"?"اكتب أعراضك أو سؤالك الطبي هنا...":"Describe your symptoms or ask a medical question..."} style={{ flex:1, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:12, padding:"12px 16px", fontSize:14, color:colors.text, outline:"none", fontFamily:font, direction:isRtl?"rtl":"ltr" }} />
            <button style={{ width:44, height:44, background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", borderRadius:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 4px 12px rgba(0,102,255,0.4)" }}>
              <Send size={18} color="white"/>
            </button>
          </div>
        </div>

        {/* Right: Features Panel */}
        <div style={{ width:280, flexShrink:0 }}>
          <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:20, marginBottom:20 }}>
            <div style={{ fontWeight:800, fontSize:15, color:colors.text, marginBottom:16 }}>{lang==="ar"?"قدرات المساعد":"Assistant Capabilities"}</div>
            {[
              { icon:Activity, color:"#0066FF", title:lang==="ar"?"تحليل الأعراض":"Symptom Analysis", desc:lang==="ar"?"تشخيص أولي بدقة 85%+":"85%+ preliminary accuracy" },
              { icon:Pill, color:"#10B981", title:lang==="ar"?"قراءة التحاليل":"Lab Results Reading", desc:lang==="ar"?"قراءة نتائج الدم والبول":"Blood & urine test reading" },
              { icon:FileText, color:"#8B5CF6", title:lang==="ar"?"تحليل الأشعة":"Radiology Analysis", desc:lang==="ar"?"أشعة سينية وRMI":"X-Ray & MRI analysis" },
            ].map((feat,i) => {
              const Icon = feat.icon;
              return (
                <div key={i} style={{ display:"flex", gap:12, marginBottom: i<2?16:0, padding:12, background:colors.bgSecondary, borderRadius:12, border:`1px solid ${colors.border}` }}>
                  <div style={{ width:36, height:36, background:`${feat.color}18`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={16} color={feat.color}/>
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13, color:colors.text, marginBottom:2 }}>{feat.title}</div>
                    <div style={{ fontSize:12, color:colors.textSecondary }}>{feat.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ background: dark?"#0D1825":"#1A1A2E", borderRadius:16, padding:20 }}>
            <div style={{ fontWeight:800, fontSize:15, color:"white", marginBottom:12 }}>{lang==="ar"?"تنبيه طبي مهم":"Important Medical Note"}</div>
            <p style={{ color:"#94A3B8", fontSize:13, lineHeight:1.7, marginBottom:16 }}>
              {lang==="ar" ? "المساعد الذكي يقدم تحليلاً استرشادياً أولياً فقط ولا يحل محل الطبيب المتخصص." : "The AI assistant provides preliminary guidance only and does not replace a specialist doctor."}
            </p>
            <button style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"10px", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:font }}>
              {lang==="ar"?"احجز مع طبيب الآن":"Book a Doctor Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
