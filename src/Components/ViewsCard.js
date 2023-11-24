import React from 'react'

export default function ViewsCard({image, views, percent}) {
  return (
    <div className='views-card'>
        <div className='top'>
            <div className='page-view'>Page Views</div>
            <img src={image} className='icon'></img>
        </div>
        <div className='bottom'>
            <div className='number'>{views}</div>
            <div className='percent'>
                <img src='/images/icon-up.svg'></img>
                {percent}
            </div>
        </div>
    </div>
  )
}
