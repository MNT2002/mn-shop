import classNames from 'classnames/bind';
import styles from '../AoThun/style.module.scss';
import prd1 from '../AoThun/Prd-Pic/Prd1.png';
import prd2 from '../AoThun/Prd-Pic/Prd2.png';
import prd3 from '../AoThun/Prd-Pic/Prd3.png';
import prd4 from '../AoThun/Prd-Pic/Prd4.png';
import prd5 from '../AoThun/Prd-Pic/Prd5.png';
import prd6 from '../AoThun/Prd-Pic/Prd6.png';
import prd7 from '../AoThun/Prd-Pic/Prd7.png';
import prd8 from '../AoThun/Prd-Pic/Prd8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faInfo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
;


function AoThun() {
  return(
    <>
    <section className={cx("section-products")}>
		<div className={cx("container")}>
				<div className={cx("row justify-content-center text-center")}>
						<div className={cx("col-md-8 col-lg-6")}>
								<div className={cx("header")}>
										<h3>Featured Product</h3>
										<h2>Popular Products</h2>
								</div>
						</div>
				</div>
				<div className={cx("row")}>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-1" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      						<img src={prd1}></img>
												<ul>
														<li>
                              						<a href="#">
                               								 <i>
                             									 <FontAwesomeIcon icon={faCartShopping}/>
                                							  </i>
                                 					 </a>
                                  							</li>
														<li>
															<a href="#">
																	<i ><FontAwesomeIcon icon={faHeart}/>
																	</i>
															</a>
														</li>
									  <li>
										<a href="#">
											<i ><FontAwesomeIcon icon={faPlus}/>
											</i>
											</a>
										</li>
									  <li>
										<a href="#">
											<i >
												<FontAwesomeIcon icon={faInfo}/>
												</i>
												</a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Loser Machine Company 12 Ways Old Time</h3>
												<h4 className={cx("product-old-price")}>$79.99</h4>
												<h4 className={cx("product-price")}>$49.99</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-2" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd2}></img>
												<span className={cx("discount")}>15% off</span>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Carhartt WIP Short Sleeve Letterman</h3>
												<h4 className={cx("product-price")}>$49.95</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-3" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd3}></img>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>DKG Fresco Tee In Black</h3>
												<h4 className={cx("product-old-price")}>$69.99</h4>
												<h4 className={cx("product-price")}>$29.99</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-4" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd4}></img>
												<span className={cx("new")}>new</span>
												<ul>
															<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Carhartt WIP Short Sleeve Hanmore</h3>
												<h4 className={cx("product-price")}>$39.50</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-1" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd5}></img>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Carhartt WIP Short Sleeve Chase</h3>
												<h4 className={cx("product-old-price")}>$56.79</h4>
												<h4 className={cx("product-price")}>$36.99</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-2" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd6}></img>
												<span className={cx("discount")}>15% off</span>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Carhartt WIP Short Sleeve Nice Trip</h3>
												<h4 className={cx("product-price")}>$39.95</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-3" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd7}></img>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Carhartt WIP Short Sleeve Dream Factory</h3>
												<h4 className={cx("product-old-price")}>$79.99</h4>
												<h4 className={cx("product-price")}>$49.95</h4>
										</div>
								</div>
						</div>
						<div className={cx("col-md-6 col-lg-4 col-xl-3")}>
								<div id="product-4" className={cx("single-product")}>
										<div className={cx("part-1")}>
                      <img src={prd8}></img>
												<span className={cx("new")}>new</span>
												<ul>
														<li><a href="#"><i><FontAwesomeIcon icon={faCartShopping}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faHeart}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faPlus}/></i></a></li>
														<li><a href="#"><i ><FontAwesomeIcon icon={faInfo}/></i></a></li>
												</ul>
										</div>
										<div className={cx("part-2")}>
												<h3 className={cx("product-title")}>Ben Davis Vintage Logo T Shirt In Royal Blue</h3>
												<h4 className={cx("product-price")}>$23.65</h4>
										</div>
								</div>
						</div>
				</div>
		</div>
</section>
</>
  );
}

export default AoThun;
