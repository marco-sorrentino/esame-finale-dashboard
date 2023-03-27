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
    <div className="bgAllDiv p-3 widgetCard d-flex justify-content-evenly align-items-center">
      <div className="d-flex flex-column align-items-center">
        <p>Total</p>
        <div className="widgetBox bg-primary text-white  mt-2">
          <FaBalanceScale className="iconWidgetExpense" />
          <p className="fw-bold">{spesa}</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center ">
        <p>Income</p>
        <div className="widgetBox income mt-2">
          <FaLongArrowAltRight className="iconWidgetExpense" />
          <p className="fw-bold">{sumPlus}</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p>Output</p>
        <div className="widgetBox bg-danger text-white  mt-2">
          <FaLongArrowAltLeft className="iconWidgetExpense" />
          <p className="fw-bold">{sumMoin}</p>
        </div>
      </div>
    </div>
  );
};
