import HeroPage from "../components/HeroPage";
import SearchSection from "../components/SearchSection";
import TopLocation from "../components/TopLocation";
import WhyUs from "../components/WhyUs";
import Propertise from "../components/Propertise";
import Blogs from "../components/Blogs";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const Home = () => {
    return (
        <div className="pt-[7.9rem] ">
            <HeroPage/>
            <SearchSection/>
            <TopLocation/>
            <WhyUs/>
            <Propertise/>
            <Blogs/>
            <Partner/>
            <Footer/>
            <SpeedInsights/>
        </div>
    );
}

export default Home;
