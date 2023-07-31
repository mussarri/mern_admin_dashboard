import { ResponsivePie } from "@nivo/pie";
import React from "react";

function Pie({ theme, salesByCategory }) {
  const formattedData = Object.entries(salesByCategory).map(function (
    category
  ) {
    return {
      id: category[0],
      label: category[0],
      value: category[1],
    };
  });
  return (
    <ResponsivePie
      data={formattedData}
      margin={{ top: 40, bottom: 80, left: 100, right: 90 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={{ scheme: "accent" }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.primary.main}
      arcLinkLabelsThickness={2}
      arcLabelsSkipAngle={10}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#333333",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 10,
          translateY: 50,
          itemsSpacing: -10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: theme.palette.grey.main,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );
}

export default Pie;
