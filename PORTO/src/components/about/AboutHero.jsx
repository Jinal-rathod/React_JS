import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className=" bg-gray-100 text-center ">
        <div className=" max-w-6xl mx-auto py-5 flex text-sm font-medium text-gray-600 space-x-6">
          <a href="#" className="hover:text-black">
            HOME
          </a>
          <a href="#" className="hover:text-black">
            CATEGORIES
          </a>
          <a href="#" className="hover:text-black">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-black">
            PAGES
          </a>
          <a href="#" className="hover:text-black">
            FEATURES
          </a>
          <a href="#" className="hover:text-black">
            BLOG
          </a>
          <a href="#" className="hover:text-black">
            ABOUT US
          </a>
          <a href="#" className="hover:text-black">
            BUY PORTO!
          </a>
        </div>
      </div>

      {/* About Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl font-bold uppercase mb-6">
          The New Way To Success
        </h1>

        <h3 className="text-xl mb-8 mt-12">Who we are </h3>
        <div className="text-sm grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed">
          <p>
            Aliquam consectetur et lorem semper scelerisque. Proin est nibh,
            vestibulum vitae congue nec, tristique eu justo. Maecenas eu nunc
            lacinia, porta lorem vitae, viverra velit. Nulla dolor libero,
            rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus porttitor
            odio sodales pulvinar. Sed gravida nulla sed sapien vulputate, eget
            malesuada justo egestas. Pellentesque sem mi, vulputate ac iaculis
            sit amet, sagittis feugiat dui. Proin non pellentesque leo.
            Vestibulum varius laoreet posuere. Etiam fringilla diam odio.
          </p>

          <p>
            Quisque congue dignissim dui sed luctus. Morbi nec mi vitae magna
            finibus ullamcorper. Etiam mattis blandit convallis. Suspendisse eu
            elementum leo. Vestibulum molestie nunc et efficitur egestas.
            Vivamus arcu lectus, laoreet vel consectetur bibendum, elementum non
            nunc. Proin porttitor velit odio, ac mattis quam tincidunt eget.
            Fusce semper nunc eget efficitur efficitur. Nam ullamcorper, enim id
            tincidunt feugiat, velit mauris fermentum nulla, at tempor eros
            turpis sit amet massa. Ut a semper lectus, sed hendrerit risus. In
            hac habitasse platea dictumst. Curabitur venenatis cursus posuere.
            Praesent turpis nisi, aliquam at facilisis non, sagittis vel urna.
            Donec diam lorem, feugiat vitae laoreet in, sagittis a lorem.
          </p>
          <p>
            Nulla felis nibh, bibendum a leo ut, egestas ornare felis. Nam
            pretium mauris justo, eget commodo est fringilla vel. Proin
            condimentum, lacus sit amet finibus gravida, sapien ligula mattis
            leo, sit amet mattis leo lacus sit amet lectus. Nulla facilisi.
            Etiam porta iaculis velit id pulvinar. Sed dolor odio, eleifend eget
            aliquam vitae, efficitur vitae dolor. Integer ornare neque ac leo
            sollicitudin, at vestibulum ante scelerisque. Nullam ut elit sed
            lorem tempus feugiat in et lectus. Mauris interdum molestie
            placerat. Nullam dolor nunc, elementum et tincidunt id, vestibulum
            quis turpis. Integer imperdiet a eros a laoreet. Nam mattis vel
            ligula non imperdiet. Suspendisse potenti. Fusce purus sem, dapibus
            eu fermentum eget, aliquam vehicula ligula.
          </p>
          <p>
            Aliquam consectetur et lorem semper scelerisque. Proin est nibh,
            vestibulum vitae congue nec, tristique eu justo. Maecenas eu nunc
            lacinia, porta lorem vitae, viverra velit. Nulla dolor libero,
            rhoncus quis luctus eu, fermentum sed leo. Morbi ut risus porttitor
            odio sodales pulvinar. Sed gravida nulla sed sapien vulputate, eget
            malesuada justo egestas. Pellentesque sem mi, vulputate ac iaculis
            sit amet, sagittis feugiat dui. Proin non pellentesque leo.
            Vestibulum varius laoreet posuere. Etiam fringilla diam odio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
