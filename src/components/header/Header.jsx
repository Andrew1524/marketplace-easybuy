import './header.scss';
import logo from '../../resourses/img/logo/logo.svg'
import fingerPrint from '../../resourses/img/icons/fingerprint.svg';
import iconLike from '../../resourses/img/icons/favorite.svg';
import iconCard from '../../resourses/img/icons/shopping.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logo} alt="logotypes" />
					</div>
					<nav className="header__nav">
						<ul className='header__info'>
							<li>
								<a href="!#">Catalogue</a>
							</li>
							<li>
								<a href="!#">Sale</a>
							</li>
						</ul>
						<div className="header__search">
							<label className='header__search-field' htmlFor="">
								<input className="header__search-input" type="search" placeholder="Search"/>
								<button className='header__search-button'>Search</button>
							</label>
						</div>
						<div className="header__icons">
							<ul>
								<li>
									<a href="!#">
										<img src={iconLike} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
									<img src={fingerPrint} alt="" />
									</a>
								</li>
								<li>
									<a href="!#">
										<img src={iconCard} alt="" />
									</a>
								</li>
							</ul>
							<div className="header__sing">
								<button className='header__button-sing'>Sing Up</button>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;