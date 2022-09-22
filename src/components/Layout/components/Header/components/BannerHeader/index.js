import classNames from 'classnames/bind';
import styles from './BannerHeader.module.scss';

const cx = classNames.bind(styles);

function BannerHeader() {
    return (
        <div className={cx('d-lg-flex justify-content-around text-white', 'banner-header-box')}>
            <div className={cx('p-2')}>
                <a href="#" className={cx('text-white', 'banner-link')}>
                    Miễn phí giao hàng với đơn hàng lớn hơn 1 triệu đồng
                </a>
            </div>
            <div className={cx('p-2')}>
                <a href="#" className={cx('text-white', 'banner-link')}>
                    Đổi trả hàng đơn giản
                </a>
            </div>
            <div className={cx('p-2')}>
                <a href="#" className={cx('text-white', 'banner-link')}>
                    Nay đã có thẻ thanh toán bằng ZaloPay
                </a>
            </div>
        </div>
    );
}

export default BannerHeader;
