import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />

      <section className="container">
        <div className="apresentacao">
          <p>
            Olá, sou <br/>
            <span>Gabriel Siriani</span> <br/>
            Desenvolvedor Full-Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img src="src/assets/web_developer.svg" alt="Imagem da home" className="img-home" />
        </figure>
      </section>

      <Footer />
    </>
  )
}

export default App
