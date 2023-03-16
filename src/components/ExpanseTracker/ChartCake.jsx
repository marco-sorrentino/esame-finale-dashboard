import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

export const ChartCake = (props) => {
  const seeMoney = useSelector((state) => state.dashboard.planner);
  const moin = [];
  const plus = [];
  seeMoney.map((el) => (el.cost > 0 ? plus.push(el.cost) : moin.push(el.cost)));
  const sumPlus = plus.reduce((accum, obj) => accum + obj, 0);
  const sumMoin = moin.reduce((accum, obj) => accum + obj, 0);

  return (
    <>
      {sumPlus === 0 && sumMoin === 0 ? (
        <></>
      ) : (
        <div className="bgAllDiv box mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex py-2">
            <p className="text-success fs-5 me-5 fw-bold">{sumPlus}</p>
            <p className="text-danger fs-5 ms-5 fw-bold">{sumMoin}</p>
          </div>
          <PieChart
            className="p-4"
            style={{ width: "90%" }}
            data={[
              { title: "One", value: sumPlus, color: "#198753" },
              { title: "Two", value: Math.abs(sumMoin), color: "#dc3444" },
            ]}
          />
        </div>
      )}
    </>
  );
};
