import Image from "next/image"

export default function CatalogSummary() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="relative aspect-auto min-h-[500px] max-w-[1400px] mx-auto w-full overflow-hidden">
          <Image
            src="/summary.png"
            alt="Resumo do Catálogo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
} 