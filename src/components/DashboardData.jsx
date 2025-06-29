import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

// fire base
import { getDoc, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

// senario : 1- when page load ==> get the data from DB and update the status state
//          : 2- when user check or un check city status ==> update the DB

export default function Edata() {
  const [status, setStatus] = useState({
    mainStation: false,
    Rabak: false,
    Kosti: false,
    Tandalti: false,
    UmRawaba: false,
    ElRahad: false,
    Elobied: false,
    EditTime:0
  });

  useEffect(() => {
    fetchStatus();
  }, []);

  const handelCheckboxChange = async (name, newValue) => {
    // update local state
    const updatedStatus = { ...status, [name]: newValue };
    // if the main station is off ==> then all cities is off too
    if (name === "mainStation" && newValue == false) {
      updatedStatus.Rabak = false;
      updatedStatus.Kosti = false;
      updatedStatus.Tandalti = false;
      updatedStatus.UmRawaba = false;
      updatedStatus.ElRahad = false;
      updatedStatus.Elobied = false;
    }
    setStatus(updatedStatus);
    // update firestore data
      try {
        const statusRef = doc(db, "cityStatus", "status");
        // if the main station is off ==> then all cities is off too
        if (name === "mainStation" && newValue == false) {
          await updateDoc(statusRef, {
            mainStation:false,
            Rabak: false,
            Kosti: false,
            Tandalti: false,
            UmRawaba: false,
            ElRahad: false,
            Elobied: false,
            // EditTime: Date.now()
          });
          console.log("dood");
        }else{
        await updateDoc(statusRef, {
          [name]: newValue,
          // EditTime:Date.now()
        });
      }
      } catch (error) {
        console.log(error);
      }
    }

  // fetch city status to reflect the status on the UI when page loads
  const fetchStatus = async () => {
    try {
      const statusRef = doc(db, "cityStatus", "status");
      const docSnap = await getDoc(statusRef);

      if (docSnap.exists()) {
        setStatus(docSnap.data());
      }
      console.log(status);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    // main wrapper
    <div className="grid  max-lg:grid-rows-[repeat(1,60px)] lg:grid-rows-[repeat(3,100px)] lg:grid-cols-8 rounded overflow-hidden  my-5">
      {/* table head */}
      <div className="max-lg:col-span-3 grid-cols-subgrid grid lg:grid lg:col-span-2 lg:row-span-3  lg:grid-rows-subgrid w-full lg:border-l-2 lg:border-l-p [&_div]:p-4  [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:font-bold [&_div]:text-xl [&_div]:text-p">
        <div className="col-start-1 w-full lg:row-start-1 lg:col-span-2 bg-sky-50">
          المحطة
        </div>
        <div className="col-start-2 lg:row-start-2 lg:col-span-2 bg-sky-100">
          المدينة
        </div>
        <div className="col-start-3 lg:col-span-2  bg-sky-200">الحالة</div>
      </div>
      {/* cites */}
      <div className="w-full grid max-lg:col-span-3 lg:row-span-3 grid-cols-subgrid col-span-6 [&_div]:font-bold [&_div]:text-xl [&_div]:text-p">
        <div className="w-full flex gap-4 max-lg:flex-col justify-center items-center mx-auto p-4 max-lg:col-start-1  lg:col-span-6 lg:row-start-1 bg-sky-50 lg:border-b-2 ">
          {/* ==== will check or un check by admin ==== */}
          <Checkbox
            name={"mainStation"}
            value={status.mainStation}
            onChange={handelCheckboxChange}
            labelName={"أم دباكر"}
            IsChecked={status.mainStation}
          />
        </div>
        {/* cites */}
        <div className="flex lg:grid lg:grid-cols-subgrid lg:col-span-6 lg:flex-row flex-col gap-4 [&_div]:w-full [&_div]:p-4 [&_div]:min-h-[70px] [&_div]:mx-auo [&_div]:min-w-[80px] [&_div]:flex [&_div]:justify-center max-lg:col-start-2 lg:row-start-2 bg-sky-100 lg:justify-center items-center max-lg:[&_div]:border-b-2 lg:border-b-2">
          <div className="col-start-1">ربك</div>
          <div className="lg:col-start-2">كوستي</div>
          <div className="lg:col-start-3">تندلتي</div>
          <div className="lg:col-start-4">أم روابة</div>
          <div className="lg:col-start-5">الرهد</div>
          <div className="lg:col-start-6">الابيض</div>
        </div>

        {/* status */}
        <div className="flex lg:grid lg:grid-cols-subgrid lg:col-span-6 lg:flex-row flex-col gap-4 w-full [&_div]:w-full  [&_div] [&_div]:p-4 [&_div]:mx-auto [&_div]:min-w-[30px] [&_div]:flex [&_div]:justify-center max-lg:col-start-3 lg:row-start-3 bg-sky-200 lg:justify-center items-center max-lg:[&_div]:border-b-2">
          <div className="lg:col-start-1 ">
            <Checkbox
              name={"Rabak"}
              value={status.Rabak}
              onChange={handelCheckboxChange}
              IsChecked={status.Rabak}
            />
          </div>
          <div className="lg:col-start-2">
            <Checkbox
              name={"Kosti"}
              value={status.Kosti}
              onChange={handelCheckboxChange}
              IsChecked={status.Kosti}
            />
          </div>
          <div className="lg:col-start-3">
            <Checkbox
              name={"Tandalti"}
              value={status.Tandalti}
              onChange={handelCheckboxChange}
              IsChecked={status.Tandalti}
            />
          </div>
          <div className="lg:col-start-4">
            <Checkbox
              name={"UmRawaba"}
              value={status.UmRawaba}
              onChange={handelCheckboxChange}
              IsChecked={status.UmRawaba}
            />
          </div>
          <div className="lg:col-start-5">
            <Checkbox
              name={"ElRahad"}
              value={status.ElRahad}
              onChange={handelCheckboxChange}
              IsChecked={status.ElRahad}
            />
          </div>
          <div className="lg:col-start-6">
            <Checkbox
              name={"Elobied"}
              value={status.Elobied}
              onChange={handelCheckboxChange}
              IsChecked={status.Elobied}
            />
          </div>
        </div>
      </div>
    </div>
  );
}