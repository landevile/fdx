import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../dist/images/logo.png"
import banner_1 from "../dist/images/banner_1.png"
import banner_2 from "../dist/images/banner_2.png"
import banner_3 from "../dist/images/banner_3.png"
import banner_4 from "../dist/images/map.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<header className="py-4">
	<div className="container">
        <div id="logo">
          <h1> <a href="index.html"><img src={logo} />whoslate</a></h1>
				
			</div>

		<nav className="d-lg-flex">

			<label for="drop" className="toggle"><span className="fa fa-bars" aria-hidden="true"></span></label>
			<input type="checkbox" id="drop" />
			<ul className="menu mt-2 ml-auto">
				<li className=""><a href="index.html#about">About Us</a></li>
				<li className=""><a href="#">Features</a></li>
				<li className=""><a href="#">Plans</a></li>
				<li className=""><a href="contact.html">Contact</a></li>
			</ul>
			<div className="login-icon mt-1 ml-lg-3">
				<a className="user" href="index.html#popup3"> Login</a>
			</div>
			<div className="sign-icon mt-1 ml-lg-3">
				<a className="user" href="index.html#popup4"> Sign Up</a>
			</div>
		</nav>
		<div className="clear"></div>
	</div>
</header>

<div className="banner" id="home">
	<div className="container">
		<div className="row banner-text">
			<div className="slider-info col-lg-6">
				<div className="banner-info-grid mt-lg-5">
					<h2>Every night, any time we are waiting for you. </h2>
					<p>Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula.
					Nulla ut sollicitudin velit.</p>
				</div>
				<a className="btn mr-2" href="index.html#popup4">Start a free trial </a>
				<a className="btn-2 mr-2" href="index.html#popup2">Watch video </a>
			</div>
			<div className="col-lg-6 col-md-8 mt-lg-0 mt-sm-5 mt-3 banner-image text-lg-center">
      <img src={banner_1} alt="" className="img-fluid"/>
			</div>
		</div>
	</div>
</div>

<section className="py-5">
	<div className="container py-md-3 text-center">
		<div className="col-lg-6 mx-auto mt-lg-5 about-text">
			<h3>Amazing features to convince  you to use our platform</h3>
			<p className="mt-2">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel.</p>
		</div>
	</div>
</section>

<section className="about py-5" id="about">
	<div className="container py-lg-5 py-sm-3">
		<div className="row">
					<div className="about-text col-lg-5 col-md-7 mt-lg-5">
						<h3>Interact With Your Users On Every Single Platform</h3>
						<p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel,
					ultrices in ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm.</p>
						<a className="act_btn mt-3" href="index.html#popup3">Get started</a>
					</div>
			<div className="col-lg-7 col-md-5 about-img">
            <img src={banner_2} alt="" className="img-fluid" />
			</div>
		</div>
	</div>
			
	<div className="container py-lg-5 py-sm-3">
		<div className="row">
			<div className="col-lg-7 col-md-5 about-img">
            <img src={banner_3} alt="" className="img-fluid" />
			</div>
					<div className="col-lg-5 col-md-7 mt-lg-5 about-text">
						<h3>Interact With Your Users On Every Single Platform</h3>
						<p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel,
					ultrices in ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm.</p>
						<a className="act_btn mt-3" href="index.html#popup3">Get started</a>
		    </div>
		</div>
	</div>
</section>

<section className="choose py-5" id="services">
	<div className="container py-md-3">
		<h3 className="heading text-center mb-5"> Choose Plans & Prices</h3>
		<div className="feature-grids text-center row">
			<div className="col-lg-3 col-sm-6">
				<div className="f1 icon1 p-4">
					<div className="icon">
						
					</div>
					<h3 className="my-3">Basic Plan</h3>
					<p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
				<div className="f1 icon2 p-4">
					<div className="icon">
					
					</div>
					<h3 className="my-3">Night Bravery</h3>
					<p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
				<div className="f1 icon3 p-4">
					<div className="icon">
						
					</div>
					<h3 className="my-3">Iron Howl Plan</h3>
					<p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
				<div className="f1 icon4 p-4">
					<div className="icon">
						
					</div>
					<h3 className="my-3">Enterprise Plan </h3>
					<p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="video py-5" id="video">
	<div className="container">
		<div className="inner-sec-w3ls py-lg-5 py-3">
			<div className="row">
				<div className="col-lg-6 video-right px-lg-5 px-2">
					<h3 className="tittle-w3">What's our clients are saying.</h3>
					<p className="mt-4">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
				</div>
				<div className="col-lg-6 video-img mt-lg-0 mt-4">
              <img src={banner_4} alt="" className="img-fluid" />
				</div>		
			</div>
		</div>
	</div>
</section>
	
