import './PastClients.css';
import FadeInWhenVisible from './FadeInWhenVisible';

const PastClients = () => {
    const clients = [
        { name: '', img: '../images/C1.jpg', id: '1' },
        { name: '', img: '../images/C2.jpg', id: '2' },
        { name: '', img: '../images/C3.jpg', id: '3' },
        { name: '', img: '../images/C4.jpg', id: '4' },
        { name: '', img: '../images/C5.jpg', id: '5' },
        { name: '', img: '../images/C6.jpg', id: '6' },
        { name: '', img: '../images/C7.jpg', id: '7' },
        { name: '', img: '../images/C8.jpg', id: '8' },
        { name: '', img: '../images/C9.jpg', id: '9' },
        { name: '', img: '../images/C10.jpg', id: '10' },
        { name: '', img: '../images/C11.jpg', id: '11' },
        { name: '', img: '../images/C12.jpg', id: '12' },
        { name: '', img: '../images/C13.jpg', id: '13' },
        { name: '', img: '../images/C14.jpg', id: '14' },
        { name: '', img: '../images/C15.jpg', id: '15' },
        { name: '', img: '../images/C16.jpg', id: '16' },
        { name: '', img: '../images/C17.jpg', id: '17' },
        { name: '', img: '../images/C18.jpg', id: '18' },
        { name: '', img: '../images/C19.jpg', id: '19' },
        { name: '', img: '../images/C20.jpg', id: '20' },
        { name: '', img: '../images/C21.jpg', id: '21' },
        { name: '', img: '../images/C22.jpg', id: '22' },
        { name: '', img: '../images/C23.jpg', id: '23' },
        { name: '', img: '../images/C24.jpg', id: '24' }
    ];

    return (
        <div className='past-clients-section'>
            <FadeInWhenVisible children={
                <h1 className="client-card-heading">Our Clients</h1>
            } transition={ 0.7 } />

            <FadeInWhenVisible children={
                <div className="clients-card-container">
                    { clients.map((client) => (
                        <div className="client-card" key={ client.id }>
                            <img alt={ client.name } src={ client.img } className="client-image" />
                        </div>
                    ))}
                    
                    {/* { clients.map((client) => (
                        <div className="client-card" key={ client.id }>
                            <img alt={ client.name } src={ client.img } className="client-image" />
                        </div>
                    ))} */}
                </div>
            }
            />
        </div>
    );
};

export default PastClients;
