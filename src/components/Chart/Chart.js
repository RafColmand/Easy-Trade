import React, {useState, useEffect, useContext} from "react";
import {
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
  } from "recharts";
import { chartConfig } from "../../constants/config"
import {convertUnixTimestampToDate, convertDateToUnixTimestamp, createDate} from "../../Utils/Helpers/date-helper"
import Card from "../Card/Card"
import ChartFilter from "../ChartFilter/ChartFilter"
import {fetchHistoricalData} from "../../Utils/api/stock-api"
import StockContext from "../../Context/StockContext"
import "./Chart.css"


const Chart = () => {

    const [data, setData] = useState([])

    const [filter, setFilter] = useState("1W");

    const {stockSymbol} = useContext(StockContext)

    const formatData = (data) => {
        return data.c.map((item, index) => {
          return {
            value: item.toFixed(2),
            date: convertUnixTimestampToDate(data.t[index]),
          };
        });
      };
    
    useEffect(() => {
        const getDateRange = () => {
          const { days, weeks, months, years } = chartConfig[filter];
    
          const endDate = new Date();
          const startDate = createDate(endDate, -days, -weeks, -months, -years);
    
          const startTimestampUnix = convertDateToUnixTimestamp(startDate);
          const endTimestampUnix = convertDateToUnixTimestamp(endDate);
          console.log(startTimestampUnix)
          console.log(endTimestampUnix)
          return { startTimestampUnix, endTimestampUnix };
        };
    
        const updateChartData = async () => {
          try {
            const { startTimestampUnix, endTimestampUnix } = getDateRange();
            const resolution = chartConfig[filter].resolution;
            console.log(startTimestampUnix)
            console.log(endTimestampUnix)
            const result = await fetchHistoricalData(
              stockSymbol,
              resolution,
              startTimestampUnix,
              endTimestampUnix
            );
            console.log(result)
            setData(formatData(result));
          } catch (error) {
            setData([]);
            console.log(error);
          }
        };
    
        updateChartData();
    }, [stockSymbol, filter]);

    console.log(data)
    
    return(
        <Card type={1}>
            <ul className="filter">
                {Object.keys(chartConfig).map((item) => (
                <li key={item}>
                    <ChartFilter
                    text={item}
                    active={filter === item}
                    onClick={() => {
                        setFilter(item);
                    }}
                    />
                </li>
                ))}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={data}>
                <defs>
                    <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="#3DA6FB"
                        stopOpacity={0.6}
                    />
                    <stop
                        offset="95%"
                        stopColor="#3DA6FB"
                        stopOpacity={0.1}
                    />
                    </linearGradient>
                </defs>
                <Tooltip
                contentStyle= {{backgroundColor: "rgba(214, 225, 231, 0.10)", borderColor:"rgba(214, 225, 231, 0.50)"}}
                itemStyle={{color: "#fff" }}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3DA6FB"
                    fill="url(#chartColor)"
                    fillOpacity={1}
                    strokeWidth={0.5}
                />
                <XAxis dataKey={"date"} />
                <YAxis domain={["dataMin", "dataMax"]} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}

export default Chart