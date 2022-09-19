import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import image1 from '../../../../assets/images/IconReinsurance/1.png';
import image2 from '../../../../assets/images/IconReinsurance/2.png';
import image3 from '../../../../assets/images/IconReinsurance/3.png';
import image4 from '../../../../assets/images/IconReinsurance/4.png';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('Contact-block')}>
            <div className={cx('reinsurance-container')}>
                <div className={cx('row', 'reinsurance-list')}>
                    <div className={cx('reinsurance-item-wrap', 'flex-shrink-1')}>
                        <div className={cx('reinsurance-item')}>
                            <a href="#" className={cx('reinsurance-item-link')}>
                                <span className={cx('icon-wrap')}>
                                    <img src={image1} />
                                </span>
                                Cam kết
                                <br />
                                hàng chính hãng
                            </a>
                        </div>
                    </div>
                    <div className={cx('reinsurance-item-wrap', 'flex-shrink-1')}>
                        <div className={cx('reinsurance-item')}>
                            <a href="#" className={cx('reinsurance-item-link')}>
                                <span className={cx('icon-wrap')}>
                                    <img src={image2} />
                                </span>
                                Thanh toán an toàn
                            </a>
                        </div>
                    </div>
                    <div className={cx('reinsurance-item-wrap', 'flex-shrink-1')}>
                        <div className={cx('reinsurance-item')}>
                            <a href="#" className={cx('reinsurance-item-link')}>
                                <span className={cx('icon-wrap')}>
                                    <img src={image3} />
                                </span>
                                Theo dõi đơn hàng
                            </a>
                        </div>
                    </div>
                    <div className={cx('reinsurance-item-wrap', 'flex-shrink-1')}>
                        <div className={cx('reinsurance-item')}>
                            <a href="#" className={cx('reinsurance-item-link')}>
                                <span className={cx('icon-wrap')}>
                                    <img src={image4} />
                                </span>
                                Hỗ trợ khách hàng
                                <br />
                                0929 052 864 (Nhật)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
