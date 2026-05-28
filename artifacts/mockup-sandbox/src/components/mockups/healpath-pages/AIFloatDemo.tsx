import React from "react";
import { BrainCircuit, X, Stethoscope, FlaskConical, ScanLine, Send, ImageIcon } from "lucide-react";

export function AIFloatDemo() {
  return (
    <div dir="rtl" className="relative w-full h-screen overflow-hidden bg-slate-100 font-sans">
      {/* Blurred Background Hospital Page Simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none filter blur-sm opacity-60">
        <div className="w-full h-16 bg-white shadow-sm flex items-center px-8 justify-between">
          <div className="w-32 h-6 bg-slate-200 rounded"></div>
          <div className="flex gap-4">
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
        <div className="p-8">
          <div className="w-3/4 h-64 bg-white rounded-xl shadow-sm mb-8"></div>
          <div className="grid grid-cols-3 gap-6">
            <div className="h-48 bg-white rounded-xl shadow-sm"></div>
            <div className="h-48 bg-white rounded-xl shadow-sm"></div>
            <div className="h-48 bg-white rounded-xl shadow-sm"></div>
          </div>
        </div>
      </div>

      {/* Overlay to dim background */}
      <div className="absolute inset-0 bg-slate-900/20 z-10"></div>

      {/* FLOATING BUTTON (Positioned bottom right in RTL -> bottom right is left in LTR, but RTL right is normal right. Left is right. Wait, in RTL `left-8` means left side of screen. But design says "bottom-right corner". In RTL, bottom-right is visually the right side, so we should use `right-8` or `start-8`? Let's use `right-8`) */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#0066FF] animate-ping opacity-40 duration-1000"></div>
          <button className="relative w-[60px] h-[60px] rounded-full bg-[#0066FF] shadow-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
            <BrainCircuit className="w-[28px] h-[28px] text-white" />
          </button>
        </div>
        <span className="text-[#0066FF] font-medium text-sm drop-shadow-sm bg-white/90 px-2.5 py-0.5 rounded-full shadow-sm border border-blue-50">المساعد الطبي</span>
      </div>

      {/* OPEN DRAWER PANEL (Sliding from right in RTL, which is left? No, usually sidebars in Arabic are on the right. Design says sliding from right. Let's pin it to right side `right-0`) */}
      <div className="absolute top-0 left-0 h-full w-[400px] bg-white shadow-2xl z-30 flex flex-col">
        {/* Header */}
        <div className="bg-[#1A1A2E] text-white p-4 flex items-center justify-between">
          <div className="font-semibold text-lg flex items-center gap-2">
            المساعد الطبي الذكي 🤖
          </div>
          <button className="text-slate-300 hover:text-white transition-colors bg-white/10 rounded-full p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b">
          <button className="flex-1 py-3 flex flex-col items-center gap-1.5 text-[#0066FF] border-b-2 border-[#0066FF] bg-blue-50/50">
            <Stethoscope className="w-5 h-5" />
            <span className="text-xs font-medium">تحليل الأعراض</span>
          </button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1.5 text-slate-500 hover:bg-slate-50 transition-colors border-b-2 border-transparent">
            <FlaskConical className="w-5 h-5" />
            <span className="text-xs font-medium">قراءة التحاليل</span>
          </button>
          <button className="flex-1 py-3 flex flex-col items-center gap-1.5 text-slate-500 hover:bg-slate-50 transition-colors border-b-2 border-transparent">
            <ScanLine className="w-5 h-5" />
            <span className="text-xs font-medium">تحليل الأشعة</span>
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-slate-50/50">
          {/* AI Greeting */}
          <div className="flex justify-start">
            <div className="bg-blue-50 text-slate-800 p-3.5 rounded-2xl rounded-tr-none max-w-[85%] text-sm border border-blue-100/50 shadow-sm leading-relaxed">
              مرحباً! أخبرني عن أعراضك وسأساعدك في التوجه للقسم المناسب
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-[#0066FF] text-white p-3.5 rounded-2xl rounded-tl-none max-w-[85%] text-sm shadow-md leading-relaxed">
              عندي ألم في الركبة وصعوبة في المشي
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[95%] text-sm border border-slate-100 shadow-sm space-y-4">
              <p className="leading-relaxed">بناءً على الأعراض، يُنصح بمراجعة:</p>
              
              <div className="inline-block bg-blue-50 text-[#0066FF] font-semibold px-3 py-1.5 rounded-lg text-sm border border-blue-100">
                🦴 قسم العظمية
              </div>

              <div className="border border-slate-100 rounded-xl p-3.5 space-y-3 bg-slate-50/50">
                <div>
                  <div className="font-semibold text-slate-900">د. محمد الأحمد</div>
                  <div className="text-slate-500 text-xs mt-0.5">أخصائي عظام — 12 سنة خبرة</div>
                </div>
                <button className="w-full bg-[#0066FF] hover:bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                  احجز موعداً الآن
                </button>
              </div>

              <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1">
                ⚠️ هذا تحليل استرشادي أولي
              </div>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-full hover:bg-slate-100">
              <ImageIcon className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="اكتب أعراضك هنا..." 
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white focus:ring-1 focus:ring-[#0066FF] rounded-full py-3 px-5 text-sm outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <button className="p-3 bg-[#0066FF] text-white rounded-full hover:bg-blue-600 transition-colors flex-shrink-0 shadow-md hover:shadow-lg">
              <Send className="w-4 h-4 rtl:-scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIFloatDemo;