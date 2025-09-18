import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-800/50 via-slate-700/50 to-slate-800/50" />
            
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                    </p>
                </div>
                
                <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className=""
                        >
                            <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                                <Image
                                    src={testimonial.avatar}
                                    alt={`${testimonial.name} avatar`}
                                    width={50}
                                    height={50}
                                    className="rounded-full shadow-md"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-slate-300 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-slate-300 text-center lg:text-left font-medium leading-relaxed">&quot;{testimonial.message}&quot;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
