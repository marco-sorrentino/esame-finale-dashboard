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

export const Chart = () => {
  const dataChart = useSelector((state) => state.dashboard.moreWeather);

  const data = [
    dataChart?.list.map((el) => {
      return { gradi: el.main.temp };
    }),
  ];

  console.log(data);
  return (
    <>
      {data && (
        <ResponsiveContainer
          className={"bgAllDiv mt-3"}
          width="100%"
          height="100%"
        >
          <AreaChart
            className=""
            width={500}
            height={400}
            data={dataChart?.list
              .filter((el, i) => i % 8 === 0)
              .map((el) => {
                return {
                  name: el.dt_txt.slice(5, 10),
                  "°C": el.main.temp.toFixed(),
                };
              })}
            margin={{
              top: 10,
              right: 0,
              left: 160,
              bottom: 0,
            }}
            style={{ position: "relative", height: "195px" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="°C"
              stroke="#040141"
              fill="#0b00ff"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
