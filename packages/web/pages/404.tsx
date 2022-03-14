import type { NextPage } from 'next'

const NotFound: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='font-extralight text-7xl w-full text-center mx-2 mt-5'>404</h1>
      <p className='w-full text-center mx-2'>page not found</p>
      <a href="/" className='opacity-50 font-light fixed bottom-0 left-1/2 transform -translate-x-1/2 m-2'>FUSION</a>
    </div>
  )
}

export default NotFound;