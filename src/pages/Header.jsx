import { useState, useEffect } from "react";
import logo from "../components/logo.png";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={`fixed w-full top-0 z-50 transition-all duration-500
        ${scrolled
                ? "bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg"
                : "bg-transparent"
            }`}>

            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-4 cursor-pointer">

                    <img
                        src={logo}
                        alt="OTN Logo"
                        className="h-14 md:h-16 w-auto object-contain
                                   drop-shadow-[0_0_18px_rgba(34,211,238,0.7)]
                                   hover:drop-shadow-[0_0_30px_rgba(34,211,238,1)]
                                   transition duration-500"
                    />

                    <span className="text-cyan-400 font-semibold text-2xl hidden sm:block tracking-wide">
                        OTN
                    </span>

                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-slate-300 font-medium">

                    <a href="#home" className="hover:text-cyan-400 transition duration-300">
                        Home
                    </a>

                    <a href="#about" className="hover:text-cyan-400 transition duration-300">
                        About
                    </a>

                    <a href="#services" className="hover:text-cyan-400 transition duration-300">
                        Services
                    </a>

                    <a href="#contact" className="hover:text-cyan-400 transition duration-300">
                        Contact
                    </a>

                    <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30">
                        Get Started
                    </button>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cyan-400"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className="md:hidden bg-[#020617]/95 backdrop-blur-xl border-t border-cyan-500/20">

                    <div className="flex flex-col px-6 py-4 gap-4 text-slate-300">

                        <a href="#home" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>

                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>

                        <a href="#services" onClick={() => setMenuOpen(false)}>
                            Services
                        </a>

                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>

                        <button className="bg-cyan-500 text-black px-5 py-2 rounded-lg">
                            Get Started
                        </button>

                    </div>

                </div>

            )}

        </header>

    );

}