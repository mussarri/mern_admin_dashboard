import { Box, Typography } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { useGetSalesQuery } from "redux/api";
import { useTheme } from "@emotion/react";

function Monthly() {
  const theme = useTheme();
  const { isLoading, isError, data } = useGetSalesQuery();

  const lineDataSales = data.monthlyData.map(function (item) {
    return {
      x: item.month,
      y: item.totalSales,
    };
  });
  const lineDataUnits = data.monthlyData.map(function (item) {
    return {
      x: item.month,
      y: item.totalUnits,
    };
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  if (data) {
    const formattedData = [
      {
        id: "Total Sales",
        color: "hsl(271, 70%, 50%)",
        data: lineDataSales,
      },
      {
        id: "Total Units",
        color: "hsl(135, 70%, 50%)",
        data: lineDataUnits,
      },
    ];

    return (
      <>
        <Box px={2}>
          <Typography variant="h2">Monthly Data</Typography>
        </Box>
        <Box sx={{ overflowY: "scroll", overflowX: "scroll" }}>
          <Box sx={{ width: "100%", height: "75vh" , minWidth: 700}}>
            <ResponsiveLine
              sx={{ width: 100 }}
              data={formattedData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
              }}
              theme={{
                textColor: theme.palette.secondary.dark,
              }}
              curve="catmullRom"
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 15,
                tickPadding: 0,
                tickRotation: -30,
                legendOffset: 10,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={1}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={2}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </Box>
        </Box>
      </>
    );
  }
}

export default Monthly;
