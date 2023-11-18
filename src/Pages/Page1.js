import Header from '../components/Header/Header';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import Brands from '../components/Brands/Brands';
import Features from '../components/Features/Features';
import MeetOur from '../components/MeetOur/MeetOur';
import OurServices from '../components/OurServices/OurServices';
import ProjectAndcase from '../components/ProjectAndcase/ProjectAndcase';
import Section1 from '../components/Section1/Section1';
import WhyChooseus from '../components/WhyChooseus/WhyChooseus';
import News from '../components/News/News';
import GetNews from '../components/GetNews/GetNews';
import Fotter from '../components/Footer/Fotter';

const Page1=()=>{
    return(
        <>
         <Header/>
        <Section1/>
        <Brands/>
        <Features/>
        <AboutCompany/>
        <OurServices/>
        <WhyChooseus/>
        <ProjectAndcase/>
        <MeetOur/>
        <News/>
        <GetNews/>
          <Fotter/>
        </>
    )
}


export default Page1;