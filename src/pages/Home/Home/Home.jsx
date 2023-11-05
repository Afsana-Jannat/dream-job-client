import Banner from "../Banner";
import JobBycategory from "../JobByCategory/JobBycategory";


const Home = () => {
    return (
        <div className="mt-4 mb-6">
            <Banner></Banner>
            <JobBycategory></JobBycategory>
        </div>
    );
};

export default Home;