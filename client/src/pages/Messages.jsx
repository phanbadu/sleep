import Users from '../components/Users';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Messages() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`/api/user/getusers`);
                const data = await res.json();
                if (res.ok) {
                    setUsers(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser) {
            fetchUsers();
        }
    }, [currentUser._id]);

    return (
        <div className="ml-[200px] flex justify-center h-screen text-white bg-gray-950 pt-10 pb-10">
            <div className="w-[1200px] h-full rounded-lg flex justify-between bg-gray-900">
                <div className="w-4/12 border-r overflow-hidden border-white/20 p-4 h-full">
                    <div className="w-full flex justify-between items-center gap-3 border-b pb-4 border-white/20">
                        <div className="flex gap-3 relative before:rounded-full before:opacity-75 transition before:content-[''] before:w-[14px] before:h-[14px] before:animate-ping before:bg-white before:absolute before:top-0 before:left-[36px]">
                            <img
                                className="w-12 h-12 border-2 border-white object-cover rounded-full"
                                src="https://amongus-online.net/Resources/amongus.jpg"
                                alt=""
                            />
                            <h3 className="text-white/70 text-sm">Phan Bá Đủ</h3>
                        </div>
                    </div>
                    <div className="h-[760px] mt-4 x overflow-y-scroll">
                        {users.map((user) => <Users key={user._id} fullName={user.fullName} />)}
                    </div>
                </div>
                <div className="w-8/12 text-center max-w-full m-auto">Chọn 1 người để nhắn tin</div>
            </div>
        </div>
    );
}
