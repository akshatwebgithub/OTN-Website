import { Power, Usb, Monitor, Globe, CheckCircle } from "lucide-react";

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative py-32 bg-gradient-to-b from-slate-900 to-[#020617] text-white overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px]
            bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">

                    <div className="inline-block px-4 py-2 mb-4 text-sm text-cyan-400
                    bg-cyan-500/10 rounded-full border border-cyan-400/30">

                        HOW OTN WORKS

                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6
                    bg-gradient-to-r from-white via-cyan-200 to-cyan-400
                    bg-clip-text text-transparent">

                        Get Started in 5 Simple Steps

                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto">

                        OTN makes secure networking simple and efficient.
                        Follow these steps to activate and access your secure network.

                    </p>

                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px]
                    bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20"></div>

                    <div className="grid md:grid-cols-5 gap-10 relative">

                        <Step
                            icon={<Power size={28} />}
                            title="Power On"
                            desc="Plug in the OTN device to activate and initialize the system."
                        />

                        <Step
                            icon={<Usb size={28} />}
                            title="Connect Pen Drive"
                            desc="Insert the pen drive into the OTN device to enable access."
                        />

                        <Step
                            icon={<Monitor size={28} />}
                            title="Open OTN App"
                            desc="Launch the OTN application to establish connection."
                        />

                        <Step
                            icon={<Globe size={28} />}
                            title="Access Network"
                            desc="Open the network address to connect securely."
                        />

                        <Step
                            icon={<CheckCircle size={28} />}
                            title="Access Your Device"
                            desc="Your secure OTN network is now ready to use."
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}


/* Step Component */
function Step({ icon, title, desc }) {
    return (
        <div className="group text-center relative">

            {/* Icon */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center
            rounded-full bg-gradient-to-br from-cyan-500 to-blue-600
            text-white shadow-lg shadow-cyan-500/30
            group-hover:scale-110 transition duration-300">

                {icon}

            </div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-semibold">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                {desc}
            </p>

        </div>
    );
}