import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Nabar";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Login from "../views/Login";
import { useAppSelector } from "../redux/hooks/index";

function Router() {
  const token = useAppSelector((state) => state.token.token);
  return (
    <div>
      {token !== "" ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default Router;
