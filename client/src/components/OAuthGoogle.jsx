import { FcGoogle } from "react-icons/fc";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function OAuthGoogle() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={handleGoogleClick} className="text-xs p-1 sm:text-base text-white ease-in-out transition hover:border-white flex items-center gap-2 border-2 border-gray-500 rounded-md sm:pt-1 sm:pb-1 sm:pl-5 sm:pr-5 sm:mr-6">
            <FcGoogle />
            Đăng nhập với Google
        </button>
    );
}
