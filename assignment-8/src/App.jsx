import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Dashboard from "./Components/Dashboard/Dashboard";
import Statistics from "./Components/Statistics/Statistics";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import {WishlistContext} from "./Components/Wishlist/WishlistContext"
import SubBannerContextProvider from "./Components/SubBanner/SubBannerContext";
import axios from "axios";
import { useState } from "react";
import { CartContext } from "./Components/Cart/CartContext";
import Cart from "./Components/Cart/Cart";

import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: `/home/:category`,
          element: <Home />,
          loader: async ({ params }) => {
            try {
              const response = await axios.get("/data.json");
              if (params.category === "laptop") {
                const laptops = response.data.filter(
                  (item) => item.category === "Laptop"
                );
                // console.log("Laptops:", laptops);
                return laptops;
              } else if (params.category === "phones") {
                const phones = response.data.filter(
                  (item) => item.category === "Phone"
                );

                return phones;
              } else if (params.category === "accessories") {
                const accessories = response.data.filter(
                  (item) => item.category === "Accessories"
                );

                return accessories;
              } else if (params.category === "smartwatch") {
                const smartwatch = response.data.filter(
                  (item) => item.category === "Smartwatch"
                );

                return smartwatch;
              } else if (params.category === "macbook") {
                const macbook = response.data.filter(
                  (item) => item.category === "MacBook"
                );

                return macbook;
              }
              // else if (params.category === "all") {

              //   return response.data;
              // }
              return response.data;
            } catch (error) {
              // console.error("Error fetching data:", error);
              return [];
            }
          },
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "/dashboard/cart",
              loader: async () => {
                const response = await axios.get("/public/data.json");
                return response.data;
              },
              element: <Cart />,
            },
            {
              path: "/dashboard/wishlist",
              loader: async () => {
                const response = await axios.get("/public/data.json");
                return response.data;
              },
              element: <Wishlist />,
            },
          ],
        },
        {
          path: "/statistics",
          loader: async () => {
            const response = await axios.get("/public/data.json");
            return response.data;
          },
          element: <Statistics />,
        },
        {
          path: `/viewdetails/:product_id`,
          element: <ViewDetails></ViewDetails>,
          loader: async ({ params }) => {
            try {
              const response = await axios.get("/data.json");
              const product = response.data.find(
                (item) => item.product_id === params.product_id
              );
              return product || null;
            } catch (error) {
              console.error("Error fetching product details:", error);
              return null;
            }
          },
        },
      ],
    },
  ]);

  return (
    <SubBannerContextProvider>
      <WishlistContext.Provider value={{wishlistItems, setWishlistItems}}>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      </WishlistContext.Provider>
    </SubBannerContextProvider>
  );
}

export default App;
