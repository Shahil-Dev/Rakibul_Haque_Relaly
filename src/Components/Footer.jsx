import React from "react";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Rakibul Hoque Helaly</h2>
                    <p className="text-gray-400">
                        Dedicated to truth, unity, and social progress. Connecting voices for a better tomorrow.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61569295871747" target="_blank" rel="noreferrer" className="hover:underline">Fearless Pioneers</a></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>
                    <p className="flex items-center gap-2 text-gray-300 mb-2">
                        <FaEnvelope /> <span>rakibul.helaly@email.com</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 mb-4">
                        <FaPhoneAlt /> <span>+880 1XXXXXXXXX</span>
                    </p>

                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.facebook.com/profile.php?id=61569295871747"
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
                © {new Date().getFullYear()} The website is made by <a href="https://www.facebook.com/yemtehan.shahil.9/" className="text-white font-bold">Yemtehan Shahil</a> . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
