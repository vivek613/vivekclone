import React from "react";
import image from "../Assets/logo.png"

const Header = () => {
  return (
    <div>
      <div aria-current="page" class="w-inline-block w--current">
        <img
          src=" https://firebasestorage.googleapis.com/v0/b/test-aa862.appspot.com/o/logo.png?alt=media&token=24064835-dcdb-44c5-9f17-726d1ed24158"
          loading="lazy"
          width="450"
          sizes="(max-width: 479px) 40vw, 270px"
          alt=""
          srcset="https://firebasestorage.googleapis.com/v0/b/test-aa862.appspot.com/o/logo.png?alt=media&token=24064835-dcdb-44c5-9f17-726d1ed24158"
          class="image-24"
        />

      </div>
    </div>
  );
};

export default Header;
