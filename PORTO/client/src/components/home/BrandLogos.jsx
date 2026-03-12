const BrandLogos = () => {
  const logos = [
    {
      id: 1,
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/brands/new_brand1.png",
    },
    {
      id: 2,
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/brands/new_brand2.png",
    },
    {
      id: 3,
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/brands/new_brand3.png",
    },
    {
      id: 4,
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/brands/new_brand4.png",
    },
    {
      id: 5,
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/brands/new_brand5.png",
    },
  ];

  return (
    <div className="py-8 px-4 border-t border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="">
              <img
                src={logo.image}
                alt="brand logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
