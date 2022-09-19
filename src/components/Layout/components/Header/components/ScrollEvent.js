import { useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function ScrollEvent(navBarElement, headerElement) {
    useEffect(() => {
        const navPos = navBarElement.current.getBoundingClientRect().top;

        window.addEventListener('scroll', (e) => {
            let scrollPos = window.scrollY;
            if (scrollPos > navPos) {
                navBarElement.current.classList.add(cx('sticky'));
                headerElement.current.classList.add(cx('header-sticky'));
            } else {
                navBarElement.current.classList.remove(cx('sticky'));
                headerElement.current.classList.remove(cx('header-sticky'));
            }
        });
    }, []);
}

export default ScrollEvent;
