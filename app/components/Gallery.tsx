import Image from "next/image"

const galleryItems = [
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 2" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 3" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 4" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 5" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quadro Exemplo 6" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black-800">Galeria de Exemplos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

