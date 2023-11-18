
import Card from 'react-bootstrap/Card';
import '../../components/News/News.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const News = () => {
  
  const handleDragStart = (e) => e.preventDefault();
  
  const url = 'https://win23-assignment.azurewebsites.net/api/articles';
  const [newscards, setnewscards] = useState([])

  useEffect(() => {
    (async () => {
      await fetch(url)
        .then(res => res.json())
        .then(data => setnewscards(data))
        .catch(e => console.log(e.message))
    })()

  }, [])

  const mystyle = {
    color: "black",
    backgroundColor: "#ECE4E4",
    padding: "10px",
    marginLeft: "60rem",
    fontFamily: "Arial",

  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
  return (
    <>
      <div className='row d-flex justify-content-center'>
        <div className='col-10'>
          <h5 className=' Article'> Artticle & News </h5>
          <h3 className='getNews'> Get Every  Single Articles & News</h3>
          <Link className="BrowesTeam3" style={mystyle} to="/news">Browse Articles</Link>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-10 '>
          <div className='row newsholder'>
           
          <AliceCarousel 
            mouseTracking  
            responsive={responsive}
            controlsStrategy="alternate">
                     {newscards.map((card,i)=>{
                     
                      return (<div className="item"  key={card.id} onDragStart={handleDragStart} role="presentation" data-value={i} >
                      <Card className="news-kort1" style={{ width: '22rem' }}>
                        <Card.Img className='newsimg' src={card.imageUrl} style={{ height: '200px' }} />
                        <Card.Body>
                          <Card.Title className="cart-tittle1"> {card.category} </Card.Title>
                          <Card.Title className="cart-desc"> {card.title} </Card.Title>
                          <Card.Title className="cart-para"> {card.content} </Card.Title>
                        </Card.Body>
                      </Card>
      
                    </div>)
                     })
    
            }
        </AliceCarousel>

          </div>
        </div>
      </div>

    </>


  )
}
export default News;