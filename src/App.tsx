import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{}]);

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
