import { FaArrowRightLong } from 'react-icons/fa6';
import Users from '../components/Users';

export default function Messages() {
    return (
        <div className="ml-[200px] flex justify-center h-screen text-white bg-gray-950 pt-10 pb-10">
            <div className="w-[1200px] h-full rounded-lg flex justify-between bg-gray-900">
                <div className="w-4/12 border-r overflow-hidden border-white/20 p-4 h-full">
                    <div className="w-full flex justify-between items-center gap-3 border-b pb-4 border-white/20">
                        <div className="flex gap-3 relative before:rounded-full before:opacity-75 transition before:content-[''] before:w-[14px] before:h-[14px] before:animate-ping before:bg-white before:absolute before:top-0 before:left-[36px]">
                            <img
                                className="w-12 h-12 border-2 border-white object-cover rounded-full"
                                src="https://minhtuanmobile.com/uploads/editer/images/2023/09/spoiler-jujutsu-kaisen-chap-236-7.webp"
                                alt=""
                            />
                            <h3 className="text-white/70 text-sm">Phan Bá Đủ</h3>
                        </div>
                    </div>
                    <div className="h-[760px] mt-4 x overflow-y-scroll">
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
                <div className="w-8/12 text-center max-w-full m-auto">Chọn 1 người để nhắn tin</div>
            </div>
        </div>
    );
}
