function About(){
    return <div>
   <div className='dark:text-white dark:bg-gray-900 container-max py-16  text-center min-h-[80vh]'>
        <img
          src='https://www.shopurfood.com/blogs/wp-content/uploads/2022/06/How-to-Retain-in-the-Future-of-Online-Food-Delivery-industry.jpg'
          alt=''
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'>Food Fire </h1>

          <p>
            Food Fire is a food ordering web application built with React.js  and
            Swiggy's API.
          </p>
          <p>
            This project was built  during the coursework of
            <a
              className='text-orange-600'
              href='https://namastedev.com/namaste-react/'
            >
              Namaste React
            </a>
            taught by
            <a
              className='text-orange-600'
              href='https://www.linkedin.com/in/akshaymarch7/'
            >
              Akshay Saini
            </a>
          </p>

        </div>
      </div>
    </div>
}
export default About;