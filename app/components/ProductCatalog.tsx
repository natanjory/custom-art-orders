import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    title: "Coleção Beatriz",
    description: "Crie seu quadro único com base em suas ideias e preferências.",
    price: "A partir de R$ 150",
    image: "/background_cards.png",
  },
  {
    title: "Coleção Liz",
    description: "Escolha entre nossa seleção de temas populares e personalize cores e tamanhos.",
    price: "A partir de R$ 120",
    image: "/background_cards.png",
  },
  {
    title: "Coleção Geovana",
    description: "Reproduções de alta qualidade de obras de arte famosas ou de artistas locais.",
    price: "A partir de R$ 200",
    image: "/background_cards.png",
  },
]

export default function ProductCatalog() {
  return (
    <section id="catalog" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black-800">Nosso Catálogo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-black">{product.title}</h3>
              <p className="text-gray-800 font-medium">{product.price}</p>
            </div>
            
            <Card className="relative overflow-hidden h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              <CardContent className="relative z-10 max-w-[80%] mx-auto h-full flex items-center">
                <p className="text-black text-center">{product.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

