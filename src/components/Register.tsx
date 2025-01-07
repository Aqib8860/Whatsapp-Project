import { useForm } from 'react-hook-form';
import '../style/Register.css';
import User from '../Models.tsx/User';


const Register = () => {

    const onSubmit = (user: User) => {
        console.log("Form is submitted", user);
    }

    const getCountries = () => {
        return ["India", "USA", "China"]
    }

    const checkPasswordFormat = (password:string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!passwordRegex.test(password)){
            console.log("Password format wrong")
            
            return 'Password does not match with pattern';
        }

    }

    const {register, handleSubmit, formState:{errors}, watch} = useForm<User>();
    const password = watch('password')

    return (
        
        <div className="min-h-screen py-20 bg-yellow-100">
            <div className="container mx-auto max-w-screen-lg bg-yellow-400 py-6 px-4 rounded-md shadow-lg border-b-8 border-yellow-300">
                <h1 className="text-4xl font-bold text-gray-700 text-center ">
                    Registration
                </h1>
            </div>
            <br />
            
            <div className="form-container">

            <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}> 
                <div className='form-double-input md:space-y-0'>
                    
                    <div className="flex flex-col space-y-5">
                        <label className="form-label">FIRST NAME</label>
                        <input type="text"
                            {...register('first_name', {required: '*First name is required*'})} 
                            className={`small-input-box border ${errors.first_name? 'border-red-400': ''}`}
                            placeholder="First Name"/>
                        <p className='text-red-500 text-lg'>{errors?.first_name?.message}</p>
                    </div>              
                    
                    <div className="flex flex-col space-y-5 ">
                        <label className="form-label">LAST NAME</label>
                        <input type="text" 
                            {...register('last_name')}
                            className="small-input-box" 
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                <div className='form-double-input md:space-y-0 mt-4'>
                    <div className="flex flex-col">
                        
                        <label className="form-label">COUNTRY</label>
                        <select 
                            className={`px-11 py-4 rounded bg-gray-200 mt-3 text-gray-700 font-semibold border ${errors.state? 'border-red-400': ''}`}
                            {...register('country', {required: '*Country is required*'})}
                        >
                            <option value="" className='text-xl'>Select Country</option>
                            {getCountries().map((country, index) => <option key={index} value={country}>{country}</option>)}
                        </select>
                        <p className='text-red-500 text-lg'>{errors?.country?.message}</p>

                    </div>              
                
                    <div className="flex flex-col">
                    <label className="form-label">STATE</label>
                        <input type="text" 
                            className={`small-input-box border ${errors.state? 'border-red-400': ''}`}
                            placeholder="Enter State Name"
                            {...register('state', {required: '*State Name is required*'})}
                        />
                        <p className='text-red-500 text-lg'>{errors?.state?.message}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-24 md:px-40 py-2">
                    <label className="form-label py-2 ">Phone</label>
                    
                    <div className="flex flex-col md:w-full">
                        <input type="text" 
                            className={`large-input-box border ${errors.phone? 'border-red-400': ''}`} 
                            placeholder="Enter your phone number"
                            {...register('phone', {required: '*Phone number is required*', pattern:{value:/^\+?[1-9]\d{1,14}(\s|\-)?(\d{1,4}(\s|\-)?\d{1,4})*$/, message:'Invalid Phone Number'}})}
                        />
                        <p className='text-red-500 text-lg'>{errors?.phone?.message}</p>
                    </div>
                </div>
                
                
                <div className="flex flex-col md:flex-row md:gap-24 md:px-40 py-2">
                    
                    <label className="form-label py-2 ">Email</label>

                    <div className="flex flex-col md:w-full">
                        <input type="email" 
                            className={`large-input-box border ${errors.email? 'border-red-400': ''}`} 
                            placeholder="Enter your email"
                            {...register('email', {required: '*Email is required*', pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:'Invalid Email'}})}
                        />                    
                        {<p className='text-red-500 text-lg'>{errors?.email?.message}</p>}
                    </div>                    
                
                </div>
                
                

                <div className="flex flex-col md:flex-row md:gap-14 md:px-40 py-2">
                    <label className="form-label py-2">Password</label>
                    <div className="flex flex-col md:w-full">
                        <input type="text" 
                            className={`large-input-box border ${errors.password? 'border-red-400': ''}`} 
                            placeholder="Enter your password"
                            {...register('password', {required: '*Password is required*', validate:checkPasswordFormat})}
                        />
                        <p className="text-sm text-gray-500">(Password must be at least 8 characters, include one uppercase letter, one number, and one special character.)</p>
                        <p className='text-red-500 text-lg'>{errors?.password?.message}</p>
                    </div>
                    

                </div>

                <div className="flex flex-col md:flex-row md:gap-4 md:px-40 py-2">
                    <label className="form-label">Confirm Password</label>
                    <div className="flex flex-col md:w-full">
                        <input type="text" 
                            className={`large-input-box border ${errors.confirm_password? 'border-red-400': ''}`} 
                            placeholder="Enter your confirm password"
                            {...register('confirm_password', {required: '*Confirm Password is required*', validate: (cpwd)=> cpwd == password || 'Passwordr does not match'})}
                        />
                        <p className='text-red-500 text-lg'>{errors?.confirm_password?.message}</p>
                    </div>
                </div>

                <div className='form-double-input md:space-y-0'>
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

