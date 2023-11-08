

const Carousel = () => {
    return (
        <>
            <h2 className="text-4xl mt-8 mb-8 text-blue-900 font-bold text-center">
                Find Dream Job
            </h2>
            <div className="grid ml-6 md:grid-cols-2">
                <div className="h-80 w-92 carousel carousel-vertical rounded-box">
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
                    <p className="text-blue-500 font-bold">
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

            {/* time */}
            <h2 className="mt-8 text-center text-blue-900 text-4xl 
            font-bold">Our website visite & <br /> <span className="text-orange-600">Register</span> </h2>
            <div className="stats bg-slate-600 text-white lg:p-10 lg:w-1/2 md:ml-56 mt-10 stats-vertical md:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Visite</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
            </>
    );
};

export default Carousel;


