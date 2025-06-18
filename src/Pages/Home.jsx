import React from 'react';
import Hero from '../Components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>

            <div>
                <Hero />
            </div>
            <br /><br /><br />
            <div className='max-w-6xl mx-auto'>
                <div className='mx-4 md:mx-0'>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="font-black text-4xl text-white"
                    >
                        About <br />
                        <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                            Rakibul Hoque Helaly
                        </span>
                    </div>
                    <br />
                    <h1 className='text-gray-300 text-lg'>
                        <span className="font-bold">Rakibul Hoque Helaly</span> is a dedicated social and political leader, committed to empowering communities and advocating for transformative change. With a solid foundation in grassroots activism and hands-on community organization, he has consistently led initiatives that address real-world challenges and uplift the lives of people across his region. Helaly's leadership is grounded in inclusivity, empathy, and transparency — qualities that have earned him the trust of diverse communities and stakeholders alike. He possesses a deep understanding of the social and economic struggles faced by marginalized populations and continuously works to amplify their voices. His mission goes beyond advocacy; it is about building sustainable solutions, inspiring civic engagement, and fostering unity in diversity. Through his relentless dedication, Rakibul Hoque Helaly has emerged not only as a voice for the voiceless but also as a catalyst for hope, progress, and meaningful impact.
                    </h1>
                    <br /><br />
                </div>
            </div>

            <div>
                {/* Section Heading */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-center text-4xl font-extrabold text-purple-500 mb-16"
                >
                    Rakibul Hoque Helaly's <br />
                    <span className='text-center text-4xl font-extrabold text-white'>Vision in Action</span>
                </div>

                <div className="bg-[#0e0e0e] text-white py-20">
                    {/* Section 1: Fearless Pioneers */}
                    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 mb-24">
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="w-full md:w-1/2 rounded-xl shadow-xl"
                        >
                            <img src="/Img/Fearless-Pioneers.jpg" alt="Fearless Pioneers" />
                        </div>
                        <div data-aos="fade-left" className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">Fearless Pioneers</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Founded by <span className="font-semibold">Rakibul Hoque Helaly</span>, <span className="text-purple-400">Fearless Pioneers</span> is more than a news outlet — it's a platform committed to uncovering truth with integrity and urgency. With fearless journalism at its core, it challenges misinformation and highlights voices that often go unheard. Operating independently, it champions transparency, community awareness, and rapid-response reporting. The platform continues to inspire others to seek truth and demand accountability in every layer of society.
                            </p>
                            <a
                                href="https://www.facebook.com/profile.php?id=61569295871747"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white rounded-md transition"
                            >
                                Explore on Facebook
                            </a>
                        </div>
                    </section>

                    {/* Section 2: Unity For Growth */}
                    <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="w-full md:w-1/2 rounded-xl shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">Unity For Growth (UFG)</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="text-purple-400 font-semibold">Unity For Growth (UFG)</span> is a dynamic, value-driven community founded by <span className="font-semibold">Rakibul Hoque Helaly</span> to promote unity, harmony, and social responsibility. This initiative empowers individuals to collaboratively engage in public welfare activities, fostering a deep sense of brotherhood, shared purpose, and meaningful contribution. By encouraging mutual respect and active citizenship, UFG transforms small acts of kindness into collective impact. Whether it's education, healthcare, or social justice — UFG is where community thrives, dreams grow, and change begins.
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white rounded-md transition"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <img className='rounded-[5px] shadow-xl' src="/Img/UFG-main.jpg" alt="Unity For Growth" />
                        </div>
                    </section>




                </div>
            </div>

            <br /><br /><br />

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-4xl font-extrabold text-center mb-12"
            >
                <h2 className="text-white">
                    Rakibul Hoque Helaly's <br />
                    <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                        Social Works
                    </span>
                </h2>
            </div>

            <section className="bg-[#0F172A] text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Iftar with Underprivileged Children */}
                    <div className="md:flex md:items-center md:gap-10 mb-20" data-aos="fade-right" data-aos-duration="1200">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <img
                                src="/Img/rakib-IFG-2.jpg"
                                alt="Iftar with Underprivileged"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4 text-violet-400">Iftar with Underprivileged Children</h3>
                            <p className="text-gray-300 text-lg">
                                In a society striving for equality and compassion, it is essential to stand beside those often overlooked — the street children and underprivileged. Providing them with a sense of belonging and dignity not only uplifts individual lives but strengthens the social fabric of the community. Rakibul Hoque Helaly has taken commendable steps by arranging heartfelt Iftar gatherings with these vulnerable groups. His initiative not only reflects his empathy and leadership but also sets an example of true social responsibility.
                            </p>
                        </div>
                    </div>

                    {/* Ramadan Food Packs for Victims' Families */}
                    <div className="md:flex md:items-center md:flex-row-reverse md:gap-10" data-aos="fade-left" data-aos-duration="1200">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <img
                                src="/Img/rakib-UFG.jpg"
                                alt="Ramadan Food Pack Distribution"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4 text-violet-400">Ramadan Food Packs for  July Victims' Families</h3>
                            <p className="text-gray-300 text-lg">
                                Honoring the sacrifice of those affected by the historic July uprising, Rakibul Hoque Helaly took the noble initiative of distributing Ramadan food packs to the families of the martyrs and the injured. This thoughtful act not only brought essential aid but also conveyed solidarity and respect to families who carry the weight of loss and struggle. His actions demonstrate how genuine empathy can manifest in impactful service to those who need it most.
                            </p>
                        </div>
                    </div>

                    <br /><br /><br />


                    {/* Section 1 */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                        {/* Placeholder for image */}
                        <div data-aos="fade-right" className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
                            {/* Image will be added here */}
                            <img src="../../public/Img/qqq.jpg" alt="" className='rounded-2xl' />
                        </div>
                        {/* Text content */}
                        <div data-aos="fade-left">
                            <h3 className="text-3xl font-bold mb-4 text-violet-400">Standing Beside the People</h3>
                            <p className="text-white text-lg leading-relaxed">
                                In the devastating floods of 2024 that struck multiple areas in Cumilla, Rakibul Haque Helaly emerged as a beacon of hope for the affected communities. With a group of dedicated volunteers, he organized and led a relief distribution mission aimed at supporting flood victims. The image clearly captures the sincerity and readiness of the team—some wearing life jackets, others holding emergency supplies—all united by a single goal: to serve humanity. Braving harsh weather and muddy roads, Rakibul and his team distributed essential items including food, water, medicine, and daily necessities directly to the flood-hit areas. This noble effort was entirely social and voluntary. More than just distributing aid, Rakibul’s initiative also lifted the morale of many distressed families. His leadership and compassion shone through each step of the mission. The photo not only documents a moment of humanitarian service but also reflects the spirit of unity, resilience, and courage. Through this selfless act, Rakibul set an inspiring example for the youth and proved that true leadership is measured in action, not words. His dedication to social welfare reminds us that in times of crisis, standing by each other is what makes us truly human. The 2024 flood relief operation will remain a proud chapter in Rakibul’s life and a symbol of hope for many. Future generations can look back at this moment as a lesson in empathy, service, and responsibility.
                            </p>
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Text content */}
                        <div data-aos="fade-right">
                            <h3 className="text-3xl font-bold mb-4 text-violet-400">Voice of Gratitude and Inspiration: Rakibul Haque Helaly’s Farewell Speech at Patiya Government College, 2023</h3>
                            <p className="text-white text-lg leading-relaxed">
                              Public speaking is one of the most essential life skills a person can develop. It not only enhances communication abilities but also builds confidence, leadership, and the power to influence. In 2023, during the farewell ceremony of the HSC batch at Patiya Government College, Rakibul Haque Helaly, a proud student of the institution, delivered a memorable speech that touched the hearts of many. Standing at the podium in traditional attire, Rakibul exemplified grace, clarity, and emotional depth in his delivery. His speech reflected gratitude, vision, and deep respect for his teachers and fellow classmates. Events like this not only mark the end of a chapter but also give students like Rakibul an opportunity to express their journey, dreams, and hopes. Through his poised presentation, Rakib proved how powerful public speaking can be in conveying ideas and inspiring others. His words carried sincerity and wisdom far beyond his age. Rakibul's performance showed his ability to speak not just from the mind, but from the heart. His command over language and calm presence on stage won the admiration of both teachers and students. Moments like these are milestones in a student’s life and a reflection of character and growth. Rakibul’s speech will surely be remembered by many, as it stood as a testament to his confidence, communication skill, and deep connection with his college. He has proven himself not only as a good student but also as a promising youth with the courage to speak up and lead by example.
                            </p>
                        </div>
                        {/* Placeholder for image */}
                        <div data-aos="fade-left" className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
                            {/* Image will be added here */}
                            <img src="../../public/Img/Rakib.pgc.jpg" alt=""  className='rounded-2xl '/>
                        </div>
                    </div>






                </div>

            </section>

            <div className='bg-[#1E1E2F] py-16 px-6' data-aos="fade-up" data-aos-duration="2000">
                <div className='max-w-6xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold text-white mb-12'>Voice of the People</h2>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-[#2B2B3C] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-shadow duration-300'>
                            <p className='text-gray-300 italic'>
                                “In Ramadan, when we had no food, Helaly Bhai's food pack brought joy and relief. May Allah bless him.”
                            </p>
                            <div className='mt-4 text-sm text-purple-400'>— Widow from the July Uprising Families</div>
                        </div>

                        <div className='bg-[#2B2B3C] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-shadow duration-300'>
                            <p className='text-gray-300 italic'>
                                “The Iftar with street children was unforgettable. I’ve never seen a leader sit and eat with them like that.”
                            </p>
                            <div className='mt-4 text-sm text-purple-400'>— A Local Volunteer from Chattgorm</div>
                        </div>

                        <div className='bg-[#2B2B3C] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-shadow duration-300'>
                            <p className='text-gray-300 italic'>
                                “Fearless Pioneers is the first place I check for truthful news. Their courage in journalism is rare today.”
                            </p>
                            <div className='mt-4 text-sm text-purple-400'>— Loyal Reader of Fearless Pioneers</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#e6e8eb] to-[#B166B7] py-16 px-6" data-aos="fade-up" data-aos-duration="2000">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-10">Inspiration & Vision</h2>
                    <div className="text-gray-700 leading-8 text-lg">
                        <p className="mb-6">
                            Rakibul Hoque Helaly draws his inspiration from individuals who embody courage, truthfulness, and an unwavering commitment to social justice. Influenced by strong moral values, a deep-rooted sense of responsibility, and faith-based ethics, he has always believed in speaking up for what is right — no matter the cost.
                        </p>
                        <p className="mb-6">
                            Looking ahead, he envisions expanding his media initiative, <strong>Fearless Pioneers</strong>, into a leading platform that delivers truthful, courageous journalism free from bias or sensationalism. He is equally determined to grow his community, <strong>Unity For Growth (UFG)</strong>, into a national movement that empowers youth to lead with integrity, unity, and purpose.
                        </p>
                        <p className="mb-6">
                            His vision is clear: “Where others stop, I want to begin.” It is this fearless mindset that continues to drive his efforts in media, community building, and social reform — not for recognition, but for real impact that touches lives and builds futures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
