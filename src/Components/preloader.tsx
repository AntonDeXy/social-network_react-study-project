import React from 'react'
import spiner from '../imgs/spiner.svg'

const Preloader:React.FC = () => (
  <img className='spiner' src={spiner} alt='loader' />
)

export default Preloader