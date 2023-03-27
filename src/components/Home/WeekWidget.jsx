import moment from "moment";
import "moment/locale/it";
moment.locale("it");

export const WeekWidget = () => {
  const days = [];
  const nameDays = [];
  const startDate = moment().startOf("week");

  for (let i = 0; i < 7; i++) {
    const day = moment(startDate).add(i, "days");
    const formattedDay = day.format("DD/MM");
    const getName = day.format("ddd");
    days.push(formattedDay);
    nameDays.push(getName);
  }

  console.log(days);
  console.log(nameDays);

  return (
    <div className="d-flex">
      {days.map((el) => {
        return <div>{el}</div>;
      })}
    </div>
  );
};
