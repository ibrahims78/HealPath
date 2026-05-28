import { 
  BarChart3, 
  Users, 
  Calendar, 
  Pill, 
  Briefcase, 
  FileText, 
  Settings,
  LogOut,
  Bell,
  Search,
  TrendingUp,
  Plus,
  Clock
} from "lucide-react";

export function HospitalDashboard() {
  return (
    <div dir="rtl" className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#1A1A2E] text-white flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-[#0066FF] flex items-center justify-center">H</span>
            HealPath
          </h1>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0066FF] text-white transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">الإحصائيات</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">إدارة الأطباء</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">الحجوزات</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <Pill className="w-5 h-5" />
            <span className="font-medium">الصيدلية</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">التوظيف</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">المحتوى</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">الإعدادات</span>
          </a>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066FF] to-blue-400 flex items-center justify-center font-bold">
                م
              </div>
              <div>
                <div className="font-medium text-sm">أحمد محمود</div>
                <div className="text-xs text-white/50">المدير العام</div>
              </div>
            </div>
            <button className="p-2 text-white/50 hover:text-white transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
            <p className="text-sm text-gray-500">الخميس، 24 أكتوبر 2024</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="ابحث هنا..." 
                className="pl-4 pr-10 py-2.5 bg-gray-100 border-transparent rounded-lg focus:bg-white focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none w-64 transition-all"
              />
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3 ml-1" />
                    +12%
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">152</h3>
                <p className="text-gray-500 font-medium">حجز اليوم</p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3 ml-1" />
                    +4%
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">1,240</h3>
                <p className="text-gray-500 font-medium">مريض مسجل</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                    <Pill className="w-6 h-6" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    <TrendingUp className="w-3 h-3 ml-1" />
                    +8%
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <h3 className="text-3xl font-bold text-gray-800">38,500</h3>
                  <span className="text-gray-500 text-sm">ل.س</span>
                </div>
                <p className="text-gray-500 font-medium">مبيعات الصيدلية</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">12</h3>
                <p className="text-gray-500 font-medium">طلب توظيف جديد</p>
              </div>
            </div>

            {/* Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Column - Table (60%) */}
              <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">أحدث الحجوزات</h3>
                  <button className="text-sm font-medium text-[#0066FF] hover:underline">عرض الكل</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-sm">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                      <tr>
                        <th className="py-3 px-6">المريض</th>
                        <th className="py-3 px-6">الطبيب</th>
                        <th className="py-3 px-6">القسم</th>
                        <th className="py-3 px-6">الوقت</th>
                        <th className="py-3 px-6">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">سارة الخالد</td>
                        <td className="py-4 px-6">د. محمد نور</td>
                        <td className="py-4 px-6">القلبية</td>
                        <td className="py-4 px-6 text-gray-500">10:30 صباحاً</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">مؤكد</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">يوسف أحمد</td>
                        <td className="py-4 px-6">د. ريم علي</td>
                        <td className="py-4 px-6">الأسنان</td>
                        <td className="py-4 px-6 text-gray-500">11:00 صباحاً</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">قيد الانتظار</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">لينا محمود</td>
                        <td className="py-4 px-6">د. سامر كمال</td>
                        <td className="py-4 px-6">العصبية</td>
                        <td className="py-4 px-6 text-gray-500">12:15 ظهراً</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">مؤكد</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">عمر حسن</td>
                        <td className="py-4 px-6">د. نادية سعد</td>
                        <td className="py-4 px-6">الأطفال</td>
                        <td className="py-4 px-6 text-gray-500">01:00 ظهراً</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">ملغى</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium">هدى سمير</td>
                        <td className="py-4 px-6">د. طارق زيد</td>
                        <td className="py-4 px-6">العظام</td>
                        <td className="py-4 px-6 text-gray-500">02:30 ظهراً</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">مؤكد</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column - Quick Actions (40%) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Action Buttons */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">إجراءات سريعة</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors">
                      <Plus className="w-5 h-5" />
                      إضافة طبيب جديد
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors">
                      <Briefcase className="w-5 h-5" />
                      نشر وظيفة جديدة
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors">
                      <Pill className="w-5 h-5" />
                      إضافة دواء
                    </button>
                  </div>
                </div>

                {/* Latest Applications */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800">أحدث طلبات التوظيف</h3>
                    <button className="text-sm font-medium text-[#0066FF] hover:underline">عرض الكل</button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          خ
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">خالد مراد</div>
                          <div className="text-xs text-gray-500">طبيب عام</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        منذ ساعتين
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                          م
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">منى سالم</div>
                          <div className="text-xs text-gray-500">ممرضة قانونية</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        منذ 5 ساعات
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                          ر
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">رامي عادل</div>
                          <div className="text-xs text-gray-500">فني أشعة</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        أمس
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Pharmacy List */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">الأدوية الأكثر مبيعاً</h3>
                <button className="text-sm font-medium text-[#0066FF] hover:underline">الذهاب للصيدلية</button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { name: "بانادول إكسترا", count: "145 علبة", rev: "145,000 ل.س" },
                    { name: "أوغمنتين 1غ", count: "89 علبة", rev: "356,000 ل.س" },
                    { name: "بروفين 400", count: "120 علبة", rev: "180,000 ل.س" },
                    { name: "فيتامين سي كومبلكس", count: "65 علبة", rev: "97,500 ل.س" },
                    { name: "شراب سعلة طبيعي", count: "54 علبة", rev: "108,000 ل.س" }
                  ].map((med, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center mb-3 shadow-sm">
                        <Pill className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{med.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">المبيعات: {med.count}</p>
                      <div className="text-sm font-medium text-green-600">{med.rev}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
