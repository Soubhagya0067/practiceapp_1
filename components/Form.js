import React from "react";
// import styles from "../styles/Home.module.css";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./UpdateUserForm";

const Form = () => {
  return (
   <div className="container mx-auto px-10 py-5 bg-gray-200">
    <AddUserForm></AddUserForm>
    <UpdateUserForm></UpdateUserForm>
   </div>
  );
};

export default Form;
