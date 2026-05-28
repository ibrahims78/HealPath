import { useState } from "react";
import { Search, Star, Calendar, Clock, Award, CheckCircle2, X, ChevronRight } from "lucide-react";
import { UnifiedNavbar, UnifiedAIFloat, theme, useHealPathStore, type Lang } from "./shared/UnifiedComponents";

const DOCTORS_DATA = {
  ar: [
    { id:"1", name:"د. محمد الأحمد", spec:"استشاري جراحة العظام والمفاصل", dept:"العظمية", exp:"12 سنة", rating:4.8, reviews:124, slots:5, init:"م.أ", bio:"حاصل على البورد الأمريكي في جراحة العظام، متخصص في جراحة المفاصل الصناعية والإصابات الرياضية." },
    { id:"2", name:"د. سارة خليل", spec:"أخصائية أمراض القلب والأوعية الدموية", dept:"القلبية", exp:"8 سنوات", rating:4.9, reviews:89, slots:3, init:"س.خ", bio:"خبيرة في تشخيص وعلاج أمراض القلب التاجية واضطرابات النظم القلبي." },
    { id:"3", name:"د. أحمد ياسين", spec:"استشاري جراحة الدماغ والأعصاب", dept:"العصبية", exp:"15 سنة", rating:4.7, reviews:210, slots:2, init:"أ.ي", bio:"متخصص في الجراحات الميكروسكوبية الدقيقة لأورام الدماغ وجراحات العمود الفقري المتقدمة." },
    { id:"4", name:"د. نورة السالم", spec:"استشارية الأمراض الصدرية والتنفسية", dept:"الصدرية", exp:"10 سنوات", rating:4.6, reviews:156, slots:7, init:"ن.س", bio:"متخصصة في علاج الربو والتليف الرئوي وأمراض الحساسية التنفسية." },
    { id:"5", name:"د. عمر الفاروق", spec:"أخصائي أمراض الكلى وضغط الدم", dept:"الكلى", exp:"14 سنة", rating:4.8, reviews:178, slots:4, init:"ع.ف", bio:"خبير في إدارة حالات القصور الكلوي المزمن وغسيل الكلى." },
    { id:"6", name:"د. ريم الحسن", spec:"أخصائية جراحة العظام والعمود الفقري", dept:"العظمية", exp:"6 سنوات", rating:4.5, reviews:64, slots:8, init:"ر.ح", bio:"متخصصة في علاج انحرافات العمود الفقري وآلام الظهر المزمنة." },
  ],
  en: [
    { id:"1", name:"Dr. Mohammad Al-Ahmad", spec:"Orthopedic Surgery Consultant", dept:"Orthopedics", exp:"12 yrs", rating:4.8, reviews:124, slots:5, init:"MA", bio:"American Board certified in orthopedics, specializing in joint replacement and sports injuries." },
    { id:"2", name:"Dr. Sara Khalil", spec:"Cardiology Specialist", dept:"Cardiology", exp:"8 yrs", rating:4.9, reviews:89, slots:3, init:"SK", bio:"Expert in diagnosing and treating coronary artery disease and cardiac arrhythmias." },
    { id:"3", name:"Dr. Ahmad Yaseen", spec:"Neurosurgery Consultant", dept:"Neurology", exp:"15 yrs", rating:4.7, reviews:210, slots:2, init:"AY", bio:"Specialist in microsurgical brain tumor removal and advanced spine surgery." },
    { id:"4", name:"Dr. Noura Al-Salem", spec:"Pulmonology Consultant", dept:"Pulmonology", exp:"10 yrs", rating:4.6, reviews:156, slots:7, init:"NS", bio:"Specialist in asthma, pulmonary fibrosis and respiratory allergy diseases." },
    { id:"5", name:"Dr. Omar Al-Farouq", spec:"Nephrology Specialist", dept:"Nephrology", exp:"14 yrs", rating:4.8, reviews:178, slots:4, init:"OF", bio:"Expert in chronic renal failure management and dialysis care." },
    { id:"6", name:"Dr. Reem Al-Hassan", spec:"Spine & Orthopedics Specialist", dept:"Orthopedics", exp:"6 yrs", rating:4.5, reviews:64, slots:8, init:"RH", bio:"Specialist in spine deformities and chronic back pain." },
  ]
};

