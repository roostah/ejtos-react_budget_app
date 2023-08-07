import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch,currency} = useContext(AppContext);
  const currencies = [
      {name:'Dollar', symbol:'$'},
      {name:'Pound', symbol:'£'},
      {name:'Euro', symbol:'€'},
      {name:'Ruppee', symbol:'₹'}
  ]

  const menuItems = currencies.map(item =>
        <a key={item.symbol}
            className="dropdown-item"
            href="#"
            onClick={() => changeCurrency(item.symbol)}>
            {item.symbol} {item.name}
        </a>
    );

    const currencyName = (symbol) => {
        let current = currencies.find((element) => element.symbol === symbol);
        if (current){
            return current.name
        }
    }

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    

  return (
    <div className='alert alert-secondary'>
    <div className="dropdown">
        <button
          type="button"
          className="btn dropdown-toggle text-white"
          style={{ backgroundColor: '#93E499' }}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Currency ({currency} {currencyName(currency)})
        </button>
        <div className="dropdown-menu" style={{ backgroundColor: '#93E499' }}>
            {menuItems}
        </div>
      </div>
    </div>
    );
};

export default Currency;