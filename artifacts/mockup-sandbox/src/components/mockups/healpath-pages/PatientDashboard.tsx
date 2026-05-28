import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Calendar, 
  Pill, 
  BrainCircuit, 
  LayoutDashboard, 
  Users, 
  BriefcaseMedical, 
  FileText, 
  ChevronDown,
  Clock,
  CheckCircle2,
  Bot
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarLinks = [
    { id: 'dashboard', label: 'القسم الرئيسي', icon: LayoutDashboard },
    { id: 'doctors', label: 'الأطباء', icon: Users },
    { id: 'appointments', label: 'مواعيدي', icon: Calendar },
    { id: 'pharmacy', label: 'الصيدلية', icon: Pill },
    { id: 'recruitment', label: 'التوظيف', icon: BriefcaseMedical },
    { id: 'articles', label: 'المقالات', icon: FileText },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-[#1A1A2E] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-slate-200 flex-shrink-0 flex flex-col hidden md:flex h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="text-xl font-bold text-[#1A1A2E]">HealPath</span>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#0066FF]/10 text-[#0066FF] font-medium' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-[#1A1A2E]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#0066FF]' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors">
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=ibrahim" />
              <AvatarFallback className="bg-[#0066FF] text-white">إب</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#1A1A2E] truncate">إبراهيم عبدالله</p>
              <p className="text-xs text-slate-500 truncate">مريض</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full hidden md:block">
              <Search className="w-4 h-4 absolute end-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="ابحث عن طبيب، موعد، أو دواء..." 
                className="w-full bg-slate-100 border-none rounded-full py-2.5 pe-10 ps-4 text-sm focus:ring-2 focus:ring-[#0066FF]/20 focus:outline-none placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-[#1A1A2E] transition-colors rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 start-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-3 md:hidden">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-[#0066FF] text-white">إب</AvatarFallback>
              </Avatar>
            </div>
            <Button className="hidden md:flex bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white rounded-full px-6">
              حالة الطوارئ
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  مرحباً إبراهيم <span className="text-2xl animate-wave origin-bottom-right">👋</span>
                </h1>
                <p className="text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date().toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white rounded-xl shadow-lg shadow-[#0066FF]/20 w-full md:w-auto h-12 md:h-10">
                  <Calendar className="w-4 h-4 me-2" />
                  حجز موعد جديد
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-[#0066FF] to-blue-600 text-white overflow-hidden relative group">
                <div className="absolute top-0 start-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="w-24 h-24" />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">احجز موعداً جديداً</h3>
                  <p className="text-blue-100 text-sm">استعرض الأطباء المتاحين واحجز فوراً</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#0066FF]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0066FF] transition-colors duration-300">
                    <Pill className="w-6 h-6 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">الصيدلية الإلكترونية</h3>
                  <p className="text-slate-500 text-sm">اطلب أدويتك وتابع الوصفات الطبية</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <BrainCircuit className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">المساعد الذكي</h3>
                  <p className="text-slate-500 text-sm">تحليل الأعراض واستشارات فورية</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upcoming Appointment */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#1A1A2E]">الموعد القادم</h2>
                  <Button variant="ghost" className="text-[#0066FF] hover:bg-[#0066FF]/10 hover:text-[#0066FF]">
                    عرض كل المواعيد
                  </Button>
                </div>
                
                <Card className="border-slate-100 shadow-sm overflow-hidden">
                  <div className="bg-[#1A1A2E] h-2 w-full"></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Avatar className="w-16 h-16 border-2 border-slate-100 shrink-0">
                          <AvatarImage src="https://i.pravatar.cc/150?u=dr_ahmed" />
                          <AvatarFallback>د.أ</AvatarFallback>
                        </Avatar>
                        <div>
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-2 border-none font-medium">
                            <CheckCircle2 className="w-3 h-3 me-1" /> مؤكد
                          </Badge>
                          <h3 className="text-xl font-bold text-[#1A1A2E]">د. أحمد محمود</h3>
                          <p className="text-[#0066FF] font-medium text-sm">استشاري أمراض القلب والأوعية الدموية</p>
                          
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg text-sm border border-slate-100">
                              <Calendar className="w-4 h-4 text-[#0066FF]" />
                              <span>الخميس، ٢٥ مايو ٢٠٢٤</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg text-sm border border-slate-100">
                              <Clock className="w-4 h-4 text-[#0066FF]" />
                              <span>١٠:٠٠ صباحاً</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 min-w-[140px] justify-center border-t md:border-t-0 md:border-r md:border-r-slate-100 pt-4 md:pt-0 md:pr-6">
                        <Button className="w-full bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white">
                          تفاصيل الموعد
                        </Button>
                        <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50">
                          إعادة جدولة
                        </Button>
                        <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                          إلغاء الموعد
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1A1A2E]">النشاط الأخير</h2>
                <Card className="border-slate-100 shadow-sm h-[320px] overflow-hidden">
                  <CardContent className="p-6 h-full">
                    <div className="space-y-6 relative before:absolute before:inset-0 before:me-[23px] before:translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                      
                      {/* Activity 1 */}
                      <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 border-4 border-white flex items-center justify-center flex-shrink-0 z-10 text-[#0066FF]">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="pt-2">
                          <p className="font-semibold text-[#1A1A2E] text-sm">تم حجز موعد جديد</p>
                          <p className="text-slate-500 text-xs mt-1">مع د. أحمد محمود - قسم القلب</p>
                          <p className="text-slate-400 text-xs mt-1">منذ ساعتين</p>
                        </div>
                      </div>

                      {/* Activity 2 */}
                      <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 border-4 border-white flex items-center justify-center flex-shrink-0 z-10 text-emerald-600">
                          <Pill className="w-5 h-5" />
                        </div>
                        <div className="pt-2">
                          <p className="font-semibold text-[#1A1A2E] text-sm">تم توصيل الأدوية</p>
                          <p className="text-slate-500 text-xs mt-1">طلب رقم #49281 مكتمل</p>
                          <p className="text-slate-400 text-xs mt-1">أمس، ٠٤:٣٠ مساءً</p>
                        </div>
                      </div>

                      {/* Activity 3 */}
                      <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-50 border-4 border-white flex items-center justify-center flex-shrink-0 z-10 text-purple-600">
                          <BrainCircuit className="w-5 h-5" />
                        </div>
                        <div className="pt-2">
                          <p className="font-semibold text-[#1A1A2E] text-sm">استشارة المساعد الذكي</p>
                          <p className="text-slate-500 text-xs mt-1">تحليل أعراض الصداع النصفي</p>
                          <p className="text-slate-400 text-xs mt-1">١٢ مايو، ١٠:١٥ صباحاً</p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-8 start-8 z-50">
        <button className="group flex items-center gap-3 bg-[#0066FF] text-white p-4 rounded-full shadow-xl shadow-[#0066FF]/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-blue-600">
          <Bot className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium px-0 group-hover:px-2">
            المساعد الطبي
          </span>
        </button>
      </div>

    </div>
  );
}
