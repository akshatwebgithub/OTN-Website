import { ShieldCheck, Network, Activity, Lock, Wifi, Server } from "lucide-react";
import logo from "../components/logo.png";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 bg-gradient-to-b from-[#020617] via-[#020617] to-slate-900 text-white overflow-hidden"
        >

            {/* Background Glow Effects */}
            <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">

                    <div className="inline-block px-5 py-2 rounded-full
                    bg-cyan-500/10 border border-cyan-400/30
                    text-cyan-400 text-sm mb-6 backdrop-blur-md">

                        ABOUT OTN – OVER THE NETWORK

                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6
                    bg-gradient-to-r from-white via-cyan-200 to-cyan-400
                    bg-clip-text text-transparent">

                        Security You Can Trust.

                    </h2>

                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">

                        OTN is a secure networking device built to deliver encrypted communication,
                        reliable connectivity, and real-time monitoring. Designed for modern digital
                        environments, OTN ensures your network remains protected, accessible, and
                        fully under your control.

                    </p>

                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side – Visual */}
                    <div className="relative">

                        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>

                        <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10
                        border border-cyan-400/20 backdrop-blur-xl
                        rounded-3xl p-12 text-center
                        shadow-2xl shadow-cyan-500/10">

                            <img
                                src={logo}
                                alt="OTN Device"
                                className="mx-auto h-32 mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]"
                            />

                            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                Safe • Secure • Reliable
                            </h3>

                            <p className="text-slate-400">
                                Built with advanced encryption and intelligent network protection
                                to safeguard your critical data and communication.
                            </p>

                        </div>

                    </div>

                    {/* Right Side – Features */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Security */}
                        <FeatureCard
                            icon={<ShieldCheck size={28} />}
                            title="Advanced Security"
                            desc="Encrypted communication and access control protect your network from threats."
                        />

                        {/* Connectivity */}
                        <FeatureCard
                            icon={<Network size={28} />}
                            title="Secure Connectivity"
                            desc="Reliable remote access and seamless network integration."
                        />

                        {/* Monitoring */}
                        <FeatureCard
                            icon={<Lock size={28} />}
                            title="Data Protection"
                            desc="Advanced encryption safeguards every connection and transfer."
                        />

                        {/* Performance */}
                        <FeatureCard
                            icon={<Activity size={28} />}
                            title="Stable Performance"
                            desc="Consistent and dependable network operation."
                        />

                    </div>

                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-24">

                    <StatCard number="100%" label="Secure Communication" icon={<Lock />} />
                    <StatCard number="24/7" label="Network Protection" icon={<Server />} />
                    <StatCard number="99.9%" label="Reliable Connectivity" icon={<Wifi />} />

                </div>

            </div>

        </section>
    );
}

/* Feature Card Component */
function FeatureCard({ icon, title, desc }) {
    return (
        <div className="group p-6 rounded-2xl
        bg-gradient-to-br from-white/5 to-white/0
        border border-white/10 backdrop-blur-md
        hover:border-cyan-400/40 hover:bg-cyan-500/5
        transition duration-300 hover:-translate-y-2">

            <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
                {icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
                {desc}
            </p>

        </div>
    );
}

/* Stat Card Component */
function StatCard({ number, label, icon }) {
    return (
        <div className="text-center p-8 rounded-2xl
        bg-gradient-to-br from-cyan-500/10 to-blue-500/10
        border border-cyan-400/20 backdrop-blur-md
        hover:border-cyan-400/40 transition">

            <div className="text-cyan-400 mb-4 flex justify-center">
                {icon}
            </div>

            <div className="text-3xl font-bold text-white mb-2">
                {number}
            </div>

            <div className="text-slate-400">
                {label}
            </div>

        </div>
    );
}