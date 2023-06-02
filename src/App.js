import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Typography, Space, Layout } from "antd";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/pages/Homepage";
import Cryptocurrencies from "./Components/pages/Cryptocurrencies";
import News from "./Components/pages/News";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route
                path="/cryptocurrencies"
                exact
                element={<Cryptocurrencies />}
              />
              <Route path="/news" exact element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white" }}>
            Cryptoverse <span className="span">C</span>2023 All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
