"use client";

import { SymbolOverview } from "react-ts-tradingview-widgets";

interface SymbolOverviewWidgetProps {
  ticker: string; // Single string of tickers, e.g., "NYSE:JPM, AAPL"
}

export default function SymbolOverviewWidget({ ticker }: SymbolOverviewWidgetProps) {
  // Parse the ticker string into an array of arrays
  const formattedTickers = ticker
    .split(",") // Split by comma
    .map((t) => [t.trim()]); // Trim spaces and format as an array of arrays

  return (
    <div className="h-96 justify-center mx-auto">
      <SymbolOverview
        symbols={formattedTickers} // Pass formatted tickers
        colorTheme="light"
        autosize
        chartType="area"
        downColor="#800080"
        borderDownColor="#800080"
        wickDownColor="#800080"
        fontColor="#000"
        showFloatingTooltip={false}
        widgetFontColor="#000"
        dateFormat="MM/dd/yyyy"
        valuesTracking="0"
        scalePosition="right"
        hideMarketStatus={true}
      />
    </div>
  );
}
