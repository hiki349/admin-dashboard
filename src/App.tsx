import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./utils";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Dashboard,
  MainLayout,
  Team,
  Contacts,
  Invoices,
  Form,
  Bar,
  Pie,
  Line,
  FAQ,
  Calendar,
  Geography,
} from "./scenes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
    ],
  },
]);

export const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
