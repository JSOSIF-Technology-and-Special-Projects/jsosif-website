"use client";

import { MarketOverview } from "react-ts-tradingview-widgets";
import { MarketOverviewTab, Locales } from "react-ts-tradingview-widgets";

interface MarketOverviewWidgetProps {
	colorTheme?: "light" | "dark";
	height?: number | string;
	width?: number | string;
	tabs?: MarketOverviewTab[];
	dateRange?: "1D" | "1M" | "3M" | "12M" | "60M" | "ALL";
	showFloatingTooltip?: boolean;
	showChart?: boolean;
	locale?: Locales | undefined;
	isTransparent?: boolean;
}

export default function MarketOverviewWidget({
	colorTheme = "light",
	height = 660,
	width = "100%",
	tabs = [],
	dateRange = "12M",
	showFloatingTooltip = true,
	showChart = true,
	locale = "en",
	isTransparent = false,
}: MarketOverviewWidgetProps) {
	return (
		<div className="mx-auto my-8 max-w-4xl">
			<MarketOverview
				colorTheme={colorTheme}
				height={height}
				width={width}
				tabs={tabs}
				dateRange={dateRange}
				showFloatingTooltip={showFloatingTooltip}
				showChart={showChart}
				locale={locale}
				isTransparent={isTransparent}
			/>
		</div>
	);
}
