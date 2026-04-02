import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://m2.portotheme.com/media/magefan_blog/shop1_post4_thumb.jpg",
    title: "Fashion Trends",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non... ",
  },
  {
    id: 2,
    image: "https://m2.portotheme.com/media/magefan_blog/shop4_post3_thumb.jpg",
    title: "Post Format Video",
    desc: "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in... ",
  },
  {
    id: 3,
    image: "https://m2.portotheme.com/media/magefan_blog/shop4_post1_thumb.jpg",
    title: "Post Format Standard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non... ",
  },
];

const testimonial = [
  {
    id: 1,
    image: "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop2_about_us_person1.jpg",
    name: "John Smith",
    post: "CEO & Founder",
  },
  {
    id: 2,
    image: "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/client-2.jpg",
    name: "Lussy Smith",
    post: "CEO & Founder",
  },
  {
    id: 3,
    image: "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_testimonial1.jpg",
    name: "holly Smith",
    post: "CEO & Founder",
  },
];

const SidebarLeft = () => {

  const [current, setCurrent] = useState(0);
  const [testCurrent, settestCurrent] = useState(0);

  return (
    <div className="w-full lg:w-72 space-y-6">

      {/* SALE BOX */}
      <div className="border flex flex-col justify-center items-center text-center py-6 px-4">
        <img
          src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_off.png"
          alt=""
          className="w-20 sm:w-24"
        />

        <h3 className="flex items-center font-bold my-3 text-5xl sm:text-6xl lg:text-7xl">
          <small className="text-xs sm:text-sm flex flex-col mr-1">
            UP TO
          </small>

          50

          <div className="text-2xl sm:text-3xl lg:text-4xl text-left ml-1">
            <p>%</p>
            <p className="text-sm sm:text-lg">OFF</p>
          </div>
        </h3>

        <p className="text-gray-400 mt-2 px-2 text-sm">
          Bags, Clothing, T-Shirts, Shoes, Watches and much more...
        </p>

        <a
          href="#"
          className="bg-black px-5 py-2 text-sm font-bold text-white mt-4 hover:bg-gray-800 transition"
        >
          VIEW SALE
        </a>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-gray-100 p-5 sm:p-6 shadow rounded text-center">
        <h3 className="font-bold text-sm sm:text-base">
          SUBSCRIBE NEWSLETTER
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-3">
          Get all the latest information on Events, Sales and Offers.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-full my-4 bg-white text-gray-400 text-sm outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-2 font-bold text-sm hover:bg-blue-700">
          SUBSCRIBE
        </button>
      </div>

      {/* TESTIMONIAL */}
      <div className="bg-white p-5 sm:p-6 py-8 shadow rounded border-2 border-blue-500">

        {
          testimonial.map((test, index) => (
            <div key={test.id}>
              <div className={`flex items-center gap-3 ${index === testCurrent ? "block" : "hidden"}`}>
                <img
                  src={test.img}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />

                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {test.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {test.post}
                  </p>
                </div>
              </div>
            </div>
          ))
        }

        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Buttons */}
        <div div className="flex mt-5" >
          {
            testimonial.map((_, index) => (
              <button
                key={index}
                onClick={() => settestCurrent(index)}
                className={`w-[12px] h-[12px] rounded-full mx-1 border-2 ${testCurrent === index
                  ? "bg-blue-500 border-blue-500"
                  : "border-blue-500 hover:bg-blue-400"
                  }`}
              ></button>
            ))
          }
        </div>
      </div>

      {/* Fashion Trends */}
      <div className="relative w-full overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-500 ${index === current ? "block" : "hidden"
              }`}
          >
            <div className="flex flex-col text-left py-6">
              <img
                src={slide.image}
                alt=""
                className="w-full rounded"
              />

              <h3 className="text-lg sm:text-xl font-bold mt-4">
                {slide.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {slide.desc}
              </p>

              <a
                href="#"
                className="text-sm font-semibold mt-2 hover:text-blue-600"
              >
                read more &gt;
              </a>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-[12px] h-[12px] rounded-full mx-1 border-2 ${current === index
                ? "bg-blue-500 border-blue-500"
                : "border-blue-500 hover:bg-blue-400"
                }`}
            ></button>
          ))}
        </div>
      </div>

    </div >
  );
};

export default SidebarLeft;