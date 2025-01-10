"use client";

import { SymbolOverview } from "react-ts-tradingview-widgets";

interface SymbolOverviewWidgetProps {
  ticker: string;
}

export default function SymbolOverviewWidget({ ticker }: SymbolOverviewWidgetProps) {
  return (
    <div className="h-96 justify-center mx-auto">
      <SymbolOverview
        symbols={[ticker]}
        colorTheme="light" // Sets the base theme
        autosize
        chartType="area"
        downColor="#800080"
        borderDownColor="#800080"
        wickDownColor="#800080"
        fontColor="#000" // Sets overall font color
        showFloatingTooltip={false}
        widgetFontColor="#000"
      />
    </div>
  );
}
