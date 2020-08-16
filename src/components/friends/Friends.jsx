import React from 'react'
import friend from './.././../images/friend.png'
import friendH from './.././../images/friend_h.png'
import Friend from './Friend'
import Carousel from 'react-grid-carousel'

const responsive = [
    {
      breakpoint: 768,
      cols: 4,
      rows: 1,
      gap: 0,
      loop: true,
      autoplay: 2000
    }
  ];

export default function Friends() {
    return (
        <div className='friends'>
            <h2>Մեր գործընկերները</h2>
            <div className='friends-row'>
                <Carousel
                  cols={4}
                  autoplay={2500}
                  scrollSnap={true}
                  loop={true}
                  hideArrow={true}
                  gap={25}
                  responsiveLayout={responsive}
                >
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Friend photo={friend} photoH={friendH} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
