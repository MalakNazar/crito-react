import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../components/News/News.css'
import { useEffect, useState ,useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../components/News1/News1.css'
import Paginate from '../../Paginate';



const News1 = () => {
  const navigate=useNavigate()
    const url='https://win23-assignment.azurewebsites.net/api/articles';
    const [newscards, setnewscards] = useState([])

    useEffect(() => {
      (async()=>{
        await fetch(url)
        .then(res=>res.json())
        .then(data=>setnewscards(data))
        .catch(e=>console.log(e.message))
      })()
  
    }, [])


    const handelClick=(id)=>{
        navigate(`/page3/${id}`)
    }
   

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newscards.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => {
       setCurrentPage(pageNumber);
 
   };
   const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
    if (currentPage !== Math.ceil(newscards.length / postsPerPage)) {
       setCurrentPage(currentPage + 1);
    }
 };



    return(
     <>
       <div className='row  d-flex justify-content-center '>
        <div className='col-4  NewAr'>
        <h1>News & Articles </h1>
        </div>
       </div>
      <div className='row d-flex justify-content-center' >
        <div className='col-10 '>
          <h3 className='OurNews'>Our News & Articles</h3>
          <div className='row newsholder'>
            {currentPosts.map(card => {
 
            return <div className="col-4  newsholder " key={card.id}  onClick={()=>handelClick(card.id)}>
                <Card className="news-kort1" style={{ width: '22rem' }}>
                  <Card.Img className='newsimg' src={card.imageUrl} style={{ height: '200px' }} />
                  
                  <Card.Body> 
                    <Card.Title className="cart-tittle1"> {card.category} </Card.Title>
                    <Card.Title className="cart-desc"> {card.title} </Card.Title>
                    <Card.Title className="cart-para"> {card.content} </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            })}
              <Paginate
                  postsPerPage={postsPerPage}
                  totalPosts={newscards.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}

              />
          </div>
        </div>
      </div>
     </>

    )} 

    export default News1;