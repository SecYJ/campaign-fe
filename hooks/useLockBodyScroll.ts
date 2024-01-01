import { useEffect } from "react";

const useLockBodyScroll = <T>(dep: T) => {
    useEffect(() => {
        const bodyStyle = document.body.style;

        if (dep) {
            bodyStyle.paddingRight = "15px";
            bodyStyle.overflow = "hidden";
        } else {
            bodyStyle.paddingRight = "0px";
            bodyStyle.overflow = "visible";
        }

        return () => {
            bodyStyle.paddingRight = "0px";
            bodyStyle.overflow = "visible";
        };
    }, [dep]);
};

export default useLockBodyScroll;
