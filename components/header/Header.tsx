import Image from "next/image";
import Link from "next/link";
import SectionLinks from "./SectionLinks";
import SocialLinks from "./SocialLinks";
import logo from "@/public/logo.svg";

const Header = () => {
    return (
        <div className="top-0 z-10 bg-white md:sticky">
            <header className="container mb-4 flex justify-between py-3">
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

                <nav className="hidden md:block">
                    <SocialLinks />
                </nav>
            </header>
        </div>
    );
};

export default Header;
