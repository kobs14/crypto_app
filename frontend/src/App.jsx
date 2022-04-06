import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer, Navbar } from "./components"

import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { logout } from "./services/slices/auth";
import EventBus from "./common/EventBus";

import { Homepage, Cryptocurrencies, News, Services, CryptoDetails, Login, Register, Profile, WalletLogin, PasswordRecov, Exchanges} from './components'
import './App.css'
import { formatCountdown } from 'antd/lib/statistic/utils';


const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    // if (currentUser) {
    //   setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    // } else {
    //   setShowModeratorBoard(false);
    //   setShowAdminBoard(false);
    // }
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              {/* <Route exact path="/exchanges" element={<Exchanges/>}/> */}
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>
              <Route exact path="/walletlog" element={<WalletLogin/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Register/>}/>
              <Route exact path="/passwordrecovery" element={<PasswordRecov/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
            </Routes>
          </div>
        </Layout>
      </div>
      <Services />
      <Footer/>
    </div>
  )
}

export default App
