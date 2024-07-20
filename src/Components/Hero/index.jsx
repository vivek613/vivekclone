import React from "react";
import Wrapper from "../Wrapper";

const Hero = () => {
  return (
    <>
      <Wrapper className={"lg:h-[747px] relative"}>
        <div class="section"></div>
        <div className="section-2">
          <h1 className="heading-2">
            A new era of
            <br />
            <span className="text-span">customer acquisition</span>
          </h1>
          <h3 className="heading-23">
            AudienceLabs brings big data technology with real Artificial
            Intelligence to improve your website customer identity &amp; online
            tracking. We collect more data and install systems that deliver more
            sales, higher conversion at a predictable lower price forever.
          </h3>
          <div className="container w-container">
            <a href="/book-a-demo" className="button-3 w-button">
              Book 15 minute Demo
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Hero;
