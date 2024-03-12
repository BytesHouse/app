import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./i18n.ts";
import App from "./components/App/App";
import { store } from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/signup",
        element: <div>Hello world!</div>,
    },
    {
        path: "/dashboard",
        element: <div>Courses</div>,
        children: [
            {
                path: "general",
                element: <div>Hello world!</div>,
            },
            {
                path: "info",
                element: <div>Hello world!</div>,
            },
            {
                path: "security",
                element: <div>Hello world!</div>,
            },
            {
                path: "education",
                element: <div>Hello world!</div>,
            },
            {
                path: "work",
                element: <div>Hello world!</div>,
            },
        ]
    },
    {
        path: "*",
        element: <div>404</div>,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
