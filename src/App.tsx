import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="bg-[#fff] w-full h-full flex ">
      <Sidebar />
      <main className="bg-[#E5E5E5] w-full p-[20px]">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
