import React from "react";
import { Bone, Wind, Droplets, Heart, Brain, Activity, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div dir="rtl" style={{ direction: "rtl", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col w-full overflow-x-hidden text-slate-900 bg-white">
      {/* NAVBAR */}
      <header style={{ backgroundColor: "#1A1A2E" }} className="w-full fixed top-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-8">
          <div style={{ color: "#0066FF" }} className="text-2xl font-bold tracking-tight">
            HealPath
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">الرئيسية</a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">الأطباء</a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">الصيدلية</a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">التوظيف</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1A2E] bg-transparent">دخول</Button>
          <Button style={{ backgroundColor: "#0066FF", color: "#ffffff" }} className="hover:bg-blue-600 border-none">تسجيل</Button>
        </div>
      </header>

      {/* HERO */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-[80vh]">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            مسار شفائك يبدأ هنا
          </h1>
          <p className="text-lg md:text-xl text-slate-400">
            منصة طبية ذكية تجمع حجز المواعيد والذكاء الاصطناعي في مكان واحد
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" style={{ backgroundColor: "#0066FF", color: "#ffffff" }} className="w-full sm:w-auto hover:bg-blue-600 text-lg px-8">
              احجز موعداً الآن
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-[#1A1A2E] text-lg px-8 bg-transparent">
              جرّب المساعد الذكي
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
            <div style={{ color: "#0066FF" }} className="text-4xl font-bold mb-2">500+</div>
            <div className="text-white font-medium">مريض مسجل</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
            <div style={{ color: "#0066FF" }} className="text-4xl font-bold mb-2">5</div>
            <div className="text-white font-medium">أقسام طبية</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20">
            <div style={{ color: "#0066FF" }} className="text-4xl font-bold mb-2">+20</div>
            <div className="text-white font-medium">طبيب متخصص</div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1A1A2E" }}>أقسامنا الطبية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "العظمية", icon: Bone, desc: "علاج وجراحة العظام والمفاصل" },
              { name: "الصدرية", icon: Wind, desc: "أمراض الجهاز التنفسي والربو" },
              { name: "الكلى", icon: Droplets, desc: "أمراض الكلى والمسالك البولية" },
              { name: "القلبية", icon: Heart, desc: "أمراض القلب والأوعية الدموية" },
              { name: "العصبية", icon: Brain, desc: "أمراض الدماغ والجهاز العصبي" },
            ].map((dept, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div style={{ backgroundColor: "#0066FF" }} className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
                  <dept.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1A1A2E" }}>{dept.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1A1A2E" }}>نخبة من الأطباء المتخصصين</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "د. أحمد خليل", spec: "أخصائي الجراحة القلبية", exp: "15 سنة خبرة", init: "أخ" },
              { name: "د. سارة محمود", spec: "استشارية الأمراض العصبية", exp: "12 سنة خبرة", init: "سم" },
              { name: "د. يوسف النجار", spec: "أخصائي جراحة العظام", exp: "10 سنوات خبرة", init: "ين" },
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div style={{ backgroundColor: "#0066FF" }} className="w-24 h-24 rounded-full flex items-center justify-center text-3xl text-white font-bold mb-4">
                  {doc.init}
                </div>
                <h3 className="font-bold text-xl mb-1" style={{ color: "#1A1A2E" }}>{doc.name}</h3>
                <p className="font-medium text-sm mb-3" style={{ color: "#0066FF" }}>{doc.spec}</p>
                <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full mb-6">{doc.exp}</span>
                <Button style={{ backgroundColor: "#0066FF", color: "#ffffff" }} className="w-full hover:bg-blue-600">
                  احجز
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">المساعد الطبي الذكي</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "تحليل الأعراض", icon: Activity, desc: "قم بإدخال أعراضك وسيقوم المساعد الذكي بتوجيهك للتخصص المناسب." },
              { title: "قراءة التحاليل", icon: FileText, desc: "ارفع نتائج تحاليلك الطبية واحصل على شرح مبسط وسريع لمؤشراتك." },
              { title: "تحليل الأشعة", icon: Search, desc: "تقنيات رؤية حاسوبية متقدمة للمساعدة في قراءة صور الأشعة السينية." },
            ].map((feat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div style={{ color: "#0066FF" }} className="bg-[#0066FF]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feat.icon size={28} />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0f0f1c" }} className="py-8 px-6 text-center border-t border-white/10">
        <div style={{ color: "#0066FF" }} className="text-2xl font-bold tracking-tight mb-4">
          HealPath
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">سياسة الخصوصية</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">الشروط والأحكام</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">اتصل بنا</a>
        </div>
        <p className="text-slate-500 text-sm">
          جميع الحقوق محفوظة 2026 © HealPath
        </p>
      </footer>
    </div>
  );
}
