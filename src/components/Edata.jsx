import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
export default function Edata() {
  const [status, setStatus] = useState({
    mainStation: false,
    Rabak: false,
    Kosti: false,
    Tandalti: false,
    UmRawaba: false,
    ElRahad: false,
    Elobied: false,
  });

  useEffect(() => {
    const statusRef = doc(db, "cityStatus", "status");
    const unsubscribe = onSnapshot(statusRef, (docSnap) => {
      if (docSnap.exists()) {
        setStatus(docSnap.data());
      }
    });

    // clean up
    return () => unsubscribe();
  }, []);


  return (
    <div className={`grid  max-lg:grid-rows-[repeat(1,60px)] lg:grid-rows-[repeat(3,100px)] lg:grid-cols-8 rounded overflow-hidden  my-5 ${status.mainStation && "shadow-lg shadow-sky-500"}`}>
      {/* table head */}
      <div className="max-lg:col-span-3 grid lg:grid lg:col-span-2 lg:row-span-3  lg:grid-rows-subgrid w-full [&_div]:p-4 lg:border-l-2 lg:border-l-p  [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:font-bold [&_div]:text-xl [&_div]:text-p">
        <div className="col-start-1 lg:col-span-2 bg-sky-200">المحطة</div>
        <div className="col-start-2 lg:col-span-2 bg-sky-100">المدينة</div>
        <div className="col-start-3 lg:col-span-2  bg-sky-50">الحالة</div>
      </div>
      {/* cites */}
      <div className="w-full grid max-lg:col-span-3 lg:row-span-3 grid-cols-subgrid col-span-6 [&_div]:font-bold [&_div]:text-xl [&_div]:text-p">
        <div className="w-full flex  max-lg:flex-col justify-center items-center mx-auto p-4 max-lg:col-start-1 lg:col-span-6 lg:row-start-1 bg-sky-200 lg:border-b-2">
          <p>أم دباكر</p>
          <img
            src={status.mainStation ? "lighton.webp" : "lightoff.webp"}
            alt="lamp on & off"
            className="size-10"
          />
          {/* <p>Edited At : {status?.EditTime}</p> */}
        </div>
        {/* cites */}
        <div className="bg-sky-100 flex max-lg:col-start-2 lg:row-start-2 flex-col lg:flex-row lg:justify-center items-center lg:grid lg:grid-cols-subgrid lg:col-span-6 lg:border-b-2 max-lg:border-r-2 max-lg:[&_div]:border-b-2  [&_div]:p-4 [&_div]:w-full [&_div]:items-center [&_div]:min-w-[80px] [&_div]:min-h-[80px] [&_div]:flex [&_div]:justify-center ">
          <div className="lg:col-start-1">ربك</div>
          <div className="lg:col-start-2">كوستي</div>
          <div className="lg:col-start-3">تندلتي</div>
          <div className="lg:col-start-4">أم روابة</div>
          <div className="lg:col-start-5">الرهد</div>
          <div className="lg:col-start-6">الأبيض</div>
          {/* stauts */}
        </div>
        <div className="flex lg:grid lg:grid-cols-subgrid lg:col-span-6 lg:flex-row flex-col  w-full max-lg:border-r-2 max-lg:col-start-3 lg:row-start-3 bg-sky-50 lg:justify-center items-center max-lg:[&_div]:border-b-2  [&_div]:h-full [&_div]:items-center [&_div]:p-4 [&_div]:min-h-[80px] [&_div]:mx-auto [&_div]:w-full [&_div]:flex [&_div]:justify-center">
          {/* ✅ this will replace by the data that come from DB */}
          <div className={`lg:col-start-1 ${status.Rabak ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.Rabak ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className={`size-10`}
              />
          </div>
          <div className={`lg:col-start-2 ${status.Kosti ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.Kosti ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className="size-10"
            />
          </div>
          <div className={`lg:col-start-3 ${status.Tandalti ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.Tandalti ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className="size-10"
            />
          </div>
          <div className={`lg:col-start-4 ${status.UmRawaba ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.UmRawaba ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className="size-10"
            />
          </div>
          <div className={`lg:col-start-5 ${status.ElRahad ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.ElRahad ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className="size-10"
            />
          </div>
          <div className={`lg:col-start-6 ${status.Elobied ? "bg-green-300" : "bg-red-300"}`}>
            {" "}
            <img
              src={status.Elobied ? "lighton.webp" : "lightoff.webp"}
              alt="lamp on & off"
              className="size-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
