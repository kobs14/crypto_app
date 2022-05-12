import React from "react";
import { useNavigate } from "react-router-dom";

import cryptocurrency from "../../images/cryptocurrency.png";



function linkToPage(title) {
  switch (title) {
    case "Cryptocurrencies":
      return '/cryptocurrencies';
    case "Exchanges":
      return '/exchanges';
    case "News":
      return '/news';
    case "Wallets":
      return '/walletlog';
    case "Login":
      return '/login';
    default:
      return '/';
  }
};


const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
}

  const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`} onClick={() => handleClick(linkToPage(title))}>
      {title}
    </li>
  );

  
  return  (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={cryptocurrency} alt="logo" className="w-20" />
        </div>

        <ul className="text-white flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            {["Cryptocurrencies", "Exchanges", "News", "Wallets"].map((item, index) => (
              <NavBarItem key={item + index} title={item}/>
            ))}
         </ul>
      </div>
  
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-white text-sm text-center font-medium mt-2">kobihorshid@gmail.com</p>
      </div>
  
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
  
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@c-crypto2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>)
};

export default Footer;