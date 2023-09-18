import React, {useState, useEffect} from 'react'
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";

/**Components */
import Card from "../Card/Card"
import {convertUnixTimestampToDate, 
        convertDateToUnixTimestamp} from "../../Utils/Helpers/date-helper"

import {fetchHistoricalData} from "../../Utils/api/stock-api"

/**Styles */
import './ChartWallet.css'

const ChartWallet = () => {

  const [data, setData] = useState([])

  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const dateString = "2023-09-11"

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
    
          const endDate = new Date();
          const startDate = new Date(dateString);
    
          const startTimestampUnix = convertDateToUnixTimestamp(startDate);
          const endTimestampUnix = convertDateToUnixTimestamp(endDate);
          console.log(startTimestampUnix)
          console.log(endTimestampUnix)
          return { startTimestampUnix, endTimestampUnix };
        };
    
        const updateChartData = async () => {
          try {
            const { startTimestampUnix, endTimestampUnix } = getDateRange();
            const resolution = "15";
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
    }, [stockSymbol]);

    console.log(data)
  return (
    <Card type={1}>
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
  )
}

export default ChartWallet