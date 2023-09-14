import './Works.scss';
import { useEffect, useRef, useState } from 'react';
// import gsap from "gsap";
// import SplitText from '../../utils/SplitText3.min.js';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function WorksHome() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

  useEffect(() => {
    // --------------------------------------------------------
    // Text appear animation
    // const split = new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineChildren",
    // });

    // new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineParent",
    // });

    // gsap.to(split.lines, {
    //   duration: 1,
    //   y: -20,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: "var(--custom-ease-out)",
    // });
  }, []);

  const thumbnailWork1 = require('../../images/projects/GOPR1423.JPG');
  const thumbnailWork2 = require('../../images/projects/GOPR1426.JPG');
  const thumbnailWork3 = require('../../images/projects/GOPR1431.JPG');
  const thumbnailWork4 = require('../../images/projects/GOPR1432.JPG');
  const thumbnailWork5 = require('../../images/projects/GOPR1435.JPG');
  const thumbnailWork6 = require('../../images/projects/GOPR1444.JPG');


  const works = [
    {
      "title": "Museum Perahu Kuno",
      "thumbnail": thumbnailWork6,
      "detail": "Infografis, Temuan, dll",
      "link": "",
    },
    {
      "title": "Temuan Fosil",
      "thumbnail": thumbnailWork5,
      "detail": "Tulang-tulang",
      "link": "",
    },
    {
      "title": "Temuan Sisa Benda",
      "thumbnail": thumbnailWork4,
      "detail": "Keramik, alat makan, dll",
      "link": "",
    },
    {
      "title": "Material Pembentuk Kapal",
      "thumbnail": thumbnailWork3,
      "detail": "Kayu, Ijuk, dll",
      "link": "https://www.behance.net/gallery/158436257/HD-Assistante-Website",
    },
    {
      "title": "Infografis",
      "thumbnail": thumbnailWork2,
      "detail": "Budaya Maritim, Keilmuan, dll",
      "link": "https://www.behance.net/gallery/156839471/Real-Estate-Management-Interface",
    },
    {
      "title": "Miniatur Perahu",
      "thumbnail": thumbnailWork1,
      "detail": "Design perahu ketika ditemukan",
      "link": "https://www.behance.net/gallery/156836453/League-of-Legends-Universe",
    }
  ]

  const workSliderContent = works.map((work, key) =>
    <SwiperSlide key={key} className={cn("work-item", { "is-reveal": reveal })}>
      <a href={work.link} target="_blank" rel="noreferrer">
        <div className="work-canvas">
          <img className="work-item-image" src={work.thumbnail} alt={work.title} data-scroll data-scroll-speed="-2" data-scroll-target=".work-canvas"></img>
        </div>
        <div className="work-description">
          <h3 className="text-24 font-white">{work.title}</h3>
          <p className="work-detail font-neutral text">{work.detail}</p>
        </div>
      </a>
    </SwiperSlide>
  )

  return (
    <section id="works-home" className={cn("home-works-section", { "is-reveal": reveal })} data-scroll-section>
      <h2 ref={ref} id="works-title" className={cn("works-title title title-works font-white", { "is-reveal": reveal })} data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Gallery</h2>

      <Swiper slidesPerView={"auto"} className="work-slider">
        {workSliderContent}
      </Swiper>
    </section>
  )
}