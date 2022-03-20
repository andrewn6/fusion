import type { NextPage } from 'next'
import { Formik, Field, Form, ErrorMessage } from 'formik';
const Signup: NextPage = () => {
    function handleForm() {

    }
    return (

        <div className='p-16 flex items-center flex-col'>
             <h1 className='text-center m-4 mb-6 font-black text-4xl'>Sign up</h1>
            <Formik
                
                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                validate={function (values: object) {
                    console.log(values)
                    const errors: object = { username: '', email: ' ', password: '', confirmPassword: '' };
                    for (const value in values) {
                        if (!values[value]) {
                            errors[value] = 'Required'
                        }
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(
                    { isSubmitting }
                ) => (
                    <Form className='border shadow-2xl p-6 m-2 rounded-3xl w-min'>
                        <ErrorMessage name="email" component="div"  className='text-red-500'/>
                        <Field type="email" name="email" placeholder='Email...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                        <Field name="username" placeholder='Username...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                        <ErrorMessage name="password" component="div" />
                        <Field type="password" className='shadow border block my-2 p-2 pl-4 rounded-xl' placeholder="Password..." name="password" />
                        <Field type="password" placeholder='Confirm password...' className='shadow border block my-2 p-2 pl-4 rounded-xl' name="confirmPassword" />
                        <button type="submit"  className="bg-violet-900 transition duration-200 hover:bg-violet-800 hover:shadow-lg text-white font-bold p-2 w-full my-2 rounded-xl" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            {/* <form className='border shadow-2xl p-6 m-2 rounded-3xl w-min' onSubmit={handleForm}>
                <h1 className='text-center m-4 mb-6 font-black text-4xl'>Sign up</h1>
                <input name="email" placeholder='Email...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                <input name="password" placeholder='Password...' className='shadow border block my-2 pl-4 p-2 rounded-xl' />
                <input name="confirmPassword" placeholder='Confirm password...' className='shadow border block my-2 p-2 pl-4 rounded-xl' />
                <button type="submit" className="bg-violet-900 transition duration-200 hover:bg-violet-800 hover:shadow-lg text-white font-bold p-2 w-full my-2 rounded-xl">Sign up</button>
            </form> */}
        </div>
    )
}

export default Signup