import { useLoaderData, useParams } from "react-router-dom";
import Category from "./Category";
import Slider from "./Slider";



const CategoryDetails = () => {
    const {jobCategory} = useParams();
    const category = useLoaderData() || [];

    return (
        <>
        <Slider jobCategory={jobCategory}></Slider>
        <div>
        <Category category={category}></Category>
        </div>
        </>
    );
};

export default CategoryDetails;