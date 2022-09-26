import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';

import img1 from '../../../../assets/images/BestSeller/1.jpg';
import img2 from '../../../../assets/images/BestSeller/2.jpg';
import img3 from '../../../../assets/images/BestSeller/3.jpg';
import img4 from '../../../../assets/images/BestSeller/4.jpg';

const bestSellerList = [
    {
        name: 'Đầm dệt kim hai màu',
        price: '8.575.000 ₫',
        href: img1,
    },
    {
        name: 'Đầm dệt kim hai màu',
        price: '8.575.000 ₫',
        href: img2,
    },
    {
        name: 'Đầm dệt kim hai màu',
        price: '8.575.000 ₫',
        href: img3,
    },
    {
        name: 'Đầm dệt kim hai màu',
        price: '8.575.000 ₫',
        href: img4,
    },
];

const cx = classNames.bind(styles);

function BestSeller() {
    return (
        <div className={cx('product-best-sellers')}>
            <div className={cx('product-best-sellers__title')}>
                <h3>SẢN PHẨM BÁN CHẠY</h3>
            </div>

            <div className={cx('row','p-0','m-0', 'product-best-seller-wrapper')}>
                {bestSellerList.map((item, index) => {
                    return (
                        <div key={index} className={cx('product-best-sellers__item', 'col-6 col-md-4 col-lg-3')}>
                            <a href="" className={cx('product-best-sellers__link')}>
                                <div className={cx('item__img-wrap')}>
                                    <img src={item.href} alt="" className={cx('item__img')} />
                                </div>
                                <div className={cx('item__name-wrap')}>
                                    <h3 className={cx('item__name')}>{item.name}</h3>
                                    <span className={cx('item__price')}>{item.price}</span>
                                </div>
                                <button className={cx('item__btn')}>
                                    <span>XEM SẢN PHẨM</span>
                                </button>
                            </a>
                        </div>
                    );
                })}
            </div>

            <div className={cx('product-best-sellers__border-bottom')}>
                <hr />
            </div>
        </div>
    );
}

export default BestSeller;
