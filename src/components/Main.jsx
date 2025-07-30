import { lazy } from "react"
import Info from "./Info";
const Edata = lazy(()=> import("./Edata"));
export default function Main(){
    return(
        <div className="">
        <main className="relative px-dyp py-10 [direction:rtl]">
            <div className="flex flex-col gap-5 w-fit mx-auto p-4">
            {/* title */}
            <h1 className="text-white mx-auto rounded-md text-3xl md:text-5xl w-fit font-extrabold">شغالة وين ؟ ⚡</h1>
            <p className="text-gray-300 font-bold text-sm md:text-base"> حالة كهرباء النيل الأبيض ومدن كردفان 🟩</p>
            </div>
    
            <Edata/>

            <Info/>
        </main>
        </div>
    )
}

