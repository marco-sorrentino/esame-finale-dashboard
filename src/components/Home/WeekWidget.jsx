import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/it";
import { useNavigate } from "react-router-dom";
moment.locale("it");

export const WeekWidget = () => {
  const [weekDays, setWeekDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const navigate = useNavigate();

  useEffect(() => {
    setWeekDays(generateWeekDays(currentDate));
  }, [currentDate]);

  const generateWeekDays = (date) => {
    const days = [];

    const startDate = moment(date).startOf("week");

    for (let i = 0; i < 5; i++) {
      const day = moment(startDate).add(i, "days");
      const formattedDay = day.format("DD/MM");
      const getName = day.format("ddd");
      days.push({
        numberDays: formattedDay,
        nameDays: getName,
      });
    }

    return days;
  };

  const handleNextWeek = () => {
    setCurrentDate(moment(currentDate).add(1, "week"));
  };

  const handlePrevWeek = () => {
    setCurrentDate(moment(currentDate).subtract(1, "week"));
  };

  return (
    <div
      onClick={() => {
        navigate("/calendar");
      }}
      className="d-flex bgAllDiv widgetCard p-3 justify-content-between align-items-center"
    >
      <button className="d-none" onClick={handlePrevWeek}>
        Settimana precedente
      </button>
      {weekDays.map((el, i) => {
        return (
          <div key={i}>
            <div className="bg-danger text-center boxDate1">
              <p className="text-white fw-bold">{el.nameDays}</p>
            </div>
            <div className="boxDate d-flex p-2 flex-column justify-content-between align-items-center">
              <p className="numberDate">{el.numberDays}</p>
            </div>
          </div>
        );
      })}
      <button className="d-none" onClick={handleNextWeek}>
        Settimana successiva
      </button>
    </div>
  );
};
