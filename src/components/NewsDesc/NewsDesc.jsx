import '../NewsDesc/NewsDesc.css'
import Container from 'react-bootstrap/Container';
import mainimg from '../../assets/images/news1.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";


const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};


function NewsDesc() {
 
  let catArry=[];
  const urlmain = `https://win23-assignment.azurewebsites.net/api/articles`;
  const [newsMain, setnewsMain] = useState([])




  const { id } = useParams();
  const url = `https://win23-assignment.azurewebsites.net/api/articles/${id}`;
  const [newscard, setnewscard] = useState({})

  useEffect(() => {
    (async () => {
      await fetch(url)
        .then(res => res.json())
        .then(data => setnewscard(data))
        .catch(e => console.log(e.message))
    })()



  }, [])

  useEffect(() => {
    (async () => {
      await fetch(urlmain)
        .then(res => res.json())
        .then(data => setnewsMain(data))
        .catch(e => console.log(e.message))
    })()

  }, [])

  

  



    newsMain.map(item=>{
      let cat={
         'id':item.id,
         'catName':item.category,
         'catCount':1
      }
      const existingCategory = catArry.find(catBrand => catBrand.catName === item.category);

      if (existingCategory) {
        existingCategory.catCount += 1; 
      } else {
        catArry.push(cat); 
      }
    })
  return (
    <>

     



      <Container className='bg-white mt-5'>

        <div classNamen=" row NewsDeatls ">
          <div className="col-5 box-h">

            <h2 className="HowTo " >{newscard.title}</h2>


            <ul className="list-unstyled  list">
              <li className='list1 text78'> {formatDate(newscard.published)}
                <svg fill="#EAD370" width="15px" height="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="127" cy="129" r="81" fill-rule="evenodd"></circle> </g></svg>
              </li>
              <li className='list1 text78'>
                {newscard.category}
                <svg fill="#EAD370" width="15px" height="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="127" cy="129" r="81" fill-rule="evenodd"></circle> </g></svg>

              </li>
              <li className='list1 text78'>
                {newscard.author}
              </li>
            </ul>
          </div>
        </div>
        <div className='row d-flex justify-content-between mt-5'>
          <div className=' col-7 '>
            <div className="">
              <img src={newscard.imageUrl} className='mainimg12' />
              <p className='bara3 mt-4'>Edelasdfletras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .</p>
              <p className='bara3 mt-1'>s,Estos textos hacen parecerlo unespañol quepor ejemplo <br></br>español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .Edelasdfletras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .</p>
              <p className='bara3 mt-1'>ejemplo español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .Edelasdfletras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .</p>
              <p className='bara3 mt-1'>uepor ejemplo .Edelasdfletras,Estos textos hacen<br></br>parecerlo un español estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .</p>

              <Card className="kart51" style={{ width: '100%' }}>
                <Card.Body className='kart5 '>
                  < div className='cartT1'>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#0000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9861 9.98212C16.5475 9.98211 16.169 9.9821 15.8557 10.0035C15.5259 10.026 15.196 10.0755 14.8701 10.2105C14.135 10.515 13.551 11.099 13.2465 11.8341C13.1115 12.16 13.062 12.4899 13.0395 12.8197C12.9905 13.5374 13.0181 14.2631 13.0181 14.9821C13.0181 16.639 14.3613 17.9821 16.0181 17.9821H17.0181V18.229C17.0181 19.7668 18.8774 20.537 19.9649 19.4496C20.1938 19.2206 20.4226 18.9914 20.6519 18.7627C21.1326 18.2835 21.5593 17.8582 21.7898 17.3017C22.0202 16.7453 22.0193 16.1429 22.0183 15.4641C22.0169 14.5582 22.0626 13.6399 21.9708 12.7378C21.9207 12.2446 21.8091 11.7593 21.5125 11.3154C21.2936 10.9878 21.0124 10.7066 20.6848 10.4877C20.2409 10.1911 19.7556 10.0796 19.2624 10.0294C18.5081 9.95266 17.7435 9.98212 16.9861 9.98212Z" fill="#323232"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97575 4.00556C5.5371 4.00555 5.15861 4.00554 4.84535 4.02691C4.51553 4.04941 4.18562 4.09892 3.85969 4.23392C3.1246 4.5384 2.54058 5.12243 2.2361 5.85751C2.10109 6.18344 2.05159 6.51335 2.02909 6.84318C1.98012 7.56087 2.00774 8.28654 2.00774 9.00556C2.00774 10.6624 3.35088 12.0056 5.00774 12.0056H6.00774V12.2524C6.00774 13.7903 7.86707 14.5604 8.95449 13.473C9.18347 13.244 9.4122 13.0148 9.64153 12.7862C10.1223 12.3069 10.5489 11.8816 10.7794 11.3252C11.0098 10.7688 11.0089 10.1663 11.0079 9.48753C11.0065 8.58163 11.0522 7.66333 10.9605 6.76128C10.9103 6.26804 10.7988 5.78277 10.5021 5.33885C10.2833 5.01128 10.002 4.73003 9.67445 4.51115C9.23053 4.21453 8.74526 4.103 8.25202 4.05283C7.49772 3.97609 6.73317 4.00556 5.97575 4.00556Z" fill="#323232"></path> </g></svg>
                  </div>
                  <Card.Text className='card-desc1'>
                    ejerecerlo un esEstos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .


                  </Card.Text>
                </Card.Body>
              </Card>
              <p className='bara3 mt-1 '>insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .Edelasdfletras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo insertándole humor y cosas por el estilo.Ede las letras,Estos textos hacen parecerlo un español quepor ejemplo .</p>
              <div className='row mb-4'>
                <Button className="our-globall">Digitalization</Button>
                <Button className="our-globall">School</Button>
                <Button className="our-globall">IT</Button>
                <Button className="our-globall">Design</Button>
                <Button className="our-globall">work</Button>
                <Button className="our-globall">Tech</Button>
              </div>


            </div>
          </div>
          <div className=' col-4 '>

            <div className='typeTo mb-4'>
              < Form.Control type="text" className="form-control searchB" placeholder="Type to search..." id="search-box" />
            </div>
            <Card className="kart52" style={{ width: '100%' }}>
              <Card.Body className='kart5 '>
                < div className='cartT1T'>
                  Resent posts
                </div>
                <hr className='hr4' />
                <Card.Text className='card-desc30'>
                  {

                    newsMain.slice(-4).map(item => {
                      return <div key={item.id}>
                        <p className='Blow'> {item.title}</p>
                        <p className='Blow2'>{formatDate(item.published)} </p>
                        <hr className='hr5' />
                      </div>
                    })
                  }

                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="kart52 mt-5" style={{ width: '100%' }}>
              <Card.Body className='kart5 '>
                < div className='cartT1T'>
                  Categories
                </div>
                <hr className='hr4' />
                <Card.Text className='card-desc30'>

             
                    {
                      catArry.map(item=>{
                        return <div key={item.id}>
                            <h5 className='catoGri'> {item.catName} -<h6 className='catoGri1'> {item.catCount} Posts</h6></h5>
                        </div> 
                      
                      })
                    }

                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </div>
      </Container>
    </>

  )
}
export default NewsDesc;