import { Box } from "@mui/material";
import { Header, PieChart } from "../../components";

export const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};
