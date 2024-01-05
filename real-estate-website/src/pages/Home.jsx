import HeroPage from "../components/HeroPage";
import SearchSection from "../components/searchSection";
import TopLocation from "../components/topLocation";
const Home = () => {
    return (
        <div className="pt-[7.9rem]">
            <HeroPage/>
            <SearchSection/>
            <TopLocation/>
        </div>
    );
}

export default Home;
