import React from "react";
import { useHistory } from 'react-router-dom';
import logo from '../image/messi.jpg';
import logo1 from '../image/back.jpg';
import logo2 from '../image/ronaldo.jpg';
import logo3 from '../image/nymar.png';
import logo4 from '../image/ambappe.jpg';
import logo5 from '../image/ramos.jpg';


function Home() {
  let history = useHistory();
  const redirect = () => {
    history.push('/Imageg')
  }
  return (
    <div className='home'>
      <table>
 
  <tr>
    <td><img src={logo} width="200" height="200" alt="messi" onClick={redirect}/></td>
    <td><img src={logo1} width="200" height="200" alt="messi" onClick={redirect}/></td>
    <td><img src={logo2} width="200" height="200" alt="messi" onClick={redirect}/></td>
  </tr>
  <tr>
    <td><img src={logo3} width="200" height="200" alt="messi" onClick={redirect}/></td>
    <td><img src={logo4} width="200" height="200" alt="messi" onClick={redirect}/></td>
    <td><img src={logo5} width="200" height="200" alt="messi" onClick={redirect}/></td>
  </tr>
  
</table>
      
      
      
      
      
      
    </div>
  );
}

export default Home;