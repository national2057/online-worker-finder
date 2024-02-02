import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImgSlides = () => {

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      url: "https://media.istockphoto.com/id/1457344132/photo/back-view-shot-of-painter-doing-painting-work-on-wall-with-roller-while-standing-on-ladder.webp?b=1&s=170667a&w=0&k=20&c=2UPZEptnWaniR7OPf8DxhyQ7bS3lErTkvnSPIfQAYxo="
    },
    {
      url: "https://images.unsplash.com/photo-1667052673589-b088f6cfd598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdmlsJTIwd29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcmR3YXJlJTIwYW5kJTIwbmV0d29ya2luZyUyMG1lY2hhbmljc3xlbnwwfHwwfHx8MA%3D%3D"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="max-w-[1250px] h-[680px] w-full m-auto py-16 px-4 relative group">
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="h-full w-full rounded-2xl bg-center bg-cover duration-500"></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ImgSlides