import Header from "./components/Header"
import ArtistPresentation from "./components/ArtistPresentation"
import ProductCatalog from "./components/ProductCatalog"
import OrderForm from "./components/OrderForm"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import CatalogSummary from "./components/CatalogSummary"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ArtistPresentation />
        <CatalogSummary />
        <ProductCatalog />
        <OrderForm />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

