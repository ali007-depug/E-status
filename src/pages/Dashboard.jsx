import DashboardData from "../components/DashboardData";
import { useCallback } from "react";
import { BiHome, BiLogOut } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

// react router
import { useNavigate } from "react-router-dom";

// firebase
import { db } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";


import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";


import PendingUsers from "../components/PendingUsers";

export default function Dashboard() {
  const [showPendingUsers, setShowPendingUsers] = useState(false);
  const [currentUser,setCurrentUser] = useState("");
  const [allUsers,setAllUsers] = useState([])
  const [pendingUsers,setPenidngUsers] = useState([])
  const navigate = useNavigate();


  useEffect(()=>{
    fetchUsers()
    getPendingUsers()
  },[])
  // logout func
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // to go the Home
  const viewHomeUI = () => {
    navigate("/");
  };

    // function to fetch users and show it in dashboard
    const fetchUsers = useCallback(async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      // get current user and relfect his name in UI
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSanp = await getDoc(docRef);
        if (docSanp.exists()) {
          const userData = docSanp.data();
          setCurrentUser(userData.name);
        } else {
          console.log("no teacher");
        }
      }
  
      try {
        // get all users and reflect them in accounts popup
        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);
        const usersInfo = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllUsers(usersInfo);
      } catch (error) {
        console.log(`all users error is : ${error}`);
      }
    }, []);
  
  // get pending users
  const getPendingUsers = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, "pending-users"));
      const pUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPenidngUsers(pUsers);
      console.log(`the pending users are ${pendingUsers}`);
    } catch (error) {
      console.log(`pending users error : ${error}`);
    }
  }, []);

    // when user click on ✅
    const handelApproveUser = useCallback(async (user) => {
      try {
        await setDoc(doc(db, "users", user.id), {
          name: user.name,
          email: user.email,
          approveAt: new Date(),
        });
        // remove from pending users
        await deleteDoc(doc(db, "pending-users", user.id));
  
        // update Pending users
        setPenidngUsers((prev) => prev.filter((u) => u.id !== user.id));
      } catch (error) {
        console.log(`approve pending error is : ${error}`);
      }
    }, []);
    // when user click on ✖️
    const handelRejectUser = useCallback(async (id) => {
      try {
        await deleteDoc(doc(db, "pending-users", id));
        setPenidngUsers((prev) => prev.filter((u) => u.id !== id));
      } catch (error) {
        console.log(`reject user Error is : ${error}`);
      }
    }, []);
  

  // show pending users
  const handlePendingUsers = () => {
    setShowPendingUsers(!showPendingUsers);
  };
  return (
    <div className="overflow-hidden bg-bg-color min-h-[100dvh] [direction:ltr]">
      <p className="sr-only">Dashboard</p>
      {/* header */}
      <header className="flex justify-between items-center  px-dyp bg-sky-700">
        {/* user Info */}
        <div className="flex flex-col items-center">
          <RxAvatar size={40} color="beige" className="hidden md:block" />
          <p className="text-white font-bold self-center flex-wrap">{currentUser}</p>
        </div>
        {/* ====== END user Info ======= */}

        {/* Dashboard name */}
        <h1 className="text-3xl lg:text-4xl self-center text-white font-bold py-5">
          لوحة التحكم
        </h1>

        {/* End dashboard name */}
        {/* button wrappers */}
        <div className="flex gap-2">
          {/* ===== Home Button ===== */}
          <button
            className="flex items-center gap-2 bg-white text-sky-900 hover:text-white hover:bg-sky-950 transition-all duration-300 ease-out px-2 py-1 md:px-3 md:py-2 rounded cursor-pointer font-bold"
            onClick={viewHomeUI}
          >
            <span className="hidden md:block">واجهة الموقع</span>
            <BiHome size={30} />
          </button>
          {/* ===== End Home button ===== */}

          {/* log out button */}
          <button
            className="flex items-center gap-2 bg-white text-sky-900 hover:text-white hover:bg-sky-950 transition-all duration-300 ease-out px-2 py-1 md:px-3 md:py-2 rounded cursor-pointer font-bold"
            onClick={handleLogout}
          >
            <span className="hidden md:block">تسجيل خروج</span>
            <BiLogOut size={30} />
          </button>
          {/* ===== END log out button ===== */}
        </div>

        {/* ====== END Dashboard name  =======*/}
      </header>
      {/* End header */}

      {/* main */}
      <main className="min-h-[100dvh] px-dyp py-10 [direction:rtl] bg-sky-950">
        <DashboardData />

        {/* show pending users */}
        {showPendingUsers &&             <PendingUsers
              pendingUsers={pendingUsers}
              allUsers={allUsers}
              handelApproveUser={handelApproveUser}
              handelRejectUser={handelRejectUser}
              closePendingUsers={handlePendingUsers}
            />
}
        <button
          className="flex items-center gap-2 bg-white text-sky-900 hover:text-white hover:bg-gray-950 transition-all duration-300 ease-out px-2 py-1 md:px-3 md:py-2 rounded cursor-pointer font-bold"
          onClick={handlePendingUsers}
        >
          <span className="hidden md:block">حسابات الأدمن</span>
          <FaUserSecret size={30} />
        </button>
      </main>
      {/* End main */}
    </div>
  );
}
