import Image from "next/image"

export default function CatalogSummary() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Welcome Text */}
          <div className="space-y-2">
            <h2 className="font-dancing-script text-4xl md:text-5xl text-blue-600">
              Seja bem vindo
            </h2>
            <h1 className="font-quicksand text-2xl md:text-3xl text-pink-500 uppercase tracking-wider">
              ao fascinante mundo da artista:
            </h1>
            <p className="font-quicksand text-2xl md:text-3xl text-pink-500 uppercase tracking-wider">
              Louisi Müller de Jesus.
            </p>
          </div>

          {/* Main Description */}
          <div className="space-y-8 text-blue-600 font-quicksand text-lg md:text-xl leading-relaxed">
            <p className="text-justify md:text-center">
              Aqui você conhecerá um pouca de nossas obras, {' '}
              <br className="hidden md:block" />
              nosso catálogo de vendas e as diferentes opções {' '}
              <br className="hidden md:block" />
              que podemos juntos deixar seu mundo ainda mais {' '}
              <br className="hidden md:block" />
              seu e mais colorido.
            </p>

            <p className="text-justify md:text-center">
              As Obras de Louisi Müller de Jesus tem como seu {' '}
              <br className="hidden md:block" />
              maior objetivo traduzir o que cliente esteja {' '}
              <br className="hidden md:block" />
              precisando no momento, com seu toque totalmente {' '}
              <br className="hidden md:block" />
              criativo e fora da curva, ela tem como marca {' '}
              <br className="hidden md:block" />
              registrada levar alegria, mesmo no meio do caos.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 space-y-4">
            <p className="font-dancing-script text-3xl md:text-4xl text-pink-500">
              Fiquem a vontade.
            </p>
            <div className="text-pink-500 font-dancing-script text-2xl md:text-3xl space-y-2">
              <p>
                Temos certeza que assim como
                <br />
                nós você vai acabar se
                <br />
                apaixonando por algo.
              </p>
              <p>
                Nem que seja pela vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 