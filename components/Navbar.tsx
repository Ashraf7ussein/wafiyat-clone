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

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex items-center h-16 px-1 lg:px-10">
      <Image src={Logo} alt="website logo" className="w-14 object-cover" />
      <span className="text-xl font-bold mr-4 ml-10">الوفيات</span>

      <ul className="hidden md:flex items-center space-x-6">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-lg text-text flex items-center gap-3 hover:text-white transition-all duration-300"
            >
              <span
                className={` ${item.href === pathname ? "text-primary" : "text-text"}`}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
