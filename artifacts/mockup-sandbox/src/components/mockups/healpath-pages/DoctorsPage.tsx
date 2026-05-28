import React, { useState } from "react";
import { 
  Search, Star, Calendar as CalendarIcon, Clock, 
  MessageCircle, Filter, Award, MapPin, CheckCircle2, ChevronRight, Menu, Bell, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const DOCTORS = [
  {
    id: "1",
    name: "د. محمد الأحمد",
    specialty: "استشاري جراحة العظام والمفاصل",
    department: "العظمية",
    experience: "12 سنة خبرة",
    rating: 4.8,
    reviewsCount: 124,
    slotsCount: 5,
    bio: "حاصل على البورد الأمريكي في جراحة العظام، متخصص في جراحة المفاصل الصناعية والإصابات الرياضية.",
    initials: "م.أ",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "د. سارة خليل",
    specialty: "أخصائية أمراض القلب والأوعية الدموية",
    department: "القلبية",
    experience: "8 سنوات خبرة",
    rating: 4.9,
    reviewsCount: 89,
    slotsCount: 3,
    bio: "خبيرة في تشخيص وعلاج أمراض القلب التاجية واضطرابات النظم القلبي. زميلة الكلية الملكية للأطباء.",
    initials: "س.خ",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "3",
    name: "د. أحمد ياسين",
    specialty: "استشاري جراحة الدماغ والأعصاب",
    department: "العصبية",
    experience: "15 سنة خبرة",
    rating: 4.7,
    reviewsCount: 210,
    slotsCount: 2,
    bio: "متخصص في الجراحات الميكروسكوبية الدقيقة لأورام الدماغ وجراحات العمود الفقري المتقدمة.",
    initials: "أ.ي",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "4",
    name: "د. نورة السالم",
    specialty: "استشارية الأمراض الصدرية والتنفسية",
    department: "الصدرية",
    experience: "10 سنوات خبرة",
    rating: 4.6,
    reviewsCount: 156,
    slotsCount: 7,
    bio: "متخصصة في علاج الربو، التليف الرئوي، وأمراض الحساسية التنفسية. أستاذة مساعدة في كلية الطب.",
    initials: "ن.س",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "5",
    name: "د. عمر الفاروق",
    specialty: "أخصائي أمراض الكلى وضغط الدم",
    department: "الكلى",
    experience: "14 سنة خبرة",
    rating: 4.8,
    reviewsCount: 178,
    slotsCount: 4,
    bio: "خبير في إدارة حالات القصور الكلوي المزمن، غسيل الكلى، ومتابعة زراعة الكلى.",
    initials: "ع.ف",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "6",
    name: "د. ريم الحسن",
    specialty: "أخصائية جراحة العظام والعمود الفقري",
    department: "العظمية",
    experience: "6 سنوات خبرة",
    rating: 4.5,
    reviewsCount: 64,
    slotsCount: 8,
    bio: "متخصصة في علاج انحرافات العمود الفقري وآلام الظهر المزمنة والديسك.",
    initials: "ر.ح",
    color: "bg-rose-100 text-rose-700",
  },
];

const DEPARTMENTS = ["الكل", "العظمية", "الصدرية", "الكلى", "القلبية", "العصبية"];

const WEEK_DAYS = [
  { day: "الأحد", date: "15", active: true },
  { day: "الإثنين", date: "16", active: true },
  { day: "الثلاثاء", date: "17", active: false },
  { day: "الأربعاء", date: "18", active: true },
  { day: "الخميس", date: "19", active: true },
  { day: "الجمعة", date: "20", active: false },
  { day: "السبت", date: "21", active: false },
];

const TIME_SLOTS = ["09:00 ص", "10:00 ص", "10:30 ص", "01:00 م", "02:30 م", "04:00 م"];

export function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("الكل");
  const [selectedDoctor, setSelectedDoctor] = useState<typeof DOCTORS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("16");
  const [selectedTime, setSelectedTime] = useState("10:30 ص");

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.includes(searchQuery) || doc.specialty.includes(searchQuery);
    const matchesDept = selectedDept === "الكل" || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleBookClick = (doctor: typeof DOCTORS[0]) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A2E] font-sans" dir="rtl">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">+</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1A1A2E]">HealPath</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="#" className="hover:text-[#0066FF] transition-colors">الرئيسية</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">مواعيدي</a>
            <a href="#" className="text-[#0066FF] font-semibold border-b-2 border-[#0066FF] py-5">الأطباء</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">النتائج الطبية</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-9 h-9 border border-gray-200">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>أ.م</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-500">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">أطباؤنا المتخصصون</h1>
              <p className="text-gray-500">ابحث واحجز موعدك مع نخبة من أفضل الأطباء</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="ابحث باسم الطبيب أو التخصص..."
                className="pr-10 py-6 rounded-2xl border-gray-200 focus-visible:ring-[#0066FF] shadow-sm bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Department Filters */}
          <ScrollArea className="w-full whitespace-nowrap pb-2">
            <div className="flex w-max space-x-2 space-x-reverse">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDept === dept
                      ? "bg-[#1A1A2E] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white rounded-3xl overflow-hidden flex flex-col group">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="w-16 h-16 border-2 border-gray-50">
                      <AvatarFallback className={`text-lg font-bold ${doctor.color}`}>
                        {doctor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <Badge variant="secondary" className="bg-blue-50 text-[#0066FF] hover:bg-blue-100 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {doctor.slotsCount} مواعيد متاحة
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-[#1A1A2E] group-hover:text-[#0066FF] transition-colors">{doctor.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{doctor.specialty}</p>
                    
                    <div className="flex items-center gap-4 pt-2 text-sm">
                      <div className="flex items-center text-amber-500 font-medium">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="mr-1">{doctor.rating}</span>
                        <span className="text-gray-400 text-xs mr-1">({doctor.reviewsCount})</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Award className="w-4 h-4 mr-1 opacity-70" />
                        <span className="mr-1">{doctor.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 border-t border-gray-50 mt-auto bg-gray-50/50">
                  <Button 
                    onClick={() => handleBookClick(doctor)}
                    className="w-full bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl py-6 font-medium shadow-sm hover:shadow transition-all duration-200"
                  >
                    احجز موعداً
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">لا يوجد أطباء مطابقين</h3>
            <p className="text-gray-500">حاول تغيير كلمات البحث أو الفلتر المستخدم</p>
          </div>
        )}
      </main>

      {/* Floating AI Assistant Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#1A1A2E] hover:bg-gray-800 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 z-50 group">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-[#1A1A2E] text-sm font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          المساعد الذكي
        </span>
      </button>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md md:max-w-2xl p-0 overflow-hidden rounded-[2rem] border-none bg-white font-sans" dir="rtl">
          {selectedDoctor && (
            <>
              <div className="bg-[#1A1A2E] text-white p-6 md:p-8 relative overflow-hidden">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#0066FF] rounded-full blur-3xl opacity-20"></div>
                <DialogHeader className="relative z-10 text-right">
                  <DialogTitle className="text-transparent">حجز موعد</DialogTitle>
                  <div className="flex flex-col md:flex-row gap-5 items-start">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-white/10 shadow-lg">
                      <AvatarFallback className={`text-2xl font-bold ${selectedDoctor.color}`}>
                        {selectedDoctor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                      <p className="text-blue-200 font-medium">{selectedDoctor.specialty}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mt-2">
                        <span className="flex items-center bg-white/10 px-2 py-1 rounded-md">
                          <Award className="w-4 h-4 ml-1.5" />
                          {selectedDoctor.experience}
                        </span>
                        <span className="flex items-center bg-white/10 px-2 py-1 rounded-md">
                          <Star className="w-4 h-4 ml-1.5 text-amber-400" />
                          {selectedDoctor.rating} تقييم
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* About */}
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#0066FF]" />
                    نبذة عن الطبيب
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-2xl">
                    {selectedDoctor.bio}
                  </p>
                </div>

                {/* Schedule */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#1A1A2E] flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-[#0066FF]" />
                      اختر اليوم
                    </h3>
                    <span className="text-sm font-medium text-gray-500">سبتمبر 2023</span>
                  </div>
                  
                  <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 hide-scrollbar">
                    {WEEK_DAYS.map((day, idx) => (
                      <button
                        key={idx}
                        disabled={!day.active}
                        onClick={() => setSelectedDate(day.date)}
                        className={`flex flex-col items-center justify-center min-w-[70px] h-20 rounded-2xl transition-all ${
                          !day.active 
                            ? "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400"
                            : selectedDate === day.date
                              ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/20 scale-105 transform"
                              : "bg-white border border-gray-200 text-gray-700 hover:border-[#0066FF]"
                        }`}
                      >
                        <span className="text-xs font-medium mb-1">{day.day}</span>
                        <span className="text-xl font-bold">{day.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0066FF]" />
                    اختر الوقت
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-[#1A1A2E] text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-transparent hover:border-gray-300"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-gray-100">
                  <Button className="w-full bg-[#0066FF] hover:bg-blue-700 text-white rounded-2xl py-7 text-lg font-bold shadow-lg shadow-blue-500/20 transition-transform active:scale-[0.98]">
                    تأكيد الحجز — {selectedDate} سبتمبر، {selectedTime}
                  </Button>
                  <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    الدفع يتم في العيادة
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
