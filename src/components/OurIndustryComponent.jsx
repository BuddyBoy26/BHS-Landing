import { useRef } from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, transitionDuration = 0.5, delayDuration = 0 }) => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: transitionDuration, delay: delayDuration }}
            className="overflow-hidden"
        >
            {children}
        </motion.div>
    );
};

const OurIndustryComponent = () => {
    const Industries = [
        { img: '/images/agriculture-img.jpeg', name: 'Agriculture' },
        { img: '/images/automotive-img.jpeg', name: 'Automotive' },
        { img: '/images/contruction-img.jpeg', name: 'Construction' },
        { img: '/images/e-com-img.jpeg', name: 'E-commerce' },
        { img: '/images/fmcg-img.jpeg', name: 'FMCG' },
        { img: '/images/healthcare-img.jpeg', name: 'Health Care' },
        { img: '/images/supply-chain-img.jpeg', name: 'Logistics & Supply Chain' },
        { img: '/images/manufacturing-img.jpeg', name: 'Manufacturing' },
        { img: '/images/oil-truck-img.jpeg', name: 'Oil & Gas' },
        { img: '/images/real-estate-img.jpeg', name: 'Real Estate' },
        { img: '/images/retail-img.jpeg', name: 'Retail' },
        { img: '/images/sat-com-img.jpeg', name: 'Tele Communication' },
        { img: '/images/pharma-img.jpeg', name: 'Pharma' },
        { img: '/images/print-paper-img.jpeg', name: 'Print Media and Paper' }
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <FadeInWhenVisible transitionDuration={0.5}>
                    <h1 className="text-4xl font-bold text-center mb-8">Our Expertise</h1>
                </FadeInWhenVisible>

                <FadeInWhenVisible transitionDuration={0.5}>
                    <div className="overflow-x-auto">
                        <div className="flex flex-wrap justify-center gap-6">
                            {Industries.map((industry, index) => (
                                <div
                                    className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
                                    key={index}
                                >
                                    <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                                        <img
                                            alt={industry.name}
                                            src={industry.img}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-lg font-medium text-gray-700">{industry.name}</p>
                                </div>
                            ))}
                            {Industries.map((industry, index) => (
                                <div
                                    className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
                                    key={index + Industries.length}
                                >
                                    <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                                        <img
                                            alt={industry.name}
                                            src={industry.img}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-lg font-medium text-gray-700">{industry.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </div>
    );
};

export default OurIndustryComponent;
