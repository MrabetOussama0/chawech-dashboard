import Builder from "Components/Builder";
import ErrorScreen from "Components/ErrorScreen";
import LoadingScreen from "Components/LoadingScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getUser } from "States/Actions/UserActions";

const PrivateRoute = ({ children, requiredRoles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          await dispatch(getUser());
          if (!user || !requiredRoles.includes(user.role)) {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchUser();
  }, [dispatch]);
  return (
    <Builder
      builder={() => {
        if (user && requiredRoles.includes(user.role)) return children;
        return <LoadingScreen />;
      }}
    />
  );
};

export default PrivateRoute;
