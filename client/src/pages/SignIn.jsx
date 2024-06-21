import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

export default function SignIn() {
    const { loading, error: errorMessage } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure("Vui lòng nhập đầy đủ các trường!"))
        }
        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                dispatch(signInFailure(data.message));
            }
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate("/");
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    };

    return (
        <div className="bg-gray-950 w-full h-screen p-2 sm:pl-20 sm:pr-20 sm:pt-10 sm:pb-10">
            <div className="bg-gray-900 w-full h-full rounded-xl flex justify-end overflow-hidden relative">
                <div className="w-full rounded-l-3xl bg-gray-900 overflow-hidden flex items-center justify-center">
                    <div className="flex flex-col gap-10">
                        <h2 className="sm:text-4xl text-center sm:text-left text-white font-semibold">ĐĂNG NHẬP</h2>
                        <div className="flex gap-2 justify-between text-gray-500">
                            <button className="text-xs p-1 sm:text-base text-white ease-in-out transition hover:border-white flex items-center gap-2 border-2 border-gray-500 rounded-md sm:pt-1 sm:pb-1 sm:pl-5 sm:pr-5 sm:mr-6">
                                <FcGoogle />
                                Đăng nhập với Google
                            </button>
                            <button className="text-xs p-1 sm:text-base text-white ease-in-out transition hover:border-white flex items-center gap-2 border-2 border-gray-500 rounded-md sm:pt-1 sm:pb-1 sm:pl-5 sm:pr-5">
                                <FaFacebook className="text-sky-500" />
                                Đăng nhập với Facebook
                            </button>
                        </div>
                        <div className="text-center sm:text-base text-xs font-bold text-white">
                            <span> - OR - </span>
                        </div>
                        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                id='email'
                                className="text-xs ease-in-out text-white bg-gray-900 transition focus:border-white sm:text-sm border-b-2 border-gray-600 block w-full outline-none"
                                placeholder="Nhập email"
                                type="text"
                            />
                            <input
                                onChange={handleChange}
                                id='password'
                                className="text-xs ease-in-out text-white bg-gray-900 transition focus:border-white sm:text-sm border-b-2 border-gray-600 block w-full outline-none"
                                placeholder="Nhập mật khẩu"
                                type="password"
                            />
                            <button className="text-xs sm:text-base w-full hover:opacity-70 ease-in-out transition bg-gray-950 p-2 rounded-lg text-white">
                                Đăng nhập
                            </button>
                            {errorMessage && <span className='w-[500px] whitespace text-red-500'>{errorMessage}</span>}
                        </form>
                        <span className="text-white text-xs sm:text-sm">
                            Bạn chưa có tài khoản ?
                            <Link
                                className="ml-2 text-sky-500 hover:underline ease-in-out transition hover:decoration-2"
                                to="http://localhost:5173/signup"
                            >
                                Đăng ký
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
