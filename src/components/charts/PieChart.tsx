import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../../data/mockData";
import { FC } from "react";
import { tokens } from "../../utils";
import { useTheme } from "@mui/material";

interface PieChartProps {
  isDachboard?: boolean;
}

export const PieChart: FC<PieChartProps> = ({ isDachboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
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
      enableArcLinkLabels={!isDachboard}
      isInteractive={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.primary["100"]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
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
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.primary["100"],
              },
            },
          ],
        },
      ]}
    />
  );
};
