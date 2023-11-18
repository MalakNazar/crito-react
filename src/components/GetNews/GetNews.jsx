import '../GetNews/GetNews.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GetNews(){
 return(
<div className=' row navcolor '>
     <div className='col-12 p-5 '>
     <Navbar className="">
     
     <div className='col-6 ' >
      <h4 className='boxText'>Get News Updates By Signup</h4>
     </div>

              <div className='col-6 ' >
                    <div className='row boxholder'>
                          <div className='col-7 '>
                               < Form.Control type="text" className="form-control" placeholder="Username@domain.com " id="search-box"/>
                           </div>
                            <div className='col-4'>
                                 <Button type="submit" className='sub-1' id='subb-1'>Submit</Button>
                             </div>
                     </div>  
               </div>




      
    </Navbar>  
 </div>
</div>

 )
}

export default GetNews;