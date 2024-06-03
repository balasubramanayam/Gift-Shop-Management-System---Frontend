import React from 'react'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <div>
      <Navbar/>
      
      <div className='container-fluid'>
        <div style={{marginTop:'8%'}} >
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
        <div  className="row">
          <div className="col-md-4 mb-5 ">
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
          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt11prodlp/banners/usa_d_split_illustration_5_20240510184633.jpg" className="card-img-top" alt="Card 1"/>
              <div className="card-body">
                <h5 className="card-title">Send to US gifts</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
          
    
          
          </div>
        </div>
      </div>
      
   
    
      <footer className="bg-dark text-white p-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 Gift Shop Management System</p>
          <p></p>
        </div>
      </footer>
    </div>
     
  )
}

export default Dashboard
