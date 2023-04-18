import React from "react";
import logo from "../img/logo.svg";
import MarketSchedule from './MarketSchedule.jsx';

const Header = () => {

  const CurrentDate = () => {
    const currentDate = new Date().toLocaleDateString();
    return currentDate;

  }
  const CurrentDay = () => {
    const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
    return currentDay;
  }

  const NumDay = () => {
    const numDay = MarketSchedule.find(schedule => schedule.day === CurrentDay());
    return numDay ? JSON.stringify(numDay): 'No market day found.';
  }

  const data = NumDay();

  return (
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <h2>Today: {CurrentDay()} {CurrentDate()} {data}</h2>

      <img src={logo} className="logo" alt="logo" />
    </React.Fragment>
  );
}

export default Header;