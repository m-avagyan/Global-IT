import React from 'react'
import work1 from './../../images/work1.png'
import work2 from './../../images/work2.png'
import Work from './Work'
import Carousel from 'react-grid-carousel'

const responsive = [
    {
      breakpoint: 768,
      cols: 2,
      rows: 1,
      gap: 0,
      loop: true,
      autoplay: 2000
    }
  ];

export default function Works() {
    return (
        <div className='works'>
            <h2>Մեր աշխատանքները</h2>
            <div className='works-row'>
                <Carousel
                  cols={2}
                  autoplay={2500}
                  scrollSnap={true}
                  loop={true}
                  hideArrow={true}
                  gap={50}
                  responsiveLayout={responsive}
                >
                    <Carousel.Item>
                        <Work photo={work1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Work photo={work2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Work photo={work2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Work photo={work1} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
