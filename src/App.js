import React from 'react'
import './styles/main.scss'
import TopBg from './components/wrappers/TopBg'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Friends from './components/friends/Friends'
import Works from './components/works/Works'
import Courses from './components/courses/Courses'
import Services from './components/services/Services'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'
import MainBg from './components/wrappers/MainBg'
import TopSlide from './components/top_slide/TopSlide'
import About from './components/about/About'
import Facults from './components/facults/Facults'
import Videos from './components/videos/Videos'
import BtnToTop from './components/to_top_btn/BtnToTop'

export default function App() {
    return (
        <>
            <MainBg />
            <TopBg />
            <Header />
            <Aside />
            <TopSlide />
            <Videos />
            <Facults />
            <About />
            <Courses />
            <Services />
            <Friends />
            <Works />
            <Subscribe />
            <Footer />
            <BtnToTop />
        </>
    )
}