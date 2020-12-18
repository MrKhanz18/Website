import React from 'react'
import './blogs.css'
import blog1 from './images/aboutus/2.png'

function Blogs() {
    return (
        <div>
              <div class='blogs'>
                    <h2 id='head' class='text-white'>Check out our</h2>
                    <h1 id='hblog' class='display-1 text-white'><b>BLOG</b></h1>

                    <span id='span'>Image png will be here</span>
              </div>

              <div class='card p-2' id='br'>
                    <div class='card-deck mt-3'>
                    <div class="row br justify-content-center">    
        
                        <div class="col-md-4">
                            <div class="card w-100 h-100" id='c1'>
                                <img src={blog1} class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-img-overlay">
                                <h2 class="card-title text-left text-light ml-3">Multiple section algorithm</h2>
                                <p class="card-text text-left text-light ml-3"><p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p></p>
                            </div>
                        </div>  
        
                        <div class="col-md-4">
                            <div class="card h-100 w-100" id='c2'>
                            <img src={blog1} class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-img-overlay">
                                <h2 class="card-title text-left text-light ml-3">Multiple section algorithm</h2>
                                <p class="card-text text-left text-light ml-3"><p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p></p>
                            </div>
                        </div> 
                    
                    </div>
                    </div>
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
                    <h4 class="text-light text-center">Link</h4>
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
        </div>
    )
}

export default Blogs
