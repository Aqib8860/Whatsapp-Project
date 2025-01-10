import '../style/Login.css';


const Login = () => {
    return (
        <div className='py-52 bg-gray-100 min-h-screen'>
            <div className="container mx-auto w-96 bg-white py-6 px-4 rounded-lg shadow-2xl border-b-8 border-blue-200">
                <h1 className="text-3xl font-bold">Login</h1>
                <br />

                <form action="">
                    <div className="flex flex-col space-y-4">
                        <label className="text-xl font-semibold">Email</label>
                        <input type="email"
                            placeholder="Enter Your Email"
                            className="px-6 py-4 bg-slate-200 rounded-lg"
                        />
                    </div>
                    <br/>
                    <div className="flex flex-col space-y-4">
                        <label className="text-xl font-semibold">Password</label>
                        <input type="text"
                            placeholder="Enter Your Password"
                            className="px-6 py-4 bg-slate-200 rounded-lg"
                        />
                    </div>

                    <br />
                    <div className="flex justify-center">
                        <button className="login-button">LOGIN</button>
                    </div>
                    <br />
                    <p className='text-md font-serif'>Don't have an account? <a href="/register" className='text-blue-500 underline'>Sign Up</a></p>
                </form>
            
            </div>
        </div>
    );
}

export default Login;
