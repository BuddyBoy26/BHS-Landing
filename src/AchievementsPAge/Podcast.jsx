import './Podcast.css';
const Podcast = ({ url, name }) => {
    const getYouTubeEmbedUrl = (url) => {
        // Extract video ID from various YouTube URL formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        
        if (match && match[2].length === 11) {
            // Return proper embed URL with video ID and parameters
            return `https://www.youtube.com/embed/${match[2]}?autoplay=0&rel=0`;
        }
        
        // Return a fallback or the original URL if no match
        return url;
    };

    return ( 
        <div className="podcast border-2 rounded-lg p-4 shadow-lg w-full max-w-lg mx-auto bg-white">
            <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
            <div className="aspect-w-16 aspect-h-9">
                <iframe 
                    className="w-full h-64 rounded-lg" 
                    src={getYouTubeEmbedUrl(url)} 
                    frameBorder="0" 
                    allowFullScreen
                    title={name}
                ></iframe>
            </div>
        </div>
    );
}
 
export default Podcast;
