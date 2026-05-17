import Navbar from "../components/Navbar";

function MainLayout({ children }) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 p-6">

            <Navbar />

            {children}

        </div>
    );
}

export default MainLayout;