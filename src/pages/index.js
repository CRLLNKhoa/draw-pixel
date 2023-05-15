import Image from "next/image";
import { Inter } from "next/font/google";
import Pixel from "@/components/Pixel";
import { useState } from "react";
import ToolBox from "@/components/ToolBox";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pic = Array.from({length: 2050}, (v, k) => k+1); 
  const [currentColor,setCurrentColor] = useState("#0ef7ad")
  return <main className="w-full min-h-screen flex justify-center items-center">
    <Head>
    <title>
          Tập vẽ pixel | crlkhoa
        </title>
        <meta
          name="Tập vẽ"
          content="Cái này do tui rảnh và làm trong 20 phút nếu có gì không vừa lòng thì kệ bạn OK!."
          key="pixel"
        />
    </Head>
    <ToolBox currentColor={currentColor} onChangeColor={setCurrentColor} />
    <div className="flex flex-wrap w-[1200px]">
    {pic.map(item => <Pixel key={item} num={item} onClick={currentColor} />)}
    </div>
  </main>;
}
