import React, { useState } from 'react';
import './Home.scss';
import project1 from "../../Assets/ReactJs_Practical_assets/Mask Group-1.png";
import project2 from "../../Assets/ReactJs_Practical_assets/Mask Group-3.png";
import project3 from "../../Assets/ReactJs_Practical_assets/Mask Group-2.png";
import project4 from "../../Assets/ReactJs_Practical_assets/Mask Group-4.png";
import project5 from "../../Assets/ReactJs_Practical_assets/Mask Group.png";

const Home = () => {
    const [activeTab, setActiveTab] = useState('Mining');


    const alertfunc = () => {
        alert("YOU CLICKED ARTICLE")
    }
    const renderNewsBoxes = () => {
        switch (activeTab) {
            case 'Mining':
            case 'Infrastructure':
                return (
                    <>
                        <div className='news-box'  onClick={alertfunc}>
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
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project1} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project2} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box'onClick={alertfunc}>
                            <img src={project3} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                    </>
                );

            case 'Oil & Gas':
            case 'Manufacturing':
                return (
                    <>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project1} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project2} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
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
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project3} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project1} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Water & Waste Water':
                return (
                    <>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project3} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project4} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
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
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project1} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project2} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                        <div className='news-box' onClick={alertfunc}>
                            <img src={project3} alt='Project' />
                            <div className='box-content'>
                                <div className="leftborder">
                                    <h3>Talinga Pipeline Compression Facility, Queensland</h3>
                                    <p>Mining</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='Homenews'>
                <div className='overlay'>News</div>
            </div>
            <div className="maindiv">
                <div className='news-sections'>
                    <div className='tabs'>
                        <button
                            className={activeTab === 'Mining' ? 'active' : ''}
                            onClick={() => setActiveTab('Mining')}
                        >
                            Mining
                        </button>
                        <button
                            className={activeTab === 'Oil & Gas' ? 'active' : ''}
                            onClick={() => setActiveTab('Oil & Gas')}
                        >
                            Oil & Gas
                        </button>
                        <button
                            className={activeTab === 'Water & Waste Water' ? 'active' : ''}
                            onClick={() => setActiveTab('Water & Waste Water')}
                        >
                            Water & Waste Water
                        </button>
                        <button
                            className={activeTab === 'Infrastructure' ? 'active' : ''}
                            onClick={() => setActiveTab('Infrastructure')}
                        >
                            Infrastructure
                        </button>
                        <button
                            className={activeTab === 'Manufacturing' ? 'active' : ''}
                            onClick={() => setActiveTab('Manufacturing')}
                        >
                            Manufacturing
                        </button>
                    </div>

                    <div className='news-boxes'>
                        {renderNewsBoxes()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
