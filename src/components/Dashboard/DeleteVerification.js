import React from "react";

import { useSelector, useDispatch } from "react-redux";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Message, Button, Divider, ButtonToolbar } from "rsuite";
import { deleteUser } from "../../features/user/userSlice";
const DeleteVerification = ({ setDeleteVerification }) => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Message
      showIcon
      type="info"
      header="Are you sure You want to delete your account?"
    >
      <p>All the data will be deleted permanently!</p>
      <hr />
      <ButtonToolbar>
        <Button
          size="sm"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              deleteUser({ accessToken: user.AccessToken, userId: user.userId })
            );
          }}
        >
          Delete Account
        </Button>
        <Button size="sm" onClick={() => setDeleteVerification(false)}>
          Cancel
        </Button>
      </ButtonToolbar>
    </Message>
  );
};

export default DeleteVerification;
