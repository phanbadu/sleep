export default function Search() {
    return (
        <div className="ml-[200px] flex justify-center h-screen text-white bg-gray-950 pt-10 pb-10">
            <div className="w-[1200px] h-full rounded-lg bg-gray-900">
                <div className="border-b flex justify-center p-4 border-white/20">
                    <input
                        className="w-[400px] p-2 rounded-lg outline-none border-none text-gray-950 font-semibold"
                        placeholder="Nhập từ khóa để tìm kiếm"
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
}
