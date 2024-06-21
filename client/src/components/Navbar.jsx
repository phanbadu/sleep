import { useEffect, useState } from 'react';
import { FaPager } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import CreatePost from './CreatePost';
const navigation =
    "bg-gray-950 text-white relative before:rounded-full before:content-[''] before:w-4 before:h-4 before:bg-gray-900 before:absolute before:top-0 before:right-0 before:shadow-[10px_10px_0_0] before:shadow-gray-950 before:translate-y-[-100%] after:content-[''] after:absolute after:w-4 after:h-4 after:rounded-full  after:bottom-0 after:right-0 after:bg-gray-900 after:shadow-[10px_-10px_0_0] after:shadow-gray-950 after:translate-y-[100%]";

export default function Header({ showModal, setShowModal }) {
    const location = useLocation();

    const handlePosts = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className="xs:hiden fixed bg-gray-900 pt-10 pb-10 pl-4 top-0 left-0 bottom-0 w-[200px]">
                <ul className="flex flex-col gap-5">
                    <Link
                        to={'/'}
                        className={
                            location.pathname === '/'
                                ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                                : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                        }
                    >
                        <FaPager />
                        <span className="font-semibold">Trang chủ</span>
                    </Link>
                    <Link
                        to={'/messages'}
                        className={
                            location.pathname === '/messages'
                                ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                                : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                        }
                    >
                        <FaMessage />
                        <span className="font-semibold">Tin nhắn</span>
                    </Link>
                    <Link
                        to={'/search'}
                        className={
                            location.pathname === '/search'
                                ? `${navigation} cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                                : `text-white cursor-pointer p-2 rounded-l-lg text-sm l-4 flex items-center gap-2`
                        }
                    >
                        <FaSearch />
                        <span className="font-semibold">Tìm kiếm</span>
                    </Link>
                    <li
                        onClick={handlePosts}
                        className="hover:bg-white/85 duration-300 w-11/12 hover:text-gray-950 cursor-pointer text-white p-2 rounded-lg text-sm l-4 flex items-center gap-2"
                    >
                        <IoMdAdd className="font-semibold" />
                        <span className="font-semibold">Tạo bài viết</span>
                    </li>
                </ul>

                <Link
                    to={'/signin'}
                    className="hover:scale-105 text-gray-950 duration-300 transition-all absolute font-bold w-10/12 bg-white/85 p-2 rounded-l-lg text-sm rounded-lg bottom-10 flex items-center justify-center gap-2"
                >
                    Đăng xuất
                    <FaSignOutAlt />
                </Link>
            </div>
            {showModal && <CreatePost setShowModal={setShowModal} />}
        </>
    );
}
