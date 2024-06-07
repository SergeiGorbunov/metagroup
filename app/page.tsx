import Image from "next/image";
const Main = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 ">
        <Image
          className="rounded-3xl shadow-lg shadow-amber-500"
          src="/images/samosval.jpg"
          alt="logo"
          width={1920}
          height={1080}
        />
        <div className="flex flex-col justify-center items-center gap-4 p-4 h-full">
          <h1 className="text-3xl font-bold text-center text-amber-700 border-b-2 pb-2 border-amber-700">
            Группа компаний МЕТА
          </h1>
          <p className="text-2xl text-center">
            Предоставляем высококачественные строительные материалы по доступным
            ценам
          </p>
          <form
            className="flex flex-col gap-4 text-black text-xl"
            action="post"
          >
            <input
              className="w-full p-4 rounded-xl border-2 border-amber-700 outline-none hover:border-amber-600 hover:scale-105"
              type="text"
              placeholder="Имя"
            />
            <input
              className="w-full p-4 rounded-xl border-2 border-amber-700 outline-none hover:border-amber-600 hover:scale-105"
              type="tel"
              placeholder="Телефон"
            />
            <input
              className="w-full p-4 rounded-xl border-2 border-amber-700 outline-none hover:border-amber-600 hover:scale-105"
              type="text"
              placeholder="Интересующий материал"
            />
            <button
              className="w-full p-4 mb-40 rounded-xl bg-amber-700 hover:bg-amber-600 text-white outline-none transition-all"
              type="submit"
            >
              Рассчитать
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Main;
