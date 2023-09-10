import React from "react";
import Card from "../Card/Card";
import "./Overview.css"

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card type={0}>
      <span className="Symbol">{symbol}</span>
      <div className="OverviewPrice">
        <span className="Price">
          ${price}
          <span className="Currency">
            {currency}
          </span>
        </span>
        <span
          className={`Percent ${
            change > 0 ? "textGreen" : "textRed"
          }`}
        >
          {change} ({changePercent}%)
        </span>
      </div>
    </Card>
  );
};

export default Overview;