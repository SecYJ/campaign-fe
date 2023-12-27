"use client";
import { useState } from "react";
import { HEADER_NAV_LINKS } from "@/constants/header";
import { cn } from "@/utils/cn";

const SectionLinks = () => {
    const [selected, setSelected] = useState("");

    return (
        <nav className="text-primary hidden items-center gap-8 xl:flex">
            {HEADER_NAV_LINKS.map(({ label, href }) => (
                <a
                    href={href}
                    key={label}
                    className={cn(
                        "text-lg transition-opacity",
                        selected && selected !== label && "opacity-30",
                    )}
                    onMouseEnter={() => setSelected(label)}
                    onMouseOut={() => setSelected("")}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default SectionLinks;
