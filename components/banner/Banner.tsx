import { Badge } from "../badge";
import SocialLinks from "../header/SocialLinks";
import Marquee from "./Marquee";

const Banner = () => {
    return (
        <>
            <section className="container">
                <h1 className="mb-4 text-balance bg-primary-gradient bg-clip-text text-center text-[52px] text-transparent md:mb-6 lg:text-8xl">
                    台灣的明天 喵先鋪路
                </h1>

                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
                    <Badge className="px-4 py-3 text-xl lg:text-[1.75rem]">
                        2024 立委參選人
                    </Badge>
                    <div className="primary-shadow flex items-center gap-4 rounded-2xl border border-white bg-white/90 px-4 py-3">
                        <div className="grid size-10 place-items-center rounded-full bg-primary-gradient text-white md:text-2xl lg:text-3xl">
                            3
                        </div>
                        <h2 className="text-[1.75rem] text-color-primary lg:text-[2.5rem]">
                            喵立翰 Miao Li-Han
                        </h2>
                    </div>
                </div>

                <div className="relative mx-auto mt-4 w-max lg:mt-6">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/banner-lg.svg"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/banner-md.svg"
                        />
                        <source srcSet="/banner-sm.svg" />
                        <img
                            src="/banner-lg.svg"
                            alt="喵立翰 Miao Li-Han"
                            className="mx-auto"
                        />
                    </picture>
                    <nav className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-white px-10 py-2 md:hidden">
                        <SocialLinks />
                    </nav>
                </div>
            </section>
            {/* marquee */}
            <Marquee />
        </>
    );
};

export default Banner;
