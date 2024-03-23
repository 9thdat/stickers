"use client";
import React, {useState} from "react";
import showcase from "../../../public/images/showcase/header/showcase.svg";
import sunflower from "../../../public/images/showcase/header/sunflower.svg";
import sticker_club from "../../../public/images/showcase/header/sticker_club.svg";
import pc from "../../../public/images/showcase/box1/pc.svg";
import dat from "../../../public/images/showcase/box1/dat.svg";
import cat from "../../../public/images/showcase/box1/cat.svg";
import wen from "../../../public/images/showcase/box1/wen.svg";
import doge from "../../../public/images/showcase/box2/doge.svg";
import dog from "../../../public/images/showcase/box2/dog.svg";
import plus from "../../../public/images/showcase/box2/plus.svg";
import bottle from "../../../public/images/showcase/box2/bottle.svg";
import pepe_cry from "../../../public/images/showcase/box2/pepe_cry.svg";
import pepe from "../../../public/images/showcase/box2/pepe.png";
import pic3 from "../../../public/images/showcase/box3/pic3.svg";
import hammer from "../../../public/images/showcase/box3/hammer.svg";
import long_cat from "../../../public/images/showcase/box3/long_cat.svg";
import saigon from "../../../public/images/showcase/box3/saigon.svg";
import tenSTkS from "@/public/images/showcase/box3/10STkS.svg";
import thirtySTkS from "@/public/images/showcase/box1/30STkS.svg";
import hundredSTkS from "@/public/images/showcase/box2/100STkS.svg";
import thdat from "../../../public/images/showcase/box1/9thdat.svg";
import bonkFliper from "../../../public/images/showcase/box2/bonkFliper.svg";
import oxnheo from "../../../public/images/showcase/box3/oxnheo.svg";
import wow from "@/public/images/showcase/wow.svg";
import {motion, LayoutGroup} from "framer-motion"
import './gallery.css'

import {Knewave} from "next/dist/compiled/@next/font/dist/google";
import {rotate} from "next/dist/server/lib/squoosh/impl";

