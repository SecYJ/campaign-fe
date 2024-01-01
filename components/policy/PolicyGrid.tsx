"use client";

import Image from "next/image";
import { Modal } from "@/components";

const policyData = [
    {
        title: "為毛孩子謀福利！推動寵物醫療保障方案",
        img: "/policy/policy-1.svg",
    },
    {
        title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
        img: "/policy/policy-2.svg",
    },
    {
        title: "推廣寵物飼養教育，讓愛更加專業",
        img: "/policy/policy-3.svg",
    },
];

const PolicyGrid = () => {
    return (
        <Modal>
            <ul className="mt-10 grid gap-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-16">
                {policyData.map(({ title, img }) => (
                    <li key={title}>
                        <h4 className="mb-4 text-balance text-2xl font-bold">
                            {title}
                        </h4>

                        <Modal.Open name={title}>
                            <Image
                                src={img}
                                alt={title}
                                className="w-full"
                                width={397}
                                height={267}
                            />
                        </Modal.Open>

                        <Modal.Window title="政策議題" name={title}>
                            <div>
                                <Modal.Sidebar title={title} img={img} />
                            </div>
                        </Modal.Window>
                    </li>
                ))}
            </ul>
        </Modal>
    );
};

export default PolicyGrid;
