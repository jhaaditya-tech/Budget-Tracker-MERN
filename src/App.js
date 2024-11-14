import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('')
  return (
    <main>
      <h1>$400<spaN>.00</spaN></h1>
      <form>
        <div className='basic'>
          <input type = "text" 
                value={name} 
                onChange={ev=>setName(ev.target.value)} 
                placeholder={'Ente the value'}/>
          <input value ={datetime}
                  onChange={ev=>setDatetime(ev.target.value)}
                  type = "datetime-local"/>
        </div>
        <div className='description'>
          <input type = "text" 
                  value={description}
                  onChange = {ev=>setDescription(ev.target.value)}
                  placeholder={'Description'}/>  
        </div>
        <button type="submit">
          Add New Transaction
        </button>
      </form>
        
        <div className='transactions'>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>It was time for new Tv</div>
            </div>
            <div className='right'>
              <div className='price red'>-$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung Phone</div>
              <div className='description'>It was time for new Tv</div>
            </div>
            <div className='right'>
              <div className='price green'>+$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>



        </div>
              
      
    </main>
  );
}

export default App;
