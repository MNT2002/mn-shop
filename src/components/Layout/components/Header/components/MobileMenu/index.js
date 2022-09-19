import { useRef, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MobileMenu({ menuIcon, userIconRes }) {
    const [clicked, setClicked] = useState('');
    const closeButton = useRef();

    function openEvent() {
        setClicked('true');
    }
    function closeEvent() {
        setClicked('');
    }

    useEffect(() => {
        closeButton.current.addEventListener('click', closeEvent);
        menuIcon.current.addEventListener('click', openEvent);
        return () => {
            menuIcon.current.removeEventListener('click', openEvent);
        };
    }, [clicked]);

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
            <nav style={variableTrans} className={cx('nav__mobile')}>
                <label ref={closeButton} className={cx('nav__mobile-close')}>
                    <i>
                        <FontAwesomeIcon icon={faXmark} />
                    </i>
                </label>

                <ul className={cx('nav__mobile-list')}>
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
                    <li ref={userIconRes} className={cx('js-user-icon-tablet')}>
                        <span>
                            <i className={cx('custom-link-icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                            Tài khoản
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default MobileMenu;
