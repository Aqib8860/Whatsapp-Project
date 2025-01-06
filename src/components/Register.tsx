import '../style/Register.css';

const Register = () => {
    return (
        
        <div className="min-h-screen py-20 bg-yellow-100">
            <div className="container mx-auto max-w-screen-lg bg-yellow-400 py-6 px-4 rounded-md shadow-lg">
                <h1 className="text-4xl font-bold text-gray-700 text-center ">
                    Registration
                </h1>
            </div>
            <br />
            <div className="container mx-auto max-w-screen-lg bg-yellow-400 py-6 px-4 rounded-md shadow-lg">

            <form className='space-y-8'> 
                <div className='flex flex-col md:flex-row justify-around space-y-8 md:space-y-0'>
                    <div className="flex flex-col space-y-5">
                        <label className="form-label">FIRST NAME</label>
                        <input type="text" 
                            className="px-4 py-3 rounded bg-gray-200 mt-3" 
                            placeholder="First Name"/>
                    </div>              
                    
                    <div className="flex flex-col space-y-5 ">
                        <label className="form-label">LAST NAME</label>
                        <input type="text" 
                            className="px-4 py-3 rounded bg-gray-200 mt-3" 
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 mt-4'>
                    <div className="flex flex-col">
                        <label className="form-label">COUNTRY</label>
                        <select className='px-4 py-3 rounded bg-gray-200 mt-3 text-gray-700 font-semibold'>
                            <option disabled>Select Country</option>
                            <option value="">India</option>
                            <option value="">USA</option>
                        </select>
                    </div>              
                
                    <div className="flex flex-col">
                    <label className="form-label">STATE</label>
                        <input type="text" 
                            className="px-4 py-3 rounded bg-gray-200 mt-3" 
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:gap-24 md:px-40 py-2">
                    <label className="form-label py-2 ">Email</label>
                    <input type="email" 
                        className="px-4 py-3 md:w-full rounded bg-gray-200" 
                        placeholder="Enter your email"/>
                </div>

                <div className="flex flex-col md:flex-row md:gap-14 md:px-40 py-2">
                    <label className="form-label py-2">Password</label>
                    <input type="text" 
                        className="px-4 py-3 md:w-full rounded bg-gray-200" 
                        placeholder="Enter your email"/>
                </div>

                <div className="flex flex-col md:flex-row md:gap-4 md:px-40 py-2">
                    <label className="form-label">Confirm Password</label>
                    <input type="text" 
                        className="px-4 py-3 md:w-full rounded bg-gray-200" 
                        placeholder="Enter your email"/>
                </div>

                <div className='flex flex-col md:flex-row justify-around space-y-8 md:space-y-0'>
                        <button className='bg-green-700 hover:bg-green-900 text-white text-lg px-6 py-2 font-semibold rounded-full border-b-4'>
                            Submit
                        </button>
                        
                        <button className='bg-red-800 hover:bg-red-900 text-white text-lg px-6 py-2 font-semibold rounded-full border-b-4'>
                            Reset
                        </button>
                </div>
            </form>                
                
            </div>
        </div>
    );
}

export default Register;
