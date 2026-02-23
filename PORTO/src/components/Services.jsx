const Services = () => {
  const services = [
    {
      title: "CUSTOMER SUPPORT",
      desc: "Need Assistance?",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
    },
    {
      title: "SECURED PAYMENT",
      desc: "Safe & Fast",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
    },
    {
      title: "RETURNS",
      desc: "Easy & Free",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 text-center">
      {services.map((s, i) => (
        <div key={i} className="bg-white px-2 py-6">
          <div className="w-20 h-16 mx-auto border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 text-xl">
            ✓
          </div>
          <h4 className="mt-4 font-semibold">{s.title}</h4>
          <p className="text-gray-500 text-md">{s.desc}</p>
          <p className="text-gray-500 text-sm mt-2">{s.pera}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
