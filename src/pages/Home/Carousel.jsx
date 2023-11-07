

const Carousel = () => {
    return (
        <div>
            <h2 className="text-3xl mt-8 mb-8 text-blue-900 font-bold text-center">
                Find Dream Job
            </h2>
            <div className="grid md:grid-cols-2">
                <div className="h-80 w-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/wRWv89c/adults-apron-business-580613.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/DDGWC1y/part-time-freelance-jobs-649x389.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/7YMCLK3/remote-jobs-hiring.png" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/74HxKfq/maxresdefault.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/kh6wsD8/download.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/HC2YMyk/istockphoto-475909118-612x612.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://i.ibb.co/fXz1DJP/download.png" alt="Burger" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                        The services that you will get:
                    </h2>
                    <p className="text-yellow-700">
                        - 100% Responsive For all Devices Like ( Desktop, Laptop, Mobile)

                        - Best & Recommended Plugins.
                        <br />
                        - E-commerce Functionality.
                        <br />
                        - Image Slider & Parallax effect.
                        <br />
                        - Popups & Call to action for higher conversions.
                        <br />
                        - Social media & Contact form.
                        <br />
                        - MailChimp Integration.
                        <br />
                        - SEO-Friendly Structure.
                        <br />
                        - Payment Gateway Integration.
                        <br />
                        - Backup & Migration.
                        <br />
                        - Design to WordPress.
                        <br />
                        - Live Chat.
                    </p>
                </div>
            </div>


            <div>
                <h2 className="text-center text-3xl mt-6 mb-8 font-bold"><span className="text-blue-500">Reviews</span> from those
                    <br />who got jobs
                </h2>

                <div>
                    <div className="carousel w-full h-[600px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/GFzkW2F/istockphoto-1287566098-612x612-1.jpg" className="w-full rounded-xl" />
                            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-3xl text-center font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    
                                </div>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/s1VHRmF/istockphoto-1201620249-612x612.jpg" className="w-full rounded-xl" />
                            <div className="absolute rounded-xl flex justify-center items-center h-full bg-gradient-to-r from-[#151515]
                             to-[rgba(21, 21, 21, 0)]">
                                <div className='text-white text-center space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-3xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/5cCtBSR/woman-desk-giving-thumbs-up-while-holding-tablet-23-2148434684.jpg" className="w-full rounded-xl" />
                            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    
                                </div>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;


