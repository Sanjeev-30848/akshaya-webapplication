import Header from './components/Header.jsx';
import WhatsNew from './components/WhatsNew.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <WhatsNew />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