const Gallery = () => {
    const [showIframe, setShowIframe] = useState([false, false, false, false, false, false, false, false, false]); // State để xác định liệu iframe có nên hiển thị hay không
    const [isHover, setIsHover] = useState([false, false, false, false, false, false, false, false, false]); // State để xác định liệu có hover vào hình ảnh hay không

    // Hàm xử lý sự kiện khi click vào hình ảnh "wow"
    // i: index của hình ảnh
    const variants = {
        rest: {
            rotate: 0,
        },
        hover: {
            rotate: 10,
        }
    }

    const boxStyle = "background-image: repeating-linear-gradient(60deg, #1f2020, #1f2020 15px, transparent 15px, transparent 28px, #1f2020 28px), repeating-linear-gradient(150deg, #1f2020, #1f2020 15px, transparent 15px, transparent 28px, #1f2020 28px), repeating-linear-gradient(240deg, #1f2020, #1f2020 15px, transparent 15px, transparent 28px, #1f2020 28px), repeating-linear-gradient(330deg, #1f2020, #1f2020 15px, transparent 15px, transparent 28px, #1f2020 28px);\n" +
        "background-size: 3px 100%, 100% 3px, 3px 100% , 100% 3px;\n" +
        "background-position: 0 0, 0 0, 100% 0, 0 100%;\n" +
        "background-repeat: no-repeat;"
    const handleWowClick = (i: number) => {
        const newShowIframe = [...showIframe];
        newShowIframe[i] = !newShowIframe[i];
        setShowIframe(newShowIframe);
    };

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
                <img src={sunflower.src} alt="sunflower" className="w-[10%] h-[10%]"/>
            </div>

            <div className="">
                <div className={"flex justify-center gap-[10%] mb-[5%]"}>
                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={thdat.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div
                            className={"w-60 h-96 box1"}
                            whileHover={"hover"}
                        >
                            <motion.img
                                src={pc.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                inherit={true}
                                variants={variants}
                            />
                            <motion.img
                                src={dat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={cat.src}
                                alt="test_img"
                                className="w-[75%] h-[75%] absolute bottom-[10%] left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={wen.src}
                                alt="test_img"
                                className="w-[50%] h-[25%] absolute bottom-[10%] right-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={thirtySTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(0)}>
                                {showIframe[0] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen
                                            >
                                            </iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[100%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={bonkFliper.src} alt="10STkS" className="w-[50%]"/>
                        </div>
                        <motion.div className="box2 w-60 h-96 "
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={doge.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={dog.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={plus.src}
                                alt="test_img"
                                className="w-[10%] h-[10%] absolute bottom-[50%] left-[15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={pepe.src}
                                alt="test_img"
                                className="w-[65%] h-[25%] absolute bottom-[30%] right-[-15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={bottle.src}
                                alt="test_img"
                                className="w-[60%] h-[50%] absolute bottom-[5%] left-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={hundredSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(1)}>
                                {showIframe[1] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={oxnheo.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div className="box3 w-60 h-96"
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={hammer.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-[3%]"
                                variants={variants}
                            />
                            <motion.img
                                src={long_cat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-[10%] right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={saigon.src}
                                alt="test_img"
                                className="w-[75%] h-[50%] absolute bottom-0 left-[5%]"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={tenSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(2)}>
                                {showIframe[2] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-center gap-[10%] mb-[5%]"}>
                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={thdat.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div className="box1 w-60 h-96"
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={pc.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={dat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={cat.src}
                                alt="test_img"
                                className="w-[75%] h-[75%] absolute bottom-[10%] left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={wen.src}
                                alt="test_img"
                                className="w-[50%] h-[25%] absolute bottom-[10%] right-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={thirtySTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(3)}>
                                {showIframe[3] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen
                                            >
                                            </iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={bonkFliper.src} alt="10STkS" className="w-[50%]"/>
                        </div>
                        <motion.div className="box2 w-60 h-96 "
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={doge.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={dog.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={plus.src}
                                alt="test_img"
                                className="w-[10%] h-[10%] absolute bottom-[50%] left-[15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={pepe.src}
                                alt="test_img"
                                className="w-[65%] h-[25%] absolute bottom-[30%] right-[-15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={bottle.src}
                                alt="test_img"
                                className="w-[60%] h-[50%] absolute bottom-[5%] left-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={hundredSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(4)}>
                                {showIframe[4] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={oxnheo.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div className="box3 w-60 h-96 "
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={hammer.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-[3%]"
                                variants={variants}
                            />
                            <motion.img
                                src={long_cat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-[10%] right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={saigon.src}
                                alt="test_img"
                                className="w-[75%] h-[50%] absolute bottom-0 left-[5%]"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={tenSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(5)}>
                                {showIframe[5] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-center gap-[10%] mb-[5%]"}>
                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={thdat.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div className="box1 w-60 h-96"
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={pc.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={dat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={cat.src}
                                alt="test_img"
                                className="w-[75%] h-[75%] absolute bottom-[10%] left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={wen.src}
                                alt="test_img"
                                className="w-[50%] h-[25%] absolute bottom-[10%] right-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={thirtySTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(6)}>
                                {showIframe[6] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen
                                            >
                                            </iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={bonkFliper.src} alt="10STkS" className="w-[50%]"/>
                        </div>
                        <motion.div className="box2 w-60 h-96 "
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={doge.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-0"
                                variants={variants}
                            />
                            <motion.img
                                src={dog.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={plus.src}
                                alt="test_img"
                                className="w-[10%] h-[10%] absolute bottom-[50%] left-[15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={pepe.src}
                                alt="test_img"
                                className="w-[65%] h-[25%] absolute bottom-[30%] right-[-15%]"
                                variants={variants}
                            />
                            <motion.img
                                src={bottle.src}
                                alt="test_img"
                                className="w-[60%] h-[50%] absolute bottom-[5%] left-0"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={hundredSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(7)}>
                                {showIframe[7] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className={"relative pt-[2%]"}>
                        <div className={"absolute inset-0 h-fit flex justify-center items-start text-xl"}>
                            <img src={oxnheo.src} alt="10STkS" className="w-[45%]"/>
                        </div>
                        <motion.div className="box3 w-60 h-96"
                                    whileHover={"hover"}
                        >
                            <motion.img
                                src={hammer.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-0 left-[3%]"
                                variants={variants}
                            />
                            <motion.img
                                src={long_cat.src}
                                alt="test_img"
                                className="w-[50%] h-[50%] absolute top-[10%] right-0"
                                variants={variants}
                            />
                            <motion.img
                                src={saigon.src}
                                alt="test_img"
                                className="w-[75%] h-[50%] absolute bottom-0 left-[5%]"
                                variants={variants}
                            />
                        </motion.div>
                        <div className={"flex justify-between pt-[3%]"}>
                            <div className="text-xl flex items-center">
                                <img src={tenSTkS.src} alt="30STkS" className="w-[50%]"/>
                            </div>
                            <button className="text-lg flex justify-end w-[15%]"
                                    onClick={() => handleWowClick(8)}>
                                {showIframe[8] ?
                                    <>
                                        <div className="w-[100%] h-[50%] pb-[80%] relative">
                                            <iframe src="https://giphy.com/embed/5VKbvrjxpVJCM"
                                                    width="100%" height="100%"
                                                    frameBorder="0"
                                                    className={"giphy-embed absolute pointer-events-none"}
                                                    allowFullScreen></iframe>
                                        </div>
                                    </>
                                    :
                                    <img src={wow.src} alt="ICON" className="w-[95%]"/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Gallery;
