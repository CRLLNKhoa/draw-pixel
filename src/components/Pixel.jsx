import React, { useState } from 'react'

export default function Pixel({onClick,num}) {
    const [color,setColor] = useState("white")
  return (
    <div style={{background: color}} onClick={()=>setColor(onClick)} onDoubleClick={()=>setColor("white")} className={`${color==="white" && "border"} w-[24px] h-[24px] cursor-pointer flex justify-center items-center `}>
        <span className='text-[10px] font-bold'></span>
    </div>
  )
}
