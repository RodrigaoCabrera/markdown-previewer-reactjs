
import { useState, useEffect } from 'react';

import './index.css'

const App = () => {
   const [data, setData] = useState('');

   const onChange = (e) => {
    setData(e.target.value)
   }
   
return(
<div id="editor" style={{
    display:'flex',
    flexDirection: 'column',
    alignItems:'center'
}}>
    <div style={{
            width: '60%'
        }}>
        <h3 style={{
            backgroundColor: 'grey'
        }}>Editor</h3>
        <textarea value={data} onChange={onChange} style={{
            width: '100%'
        }}></textarea>
        
    </div>

    <div style={{
            backgroundColor:'grey',
            width: '80%'
        }}>
            <h3 style={{
            backgroundColor: 'blue'
        }}>Editor</h3>
        <p style={{
            border: '2px solid grey'
        }}>{data}</p>
    </div>
    <div style={{
            backgroundColor: 'grey'
        }}></div>
</div>

)};

export default App;

