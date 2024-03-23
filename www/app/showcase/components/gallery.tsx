import React from "react";
import showcase from "@/public/showcase.svg";
import sunflower from "@/public/sunflower.svg";
import sticker_club from "@/public/sticker_club.svg";
import test_img from "@/public/test_img.svg";
import {Knewave} from "next/dist/compiled/@next/font/dist/google";
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

      <div className="">
        {[...Array(3)].map((_, i) => (
            <div className={"flex justify-center gap-[10%] mb-[5%]"} key={i}>
                <div className={"border border-black relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center text-xl"}>Hello</div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#C47D7D] rounded-lg">
                        <img
                            src={test_img.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between"}>
                        <div className="text-xl">$30STKS/h</div>
                        <div className="text-lg">ICON</div>
                    </div>
                </div>

                <div className={"border border-black relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center text-xl"}>Hello</div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#CCB4DF] rounded-lg">
                        <img
                            src={test_img.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between"}>
                        <div className="text-xl">$30STKS/h</div>
                        <div className="text-lg">ICON</div>
                    </div>
                </div>

                <div className={"border border-black relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center text-xl"}>Hello</div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#8BBADC] rounded-lg">
                        <img
                            src={test_img.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between"}>
                        <div className="text-xl">$30STKS/h</div>
                        <div className="text-lg">ICON</div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
