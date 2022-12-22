import React, { useContext } from "react";
import "./App.css";
import { userContext } from "./GlobalContext";

const Account = () => {
  console.log("InAccount");
  const { user } = useContext(userContext);
  return (
    <div className="main-container">
      <div className="container">
        <div
          style={{
            backgroundColor: "gray",
            height: 100,
            width: 100,
            borderRadius: 50,
            margin: 20,
          }}
        />
        <div style={{ color: "#2366ee" }}>Set New Profile Photo</div>
        <input
          style={{
            backgroundColor: "#20232b",
            height: 40,
            width: "80%",
            borderRadius: 14,
            marginTop: 20,
            // borderColor: "#20232b",
          }}
        ></input>
        <input
          style={{
            backgroundColor: "#20232b",
            height: 40,
            width: "80%",
            borderRadius: 14,
          }}
        ></input>

        <label style={{ color: "#434449", marginTop: 20, marginBottom: 20 }}>
          Enter your name and add an optional profile photo
        </label>
        <input
          style={{
            backgroundColor: "#20232b",
            height: 40,
            width: "80%",
            borderRadius: 14,

            // marginTop: 20,
            // borderColor: "#20232b",
          }}
        />
        <input
          style={{
            backgroundColor: "#20232b",
            height: 40,
            width: "80%",
            borderRadius: 14,
          }}
        />
        <div
          style={{
            backgroundColor: "#246bfd",
            height: 50,
            borderRadius: 10,
            width: 340,
            fontFamily: "sans-serif",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: 20,
            marginTop: 30,
            color: "#ffffff",
          }}
        >
          Update Profile
        </div>
      </div>
    </div>
  );
};
export default Account;
