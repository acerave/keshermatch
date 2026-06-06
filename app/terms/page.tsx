export const metadata = {
  title: "תנאי שימוש | קשר",
  description: "תנאי השימוש של אתר קשר",
};

export default function TermsPage() {
  return (
    <main className="bg-[#fcfaf8]">
      <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <h1 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            תנאי שימוש
          </h1>

          <p className="mt-4 font-body text-base leading-8 text-stone-600">
            השימוש באתר כפוף לתנאים המפורטים בדף זה. שימוש באתר מהווה הסכמה
            לתנאים אלה.
          </p>

          <div className="mt-8 space-y-8 font-body text-stone-700">
            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                שימוש תקין באתר
              </h2>
              <p className="mt-3 leading-8">
                המשתמש מתחייב לעשות שימוש מכבד, חוקי והוגן באתר, ולהימנע
                מהזנת מידע כוזב, פוגעני או מטעה.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                אחריות המשתמש
              </h2>
              <p className="mt-3 leading-8">
                האחריות על נכונות המידע שנמסר באתר חלה על המשתמש בלבד. המשתמש
                אחראי לכל פעילות המתבצעת באמצעות החשבון שלו.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                אחריות האתר
              </h2>
              <p className="mt-3 leading-8">
                האתר פועל לספק שירות איכותי, אך אינו מתחייב לזמינות רציפה,
                להתאמה מלאה לכל משתמש, או לתוצאה מסוימת מהשימוש בשירות.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                קניין רוחני
              </h2>
              <p className="mt-3 leading-8">
                כל התכנים, העיצובים, הסימנים המסחריים והחומרים באתר שייכים
                לבעלי האתר, אלא אם צוין אחרת, ואין לעשות בהם שימוש ללא אישור
                מראש.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-stone-900">
                שינויים בתנאים
              </h2>
              <p className="mt-3 leading-8">
                אנו רשאים לעדכן את תנאי השימוש מעת לעת. המשך שימוש באתר לאחר
                עדכון התנאים יהווה הסכמה לגרסה המעודכנת.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}