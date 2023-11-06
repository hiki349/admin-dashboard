import { Box, useTheme } from "@mui/material";
import { GeographyChart, Header } from "../../components";
import { tokens } from "../../utils";

export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey["100"]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};
