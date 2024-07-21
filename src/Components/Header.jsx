import React from "react";

const Header = () => {
  return (
    <div>
      <div aria-current="page" class="w-inline-block w--current">
        {/* <img
          src="https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2.png"
          loading="lazy"
          width="450"
          sizes="(max-width: 479px) 40vw, 270px"
          alt=""
          srcset="https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2-p-500.png 500w, https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2-p-800.png 800w, https://cdn.prod.website-files.com/6297ed89dab9bd032b44bb6b/6297ede44aa99c431d3a1ef2_New_Logo_Font_2.png 900w"
          class="image-24"
        /> */}
        <div className="image-24" style={{
          width: "450px"
        }}>
          SmartAudience Ai

        </div>
      </div>
    </div>
  );
};

export default Header;
