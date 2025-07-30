import { MdDone } from "react-icons/md";

export default function Toast({toastMsg}){

    return(
        <div className="flex items-center gap-3 bg-green-300 absolute -top-40 left-1/2 w-fit -translate-x-1/2 py-3 px-2 rounded transition-all duration-300 ease-in-out animate-move">
            <p>{toastMsg}</p>
            <MdDone size={20}/>
        </div>
    )
}