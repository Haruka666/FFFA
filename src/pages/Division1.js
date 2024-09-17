import React from 'react';
import Accueil from '../component/Accueil';
import Cougar from '../images/COUGARS_2024.png';
import Molosse from '../images/MOLOSSES_2024.png';
import Flash from '../images/FLASH_2024.png';
import Leopards from '../images/LEOPARDS_24.png';
import '../styles/Div1.css'

function Division1() {
  return (
    <div>
      <Accueil />
      <div className='division-container'>
        <h3>Conférence Nord</h3>
        <a href="https://lescougars.fr/" target='_blank'>
        <img src= {Cougar} alt='logo Cougar'/>
        </a>
        <a href="https://www.flashfootball.org/" target='_blank'>
        <img src= {Flash} alt='logo Flash'/>
        </a>
        <a href='https://molossesfootball.com/' target='_blank'>
        <img src= {Molosse} alt='logo Molosse'/>
        </a>
        <a href='https://leopardsrouen.fr/' target='_blank'>
        <img src= {Leopards} alt='logo Leopards'/>
        </a>
      </div>
    </div>
  );
}

export default Division1;