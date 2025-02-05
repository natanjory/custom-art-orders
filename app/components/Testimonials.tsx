import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Maria Silva",
    content: "Adorei o quadro personalizado que encomendei! A qualidade é excelente e o atendimento foi ótimo.",
    avatar: "MS",
  },
  {
    name: "João Santos",
    content: "O quadro temático que comprei superou minhas expectativas. Recomendo a todos!",
    avatar: "JS",
  },
  {
    name: "Ana Oliveira",
    content: "A reprodução da obra de arte que encomendei ficou perfeita. Estou muito satisfeita com o resultado!",
    avatar: "AO",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Depoimentos de Clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div className="font-semibold">{testimonial.name}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

