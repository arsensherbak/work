import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.scss'
const Main = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://611e1dfaa0f19c00179e7668.mockapi.io/work');

      setItems(itemsResponse.data);

    }
    fetchData();
  }, [])

  const onSerch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <main className='main'>
      <div className='topMain'>
        <div className='searchValue'>
          {searchValue ? `Пошук вакансії : "${searchValue}"` : 'Місце де хочеться працювати'}
        </div>
        <div className='searchBlock'>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,
            12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,
            15.5V14.71L13.73,14.44C12.59,15.41 11.11,
            16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,
            3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,
            7 12,5 9.5,5Z"
              fill='white' /></svg>
          <input onChange={onSerch} placeholder='пошук вакансії...' value={searchValue} height={20} />
          {searchValue && (<svg onClick={() => setSearchValue('')} width="24" height="24" viewBox="0 0 24 24">
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,
            2 0 0,0 18,19V7H6V19Z" fill='white' /></svg>)}
        </div>
      </div>
      <div className='formCard'>
        {
          items.filter((item) => item.vacation.includes(searchValue.toLowerCase())).map((obj, index) => (
            <div className='card' key={index} >
              <h2>Вакансія:</h2>
              <p>{obj.vacation}</p>
              <p>Населений пункт:</p>
              <p>{obj.locality}</p>
              <p>Телефон:</p>
              <p>{obj.number}:</p>
            </div>
          ))}

      </div>
    </main>
  )
}

export default Main;