import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Greetings from "../../components/Dashboard/Greetings";
import UserInfo from "../../components/Dashboard/UserInfo";
import Wrapper from "../../wrappers/UserDashboard";
import { deleteUser } from "../../features/user/userSlice";
import DeleteVerification from "../../components/Dashboard/DeleteVerification";
import { setIsOrderCreated } from "../../features/cart/cartSlice";
const UserDashboard = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const [deleteVerification, setDeleteVerification] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsOrderCreated(false));
  }, []);
  return (
    <Wrapper>
      <div>
        {deleteVerification && (
          <DeleteVerification setDeleteVerification={setDeleteVerification} />
        )}
        <Greetings user={user} />
        <UserInfo user={user} isLoading={isLoading} />

        <button
          disabled={isLoading}
          type="button"
          onClick={() => {
            setDeleteVerification(!deleteVerification);
            if (!deleteVerification) {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          }}
        >
          {deleteVerification ? "Cancel" : `Delete Account`}
        </button>
      </div>
    </Wrapper>
  );
};

export default UserDashboard;
