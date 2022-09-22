import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerHeader from './components/BannerHeader';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import ScrollEvent from './components/ScrollEvent';
import ClickSearchEvent from './components/ClickSearchEvent';
import MobileMenu from './components/MobileMenu';
import FormUser, { FormSignIn, FormSignUp } from './components/FormUser';

const cx = classNames.bind(styles);

function Header() {
    // Xứ lý cuộn màn hình thì sẽ thay đổi navbar và menu
    //Gọi components ScrollEvent đề thực hiện việc Xử lý cuộn màn hình
    const navBarElement = useRef();
    const headerElement = useRef();
    ScrollEvent(navBarElement, headerElement);

    //Xử lý click vào nút tìm kiếm
    const search = useRef();
    const searchButton = useRef();
    const closeButton = useRef();
    ClickSearchEvent(search, searchButton, closeButton, headerElement);

    //Xử lý click vào userButton
    const userIcon = useRef();
    const userIconRes = useRef();

    const menuIcon = useRef();
    return (
        <>
            <BannerHeader />
            <header ref={headerElement} className={cx('header')}>
                {/* Nav bar */}
                <div className={cx('header__navbar')}>
                    <div className={cx('header__navbar-list', 'header__bar-icon')}>
                        <li ref={menuIcon} className={cx('header__navbar-item')}>
                            <FontAwesomeIcon icon={faBars} />
                        </li>
                        <MobileMenu menuIcon={menuIcon} userIconRes={userIconRes} />
                    </div>

                    <div className={cx('header__logo')}>
                        <a href="/">MN Shop</a>
                    </div>

                    <ul className={cx('header__navbar-list', 'flex-right', 'justify-content-end')}>
                        <li className={cx('header__navbar-item', 'cart-icon')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </li>

                        <li
                            ref={userIcon}
                            className={cx('header__navbar-item-user', 'header__navbar-item', 'd-none', 'd-lg-block')}
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </li>

                        <FormUser userIcon={userIcon} userIconRes={userIconRes} />

                        <li className={cx('header__navbar-item', 'header__navbar-item-search')}>
                            <form ref={search} className={cx('form-mini-search')} action="">
                                <div className={cx('search-button-wrap')}>
                                    <div ref={searchButton} className={cx('search-button')}>
                                        <i>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </i>
                                    </div>
                                </div>
                                <div className={cx('search-input-wrap')}>
                                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                                </div>
                                <div ref={closeButton} className={cx('js-close-button', 'close-button-wrap')}>
                                    <div className={cx('close-button-icon')}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>

                {/* Header Menu */}
                <div ref={navBarElement} className={cx('header-menu-wrap')}>
                    <div className={cx('header-menu')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-item')}>
                                <a href="/aothun">
                                    <span className={cx('menu-item-name')}>Áo thun</span>
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="#">
                                    <span className={cx('menu-item-name')}>Áo sơ mi</span>
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="#">
                                    <span className={cx('menu-item-name')}>Áo khoác jeans</span>
                                </a>
                            </li>

                            <li className={cx('menu-item')}>
                                <a href="#">
                                    <span className={cx('menu-item-name')}>Phụ kiện</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
