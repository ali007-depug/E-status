import { lazy } from "react"
import Header from "./Header";
import Info from "./Info";
const Edata = lazy(()=> import("./Edata"));
export default function Main(){
// const links = [{id:0,link:"من نحن ؟"},{id:1,link:"هل ترغب في الإعلان"},]
    return(
        <div className="">
            {/* <Header logoSrc={"logo.webp"} title={"مصدر كهربائي"} navLinks={links}/> */}
        <main className="relative px-dyp py-10 [direction:rtl]">
            <div className="flex flex-col gap-5 w-fit mx-auto p-4">
            {/* title */}
            <h1 className="text-white rounded-md text-3xl md:text-5xl w-fit font-extrabold">شغالة وين ؟ ⚡</h1>
            <p className="text-gray-300 font-bold">حالة كهرباء النيل الأبيض ومدن كردفان</p>
            </div>

            <Edata/>

            <Info/>
        </main>
        </div>
    )
}

