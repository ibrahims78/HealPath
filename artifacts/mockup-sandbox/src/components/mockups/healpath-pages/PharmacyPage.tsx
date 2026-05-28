import React, { useState } from "react";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Pill, 
  Plus, 
  Minus,
  X,
  CreditCard,
  MapPin,
  Stethoscope,
  Activity,
  Heart,
  Droplet
} from "lucide-react";

const BRAND = {
  blue: "#0066FF",
  navy: "#1A1A2E",
  white: "#FFFFFF",
  gray: "#F8F9FA",
  grayDark: "#6C757D"
};

const CATEGORIES = [
  "الكل",
  "مسكنات",
  "مضادات حيوية",
  "فيتامينات",
  "قلب وضغط",
  "سكري"
];

const MEDICINES = [
  {
    id: 1,
    name: "باراسيتامول 500mg",
    scientificName: "Paracetamol",
    price: 2500,
    inStock: true,
    category: "مسكنات"
  },
  {
    id: 2,
    name: "أموكسيسيلين 250mg",
    scientificName: "Amoxicillin",
    price: 4500,
    inStock: true,
    category: "مضادات حيوية"
  },
  {
    id: 3,
    name: "فيتامين C 1000mg",
    scientificName: "Ascorbic Acid",
    price: 3500,
    inStock: false,
    category: "فيتامينات"
  },
  {
    id: 4,
    name: "أسبرين 100mg",
    scientificName: "Aspirin",
    price: 1500,
    inStock: true,
    category: "قلب وضغط"
  },
  {
    id: 5,
    name: "أملوديبين 5mg",
    scientificName: "Amlodipine",
    price: 5500,
    inStock: true,
    category: "قلب وضغط"
  },
  {
    id: 6,
    name: "ميتفورمين 500mg",
    scientificName: "Metformin",
    price: 3000,
    inStock: true,
    category: "سكري"
  }
];

export function PharmacyPage() {
  const [activeTab, setActiveTab] = useState("الكل");
  const [cartOpen, setCartOpen] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("توصيل للمنزل");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-sans text-[#1A1A2E] flex flex-col">
      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">HealPath</span>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#" className="text-gray-600 hover:text-[#0066FF] font-medium transition-colors">الرئيسية</a>
            <a href="#" className="text-[#0066FF] font-bold transition-colors">الصيدلية</a>
            <a href="#" className="text-gray-600 hover:text-[#0066FF] font-medium transition-colors">استشارات</a>
            <a href="#" className="text-gray-600 hover:text-[#0066FF] font-medium transition-colors">مواعيدي</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#0066FF] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* MAIN CONTENT */}
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${cartOpen ? 'mr-[320px]' : ''}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* PAGE HEADER */}
            <div className="mb-8 bg-gradient-to-l from-[#1A1A2E] to-[#2A2A4A] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-3xl font-bold mb-2">الصيدلية الإلكترونية</h1>
                <p className="text-blue-100 text-lg mb-8">اطلب دواءك بسهولة وأمان، توصيل سريع لجميع المناطق.</p>
                
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="ابحث عن دواء أو مستحضر..." 
                    className="w-full h-14 pl-4 pr-12 rounded-xl border-none shadow-lg text-[#1A1A2E] text-lg focus:ring-2 focus:ring-[#0066FF] outline-none"
                  />
                  <Search className="absolute right-4 w-6 h-6 text-gray-400" />
                  <button className="absolute left-2 h-10 px-6 bg-[#0066FF] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    بحث
                  </button>
                </div>
              </div>
            </div>

            {/* CATEGORY TABS */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat 
                      ? 'bg-[#0066FF] text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {MEDICINES.map((med) => (
                <div key={med.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
                  {/* Image Area */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-[#f0f5ff] flex items-center justify-center p-6 relative">
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {med.inStock ? (
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-md">متوفر</span>
                      ) : (
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-red-100 text-red-700 rounded-md">نفد المخزون</span>
                      )}
                    </div>
                    <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Pill className="w-10 h-10 text-[#0066FF] opacity-80" />
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-[#1A1A2E] mb-1">{med.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{med.scientificName}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <span className="font-bold text-lg text-[#0066FF]">
                        {med.price.toLocaleString('ar-SY')} ل.س
                      </span>
                      <button 
                        disabled={!med.inStock}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                          med.inStock 
                            ? 'bg-[#1A1A2E] text-white hover:bg-[#2A2A4A]' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        أضف للسلة
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* CART SIDEBAR */}
        <aside className={`fixed top-16 right-0 bottom-0 w-[320px] bg-white border-l border-gray-200 shadow-2xl flex flex-col transition-transform duration-300 z-20 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h2 className="font-bold text-lg flex items-center gap-2 text-[#1A1A2E]">
              <ShoppingCart className="w-5 h-5 text-[#0066FF]" />
              سلة الطلبات
            </h2>
            <button 
              onClick={() => setCartOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {/* Cart Items */}
            {[
              { id: 1, name: "باراسيتامول 500mg", price: 2500, qty: 2 },
              { id: 2, name: "أموكسيسيلين 250mg", price: 4500, qty: 1 },
              { id: 4, name: "أسبرين 100mg", price: 1500, qty: 1 }
            ].map(item => (
              <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <Pill className="w-6 h-6 text-[#0066FF] opacity-60" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-[#1A1A2E] mb-1 leading-tight">{item.name}</h4>
                  <div className="text-[#0066FF] font-bold text-sm mb-2">{item.price.toLocaleString('ar-SY')} ل.س</div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-md px-2 py-1">
                      <button className="text-gray-400 hover:text-[#1A1A2E]"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs font-medium w-4 text-center">{item.qty}</span>
                      <button className="text-gray-400 hover:text-[#1A1A2E]"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button className="text-red-400 hover:text-red-600 text-xs font-medium">حذف</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50/50">
            {/* Delivery Options */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3 text-gray-700">طريقة الاستلام</h4>
              <div className="space-y-2">
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  deliveryMethod === "توصيل للمنزل" ? 'border-[#0066FF] bg-blue-50/30' : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    className="w-4 h-4 text-[#0066FF] border-gray-300 focus:ring-[#0066FF]"
                    checked={deliveryMethod === "توصيل للمنزل"}
                    onChange={() => setDeliveryMethod("توصيل للمنزل")}
                  />
                  <div className="mr-3 flex-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">توصيل للمنزل</span>
                  </div>
                </label>
                <label className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  deliveryMethod === "استلام من الصيدلية" ? 'border-[#0066FF] bg-blue-50/30' : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    className="w-4 h-4 text-[#0066FF] border-gray-300 focus:ring-[#0066FF]"
                    checked={deliveryMethod === "استلام من الصيدلية"}
                    onChange={() => setDeliveryMethod("استلام من الصيدلية")}
                  />
                  <div className="mr-3 flex-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">استلام من الصيدلية</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>المجموع الفرعي</span>
                <span className="font-medium">11,000 ل.س</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>رسوم التوصيل</span>
                <span className="font-medium">{deliveryMethod === "توصيل للمنزل" ? "1,500 ل.س" : "مجاناً"}</span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between font-bold text-lg text-[#1A1A2E]">
                <span>الإجمالي</span>
                <span className="text-[#0066FF]">{deliveryMethod === "توصيل للمنزل" ? "12,500 ل.س" : "11,000 ل.س"}</span>
              </div>
            </div>

            <button className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              إتمام الطلب
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
