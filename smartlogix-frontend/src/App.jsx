import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import InventoryPage from "./pages/InventoryPage";
import OrdersPage from "./pages/OrdersPage";
import ShipmentPage from "./pages/ShipmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/shipments" element={<ShipmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;