
export default function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Testo</div>
        <nav className="hidden md:flex justify-between gap-6 text-sm  ">
          <a href="#">Services </a>
          <a href="#">Delivery models</a>
          <a href="#">Industries</a>
          <a href="#">Company</a>
          <a href="#">Case studies</a>
          <a href="#">Blog</a>
        </nav>
        <div>
          <button className="bg-[#FFBB80] hover:bg-blue-700 text-black text-sm font-semibold py-2 px-4 rounded-full">Get in touch</button>
        </div>
      </div>
    </header>
  );
}
