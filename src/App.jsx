import "./App.css";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Featured />
    </Layout>
  );
}

export default App;
