
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'
import { ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
const Carousel = () => {
    return (
        <div className=" lg:w-[80%] mx-auto mt-5">
     <div className="carousel lg:h-[600px] w-full ">
     <div id="slide1" className="carousel-item relative w-full">
     <img className="lg:rounded-xl  w-full " src={img1} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide4" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide2" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 

     <div id="slide2" className="carousel-item relative w-full">
     <img className="lg:rounded-xl w-full " src={img2} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide1" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide3" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 
  
     <div id="slide3" className="carousel-item relative w-full">
     <img className="lg:rounded-xl w-full " src={img3} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide2" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide4" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 

     <div id="slide4" className="carousel-item relative w-full">
     <img className="lg:rounded-xl w-full " src={img4} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide3" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide5" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 

     <div id="slide5" className="carousel-item relative w-full">
     <img className="lg:rounded-xl w-full " src={img5} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide4" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide6" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 

     <div id="slide6" className="carousel-item relative w-full">
     <img className="lg:rounded-xl w-full " src={img6} alt="" />
    <div className="absolute  text-white bg-gradient-to-r from-[#151515] to [rgba(21, 21, 21, 0)] h-full w-full flex items-center lg:rounded-xl">
      <div className='space-y-2 md:space-y-8 w-full md:w-1/2 px-10 md:px-20'>
        <h1 className='text-3xl md:text-5xl font-extrabold lg:text-6xl font-serif'>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Discover More</button>
         <button className='bg-red-500 px-2 py-2 rounded font-semibold '>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-8 lg:right-12 md:bottom-14  gap-5 bottom-1">
      <a href="#slide5" className="btn  btn-secondary btn-circle " ><ArrowLeftIcon className="h-4 md:h-6 w-4 md:w-6" /></a> 
      <a href="#slide1" className="btn btn-primary btn-circle"><ArrowRightIcon className="h-4 md:h-6 w-4 md:w-6" /></a>
    </div>
  </div> 
     

</div>

        </div>
    );
};

export default Carousel;