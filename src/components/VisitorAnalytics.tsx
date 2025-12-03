import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { DarkTheme } from "../Themes";
import { Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { getRequest } from "../utils/requests";
import moment from "moment";

export const VisitorAnalytics = () => {
  const [monthlyData, setmonthlyData] = useState<{
    x_data: string[];
    y_data: number[];
  }>({ x_data: [], y_data: [] });

  const [isLoading, setLoading] = useState(true);
  const get_analytics = async () => {
    try {
      const {
        data,
      }: {
        data: { year_month: string; count: number }[];
        error: any;
        message: any;
      } = await getRequest(`/analytics/monthly-data`);
      console.log(data);
      const newXData = data.map((item) =>
        moment(item.year_month, "YYYY-MM").format("MMM YY")
      );
      const newYData = data.map((item) => Number(item.count));
      setmonthlyData({ x_data: newXData, y_data: newYData });
      console.log(monthlyData);
      setLoading(false);
    } catch (error) {
      console.error("Error in logging", error);
    }
  };

  useEffect(() => {
    get_analytics();
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        sx={{
          width: "auto",
          borderRadius: 0,
          fontFamily: "monospace",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: { xs: 1, sm: 0 },
        }}
      >
        <Typography variant="h4" mb={0}>
          Visitor Statistics
        </Typography>
        {!isLoading && (
          <LineChart
            colors={["#4CAF50"]}
            xAxis={[{ data: monthlyData.x_data, scaleType: "point" }]}
            series={[{ data: monthlyData.y_data }]}
          />
        )}
      </Paper>
    </ThemeProvider>
  );
};
