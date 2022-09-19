import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div>{children}</div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
