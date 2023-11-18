
import Header from "../components/Header/Header";
import GetNews from "../components/GetNews/GetNews";
import Fotter from "../components/Footer/Fotter";
import ContactInfo from "../components/ContactIfon/ContactInfo";
import HomeAnews from "../components/HomeAnews/HomeAnews";
import ContactForm from "../components/ContactForm/ContactForm";
import Map from '../components/MaP/Map';

const Page4 =()=>{
  return(
    <>
     <Header/> 
     <HomeAnews/>
      <ContactInfo/>
      <ContactForm/>
      <Map/>
     <GetNews/>
    <Fotter/>
    </>
   
  )
}

export default Page4;