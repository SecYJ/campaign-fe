import Image from "next/image";
import { SOCIALS } from "@/constants";
import { cn } from "@/utils/cn";

interface Props {
    rounded?: boolean;
}

const SocialLinks = ({ rounded }: Props) => {
    return (
        <ul className="flex items-center gap-4">
            {SOCIALS.map(({ name, icon, link }) => (
                <li key={name}>
                    <a
                        href={link}
                        target="_blank"
                        className={cn(
                            rounded && "rounded-full bg-white p-2.5",
                            "inline-block",
                        )}
                    >
                        <Image src={icon} alt={name} width={28} height={28} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;
