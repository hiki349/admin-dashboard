import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  BarChart,
  GeographyChart,
  Header,
  LineChart,
  ProgressCircle,
  StatBox,
} from "../../components";
import { mockTransactions } from "../../data/mockData";
import {
  DownloadDoneOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import { tokens } from "../../utils";

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent["700"],
              color: colors.grey["100"],
              fontSize: "14px",
              fontWeight: "bold",
              p: "10px 20px",
            }}
          >
            <DownloadDoneOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary["400"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12.361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <Email
                sx={{ color: colors.greenAccent["600"], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary["400"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431.161"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+4%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent["600"], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary["400"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="31.325"
            subtitle="New Clients"
            progress={0.57}
            increase="+11%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent["600"], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary["400"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1.325.142"
            subtitle="Traffic Inbound"
            progress={0.73}
            increase="+38%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent["600"], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span  2"
          bgcolor={colors.primary["400"]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey["100"]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="500"
                color={colors.greenAccent["500"]}
              >
                59.342.32 $
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadDoneOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent["500"] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary["400"]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${
              theme.palette.mode === "dark"
                ? colors.primary["500"]
                : colors.primary["900"]
            }`}
            color={colors.grey["100"]}
            padding="15px"
          >
            <Typography
              color={colors.grey["100"]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transaction
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${
                theme.palette.mode === "dark"
                  ? colors.primary["500"]
                  : colors.primary["900"]
              }`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent["400"]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey["100"]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey["100"]}>{transaction.date}</Box>
              <Box
                bgcolor={colors.greenAccent["500"]}
                padding="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary["400"]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color={colors.greenAccent["500"]}
              sx={{ mt: "15px" }}
            >
              48.325 $ revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary["400"]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary["400"]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
