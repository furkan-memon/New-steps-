import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, LogOut, Settings, ArrowRight } from 'lucide-react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // You'll need to create this endpoint in your Express backend
                const response = await api.get('/users/profile');
                setUser(response.data.user);
            } catch (err) {
                navigate('/login'); // Redirect if not logged in
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [navigate]);

    const handleLogout = async () => {
        await api.get('/users/logout');
        navigate('/login');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center uppercase tracking-[0.5em] text-[10px] font-black">Loading Profile...</div>;

    return (
        <div className="min-h-screen bg-white py-24 px-6 md:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="border-b border-gray-100 pb-12 mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-black block mb-4">Account Overview</span>
                        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">
                            Welcome, <span className="font-black italic">{user?.fullname.split(' ')[0]}</span>
                        </h1>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors"
                    >
                        <LogOut size={14} /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 border-b border-black pb-2 w-fit">Profile Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Full Name</p>
                                    <p className="text-sm uppercase font-medium">{user?.fullname}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Email Address</p>
                                    <p className="text-sm">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Activity */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group border border-gray-100 p-8 hover:border-black transition-all cursor-pointer relative overflow-hidden">
                            <Package className="mb-6 group-hover:scale-110 transition-transform" size={24} />
                            <h4 className="text-lg font-light uppercase italic">My <span className="font-black">Orders</span></h4>
                            <p className="text-[10px] text-gray-400 uppercase mt-2 tracking-widest">View history & tracking</p>
                            <ArrowRight className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                        </div>

                        <div className="group border border-gray-100 p-8 hover:border-black transition-all cursor-pointer relative overflow-hidden">
                            <Settings className="mb-6 group-hover:scale-110 transition-transform" size={24} />
                            <h4 className="text-lg font-light uppercase italic">Account <span className="font-black">Settings</span></h4>
                            <p className="text-[10px] text-gray-400 uppercase mt-2 tracking-widest">Update password & info</p>
                            <ArrowRight className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;