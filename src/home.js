import React from 'react'
import Aboutus from './aboutus'
import Blogs from './blogs';
import './home.css'

//importing pictures 
import Imp from './imp for worker.png';
import Stat from './images/stats.png';
import Phone from './images/phone.png'



const Home = () => {

  return (
     <div class='container-fluid'>
        
     <nav class="navbar fixed-top navbar-expand-lg navbar-light">
     <a class="navbar-brand text-dark" href="/">WODO WORKER</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
           <li class="nav-item active mr-5">
            <a href="#aboutus" className="text-dark">ABOUT US</a>
           </li>
           <li class="nav-item active mr-5">
             <a href='#blogs' className="text-dark">BLOGS</a>
           </li>
           <li class="nav-item active mr-5">
             <a to="/" className="text-dark">WORK WITH US</a>
           </li>
           <li class="nav-item active mr-5">
              <a to="/" className="text-dark">GO TO APP</a>
           </li>
      </ul>
    </div>
  </nav>
      
      <div class="row controw">
      <h1 className="h1">Try out our</h1><br/>
      <h1 id="h2">awesome mobile</h1><br/>
      <h1 id="h3">application</h1><br/>    
      <button className="btn btnn btn-outline-dark text-light">Download</button>
        <img id='mobilewodo' src={Phone} alt='phone' />
      </div>

      <div class="row mt-5">
      <div id='card'class="card p-4">
      <div class="card-deck">
         <div class="card ml-2">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
         <div id='card' class="card">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
         <div id='card'class="card">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
     </div>
    </div>
      </div>

      <div class="row justify-content-center mt-5 cont2">
        <img id='imgstats' src={Stat} alt='stat image'/>
      </div>

      <div class="row mt-5">
      <div id='card' class="card p-4">
      <div class="card-deck">
         <div id='card' class="card ml-2">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
         <div id='card' class="card">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
         <div id='card' class="card">
                 <img id='card-img' class="card-img-top text-center" src="...." alt="Card image cap"/>
         <div class="card-body">
             <h3 class="card-title text-center">WHAT IS WODO ?</h3>
             <p class="card-text text-center">We have made a simple but powerful step with WODO towards building the gap between Recruiters and Employees.<br/>This is the first platform connecting workers with recruiters at Hyperlocal level. We at WODO, are Providing you with employees fitting your requirements while keeping your budget in account.</p>
         </div>
         </div>
     </div>
    </div>
      </div>

      <div class="row mt-5">
      <img class='imp' alt='imp message' src={Imp} />
      </div>
  
       <footer id="foots" class="footer mt-5">
          <div class="row justify-content-center footrow">
            <div class="col-4">
              <h4 class="text-light text-center mt-auto">Join us</h4>
            </div>
            <div class="col-4">
              <h4 class="text-light text-center">Work with us</h4>
            </div>
            <div class="col-4">
              <h4 class="text-light text-center">a</h4>
            </div>
          </div>

          <div class="row justify-content-center bg-light">
            <div class="col mt-5 d-flex justify-content-center">
              <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
            <div class="col d-flex justify-content-center mt-5">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            
            </div> 
            <div class="col d-flex justify-content-center mt-5">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
          </div>

          <div class="row justify-content-center bg-light">
            <div class="col mt-3 d-flex justify-content-center">
              <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
            <div class="col d-flex justify-content-center mt-3">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            
            </div> 
            <div class="col d-flex justify-content-center mt-3">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
          </div>

          <div class="row justify-content-center bg-light">
            <div class="col mt-3 d-flex justify-content-center">
              <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
            <div class="col d-flex justify-content-center mt-3">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            
            </div> 
            <div class="col d-flex justify-content-center mt-3">
            <h6 class="fh6">We have made a simple but<br/>powerful step with</h6>
            </div>
          </div>

          <div class="row justify-content-center mt-5">
          <i class="devicon-linkedin-plain colored icons mr-5"></i>
          <i class="devicon-google-plain colored icons mr-5"></i>
          <i class="devicon-facebook-plain colored icons mr-5"></i>
          </div>
          <div class="row justify-content-center mr-3">
            <span>Joins us on social networking sites.</span>
          </div>
       </footer>

       <div class='row' id='aboutus'>
        <Aboutus/>
       </div>

       <div class='row' id='blogs'>
        <Blogs />
       </div>
     
  
  </div> 
     

    )
}

export default Home
