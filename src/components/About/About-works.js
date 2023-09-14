import "./About.scss";
import about from "../../images/about.webp";
import dropVideo from "../../images/drop.mp4";
import cn from "classnames";
import { useState } from "react";

export default function AboutWorks() {
  const [reveal, setReveal] = useState(false);

  return (
    <section id="about" className="about-section" data-scroll-section>
      <div
        className="font-white ml-1 tablet-m-0 title title-description"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="2"
      >
        DESA PUNJULHARJO MENYIMPAN SEJARAH <a className='golden-text'>KEMARITIMAN</a>. PADA TAHUN 2008,
        DITEMUKANNYA <a className='golden-text'>SITUS PERAHU KUNO</a> YANG SAAT INI SUDAH DITETAPKAN
        SEBAGAI SALAH SATU <a className='golden-text'>SITUS CAGAR BUDAYA INDONESIA</a>. TEMUAN INI MEMBUAT
        SETITIK <a className='golden-text'>CAHAYA TERANG</a>, MUNCUL SEBUAH <a className='golden-text'>HARAPAN</a>, UNTUK MENJADIKAN <a className='golden-text'>DESA
        PUNJULHARJO</a> MENJADI <a className='golden-text'>DESA WISATA</a> YANG <a className='golden-text'>MAJU</a> DAN <a className='golden-text'>SEJAHTERA</a>. PARA
        PENGUNJUNG DIMANJAKAN OLEH BERBAGAI FASILITAS YANG TERSEDIA, SEMBARI
        MENGABADIKAN MOMEN KEBAHAGIAAN BERSAMA ORANG YANG TERKASIH.
      </div>
      <div
        className="font-neutral ml-1 mt-24 tablet-ml-0 text"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1"
      >
        Check out<br></br>Museum SItus Prahu Kuno &#8594;{" "}
        <a className="font-white hover-underline-animation" href="#works-home">
          HERE
        </a>
      </div>

      <div className="about-canvas mt-160 ml-4 tablet-ml-0">
        <video
          autoPlay
          loop
          muted
          className={cn("about-video", { "is-reveal": reveal })}
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target=".about-canvas"
        >
          <source src={dropVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-attached ml-2 tablet-ml-0 tablet-mr-0">
        <div
          className="about-attached-text font-neutral text"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
        >
          Gain a richer experience by
        </div>
        <div
          className="about-attached-title font-white title title-section text-right"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          Coming in<br></br>Person
        </div>
      </div>
    </section>
  );
}
