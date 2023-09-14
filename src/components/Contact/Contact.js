import "./Contact.scss";
import contactImage from "../../images/contact.webp"
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

export default function Contact() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // --------------------------------------------------------
    // Follow mouse image
    // https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html

    let constrain = 60;
    let mouseOverContainer = document.querySelector('.contact-section');
    let layer = document.querySelector('.contact-img');

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(100vw) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    if (matchMedia('(pointer:fine)').matches) {
      mouseOverContainer.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([layer]);

        window.requestAnimationFrame(function () {
          transformElement(layer, position);
        });
      };
    }
  }, []);

  return (
    <section id="contact" className="contact-section" data-scroll-section>
      <div className="wrapper-rolling-text">
        <div className="rolling-text font-white title title-contact">
          <span>Get in touch · Get in touch ·&nbsp;</span>
        </div>
      </div>

      <div className="mid-container">
        <div className="contact-img-container">
          <img src={contactImage} alt="contact" className={cn("contact-img", { "is-reveal": reveal })} data-scroll data-scroll-target=".contact-img-container"></img>
        </div>

        <div className="links-container">
          <div className="links">
            <div className="link-title text">Socials</div>
            {/* <div className="link text font-white hover-underline-animation"><a href="" target="_blank" rel="noreferrer">Behance</a></div> */}
            <div className="link text font-white hover-underline-animation"><a href="https://www.instagram.com/eduparksitusperahukuno/" target="_blank" rel="noreferrer">Instagram</a></div>
            {/* <div className="link text font-white hover-underline-animation"><a href="" target="_blank" rel="noreferrer">LinkedIn</a></div> */}
          </div>

          <div className="links">
            <div className="link-title text">Contact</div>
            {/* <div className="link text font-white hover-underline-animation"><a href="mailto:@gmail.com">@gmail.com</a></div> */}
            <div className="link text font-white hover-underline-animation"><a href="wa.me/6289673988491">+6289673988491</a></div>
            <div className="link text font-white hover-underline-animation">&#8205;</div>
          </div>
        </div>
      </div>

      <div className="text designed-by font-white">Powered by <a className='link text font-white hover-underline-animation' href='https://www.instagram.com/kknt.punjulharjo/' target='_blank'>KKNT Punjulharjo</a> Undip x Unisvet.</div>
    </section>
  )
}