const WEEK_DAYS_AR = [{ d:"الأحد",date:"15",active:true },{ d:"الإثنين",date:"16",active:true },{ d:"الثلاثاء",date:"17",active:false },{ d:"الأربعاء",date:"18",active:true },{ d:"الخميس",date:"19",active:true },{ d:"الجمعة",date:"20",active:false },{ d:"السبت",date:"21",active:false }];
const WEEK_DAYS_EN = [{ d:"Sun",date:"15",active:true },{ d:"Mon",date:"16",active:true },{ d:"Tue",date:"17",active:false },{ d:"Wed",date:"18",active:true },{ d:"Thu",date:"19",active:true },{ d:"Fri",date:"20",active:false },{ d:"Sat",date:"21",active:false }];
const TIMES = ["09:00","10:00","10:30","13:00","14:30","16:00"];

const deptColors = ["#3B82F6","#EF4444","#8B5CF6","#10B981","#F59E0B","#3B82F6"];

export function DoctorsPage() {
  const { lang, dark, setLang, setDark, aiOpen, setAiOpen } = useHealPathStore();
  const colors = dark ? theme.dark : theme.light;
  const isRtl = lang === "ar";
  const font = isRtl ? "'Cairo',sans-serif" : "'Inter',sans-serif";

  const [search, setSearch] = useState("");
  const [dept, setDept] = useState(isRtl?"الكل":"All");
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selDate, setSelDate] = useState("16");
  const [selTime, setSelTime] = useState("10:30");

  const doctors = DOCTORS_DATA[lang];
  const depts = lang==="ar" ? ["الكل","العظمية","الصدرية","الكلى","القلبية","العصبية"] : ["All","Orthopedics","Pulmonology","Nephrology","Cardiology","Neurology"];
  const weekDays = lang==="ar" ? WEEK_DAYS_AR : WEEK_DAYS_EN;

  const filtered = doctors.filter(d => {
    const matchSearch = d.name.includes(search)||d.spec.includes(search);
    const matchDept = dept===(lang==="ar"?"الكل":"All")||d.dept===dept;
    return matchSearch && matchDept;
  });

  return (
    <div dir={isRtl?"rtl":"ltr"} style={{ background:colors.bgSecondary, color:colors.text, minHeight:"100vh", fontFamily:font }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <UnifiedNavbar lang={lang} dark={dark} setLang={setLang} setDark={setDark} activePage="doctors" />

      <main style={{ maxWidth:1200, margin:"0 auto", padding:"40px 24px" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:32, flexWrap:"wrap", gap:16 }}>
          <div>
            <h1 style={{ fontSize:32, fontWeight:800, color:colors.text, marginBottom:6 }}>{lang==="ar"?"أطباؤنا المتخصصون":"Our Specialist Doctors"}</h1>
            <p style={{ color:colors.textSecondary, fontSize:14 }}>{lang==="ar"?"ابحث واحجز موعدك مع نخبة من أفضل الأطباء":"Search and book with our top specialists"}</p>
          </div>
          <div style={{ position:"relative" }}>
            <Search size={16} color={colors.textSecondary} style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", ...(isRtl?{right:14}:{left:14}) }} />
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={lang==="ar"?"ابحث باسم الطبيب أو التخصص...":"Search by name or specialty..."} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:12, padding: isRtl?"10px 40px 10px 16px":"10px 16px 10px 40px", fontSize:14, color:colors.text, outline:"none", width:320, fontFamily:font }} />
          </div>
        </div>

        {/* Dept Filter */}
        <div style={{ display:"flex", gap:8, marginBottom:32, flexWrap:"wrap" }}>
          {depts.map(d => (
            <button key={d} onClick={() => setDept(d)} style={{ padding:"8px 18px", borderRadius:24, fontSize:13, fontWeight:600, cursor:"pointer", border: dept===d?"none":"1px solid "+colors.border, background: dept===d?"linear-gradient(135deg,#1A1A2E,#0F3460)":"transparent", color: dept===d?"white":colors.textSecondary, fontFamily:font, transition:"all 0.2s" }}>
              {d}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {filtered.map((doc,i) => (
            <div key={doc.id} style={{ background:colors.card, border:`1px solid ${colors.border}`, borderRadius:20, overflow:"hidden", boxShadow: dark?"none":"0 2px 12px rgba(0,0,0,0.06)", display:"flex", flexDirection:"column" }}>
              <div style={{ padding:24, flex:1 }}>
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:16 }}>
                  <div style={{ width:64, height:64, background:`linear-gradient(135deg,${deptColors[i]},${deptColors[i]}99)`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:800, fontSize:18 }}>{doc.init}</div>
                  <span style={{ background:dark?"rgba(0,102,255,0.15)":"#EFF6FF", color:"#0066FF", fontSize:12, fontWeight:700, padding:"4px 10px", borderRadius:20, display:"flex", alignItems:"center", gap:4 }}>
                    <Clock size={11}/>{doc.slots} {lang==="ar"?"مواعيد":"slots"}
                  </span>
                </div>
                <div style={{ fontWeight:800, fontSize:16, color:colors.text, marginBottom:4 }}>{doc.name}</div>
                <div style={{ color:colors.textSecondary, fontSize:13, marginBottom:12 }}>{doc.spec}</div>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <span style={{ color:"#F59E0B", fontWeight:700, fontSize:13, display:"flex", alignItems:"center", gap:4 }}>
                    <Star size={13} fill="#F59E0B"/> {doc.rating} <span style={{ color:colors.textSecondary, fontWeight:400 }}>({doc.reviews})</span>
                  </span>
                  <span style={{ color:colors.textSecondary, fontSize:12, display:"flex", alignItems:"center", gap:4 }}>
                    <Award size={12}/>{doc.exp}
                  </span>
                </div>
              </div>
              <div style={{ padding:"12px 20px", borderTop:`1px solid ${colors.border}`, background:dark?"rgba(255,255,255,0.02)":colors.bgSecondary }}>
                <button onClick={() => { setSelectedDoc(doc); setModalOpen(true); }} style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"11px", borderRadius:12, fontSize:14, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 12px rgba(0,102,255,0.3)", fontFamily:font }}>
                  {lang==="ar"?"احجز موعداً":"Book Appointment"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {modalOpen && selectedDoc && (
        <div style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div onClick={() => setModalOpen(false)} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)" }} />
          <div style={{ position:"relative", background:colors.card, borderRadius:24, width:"100%", maxWidth:620, maxHeight:"90vh", overflowY:"auto", boxShadow:"0 24px 64px rgba(0,0,0,0.4)" }}>
            {/* Modal Header */}
            <div style={{ background:"linear-gradient(135deg,#1A1A2E,#0F3460)", padding:"28px 28px 24px", borderRadius:"24px 24px 0 0", position:"relative" }}>
              <button onClick={() => setModalOpen(false)} style={{ position:"absolute", top:16, ...(isRtl?{left:16}:{right:16}), background:"rgba(255,255,255,0.15)", border:"none", color:"white", width:32, height:32, borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <X size={16}/>
              </button>
              <div style={{ display:"flex", gap:20, alignItems:"center" }}>
                <div style={{ width:72, height:72, background:"linear-gradient(135deg,#0066FF,#00A3FF)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:800, fontSize:22, flexShrink:0 }}>{selectedDoc.init}</div>
                <div>
                  <div style={{ color:"white", fontWeight:800, fontSize:22, marginBottom:4 }}>{selectedDoc.name}</div>
                  <div style={{ color:"#93C5FD", fontSize:14, marginBottom:8 }}>{selectedDoc.spec}</div>
                  <div style={{ display:"flex", gap:8 }}>
                    <span style={{ background:"rgba(255,255,255,0.15)", color:"white", fontSize:12, padding:"4px 10px", borderRadius:20, display:"flex", alignItems:"center", gap:4 }}><Award size={11}/>{selectedDoc.exp}</span>
                    <span style={{ background:"rgba(255,255,255,0.15)", color:"white", fontSize:12, padding:"4px 10px", borderRadius:20, display:"flex", alignItems:"center", gap:4 }}><Star size={11} fill="white"/>{selectedDoc.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding:28 }}>
              {/* Bio */}
              <div style={{ background:colors.bgSecondary, border:`1px solid ${colors.border}`, borderRadius:14, padding:16, marginBottom:24 }}>
                <div style={{ fontWeight:700, fontSize:14, color:colors.text, marginBottom:8 }}>{lang==="ar"?"نبذة عن الطبيب":"About the Doctor"}</div>
                <p style={{ fontSize:13, color:colors.textSecondary, lineHeight:1.7 }}>{selectedDoc.bio}</p>
              </div>

              {/* Date Picker */}
              <div style={{ marginBottom:24 }}>
                <div style={{ fontWeight:700, fontSize:15, color:colors.text, marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
                  <Calendar size={16} color="#0066FF"/>{lang==="ar"?"اختر اليوم":"Select Day"}
                </div>
                <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:4 }}>
                  {weekDays.map((day,i) => (
                    <button key={i} disabled={!day.active} onClick={() => day.active && setSelDate(day.date)} style={{ minWidth:70, height:76, borderRadius:16, cursor:day.active?"pointer":"not-allowed", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, background: !day.active?colors.bgSecondary: selDate===day.date?"linear-gradient(135deg,#0066FF,#0052CC)":colors.card, opacity: day.active?1:0.4, border:`1px solid ${selDate===day.date?"transparent":colors.border}`, boxShadow: selDate===day.date?"0 4px 12px rgba(0,102,255,0.4)":"none", flexShrink:0 }}>
                      <span style={{ fontSize:11, fontWeight:600, color: selDate===day.date?"white":colors.textSecondary }}>{day.d}</span>
                      <span style={{ fontSize:20, fontWeight:800, color: selDate===day.date?"white":colors.text }}>{day.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div style={{ marginBottom:28 }}>
                <div style={{ fontWeight:700, fontSize:15, color:colors.text, marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
                  <Clock size={16} color="#0066FF"/>{lang==="ar"?"اختر الوقت":"Select Time"}
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
                  {TIMES.map((t,i) => (
                    <button key={i} onClick={() => setSelTime(t)} style={{ padding:"12px", borderRadius:12, fontSize:14, fontWeight:600, cursor:"pointer", border:"none", background: selTime===t?"linear-gradient(135deg,#1A1A2E,#0F3460)":colors.bgSecondary, color: selTime===t?"white":colors.text, fontFamily:font, boxShadow: selTime===t?"0 4px 12px rgba(0,0,0,0.2)":"none" }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Button */}
              <button onClick={() => setModalOpen(false)} style={{ width:"100%", background:"linear-gradient(135deg,#0066FF,#0052CC)", color:"white", border:"none", padding:"16px", borderRadius:14, fontSize:16, fontWeight:800, cursor:"pointer", boxShadow:"0 6px 20px rgba(0,102,255,0.4)", fontFamily:font }}>
                {lang==="ar"?`تأكيد الحجز — ${selDate} مايو، الساعة ${selTime}`:`Confirm Booking — May ${selDate} at ${selTime}`}
              </button>
              <p style={{ textAlign:"center", fontSize:12, color:colors.textSecondary, marginTop:10, display:"flex", alignItems:"center", justifyContent:"center", gap:4 }}>
                <CheckCircle2 size={12}/>{lang==="ar"?"الدفع يتم في العيادة":"Payment at clinic"}
              </p>
            </div>
          </div>
        </div>
      )}

      <UnifiedAIFloat lang={lang} dark={dark} aiOpen={aiOpen} setAiOpen={setAiOpen} colors={colors} />
    </div>
  );
}
