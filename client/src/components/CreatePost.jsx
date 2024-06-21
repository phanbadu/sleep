import { IoMdClose } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoCreateOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CreatePost({ setShowModal }) {
    const { currentUser } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const filePickerRef = useRef();
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };

    const handleModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <div
            onClick={() => setShowModal(false)}
            className="fixed z-50 text-white flex items-center justify-center bg-gray-950/[.5] top-0 left-0 right-0 bottom-0"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col rounded-lg p-5 relative w-[700px] h-[800px] bg-gray-900"
            >
                <IoMdClose
                    className="hover:scale-125 hover:text-red-500 cursor-pointer transition-all duration-300 text-2xl text-white absolute z-10 right-4 top-5"
                    onClick={() => setShowModal(false)}
                />
                <div className="flex gap-3 border-b border-white pb-5">
                    <img
                        className="w-12 h-12 border-2 border-white object-cover rounded-full"
                        src="https://amongus-online.net/Resources/amongus.jpg"
                        alt=""
                    />
                    <h3 className="text-white">{currentUser.fullName}</h3>
                </div>
                <textarea
                    placeholder="What are you thinking ?"
                    className="overflow-y-scroll bg-gray-900 x mt-5 w-full h-44 border-none rounded-md focus:outline-none"
                ></textarea>
                <div className="flex flex-col flex-1 items-center justify-between mt-5">
                    {!imageFileUrl && (
                        <div
                            onClick={() => filePickerRef.current.click()}
                            className="flex flex-col items-center cursor-pointer w-48 h-48 border border-dashed border-white rounded-lg justify-center"
                        >
                            <AiOutlineCloudUpload className="text-6xl" />
                            <span>Upload Image</span>
                        </div>
                    )}

                    {imageFileUrl && (
                        <img
                            className="border border-white inline-block mb-5 h-[500px] rounded-lg w-full object-center object-cover"
                            src={imageFileUrl}
                            alt="imageposts"
                        />
                    )}
                    <div className="w-full flex flex-col justify-end items-center">
                        <button
                            onClick={handleModal}
                            className="flex gap-2 items-center justify-center hover:scale-105 transition-all duration-300 bg-white/85 text-gray-950 text-sm font-semibold p-2 pl-6 pr-6 w-48 rounded-lg"
                        >
                            Tạo bài viết
                            <IoCreateOutline />
                        </button>
                    </div>
                </div>
                <input hidden type="file" accept="image/*" onChange={handleImageChange} ref={filePickerRef} />
            </div>
        </div>
    );
}
