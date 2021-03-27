
import { useState, useEffect } from 'react';

import './index.css'

const App = () => {
   const [data, setData] = useState('');
   
   const onChange = (e) => {
    setData(e.target.value)
   }

const onKeyPressHandler = (event) => {
    if (event.keyCode == 13) {
        
    }
  }
  
return(
    
<div id="editor">
    
    <div>
        <h3>Editor</h3>
        <textarea value={data} onChange={onChange} onKeyDown={onKeyPressHandler} style={{
            width: '100%'
        }}></textarea>
        
    </div>

    <div>
            <h3>Previewer</h3>
            <div>{data}</div>
        
    </div>
    
</div>

)};

export default App;

