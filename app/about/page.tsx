import carierImage from "@/images/karier.jpg";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full text-center mb-40 sm:mb-20">
        <Image
          className="rounded-3xl"
          src={carierImage}
          alt="about us"
          width={1920}
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-center justify-center">
            О нас
          </h1>
          <p className="text-lg border-2 p-4 border-amber-700 rounded-3xl">
            Мы - группа компаний МЕТА, специализирующаяся на предоставлении
            высококачественных строительных материалов. Мы гарантируем
            надежность и профессионализм в каждом из наших продуктов. НАС
            ВЫБИРАЮТ ЗА: -Присылаем фотографии материалов перед доставкой. В
            наличии все виды фракций -Доставка в день заказа! Работаем как за
            наличный, так и за безналичный расчет -Договор поставки: Чтобы вы
            всегда были уверены в качестве -Доставка в любое время. Напишите нам
            в чат, чтобы получить дополнительную информацию и оформить заказ.
            Создайте прочное и надежное основание для ваших строительных
            проектов!
          </p>
        </div>
      </section>
    </>
  );
}
