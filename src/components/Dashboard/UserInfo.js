import React from "react";
import FormRow from "../FormRow";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, updateUser } from "../../features/user/userSlice";
const UserInfo = ({ user, isLoading }) => {
  const dispatch = useDispatch();
  //console.log(user);
  const { address, company, phoneNumber, FirstName, LastName, AccessToken } =
    user;
  const initialState = {
    newFirstName: FirstName,
    newLastName: LastName,
    newCompany: company,
    new_phoneNumber: phoneNumber,
    new_address: address,
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const [values, setValues] = React.useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      {" "}
      <FormRow
        className="form-control"
        type="text"
        handleChange={handleChange}
        name="newFirstName"
        labelText="First Name"
        value={values.newFirstName}
        placeholder=""
      />
      <FormRow
        className="form-control"
        type="text"
        handleChange={handleChange}
        name="newLastName"
        labelText="Last Name"
        value={values.newLastName}
        placeholder="Smith"
      />
      <FormRow
        className="form-control"
        type="text"
        handleChange={handleChange}
        name="newCompany"
        labelText="Company"
        value={values.newCompany}
        placeholder=""
      />
      <FormRow
        className="form-control"
        type="text"
        handleChange={handleChange}
        name="new_phoneNumber"
        labelText="Phone Number"
        value={values.new_phoneNumber}
        placeholder="+13121234567"
      />
      <FormRow
        className="form-control"
        type="text"
        handleChange={handleChange}
        name="new_address"
        labelText="Address"
        value={values.new_address}
        placeholder=""
      />
      <button
        type="button"
        disabled={isLoading}
        onClick={() => {
          if (
            values.newFirstName === FirstName &&
            values.new_address === address &&
            values.newLastName === LastName &&
            values.newCompany === company &&
            values.new_phoneNumber === phoneNumber
          ) {
            return toast.warn("You did not change values");
          }
          values.newCompany = values.newCompany ? values.newCompany : "_";
          dispatch(updateUser({ AccessToken, ...values }));
        }}
      >
        Update Info
      </button>
      <FormRow
        className="form-control"
        type="password"
        handleChange={handleChange}
        name="newPassword"
        labelText="New Password"
        value={values.newPassword}
        placeholder=""
      />
      <FormRow
        className="form-control"
        type="password"
        handleChange={handleChange}
        name="confirmNewPassword"
        labelText="Confirm New Password"
        value={values.confirmNewPassword}
        placeholder=""
      />
      <FormRow
        className="form-control"
        type="password"
        handleChange={handleChange}
        name="password"
        labelText="You have to provide your current password"
        value={values.password}
        placeholder=""
      />
      <button
        type="button"
        disabled={isLoading}
        onClick={() => {
          if (
            values.newPassword !== values.confirmNewPassword ||
            values.newPassword.length < 6
          ) {
            return toast.warn("Please confirm the password, min 6 characters");
          }
          dispatch(
            changePassword({
              accessToken: AccessToken,
              previousPassword: values.password,
              proposedPassword: values.newPassword,
            })
          );
          setValues(initialState);

          //dispatch(updateUser({ AccessToken, ...values }));
        }}
      >
        Update Password
      </button>
    </div>
  );
};

export default UserInfo;
