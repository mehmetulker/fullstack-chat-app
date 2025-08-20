import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../login/Login";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md bg-white/10 backdrop-blur-md">
      <Sidebar />
      <MessageContainer />
      {/* <Login /> */}
    </div>
  );
};

export default Home;
