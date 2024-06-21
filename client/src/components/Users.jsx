import { FaArrowRightLong } from 'react-icons/fa6';

export default function Users() {
    return (
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
    );
}
