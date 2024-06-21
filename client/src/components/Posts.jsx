import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';

export default function Posts() {
    const [icon, setIcon] = useState(true);
    return (
        <div className="p-4 h-[700px] flex flex-col gap-2 text-white bg-gray-900 rounded-lg">
            <div className="flex gap-3 justify-between items-center">
                <div className="flex gap-3">
                    <img
                        className="w-12 h-12 border-2 border-white object-cover rounded-full"
                        src="https://minhtuanmobile.com/uploads/editer/images/2023/09/spoiler-jujutsu-kaisen-chap-236-7.webp"
                        alt=""
                    />
                    <h3>Phan Bá Đủ</h3>
                </div>
                <RiDeleteBin6Line className="text-red-400 cursor-pointer hover:scale-110 duration-300 text-2xl" />
            </div>
            <div className="flex justify-center">
                <span className="text-white">Bài viết mới nhất!</span>
            </div>
            <div className="w-full h-full">
                <img
                    className="object-cover w-full h-full rounded-lg overflow-hidden"
                    src="https://minhtuanmobile.com/uploads/editer/images/2023/09/spoiler-jujutsu-kaisen-chap-236-7.webp"
                    alt="image_posts"
                />
                <button className="text-2xl p-1 pl-2 pr-2 flex gap-2 items-center justify-between bg-white absolute bottom-1 left-1 rounded-md">
                    {icon && (
                        <CiHeart
                            onClick={() => setIcon(!icon)}
                            className="active:origin-center text-black text-xl duration-1000 active:-rotate-180"
                        />
                    )}
                    {!icon && (
                        <FaHeart
                            onClick={() => setIcon(!icon)}
                            className="active:origin-center duration-1000 active:-rotate-180 text-xl text-red-600"
                        />
                    )}
                    <span className="text-xs font-bold text-gray-600">2 hearts</span>
                </button>
            </div>
        </div>
    );
}
