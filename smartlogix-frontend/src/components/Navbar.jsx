import { useNavigate } from "react-router-dom";

function Navbar() {

    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

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
        <header className="flex justify-between items-center mb-8 px-6 py-5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-lg">

            <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900">
                    Dashboard SmartLogix
                </h1>

                <p className="text-slate-500 text-lg mt-2">
                    Bienvenido, {username}
                </p>
            </div>

            <div className="flex items-center gap-4">

                <div className="bg-blue-50 px-5 py-3 rounded-full font-semibold text-blue-600 shadow-md">
                    <span>{roleLabel}</span>
                </div>

                <button
                    onClick={logout}
                    className="px-5 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition-all"
                >
                    Cerrar sesión
                </button>

            </div>

        </header>
    );
}

export default Navbar;