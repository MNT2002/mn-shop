import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';

const cx = classNames.bind(styles);

function CategoryBanner() {
    return (
        <div class="category-banner-block">
            <div class="row c-flex-wrap">
                <div class="col-sm-12 col-md-12 c-mr-0 column-2 mr-4vw">
                    <a href="">
                        <div class="category-banner-item category-banner-item__male">
                            <div class="label-box">
                                <div class="label-wrap">
                                    <h4>ÁO THUN</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="column-2">
                    <a href="">
                        <div class="category-banner-item category-banner-item__female ">
                            <div class="label-box">
                                <div class="label-wrap">
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

            <div class="row c-flex-wrap c-mt-0 mt-4vw">
                <div class="c-mr-0 col-4 mr-4vw">
                    <a href="">
                        <div class="category-banner-item  category-banner-item__bag ">
                            <div class="label-box">
                                <div class="label-wrap">
                                    <h4>ÁO KHOÁC JEANS</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="">
                        <div class="category-banner-item category-banner-item__other mr-4vw">
                            <div class="label-box">
                                <div class="label-wrap">
                                    <h4>Phụ kiện</h4>
                                    <span>
                                        <p>Xem ngay</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-4">
                    <a href="">
                        <div class="category-banner-item category-banner-item__other">
                            <div class="label-box">
                                <div class="label-wrap">
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
