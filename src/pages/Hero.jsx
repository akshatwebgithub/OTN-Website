import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import logo from "../components/logo.png";

export default function Hero() {

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden text-white">

            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0"
                options={{
                    fullScreen: false,
                    particles: {
                        number: {
                            value: 70,
                            density: { enable: true, area: 800 },
                        },
                        color: { value: "#22d3ee" },
                        links: {
                            enable: true,
                            color: "#22d3ee",
                            opacity: 0.2,
                            distance: 150,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        opacity: { value: 0.3 },
                        size: { value: 2 },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                links: {
                                    opacity: 0.5,
                                },
                            },
                        },
                    },
                }}
            />

            {/* Parallax Glow Effect */}
            <div
                className="absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none transition-transform duration-200"
                style={{
                    transform: `translate(${mouse.x * 50}px, ${mouse.y * 50}px)`
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Logo */}
                <img
                    src={logo}
                    alt="OTN Logo"
                    className="mx-auto h-24 mb-6
                    drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]
                    animate-bounce"
                />

                {/* Badge */}
                <div className="inline-block mb-6 px-5 py-2 rounded-full
                bg-cyan-500/10 border border-cyan-400/30
                backdrop-blur-md text-cyan-400 text-sm tracking-wide">

                    OTN – OVER THE NETWORK • SAFE & SECURE

                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight
                bg-gradient-to-r from-white via-cyan-200 to-cyan-400
                bg-clip-text text-transparent">

                    Secure Networking
                    <br />
                    Without Limits

                </h1>

                {/* Description */}
                <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">

                    OTN is a secure networking device designed to provide reliable and controlled
                    communication across networks. With encrypted access
                    and protected connectivity, OTN ensures your data remains safe, accessible,
                    and fully secure in any environment.

                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">

                    <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400
                    text-black font-semibold rounded-lg
                    shadow-lg shadow-cyan-500/30
                    hover:scale-110 hover:shadow-cyan-400/40
                    transition duration-300">

                        View OTN Device

                    </button>

                    <button className="px-8 py-4 border border-cyan-400/40
                    hover:border-cyan-400
                    text-cyan-400 font-semibold rounded-lg
                    backdrop-blur-md
                    hover:bg-cyan-400/10
                    hover:scale-110 transition duration-300">

                        Learn How It Works

                    </button>

                </div>

            </div>

        </section>
    );
}