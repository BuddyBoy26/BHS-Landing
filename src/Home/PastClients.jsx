import './PastClients.css';
import FadeInWhenVisible from './FadeInWhenVisible';

const PastClients = () => {
    const clients = [
        { name: 'company 1', img: '../images/placeholder-company-logo.png', id: '1' },
        { name: 'company 2', img: '../images/placeholder-company-logo.png', id: '2' },
        { name: 'company 3', img: '../images/placeholder-company-logo.png', id: '3' },
        { name: 'company 4', img: '../images/placeholder-company-logo.png', id: '4' },
        { name: 'company 5', img: '../images/placeholder-company-logo.png', id: '5' },
        { name: 'company 6', img: '../images/placeholder-company-logo.png', id: '6' }
    ];

    return (
        <div className='past-clients-section'>
            <FadeInWhenVisible children={
                <h1 className="client-card-heading">Our Clients</h1>
            } transition={ 0.5 } />

            <FadeInWhenVisible children={
                <div className="clients-card-container">
                    { clients.map((client) => (
                        <div className="client-card" key={ client.id }>
                            {/* <img alt={ client.name } src={ client.img } className="client-image" /> */}
                        </div>
                    ))}
                    
                    { clients.map((client) => (
                        <div className="client-card" key={ client.id }>
                            {/* <img alt={ client.name } src={ client.img } className="client-image" /> */}
                        </div>
                    ))}
                </div>
            }
            />
        </div>
    );
};

export default PastClients;
