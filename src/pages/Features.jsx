import { Shield, Zap, Eye } from "lucide-react";

export default function Features() {

    const features = [
        {
            icon: <Shield size={42} />,
            title: "Military-Grade Security",
            desc: "OTN uses encrypted communication protocols ensuring your network remains fully protected against threats."
        },
        {
            icon: <Zap size={42} />,
            title: "Ultra Fast Performance",
            desc: "Engineered with high-performance networking architecture delivering speed, reliability, and stability."
        },
        {
            icon: <Eye size={42} />,
            title: "Complete Network Visibility",
            desc: "Monitor, control, and secure every connection with full transparency and intelligent monitoring."
        }
    ];

    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden text-white">

            {/* Background Glow Effects */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
            bg-cyan-500/20 blur-[180px] rounded-full animate-pulse"></div>

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
            bg-blue-500/20 blur-[180px] rounded-full animate-pulse delay-1000"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Badge */}
                <div className="inline-block mb-6 px-6 py-2 rounded-full
                bg-cyan-500/10 border border-cyan-400/30
                text-cyan-400 tracking-widest backdrop-blur-md">

                    OTN FEATURES

                </div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold mb-6
                bg-gradient-to-r from-white via-cyan-200 to-cyan-400
                bg-clip-text text-transparent">

                    Why Choose OTN

                </h2>

                <p className="text-slate-400 mb-20 max-w-2xl mx-auto text-lg">
                    Built for enterprise-grade security, performance, and reliability.
                    OTN delivers next-generation networking without compromise.
                </p>


                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {features.map((feature, index) => (

                        <div key={index}
                            className="group relative">

                            {/* Animated Gradient Border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500
                            rounded-2xl blur opacity-30 group-hover:opacity-70
                            transition duration-500"></div>


                            {/* Card */}
                            <div className="relative bg-white/5 backdrop-blur-xl
                            border border-white/10 rounded-2xl p-10 h-full

                            transform transition duration-500
                            group-hover:-translate-y-3
                            group-hover:scale-105

                            shadow-xl shadow-black/30">

                                {/* Floating Icon */}
                                <div className="flex justify-center mb-6">

                                    <div className="relative">

                                        <div className="absolute inset-0 bg-cyan-500/30
                                        blur-xl rounded-full opacity-0 group-hover:opacity-100
                                        transition duration-500"></div>

                                        <div className="relative text-cyan-400
                                        group-hover:scale-110 transition duration-500">

                                            {feature.icon}

                                        </div>

                                    </div>

                                </div>


                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-4
                                group-hover:text-cyan-400 transition">

                                    {feature.title}

                                </h3>


                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed">

                                    {feature.desc}

                                </p>


                                {/* Bottom Glow Line */}
                                <div className="mt-6 h-[2px] w-0
                                bg-gradient-to-r from-cyan-500 to-blue-500
                                group-hover:w-full transition-all duration-500"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}