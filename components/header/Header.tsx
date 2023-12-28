import { SOCIALS } from "@/constants";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SectionLinks from "./SectionLinks";

const Header = () => {
    return (
        <header className="container top-0 mb-4 flex justify-between py-3 md:sticky">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src={logo}
                    alt="喵立翰 Miao Li-Han"
                    width={52}
                    height={42}
                />
                <h2 className="text-color-primary md:text-2xl">
                    喵立翰 Miao Li-Han
                </h2>
            </Link>

            <SectionLinks />

            <ul className="hidden items-center gap-4 md:flex">
                {SOCIALS.map(({ name, icon, link }) => (
                    <li key={name}>
                        <a href={link} target="_blank">
                            <Image
                                src={icon}
                                alt={name}
                                width={28}
                                height={28}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
