import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/Header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
