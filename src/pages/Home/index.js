import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from './components/Slider';
import BestSeller from './components/BestSeller';
import CategoryBanner from './components/CategoryBanner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Slider />
            <BestSeller />
            {/* <CategoryBanner /> */}
        </>
    );
}

export default Home;
