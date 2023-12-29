import { Badge } from "../badge";

const Advocate = () => {
    return (
        <section className="bg-bg-theme-2">
            <div className="container py-16 lg:py-24">
                <figure className="lg:grid lg:grid-cols-2">
                    <article className="space-y-8 text-balance rounded-tl-3xl rounded-tr-3xl bg-white px-6 py-10 lg:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl lg:px-10 lg:py-16">
                        <div className="text-center">
                            <Badge className="px-3 py-2">ADVOCATE</Badge>
                            <figcaption className="bg-primary-gradient bg-clip-text text-[3.25rem] text-transparent lg:text-[4rem]">
                                候選人主張
                            </figcaption>
                        </div>
                        <p className="text-2xl font-bold text-text-primary lg:text-3xl">
                            我堅信 ! 藉由推動更完善的
                            <strong className="text-color-primary">
                                貓咪福利
                            </strong>
                            和相關政策，更是間接地投資於
                            <strong className="text-color-primary">
                                台灣的未來
                            </strong>
                            。
                        </p>
                        <p className="text-text-primary lg:text-lg">
                            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                            GDP 經濟帶來巨大效益。
                            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                        </p>
                    </article>
                    <picture>
                        <source
                            media="(min-width: 640px)"
                            srcSet="/advocate-lg.svg"
                        />
                        <img
                            src="/advocate-sm.svg"
                            className="w-full rounded-bl-3xl rounded-br-3xl lg:rounded-none lg:rounded-br-3xl lg:rounded-tr-3xl"
                            alt="候選人主張"
                        />
                    </picture>
                </figure>
            </div>
        </section>
    );
};

export default Advocate;
