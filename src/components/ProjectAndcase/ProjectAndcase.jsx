import "../ProjectAndcase/ProjectAndcase.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";



let cardslis = [
  {
    "id": 1,
    "image": require('../../assets/images/Business.jpg'),
    "title": "Grow your business"
  },
  {
    "id": 2,
    "image": require('../../assets/images/Responsive.jpg'),
    "title": "Why your client needs a responsive website"
  },
  {
    "id": 3,
    "image": require('../../assets/images/educ.jpg'),
    "title": "Educate your employees to get better results"
  },
  {
    "id": 4,
    "image": require('../../assets/images/insight.jpg'),
    "title": "Business Insights is a important piece of your business"
  }
];

const ProjectAndcase = () => {

  const [cardes, setcards] = useState([])
  useEffect(() => {
    setcards(cardslis)
  }, [])


  return (
    <>
      <div className="row ProjectAndcase">
        <div className="col-10">
          <div className="row ">

            <h6 className="Project">Project & Case Studies </h6>
            <h4 className="bara2">Let's Looks Our Global Projects </h4>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <div className="row d-flex justify-content-between cards">

                {cardes.map(card => {
                  return <div className="col-md-6 d-flex justify-content-center flex-column align-items-center p-0 m-0 carda" key={card.id}>
                    <Card className="project-kort mt-3 m-0 p-0">
                      <Card.Img className='Projectimg' src={card.image} />
                      <Card.Body>
                        <Card.Title className="cart-tittle1"> {card.title} </Card.Title>
                      </Card.Body>
                    </Card>
                    <Button className="our-globa">Read More</Button>
                  </div>
                })}
                <Button className="AllProjects1"> All Resent Projects </Button>
              </div>
            </div>
          </div>



        </div>

      </div>
    </>

  )
}

export default ProjectAndcase;