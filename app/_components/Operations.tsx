import React from "react";
import Image from "next/image";

import { FaAngleDown } from "react-icons/fa";

const operationsList = [
  { name: "Gallery", isNew: true, img: "/operations/gallery.jpg" },
  { name: "Bell", isNew: false, img: "/operations/bell.jpg" },
  { name: "Calendar", isNew: false, img: "/operations/calendar.jpg" },
  { name: "Gear", isNew: true, img: "/operations/gear.jpg" },
  { name: "Message", isNew: true, img: "/operations/message.jpg" },
  { name: "Pen", isNew: true, img: "/operations/pen.jpg" },
  { name: "Pencil", isNew: true, img: "/operations/pencil.jpg" },
  { name: "Plaster", isNew: false, img: "/operations/plaster.jpg" },
];

type Operation = (typeof operationsList)[0];

const Operations = () => {
  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Generate</h2>
        <button className="flex items-center gap-1 text-blue-500 dark:text-blue-500">
          <FaAngleDown className="size-5" aria-hidden="true" />
          <span>Show all</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {operationsList.map(({ name, isNew, img }, idx) => (
          <Operation key={idx} name={name} isNew={isNew} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Operations;

function Operation({ img, isNew, name }: Operation) {
  return (
    <div className="flex items-start gap-2">
      <div className="relative shrink-0">
        <Image
          src={img}
          width={40}
          height={40}
          alt=""
          aria-hidden="true"
          className="rounded-xl"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[rgba(255,_255,_255,_0.6)] to-[rgba(0,_0,_0,_0)]"></div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2>{name}</h2>
          {isNew && (
            <span className="rounded-xl bg-blue-500 px-2 py-0.5 text-sm dark:text-white">
              New
            </span>
          )}
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing?
        </p>
      </div>
      <button className="ml-4 basis-[80px] cursor-pointer self-center rounded-xl bg-[#e0e0e0] px-2.5 py-1.5 dark:text-black">
        Open
      </button>
    </div>
  );
}
