import Header from '../components/Header';
import Footer from '../components/Footer';

function HeadFooterOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeadFooterOnly;
