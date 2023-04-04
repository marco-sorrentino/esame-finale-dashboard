import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ChartTracker = () => {
  const seeMoney = useSelector((state) => state.dashboard.planner);
  const moin = [];
  const plus = [];
  seeMoney.map((el) => (el.cost > 0 ? plus.push(el.cost) : moin.push(el.cost)));
  const noZero = [];
  seeMoney.map((el) => (el.cost !== 0 ? noZero.push(el) : <></>));

  const data = [
    noZero?.map((el, i) => {
      return { totale: el.cost, key: i };
    }),
  ];

  return (
    <>
      {data && (
        <ResponsiveContainer className={"bgAllDiv"} width="100%" height="100%">
          <AreaChart
            className=""
            width={500}
            height={400}
            data={noZero?.map((el, i) => {
              return {
                name: el.text,
                cost: el.cost,
                key: i,
              };
            })}
            style={{ position: "relative", height: "195px" }}
          >
            <CartesianGrid strokeDasharray="12 12" strokeOpacity={0.1} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1CFEBA" stopOpacity="1" />
                <stop offset="100%" stopColor="#62ff11" stopOpacity="0" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              stroke="none"
              dataKey="cost"
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
