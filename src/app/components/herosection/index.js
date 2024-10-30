import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="font-bold text-[40px] leading-[52px] tracking-[0.2px] md:text-[58px] md:leading-[80px] w-full max-w-[500px]">
          Selling on the internet like a pro
        </h1>
        <p className='w-full max-w-[500px] mb-[10px] mx-auto'>
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">
            Get Quote Now
          </button>
          <button className="px-4 py-2 border border-blue-600 hover:bg-blue-500 text-white rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
