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
            {/* title */}
            <h1 className="text-white bg-tea p-4 rounded-md mb-10 text-3xl md:text-5xl mx-auto w-fit font-extrabold">شغالة وين ؟ ⚡</h1>

            <Edata/>

            <Info/>
        </main>
        </div>
    )
}

