import React from 'react'

export default function ViewsCard() {
  return (
    <div className='views-card'>
        <div className='top'>
            <div className='page-view'>Page Views</div>
            <img src='/images/icon-facebook.svg' className='icon'></img>
        </div>
        <div className='bottom'>
            <div className='number'>87</div>
            <div className='percent'>
                <img src='/images/icon-up.svg'></img>
                3%
            </div>
        </div>
    </div>
  )
}
