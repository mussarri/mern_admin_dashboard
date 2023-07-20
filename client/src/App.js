import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material";
import Products from "./pages/Products.jsx";
import Customers from "./pages/Customers.jsx";
import Transactions from "./pages/Transactions.jsx";
import Geography from "./pages/Geography.jsx";
import Overview from "pages/Overview";
import Daily from "pages/Daily";
import NoPage from "pages/NoPage";
import Monthly from "pages/Monthly";

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme = createTheme(themeSettings(mode));
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
