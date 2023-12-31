import { CandidateName } from "@/components/candidateName";
import SocialLinks from "@/components/header/SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-bg-theme-2 py-16">
            <div className="container grid gap-6 lg:grid-cols-2 lg:justify-items-center lg:gap-4">
                <section className="space-y-4">
                    <CandidateName />
                    <SocialLinks rounded />
                    <p className="text-sm">
                        © 2023 喵立翰 Miao Li-Han 版權所有
                    </p>
                </section>
                <section>
                    <h3 className="mb-4 text-2xl font-bold">競選總部</h3>
                    <ul>
                        <li>辦公室地址: 喵星區, 毛茸茸大道88號, 喵喵大樓3樓</li>
                        <li>電話：(02) 888-5678 電子郵件地</li>
                        <li>電話：(02) 888-5678 電子郵件地</li>
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
