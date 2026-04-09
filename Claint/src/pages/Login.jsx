import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, AlertCircle } from 'lucide-react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const Login = () => {
    const [step, setStep] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; 

    const validate = () => {
        if (!emailRegex.test(email)) return "PLEASE ENTER A VALID EMAIL";
        if (step === 'Sign Up' && !name) return "FULL NAME IS REQUIRED";
        if (!passRegex.test(password)) return "PASSWORD: 8+ CHARS, 1 LETTER, 1 NUMBER";
        return null;
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setError('');
        
        const validationError = validate();
        if (validationError) return setError(validationError);

        setLoading(true);
        try {
            const isLogin = step === 'Login';
            const endpoint = isLogin ? '/users/login' : '/users/register';
            const payload = isLogin ? { email, password } : { fullname: name, email, password };

            const response = await api.post(endpoint, payload);
            
        if (response.status === 200 || response.status === 201) {
    // Save a simple flag or user name so the Navbar knows we are in
    localStorage.setItem("user", JSON.stringify(response.data.user)); 
    navigate('/'); 
    window.location.reload(); // Force refresh so Navbar updates immediately
}
        } catch (err) {
            setError(err.response?.data?.message || "SERVER UNREACHABLE");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-24 px-6 min-h-[85vh] flex items-center justify-center bg-white font-sans">
            <form onSubmit={onSubmitHandler} className="w-full max-w-md bg-white border border-gray-100 p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-[140px] font-black text-black/[0.02] select-none italic uppercase">{step[0]}</div>
                
                <div className="mb-12 relative z-10">
                    <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-3">New Steps Member</span>
                    <h2 className="text-3xl font-light uppercase tracking-tight">{step === 'Login' ? 'Sign' : 'Join'} <span className="font-black italic">{step === 'Login' ? 'In' : 'Brand'}</span></h2>
                    
                    {error && (
                        <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 border-l-4 border-red-600">
                            <AlertCircle size={14} />
                            <p className="text-[9px] font-bold tracking-[0.1em]">{error}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-8 relative z-10">
                    {step === 'Sign Up' && (
                        <div className="relative">
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder=" " className="peer w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all text-sm uppercase" />
                            <label className="absolute left-0 top-2 text-gray-400 text-[9px] font-bold tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-black peer-valid:-top-4">Full Name</label>
                        </div>
                    )}

                    <div className="relative">
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " className="peer w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all text-sm" />
                        <label className="absolute left-0 top-2 text-gray-400 text-[9px] font-bold tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-black peer-valid:-top-4">Email Address</label>
                    </div>

                    <div className="relative">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" " className="peer w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all text-sm" />
                        <label className="absolute left-0 top-2 text-gray-400 text-[9px] font-bold tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-black peer-valid:-top-4">Password</label>
                    </div>
                </div>
              
                <button disabled={loading} type="submit" className="w-full bg-black text-white py-5 mt-10 text-[10px] font-black tracking-[0.3em] uppercase flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all disabled:opacity-50">
                    {loading ? 'Processing...' : step === 'Login' ? 'Access Portal' : 'Create Profile'}
                    <ArrowUpRight size={16} />
                </button>

                <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                    <p onClick={() => {setStep(step === 'Login' ? 'Sign Up' : 'Login'); setError('');}} className="text-[9px] font-black tracking-widest text-gray-400 hover:text-black cursor-pointer uppercase transition-colors">
                        {step === 'Login' ? "Need an account? Register" : "Already a member? Sign In"}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;