import './header.scss';
import logo from '../../resourses/img/logo/logo.svg'
import search from '../../resourses/img/icons/search.svg'
import iconUser from '../../resourses/img/icons/user.svg';
import iconLike from '../../resourses/img/icons/favorite.svg';
import iconCard from '../../resourses/img/icons/shopping.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logo} alt="logotype" />
					</div>
					<nav className="header__nav">
						<div className="header__search">
							<input className="header__search-input" type="text" placeholder="Search"/>
						</div>
						{/* <div className="header__info"> */}
							<ul className='header__info'>
								<li>
									<a href="!#">Catalogue</a>
								</li>
								<li>
									<a href="!#">Sale</a>
								</li>
								<li>
									<a href="!#">Support</a>
								</li>
							</ul>
						{/* </div> */}
						<div className="header__button">
							<button className="header__button-btn" > Get Started</button>
						</div>
						<div className="header__icons">
							<ul>
								<li>
									<a href="!#">
										<img src={iconUser} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={iconLike} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={iconCard} alt="" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;