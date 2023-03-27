import { useSelector } from "react-redux";
import { FaBalanceScale } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const BalanceWidget = () => {
  const seeMoney = useSelector((state) => state.dashboard.planner);
  const moin = [];
  const plus = [];
  seeMoney.map((el) => (el.cost > 0 ? plus.push(el.cost) : moin.push(el.cost)));
  const sumPlus = plus.reduce((accum, obj) => accum + obj, 0);
  const sumMoin = moin.reduce((accum, obj) => accum + obj, 0);
  const seeBudgetList = useSelector((state) => state.dashboard.planner);
  let spesa = seeBudgetList.reduce((accum, obj) => accum + obj.cost, 0);
  console.log("BOH", spesa);

  return (
    <div className="bgAllDiv p-3 widgetCard d-flex justify-content-evenly">
      <div className="widgetBox total">
        <FaBalanceScale />
        <p>{spesa}</p>
      </div>
      <div className="widgetBox income">
        <FaLongArrowAltRight />
        <p>{sumPlus}</p>
      </div>
      <div className="widgetBox output">
        <FaLongArrowAltLeft />
        <p>{sumMoin}</p>
      </div>
    </div>
  );
};
