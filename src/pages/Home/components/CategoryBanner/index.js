import classNames from 'classnames/bind';
import styles from './CategoryBanner.module.scss';

const cx = classNames.bind(styles);

function CategoryBanner() {
    return (
        <div className={cx('category-banner-block')}>
            <div className={cx('row')}>
                <div className={cx('col-12', 'col-md-6', 'col-lg-6', 'category-banner-box')}>
                    <a href="">
                        <div className={cx('category-banner-item', 'category-banner-item__male')}>
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
                        <div className={cx('category-banner-item', 'category-banner-item__female')}>
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
                <div className="column-2">
                    <a href="">
                        <div className="category-banner-item category-banner-item__female ">
                            <div className="label-box">
                                <div className="label-wrap">
                                    <h4>ÁO SƠ MI</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="row c-flex-wrap c-mt-0 mt-4vw">
                <div className="c-mr-0 col-4 mr-4vw">
                    <a href="">
                        <div className="category-banner-item  category-banner-item__bag ">
                            <div className="label-box">
                                <div className="label-wrap">
                                    <h4>ÁO KHOÁC JEANS</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="">
                        <div className="category-banner-item category-banner-item__other mr-4vw">
                            <div className="label-box">
                                <div className="label-wrap">
                                    <h4>Phụ kiện</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="">
                        <div className="category-banner-item category-banner-item__other">
                            <div className="label-box">
                                <div className="label-wrap">
                                    <h4>sản phẩm nổi bật</h4>
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
    );
}

export default CategoryBanner;
