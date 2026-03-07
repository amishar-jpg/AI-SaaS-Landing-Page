import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gradient-dark)" }}
    >
      <Navbar />
      <main className="pt-20">
        {/* Sections will be added in later phases */}
      </main>
    </div>
  );
}

export default App;
