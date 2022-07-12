import SalesCard from "./componentes/SalesCard"
import Header from "./componentes/Header"


function App() {

  return (

    <>

      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section>
      </main>

    </>


  )

}

export default App
