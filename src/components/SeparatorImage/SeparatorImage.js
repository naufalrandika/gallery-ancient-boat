import React from "react";
import "./SeparatorImage.scss";

export default function SeparatorImage() {
  return (
    <section id="home-separator" className="home-separator" data-scroll-section>
      <div className="separator-container">
        <iframe
          title="Perahu Kuno Punjulharjo"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/dfa42f144efb40aa90daf15bc8385249/embed"
          alt="illustration separator"
          className="separator-image"
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target=".separator-container"
        ></iframe>
      </div>
    </section>
  );
}
