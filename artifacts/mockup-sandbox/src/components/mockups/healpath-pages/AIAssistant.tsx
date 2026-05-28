import React, { useState } from "react";
import { Stethoscope, FlaskConical, Activity, Brain, Image as ImageIcon, Send, ArrowRight, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AIAssistant() {
  return (
    <div dir="rtl" className="flex h-screen w-full bg-[#f8f9fa] font-sans overflow-hidden">
      {/* CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          80% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-active {
          position: relative;
        }
        .pulse-active::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          display: block;
          width: 100%; height: 100%;
          border-radius: 50%;
          background-color: #0066FF;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          z-index: -1;
        }
      `}} />

      {/* Left Panel (1/3) */}
      <div className="w-1/3 bg-[#1A1A2E] text-white flex flex-col p-6 shadow-2xl z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">HealPath</span>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 flex items-center justify-center pulse-active">
              <Brain className="w-6 h-6 text-[#0066FF]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">المساعد الطبي الذكي</h2>
              <p className="text-sm text-gray-400">متصل وجاهز للمساعدة</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">الخدمات المتاحة</h3>
          
          <button className="flex items-center gap-3 w-full bg-[#0066FF]/10 text-[#0066FF] p-4 rounded-xl border border-[#0066FF]/20 transition-all">
            <Stethoscope className="w-5 h-5" />
            <span className="font-medium text-sm">تحليل الأعراض</span>
            <div className="mr-auto w-2 h-2 rounded-full bg-[#0066FF]"></div>
          </button>
          
          <button className="flex items-center gap-3 w-full hover:bg-white/5 text-gray-300 p-4 rounded-xl border border-transparent transition-all group">
            <FlaskConical className="w-5 h-5 group-hover:text-white" />
            <span className="font-medium text-sm group-hover:text-white">قراءة التحاليل</span>
          </button>
          
          <button className="flex items-center gap-3 w-full hover:bg-white/5 text-gray-300 p-4 rounded-xl border border-transparent transition-all group">
            <Activity className="w-5 h-5 group-hover:text-white" />
            <span className="font-medium text-sm group-hover:text-white">تحليل الأشعة</span>
          </button>
        </div>

        <div className="mt-auto p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
          <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 leading-relaxed">
            يستخدم هذا المساعد تقنيات الذكاء الاصطناعي لتقديم إرشادات طبية أولية. في حالات الطوارئ، يرجى الاتصال بالإسعاف فوراً.
          </p>
        </div>
      </div>

      {/* Right Panel (2/3) */}
      <div className="w-2/3 flex flex-col bg-white">
        {/* Header */}
        <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">تشخيص الأعراض</h1>
              <p className="text-xs text-gray-500">جلسة جديدة</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 text-gray-600">
            <Plus className="w-4 h-4" />
            محادثة جديدة
          </Button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-[#0066FF] text-white p-4 rounded-2xl rounded-tr-sm max-w-md shadow-sm">
              <p className="text-sm leading-relaxed">
                عندي ألم في الركبة اليمنى وصعوبة في المشي منذ أسبوع
              </p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center shrink-0 shadow-md">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <Card className="border-0 shadow-lg shadow-gray-100 max-w-lg rounded-2xl rounded-tl-sm overflow-hidden bg-white">
              <div className="h-1 bg-gradient-to-r from-[#0066FF] to-blue-300 w-full"></div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  بناءً على الأعراض المذكورة (ألم في الركبة اليمنى وصعوبة في المشي لمدة أسبوع)، قد يكون هناك التهاب في المفصل، إصابة في الأربطة، أو خشونة. يُرشَّح مراجعة:
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-[#0066FF] hover:bg-blue-100 border-0">
                      قسم العظمية
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-blue-50 text-[#0066FF] font-medium">م.أ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">د. محمد الأحمد</p>
                        <p className="text-xs text-gray-500">استشاري جراحة العظام — 12 سنة خبرة</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-lg">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>هذا تحليل استرشادي أولي ولا يُغني عن الفحص الطبي المباشر من قبل الطبيب المختص.</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50/50 border-t border-gray-50 flex gap-3">
                <Button className="bg-[#0066FF] hover:bg-blue-700 text-white flex-1 shadow-md shadow-blue-500/20">
                  احجز موعداً الآن
                </Button>
                <Button variant="outline" className="flex-1 text-gray-700 border-gray-200">
                  سؤال آخر
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto flex items-end gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
            <button className="p-3 text-gray-400 hover:text-[#0066FF] transition-colors rounded-xl hover:bg-blue-50 shrink-0">
              <ImageIcon className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea 
                placeholder="اكتب أعراضك هنا للتشخيص الأولي..." 
                className="w-full bg-transparent border-0 focus:ring-0 resize-none max-h-32 min-h-[44px] py-3 text-sm text-gray-700 placeholder:text-gray-400"
                rows={1}
                dir="rtl"
              />
            </div>
            <button className="p-3 bg-[#0066FF] hover:bg-blue-700 text-white transition-colors rounded-xl shrink-0 shadow-md shadow-blue-500/20">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            الذكاء الاصطناعي يمكن أن يخطئ. يرجى التحقق من المعلومات الطبية الهامة.
          </p>
        </div>
      </div>
    </div>
  );
}
