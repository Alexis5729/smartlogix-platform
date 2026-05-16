import { Link } from "react-router-dom";
import { FaBoxes, FaClipboardList, FaTruck } from "react-icons/fa";

function DashboardPage() {

    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

    let roleLabel = "Usuario";

    if (role === "ROLE_ADMIN") {
      roleLabel = "Administrador";
    } else if (role === "ROLE_WAREHOUSE_MANAGER") {
      roleLabel = "Bodeguero";
    } else if (role === "ROLE_USER") {
      roleLabel = "Usuario";
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">
        <header className="flex justify-between items-center mb-8 px-6 py-5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-lg">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Dashboard SmartLogix
            </h1>
            <p className="text-slate-500 text-lg mt-2">
              Panel principal de gestión logística v2.
            </p>
          </div>

          <div className="bg-blue-50 px-5 py-3 rounded-full font-semibold text-blue-600 shadow-md">
            <span>{roleLabel}</span>
          </div>

        </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <Link to="/inventory" className="group relative overflow-hidden rounded-3xl bg-white/80 border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className=" absolute -top-10 -right-10 w-30 h-30 bg-cyan-300 rounded-full opacity-15 group-hover:scale-130 transition duration-700"></div>
          <FaBoxes size={40}/>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Inventario
          </h2>
          <p className="text-slate-500 text-lg">
              Consultar productos, stock y disponibilidad
          </p>
        </Link>

        <Link to="/orders" className="group relative overflow-hidden rounded-3xl bg-white/80 border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className=" absolute -top-10 -right-10 w-30 h-30 bg-cyan-300 rounded-full opacity-15 group-hover:scale-130 transition duration-700"></div>
          <FaClipboardList size={40} />
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Pedidos
          </h2>
          <p className="text-slate-500 text-lg">
              Gestionar pedidos y solicitudes de envío.
          </p>
        </Link>

        <Link to="/shipments" className="group relative overflow-hidden rounded-3xl bg-white/80 border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <div className=" absolute -top-10 -right-10 w-30 h-30 bg-cyan-300 rounded-full opacity-15 group-hover:scale-130 transition duration-700"></div>
          <FaTruck size={40} />
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Envíos
          </h2>
          <p className="text-slate-500 text-lg">
              Consultar y registrar envíos asociados a pedidos.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;