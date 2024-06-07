import Link from "next/link";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center mb-40">
      <h1 className="text-3xl">Контакты</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-center">
        <div className="flex flex-col gap-3 border-2 border-amber-700 p-3 rounded-3xl">
          <h2 className="text-2xl">Щебень, керамзит, ЩПС</h2>
          <Link
            className="hover:text-amber-600 transition-all text-xl"
            href="tel:88005553535"
          >
            ☏ 8-800-555-35-35
          </Link>
          <p className="text-2xl">Анжела</p>
        </div>
        <div className="flex flex-col gap-3 border-2 border-amber-700 p-3 rounded-3xl">
          <h2 className="text-2xl">Бетон</h2>
          <Link
            className="hover:text-amber-600 transition-all text-xl"
            href="tel:88005553535"
          >
            ☏ 8-800-555-35-35
          </Link>
          <p className="text-2xl">Алескей</p>
        </div>
      </section>
    </div>
  );
}
