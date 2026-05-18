import { Link, useNavigate } from "react-router-dom";

function ServiceNavbar({ title }) {

    const role = localStorage.getItem("role");

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    let roleLabel = "Usuario";

    if (role === "ROLE_ADMIN") {
        roleLabel = "Administrador";
    } else if (role === "ROLE_WAREHOUSE_MANAGER") {
        roleLabel = "Bodeguero";
    }

    return (
        <header className="flex justify-between items-center mb-6 px-5 py-3 bg-white/80 border border-slate-200 rounded-2xl shadow-lg">

            <div className="flex flex-col gap-1">

                <Link
                    to="/dashboard"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition text-m"
                >
                    ← Volver al Dashboard
                </Link>

                <h1 className="text-2xl font-black tracking-tight text-slate-900">
                    {title}
                </h1>

            </div>

            <div className="flex items-center gap-3">

                <div className="bg-blue-50 px-4 py-2 rounded-full font-semibold text-blue-600 shadow-sm">
                    <span>{roleLabel}</span>
                </div>

                <button
                    onClick={logout}
                    className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold shadow-sm transition-all"
                >
                    Cerrar sesión
                </button>

            </div>

        </header>
    );
}

export default ServiceNavbar;