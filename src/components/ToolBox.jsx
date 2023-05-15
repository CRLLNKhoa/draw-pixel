import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
export default function ToolBox({ onChangeColor, currentColor }) {
  const [show, setShow] = useState(true);
  return (
    <div
      className={
        show
          ? "w-[200px] flex bg-white flex-col gap-8 justify-center fixed left-0 top-[20%] p-4 rounded-r-lg bottom-[20%] border-2 duration-1000 transition-all"
          : "w-[20px] flex bg-white flex-col gap-8 justify-center fixed left-[-200px] top-[20%] p-4 rounded-r-lg bottom-[20%] border-2 duration-1000 transition-all"
      }
    >
      {show ? (
        <span
          onClick={() => setShow(!show)}
          className="fixed left-2 top-2 cursor-pointer text-[24px]"
        >
          <BsArrowLeftSquareFill />
        </span>
      ) : (
        <span
          onClick={() => setShow(!show)}
          className="fixed left-2 top-2 cursor-pointer text-[24px]"
        >
          <BsArrowRightSquareFill />
        </span>
      )}

<div className="flex gap-2 border p-2 rounded-lg relative flex-col">
        <span className="text-[12px] top-[-15px] z-0 font-semibold absolute">
          Current color:
        </span>
        <input
          value={currentColor}
          onChange={(e) => onChangeColor(e.target.value)}
          className="w-full cursor-pointer"
          type="color"
        />
        <input
          value={currentColor}
          onChange={(e) => onChangeColor(e.target.value)}
          className="w-full cursor-pointer outline-none border px-2 text-[13px]"
          type="text"
        />
      </div>
      <div className="flex flex-wrap gap-2 border p-2 rounded-lg relative">
        <span className="text-[12px] top-[-15px] font-semibold absolute">
          Color:
        </span>
        <div
          onClick={() => onChangeColor("#EF4444")}
          className="bg-red-500 w-[24px] h-[24px] cursor-pointer"
        ></div>
        <div
          onClick={() => onChangeColor("#FDE047")}
          className="bg-yellow-300 w-[24px] h-[24px] cursor-pointer"
        ></div>
        <div
          onClick={() => onChangeColor("#22C55E")}
          className="bg-green-500 w-[24px] h-[24px] cursor-pointer"
        ></div>
        <div
          onClick={() => onChangeColor("#3B82F6")}
          className="bg-blue-500 w-[24px] h-[24px] cursor-pointer"
        ></div>
        <div
          onClick={() => onChangeColor("#000000")}
          className="bg-black w-[24px] h-[24px] cursor-pointer"
        ></div>
        <div
          onClick={() => onChangeColor("#ffffff")}
          className="bg-white w-[24px] border-2 h-[24px] cursor-pointer"
        ></div>
      </div>
    </div>
  );
}
