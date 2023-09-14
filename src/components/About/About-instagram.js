import './About.scss';

export default function AboutInstagram() {
  return (
    <section id="about-instagram" className="about-instaram-section" data-scroll-section>
      <div className="font-white ml-5 tablet-m-0 title title-description" data-scroll data-scroll-direction="vertical" data-scroll-speed="3">Maritim bukan hanya sekedar pelayaran, tapi juga tentang mengarungi arus sejarah. Situs Perahu Kuno memberikan arti bahwa samudra adalah buku terbuka yang berisi kisah inspiratif tentang petualangan.
</div>
      <div className="font-neutral ml-5 mt-24 tablet-ml-0 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Check out<br></br>full information &#8594; <a className="font-white hover-underline-animation" href="https://desawisatapunjulharjo.com" target="_blank" rel="noreferrer">{/* Instagram redirection link */}HERE</a></div>
    </section>
  )
}