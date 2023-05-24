import { useSelector } from "react-redux"
import CoinsData from "./CoinsData";


function SideBar() {

    const coinsList = useSelector(state=>state.CoinsList)

  // containing the coins data into a list inside coinsListData variable
    const coinsListData = coinsList.map((coin,index)=><li className='border-b-2 bg-white' key={index}>
                                                      <CoinsData key={coin.id}     
                                                           name={coin.name}
                                                         mkt_cap={coin.market_cap}
                                                        change = {coin.price_change_percentage_24h}/>
                                                      </li>);


    return (
      <div className='max-w-sm'>
        <div className='main-sidebar scroll-mb-24 h-screen ... text-clip overflow-scroll'>
          
          <div className='mx-10 my-6 font-medium'> 
              <h1> Cryptocurrency by<br /> market cap</h1>
          </div>
          <ul>
                  {coinsListData}
          </ul>

      </div>
  </div>
  )
}

export default SideBar