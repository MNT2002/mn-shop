import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import slide1 from './Picture/slider-2.jpg';
import slide2 from './Picture/slider-3.jpg';
import slide3 from './Picture/slider-4.jpg';

function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={slide1} />
                <Carousel.Caption>
                    <h3>Chất lượng</h3>
                    <p>Sản phẩm nhập khẩu từ nước ngoài với các loại chất liệu tốt</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={slide2} />
                <Carousel.Caption>
                    <h3>Đa dạng</h3>
                    <p>Sản phẩm được chọn lọn với nhiều mẫu mã khác nhau </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={slide3} />
                <Carousel.Caption>
                    <h3>Giá rẻ</h3>
                    <p>Sản phẩm chất lượng mà giá cả phải chăng</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
