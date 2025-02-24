"use client";

export default function ArtistPresentation() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Assinatura digital */}
          <div className="md:w-1/2">
            <img
              src="/signature.png"
              alt="Assinatura Louisi Müller de Jesus"
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Imagem da flor */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-48 md:w-64 h-auto">
              <img
                src="/flower_presentation.png"
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