import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInventoryItems } from "../api/inventoryApi";

function InventoryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInventory() {
      try {
        const data = await getInventoryItems();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el inventario.");
      } finally {
        setLoading(false);
      }
    }

    loadInventory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 p-8">
      <Link to="/dashboard" className="inline-flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800 transition">← Volver al dashboard</Link>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Inventario</h1>
        <p className="text-slate-500 text-lg">Listado de productos disponibles en SmartLogix.</p>
      </div>

      {loading && <p>Cargando inventario...</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {!loading && !error && (
        <div className="bg-white/80 border border-slate-200 rounded-3xl shadow-lg p-8">
          <table className="w-full border-collapse mt-6 overflow-hidden rounded-2xl">
            <thead>
              <tr>
                <th className="p-4 bg-slate-100 text-slate-700 uppercase text-sm tracking-wide text-left border-b border-slate-200">SKU</th>
                <th className="p-4 bg-slate-100 text-slate-700 uppercase text-sm tracking-wide text-left border-b border-slate-200">Nombre</th>
                <th className="p-4 bg-slate-100 text-slate-700 uppercase text-sm tracking-wide text-left border-b border-slate-200">Stock</th>
                <th className="p-4 bg-slate-100 text-slate-700 uppercase text-sm tracking-wide text-left border-b border-slate-200">Reservado</th>
                <th className="p-4 bg-slate-100 text-slate-700 uppercase text-sm tracking-wide text-left border-b border-slate-200">Disponible</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.sku}>
                  <td className="p-4 border-b border-slate-200">{item.sku}</td>
                  <td className="p-4 border-b border-slate-200">{item.productName}</td>
                  <td className="p-4 border-b border-slate-200">{item.availableQuantity}</td>
                  <td className="p-4 border-b border-slate-200">{item.reservedQuantity}</td>
                  <td className="p-4 border-b border-slate-200">{item.availableQuantity - item.reservedQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InventoryPage;