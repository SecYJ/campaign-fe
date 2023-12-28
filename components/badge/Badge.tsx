import { WithChildren, WithClassName } from "@/types/interface";
import { cn } from "@/utils/cn";

interface Props extends WithChildren, WithClassName {}

const Badge = ({ children, className }: Props) => {
    return (
        <span
            className={cn(
                "rounded-lg bg-text-primary font-bold text-white",
                className,
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
