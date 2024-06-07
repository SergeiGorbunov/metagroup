import Link from "next/link";
export default function Header() {
  const menuItems = [
    { name: "Главная", href: "/", icon: "🏠" },
    { name: "Каталог", href: "/catalog", icon: "📦" },
    { name: "О нас", href: "/about", icon: "👥" },
    { name: "Контакты", href: "/contacts", icon: "☎️" },
  ];
  return (
    <header>
      <nav>
        {/* Шапка для десктопа */}
        <ul className="sm:flex hidden gap-10 p-4 text-xl center justify-between sm:justify-center border-b border-amber-700">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:text-amber-600 transition-all "
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Шапка для мобильных устройств */}
        <ul className="sm:hidden flex justify-center gap-3 p-5 text-lg fixed bottom-0 w-full border-t border-amber-700 text-center bg-black opacity-90 rounded-t-2xl">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:text-amber-600 transition-all text-nowrap"
                href={item.href}
              >
                <p>{item.icon}</p>

                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
