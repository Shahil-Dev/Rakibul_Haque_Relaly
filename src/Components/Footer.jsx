import React from "react";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
            <div className="max-w-6xl mx-auto  grid-cols-1 md:flex justify-between  md:grid-cols-3 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Rakibul Hoque Helaly</h2>
                    <p className="text-gray-400">
                        Dedicated to truth, unity, and social progress. <br />  Connecting voices for a better tomorrow.
                    </p>
                </div>

                {/* Quick Links */}
               

                {/* Contact & Socials */}
                <div className="mt-8 md:mt-0">
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>
                    <p className="flex items-center gap-2 text-gray-300 mb-2">
                        <FaEnvelope /> <span>rakibhelaly.official@gmail.com </span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 mb-4">
                        <FaPhoneAlt /> <span>+880 1711-993294</span>
                    </p>

                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.facebook.com/rakibul.hoque.helaly.2024"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()}   All right reserved by <a href="https://www.facebook.com/rakibul.hoque.helaly.2024">Rakibul Hoque Helaly </a>. 
            </div>
        </footer>
    );
};

export default Footer;
