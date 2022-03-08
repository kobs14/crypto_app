import { Footer, Navbar } from "./components"

import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, Cryptocurrencies, News, Services, CryptoDetails, Login, Register, Profile } from './components'
import './App.css'
import { formatCountdown } from 'antd/lib/statistic/utils';


const App = () => {
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
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Register/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
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
