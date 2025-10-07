import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, clearUser } from "./redux/sideSlice";

const UserTracker = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://my-backend-app-245577333791.us-central1.run.app/api/v1/ai/tracker", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.userId) {
          dispatch(addUser(data.userId));
        }
      });
    return () => {
      dispatch(clearUser());
    };
  }, [dispatch]);
  return null;
};

export default UserTracker;