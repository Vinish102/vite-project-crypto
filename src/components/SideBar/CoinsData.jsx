import { useSelector } from "react-redux"

function CoinsData({name,mkt_cap,change}) {


  let bottom =  <div className="h-0 w-0 border-x-8 border-x-transparent border-t-[8px]  border-t-red-600"></div>
  let top = <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px]  border-b-green-600"></div>

// importing base currency to change market capital symbol accordigly

const baseCurrency = useSelector(state=>state.BaseCurrency);

  return (
    // container for list of coins
    <div className='mx-auto  w-full max-w-fit bg-white font-sans'>
        <div className='align-middle'>
          {/* NAME, MARKET CAPITAL IN THIS CONTAINER */}
            <div className='sm:pl-4 pr-4 flex sm:items-left'>
                <div className='content-center px-3 m-1 align-middle'>
                  <h1 className='pr-5 text-sm px-3 antialiased text-gray-800'><b>{name}</b> </h1>
                  <p className='coin-volume px-3  py-1 text-center text-xs  text-gray-500'>
                    Mkt.Cap  {mkt_cap.toLocaleString()}
                    {baseCurrency=='usd'?'$':
                    baseCurrency=='inr'?'₹':
                    baseCurrency=='eur'?'€':
                    baseCurrency==='jpy'?'¥':
                    'invalid currency'}  
                  </p>
                </div>
                
                     {/* CHANGE IN THIS CONTAINER */}
                <div className='coin-price px-5 text-inherit text-sm flex'>

                  <div className='pt-5 p-3'>{change<0?bottom:top}</div>

                   <div className='px-1 p-3'>{change.toFixed(2)}%</div> 

                </div>              
                
            </div>
        </div>
    </div>
  )
}

export default CoinsData