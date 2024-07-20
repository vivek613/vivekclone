import React from "react";

const Footer = () => {
  return (
    <section class="footer-dark">
      <div class="container-4">
        <div class="footer-wrapper">
          <a
            href="/"
            aria-current="page"
            class="footer-brand w-inline-block w--current"
          >
            <img
              src="https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2.png"
              loading="lazy"
              width="450"
              sizes="(max-width: 767px) 47vw, (max-width: 991px) 24vw, 225px"
              alt=""
              srcset="https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2-p-500.png 500w, https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2-p-800.png 800w, https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2.png 900w"
              class="image-16"
            />
          </a>
          <div class="footer-content">
            <div
              id="w-node-_9eb237fa-a22d-52c7-5e1b-24671c7e503d-7d44bb6c"
              class="footer-block"
            >
              <div class="title-small">Company</div>
              <a href="/about-us" class="footer-link">
                About Us
              </a>
              <a href="/faq" class="footer-link">
                FAQ
              </a>
            </div>
            <div
              id="w-node-_9eb237fa-a22d-52c7-5e1b-24671c7e5042-7d44bb6c"
              class="footer-block"
            >
              <div class="title-small">Content</div>
              <a href="/case-studies" class="footer-link">
                Case Studies
              </a>
              <a href="/book-a-demo" class="footer-link">
                Demo
              </a>
            </div>
            <div
              id="w-node-_9eb237fa-a22d-52c7-5e1b-24671c7e5049-7d44bb6c"
              class="footer-block"
            >
              <div class="title-small">About</div>
              <a href="/terms-condition" class="footer-link">
                Terms &amp; Conditions
              </a>
              <a href="/privacy-policy" class="footer-link">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-center">Copyright © 2021 AudienceLabs</div>
    </section>
  );
};

export default Footer;
