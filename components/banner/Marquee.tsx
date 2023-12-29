const Marquee = () => {
    return (
        <section className="flex gap-6 overflow-hidden bg-color-primary">
            <h2 className="marquee-animation shrink-0 space-x-6 whitespace-nowrap py-2.5 text-[2.5rem] text-white lg:text-[4rem]">
                <span>為喵星人，護台灣！</span>
                <span>從喵的眼中，看見台灣</span>
                <span>喵的未來，人的希望</span>
            </h2>
            <h2 className="marquee-animation shrink-0 space-x-6 whitespace-nowrap py-2.5 text-[2.5rem] text-white lg:text-[4rem]">
                <span>為喵星人，護台灣！</span>
                <span>從喵的眼中，看見台灣</span>
                <span>喵的未來，人的希望</span>
            </h2>
        </section>
    );
};

export default Marquee;
