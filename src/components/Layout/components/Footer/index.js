import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('link-social-network-box')}>
                <div className={cx('footer-logo-wrapper')}>
                    <span>MN SHOP</span>
                </div>

                <div className={cx('social-network-icons-wrapper')}>
                    <ul className={cx('social-network-icons__list')}>
                        <li className={cx('social-network-icons__item')}>
                            <a href="" className={cx('instagram')}>
                                <i>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </i>
                            </a>
                        </li>
                        <li className={cx('social-network-icons__item')}>
                            <a href="" className={cx('facebook')}>
                                <i>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </i>
                            </a>
                        </li>
                        <li className={cx('social-network-icons__item')}>
                            <a href="" className={cx('youtube')}>
                                <i>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </i>
                            </a>
                        </li>
                        <li className={cx('social-network-icons__item')}>
                            <a href="" className={cx('tiktok')}>
                                <i>
                                    <FontAwesomeIcon icon={faTiktok} />
                                </i>
                            </a>
                        </li>
                        <li className={cx('social-network-icons__item')}>
                            <a href="" className={cx('printerest')}>
                                <i>
                                    <FontAwesomeIcon icon={faPinterest} />
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('footer__container', 'row', 'd-sm-flex', 'flex-sm-row', 'm-0')}>
                <div className={cx('col-lg-4', 'col-md-6', 'footer-col')}>
                    <h3>c??ng ty tn</h3>
                    <p>Tr??? s??? ch??nh: 567 L?? Du???n, TP.Bu??n M?? Thu???t</p>
                    <p>S??? ??i???n tho???i: </p>
                    <p>?????a ch??? Email: </p>
                </div>
                <div className={cx('col-lg-4', 'col-md-6', 'footer-col')}>
                    <h3>th????ng hi???u </h3>
                    <li>
                        <a href="">Gi???i thi???u</a>
                    </li>
                    <li>
                        <a href="">Tuy???n d???ng</a>
                    </li>
                    <li>
                        <a href="">Li??n h???</a>
                    </li>
                </div>
                <div className={cx('col-lg-4', 'col-md-6', 'footer-col')}>
                    <h3>h??? tr??? </h3>
                    <li>
                        <a href="">H???i ????p</a>
                    </li>
                    <li>
                        <a href="">Ch??nh s??ch v???n chuy???n</a>
                    </li>
                    <li>
                        <a href="">Quy ?????nh ?????i h??ng</a>
                    </li>
                </div>
            </div>
            <footer className={cx('bg-light', 'text-center', 'text-lg-start')}>
                <div
                    className={cx('text-center', 'p-4')}
                    style={{ background: 'rgba(0, 0, 0, 0.025)', fontSize: '14px' }}
                >
                    ?? 2022 Copyright by
                    <a className={cx('text-dark')} href="https://www.facebook.com/minhnhattrannn">
                        <span> </span>MinhNhatTran
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
