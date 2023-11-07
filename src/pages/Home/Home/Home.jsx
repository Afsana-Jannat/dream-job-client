import Banner from "../Banner";
import Carousel from "../Carousel";
import JobBycategory from "../JobByCategory/JobBycategory";


const Home = () => {
    return (
        <div className="mt-4 mb-6">
            <Banner></Banner>
            <JobBycategory></JobBycategory>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;