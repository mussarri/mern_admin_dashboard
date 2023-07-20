import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React, { useMemo, useState } from "react";
import { useGetSalesQuery } from "redux/api";
import { dateFromDay } from "helper/date";
import { useTheme } from "@emotion/react";

function Daily() {
  const theme = useTheme();
  const { isLoading, isError, data } = useGetSalesQuery();
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "Novebmer",
    "December",
  ];

  const [month, setMonth] = useState("January");
  console.log(month);

  const [lineDataSales, lineDataUnits] = useMemo(() => {
    const lineData = [];
    const lineData2 = [];
    if (!data) return [];
    data.dailyData.forEach(function ({ totalSales }, index) {
      const obj = {
        x: dateFromDay(2022, index + 1).toLocaleDateString("en-EN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        y: totalSales,
      };
      lineData.push(obj);
    });
    data.dailyData.forEach(function ({ totalUnits }, index) {
      const obj = {
        x: dateFromDay(2022, index + 1).toLocaleDateString("en-EN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        y: totalUnits,
      };
      lineData2.push(obj);
    });
    return [lineData, lineData2];
  }, [data]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  if (data) {
    //filter date
    const filteredDataSales = lineDataSales.filter(
      (item) => item.x.split(" ")[0] === month
    );
    const filteredDataUnits = lineDataUnits.filter(
      (item) => item.x.split(" ")[0] === month
    );
    const formattedData = [
      {
        id: "Total Sales",
        color: "hsl(271, 70%, 50%)",
        data: filteredDataSales,
      },
      {
        id: "Total Units",
        color: "hsl(135, 70%, 50%)",
        data: filteredDataUnits,
      },
    ];

    return (
      <>
        <Box px={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h2">Daily Data - {month}</Typography>
          <FormControl sx={{ mt: "1rem" }} size="small">
            <InputLabel>Month</InputLabel>
            <Select value={month} label="view">
              {monthsArr.map((item) => (
                <MenuItem
                  value={item}
                  onClick={(e) => setMonth(e.target.dataset.value)}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ overflowY: "scroll" }}>
          <Box sx={{ width: "150%", height: "75vh" }}>
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
              colors={{ datum: "color" }}
              theme={{
                scheme: "nivo",
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

export default Daily;
