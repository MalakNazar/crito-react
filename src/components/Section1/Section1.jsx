import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import mainimg from '../../assets/images/mainimg.svg';
import '../Section1/Section1.css'
import { Container } from 'react-bootstrap';

function Section1(){

  return(
  <div className='firstSec'>
    <div className="row p-0 m-0 ">
    <div className="col-8 p-0 m-0 ">
      <div className="row p-0 m-0  " >
        <div className=' col-12 we-provide-main '>
              <h1 className=" we-provide" > We Provide The  </h1>
              <h1 className=" we-provide1" > Best Business </h1>
              <h1 className=" we-provide2" >  Solutions </h1>
             <p className="we-provide3">Etablish your vision and value Proposition and turn into testable prototypes</p> 
          </div>
     </div>
     <div className="row">
     <div className="col-6  d-flex justify-content-end" >
        <div className="col-6">
            <button className="btn2"> 
                   Get Consulting  <div class="svg">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
            </button>
             
        </div>

     </div>
     <div className="col-6 ">
        <div className="col-6 pad-t">
            <button className="btn3"> 
            
                 learn more<div class="svg">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                </button>
          
        </div>
     </div>

     </div>

     </div>
     <div className="col-4 we-provide-main1 " > 
       <div className="">
        <img src={mainimg} className='mainimg1' />
      </div>
      </div>
   </div>
   </div>
  )


}
   export default Section1;