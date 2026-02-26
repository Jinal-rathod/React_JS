import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 pb-14 pt-10 grid md:grid-cols-3 gap-12">
        {/* Left - Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-6">Write <span className="font-black">Us</span></h2>

          <form className="space-y-6" action="#">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div>
                  <label className="block text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  What's on your mind? *
                </label>
                <textarea
                  rows="5"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>
            </div>

            <button className="bg-sky-600 text-white px-8 py-3 rounded hover:bg-sky-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right - Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact <span className="font-black">Details</span></h2>

          <div className="space-y-6 text-gray-600">
            <div className="flex gap-4 items-start">
              <div className="bg-sky-600 text-white p-3 rounded">📞</div>
              <div>
                <p>0201 203 2032</p>
                <p>0201 203 2032</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-sky-600 text-white p-3 rounded">📱</div>
              <div>
                <p>201-123-3922</p>
                <p>302-123-3928</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-sky-600 text-white p-3 rounded">@</div>
              <div>
                <p>porto@gmail.com</p>
                <p>porto@portotemplate.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-sky-600 text-white p-3 rounded">💬</div>
              <div>
                <p>porto_skype</p>
                <p>porto_template</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
