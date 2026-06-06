export const metadata = {
  title: "מדיניות פרטיות | קשר",
  description: "מדיניות הפרטיות של אתר קשר",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#fcfaf8]">
      <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <h1 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            מדיניות פרטיות
          </h1>

          <p className="mt-4 font-body text-base leading-8 text-stone-600">
            אנו מכבדים את פרטיות המשתמשים שלנו ופועלים לשמירה על המידע הנמסר
            במסגרת השימוש באתר.
          </p>

          <div className="mt-8 space-y-8 font-body text-stone-700">
            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                איזה מידע אנו אוספים
              </h2>
              <p className="mt-3 leading-8">
                בעת הרשמה או שימוש באתר, ייתכן שנאסוף פרטים כגון שם, פרטי קשר,
                גיל, עיר, העדפות שימוש ופרטים נוספים שהמשתמש בוחר למסור.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                מטרת השימוש במידע
              </h2>
              <p className="mt-3 leading-8">
                המידע נאסף לצורך תפעול האתר, שיפור השירות, יצירת התאמות טובות
                יותר, יצירת קשר עם המשתמש ומתן חוויית שימוש בטוחה ומכבדת.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                שמירה ואבטחת מידע
              </h2>
              <p className="mt-3 leading-8">
                אנו נוקטים באמצעים סבירים ומקובלים לצורך שמירה על המידע, אך אין
                באפשרותנו להבטיח חסינות מוחלטת מפני כל גישה בלתי מורשית.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                מסירת מידע לצדדים שלישיים
              </h2>
              <p className="mt-3 leading-8">
                המידע לא יועבר לצדדים שלישיים אלא אם הדבר נדרש לצורך תפעול
                השירות, על פי דין, או בהסכמת המשתמש.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                יצירת קשר בנושא פרטיות
              </h2>
              <p className="mt-3 leading-8">
                בכל שאלה בנושא פרטיות ושימוש במידע ניתן לפנות אלינו דרך דף
                יצירת הקשר באתר.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}