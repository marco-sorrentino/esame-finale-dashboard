import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export const ChartCake = (props) => {
  const seeMoney = useSelector((state) => state.dashboard.planner);
  const moin = [];
  const plus = [];
  seeMoney.map((el) => (el.cost > 0 ? plus.push(el.cost) : moin.push(el.cost)));
  const sumPlus = plus.reduce((accum, obj) => accum + obj, 0);
  const sumMoin = moin.reduce((accum, obj) => accum + obj, 0);
  const average = sumPlus + sumMoin / 2;
  const data = [
    {
      nome: "income/average/expense",
      income: sumPlus,
      expense: sumMoin,
      average: average,
    },
    /* { nome: "average", expense: average }, */
    /* { nome: "expense", expense: sumMoin }, */
  ];

  return (
    /*     <>
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
    </> */
    <ResponsiveContainer className="bgAllDiv" height="100%" width="100%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="nome" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1CFEBA" stopOpacity="1" />
            <stop offset="100%" stopColor="#62ff11" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FC26AA" stopOpacity="0" />
            <stop offset="100%" stopColor="#FC26AA" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="colorGradient3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2653FC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2653FC" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Bar dataKey="income" fill="url(#colorGradient)" barSize={60} />
        <Bar dataKey="average" fill="url(#colorGradient3)" barSize={60} />
        <Bar dataKey="expense" fill="url(#colorGradient2)" barSize={60} />
      </BarChart>
    </ResponsiveContainer>
  );
};
