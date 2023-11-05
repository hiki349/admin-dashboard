import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./utils";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard, Topbar } from "./scenes";

const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
  },
]);

export const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <RouterProvider router={router} /> */}
          <main className="content">
            <Topbar />
            <RouterProvider router={router} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
