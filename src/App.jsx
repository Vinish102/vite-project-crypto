import BaseCurrency from "./components/BaseCurrency/BaseCurrency";
import CoinListAPI from "./components/SideBar/CoinListAPI";
// import { CryptoChart } from "./components/CryptoChart";
// import { CryptoProvider } from "./Context/CryptoContext";

function App() {
  return (
    <>
    <BaseCurrency/>
      <CoinListAPI/>
    {/* <CryptoProvider>

      <CryptoChart />
    </CryptoProvider> */}

 
    </>
  );
}

export default App;
