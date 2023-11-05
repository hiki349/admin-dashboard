import { FC, ReactNode, useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../utils";
import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  CalendarTodayOutlined,
  HelpOutline,
  BarChartOutlined,
  PieChartOutline,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";

interface SidebarItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const navigate = useNavigate();

  return (
    <MenuItem
      active={selected === title}
      onClick={() => {
        setSelected(title);
        navigate(to);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <ProSidebar collapsed={isCollapsed} backgroundColor={colors.primary["400"]}>
      <Menu>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          {!isCollapsed && <Typography variant="h4">ADMINIS</Typography>}
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlined />
          </IconButton>
        </Box>
        {!isCollapsed && (
          <Box mt={2} display="flex" flexDirection="column" alignItems="center">
            <Avatar
              sx={{ width: 75, height: 75 }}
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            />
            <Typography variant="h3" fontWeight="bold">
              Ed Roh
            </Typography>
            <Typography>VP Fancy Admin</Typography>
          </Box>
        )}

        <SidebarItem
          title="Dashboard"
          to="/"
          icon={<HomeOutlined />}
          selected={selected}
          setSelected={setSelected}
        />
        <SidebarItem
          title="Manage Team"
          to="/team"
          icon={<PeopleOutline />}
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Contacts Information"
          to="/contacts"
          icon={<ContactsOutlined />}
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Invoices Balances"
          to="/invoices"
          icon={<ReceiptOutlined />}
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Profile Form"
          to="/form"
          icon={<PersonOutline />}
          selected={selected}
          setSelected={setSelected}
        />
        <SidebarItem
          title="Calendar"
          icon={<CalendarTodayOutlined />}
          to="/calendar"
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="FAQ Page"
          icon={<HelpOutline />}
          to="/faq"
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Bar Chart"
          icon={<BarChartOutlined />}
          to="/bar"
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Pie Chart"
          icon={<PieChartOutline />}
          to="/pie"
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Line Chart"
          icon={<TimelineOutlined />}
          to="/line"
          selected={selected}
          setSelected={setSelected}
        />

        <SidebarItem
          title="Geography Chart"
          icon={<MapOutlined />}
          to="/geography"
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </ProSidebar>
  );
};
