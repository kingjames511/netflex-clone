import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = UserAuth()

    const HandleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        }
        catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="flex items-center justify-between p-4 z-[100] w-full absolute
               ">
            <Link to="/">
                <h2 className="text-red-600 text-4xl font-bold cursor-pointer">NetFlix</h2>
            </Link>
            {user?.email ? (<div>

                <button onClick={HandleLogout} className="text-white pr-4" >logout</button>


                <Link to="/Account">
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" >Account</button>
                </Link>
            </div>
            ) : (
                <div>
                    <Link to="/login">
                        <button className="text-white pr-4" >Sign In</button>
                    </Link>

                    <Link to="/SignUp">
                        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" >Sign up</button>
                    </Link>
                </div>)}
        </div>);
}

export default Navbar; 