import React from 'react';
import './Home.scss';
import project1 from "../../Assets/ReactJs_Practical_assets/Mask Group-1.png";
import project2 from "../../Assets/ReactJs_Practical_assets/Mask Group-3.png";
import project3 from "../../Assets/ReactJs_Practical_assets/Mask Group-2.png";
import project4 from "../../Assets/ReactJs_Practical_assets/Mask Group-4.png";
import project5 from "../../Assets/ReactJs_Practical_assets/Mask Group.png";

const Home = () => {
    return (
        <>
            <div className='Homenews'>
                <p>News</p>
            </div>
            <div className="maindiv">
                <div className='news-sections'>
                    <div className='tabs'>
                        <button className='active'>Mining</button>
                        <button>Oil & Gas</button>
                        <button>Water & Waste Water</button>
                        <button>Infrastructure</button>
                        <button>Manufacturing</button>
                    </div>
                    <div className='news-boxes'>
                        <div className='news-box'>
                            <img src={project5} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                    <p>Project Detail: We have recently moved into new premises @261 South street, Cleveland, Queensland, Australia...</p>
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'>
                            <img src={project1} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'>
                            <img src={project2} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'>
                            <img src={project3} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
