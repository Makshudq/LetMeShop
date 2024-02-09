import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function App() {
  const routing = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
