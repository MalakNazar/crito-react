import '../AboutCompany/AboutCompany.css'
import Button from 'react-bootstrap/Button';
import Daria from '../../assets/images/Daria.jpg'
import Card from 'react-bootstrap/Card';


function AboutCompany() {



  return (
    <div className="row AboutStyle ">

      <div className="col-5 ">
        <div className=''>
          <img src={Daria} className='imge'></img>
        </div>

        <Card className="kart" style={{ width: '16rem' }}>
          <Card.Body className='kart1 '>
            < h6 className='cartT'  >Samantha Brown,</h6>
            <h6 className='CardTitle1' >Founder</h6>
            <Card.Text className='card-desc'>
              'Some quick example text to build on the card title and make up the
              bulk of the.'
            </Card.Text>

          </Card.Body>
        </Card>


      </div>

      <div className="col-4">
        <h4 className='Abouttitle'>About Company </h4>
        <h1 className='Business'>We Are Business </h1>
        <h1 className='Business1'>Consulting & Credit  </h1>
        <h1 className='Business2'>Repair Experts </h1>

        <p className='decrit'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. elit.Lorem ipsum, </p>
        <p className='decrit1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. elit.Lorem ipsum, </p>


        <Button variant="dark" className='learnmore'>Learn More


        </Button>








        <Button variant="outline introVideo">Intro Video

          <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path></g></svg>

        </Button>
      </div>
    </div>



  )


}

export default AboutCompany