<section className="partners py-5" id="partners">
	<div className="container py-md-3">
		<h3 className="heading mb-5">Our Awesome Partners</h3>
		<div className="inner-sec-w3ls">
			<div className="sponsers-icon text-center">
				<ul className="list-unstyled partners-icon row">
					<li className="col-md-2 col-4">
						<span className="fa fa-codepen" aria-hidden="true"></span>
					</li>
					<li className="col-md-2 col-4 border-left border-right">
						<span className="fa fa-lastfm" aria-hidden="true"></span>
					</li>
					<li className="col-md-2 col-4 border-right">
						<span className="fa fa-codiepie" aria-hidden="true"></span>
					</li>
					<li className="col-md-2 col-4 border-right mt-md-0 mt-3">
						<span className="fa fa-drupal" aria-hidden="true"></span>
					</li>
					<li className="col-md-2 col-4 border-right mt-md-0 mt-3">
						<span className="fa fa-dashcube" aria-hidden="true"></span>
					</li>
					<li className="col-md-2 col-4 mt-md-0 mt-3">
						<span className="fa fa-skyatlas" aria-hidden="true"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<footer className="footer-emp-w3ls py-5">
	<div className="container pt-lg-3">
		<div className="row footer-top">
			<div className="col-lg-4 col-sm-6 footer-grid-wthree">
				<h4 className="footer-title text-uppercase mb-4">Who We Are</h4>
				<div className="contact-info">
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ipsum doloremque elit laudantium, totam rem
						aperiam, eaque ipsa quae. Excepteur ut occaecat proident, sunt voluptatem et accusantium doloremque elit dolor sit amet.</p>
					<h4 className="mt-3">Trusted by more than 1000+ people</h4>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6 footer-grid-wthree mt-sm-0 mt-4">
				<h3 className="footer-title text-uppercase mb-4">Latest News</h3>
				<div className="contact-info">
					<div className="footer-style-w3ls">
						<h4 className="mb-2"><span className="fa mr-1 fa-twitter"></span> Sed ut piciatis unde natus</h4>
						<p>Sed ut perspiciatis unde omnis iste natus error sit volupta....</p>
						<p className="date">23 Nov 2018.</p>
					</div>
					<div className="footer-style-w3ls mt-3">
						<h4 className="mb-2"><span className="fa mr-1 fa-twitter"></span> Modi tempra incunt sit</h4>
						<p>Sed ut perspiciatis unde omnis iste natus error sit volupta....</p>
						<p className="date">24 Nov 2018.</p>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
				<h3 className="footer-title text-uppercase mb-4">Contact Us</h3>
				<div className="contact-info">
					<div className="footer-style-w3ls">
						<h4 className="mb-2"> <span className="fa mr-1 fa-map-marker"></span> Location</h4>
						<p>Marketing Agency, 5th cross, 4th building, New York City.</p>
					</div>
					<div className="footer-style-w3ls my-3">
						<h4 className="mb-2"><span className="fa mr-1 fa-phone"></span> Phone</h4>
						<p>+121 098 8907 9987</p>
					</div>
					<div className="footer-style-w3ls">
						<h4 className="mb-2"><span className="fa mr-1 fa-envelope-open"></span> Email</h4>
						<p><a href="mailto:info@example.com">info@example.com</a></p>
					</div>
				</div>
			</div>
			<div className="col-lg-2 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
				<h3 className="footer-title text-uppercase mb-4">Quick Links</h3>
				<ul className="links list-unstyled">
					<li>
						<a className="" href="index.html#home"> Home</a>
					</li>
					<li>
						<a className="" href="index.html#about"> About Us</a>
					</li>
					<li>
						<a className="" href="index.html#services"> Services</a>
					</li>
					<li>
						<a className="" href="index.html#process">Process</a>
					</li>
					<li>
						<a className="" href="index.html#portfolio">Portfolio</a>
					</li>
					<li>
						<a className="" href="contact.html">Contact us</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<div className="copy-right-top border-top">
	<p className="copy-right text-center py-4">&copy; 2019 Whoslate. All Rights Reserved | Design by
		<a href="http://atuo.in/"> Atuo.in</a>
	</p>
</div>
	
<div className="move-top text-right">
	<a href="index.html#home" className="move-top"> 
		<span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
	</a>
</div>

<div id="popup1" className="popup-effect">
	<div className="popup">
		<img src="" alt="Popup Image" className="img-fluid" />
		<p className="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
			laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
			sunt explicabo.</p>
		<a className="close" href="index.html#">&times;</a>
	</div>
</div>

<div id="popup2" className="popup-effect">
	<div className="popup">
		<iframe src="https://player.vimeo.com/video/188673754"></iframe>
		<p className="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
			laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
			sunt explicabo.</p>
		<a className="close" href="index.html#">&times;</a>
	</div>
</div>

<div id="popup3" className="popup-effect">
	<div className="popup">
		<div className="login px-sm-4 mx-auto mw-100">
			<h5 className="text-center mb-4">Login to Whoslate</h5>
			<form action="#" method="post">
				<div className="form-group">
					<label className="mb-2">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""/>
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group">
					<label className="mb-2">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required=""/>
				</div>
				<button type="submit" className="btn btn-primary submit mt-2">Login</button>
				<p className="text-center mt-2">
					<a href="index.html#popup4"> Don't have an account?</a>
				</p>
			</form>
		</div>

		<a className="close" href="index.html#">&times;</a>
	</div>
</div>

<div id="popup4" className="popup-effect">
	<div className="popup">
		<div className="login px-sm-4 mx-auto mw-100">
			<h5 className="text-center mb-4">Register Now</h5>
			<form action="#" method="post">
				<div className="form-group">
					<label>Full Name</label>
					<input type="text" className="form-control" id="validationDefault01" placeholder="" required=""/>
				</div>
				<div className="form-group">
					<label>Email Address</label>
					<input type="email" className="form-control" id="validationDefault02" placeholder="" required=""/>
				</div>
				<div className="form-group">
					<label className="mb-2">Password</label>
					<input type="password" className="form-control" id="password1" placeholder="" required=""/>
				</div>
				<div className="form-group">
					<label>Confirm Password</label>
					<input type="password" className="form-control" id="password2" placeholder="" required=""/>
				</div>

				<button type="submit" className="btn btn-primary submit">Register</button>
				<p className="text-center mt-3">
					<a href="index.html#">By clicking Register, I agree to your terms</a>
				</p>
			</form>
		</div>
		<a className="close" href="index.html#">&times;</a>
	</div>
</div>
  </Layout>
)

export default IndexPage
