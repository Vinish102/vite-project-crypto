import { useDispatch, useSelector } from 'react-redux';
import { CoinsListActions } from '../../Context/States/Actions/CoinsListAction';
import { useEffect } from 'react';
import SideBar from './SideBar';

function CoinListAPI() {

    // importing Base Currency to fetch the coins in relevent currency
    const baseCurrency = useSelector(state=>state.BaseCurrency)

    const dispatch = useDispatch()


    const getData = ()=>{
   
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${baseCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
            .then(res=>{
              if(!res.ok){
                throw new Error('Network response is not ok');
              }
              return res.json();
            })
            .then(data=>{
              // process the fetch data
              dispatch(CoinsListActions(data))
            })
            .catch(err=>{
              // handle any error if occured
              console.log(err)
            })
        }
    
        // to prevent the multiple calling of api
        useEffect(()=>{
            // calling the fuction
       getData(); },[baseCurrency])
  return (
    <div>
        <SideBar/>
    </div>
  )
}

export default CoinListAPI