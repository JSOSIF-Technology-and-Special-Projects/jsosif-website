//symbol overview widget component that displays the overview of the stock symbol that accepts tickers as props and displays it
//on the portfolio page
"use client";

import { SymbolOverview } from "react-ts-tradingview-widgets";

interface SymbolOverviewWidgetProps {
	ticker: string; 
}

export default function SymbolOverviewWidget({
	ticker,
}: SymbolOverviewWidgetProps) {
	//parse the ticker string into an array of arrays
	const formattedTickers = ticker
		.split(",") 
		.map((t) => [t.trim()]); 

	return (
		<div className="h-96 justify-center mx-auto">
			<SymbolOverview
				symbols={formattedTickers} 
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
