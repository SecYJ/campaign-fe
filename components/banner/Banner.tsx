import { Badge } from "../badge";

const Banner = () => {
    return (
        <section className="container">
            <h1 className="mb-4 text-balance bg-primary-gradient bg-clip-text text-center text-[52px] text-transparent lg:text-8xl">
                台灣的明天 喵先鋪路
            </h1>

            <div className="mx-auto">
                <Badge className="px-4 py-3 text-xl">2024 立委參選人</Badge>
                <div className="grid size-10 place-items-center rounded-full bg-primary-gradient text-white">
                    3
                </div>
            </div>
        </section>
    );
};

export default Banner;
