import React from "react";
import { 
  Activity, 
  Stethoscope, 
  Heart, 
  Brain, 
  Bone, 
  Lungs, 
  Microscope,
  FileText,
  Scan,
  Users,
  Building,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#0066FF] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066FF]">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#1A1A2E]">
              Heal<span className="text-[#0066FF]">Path</span>
            </span>
          </div>
          
          <div className="hidden items-center gap-8 md:flex text-[15px] font-medium text-slate-600">
            <a href="#" className="text-[#0066FF]">الرئيسية</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">الأطباء</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">الأقسام</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">الصيدلية</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">الوظائف</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden text-[#1A1A2E] hover:text-[#0066FF] hover:bg-blue-50 sm:flex">
              تسجيل الدخول
            </Button>
            <Button className="bg-[#0066FF] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
              حساب جديد
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1A1A2E] pt-24 pb-32 lg:pt-36 lg:pb-40 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#0066FF]/20 blur-[100px]"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <Badge className="bg-white/10 text-blue-300 hover:bg-white/20 mb-6 border-0 backdrop-blur-sm px-3 py-1 text-sm">
                الرعاية الصحية المدعومة بالذكاء الاصطناعي
              </Badge>
              <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6 leading-[1.1]">
                مسار شفائك <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#0066FF] to-blue-400">
                  يبدأ هنا
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                نقدم لك تجربة طبية متكاملة تجمع بين الخبرة البشرية والذكاء الاصطناعي المتقدم. احصل على استشارات، حلل أعراضك، وتابع صحتك بكل سهولة.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-[#0066FF] hover:bg-blue-700 text-white h-14 px-8 text-lg shadow-xl shadow-[#0066FF]/30">
                  احجز موعداً
                  <ChevronLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  المساعد الذكي
                  <Brain className="mr-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl bg-gradient-to-tr from-[#0066FF]/20 to-transparent p-1 shadow-2xl backdrop-blur-sm border border-white/10">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0066FF] to-cyan-400 opacity-30 blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-xl bg-[#1A1A2E] overflow-hidden border border-white/5 flex items-center justify-center">
                  {/* Decorative AI medical UI elements */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                  
                  <div className="relative z-10 w-full p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-2 w-24 bg-blue-500/50 rounded-full"></div>
                      <Activity className="h-8 w-8 text-[#0066FF]" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
                        <div className="h-2 w-1/3 bg-slate-600 rounded-full"></div>
                      </div>
                      <div className="h-12 w-5/6 bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
                        <div className="h-2 w-1/2 bg-blue-500/50 rounded-full"></div>
                      </div>
                      <div className="h-12 w-4/6 bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
                        <div className="h-2 w-1/4 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Heart className="h-6 w-6 text-rose-400" />
                  </div>
                  <div className="absolute bottom-10 left-10 p-3 bg-[#0066FF]/20 backdrop-blur-md rounded-xl border border-blue-500/20 animate-bounce" style={{ animationDuration: '4s' }}>
                    <Scan className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative -mt-12 z-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
              <Users className="h-7 w-7" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1A1A2E]">500+</p>
              <p className="text-sm font-medium text-slate-500">مريض مستفيد يومياً</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
              <Building className="h-7 w-7" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1A1A2E]">5</p>
              <p className="text-sm font-medium text-slate-500">أقسام طبية متخصصة</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
              <Stethoscope className="h-7 w-7" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1A1A2E]">20+</p>
              <p className="text-sm font-medium text-slate-500">طبيب استشاري</p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">الأقسام الطبية</h2>
            <p className="text-slate-600">نقدم رعاية صحية متخصصة في مختلف المجالات الطبية باستخدام أحدث التقنيات والمعايير العالمية.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "العظمية", icon: Bone, color: "text-orange-500", bg: "bg-orange-50" },
              { name: "الصدرية", icon: Lungs, color: "text-sky-500", bg: "bg-sky-50" },
              { name: "الكلى", icon: Activity, color: "text-purple-500", bg: "bg-purple-50" },
              { name: "القلبية", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
              { name: "العصبية", icon: Brain, color: "text-emerald-500", bg: "bg-emerald-50" },
            ].map((dept, i) => (
              <Card key={i} className="group cursor-pointer border-slate-200 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-all duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center gap-4">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${dept.bg} ${dept.color} group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A2E]">{dept.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">أطباء متميزون</h2>
              <p className="text-slate-600 max-w-lg">نخبة من الاستشاريين والأخصائيين لتقديم أفضل رعاية طبية.</p>
            </div>
            <Button variant="ghost" className="text-[#0066FF] hover:bg-blue-50 hidden sm:flex">
              عرض كل الأطباء
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "د. أحمد خليل", spec: "استشاري أمراض قلبية", exp: "15 سنة خبرة", rating: "4.9" },
              { name: "د. سارة محمود", spec: "أخصائية أمراض عصبية", exp: "10 سنوات خبرة", rating: "4.8" },
              { name: "د. عمر الجاسم", spec: "استشاري جراحة عظمية", exp: "20 سنة خبرة", rating: "5.0" },
            ].map((doc, i) => (
              <Card key={i} className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 bg-slate-100 flex items-end justify-center pt-8 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-sm z-20 translate-y-8 flex items-center justify-center text-3xl font-bold text-slate-300 overflow-hidden relative">
                    <img 
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${doc.name}&backgroundColor=0066FF`} 
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <CardContent className="pt-14 pb-8 px-6 text-center">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{doc.name}</h3>
                  <p className="text-[#0066FF] font-medium mb-3">{doc.spec}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                      <Activity className="h-4 w-4" />
                      {doc.exp}
                    </span>
                  </div>
                  <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white">
                    حجز موعد
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Highlight */}
      <section className="py-24 bg-[#1A1A2E] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0066FF]/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#0066FF]/20 text-blue-300 hover:bg-[#0066FF]/30 border border-[#0066FF]/30 mb-6 px-3 py-1">
                ميزة حصرية
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                مساعدك الطبي الذكي <br /> متاح 24/7
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                استخدم الذكاء الاصطناعي لتحليل أعراضك وقراءة تحاليلك الطبية وتوجيهك للطبيب المناسب بشكل فوري ودقيق.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/20 text-blue-400 border border-[#0066FF]/30">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">تحليل الأعراض</h4>
                    <p className="text-slate-400 text-sm">أجب عن بعض الأسئلة وسيقوم النظام بتشخيص مبدئي وتوجيهك للقسم الصحيح.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/20 text-blue-400 border border-[#0066FF]/30">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">قراءة التحاليل</h4>
                    <p className="text-slate-400 text-sm">ارفع صورة تحاليلك المخبرية ليقوم النظام بقراءتها وتبسيط نتائجها لك.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/20 text-blue-400 border border-[#0066FF]/30">
                    <Scan className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">تحليل الصور الشعاعية</h4>
                    <p className="text-slate-400 text-sm">تحليل أولي لصور الأشعة لدعم التشخيص السريع (للاستخدام التوجيهي فقط).</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-10 bg-[#0066FF] hover:bg-blue-600 text-white shadow-lg shadow-[#0066FF]/20">
                جرب المساعد الذكي الآن
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF] to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative h-full w-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col">
                  {/* Chat interface mockup */}
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#0066FF] flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold">المساعد الطبي HealPath</h5>
                      <p className="text-xs text-green-400">متصل الآن</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4 overflow-hidden">
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tr-sm p-4 text-sm max-w-[85%] self-start">
                      مرحباً بك! أنا المساعد الذكي لـ HealPath. كيف يمكنني مساعدتك اليوم؟ يمكنك إخباري بأعراضك أو رفع صورة لتحاليلك.
                    </div>
                    <div className="bg-[#0066FF] text-white rounded-2xl rounded-tl-sm p-4 text-sm max-w-[85%] self-end mr-auto">
                      أعاني من صداع مستمر منذ يومين مع ارتفاع طفيف في الحرارة.
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tr-sm p-4 text-sm max-w-[85%] self-start">
                      <div className="flex space-x-1 mb-2 h-4 items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                      بناءً على ما ذكرت، هذه الأعراض قد تكون... هل تعاني أيضاً من ألم في الحلق أو سعال؟
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                    <div className="flex-1 h-10 bg-white/5 rounded-full border border-white/10 px-4 flex items-center text-slate-400 text-sm">
                      اكتب رسالتك هنا...
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white shrink-0">
                      <ArrowLeft className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0066FF]">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Heal<span className="text-[#0066FF]">Path</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                نظام إدارة المستشفيات الذكي الأول في سوريا، يجمع بين الرعاية الطبية المتميزة وتقنيات الذكاء الاصطناعي.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors cursor-pointer"></div>
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors cursor-pointer"></div>
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">عن المستشفى</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">الأطباء والاستشاريين</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">الأقسام الطبية</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">الخدمات الإلكترونية</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">الوظائف</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">الخدمات الذكية</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">حجز موعد إلكتروني</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">الاستشارات عن بعد</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">تحليل الأعراض بالذكاء الاصطناعي</a></li>
                <li><a href="#" className="hover:text-[#0066FF] transition-colors">بوابة المريض</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-[#0066FF] shrink-0" />
                  <span>دمشق، المزة، شارع المستشفيات، جانب فندق الشام</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-[#0066FF] shrink-0" />
                  <span dir="ltr">+963 11 123 4567</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-[#0066FF] shrink-0" />
                  <span>info@healpath.sy</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} HealPath. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
