import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
// import { toast } from 'react-hot-toast'; // Optional: for notifications

const Login = () => {
    const [step, setStep] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (step === 'Sign Up') {
            setUser({ name, email });
            navigate('/');
        } else if (step === 'Login') {
            setUser({ name: email.split('@')[0], email });
            navigate('/');
        } else if (step === 'Forgot Password') {
            setStep('Verify OTP');
        } else if (step === 'Verify OTP') {
            if (otp === '1234') {
                setStep('Reset Password');
            }
        } else if (step === 'Reset Password') {
            if (newPassword === confirmPassword) {
                setStep('Login');
            }
        }
    };

    return (
        <div className="py-24 px-6 min-h-[85vh] flex items-center justify-center bg-white">
            <form
                onSubmit={onSubmitHandler}
                className="w-full max-w-md bg-white border border-gray-100 p-10 md:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
            >
                {/* Visual Background Accent */}
                <div className="absolute -top-10 -right-10 text-[140px] font-black text-black/[0.02] select-none pointer-events-none uppercase italic">
                    {step[0]}
                </div>

                {/* Header Section */}
                <div className="mb-12 relative z-10">
                    <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-3">
                        Member Portal
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight uppercase">
                        {step === 'Login' ? 'Sign' : step.split(' ')[0]}{" "}
                        <span className="font-black italic">
                            {step === 'Login' ? 'In' : step.split(' ').slice(1).join(' ')}
                        </span>
                    </h2>
                </div>

                <div className="space-y-10 relative z-10">
                    {/* FULL NAME (Sign Up Only) */}
                    {step === 'Sign Up' && (
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition-colors text-sm"
                            />
                            <label className="absolute left-0 top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                Full Name
                            </label>
                        </div>
                    )}

                    {/* EMAIL */}
                    {(step === 'Login' || step === 'Sign Up' || step === 'Forgot Password') && (
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition-colors text-sm"
                            />
                            <label className="absolute left-0 top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                Email Address
                            </label>
                        </div>
                    )}

                    {/* PASSWORD */}
                    {(step === 'Login' || step === 'Sign Up') && (
                        <div className="relative group">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition-colors text-sm"
                            />
                            <label className="absolute left-0 top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                Password
                            </label>
                        </div>
                    )}

                    {/* OTP ENTRY */}
                    {step === 'Verify OTP' && (
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-gray-200 py-2 text-center outline-none focus:border-black transition-colors text-2xl tracking-[0.5em] font-light"
                            />
                            <label className="absolute left-0 right-0 text-center top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                4-Digit Code
                            </label>
                        </div>
                    )}

                    {/* RESET PASSWORD FIELDS */}
                    {step === 'Reset Password' && (
                        <div className="space-y-10">
                            <div className="relative group">
                                <input
                                    type="password"
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition-colors text-sm"
                                />
                                <label className="absolute left-0 top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                    New Password
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition-colors text-sm"
                                />
                                <label className="absolute left-0 top-2 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-black peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-black">
                                    Confirm Password
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* HELP LINKS */}
                {step === 'Login' && (
                    <div className="mt-6">
                        <span 
                            onClick={() => setStep('Forgot Password')}
                            className="text-[10px] tracking-widest uppercase font-bold text-gray-400 hover:text-black cursor-pointer transition-colors border-b border-transparent hover:border-black pb-0.5"
                        >
                            Lost your password?
                        </span>
                    </div>
                )}

                {/* ACTION BUTTON */}
                <button className="w-full bg-black text-white py-5 mt-12 text-[11px] font-black tracking-[0.3em] uppercase flex items-center justify-center gap-3 group transition-all hover:bg-zinc-800 active:scale-[0.98] shadow-lg shadow-black/5">
                    {step === 'Login' && 'Access Account'}
                    {step === 'Sign Up' && 'Join New Steps'}
                    {step === 'Forgot Password' && 'Request Code'}
                    {step === 'Verify OTP' && 'Verify & Continue'}
                    {step === 'Reset Password' && 'Secure Password'}
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* FOOTER NAVIGATION */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                    {step === 'Login' ? (
                        <p onClick={() => setStep('Sign Up')} className="text-[10px] tracking-[0.1em] uppercase font-bold text-gray-400 hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                            New to the brand? <span className="text-black border-b border-black pb-0.5">Create Account</span>
                        </p>
                    ) : (
                        <p onClick={() => setStep('Login')} className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400 hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                            <ChevronLeft size={14} /> Back to Sign In
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;