import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className='w-[90%] mx-auto'>
          <div className="hero py-20 ">
  <div className="hero-content flex flex-col gap-20 lg:flex-row">
    <div className='w-full lg:w-1/2 relative'>
    <img className='w-3/4  ' src={person} alt="" />
    <img className='w-2/4  border-8 border-white rounded-md absolute right-0 top-1/2' src={parts} alt="" />
    </div>

    <div className='w-full lg:w-1/2'>
        <h1 className='text-red-500 text-2xl font-semibold'>About Us</h1>
      <h1 className="text-5xl font-serif font-bold mt-3">We are qualified & of experience in this field</h1>
      <p className="py-4 text-lg text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="py-4 text-lg text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
      <button className="bg-red-600 text-white px-3 py-2 rounded-md text-lg font-semibold">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;