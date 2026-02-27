import {
    ShieldCheck,
    Network,
    Activity,
    Lock,
    Wifi,
    Server
} from "lucide-react";

export default function Services() {

    const services = [
        {
            icon: <ShieldCheck size={36} />,
            title: "Advanced Network Security",
            desc: "Military-grade encryption protecting your network infrastructure."
        },
        {
            icon: <Network size={36} />,
            title: "Secure Remote Connectivity",
            desc: "Access your network safely from anywhere in the world."
        },
        {
            icon: <Activity size={36} />,
            title: "Reliable Performance",
            desc: "High-speed, stable networking built for enterprise environments."
        },
        {
            icon: <Lock size={36} />,
            title: "End-to-End Protection",
            desc: "Complete data protection across every layer."
        },
        {
            icon: <Wifi size={36} />,
            title: "Seamless Connectivity",
            desc: "Smooth, uninterrupted secure network access."
        },
        {
            icon: <Server size={36} />,
            title: "Smart Network Management",
            desc: "Monitor and control your network with precision tools."
        }
    ];

    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden text-white">

            {/* Animated background glow */}
            <div className="absolute top-[-200px] left-[-200px]
            w-[500px] h-[500px]
            bg-cyan-500/20 blur-[160px]
            rounded-full animate-pulse"></div>

            <div className="absolute bottom-[-200px] right-[-200px]
            w-[500px] h-[500px]
            bg-blue-500/20 blur-[160px]
            rounded-full animate-pulse delay-1000"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">

                    <div className="inline-block px-6 py-2 mb-6
                    text-cyan-400 bg-cyan-500/10
                    border border-cyan-400/30 rounded-full">

                        OTN CAPABILITIES

                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6
                    bg-gradient-to-r pb-3 from-white via-cyan-200 to-cyan-400
                    bg-clip-text text-transparent">
                        Secure Networking
                    </h2>

                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">

                        Enterprise-grade networking designed for performance,
                        reliability, and complete security.

                    </p>

                </div>


                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="group perspective animate-fade-up"
                            style={{
                                animationDelay: `${index * 0.15}s`
                            }}
                        >

                            {/* Glow border */}
                            <div className="absolute"></div>

                            <div className="
                                relative
                                bg-white/5 backdrop-blur-xl
                                border border-white/10
                                rounded-2xl p-8 h-full

                                transition duration-500 ease-out

                                hover:-translate-y-3
                                hover:rotate-x-6
                                hover:rotate-y-6
                                hover:scale-105

                                shadow-lg shadow-black/30
                                hover:shadow-cyan-500/20
                            ">

                                {/* Gradient glow border */}
                                <div className="absolute inset-0 rounded-2xl
                                bg-gradient-to-r from-cyan-500 to-blue-500
                                opacity-0 group-hover:opacity-20 blur-xl transition duration-500">
                                </div>


                                {/* Icon */}
                                <div className="relative text-cyan-400 mb-6
                                group-hover:scale-125 transition duration-500">

                                    {service.icon}

                                </div>


                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3
                                group-hover:text-cyan-400 transition">

                                    {service.title}

                                </h3>


                                {/* Desc */}
                                <p className="text-slate-400">

                                    {service.desc}

                                </p>


                                {/* Bottom line */}
                                <div className="mt-6 h-[2px] w-0
                                bg-gradient-to-r from-cyan-500 to-blue-500
                                group-hover:w-full transition-all duration-500">
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


        {/* Custom animations */}
        <style>{`

            .perspective {
                perspective: 1000px;
            }

            @keyframes fadeUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .animate-fade-up {
                opacity: 0;
                animation: fadeUp 0.8s ease forwards;
            }

            .animate-fade-in {
                animation: fadeIn 1s ease forwards;
            }

        `}</style>

        </section>
    );
}