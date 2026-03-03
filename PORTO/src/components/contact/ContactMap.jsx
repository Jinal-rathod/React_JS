import React from "react";
import TopNavbar from "../TopNavbar";

const ContactMap = () => {
  return (
    <div>
      <TopNavbar/>
      {/* Google Map Section */}
      <div className="max-w-6xl h-[300px] py-5 mx-auto">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
