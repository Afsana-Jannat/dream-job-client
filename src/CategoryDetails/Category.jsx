


const Category = ({ category }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                category?.map(item => <div key={item._id}>

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={item?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                            <h2 className="card-title">{item?.name}</h2>
                            <h1 className="card-title font-bold ">{item?.price}</h1>
                            </div>
                            <p>{item?.description}</p>
                           
                        </div>
                    </div>
                </div>)
            }
            {
                category?.length===0 && <h2 className="text-2xl text-center ">
                    ❌ No available category
                </h2>
            }

        </div>
    );
};

export default Category;