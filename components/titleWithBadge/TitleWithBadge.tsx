import { ReactNode } from "react";
import { Badge } from "@/components";

interface Props {
    badge: ReactNode;
    title: ReactNode;
}

const TitleWithBadge = ({ badge, title }: Props) => {
    return (
        <div className="text-center">
            <Badge className="px-3 py-2">{badge}</Badge>
            <h2 className="bg-primary-gradient bg-clip-text text-[3.25rem] text-transparent lg:text-[4rem]">
                {title}
            </h2>
        </div>
    );
};

export default TitleWithBadge;
