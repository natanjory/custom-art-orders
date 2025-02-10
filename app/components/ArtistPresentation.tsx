"use client";

export default function ArtistPresentation() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texto de apresentação */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-light text-pink-500">
              LOUISI
            </h1>
            <span className="text-xl md:text-2xl text-blue-600 font-light">
              ilustradora
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-pink-500">
              MÜLLER DE JESUS
            </h2>
          </div>
          
          {/* Imagem da flor */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-48 md:w-64 h-auto">
              <img
                src="/flower.svg"
                alt="Flor ilustrativa"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 