import { useState } from "react";
import { BarChart3, Users, Calendar, Pill, Briefcase, FileText, Settings, LogOut, Bell, Search, TrendingUp, Plus, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, HealPathLogo, type Lang } from "./shared/UnifiedComponents";

export function HospitalDashboard() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";
  const [activeNav, setActiveNav] = useState("overview");

  const navItems = [
    { id:"overview", icon:BarChart3, label: lang==="ar"?"نظرة عامة":"Overview" },
    { id:"appointments", icon:Calendar, label: lang==="ar"?"الحجوزات":"Appointments" },
    { id:"doctors", icon:Users, label: lang==="ar"?"الأطباء":"Doctors" },
    { id:"pharmacy", icon:Pill, label: lang==="ar"?"الصيدلية":"Pharmacy" },
    { id:"recruitment", icon:Briefcase, label: lang==="ar"?"التوظيف":"Recruitment" },
    { id:"reports", icon:FileText, label: lang==="ar"?"التقارير":"Reports" },
  ];

  const stats = [
    { label:lang==="ar"?"الحجوزات اليوم":"Today's Bookings", value:"47", change:"+12%", up:true, color:"#0066FF", icon:Calendar },
    { label:lang==="ar"?"المرضى النشطون":"Active Patients", value:"1,284", change:"+5%", up:true, color:"#10B981", icon:Users },
    { label:lang==="ar"?"إيرادات الشهر":"Monthly Revenue", value:"4.2M", change:"+8%", up:true, color:"#8B5CF6", icon:TrendingUp },
    { label:lang==="ar"?"طلبات الصيدلية":"Pharmacy Orders", value:"182", change:"-3%", up:false, color:"#F59E0B", icon:Pill },
  ];

  const appointments = [
    { patient:lang==="ar"?"أحمد عبدالله":"Ahmad Abdullah", doctor:lang==="ar"?"د. محمد الأحمد":"Dr. Mohammad Al-Ahmad", dept:lang==="ar"?"العظمية":"Orthopedics", time:"10:00", status:"confirmed" },
    { patient:lang==="ar"?"سارة محمود":"Sara Mahmoud", doctor:lang==="ar"?"د. سارة خليل":"Dr. Sara Khalil", dept:lang==="ar"?"القلبية":"Cardiology", time:"10:30", status:"waiting" },
    { patient:lang==="ar"?"يوسف نجار":"Youssef Najjar", doctor:lang==="ar"?"د. أحمد ياسين":"Dr. Ahmad Yaseen", dept:lang==="ar"?"العصبية":"Neurology", time:"11:00", status:"confirmed" },
    { patient:lang==="ar"?"ليلى حسن":"Layla Hassan", doctor:lang==="ar"?"د. نورة السالم":"Dr. Noura Al-Salem", dept:lang==="ar"?"الصدرية":"Pulmonology", time:"11:30", status:"cancelled" },
    { patient:lang==="ar"?"عمر الزعبي":"Omar Al-Zaabi", doctor:lang==="ar"?"د. عمر الفاروق":"Dr. Omar Al-Farouq", dept:lang==="ar"?"الكلى":"Nephrology", time:"12:00", status:"confirmed" },
  ];

  const jobs = [
    { title:lang==="ar"?"ممرض/ة طوارئ":"Emergency Nurse", dept:lang==="ar"?"طوارئ":"Emergency", count:3, type:lang==="ar"?"دوام كامل":"Full-time" },
    { title:lang==="ar"?"مختبر طبي":"Lab Technician", dept:lang==="ar"?"المختبر":"Laboratory", count:1, type:lang==="ar"?"دوام جزئي":"Part-time" },
    { title:lang==="ar"?"صيدلاني":"Pharmacist", dept:lang==="ar"?"الصيدلية":"Pharmacy", count:2, type:lang==="ar"?"دوام كامل":"Full-time" },
  ];

  const statusConfig = {
    confirmed: { label:lang==="ar"?"مؤكد":"Confirmed", color:"#059669", bg:dark?"rgba(5,150,105,0.15)":"#D1FAE5", icon:CheckCircle2 },
    waiting:   { label:lang==="ar"?"انتظار":"Waiting",  color:"#D97706", bg:dark?"rgba(217,119,6,0.15)":"#FEF3C7", icon:AlertCircle },
    cancelled: { label:lang==="ar"?"ملغى":"Cancelled",  color:"#DC2626", bg:dark?"rgba(220,38,38,0.15)":"#FEE2E2", icon:XCircle },
  };

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bgSecondary, color:colors.text, minHeight:"100vh", fontFamily:font }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="home" />

      <div style={{ display:"flex" }}>
        {/* Sidebar */}
        <aside style={{ width:240, background:dark?"#0D1825":"#1A1A2E", flexShrink:0, height:"calc(100vh - 64px)", position:"sticky", top:64, display:"flex", flexDirection:"column" }}>
          <div style={{ padding:"16px 12px", flex:1 }}>
            <div style={{ fontSize:11, fontWeight:700, color:"#475569", letterSpacing:"0.08em", padding:"0 12px", marginBottom:8, textTransform:"uppercase" }}>
              {lang==="ar"?"القائمة الرئيسية":"Main Menu"}
            </div>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button key={item.id} onClick={() => setActiveNav(item.id)} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", marginBottom:2, background: isActive?"rgba(0,102,255,0.2)":"transparent", color: isActive?"#60A5FA":"#94A3B8", fontFamily:font, fontSize:14, fontWeight: isActive?700:500, textAlign:"start" }}>
                  <Icon size={18} color={isActive?"#60A5FA":"#64748B"} />{item.label}
                </button>
              );
            })}
          </div>
          <div style={{ padding:"12px", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
            {[
              { icon:Settings, label:lang==="ar"?"الإعدادات":"Settings" },
              { icon:LogOut, label:lang==="ar"?"تسجيل الخروج":"Logout" },
            ].map(({ icon:Icon, label },i) => (
              <button key={i} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:10, border:"none", cursor:"pointer", marginBottom:2, background:"transparent", color:"#64748B", fontFamily:font, fontSize:14, fontWeight:500, textAlign:"start" }}>
                <Icon size={16} color="#64748B"/>{label}
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main style={{ flex:1, overflowY:"auto", padding:32 }}>
          {/* Top Bar */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28 }}>
            <div>
              <h1 style={{ fontSize:24, fontWeight:800, color:colors.text, marginBottom:4 }}>
                {lang==="ar"?"لوحة تحكم المستشفى":"Hospital Dashboard"}
              </h1>
              <p style={{ color:colors.textSecondary, fontSize:13 }}>
                {new Date().toLocaleDateString(isRtl?"ar-SA":"en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric" })}
              </p>
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button style={{ display:"flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"10px 20px", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:font }}>
                <Plus size={16}/>{lang==="ar"?"إضافة حجز":"New Booking"}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:28 }}>
            {stats.map((s,i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, padding:20, boxShadow: dark?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:14 }}>
                    <div style={{ width:44, height:44, background:`${s.color}18`, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <Icon size={20} color={s.color}/>
                    </div>
                    <span style={{ fontSize:12, fontWeight:700, color: s.up?"#059669":"#DC2626", background: s.up?(dark?"rgba(5,150,105,0.15)":"#D1FAE5"):(dark?"rgba(220,38,38,0.15)":"#FEE2E2"), padding:"3px 8px", borderRadius:20 }}>
                      {s.change}
                    </span>
                  </div>
                  <div style={{ fontSize:26, fontWeight:800, color:colors.text, marginBottom:4 }}>{s.value}</div>
                  <div style={{ fontSize:13, color:colors.textSecondary }}>{s.label}</div>
                </div>
              );
            })}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20 }}>
            {/* Appointments Table */}
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, overflow:"hidden", boxShadow: dark?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ padding:"18px 20px", borderBottom:`1px solid ${colors.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ fontWeight:800, fontSize:16, color:colors.text }}>{lang==="ar"?"حجوزات اليوم":"Today's Appointments"}</div>
                <div style={{ position:"relative" }}>
                  <Search size={14} color={colors.textSecondary} style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", ...(isRtl?{right:10}:{left:10}) }} />
                  <input placeholder={lang==="ar"?"بحث...":"Search..."} style={{ background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:8, padding: isRtl?"7px 30px 7px 10px":"7px 10px 7px 30px", fontSize:12, color:colors.text, outline:"none", width:160, fontFamily:font }} />
                </div>
              </div>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ background:colors.bgSecondary }}>
                    {[lang==="ar"?"المريض":"Patient", lang==="ar"?"الطبيب":"Doctor", lang==="ar"?"القسم":"Dept", lang==="ar"?"الوقت":"Time", lang==="ar"?"الحالة":"Status"].map((h,i) => (
                      <th key={i} style={{ padding:"10px 16px", textAlign: isRtl?"right":"left", fontSize:12, fontWeight:700, color:colors.textSecondary, borderBottom:`1px solid ${colors.border}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt,i) => {
                    const sc = statusConfig[apt.status as keyof typeof statusConfig];
                    const StatusIcon = sc.icon;
                    return (
                      <tr key={i} style={{ borderBottom: i<appointments.length-1?`1px solid ${colors.border}`:"none" }}>
                        <td style={{ padding:"12px 16px", fontSize:13, fontWeight:600, color:colors.text }}>{apt.patient}</td>
                        <td style={{ padding:"12px 16px", fontSize:13, color:colors.textSecondary }}>{apt.doctor}</td>
                        <td style={{ padding:"12px 16px" }}>
                          <span style={{ background:dark?"rgba(0,102,255,0.15)":"#EFF6FF", color:"#0066FF", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:20 }}>{apt.dept}</span>
                        </td>
                        <td style={{ padding:"12px 16px", fontSize:13, color:colors.textSecondary, display:"flex", alignItems:"center", gap:4 }}>
                          <Clock size={12}/>{apt.time}
                        </td>
                        <td style={{ padding:"12px 16px" }}>
                          <span style={{ background:sc.bg, color:sc.color, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20, display:"inline-flex", alignItems:"center", gap:4 }}>
                            <StatusIcon size={10}/>{sc.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Jobs Panel */}
            <div style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:16, overflow:"hidden", boxShadow: dark?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ padding:"18px 20px", borderBottom:`1px solid ${colors.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ fontWeight:800, fontSize:16, color:colors.text }}>{lang==="ar"?"الوظائف المفتوحة":"Open Positions"}</div>
                <button style={{ background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"6px 14px", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:6, fontFamily:font }}>
                  <Plus size={12}/>{lang==="ar"?"إضافة":"Add"}
                </button>
              </div>
              <div style={{ padding:16, display:"flex", flexDirection:"column", gap:12 }}>
                {jobs.map((job,i) => (
                  <div key={i} style={{ background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:12, padding:14 }}>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:8 }}>
                      <div style={{ fontWeight:700, fontSize:14, color:colors.text }}>{job.title}</div>
                      <span style={{ background:dark?"rgba(0,102,255,0.15)":"#EFF6FF", color:"#0066FF", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>{job.count}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                      <span style={{ fontSize:12, color:colors.textSecondary }}>{job.dept}</span>
                      <span style={{ background:dark?"rgba(16,185,129,0.15)":"#D1FAE5", color:"#059669", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:20 }}>{job.type}</span>
                    </div>
                    <button style={{ width:"100%", background:"transparent", border:`1px solid ${colors.border}`, color:colors.text, padding:"8px", borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:font }}>
                      {lang==="ar"?"عرض المتقدمين":"View Applicants"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
