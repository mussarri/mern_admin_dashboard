import { Box, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { useGetSalesQuery } from "redux/api";

function Breakdown() {
  const { isLoading, isError, data } = useGetSalesQuery();
  const theme = useTheme();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const formattedData = Object.entries(data.salesByCategory).map(function (
    category
  ) {
    return {
      id: category[0],
      label: category[0],
      value: category[1],
    };
  });

  if (data)
    return (
      <>
        <Box px={2}>
          <Typography variant="h2">Breakdown</Typography>
        </Box>
        <Box sx={{ height: "75vh", width: "100%" }}>
          <ResponsivePie
            data={formattedData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
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
        </Box>
      </>
    );
}

export default Breakdown;
