import { Box } from "@mui/material";
import { Header } from "../../components";

export const Dashboard = () => {
  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};
