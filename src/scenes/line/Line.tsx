import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";

export const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
