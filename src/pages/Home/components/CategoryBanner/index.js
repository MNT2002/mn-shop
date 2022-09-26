import classNames from 'classnames/bind';
import styles from './CategoryBanner.module.scss';

const cx = classNames.bind(styles);

function CategoryBanner() {
    return (
        <div className={cx('category-banner-block')}>
            <div className={cx('row', 'm-0', 'p-0')}>
                <div className={cx('col-12', 'col-md-6', 'col-lg-6', 'category-banner-box')}>
                    <a href="">
                        <div className={cx('category-banner-item', 'category-banner-item__ao-thun')}>
                            <div className={cx('label-box')}>
                                <div className={cx('label-wrap')}>
                                    <h4>ÁO THUN</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={cx('col-12', 'col-md-6', 'col-lg-6', 'category-banner-box')}>
                    <a href="">
                        <div className={cx('category-banner-item', 'category-banner-item__ao-somi')}>
                            <div className={cx('label-box')}>
                                <div className={cx('label-wrap')}>
                                    <h4>ÁO SƠ MI</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={cx('row', 'mt-2')}>
                    <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'category-banner-box')}>
                        <a href="">
                            <div className={cx('category-banner-item', 'category-banner-item__ao-khoac-jeans')}>
                                <div className={cx('label-box')}>
                                    <div className={cx('label-wrap')}>
                                        <h4>ÁO KHOÁC JEANS</h4>
                                        <span>
                                            <p>Xem ngay</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col-6','col-md-4', 'col-lg-4', 'category-banner-box')}>
                        <a href="">
                            <div className={cx('category-banner-item', 'category-banner-item__phu-kien')}>
                                <div className={cx('label-box')}>
                                    <div className={cx('label-wrap')}>
                                        <h4>PHỤ KIỆN</h4>
                                        <span>
                                            <p>Xem ngay</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={cx('col-12', 'col-md-4', 'col-lg-4', 'category-banner-box')}>
                        <a href="">
                            <div className={cx('category-banner-item', 'category-banner-item__other')}>
                                <div className={cx('label-box')}>
                                    <div className={cx('label-wrap')}>
                                        <h4>sẢN PHẦM NỔI BẬT</h4>
                                        <span>
                                            <p>Xem ngay</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;
