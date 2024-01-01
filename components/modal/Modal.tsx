"use client";

import Image from "next/image";
import {
    Dispatch,
    ReactNode,
    cloneElement,
    createContext,
    useContext,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@/hooks";
import { SocialLinks } from "@/components";

interface ModalProps {
    name: string;
    setName: Dispatch<string>;
}

const ModalContext = createContext<ModalProps | null>(null);

const Modal = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState("");

    useLockBodyScroll(name);

    return (
        <ModalContext.Provider
            value={{
                name,
                setName,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

const Window = ({
    children,
    title,
    name: modalName,
}: {
    title: string;
    name: string;
    children: ReactNode;
}) => {
    const { name, setName } = useModal();
    if (modalName !== name) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 grid items-center bg-black/50 px-8"
            data-overlay="overlay"
            onClick={(e) => {
                if ((e.target as HTMLElement).dataset.overlay === "overlay") {
                    setName("");
                }
            }}
        >
            <div className="container h-[75vh] rounded-3xl bg-white px-12 pb-12 pt-6">
                <div className="flex justify-between">
                    <h2 className="mb-4 text-2xl font-bold lg:text-[2rem]">
                        {title}
                    </h2>
                    <button type="button" onClick={() => setName("")}>
                        <Image
                            src="/cancel.svg"
                            alt="cancel button"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
                {children}
            </div>
        </div>,
        document.body,
    );
};

const Open = ({ children, name }: { children: JSX.Element; name: string }) => {
    const { setName } = useModal();

    return cloneElement(children, {
        onClick: () => setName(name),
    });
};

const Sidebar = ({ title, img }: { title: string; img: string }) => {
    return (
        <aside>
            <Image src={img} alt={title} width={507} height={318} />
            <h4 className="mb-2 mt-4 text-sm font-normal">{title}</h4>
            <SocialLinks share />
        </aside>
    );
};

const useModal = () => {
    const modal = useContext(ModalContext);
    if (!modal) throw new Error("Modal is not inside modal provider");

    return modal;
};

Modal.Window = Window;
Modal.Open = Open;
Modal.Sidebar = Sidebar;

export default Modal;

/*
API DESIGN for modal

Modal.Sidebar 

Modal.Content
*/
