import React from 'react';
import '../index.css';

import logo from '../image/messi.jpg';

function Imageg() {
  return (
    <div className='products'>
        <table>
            <td>
                <tr> <img src={logo} width="200" height="200" alt="messi" className="Mimag"/><br/></tr>
                <tr> <p className="imageM">Luis Lionel Andres (“Leo”) Messi is an Argentinian soccer player who plays forward for the FC Barcelona club and the Argentina national team. At the age of 13, Messi moved from Argentina to Spain after FC Barcelona agreed to pay for his medical treatments. 

There he earned renown as one of the greatest players in history, helping his club win more than two dozen league titles and tournaments. In 2012, he set a record for most goals in a calendar year, and in 2019, he was named Europe's Ballon d'Or winner for the sixth time.</p></tr>
                <tr className="btbt"><button type="submit" className="buttonM">
          Add to Cart
        </button></tr>
           
            </td>
        </table>
       
       
    
    </div>
  );
}

export default Imageg;