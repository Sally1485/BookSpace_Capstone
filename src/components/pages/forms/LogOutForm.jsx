import React from "react";
import { logOut } from "../../../../services/SignUp.service";

function LogOutForm() {
  const handleLogOut = async () => {
    try {
      await logOut();
      console.log("Successfully logout!");
    } catch (error) {
      console.error("Logout Failed:", error.message);
    }
  };

  return (
    <div>
      <p onClick={handleLogOut}>LogOut</p>
    </div>
  );
}

export default LogOutForm;
