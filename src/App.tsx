import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#fff] w-full h-full flex ">
      <Sidebar />
      <main className="bg-[#E5E5E5] w-full p-[20px]">
        <h1>text</h1>
      </main>
    </div>
  );
}

export default App;
