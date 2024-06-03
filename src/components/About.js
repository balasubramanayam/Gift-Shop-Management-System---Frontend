import React from 'react';
import HomeNavbar from "./HomeNavbar";

const About = () => {
  return (
    <div>
    <HomeNavbar/>
      <header style={{marginTop:'6%'}} className="bg-dark text-white p-5 ">
        <div className="container-fluid ">
          <h1 className="text-center ">About Gift Shop Management System</h1>
        </div>
      </header>

      <div className="container-fluid mt-4">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus nunc. Quisque sagittis
          eleifend justo, vel congue nunc malesuada id. Integer nec ligula nec libero consequat sodales. Suspendisse
          potenti. Nulla interdum ante nec nibh rutrum condimentum.
        </p>

        <h2>Our Mission</h2>
        <p>
          Vestibulum tincidunt commodo risus, vitae rutrum velit faucibus nec. Proin consectetur, nulla at
          condimentum venenatis, nibh nunc mattis justo, eu fringilla sapien est eget arcu. Morbi euismod vitae
          odio eget varius.
        </p>
      </div>

      <section id="giftAds" className="container-fluid mt-5">
        <h2 className="text-center mb-4">Gift Ads</h2>
        <div className="card-deck">
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb-debMfNSSwiAKoU8J8A7ZWNzwuXhN8fIA&usqp=CAU" className="card-img-top" alt="Gift Ad 2" />
            <div className="card-body">
              <h5 className="card-title">Big sale</h5>
              <p className="card-text">dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus nunc. Quisque sagittis eleifend justo, vel congue nunc malesuada id. Integer nec ligula nec libero consequat sodales. Suspendisse potenti. Nulla interdum ante nec nibh rutrum condimentum</p>
            </div>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-vector/gradient-abstract-sales-banner_23-2149377120.jpg" className="card-img-top" alt="Gift Ad 1" />
            <div className="card-body">
              <h5 className="card-title">Big Sale</h5>
              <p className="card-text">dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus nunc. Quisque sagittis eleifend justo, vel congue nunc malesuada id. Integer nec ligula nec libero consequat sodales. Suspendisse potenti. Nulla interdum ante nec nibh rutrum condimentum</p>
            </div>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/free-vector/boxing-day-event-sale-banner-template_23-2149811928.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais" className="card-img-top" alt="Gift Ad 2" />
            <div className="card-body">
              <h5 className="card-title">Big sale</h5>
              <p className="card-text">dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus nunc. Quisque sagittis eleifend justo, vel congue nunc malesuada id. Integer nec ligula nec libero consequat sodales. Suspendisse potenti. Nulla interdum ante nec nibh rutrum condimentum</p>
            </div>
          </div>
         
          
        </div>
      </section>

      <footer className="bg-dark text-white p-5 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 Gift Shop Management System</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
