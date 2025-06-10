import FadeInWhenVisible from './FadeInWhenVisible';
import './OurIndustry.css';

const OurIndustry = () => {
    const Industries = [
        {
            img: '/images/agriculture-img.jpeg',
            name: 'Agriculture'
        },
        {
            img: '/images/automotive-img.jpeg',
            name: 'Automotive'
        },
        {
            img: '/images/contruction-img.jpeg',
            name: 'Construction'
        },
        {
            img: '/images/e-com-img.jpeg',
            name: 'E-commerce'
        },
        {
            img: '/images/fmcg-img.jpeg',
            name: 'FMCG'
        },
        {
            img: '/images/healthcare-img.jpeg',
            name: 'Health Care'
        },
        {
            img: '/images/supply-chain-img.jpeg',
            name: 'Logistics & Supply Chain'
        },
        {
            img: '/images/manufacturing-img.jpeg',
            name: 'Manufacturing'
        },
        {
            img: '/images/oil-truck-img.jpeg',
            name: 'Oil & Gas'
        },
        {
            img: '/images/real-estate-img.jpeg',
            name: 'Real Estate'
        },
        {
            img: '/images/retail-img.jpeg',
            name: 'Retail'
        },
        {
            img: '/images/sat-com-img.jpeg',
            name: 'Tele Communication'
        },
        {
            img: '/images/pharma-img.jpeg',
            name: 'Pharma'
        },
        {
            img: '/images/print-paper-img.jpeg',
            name: 'Print Media and Paper'
        }
    ];

    return (
        <div className="industry">
            <div className='industries-section'>
                <FadeInWhenVisible children={
                    <h1 className="industry-card-heading">Our Expertise</h1>
                } transition={ 0.5 } />

                <FadeInWhenVisible 
                    children={
                        <div
                            className='industry-card-slider'
                            style={{ willChange: 'transform' }} // Add will-change for animation performance
                        >
                        
                            <div className="industries-container">
                                {Industries.map((industry, index) => (
                                    <div 
                                        className='industry-image-name' 
                                        key={ index }
                                        style={{
                                            transition: 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)'
                                        }}
                                    >
                                        <div className='industry-image'>
                                            <img 
                                                alt={industry.name} 
                                                src={industry.img} 
                                                loading="lazy" // Add lazy loading
                                                style={{
                                                    transition: 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)'
                                                }}
                                            />
                                        </div>
                                        <p className='industry-name'>{ industry.name }</p>
                                    </div>
                                ))}

                                {Industries.map((industry, index) => (
                                    <div className='industry-image-name' key={ index }>
                                        <div className='industry-image'>
                                            <img alt={industry.name} src={industry.img} />
                                        </div>
                                        <p className='industry-name'>{ industry.name }</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default OurIndustry;
