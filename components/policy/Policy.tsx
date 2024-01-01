import { TitleWithBadge } from "@/components";
import PolicyGrid from "./PolicyGrid";

const Policy = () => {
    return (
        <section className="bg-bg-theme-1 py-16">
            <div className="container">
                <TitleWithBadge badge="POLICY ISSUES" title="政策議題" />
                <PolicyGrid />
            </div>
        </section>
    );
};

export default Policy;
