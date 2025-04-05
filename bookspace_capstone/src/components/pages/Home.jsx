import React from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function Home() {
  return (
    <div className="p-8 sm:p-4 md:p-6 bg-emerald-700 ">
      <h1 className="mt-6 text-slate-400 hover:text-slate-700  text-center ml-3  text-4xl sm:text-xl md:text-3xl font-semibold">
        BookSpace
      </h1>
      <div className="flex justify-center mt-20 mb-20">
        <img src={"/images/logo.png"} alt="Logo" />
      </div>
      <SignUpPage /> {/*importing of sign up forms*/}
      <div className="mt-6 text-center ml-3 text-white text-3xl sm:text-xl md:text-2xl font-serif">
        <h2>OR</h2>
      </div>
      <SignInPage /> {/*importing of sign In forms*/}
    </div>
  );
}

export default Home;
