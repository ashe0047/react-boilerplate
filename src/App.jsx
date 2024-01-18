import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import AuthLayout from "./components/common/layout/AuthLayout";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
      element: (<Layout />),
      id: "root",
      children: []
		},
		{
			path: "/auth",
      element: (<AuthLayout />),
      id: "auth",
      children: []
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
