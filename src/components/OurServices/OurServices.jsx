import '../OurServices/OurServices.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";


let Servlist = [
  {
    "id": 1,
    "desc": " Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo ",
    "title": "Business Advice"
  },
  {
    "id": 2,
    "desc": "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo",
    "title": "Startup Business"
  },
  {
    "id": 3,
    "desc": "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo",
    "title": "Financial Advice"
  },

  {
    "id": 4,
    "desc": "Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo",
    "title": "Risk Management"
  }
];

const OurServices = () => {
  const [cards, setcards] = useState([])
  useEffect(() => {
    setcards(Servlist)
  }, [])

  return (
    <>
      <section className="OurServices">

        <div className='row'>
          <div className='col-12  '>
            <div className='row'>
              <h5 className='tittle'>Our Services</h5>
              <h3 className=' weP'>We Provide The Best </h3>
              <h3 className=' weP1'>Services For Consulting</h3>
            </div>
            <div className='row  d-flex justify-content-center '>
              <div className='col-9 cardsStyle  '>
                <div className='row'>

                  {cards.map(card => {

                    return <div className='col-3 ' key={card.id}>
                      <Card style={{ width: '15rem' }}>
                        <Card.Body>
                          <hr className='hr'></hr>
                          <Card.Title className='CardTitle'> {card.title} </Card.Title>
                          <Card.Text className='CardText'>{card.desc} </Card.Text>
                          <Button className='button '>50</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  })}

                </div>

              </div>
            </div>

            <div className='row mb-5 d-flex justify-content-center '>
              <div className='col-2 '>
                <button className="btn4">
                  Browse Services
                  <div class="svg">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>





      </section>






    </>
  )

}

export default OurServices;