import type { NextPage } from 'next'
const Signup: NextPage = () => {
    return (
        <div className='p-16 flex items-center flex-col'>
            <form className='border shadow-2xl p-6 m-2 rounded-3xl w-min' action="/api/v1/users/create">
            <h1 className='text-center m-4 mb-6 font-black text-4xl'>Sign up</h1>
                <input name="username" placeholder='Username...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                <input name="email" placeholder='Email...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                <input name="password" placeholder='Password...' className='shadow border block my-2 pl-4 p-2 rounded-xl' />
                <input name="confirmPassword" placeholder='Confirm password...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                <button type="submit" className="bg-violet-900 transition duration-200 hover:bg-violet-800 hover:shadow-lg text-white font-bold p-2 w-full my-2 rounded-xl">Sign up</button>
            </form>
        </div>
    )
}

export default Signup