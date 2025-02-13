import './recommendations.scss';
import shoes from '../../../resourses/img/goods/shoes_2.png'
import jacket from '../../../resourses/img/goods/jacket.jpg'
import like from '../../../resourses/img/icons/active_favorite.svg'

const Recommendations = () => {
	return (
		<article className="article">
			<div className="container">
				<div className="article__title">
					<h2 className="article__subtitle">Recommendations</h2>
					<button className="article__button">Shop now</button>
				</div>
			
			<section className="section__cards">
				<div className="section__card">
					<div className="section__card-top">
						<div className="section__card-interactive">
							<span className="section__card-sale">On Sale</span>
							<a href="!#" className="section__card-favorite">
								<img src={like} alt="favorite" />
							</a>
						</div>
						<div className="section__card-image">
							<img src={shoes} alt="" className="section__card-img" />
						</div>
						<div className="section__card-image hover">
							<img src={jacket} alt="" className="section__card-img" />
						</div>
						<div className="section__card-rating">
							<span>*****</span>
						</div>
					</div>
					<div className="section__card-bottom">
						<div className="section__container-bottom">
							<h2 className="section__card-title">RS-X Reinvention sports shoes</h2>
							<h3 className="section__card-subtitle">Puma</h3>
							<p className="section__card-price">$ 55</p>
							<div className="section__card-buy">
								<button className="section__card-add">Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section__card">
					<div className="section__card-top">
						<div className="section__card-interactive">
							<span className="section__card-sale">On Sale</span>
							<a href="!#" className="section__card-favorite">
								<img src={like} alt="favorite" />
							</a>
						</div>
						<div className="section__card-image">
							<img src={shoes} alt="" className="section__card-img" />
						</div>
						<div className="section__card-rating">
							<div className="section__card-rating items">
								<input id="section__rating-5" type="radio" className="section__card-rating--label" name="section-rating" value="5"/>
								<label htmlFor="section__rating-5" className="section__card-rating label"></label>
								<input id="section__rating-4" type="radio" className="section__card-rating--label" name="section-rating" value="4"/>
								<label htmlFor="section__rating-4" className="section__card-rating label"></label>
								<input id="section__rating-3" type="radio" className="section__card-rating--label" name="section-rating" value="3"/>
								<label htmlFor="section__rating-3" className="section__card-rating label"></label>
								<input id="section__rating-2" type="radio" className="section__card-rating--label" name="section-rating" value="2"/>
								<label htmlFor="section__rating-2" className="section__card-rating label"></label>
								<input id="section__rating-1" type="radio" className="section__card-rating--label" name="section-rating" value="1"/>
								<label htmlFor="section__rating-1" className="section__card-rating label"></label>
							</div>
						</div>
					</div>
					<div className="section__card-bottom">
						<div className="section__container-bottom">
							<h2 className="section__card-title">RS-X Reinvention sports shoes</h2>
							<h3 className="section__card-subtitle">Puma</h3>
							<p className="section__card-price">$ 55</p>
							<div className="section__card-buy">
								<button className="section__card-add">Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section__card">
					<div className="section__card-top">
						<div className="section__card-interactive">
							<span className="section__card-sale">On Sale</span>
							<a href="!#" className="section__card-favorite">
								<img src={like} alt="favorite" />
							</a>
						</div>
						<div className="section__card-image">
							<img src={shoes} alt="" className="section__card-img" />
						</div>
						<div className="section__card-rating">
							<span>*****</span>
						</div>
					</div>
					<div className="section__card-bottom">
						<div className="section__container-bottom">
							<h2 className="section__card-title">RS-X Reinvention sports shoes</h2>
							<h3 className="section__card-subtitle">Puma</h3>
							<p className="section__card-price">$ 55</p>
							<div className="section__card-buy">
								<button className="section__card-add">Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section__card">
					<div className="section__card-top">
						<div className="section__card-interactive">
							<span className="section__card-sale">On Sale</span>
							<a href="!#" className="section__card-favorite">
								<img src={like} alt="favorite" />
							</a>
						</div>
						<div className="section__card-image">
							<img src={shoes} alt="" className="section__card-img" />
						</div>
						<div className="section__card-rating">
							<span>*****</span>
						</div>
					</div>
					<div className="section__card-bottom">
						<div className="section__container-bottom">
							<h2 className="section__card-title">RS-X Reinvention sports shoes</h2>
							<h3 className="section__card-subtitle">Puma</h3>
							<p className="section__card-price">$ 55</p>
							<div className="section__card-buy">
								<button className="section__card-add">Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
		</article>
	)
}

export default Recommendations;