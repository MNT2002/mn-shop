import { useRef, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MobileMenu({ menuIconWrap, menuIcon, userIconRes }) {
    const navMobile = useRef();
    const signOutBtnMobile = useRef();

    const [clicked, setClicked] = useState('');
    const closeButton = useRef();

    function openEvent() {
        setClicked('true');
        menuIconWrap.current.style.zIndex = '50';
    }
    function closeEvent() {
        setClicked('');
        menuIconWrap.current.style.zIndex = '';
    }

    useEffect(() => {
        closeButton.current.addEventListener('click', closeEvent);
        menuIcon.current.addEventListener('click', openEvent);
    }, [clicked]);

    useEffect(() => {
        signOutBtnMobile.current.addEventListener('click', () => {
            localStorage.setItem('UserLogging', JSON.stringify({customer: {username: ''}}));
            window.location.reload();
        })

        if(localStorage.getItem('UserLogging') !== null) {
            if((JSON.parse(localStorage.getItem('UserLogging'))).customer.username !== '') {
                navMobile.current.classList.remove(cx('existUser'));
            } else {
                navMobile.current.classList.add(cx('existUser'));
            }
        }
        
    }, [])

    const dBlock = {
        display: 'block',
    };
    const dNone = {
        display: 'none',
    };
    const transAcept = {
        transform: 'translateX(0)',
    };
    const transCancel = {
        transform: 'translateX(-100%)',
    };

    const variableDisplay = clicked ? dBlock : dNone;
    const variableTrans = clicked ? transAcept : transCancel;

    return (
        <>
            <div style={variableDisplay} className={cx('nav-overlay')}></div>
            <nav ref={navMobile} style={variableTrans} className={cx('nav__mobile')}>
                <label ref={closeButton} className={cx('nav__mobile-close')}>
                    <i>
                        <FontAwesomeIcon icon={faXmark} />
                    </i>
                </label>

                <ul className={cx('nav__mobile-list')}>
                    <li className={cx('nav__mobile-item-title')}>
                        <h1 className={cx('form-logged-mobile__title-wrapper')}>
                            Xin chào
                            <span className={cx('form-logged-mobile__title')}>
                                {localStorage.getItem('UserLogging') !== null
                                    ? JSON.parse(localStorage.getItem('UserLogging')).customer.username
                                    : ''}
                            </span>
                        </h1>
                    </li>
                                    {/* Áo thun  */}
                    <li>
                        <a href="/aothun" className={cx('nav__mobile-link')}>
                            áo thun
                            <i className={cx('icon-angle-right')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </a>
                    </li>
                    {/* Áo sơ mi  */}
                    <li>
                        <a href="" className={cx('nav__mobile-link')}>
                            Áo sơ mi
                            <i className={cx('icon-angle-right')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </a>
                    </li>
                    {/* Áo khoác Jeans  */}
                    <li>
                        <a href="" className={cx('nav__mobile-link')}>
                            Áo khoác Jeans
                            <i className={cx('icon-angle-right')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </a>
                    </li>
                    {/* Phu kien  */}
                    <li>
                        <a href="" className={cx('nav__mobile-link')}>
                            PHỤ KIỆN
                            <i className={cx('icon-angle-right')}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </i>
                        </a>
                    </li>
                </ul>

                <ul className={cx('custom-link')}>
                    <li className={cx('custom-link-item', 'custom-link-item__info')}>
                        <span>
                            <i className={cx('custom-link-icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                            Tài khoản
                        </span>
                    </li>
                    <li className={cx('custom-link-item', 'custom-link-item__supp')}>
                        <span>
                            <i className={cx('custom-link-icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                            Liên hệ hỗ trợ
                        </span>
                    </li>
                    <li className={cx('custom-link-item')} ref={userIconRes}>
                        <span>
                            <i className={cx('custom-link-icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                            Tài khoản
                        </span>
                    </li>
                    <li ref={signOutBtnMobile} className={cx('signout-mobile-btn')}>
                        <span>
                            Đăng xuất
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default MobileMenu;
