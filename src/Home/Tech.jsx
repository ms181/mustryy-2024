import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import js from "../assets/tech/js.webp";
import tailwind from "../assets/tech/tailwind.png";
import react from "../assets/tech/react.png";
import express from "../assets/tech/express.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/node-js.png";
import php from "../assets/tech/php.png";
import mysql from "../assets/tech/mysql.png";
import wordpress from "../assets/tech/wordpress.png";
import wix from "../assets/tech/wix.png";
import shopify from "../assets/tech/shopify.png";
import photoshop from "../assets/tech/photoshop.webp";
import illustrator from "../assets/tech/illustrator.webp";
import canva from "../assets/tech/canva.png";

const Tech = () => {
  return (
    <div>
      <h1 className="mb-8 font-bold text-4xl text-center ">
        What{" "}
        <span className="bg-stone-900 text-white px-3 rounded-sm">technologies</span>{" "}
        do we use?
      </h1>
      <div className="px-14 flex flex-wrap justify-center gap-4">
        {/* HTML */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#ff5722] hover:bg-gradient-to-b from-white to-[#ff5722]/20 hover:border-[#ff5722] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={html} className="w-10 h-10 object-contain" alt="HTML" />
        </div>

        {/* CSS */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#2097f3] hover:bg-gradient-to-b from-white to-[#2097f3]/20 hover:border-[#2097f3] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={css} className="w-10 h-10 object-contain" alt="CSS" />
        </div>

        {/* JavaScript */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#ffdf00] hover:bg-gradient-to-b from-white to-[#ffdf00]/20 hover:border-[#ffdf00] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={js} className="w-10 h-10 object-contain" alt="JavaScript" />
        </div>

        {/* Tailwind CSS */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#34bbc1] hover:bg-gradient-to-b from-white to-[#34bbc1]/20 hover:border-[#34bbc1] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={tailwind}
            className="w-10 h-10 object-contain"
            alt="Tailwind CSS"
          />
        </div>

        {/* React */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#00e1d6] hover:bg-gradient-to-b from-white to-[#00e1d6]/20 hover:border-[#00e1d6] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={react} className="w-10 h-10 object-contain" alt="React" />
        </div>

        {/* Express */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#333333] hover:bg-gradient-to-b from-white to-[#333333]/20 hover:border-[#333333] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={express}
            className="w-10 h-10 object-contain"
            alt="Express"
          />
        </div>

        {/* MongoDB */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#10aa50] hover:bg-gradient-to-b from-white to-[#10aa50]/20 hover:border-[#10aa50] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={mongodb}
            className="w-10 h-10 object-contain"
            alt="MongoDB"
          />
        </div>

        {/* Node.js */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#5eaf47] hover:bg-gradient-to-b from-white to-[#5eaf47]/20 hover:border-[#5eaf47] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={nodejs}
            className="w-10 h-10 object-contain"
            alt="Node.js"
          />
        </div>

        {/* PHP */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#777bb3] hover:bg-gradient-to-b from-white to-[#777bb3]/20 hover:border-[#777bb3] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={php} className="w-10 h-10 object-contain" alt="PHP" />
        </div>

        {/* MySQL */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#2b8ca3] hover:bg-gradient-to-b from-white to-[#2b8ca3]/20 hover:border-[#2b8ca3] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={mysql} className="w-10 h-10 object-contain" alt="MySQL" />
        </div>

        {/* WordPress */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#00769d] hover:bg-gradient-to-b from-white to-[#00769d]/20 hover:border-[#00769d] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={wordpress}
            className="w-10 h-10 object-contain"
            alt="WordPress"
          />
        </div>

        {/* Wix */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#333333] hover:bg-gradient-to-b from-white to-[#333333]/20 hover:border-[#333333] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={wix} className="w-10 h-10 object-contain" alt="Wix" />
        </div>

        {/* Shopify */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#95be46] hover:bg-gradient-to-b from-white to-[#95be46]/20 hover:border-[#95be46] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={shopify}
            className="w-10 h-10 object-contain"
            alt="Shopify"
          />
        </div>

        {/* Photoshop */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#00a5f9] hover:bg-gradient-to-b from-white to-[#00a5f9]/20 hover:border-[#00a5f9] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={photoshop}
            className="w-10 h-10 object-contain"
            alt="Photoshop"
          />
        </div>

        {/* Illustrator */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#ff9a00] hover:bg-gradient-to-b from-white to-[#ff9a00]/20 hover:border-[#ff9a00] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img
            src={illustrator}
            className="w-10 h-10 object-contain"
            alt="Illustrator"
          />
        </div>

        {/* Canva */}
        <div className="w-24 h-24 bg-white border-4 shadow-2xl hover:shadow-[#836dd3] hover:bg-gradient-to-b from-white to-[#836dd3]/20 hover:border-[#836dd3] rounded-full flex items-center justify-center duration-300 shadow-transparent">
          <img src={canva} className="w-10 h-10 object-contain" alt="Canva" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
