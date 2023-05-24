import { useDispatch, useSelector } from 'react-redux'
import { BaseCurrencyAction } from '../../Context/States/Actions/BaseCurrencyAction';

function BaseCurrency() {
  // accessing states from object created in the rootreducers
  const baseCurrency = useSelector(state=>state.BaseCurrency);

  // dispatch is used to dispatch the change in states to the action 
  const dispatch = useDispatch();

  return (
    <div className='m-1 max-w-fit max-h-fit font-semibold border z-10 hover::shadow-outline' >
        <select id="currency"
                 onChange={(e)=>dispatch(BaseCurrencyAction(e.target.value))} 
                 value={baseCurrency} 
                 className="currency-select
                            bg-white
                            text-gray-900 
                            text-sm rounded-lg 
                            focus:ring-blue-500 
                            focus:border-blue-500 
                            
                            w-full 
                            p-2.5
                            " 
                            >
          <option value="inr" className='font-semibold'>INR</option>
          <option value="usd" className='font-semibold'>USD</option>
          <option value="eur" className='font-semibold'>EURO</option>
          <option value="jpy" className='font-semibold'>YEN(JAP)</option>
        </select>
    </div>

  )
}

export default BaseCurrency