import './footer.scss'
import logo from '../../resourses/img/logo/logo.svg'
import facebook from '../../resourses/img/icons/facebook.svg'
import instagram from '../../resourses/img/icons/instagram.svg'
import telegram from '../../resourses/img/icons/telegram.svg'
import youtube from '../../resourses/img/icons/youtube.svg'
import copyright from '../../resourses/img/icons/copyright.svg'



const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<section className="footer__main">
					<div className="footer__head">
						<div className="footer__logo">
							<img src={logo} alt="logotypes" className='footer__logo-img' />
						</div>
					</div>
					<div className="footer__column">
						<div className="footer__main-item--icons">
							<ul>
								<li>
									<a href="!#">
										<img src={facebook} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={instagram} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={telegram} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={youtube} alt="" />
									</a>
								</li>
							</ul>
						</div>

						<div className="footer__main-item--navigation">
							<ul>
								<li>
									<a href="!#">Catalogue</a>
								</li>
								<li>
									<a href="!#">Contacts</a>
								</li>
								<li>
									<a href="!#">Sale</a>
								</li>
								<li>
									<a href="!#">Support</a>
								</li>
								<li>
									<a href="!#">News</a>
								</li>
								<li>
									<a href="!#">Marketplace Guide</a>
								</li>
							</ul>
						</div>

						<div className="footer__main-item info">
							<ul>
								<li>
									<a href="!#">Delivery and payment</a>
								</li>
								<li>
									<a href="!#">Guarantee</a>
								</li>
								<li>
									<a href="!#">Product return</a>
								</li>
								<li>
									<a href="!#">User Agreement</a>
								</li>
								<li>
									<a href="!#">Privacy Policy</a>
								</li>
							</ul>
						</div>

						<div className="footer__main-item information">
							<h2 className="footer__main-item title">Start selling today!</h2>
							<h3 className="footer__main-item subtitle">
							Join our marketplace and discover new opportunities for your business!
							</h3>
							<ul className='footer__main-item links'>
								<li>Millions of buyers are waiting for your products</li>
								<li>Increase sales and make more profit</li>
								<li>User-friendly control panel and growth tools</li>
							</ul>
							<div className="footer__main-item btn">
								<button className="footer__main-item button">Sell Your Item</button>
							</div>
						</div>
					</div>

					<div className="footer__bottom">
						<img src={copyright} alt="copyright" className='footer__bottom copyright' />
						<p className='footer__bottom text1'>Easybuy.2024</p>
						<p className='footer__bottom text2'>All rights reserved</p>
					</div>
				</section>
			</div>
		</footer>
	)
}

export default Footer;