import React from "react";
import { AiOutlineClear } from "react-icons/ai";
export default function ToolBox({ onChangeColor, currentColor }) {
  return (
    <div className="flex flex-col gap-8 justify-center fixed left-0 top-[20%] p-4 rounded-r-lg bottom-[20%] border-2 w-[200px] duration-1000 transition-all">
      <div className="flex gap-2 border p-2 rounded-lg relative flex-col">
        <span className="text-[12px] top-[-15px] font-semibold absolute">
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
