import { useState } from "react";
import { Bell, Search, Calendar, Pill, Brain, LayoutDashboard, Users, BriefcaseMedical, FileText, ChevronDown, Clock, CheckCircle2, Activity, LogOut, Settings } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, HealPathLogo, type Lang } from "./shared/UnifiedComponents";

export function PatientDashboard() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarLinks = [
    { id:"dashboard", label: lang==="ar"?"الرئيسية":"Dashboard", icon:LayoutDashboard },
    { id:"doctors",   label: lang==="ar"?"الأطباء":"Doctors",     icon:Users },
    { id:"appointments", label: lang==="ar"?"مواعيدي":"Appointments", icon:Calendar },
    { id:"pharmacy",  label: lang==="ar"?"الصيدلية":"Pharmacy",   icon:Pill },
    { id:"recruitment", label: lang==="ar"?"التوظيف":"Careers",   icon:BriefcaseMedical },
    { id:"articles",  label: lang==="ar"?"المقالات":"Articles",   icon:FileText },
  ];

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bg, color:colors.text, minHeight:"100vh", fontFamily:font, display:"flex", flexDirection:"column" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="home" />

      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
        {/* Sidebar */}
        <aside style={{ width:240, background: dark?"#0D1825":"#1A1A2E", display:"flex", flexDirection:"column", flexShrink:0, height:"calc(100vh - 64px)", position:"sticky", top:64 }}>
          <div style={{ flex:1, padding:"20px 12px", overflowY:"auto" }}>
            {sidebarLinks.map(link => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button key={link.id} onClick={() => setActiveTab(link.id)} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", marginBottom:4, background: isActive?"rgba(0,102,255,0.2)":"transparent", color: isActive?"#60A5FA":"#94A3B8", fontFamily:font, fontSize:14, fontWeight: isActive?700:500, textAlign:"start", transition:"all 0.2s" }}>
                  <Icon size={18} color={isActive?"#60A5FA":"#64748B"} />
                  {link.label}
                  {isActive && <div style={{ marginInlineStart:"auto", width:6, height:6, background:"#0066FF", borderRadius:"50%" }} />}
                </button>
              );
            })}
          </div>
          {/* User Profile */}
          <div style={{ padding:"16px 12px", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:12, background:"rgba(255,255,255,0.06)", cursor:"pointer" }}>
              <div style={{ width:36, height:36, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:800, fontSize:14, flexShrink:0 }}>
                {isRtl?"إب":"IB"}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ color:"white", fontWeight:700, fontSize:13, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{isRtl?"إبراهيم عبدالله":"Ibrahim Abdullah"}</div>
                <div style={{ color:"#64748B", fontSize:11 }}>{isRtl?"مريض":"Patient"}</div>
              </div>
              <ChevronDown size={14} color="#64748B" />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex:1, overflowY:"auto", background:colors.bgSecondary }}>
          {/* Top bar */}
          <header style={{ background:colors.card, borderBottom:`1px solid ${colors.border}`, height:64, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 24px", position:"sticky", top:0, zIndex:20 }}>
            <div style={{ position:"relative", width:320 }}>
              <Search size={16} color={colors.textSecondary} style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", ...(isRtl?{right:12}:{left:12}) }} />
              <input placeholder={isRtl?"ابحث عن طبيب أو دواء...":"Search doctors, medicines..."} style={{ width:"100%", background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:24, padding:isRtl?"9px 36px 9px 12px":"9px 12px 9px 36px", fontSize:13, color:colors.text, outline:"none", fontFamily:font }} />
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <button style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", border:"none", color:"white", padding:"8px 18px", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer" }}>
                {isRtl?"حالة طوارئ":"Emergency"}
              </button>
            </div>
          </header>

          <div style={{ padding:32, maxWidth:1100, margin:"0 auto" }}>
            {/* Welcome */}
            <div style={{ marginBottom:32 }}>
              <h1 style={{ fontSize:28, fontWeight:800, color:colors.text, marginBottom:6 }}>
                {isRtl?"مرحباً إبراهيم 👋":"Welcome, Ibrahim 👋"}
              </h1>
              <p style={{ color:colors.textSecondary, fontSize:14 }}>
                {new Date().toLocaleDateString(isRtl?"ar-SA":"en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric" })}
              </p>
            </div>

            {/* Quick Actions */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom:32 }}>
              {[
                { icon:Calendar, label:isRtl?"احجز موعداً":"Book Appointment", sub:isRtl?"استعرض الأطباء المتاحين":"Browse available doctors", gradient:"linear-gradient(135deg,#0066FF,#0052CC)", white:true },
                { icon:Pill, label:isRtl?"الصيدلية الإلكترونية":"E-Pharmacy", sub:isRtl?"اطلب أدويتك بسهولة":"Order your medicines", gradient:null, white:false },
                { icon:Brain, label:isRtl?"المساعد الذكي":"AI Assistant", sub:isRtl?"تحليل الأعراض فوراً":"Instant symptom analysis", gradient:null, white:false },
              ].map((card,i) => {
                const Icon = card.icon;
                return (
                  <div key={i} style={{ background: card.gradient||colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:24, cursor:"pointer", boxShadow: dark?"none":"0 2px 12px rgba(0,0,0,0.06)" }}>
                    <div style={{ width:48, height:48, background: card.white?"rgba(255,255,255,0.2)":"rgba(0,102,255,0.1)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                      <Icon size={22} color={card.white?"white":"#0066FF"} />
                    </div>
                    <div style={{ fontWeight:800, fontSize:16, color:card.white?"white":colors.text, marginBottom:6 }}>{card.label}</div>
                    <div style={{ fontSize:13, color:card.white?"rgba(255,255,255,0.75)":colors.textSecondary }}>{card.sub}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:24 }}>
              {/* Upcoming Appointment */}
              <div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                  <h2 style={{ fontSize:18, fontWeight:800, color:colors.text }}>{isRtl?"الموعد القادم":"Upcoming Appointment"}</h2>
                  <button style={{ color:"#0066FF", background:"none", border:"none", fontSize:13, fontWeight:600, cursor:"pointer" }}>{isRtl?"عرض الكل":"View all"}</button>
                </div>
                <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, overflow:"hidden", boxShadow: dark?"none":"0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ height:4, background:"linear-gradient(90deg,#0066FF,#00A3FF)" }} />
                  <div style={{ padding:24 }}>
                    <div style={{ display:"flex", gap:16, marginBottom:20 }}>
                      <div style={{ width:64, height:64, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:800, fontSize:18, flexShrink:0 }}>
                        {isRtl?"د.أ":"Dr.A"}
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                          <span style={{ background:"#D1FAE5", color:"#059669", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:20, display:"flex", alignItems:"center", gap:4 }}>
                            <CheckCircle2 size={10}/>{isRtl?"مؤكد":"Confirmed"}
                          </span>
                        </div>
                        <div style={{ fontWeight:800, fontSize:17, color:colors.text, marginBottom:4 }}>{isRtl?"د. أحمد محمود":"Dr. Ahmad Mahmoud"}</div>
                        <div style={{ color:"#0066FF", fontSize:13, fontWeight:600 }}>{isRtl?"استشاري أمراض القلب":"Cardiologist"}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:20 }}>
                      {[{Icon:Calendar,text:isRtl?"الخميس، 29 مايو 2026":"Thursday, May 29 2026"},{Icon:Clock,text:isRtl?"10:00 صباحاً":"10:00 AM"}].map(({Icon,text},i) => (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:6, background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:8, padding:"6px 12px", fontSize:13, color:colors.textSecondary }}>
                          <Icon size={14} color="#0066FF"/>{text}
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"flex", gap:10 }}>
                      <button style={{ flex:1, background:"linear-gradient(135deg,#1A1A2E,#0F3460)", color:"white", border:"none", padding:"10px", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer" }}>{isRtl?"تفاصيل الموعد":"Appointment Details"}</button>
                      <button style={{ flex:1, background:"transparent", color:colors.text, border:`1px solid ${colors.border}`, padding:"10px", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer" }}>{isRtl?"إعادة جدولة":"Reschedule"}</button>
                      <button style={{ padding:"10px 14px", background:"transparent", color:"#EF4444", border:"1px solid #FEE2E2", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer" }}>{isRtl?"إلغاء":"Cancel"}</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div>
                <h2 style={{ fontSize:18, fontWeight:800, color:colors.text, marginBottom:16 }}>{isRtl?"النشاط الأخير":"Recent Activity"}</h2>
                <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:20, boxShadow: dark?"none":"0 2px 12px rgba(0,0,0,0.06)" }}>
                  {[
                    {icon:Calendar,color:"#3B82F6",bg:"#EFF6FF",label:isRtl?"تم حجز موعد":"Appointment booked",sub:isRtl?"مع د. أحمد محمود":"With Dr. Ahmad",time:isRtl?"منذ ساعتين":"2 hrs ago"},
                    {icon:Pill,color:"#10B981",bg:"#ECFDF5",label:isRtl?"توصيل الأدوية":"Medicine delivered",sub:isRtl?"طلب رقم #49281":"Order #49281",time:isRtl?"أمس":"Yesterday"},
                    {icon:Brain,color:"#8B5CF6",bg:"#F5F3FF",label:isRtl?"استشارة المساعد":"AI Consultation",sub:isRtl?"تحليل أعراض الصداع":"Headache analysis",time:isRtl?"12 مايو":"May 12"},
                  ].map((item,i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom: i<2?20:0 }}>
                        <div style={{ width:40, height:40, background:dark?colors.bgSecondary:item.bg, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <Icon size={18} color={item.color}/>
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700, fontSize:13, color:colors.text, marginBottom:2 }}>{item.label}</div>
                          <div style={{ fontSize:12, color:colors.textSecondary, marginBottom:2 }}>{item.sub}</div>
                          <div style={{ fontSize:11, color:colors.textSecondary }}>{item.time}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
