import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function SignIn() {
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
                        <form className="flex flex-col gap-10" action="">
                            <input
                                className="text-xs ease-in-out text-white bg-gray-900 transition focus:border-white sm:text-sm border-b-2 border-gray-600 block w-full outline-none"
                                placeholder="Nhập email"
                                type="text"
                            />
                            <input
                                className="text-xs ease-in-out text-white bg-gray-900 transition focus:border-white sm:text-sm border-b-2 border-gray-600 block w-full outline-none"
                                placeholder="Nhập mật khẩu"
                                type="password"
                            />
                        </form>
                        <button className="text-xs sm:text-base w-full hover:opacity-70 ease-in-out transition bg-gray-950 p-2 rounded-lg text-white">
                            Đăng nhập
                        </button>
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
