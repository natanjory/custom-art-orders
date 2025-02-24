import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    title: "Quadro Personalizado",
    description: "Crie seu quadro único com base em suas ideias e preferências.",
    price: "A partir de R$ 150",
  },
  {
    title: "Quadro Temático",
    description: "Escolha entre nossa seleção de temas populares e personalize cores e tamanhos.",
    price: "A partir de R$ 120",
  },
  {
    title: "Quadro Artístico",
    description: "Reproduções de alta qualidade de obras de arte famosas ou de artistas locais.",
    price: "A partir de R$ 200",
  },
]

export default function ProductCatalog() {
  return (
    <section id="catalog" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black-800">Nosso Catálogo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

