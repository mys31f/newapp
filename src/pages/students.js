import React from 'react'
import Seo from '../components/seo'

export default function Students() {
  return (
    <><>
      <div className="seo-title">
        <Seo title="Students" />
      </div>
    </><>
        <div className='image-grid'>
          <div className='image-grid-item'>
            <img src='../images/students/1.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/2.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/3.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/4.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/5.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/6.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/7.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/8.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/9.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/10.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/11.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/12.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/13.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/14.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/15.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/16.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/17.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/18.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/19.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/20.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/21.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/22.png' />
          </div>
          <div className='image-grid-item'>
            <img src='../images/students/23.png' />
          </div>
        </div>

        <div className="styles">
          <style> {`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 20px;
          margin: 0 auto;
          padding: 0;
          width: 100%;
        }
        .image-grid-item {
          display: block;
          margin: 0 auto;
          padding: 0;
          width: 100%;
        }
        .image-grid-item img {
          display: block;
          margin: 0 auto;
          padding: 0;
          width: 100%;
        }
        .styles {
          display: block;
          margin: 0 auto;
          padding: 0;
          width: 100%;
        }
      `}</style>
        </div>
      </></>
  )
}
