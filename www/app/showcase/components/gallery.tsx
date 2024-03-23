import React from "react";
import showcase from "@/public/showcase.svg";
import sunflower from "@/public/sunflower.svg";
import sticker_club from "@/public/sticker_club.svg";
import test_img from "@/public/test_img.svg";

const Gallery = () => {
  return (
    <main>
      <div className="flex flex-row justify-between">
        <img
          src={sticker_club.src}
          alt="sticker_club"
          className="w-[10%] h-[10%] pl-[1%] pt-[1%]"
        />
        <img
          src={showcase.src}
          alt="showcase"
          className="w-[10%] h-[10%] pt-[1%]"
        />
        <img src={sunflower.src} alt="sunflower" className="w-[10%] h-[10%]" />
      </div>

      <div className="px-[15%] flex flex-col place-items-center">
        {[...Array(3)].map((_, i) => (
          <div className={"my-[3%]"} key={i}>
            <div>
              <div className="border-2 border-spacing- border-dashed w-60 h-96 inline-block border-[#C47D7D] rounded-lg">
                <img
                  src={test_img.src}
                  alt="test_img"
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>

            <div>
              <div className="border-2 border-spacing- border-dashed w-60 h-96 inline-block border-[#CCB4DF] rounded-lg mx-20">
                <img
                  src={test_img.src}
                  alt="test_img"
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>

            <div>
              <div className="border-2 border-spacing- border-dashed w-60 h-96 inline-block border-[#8BBADC] rounded-lg">
                <img
                  src={test_img.src}
                  alt="test_img"
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
