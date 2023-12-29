import { Badge } from "../badge";

const Banner = () => {
    return (
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

            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/public/banner-lg.svg"
                />
                <source
                    media="(min-width: 768px)"
                    srcSet="/public/banner-md.svg"
                />
                <source srcSet="/public/banner-sm.svg" />
                <img src="/public/banner-lg.svg" alt="喵立翰 Miao Li-Han" />
            </picture>
        </section>
    );
};

export default Banner;
