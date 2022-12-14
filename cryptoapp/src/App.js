import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Avatar, Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Homepage,
  // Exchanges,
  News,
  Cryptocurrencies,
  CryptoDetails,
} from './components';
import './App.css';
import icon from './images/sg2.png';

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
              <Route exact path="/" element={<Homepage />} />
              {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:uuId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Crypto World <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            {/* <Link to="/exchanges">Exchanges</Link> */}
            <Link to="/news">News</Link>
          </Space>
          <Space>
            <img
              style={{ maxWidth: '110px', maxHeight: '110px' }}
              src={icon}
              alt="news"
            />
          </Space>
        </div>
      </div>
    </div>
  );
};
export default App;
