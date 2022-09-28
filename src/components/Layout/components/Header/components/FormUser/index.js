import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './FormUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FormUser({ userIcon, userIconRes }) {
 
        const FormSignUpElement = useRef();
        const signUpCloseButton = useRef();
    
        const FormSignInElement = useRef();
        const signInCloseButton = useRef();
    
        const buttonSignIn = useRef();
        const buttonSignUp = useRef();
    
        const formLoggedOverlay = useRef()
        const formLogged = useRef();
        const signOutBtn = useRef();
        
    const [state, setState] = useState({
        news: [],
        username: '',
        password: '',
        email: '',
        usernamelogin: '',
        passwordlogin: '',
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //xử lý đăng kí
    const dataUser = useRef([]);

    const handleInsertSubmit = (event) => {
        event.preventDefault();

        axios
            .get('/api/usersdata')
            .then((res) => {
                const data = res.data;
                dataUser.current = data.usersData;
            })
            .catch((error) => console.log(error));

        // đặt thời gian delay để cho axios xử lí rồi ms chạy các đoạn code bên trong
        setTimeout(() => {
            const newItem = {
                UserName: state.username,
                Password: state.password,
                Email: state.email,
            };

            console.log(dataUser);

            var alreadyExist = dataUser.current.some((item, index) => newItem.UserName === item.UserName);
            //lặp qua tất cả tài khoản trong db kiểm tra có UserName = newItem.UserName đã tồn tại trong db hay chưa nếu đã tồn tại thì trả về true
            if (alreadyExist === false) {
                axios
                    .post('/api/insert', newItem)
                    .then((res) => {
                        let news = state.news;
                        news = [newItem, ...news];
                        setState({ news: news });
                    })
                    .catch((error) => console.log(error));

                alert('Đăng kí thành công!');
                localStorage.setItem('UserLogging', JSON.stringify({customer: {username: '' + newItem.UserName + ''}}));
                window.location.reload();
            } else {
                alert('Tài khoản đã tồn tại!');
            }
        }, 500);
    };
    //Xử lý đăng nhập
    const userLogging = useRef();
    function handleOnlogin(event) {
        event.preventDefault();

        const infoUser = {
            usernameLogin: state.usernamelogin,
            passwordLogin: state.passwordlogin,
        };
        // console.log(infoUser)

        axios
            .post('/api/pull', infoUser)
            .then((res) => {
                const newdata = res.data.newdata;
                userLogging.current = newdata;
            })
            .catch((error) => console.log(error));
        setTimeout(() => {
            // console.log(userLogging.current);
            
            //Kiểm tra mảng chứa dữ liệu cuả tài khoản được nhập vào nếu trong db có nó thì mảng sẽ có 1 phần tử ngược lại là 0 có phần tử nào và trả về false
            if (!userLogging.current.length) {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác');
            } else {
                localStorage.setItem('UserLogging', JSON.stringify({customer: {username: '' + infoUser.usernameLogin + ''}}));
                alert('Đăng nhập thành công');
                window.location.reload();
            }
        }, 500);
    }
    
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
    
    function showFormLogged() {
        formLoggedOverlay.current.style.display = 'block'
        formLogged.current.style.display = 'block';
    }
    function hideFormLogged() {
        formLoggedOverlay.current.style.display = 'none'
        formLogged.current.style.display = 'none';
    }

    useEffect(() => {
        userIcon.current.addEventListener('click', showFormSignIn);
        userIconRes.current.addEventListener('click', showFormSignIn);

        userIcon.current.addEventListener('click', showFormLogged)
        formLoggedOverlay.current.addEventListener('click', hideFormLogged)

        signUpCloseButton.current.addEventListener('click', hideFormSignUp);
        signInCloseButton.current.addEventListener('click', hideFormSignIn);

        buttonSignIn.current.addEventListener('click', showFormSignIn);
        buttonSignIn.current.addEventListener('click', hideFormSignUp);
        buttonSignUp.current.addEventListener('click', showFormSignUp);
        buttonSignUp.current.addEventListener('click', hideFormSignIn);

        signOutBtn.current.addEventListener('click', () => {
            localStorage.setItem('UserLogging', JSON.stringify({customer: {username: ''}}));
            window.location.reload();
        })

        if(localStorage.getItem('UserLogging') !== null) {
            if((JSON.parse(localStorage.getItem('UserLogging'))).customer.username !== '') {
                userIcon.current.removeEventListener('click', showFormSignIn);
                userIconRes.current.removeEventListener('click', showFormSignIn);
                userIconRes.current.style.display ='none'

            } else {
                userIcon.current.removeEventListener('click', showFormLogged)
                userIconRes.current.removeEventListener('click', showFormLogged);
            }
        } else {
            userIcon.current.removeEventListener('click', showFormLogged)
            
        }
    }, []);

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
                        <form onSubmit={handleInsertSubmit}>
                            <div className={cx('input-box')}>
                                <h3>Username</h3>
                                <input
                                    value={state.username}
                                    onChange={handleInputChange}
                                    type="text"
                                    className={cx('input-user-name')}
                                    name="username"
                                    placeholder="Nhập tên tài khoản"
                                    required
                                />

                                <h3>Password</h3>
                                <input
                                    value={state.password}
                                    onChange={handleInputChange}
                                    type="password"
                                    className={cx('input-password')}
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    required
                                />

                                <h3>E-mail</h3>
                                <input
                                    value={state.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    className={cx('input-email')}
                                    name="email"
                                    placeholder="Nhập địa chỉ email"
                                    required
                                />
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
                        <form onSubmit={handleOnlogin}>
                            <div className={cx('input-box')}>
                                <h3>Username</h3>
                                <input
                                    value={state.usernamelogin}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="usernamelogin"
                                    className={cx('input-user-name')}
                                    placeholder="Nhập tên đăng nhập"
                                />

                                <h3>Password</h3>
                                <input
                                    value={state.passwordLogin}
                                    onChange={handleInputChange}
                                    type="password"
                                    name="passwordlogin"
                                    className={cx('input-password')}
                                    placeholder="Nhập mật khẩu"
                                />
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
            
            <div ref={formLoggedOverlay}className={cx('form-logged-overlay')}></div>
            <div ref={formLogged} className={cx('form-logged')}>
                <nav className={cx('form-logged-wrapper')}>
                    <div className={cx('form-logged__title-wrapper')}>
                        <h1>
                            Xin chào
                            <span className={cx('form-logged__title')}>
                                {(localStorage.getItem('UserLogging') !== null ) ? (JSON.parse(localStorage.getItem('UserLogging')).customer.username) : ''}
                            </span>
                        </h1>
                    </div>
                    <ul className={cx('form-logged__list')}>
                        <li>
                            <a href="/thongtintaikhoan" className={cx('form-logged__link')}>
                                Tài khoản
                                <i className={cx('icon-angle-right')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/hotro" className={cx('form-logged__link')}>
                                Liên hệ hỗ trợ
                                <i className={cx('icon-angle-right')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </i>
                            </a>
                        </li>
                    </ul>

                    <ul className={cx('sign-out-box')}>
                        <li ref={signOutBtn} className={cx('sign-out-btn')}>
                            <span>Đăng xuất</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default FormUser;
