import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import BtnComp from "../../button/button";
import { auth } from "../../../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./registerform.css";

function Registerform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  const password = watch("password", "");
  const confpassword = watch("cnfpassword", "");
  const passwordMatch = password === confpassword;

  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email Address</label>
        <input
          name="email"
          placeholder="johndoe@gmail.com"
          {...register("email", {
            required: "Email is required",
            maxLength: 80,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email address",
            },
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required!</p>}
        {errors?.email?.type === "pattern" && <p>Invalid email address!</p>}

        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "You must specify a password!",
            pattern: {
              value:
                "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$",
              message:
                "The password should atleast contain 1 number and 1 special character!",
            },
            minLength: {
              value: 8,
              message: "Password must be more than 8 characters!",
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 20 characters!",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Confirm Password</label>
        <input
          name="cnfpassword"
          placeholder="Enter Password Again"
          type="password"
          {...register("cnfpassword", {
            required: "You must specify a password!",
            pattern: {
              value:
                "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$",
              message:
                "The password should atleast contain 1 number and 1 special character!",
            },
            minLength: {
              value: 8,
              message: "Password must be more than 8 characters!",
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 20 characters!",
            },
          })}
        />
        {errors.cnfpassword && <p>{errors.cnfpassword.message}</p>}
        {!passwordMatch && <p>The passwords do not match!</p>}

        <BtnComp btnTitle="Register" img="../../images/log-in.png" />
      </form>
    </div>
  );
}

export default Registerform;
