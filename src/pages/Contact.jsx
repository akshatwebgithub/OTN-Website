import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully 🚀");
    };

    return (
        <section
            id="contact"
            className="relative py-32 bg-[#020617] overflow-hidden text-white"
        >

            {/* Animated Glow Background */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
            bg-cyan-500/20 rounded-full blur-[180px] animate-pulse"></div>

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
            bg-blue-500/20 rounded-full blur-[180px] animate-pulse delay-1000"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">

                    <div className="inline-block mb-6 px-6 py-2 rounded-full
                    bg-cyan-500/10 border border-cyan-400/30
                    text-cyan-400 tracking-widest backdrop-blur-md">

                        CONTACT OTN SECURE NETWORKING

                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold mb-6
                    bg-gradient-to-r from-white via-cyan-200 to-cyan-400
                    bg-clip-text text-transparent">

                        Let's Secure Your Network

                    </h2>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Contact our enterprise team for deployment, product inquiries,
                        and secure networking solutions worldwide.
                    </p>

                </div>


                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        {/* Contact Info Card */}
                        <div className="relative group">

                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500
                            rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative bg-white/5 backdrop-blur-xl
                            border border-white/10 rounded-2xl p-8 space-y-6">

                                {/* Email */}
                                <div className="flex items-center gap-4 group/item">

                                    <div className="p-4 bg-cyan-500/10 rounded-xl
                                    group-hover/item:bg-cyan-500/20 transition">
                                        <Mail className="text-cyan-400" />
                                    </div>

                                    <div>
                                        <p className="text-slate-400 text-sm">Email</p>
                                        <p className="text-lg font-semibold group-hover/item:text-cyan-400 transition">
                                            info@otn.com
                                        </p>
                                    </div>

                                </div>


                                {/* Phone */}
                                <div className="flex items-center gap-4 group/item">

                                    <div className="p-4 bg-cyan-500/10 rounded-xl
                                    group-hover/item:bg-cyan-500/20 transition">
                                        <Phone className="text-cyan-400" />
                                    </div>

                                    <div>
                                        <p className="text-slate-400 text-sm">Phone</p>
                                        <p className="text-lg font-semibold group-hover/item:text-cyan-400 transition">
                                            +1 (647) 832-4848
                                        </p>
                                    </div>

                                </div>


                                {/* Address */}
                                <div className="flex items-center gap-4 group/item">

                                    <div className="p-4 bg-cyan-500/10 rounded-xl
                                    group-hover/item:bg-cyan-500/20 transition">
                                        <MapPin className="text-cyan-400" />
                                    </div>

                                    <div>
                                        <p className="text-slate-400 text-sm">Address</p>
                                        <p className="text-lg font-semibold group-hover/item:text-cyan-400 transition">
                                            13122 103 Ave, Surrey, BC V3T 1R5, Canada
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Google Map */}
                        <div className="relative group">

                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500
                            rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative rounded-2xl overflow-hidden border border-white/10">

                                <iframe
                                    title="OTN Location"
                                    src="https://www.google.com/maps?q=13122+103+Ave+Surrey+BC+Canada&output=embed"
                                    className="w-full h-[300px]"
                                    loading="lazy"
                                />

                            </div>

                        </div>

                    </div>



                    {/* RIGHT SIDE CONTACT FORM */}
                    <div className="relative group h-full">

                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500
                        rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

                        <form
                            onSubmit={handleSubmit}
                            className="relative bg-white/5 backdrop-blur-xl border border-white/10
                            rounded-2xl p-10 space-y-6 h-full"
                        >

                            <h3 className="text-2xl font-semibold mb-4">
                                Send Message
                            </h3>

                            <input
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                                focus:border-cyan-400 outline-none transition"
                            />

                            <input
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                                focus:border-cyan-400 outline-none transition"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-lg bg-white/5 border border-white/10
                                focus:border-cyan-400 outline-none transition"
                            ></textarea>


                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2
                                bg-cyan-500 hover:bg-cyan-400
                                text-black font-semibold py-4 rounded-lg
                                shadow-lg shadow-cyan-500/30
                                hover:scale-105 transition duration-300"
                            >

                                <Send size={18} />
                                Send Message

                            </button>

                        </form>

                    </div>


                </div>

            </div>

        </section>
    );
}