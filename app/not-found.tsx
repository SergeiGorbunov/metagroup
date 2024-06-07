import Image from "next/image";
import sadCar from "@/images/sadCar.png";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-center mb-40">
        <div className="flex flex-col gap-10 p-3">
          <h1 className="text-3xl">К сожалению, такой страницы у нас нет</h1>
          <p className="text-2xl">
            Но вы можете посмотреть наши другие страницы
          </p>
          <Link className="bg-amber-700 text-white p-5 rounded-3xl" href="/">
            Вернуться на главную
          </Link>
        </div>
        <Image src={sadCar} alt="404 not found" width={500} />
      </section>
    </>
  );
}
