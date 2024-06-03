import React from 'react';
import HomeNavbar from './HomeNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {
  return (
    <div>
      <HomeNavbar/>
      <div className='container-fluid'>
        <div style={{marginTop:'8%'}} >
          <div id="mainCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
              <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#mainCarousel" data-slide-to="1"></li>
              <li data-target="#mainCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt23prodlp/banners/cakes_d_banners_5_20240528102018.jpg" className="d-block w-100" alt="Slide 1"/>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt23prodlp/banners/bright_flowers_d_banners_5_20240528102051.jpg" className="d-block w-100" alt="Slide 2"/>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt23prodlp/banners/flowers_d_banners_5_20240528101946.jpg" className="d-block w-100" alt="Slide 3"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div id="smallImagesCarousel" className="carousel slide mt-3" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/name_gifts_d_split_illustration_5_20240524115633.jpg" className="img-fluid" alt="Small Image 1"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/plants_d_split_illustration_5_20240524115700.jpg" className="img-fluid" alt="Small Image 2"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/hampers_d_split_illustration_5_20240524115716.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/flowers_d_split_illustration_5_20240521152715.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/hampers_m_split_illustration_5_20240521110559.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/personalized_gifting_d_split_illustration_5_20240524191111.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                </div>
              </div>
           
             
            </div>
          </div>
        </div>
        <div>
        <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/caricatures_d_split_illustration_5_20240524115616.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Caricature</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/personalized_gifting_d_split_illustration_5_20240524191111.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Personal</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/hampers_d_split_illustration_5_20240524115716.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Hampers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt11prodlp/banners/usa_d_split_illustration_5_20240510184633.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Send to US gifts</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt11prodlp/banners/uae_d_split_illustration_5_20240510184659.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Send to UAE</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt11prodlp/banners/cakes_d_split_illustration_5_20240510183802.jpg" className="card-img-top" alt="Card 3"/>
              <div className="card-body">
                <h5 className="card-title">Cake</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/flowers_d_split_illustration_5_20240521152715.jpg" className="card-img-top" alt="Card 2"/>
              <div className="card-body">
                <h5 className="card-title">Card </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/cakes_d_split_illustration_5_20240525091544.jpg" className="card-img-top" alt="Card 2"/>
              <div className="card-body">
                <h5 className="card-title">Card </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/name_gifts_d_split_illustration_5_20240524115633.jpg" className="card-img-top" alt="Card 2"/>
              <div className="card-body">
                <h5 className="card-title">Card </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          </div>
          <div className='container-fluid'>
          <div id="smallImagesCarousel" className="carousel slide mt-3" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/name_gifts_d_split_illustration_5_20240524115633.jpg" className="img-fluid" alt="Small Image 1"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/plants_d_split_illustration_5_20240524115700.jpg" className="img-fluid" alt="Small Image 2"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/hampers_d_split_illustration_5_20240524115716.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/flowers_d_split_illustration_5_20240521152715.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/hampers_m_split_illustration_5_20240521110559.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                  <div className="col-md-2">
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/personalized_gifting_d_split_illustration_5_20240524191111.jpg" className="img-fluid" alt="Small Image 3"/>
                  </div>
                </div>
              </div></div></div>
          
          </div></div>
        </div>
      </div>
      <footer className="bg-dark text-white p-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 Gift Shop Management System</p>
          <p></p>
        </div>
      </footer>
    </div>
    
  );
}

export default Home;
