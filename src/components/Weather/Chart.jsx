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
    dataChart?.list.map((el, i) => {
      return { gradi: el.main.temp_max, minGradi: el.main.temp_min, key: i };
    }),
  ];

  return (
    <>
      {data && (
        <ResponsiveContainer
          className={"bgAllDiv  mt-3"}
          width="100%"
          height="100%"
        >
          <AreaChart
            className=""
            width={500}
            height={400}
            data={dataChart?.list
              .filter((_, i) => i % 8 === 0)
              .map((el, i) => {
                return {
                  name: el.dt_txt.slice(5, 10),
                  Temp: el.main.temp.toFixed(),
                  Feels: el.main.feels_like.toFixed(),
                  key: i,
                };
              })}
            style={{ position: "relative", height: "195px" }}
          >
            <CartesianGrid strokeDasharray="12 12" strokeOpacity={0.5} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1CFEBA" stopOpacity="1" />
                <stop offset="100%" stopColor="#62ff11" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2CFFD1" stopOpacity="1" />
                <stop offset="100%" stopColor="#11a2ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              stroke="none"
              dataKey="Temp"
              fill="url(#colorGradient)"
            />
            <Area
              type="monotone"
              stroke="none"
              dataKey="Feels"
              fill="url(#colorGradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
