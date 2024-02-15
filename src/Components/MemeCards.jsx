import React from 'react'
import './MemeCards.css'
function MemeCards({memeName,memeImg}) {
  return (
    <div className='Cards'>
    <img src={memeImg} alt="ankitdev" width={'200px'} />
      <div>{memeName}</div>
    </div>
  )
}

export default MemeCards
