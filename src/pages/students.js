import React from 'react'
import Seo from '../components/seo'

// import images
import img1 from '../images/student/1.png'
import img2 from '../images/student/2.png'
import img3 from '../images/student/3.png'
import img4 from '../images/student/4.png'
import img5 from '../images/student/5.png'
import img6 from '../images/student/6.png'
import img7 from '../images/student/7.png'
import img8 from '../images/student/8.png'
import img9 from '../images/student/9.png'
import img10 from '../images/student/10.png'
import img11 from '../images/student/11.png'
import img12 from '../images/student/12.png'
import img13 from '../images/student/13.png'
import img14 from '../images/student/14.png'
import img15 from '../images/student/15.png'
import img16 from '../images/student/16.png'
import img17 from '../images/student/17.png'
import img18 from '../images/student/18.png'
import img19 from '../images/student/19.png'
import img20 from '../images/student/20.png'
import img21 from '../images/student/21.png'
import img22 from '../images/student/22.png'
import img23 from '../images/student/23.png'

export default function student() {
  return (
    <><>
      <div className="seo-title">
        <Seo title="student" />
      </div>
    </><>
        <div className='image-grid'>
          <div className='image-grid-item'>
            <img src={ img1 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img2 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img3 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img4 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img5 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img6 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img7 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img8 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img9 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img10 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img11 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img12 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img13 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img14 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img15 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img16 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img17 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img18 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img19 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img20 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img21 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img22 } />
          </div>
          <div className='image-grid-item'>
            <img src={ img23 } />
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
