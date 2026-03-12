import React from "react";
import TopNavbar from "../TopNavbar";

const AboutHero = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-gray-100 text-center">
        <TopNavbar />
      </div>

      {/* About Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 text-center md:text-left">
          The New Way To Success
        </h1>

        {/* Subtitle */}
        <h3 className="text-lg sm:text-xl mb-6 sm:mb-10 mt-6 sm:mt-10 text-center md:text-left">
          Who we are
        </h3>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 text-gray-600 text-sm sm:text-base leading-relaxed">

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