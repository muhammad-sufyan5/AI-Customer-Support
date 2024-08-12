'use client';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useUser } from '@/context/userContext';
import { IoMdArrowBack } from "react-icons/io";

interface FormType {
    name: string;
    email: string;
    password: string;
}

export default function AuthPage() {
    const [formData, setFormData] = useState<FormType>({ name: '', email: '', password: '' });
    const router = useRouter();
    const {user, signIn, signUp}=useUser();
    const [error, setError] = useState<String|undefined>(undefined);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignUp = (e:SyntheticEvent) => {
        e.preventDefault();
        signUp(formData.email, formData.password)
            .then((res) => {
                console.log(res,"response");
                
                toast.success('Login Successful!');
                router.push('/chat');
            })
            .catch((error: any) => {
                setError(error.message);
                toast.error(error.message || 'Failed to login')
            });
    }

    const handleSignIn = (e: SyntheticEvent) => {
        e.preventDefault();
        setError(undefined);
        signIn(formData.email, formData.password)
            .then(() => {
                toast.success('Login Successful!');
                router.push('/chat');
            })
            .catch((error: any) => {
                setError(error.message);
                toast.error(error.message || 'Failed to login')
            });

    };

    useEffect(() => {
        if (user) {
            router.push('/chat');
        }
    }, [user])
   

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
            <div className="absolute top-10 left-4">
                {/* <IoMdArrowBack /> */}
                <button className='bg-black/30 hover:bg-black/60 p-3 rounded text-white font-bold bg-opacity-60' onClick={()=>router.push('/')}>Back</button>
            </div>
            <div className="bg-black/30 overflow-hidden flex flex-col p-6 rounded-lg shadow-md max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Authenticate to continue</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 bg-black/30 hover:bg-black/60 rounded border border-gray-300 text-black"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 bg-black/30 hover:bg-black/60 rounded border border-gray-300 text-black"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 bg-black/30 hover:bg-black/60 rounded border border-gray-300 text-black"
                    />
                    <strong className='block text-red-400'>{error}</strong>
                    <p>If you have not account, Click on Sign Up</p>
                    <div className="flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={handleSignUp}
                            className="w-full p-3 text-white bg-black/30 hover:bg-black/60 p-3 rounded font-bold bg-opacity-60"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            onClick={handleSignIn}
                            className="w-full p-3 text-white bg-black/30 hover:bg-black/60 p-3 rounded font-bold bg-opacity-60"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

