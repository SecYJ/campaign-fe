import Image from "next/image";
import { SOCIALS } from "@/constants";

const SocialLinks = () => {
    return (
        <ul className="flex items-center gap-4">
            {SOCIALS.map(({ name, icon, link }) => (
                <li key={name}>
                    <a href={link} target="_blank">
                        <Image src={icon} alt={name} width={28} height={28} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;
