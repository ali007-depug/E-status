import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// components
const Home = lazy(() => import("./pages/Home"));
import Loading from "./components/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard"
// style
function App() {
  return (
    // lazy loading
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* HOME UI */}
        <Route
          path="/"
          element={
            <div className="min-h-[100dvh]  bg-sky-950 relative">
              <Home />
            </div>
          }
        ></Route>
        {/* Login UI */}
        <Route
          path="/login"
          element={
            <div className="[direction:rtl] px-2 grid place-items-center h-[100dvh] bg-sky-950">
              <Login />
            </div>
          }
        />
        {/* signup UI */}
        <Route
          path="/signup"
          element={
            <div className="[direction:rtl] px-2 grid place-items-center h-[100dvh] bg-sky-950">
              <Signup />
            </div>
          }
        />
        {/* Dashboard UI */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
    
      </Routes>
    </Suspense>
  );
}

export default App;
