import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/Authcontext"
import { useState } from "react";



const SignUp = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()

    const HandSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signUp(email, password)
            navigate("/")
        }
        catch (error) {
            console.error()
            setError(error.message)
        }
    }


    return (
        <>
            <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/06e2a97d-de99-4a4e-8b66-a6ed28126aec/NG-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
                <div className="fixed w-full px-4 py-24 z-50">

                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">sign up</h1>
                            {error ? <p className="text-white p-3 my-2 text-center bg-red-600">{error}</p> : null}
                            <form
                                onSubmit={HandSubmit}
                                className="w-full flex flex-col py-4" action="">
                                <input className="p-3 my-2 bg-gray-500 rounded" type="email" placeholder="Email" autoComplete="Email" onChange={(e) => setEmail(e.target.value)} />
                                <input className="p-3 my-2 bg-gray-500 rounded" type="password" name="" placeholder="password" autoComplete="password" onChange={(e) => setPassword(e.target.value)} />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold" >sign Up</button>
                                <div className=" flex justify-between text-gray-600 text-sm">
                                    <p> <input type="checkbox" className="mr-2"
                                    /> remember me</p>
                                    <p>Need help</p>
                                </div>
                                <p className="py-4"><span className="text-gray-600">Already subscribed to Netflix </span> <Link to="/login">sign in</Link></p>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;