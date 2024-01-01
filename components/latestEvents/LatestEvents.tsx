import Image from "next/image";
import { TitleWithBadge } from "@/components";
import { eventData } from "@/constants/latestEvents";

const LatestEvents = () => {
    return (
        <section className="container py-16 lg:py-28">
            <TitleWithBadge title="最新活動" badge="LATEST EVENTS" />
            <figure className="mt-10 grid gap-6 lg:grid-cols-2">
                <div>
                    <Image
                        src="/latestEvents/banner.svg"
                        alt="event-banner"
                        width={648}
                        height={407}
                        className="w-full"
                    />
                    <div className="mt-4 space-y-2 text-text-primary">
                        <p className="text-sm text-slate-400">2023/12/26</p>
                        <figcaption className=" text-xl font-bold">
                            參與台北寵物論壇，爭取貓咪友善環境
                        </figcaption>
                        <p className="text-balance">
                            炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                            VIP 休憩空間。
                        </p>
                    </div>
                </div>
                <div>
                    <ul className="space-y-5">
                        {eventData.map(({ img, title, description, date }) => (
                            <li className="flex gap-4" key={title}>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={200}
                                    height={200}
                                />
                                <article className="space-y-2">
                                    <p className="text-sm text-slate-400">
                                        {date}
                                    </p>
                                    <h4 className="font-bold">{title}</h4>
                                    <p className="text-sm">{description}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="mt-5 flex items-center gap-2 rounded-full bg-slate-100 px-6 py-4 font-semibold"
                    >
                        查看更多
                        <Image
                            src="/arrow_forward.svg"
                            alt="check more"
                            width={32}
                            height={32}
                        />
                    </button>
                </div>
            </figure>
        </section>
    );
};

export default LatestEvents;
