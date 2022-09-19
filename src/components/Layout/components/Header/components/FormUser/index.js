import { useRef, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './FormUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function FormUser({ userIcon, userIconRes }) {
    const FormSignUpElement = useRef();
    const signUpCloseButton = useRef();

    const FormSignInElement = useRef();
    const signInCloseButton = useRef();

    const buttonSignIn = useRef();
    const buttonSignUp = useRef();

    function showFormSignIn() {
        FormSignInElement.current.classList.add(cx('active'));
    }
    function hideFormSignIn() {
        FormSignInElement.current.classList.remove(cx('active'));
    }
    function showFormSignUp() {
        FormSignUpElement.current.classList.add(cx('active'));
    }
    function hideFormSignUp() {
        FormSignUpElement.current.classList.remove(cx('active'));
    }

    useEffect(() => {
        userIcon.current.addEventListener('click', showFormSignUp);
        userIconRes.current.addEventListener('click', showFormSignUp);

        signUpCloseButton.current.addEventListener('click', hideFormSignUp);
        signInCloseButton.current.addEventListener('click', hideFormSignIn);

        buttonSignIn.current.addEventListener('click', showFormSignIn);
        buttonSignIn.current.addEventListener('click', hideFormSignUp);
        buttonSignUp.current.addEventListener('click', showFormSignUp);
        buttonSignUp.current.addEventListener('click', hideFormSignIn);
    });

    return (
        <>
            <div ref={FormSignUpElement} className={cx('form-sign-up')}>
                <div className={cx('sign-up-wrapper')}>
                    <div ref={signUpCloseButton} className={cx('sign-up-close-button')}>
                        <i>
                            <FontAwesomeIcon icon={faXmark} />
                        </i>
                    </div>
                    <h1>Đăng kí</h1>
                    <div className={cx('sign-up-box-left', 'col-md-6', 'col-12')}>
                        <form action="" method="POST">
                            <div className={cx('input-box')}>
                                <h3>Username</h3>
                                <input type="text" className={cx('input-user-name')} placeholder="Nhập tên tài khoản" />

                                <h3>Password</h3>
                                <input type="password" className={cx('input-password')} placeholder="Nhập mật khẩu" />

                                <h3>E-mail</h3>
                                <input type="email" className={cx('input-email')} placeholder="Nhập địa chỉ email" />
                            </div>
                            <label htmlFor="agree" className={cx('accept-rules-box')}>
                                <div className={cx('accept-rules__checkbox')}>
                                    <input style={{ display: 'none' }} id="agree" name="agree" type="checkbox" />
                                    <label htmlFor="agree"></label>
                                </div>
                                <span className={cx('agree-title')}>Tôi đồng ý với các quy tắc và điều kiện</span>
                            </label>
                            <button>Tạo tài khoản</button>

                            <div className={cx('connect-other-account')}>
                                <div className={cx('line-wrapper')}>
                                    <div className={cx('line')}></div>
                                    <span>Hoặc</span>
                                    <div className={cx('line')}></div>
                                </div>

                                <div className={cx('connect-other-account-wrapper')}>
                                    <div className={cx('connect-other-account-box', 'connect-other-box-facebook')}>
                                        <div
                                            style={{ marginRight: '6px' }}
                                            className={cx('connect-other-account__icon')}
                                        >
                                            <i>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </i>
                                        </div>
                                        <div className={cx('connect-other-account__name')}>Facebook</div>
                                    </div>
                                    <div className={cx('connect-other-account-box', 'connect-other-box-google')}>
                                        <div
                                            style={{ marginRight: '6px' }}
                                            className={cx('connect-other-account__icon')}
                                        >
                                            <i>
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </i>
                                        </div>
                                        <div className={cx('connect-other-account__name')}>Google</div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('haven-account-wrapper')}>
                                <h5>Bạn đã có tài khoản?</h5>
                                <span ref={buttonSignIn} className={cx('button-sign-in')} href="">
                                    Đăng nhập
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className={cx('sign-up-box-right', 'col-md-6')}>
                        <div className={cx('connect-other-wrapper')}>
                            <div className={cx('connect-other-box', 'connect-other-box-facebook')}>
                                <div style={{ marginLeft: '6px' }} className={cx('icon-connect-other')}>
                                    <i>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </i>
                                </div>
                                <div className={cx('connect-content')}>
                                    <span>Đăng nhập bằng Facebook</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('connect-other-wrapper')}>
                            <div className={cx('connect-other-box', 'connect-other-box-google')}>
                                <div style={{ marginLeft: '6px' }} className={cx('icon-connect-other')}>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </i>
                                </div>
                                <div className={cx('connect-content')}>
                                    <span>Đăng nhập bằng Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('or-box')}>Or</div>
                </div>
            </div>

            <div ref={FormSignInElement} className={cx('form-sign-in')}>
                <div className={cx('sign-in-wrapper')}>
                    <div ref={signInCloseButton} className={cx('sign-in-close-button')}>
                        <i>
                            <FontAwesomeIcon icon={faXmark} />
                        </i>
                    </div>
                    <h1>Đăng nhập</h1>
                    <div className={cx('sign-in-box-left', 'col-md-6', 'col-12')}>
                        <form action="" method="POST">
                            <div className={cx('input-box')}>
                                <h3>Username</h3>
                                <input type="text" className={cx('input-user-name')} placeholder="Nhập tên đăng nhập" />

                                <h3>Password</h3>
                                <input type="password" className={cx('input-password')} placeholder="Nhập mật khẩu" />
                            </div>

                            <button>Đăng nhập</button>

                            <div className={cx('forget-wrapper')}>
                                <a href="#">Quên mật khẩu?</a>
                            </div>

                            <div className={cx('connect-other-account')}>
                                <div className={cx('line-wrapper')}>
                                    <div className={cx('line')}></div>
                                    <span>Hoặc</span>
                                    <div className={cx('line')}></div>
                                </div>

                                <div className={cx('connect-other-account-wrapper')}>
                                    <div className={cx('connect-other-account-box', 'connect-other-box-facebook')}>
                                        <div
                                            style={{ marginRight: '6px' }}
                                            className={cx('connect-other-account__icon')}
                                        >
                                            <i>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </i>
                                        </div>
                                        <div className={cx('connect-other-account__name')}>Facebook</div>
                                    </div>
                                    <div className={cx('connect-other-account-box', 'connect-other-box-google')}>
                                        <div
                                            style={{ marginRight: '6px' }}
                                            className={cx('connect-other-account__icon')}
                                        >
                                            <i>
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </i>
                                        </div>
                                        <div className={cx('connect-other-account__name')}>Google</div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('haven-account-wrapper')}>
                                <h5>Bạn muốn tạo tại khoản mới?</h5>
                                <span ref={buttonSignUp} className={cx('button-sign-up')} href="">
                                    Đăng kí ngay
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className={cx('sign-in-box-right', 'col-md-6')}>
                        <div className={cx('connect-other-wrapper')}>
                            <div className={cx('connect-other-box', 'connect-other-box-facebook')}>
                                <div style={{ marginLeft: '6px' }} className={cx('icon-connect-other')}>
                                    <i>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </i>
                                </div>
                                <div className={cx('connect-content')}>
                                    <span>Đăng nhập bằng Facebook</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('connect-other-wrapper')}>
                            <div className={cx('connect-other-box', 'connect-other-box-google')}>
                                <div style={{ marginLeft: '6px' }} className={cx('icon-connect-other')}>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </i>
                                </div>
                                <div className={cx('connect-content')}>
                                    <span>Đăng nhập bằng Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('or-box')}>Or</div>
                </div>
            </div>
        </>
    );
}

export default FormUser;
