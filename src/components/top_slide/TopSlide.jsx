import React from 'react'
import Carousel from 'react-grid-carousel'
import slide1 from './../../images/slide1.png'
import slide2 from './../../images/slide2.png'
import slide3 from './../../images/slide3.png'
import Slide from './Slide'

const slides = [
    {
        title: 'Պրոֆեսիոնալ մոտեցում',
        text: 'Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։',
        photo: slide1
    },
    {
        title: 'Որակյալ աշխատանք',
        text: 'Մեր որակյալ աշխատակազմը երաշխավորում է բարձրոակ ծառայություների մատոցում։ Եթե դուք վստահել եք ձեր աշխատանքը մեզ ապա կարող եք վստահ լինել որ արձյունքը ձեզ կգոհացնի:',
        photo: slide2
    },
    {
        title: 'Բազմաթիվ ծառայություններ',
        text: 'Մենք ունենք ծառայությունների լայն տեսականի որոնցում դուք կգտնեք ձեզ համապատասխանող տարբերակը:',
        photo: slide3
    },
    {
        title: 'Պրոֆեսիոնալ մոտեցում',
        text: 'Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։',
        photo: slide1
    },
    {
        title: 'Որակյալ աշխատանք',
        text: 'Մեր որակյալ աշխատակազմը երաշխավորում է բարձրոակ ծառայություների մատոցում։ Եթե դուք վստահել եք ձեր աշխատանքը մեզ ապա կարող եք վստահ լինել որ արձյունքը ձեզ կգոհացնի:',
        photo: slide2
    },
    {
        title: 'Բազմաթիվ ծառայություններ',
        text: 'Մենք ունենք ծառայությունների լայն տեսականի որոնցում դուք կգտնեք ձեզ համապատասխանող տարբերակը:',
        photo: slide3
    },
    {
        title: 'Պրոֆեսիոնալ մոտեցում',
        text: 'Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։',
        photo: slide1
    },
    {
        title: 'Որակյալ աշխատանք',
        text: 'Մեր որակյալ աշխատակազմը երաշխավորում է բարձրոակ ծառայություների մատոցում։ Եթե դուք վստահել եք ձեր աշխատանքը մեզ ապա կարող եք վստահ լինել որ արձյունքը ձեզ կգոհացնի:',
        photo: slide2
    },
    {
        title: 'Բազմաթիվ ծառայություններ',
        text: 'Մենք ունենք ծառայությունների լայն տեսականի որոնցում դուք կգտնեք ձեզ համապատասխանող տարբերակը:',
        photo: slide3
    }
]

const MyDot = ({ isActive }) => (
    <span
      style={{
        margin: '0 .3vw',
        borderRadius: '.83vw',
        height: '.83vw',
        width: isActive ? '2.5vw' : '.83vw',
        background: isActive ? '#fff' : '#858585'
      }}
    ></span>
  )

const responsive = [
    {
      breakpoint: 768,
      cols: 2,
      rows: 1,
      gap: 15,
      loop: true,
      autoplay: 2000
    }
  ];

export default function TopSlide() {
    return (
        <div className='top-slider'>
            <Carousel
                cols={3}
                autoplay={2500}
                scrollSnap={true}
                hideArrow={true}
                gap={25}
                showDots={true}
                loop={true}
                dot={MyDot}
                responsiveLayout={responsive}
            >
                {
                    slides.map((slide, index) =>
                        <Carousel.Item key={index}>
                            <Slide slide={slide} index={index} />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}
