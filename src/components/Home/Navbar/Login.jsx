import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

        // SIGN UP
        if (step === 'Sign Up') {
            const userData = { name, email };
            setUser(userData);
            toast.success("Account Created Successfully");
            navigate('/');
        }

        // LOGIN
        else if (step === 'Login') {
            const userData = { name: email.split('@')[0], email };
            setUser(userData);
            toast.success("Login Successful");
            navigate('/');
        }

        // SEND OTP
        else if (step === 'Forgot Password') {
            toast.success("OTP Sent (Demo: 1234)");
            setStep('Verify OTP');
        }

        // VERIFY OTP
        else if (step === 'Verify OTP') {
            if (otp === '1234') {
                toast.success("OTP Verified");
                setStep('Reset Password');
            } else {
                toast.error("Invalid OTP");
            }
        }

        // RESET PASSWORD
        else if (step === 'Reset Password') {
            if (newPassword !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            toast.success("Password Changed Successfully");
            setStep('Login');
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="py-16 px-4 flex justify-center">

  <form
    onSubmit={onSubmitHandler}
    className="w-full max-w-md bg-white p-8 "
  >

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-medium">{step}</h2>
                </div>

                {/* SIGN UP */}
                {step === 'Sign Up' && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-4 py-3 mb-4"
                        required
                    />
                )}

                {/* EMAIL */}
                {(step === 'Login' || step === 'Sign Up' || step === 'Forgot Password') && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-4 py-3 mb-4"
                        required
                    />
                )}

                {/* PASSWORD */}
                {(step === 'Login' || step === 'Sign Up') && (
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-4 py-3 mb-2"
                        required
                    />
                )}

                {/* FORGOT */}
                {step === 'Login' && (
                    <p
                        onClick={() => setStep('Forgot Password')}
                        className="text-sm underline cursor-pointer mb-4"
                    >
                        Forgot your password?
                    </p>
                )}

                {/* OTP */}
                {step === 'Verify OTP' && (
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full border px-4 py-3 mb-4 text-center"
                        required
                    />
                )}

                {/* RESET PASSWORD */}
                {step === 'Reset Password' && (
                    <>
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full border px-4 py-3 mb-4"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border px-4 py-3 mb-4"
                            required
                        />
                    </>
                )}

                {/* BUTTON */}
                <button className="w-full bg-black text-white py-3 mt-2 rounded-md">
                    {step === 'Login' && 'Sign in'}
                    {step === 'Sign Up' && 'Create account'}
                    {step === 'Forgot Password' && 'Send OTP'}
                    {step === 'Verify OTP' && 'Verify OTP'}
                    {step === 'Reset Password' && 'Change Password'}
                </button>

                {/* LINKS */}
                <div className="text-center mt-4 text-sm space-y-2">

                    {step === 'Login' && (
                        <p
                            onClick={() => setStep('Sign Up')}
                            className="underline cursor-pointer"
                        >
                            Create account
                        </p>
                    )}

                    {step === 'Sign Up' && (
                        <p
                            onClick={() => setStep('Login')}
                            className="underline cursor-pointer"
                        >
                            Already have an account?
                        </p>
                    )}

                    {(step === 'Forgot Password' || step === 'Verify OTP' || step === 'Reset Password') && (
                        <p
                            onClick={() => setStep('Login')}
                            className="underline cursor-pointer"
                        >
                            Back to Login
                        </p>
                    )}
                </div>

            </form>
        </div>
    )
}

export default Login