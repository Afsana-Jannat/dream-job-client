import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from "../../../CategoryDetails/Category";



const JobBycategory = () => {

    const [categorys, setCategory] = useState([]);
    const [singleCategory, setSingleCategory] = useState([]);
    const [selectCategory,setSelectCategory]=useState('all')

    useEffect(() => {
        fetch('https://dream-job-server-seven.vercel.app/jobcategories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);


    useEffect(()=>{
        fetch(`https://dream-job-server-seven.vercel.app/job-by-category/${selectCategory}`)
            .then(res => res.json())
            .then(data => setSingleCategory(data))
    },[selectCategory])
   
    
    const handleSelectCategory =(item)=>{
        setSelectCategory(item)
    };

console.log(selectCategory);
    return (
        <div>
            <div>
                <h3 className="text-5xl text-slate-700 text-center mt-4
                font-semibold">Job By
                    <span className="text-blue-400"> Category</span></h3>
            </div>
           {/*  <div className='grid md:grid-cols-2
       gap-7 lg:ml-6 mt-10 mb-6 '>
                {
                    categorys.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div> */}

            <hr />

            <Tabs>
                <TabList>
                    <Tab  onClick={()=>handleSelectCategory('all')}>All</Tab>
                    {
                        categorys.map(item => <Tab 
                            onClick={()=>handleSelectCategory(item.job_category)}
                        key={item._id}>
                            {item.job_category}
                        </Tab>)
                    }
                </TabList>
            </Tabs>

            <Category category={singleCategory}/>
        </div>
    );
};

export default JobBycategory;