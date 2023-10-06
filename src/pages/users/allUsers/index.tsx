import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";


const AllUsers = () => {
  const { allUsers } = useTypedSelector((store) => store.UserReducer);
  const { GetAllUsers } = useActions();

  useEffect(() => {
    var users = GetAllUsers();
    console.log(users);
  }, []);

  return (
    <>
      <h1>All users</h1>
    </>
      
  );
};

export default AllUsers;