const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-y border-stone-800 m-4 p-4">
        <div className="logo font-extrabold text-2xl tracking-tighter">Mustryy</div>
        <div className="menu flex gap-4">
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">Home</a>
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">About</a>
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">Projects</a>
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">Tech</a>
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">Products</a>
          <a href="" className="hover:bg-black/5 backdrop-blur-sm hover:text-black px-2 duration-150 rounded-sm">Pricing</a>
        </div>
        <div><button className="px-4 py-2 bg-stone-800 text-white rounded-sm">Contact</button></div>
    </div>
  )
}

export default Navbar