import React from 'react'
import './aboutus.css'

// importing images
import Threeone from './images/aboutus/3.1.png'
import Threetwo from './images/aboutus/3.2.png'
import Threethree from './images/aboutus/3.3.png'

function Aboutus() {
    return (
        <div>
            <div class="row">
            <div class="aboutus">
            
                <h1 id='#abouth1'class='display-4 text-white ml-5 mt-5'>ABOUT THE APP</h1>
                <h3 id='#abouth3' class='text-white ml-5 mt-5'>Hire workers at your Fingertips</h3>
                <button class='btn btn-outline-light btn-lg aboutbtn ml-5 mt-5'>Download</button> <button class='aboutbtn btn btn-outline-light btn-lg ml-5 mt-5'>Learn More</button>
                
                <h3 class='mimg'>img pending here</h3>
            </div>
            </div>
            <div class='row'>
                <div id='aboutcard' class="card mt-2 p-3">
                    <div class="card-body" id='card1'>
                    <h1 class="card-title display-4">1. Hyperlocal category app</h1>
                    <p class="card-text">Wodo ia your one stop solution for multiple level working and hiring problems.We, at WODO, will help you find workers and work at your local level in pocket friendly budget. At hyperlocal level, we gurantee you work and workers. No need to go other than your local places for work. Find work and workers at your fingertips with WODO.</p>
                    </div>
                    <div class='card mt-3 mr-1'>
                        <div class='card-body'>
                        <div class="card-group">
                        <div class="card">
                          <img class="card-img-top" src="..." alt="Card image cap"/>
                        </div>  
                        <div class="card">
                          <img class="card-img-top ml-1 mr-1" src="..." alt="Card image cap"/>
                        </div>
                        <div class="card">
                          <img class="card-img-top" src="..." alt="Card image cap"/>
                        </div>
                        </div>
                       </div> 
                    </div>
                   
                    <div class='card p-3 mt-4' id='card2'>
                    <h1 class='card-title display-4'>2. Multiple section algorithm</h1>
                    <p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p>
                    </div>
                
                    <div class='card p-3 mt-4' id='card3'>
                    <h1 class='card-title display-4'>3. Features</h1>
                    <p>WODO is the easiest way for customers to search and hire workers at fingertips. WODO is packed with Customer-friendly features.<br/>
                    <p class='mt-4'>Customers, if hired workers earlier, can save the workers details to help them get referred in future.We have made it easy for our customers, so that they need not worry about future recruitments.</p>
                    <br/>
                    <p class='mt-4'>We have made it even simpler for customers by taking a step further.The history of the workers previously hired get saved and Customers can decide whether to hire the corresponding workers or not by viewing their history.</p>
                    <br/>
                    <p class='mt-4'>We have also got you covered regarding communication between customers and workers.WODO has a feature packed wallet which can be recharge to communicate via calls with workers.Calls can be made through the app only.</p>
                    </p>

                      <div class="row justify-content-center">
                              <div class="col" >
                                <img src={Threeone} id='threeone' class="card-img-top" alt="..."/>
                              </div>
                              <div class="col" id='threetwo'>
                                <img src={Threetwo} id='threeone' class="card-img-top" alt="..."/>
                              </div>
                              <div class="col">
                                <img id='threethree' src={Threethree} class="card-img-top" alt="..."/>
                              </div>
                        </div>      
                    </div>    
                    
                    <div class='card img-fluid p-3 mt-4' id='card4'>
                    <h1 class='card-title display-4'>4. Call rates</h1>
                    <p>While we are providing you with wallet, we also
                    <br/>provide a budget friendly call services at a
                    <br/>minimal call rates.Call ratres will be <br/>as follows Rs.2 for the initial minutes and <br/>Rs. 0.5 for subsequent minutes                    
                    </p>
                    </div>
                    
                </div>
            </div>
            
           
                
            </div>
    )
}

export default Aboutus
