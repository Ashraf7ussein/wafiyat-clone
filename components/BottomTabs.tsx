"use client";

import Logo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { LuNewspaper } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbLeaf2 } from "react-icons/tb";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "الوفيات",
    href: "/",
    icon: <TbLeaf2 size={30} />,
  },
  {
    label: "مواعيدي",
    href: "/appointments",
    icon: <FaClockRotateLeft size={22} />,
  },
  { label: "محفوظات", href: "/saved", icon: <FaRegHeart size={26} /> },
  { label: "الخدمات", href: "/services", icon: <LuNewspaper size={26} /> },
  {
    label: "حسابي",
    href: "/profile",
    icon: <IoPersonCircleOutline size={30} />,
  },
];

const BottomTabs = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full bg-background border-t border-text/10">
      <ul className="md:hidden flex items-center justify-around w-full">
        {navLinks.map((item) => (
          <li key={item.href} className="flex-1">
            <Link
              href={item.href}
              className="flex flex-col items-center gap-1 py-2 transition-all duration-300"
            >
              <span
                className={`transition-colors ${
                  item.href === pathname
                    ? "text-primary"
                    : "text-text hover:text-foreground"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xs transition-colors ${
                  item.href === pathname
                    ? "text-primary font-semibold"
                    : "text-text hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomTabs;
