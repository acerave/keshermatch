"use client";

import Link from "next/link";
import { Heart, Users, Sparkles } from "lucide-react";
import { KesherAnimatedLogo } from "./components/brand/KesherAnimatedLogo";

export default function HomePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <KesherAnimatedLogo tagline="מסורת, משפחה, התאמה חכמה" />

          <nav className="hidden md:flex gap-6">
            <Link href="/traditional">מסורתיים</Link>
            <Link href="/secular">חילוניים</Link>
            <Link href="/mixed">מעורב</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-5xl font-black leading-tight">
              למצוא את
              <span className="block bg-gradient-to-r from-rose-500 via-orange-500 to-sky-500 text-transparent bg-clip-text">
                החיבור הנכון
              </span>
              בדרך חדשה
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              שילוב בין שדכנות מסורתית לבין בינה מלאכותית ליצירת התאמות מדויקות יותר.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-gradient-to-r from-rose-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition">
                הצטרפות מוקדמת
              </button>

              <a href="#tracks" className="px-8 py-4 rounded-full bg-white shadow border">
                לראות מסלולים
              </a>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-rose-200 via-orange-100 to-sky-200 rounded-3xl shadow-2xl flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Heart, title: "רגש", text: "התאמות עמוקות יותר" },
            { icon: Users, title: "משפחה", text: "מעורבות הורית חכמה" },
            { icon: Sparkles, title: "חדשנות", text: "AI מתקדם" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <Icon className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            );
          })}
        </section>

        {/* TRACKS */}
        <section id="tracks" className="mt-24 grid md:grid-cols-3 gap-6">
          {[
            { name: "מסורתי", link: "/traditional" },
            { name: "חילוני", link: "/secular" },
            { name: "מעורב", link: "/mixed" },
          ].map((t) => (
            <Link key={t.name} href={t.link}>
              <div className="p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
                <h3 className="text-2xl font-bold">{t.name}</h3>
              </div>
            </Link>
          ))}
        </section>

        {/* SIGNUP */}
        <section className="mt-24 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">השאירו פרטים</h2>

          <form className="mt-8 max-w-xl mx-auto space-y-4">
            <input placeholder="שם" className="w-full p-3 border rounded-xl" />
            <input placeholder="אימייל" className="w-full p-3 border rounded-xl" />
            <input placeholder="טלפון" className="w-full p-3 border rounded-xl" />

            <button className="w-full bg-black text-white py-3 rounded-xl">
              שליחה
            </button>
          </form>
        </section>

      </main>
    </div>
  );
}