import HeroPage from "../components/HeroPage";
import SearchSection from "../components/searchSection";
import TopLocation from "../components/topLocation";
import WhyUs from "../components/WhyUs";
import Propertise from "../components/Propertise";
import Blogs from "../components/Blogs";
const Home = () => {
    return (
        <div className="pt-[7.9rem] ">
            <HeroPage/>
            <SearchSection/>
            <TopLocation/>
            <WhyUs/>
            <Propertise/>
            <Blogs/>
        </div>
    );
}

export default Home;
