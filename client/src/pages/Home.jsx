import Posts from '../components/Posts.jsx';
import Users from '../components/Users.jsx';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Home() {
    return (
        <div className="ml-[200px] text-white bg-gray-950 pt-10 pb-10">
            <div className="flex w-full justify-center">
                <div className="w-[1200px] flex justify-between gap-4">
                    <div className="flex flex-col gap-4 w-8/12 rounded-lg">
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                    </div>
                    <div className="w-4/12 sticky h-[700px] bg-gray-900 top-4 p-4 rounded-lg flex flex-col gap-5">
                        <div className="w-full flex justify-between items-center gap-3 pb-2 pt-2">
                            <div className="flex gap-3 relative before:rounded-full before:opacity-75 transition before:content-[''] before:w-[14px] before:h-[14px] before:animate-ping before:bg-white before:absolute before:top-0 before:left-[36px]">
                                <img
                                    className="w-12 h-12 border-2 border-white object-cover rounded-full"
                                    src="https://minhtuanmobile.com/uploads/editer/images/2023/09/spoiler-jujutsu-kaisen-chap-236-7.webp"
                                    alt=""
                                />
                                <h3 className="text-white/70 text-sm">Phan Bá Đủ</h3>
                            </div>
                            <button className="hover:scale-110 transition text-xl text-white">
                                <FaArrowRightLong />
                            </button>
                        </div>
                        <div>
                            <h1 className="text-xs text-white/40">Những người bạn có thể biết?</h1>
                        </div>
                        <div className="h-full x overflow-y-scroll">
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
