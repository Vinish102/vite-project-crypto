import "./App.css";
import { CryptoChart } from "./components/CryptoChart";
import { CryptoProvider } from "./Context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <CryptoChart />
    </CryptoProvider>
  );
}

export default App;
