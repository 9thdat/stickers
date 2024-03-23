import React from "react";
import showcase from "@/public/showcase.svg";
import sunflower from "@/public/sunflower.svg";
import sticker_club from "@/public/sticker_club.svg";
import pic1 from "@/public/pic1.svg";
import pic2 from "@/public/pic2.svg";
import pic3 from "@/public/pic3.svg";
import tenSTkS from "@/public/10STkS.svg";
import thirtySTkS from "@/public/30STkS.svg";
import hundredSTkS from "@/public/100STkS.svg";
import dat from "@/public/9thdat.svg";
import bonkFliper from "@/public/bonkFliper.svg";
import oxnheo from "@/public/oxnheo.svg";
import wow from "@/public/wow.svg";

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
                <div className={"relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center items-start text-xl"}>
                        <img src={dat.src} alt="10STkS" className="w-[40%]"/>
                    </div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#C47D7D] rounded-lg">
                        <img
                            src={pic1.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between pt-[3%]"}>
                        <div className="text-xl flex items-center">
                            <img src={thirtySTkS.src} alt="30STkS" className="w-[50%]"/>
                        </div>
                        <div className="text-lg flex justify-end">
                            <img src={wow.src} alt="ICON" className="w-[50%]"/>
                        </div>
                    </div>
                </div>

                <div className={"relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center items-start text-xl"}>
                        <img src={bonkFliper.src} alt="10STkS" className="w-[40%]"/>
                    </div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#C47D7D] rounded-lg">
                        <img
                            src={pic2.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between pt-[3%]"}>
                        <div className="text-xl flex items-center">
                            <img src={hundredSTkS.src} alt="30STkS" className="w-[50%]"/>
                        </div>
                        <div className="text-lg flex justify-end">
                            <img src={wow.src} alt="ICON" className="w-[50%]"/>
                        </div>
                    </div>
                </div>

                <div className={"relative pt-[2%]"}>
                    <div className={"absolute inset-0 flex justify-center items-start text-xl"}>
                        <img src={oxnheo.src} alt="10STkS" className="w-[40%]"/>
                    </div>
                    <div className="border-2 border-dashed w-60 h-96 border-[#C47D7D] rounded-lg">
                        <img
                            src={pic3.src}
                            alt="test_img"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className={"flex justify-between pt-[3%]"}>
                        <div className="text-xl flex items-center">
                            <img src={tenSTkS.src} alt="30STkS" className="w-[50%]"/>
                        </div>
                        <div className="text-lg flex justify-end">
                            <img src={wow.src} alt="ICON" className="w-[50%]"/>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
