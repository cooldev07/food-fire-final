const details = {
  name: 'Gogul Nithin',
  bio: 'Frontend Developer',
  contact: {
    email: 'gogulnithindark@gmail.com',
  },
};

const Contact = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white pl-20 pt-10 container-max min-h-screen'>
      <h1 className='text-4xl my-4 font-bold'>Contact</h1>
      <div>
        <h2 className='text-2xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
        <p className='text-xl'>{details.bio}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
            </a>
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;