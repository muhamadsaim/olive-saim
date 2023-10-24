import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Suspense } from "react";
import Loading from "../Components/Common/Loading/index";
import {
  authenticateUser,
  notAuthenticateUser,
} from "../Redux/slice/authSlice";

export const IsAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Token = localStorage.getItem("authToken");
  useEffect(() => {
    if (Token) {
      dispatch(authenticateUser());
    } else {
      dispatch(notAuthenticateUser());
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && !Token) {
    return <Navigate to="/login" />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};
