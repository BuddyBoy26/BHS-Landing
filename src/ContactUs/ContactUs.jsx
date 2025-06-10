import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [showLines, setShowLines] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const animateTimer = setTimeout(() => setAnimate(true), 300);
        const linesTimer = setTimeout(() => setShowLines(true), 100);
        
        return () => {
            clearTimeout(animateTimer);
            clearTimeout(linesTimer);
        };
    }, []);
        
    const validateForm = () => {
        let newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
        if (!form.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => formData.append(key, value));

        try {
            const response = await fetch('https://getform.io/f/ayvkwkpb', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                setSuccess(true);
                setTimeout(() => navigate('/'), 2000);
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white overflow-hidden relative" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {showLines && (
                <>
                    {/* Vertical animated lines from top */}
                    {[...Array(5)].map((_, i) => (
                        <div 
                            key={`vtop-${i}`} 
                            className={`absolute top-0 w-1 ${i % 2 === 0 ? 'bg-gradient-to-b from-slate-700 to-red-400' : 'bg-gradient-to-b from-red-400 to-slate-700'} ${i % 2 === 0 ? 'animate-move-up' : 'animate-move-down'}`}
                            style={{left: `${(i * 8) + 5}%`, height: '60vh', animationDelay: `${i * 200}ms`, opacity: 0}}
                        ></div>
                    ))}
                    
                    {/* Vertical animated lines from bottom */}
                    {[...Array(5)].map((_, i) => (
                        <div 
                            key={`vbottom-${i}`} 
                            className={`absolute bottom-0 w-1 ${i % 2 === 0 ? 'bg-gradient-to-b from-slate-700 to-red-400' : 'bg-gradient-to-b from-red-400 to-slate-700'} ${i % 2 === 0 ? 'animate-move-down' : 'animate-move-up'}`}
                            style={{right: `${(i * 8) + 5}%`, height: '60vh', animationDelay: `${i * 200}ms`, opacity: 0}}
                        ></div>
                    ))}
                    
                    {/* Horizontal animated lines from left */}
                    {[...Array(4)].map((_, i) => (
                        <div 
                            key={`hleft-${i}`} 
                            className={`absolute left-0 h-1 ${i % 2 === 0 ? 'bg-gradient-to-r from-slate-700 to-red-400' : 'bg-gradient-to-r from-red-400 to-slate-700'} ${i % 2 === 0 ? 'animate-move-right' : 'animate-move-left'}`} 
                            style={{top: `${(i * 8) + 5}%`, width: '50vw', animationDelay: `${i * 200}ms`, opacity: 0}}
                        ></div>
                    ))}
                    
                    {/* Horizontal animated lines from right */}
                    {[...Array(4)].map((_, i) => (
                        <div 
                            key={`hright-${i}`} 
                            className={`absolute right-0 h-1 ${i % 2 === 0 ? 'bg-gradient-to-l from-slate-700 to-red-400' : 'bg-gradient-to-l from-red-400 to-slate-700'} ${i % 2 === 0 ? 'animate-move-right' : 'animate-move-left'}`} 
                            style={{bottom: `${(i * 8) + 5}%`, width: '50vw', animationDelay: `${i * 200}ms`, opacity: 0}}
                        ></div>
                    ))}
                </>
            )}

            <div className="max-w-2xl w-full lg:p-16 p-6 rounded-2xl backdrop-blur-xl border-4 border-white transition-opacity duration-1000 ease-in-out" style={{ opacity: animate ? 1 : 0 }}>
                <h2 className={`text-3xl font-bold mb-6 text-center transition-opacity duration-1000 ease-in-out`} style={{ opacity: animate ? 1 : 0 }}>Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className={`transition-opacity duration-700 ease-in-out`} style={{ opacity: animate ? 1 : 0 }}>
                        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-in-out" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className={`transition-opacity duration-700 ease-in-out`} style={{ opacity: animate ? 1 : 0 }}>
                        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-in-out" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className={`transition-opacity duration-700 ease-in-out`} style={{ opacity: animate ? 1 : 0 }}>
                        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 rounded bg-black text-white border-2 border-white transition duration-300 ease-in-out"></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className={`w-full p-3 rounded bg-white text-black border border-white transition-opacity duration-700 ease-in-out`} style={{ opacity: animate ? 1 : 0 }} disabled={isSubmitting|success}>{success ? 'Submitted' : (isSubmitting ? 'Sending...' : 'Send Message')}</button>
                </form>
            </div>
            <style>{`
                @keyframes move-up {
                    0% { transform: translateY(100vh); opacity: 0; }
                    3% { opacity: 0; }
                    5% { opacity: 0.7; }
                    95% { opacity: 0.7; }
                    97% { opacity: 0; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                @keyframes move-down {
                    0% { transform: translateY(-100vh); opacity: 0; }
                    3% { opacity: 0; }
                    5% { opacity: 0.7; }
                    95% { opacity: 0.7; }
                    97% { opacity: 0; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                @keyframes move-left {
                    0% { transform: translateX(100vw); opacity: 0; }
                    3% { opacity: 0; }
                    5% { opacity: 0.7; }
                    95% { opacity: 0.7; }
                    97% { opacity: 0; }
                    100% { transform: translateX(-100vw); opacity: 0; }
                }
                @keyframes move-right {
                    0% { transform: translateX(-100vw); opacity: 0; }
                    3% { opacity: 0; }
                    5% { opacity: 0.7; }
                    95% { opacity: 0.7; }
                    97% { opacity: 0; }
                    100% { transform: translateX(100vw); opacity: 0; }
                }
                .animate-move-up {
                    animation: move-up 12s linear infinite;
                }
                .animate-move-down {
                    animation: move-down 12s linear infinite;
                }
                .animate-move-left {
                    animation: move-left 14s linear infinite;
                }
                .animate-move-right {
                    animation: move-right 14s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default ContactForm;