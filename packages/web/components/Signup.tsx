import type { NextPage } from 'next'
import 'tailwind'
const Signup: NextPage = () => {
    return (
        <div>
            <h1 className='font-black text-2xl'>Sign up</h1>
            <form className='p-6 m-2 bg-gray-100 rounded-xl shadow' action="/api/v1/users/create">
                <input name="username" />
                <input name="email" />
                <input name="password" />
                <input name="confirmPassword" />
                <button type="submit" value="Sign up"></button>
            </form>
        </div>
    )
}

export default Signup