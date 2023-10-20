import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Routers from "../routes/Routers"

const LayOut = () => {
  return (
    <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
  )
}

export default LayOut