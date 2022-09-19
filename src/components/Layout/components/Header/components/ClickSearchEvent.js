import { useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function ClickSearchEvent(search, searchButton, closeButton, headerElement) {
    function showMiniSearch() {
        search.current.classList.add(cx('active'));
        search.current.style.width = `${headerElement.current.getBoundingClientRect().width}px`;
    }

    function hideMiniSearch() {
        search.current.classList.remove(cx('active'));
        search.current.style.width = '100%';
    }

    useEffect(() => {
        searchButton.current.addEventListener('click', showMiniSearch);
        closeButton.current.addEventListener('click', hideMiniSearch);
    }, []);
}

export default ClickSearchEvent;
