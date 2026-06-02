
export default function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Testo</div>
        <nav className="hidden md:flex justify-between gap-6 text-sm  ">
          <a href="#" className="hover:text-gray-400">Services </a>
          <a href="#" className="hover:text-gray-400">Delivery models</a>
          <a href="#" className="hover:text-gray-400">Industries</a>
          <a href="#" className="hover:text-gray-400">Company</a>
          <a href="#" className="hover:text-gray-400">Case studies</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
        </nav>
        <div>
          <button className="bg-[#FFBB80] hover:bg-blue-700 text-black text-sm font-semibold py-2 px-4 rounded-full">Get in touch</button>
        </div>
      </div>
    </header>
  );
}
