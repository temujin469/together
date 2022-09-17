import Banner from '../components/home/Banner';
import Experience from '../components/home/Experience';
import Video from '../components/home/Video';
import Headsets from '../components/home/Headsets';
import Testimonial from '../components/home/Testimonial';
import RootLayout from '../Layouts/RootLayout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Tab from '../components/home/AboutTab';
import BestRated from '../components/home/BestRated';
import About from '../components/home/HowItWork';
import AreYouReady from '../components/home/AreYouReady';

const Home = () => {
  // const [navMobile, setNavMobile] = useState(false);


  useEffect(() => {
    Aos.init({
      duration:1000,
      offset:100
    });
  });
  return (
    <RootLayout title='Нүүр хуудас'>
      <div>
        <Banner />
        <Experience />
        <Tab/>
        <Video />
        <Headsets />
        <About/>
        {/* <Explore /> */}
        <AreYouReady/>
        <BestRated/>
        <Testimonial />
      </div>
    </RootLayout>
  )
}

export default Home;
