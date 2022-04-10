import "../../assets/styles/Memos.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Header from "./Header";
import MainForm from "./MainForm";
import AdminDatas from "./MemosAdmin/";
import AdminChars from "./MemosAdmin/AdminChars";
import AdminMenus from "./MemosAdmin/AdminMenus";
import AdminFlags from "./MemosAdmin/AdminFlags";
import AdminReasons from "./MemosAdmin/AdminReasons";
import AdminAccounts from "./MemosAdmin/AdminAccounts";

export default function Memos() {
  return (
    <div id="memos" className="board">
      <Router>
        <Routes>
          {/* PROD
            <Route path='/memos-admin' element={<MainForm />} />
            <Route path='/' element={<AdminDatas />} />
            */}
          <Route path="/memos-admin" element={<MainForm />} />
          <Route path="/" element={<AdminDatas />}>
            <Route path="/" element={<AdminMenus />} />
            <Route path="/admin-accounts" element={<AdminAccounts />} />
            <Route path="/admin-characters" element={<AdminChars />} />
            <Route path="/admin-flags" element={<AdminFlags />} />
            <Route path="/admin-reasons" element={<AdminReasons />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
