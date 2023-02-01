import { useState } from 'react';
import { Stack } from '@mui/material';

import UserCard from './components/UserCard';
import { data } from './utils/Data'
import './App.css';


function App() {

  const [search, setSearch] = useState('')


  return (
    <div className="App">
      <h1 className='main-heading'>React Search filter</h1>
      <input
        placeholder='Search'
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        className='search-input'
      />
      <div className='cards-wrapper'>
        {
          data.filter((val) => {
            if(val.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || val.last_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || val.email.toLowerCase().includes(search.toLocaleLowerCase())){
              return val;
            }
            else if(search === ''){
              return val
            }
          }).map((val, key) => {
            console.log(val)
            return(
              <UserCard key={key} userData={val} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
