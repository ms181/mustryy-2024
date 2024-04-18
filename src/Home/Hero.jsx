import Image from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="px-32 flex flex-col items-center py-16">
        <h3 className="uppercase font-medium pb-2">
          Ready to Take Your Online Presence to the Next Level?
        </h3>
        <h1 className="font-bold text-6xl text-center bg-gradient-to-b from-stone-950 to-stone-600 inline-block text-transparent bg-clip-text">
          Web And App Development? <br /> Social Media Marketing? <br />
          We've Got You Covered!
        </h1>
      </div>
      <div className="flex px-12">
        <div className="w-1/5 px-2 flex flex-col gap-2">
          <div className="bg-gradient-to-r from-stone-950 to-stone-600 h-1/2 text-white rounded-sm flex justify-end flex-col p-6">
            <h3 className="text-7xl font-bold">3+</h3>
            <span>Experience</span>
          </div>
          <div className="bg-gradient-to-r from-stone-950 to-stone-600 h-1/2 text-white rounded-sm flex justify-end flex-col p-6">
            <h3 className="text-7xl font-bold">50+</h3>
            <span>Projects Done</span>
          </div>
        </div>
        <div className="w-3/5">
          <img src={Image} className="rounded-sm" alt="" />
        </div>
        <div className="w-1/5 px-2 flex flex-col gap-2">
          <div className="bg-gradient-to-r from-stone-950 to-stone-600 h-1/2 text-white rounded-sm flex justify-end flex-col p-6">
            <h3 className="text-7xl font-bold">20+</h3>
            <span>Clients</span>
          </div>
          <div className="bg-gradient-to-r from-stone-950 to-stone-600 h-1/2 text-white rounded-sm flex justify-end flex-col p-6">
            <h3 className="text-7xl font-bold">5+</h3>
            <span>People Taught</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
