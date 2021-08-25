import './MainSection.css';
import ReviewBox from './ReviewBox';
import {useRef} from 'react';

function MainSection () {

    // const unhoverHandler = () => {
    //     cta_span.current.classList.add('pointer-none');
    //         // cta_span.current.classList.remove('pointer-none');
    // }

    return (
        <>
            <main className="main-section main-grid">
                <div className="main-section-sidebar">
                  <div className="main-section-sidebar-div">
                    <button className="main-section-sidebar-button home">
                        <svg className="main-section-sidebar-button-svg" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>home</title>
                            <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
                        </svg>
                        <span>Hotel</span>
                    </button>
                    <button className="main-section-sidebar-button">
                        <svg className="main-section-sidebar-button-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>aircraft-take-off</title>
                            <path d="M19.87 6.453c0.119 0.257 0.127 1.29-4.884 3.642l-4.913 2.306c-1.71 0.803-4.191 1.859-5.285 2.151-0.766 0.204-1.497-0.316-1.497-0.316s-2.206-1.975-2.792-2.419c-0.585-0.444-0.535-0.67 0.215-0.91 0.467-0.149 3.13 0.493 4.265 0.78 1.339-0.8 2.562-1.486 3.141-1.798-1.396-1.033-4.008-2.962-4.841-3.55-0.799-0.565 0.010-0.768 0.010-0.768 0.368-0.099 1.162-0.228 1.562-0.144 2.721 0.569 7.263 2.071 7.611 2.186 0.832-0.436 2.128-1.092 2.922-1.465 2.075-0.974 4.327-0.037 4.486 0.305z"></path>
                        </svg>
                        <span>Flight</span>
                    </button>
                    <button className="main-section-sidebar-button">
                        <svg className="main-section-sidebar-button-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>key</title>
                            <path d="M17.691 4.725c-0.503-2.977-3.22-4.967-6.069-4.441s-5.256 2.816-4.753 5.795c0.107 0.641 0.408 1.644 0.763 2.365l-5.175 7.723c-0.191 0.285-0.299 0.799-0.242 1.141l0.333 1.971c0.058 0.342 0.372 0.572 0.7 0.514l1.516-0.281c0.328-0.059 0.744-0.348 0.924-0.639l2.047-3.311 0.018-0.022 1.386-0.256 2.39-3.879c0.785 0.139 1.912 0.092 2.578-0.031 2.848-0.526 4.087-3.67 3.584-6.649zM15.166 6.252c-0.784 1.17-1.584 0.346-2.703-0.475-1.119-0.818-2.135-1.322-1.352-2.492s2.326-1.455 3.447-0.635c1.12 0.819 1.391 2.432 0.608 3.602z"></path>
                        </svg>
                        <span>Car rental</span>
                    </button>
                    <button className="main-section-sidebar-button">
                        <svg className="main-section-sidebar-button-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>map</title>
                            <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
                        </svg>
                        <span>Tours</span>    
                    </button>
                  </div>

                    <div className="main-section-sidebar-footer">
                        <p className="main-section-sidebar-footer-copyright">© 2017 by trillo. All rights reserved.</p>
                    </div>
                </div>

                <div className="main-section-content">
                    <div className="main-section-content-imgs">
                        <img src="./imgs/hotel-1.jpg" alt="" />
                        <img src="./imgs/hotel-2.jpg" alt="" />
                        <img src="./imgs/hotel-3.jpg" alt="" />
                    </div>

                    <div className="main-section-content-headings">
                        <div className="main-section-content-headings-heading-left">
                            <h1>
                                HOTEL LAS PALMAS
                            </h1>
                            <div className="main-section-content-headings-heading-left-stars">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>star</title>
                                <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                                </svg>

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>star</title>
                                <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                                </svg>

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>star</title>
                                <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                                </svg>

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>star</title>
                                <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                                </svg>

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>star</title>
                                <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="main-section-content-headings-heading-right">
                            <svg className="main-section-content-headings-heading-right-loc-pin" 
                            version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>location-pin</title>
                                <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
                            </svg>

                            <button className="pink-button location anim">Albufeira, Portugal</button>

                            <div className="main-section-content-headings-heading-right-ratings">
                                <p className=
                                "main-section-content-headings-heading-right-ratings-points">8.6</p>
                                <p className="main-section-content-headings-heading-right-ratings-votes">
                                    429 VOTES
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="main-section-text">
                        <div className="main-section-text-main">
                            <p className="main-section-text-main-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.</p>
                            <p className="main-section-text-main-para">Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.</p>
                        
                            <div className="main-section-text-features">
                                <ul className="main-section-text-features-list">

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Close to the beach
                                        </li>
                                    </div>   
                                

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Free airport shuttle
                                        </li>
                                    </div>


                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>


                                        <li>
                                            Air conditioning and heating
                                        </li>
                                    </div>

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            We speak all languages
                                        </li>
                                    </div>

                                </ul>

                                <ul className="main-section-text-features-list">

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Breakfast included
                                        </li>
                                    </div>

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Free wifi in all rooms
                                        </li>
                                    </div>

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Pets allowed
                                        </li>
                                    </div>

                                    <div className="main-section-text-features-list-item">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <title>chevron-small-right</title>
                                        <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
                                        </svg>

                                        <li>
                                            Perfect for families
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <div className="main-section-text-recommendation">
                                <p className="main-section-text-recommendation-text">
                                    Lucy and 3 other friends recommend this hotel.
                                </p>
                                <div className="main-section-text-recommendation-imgs">
                                    <img src="./imgs/user-3.jpg" alt="" />
                                    <img src="./imgs/user-4.jpg" alt="" />
                                    <img src="./imgs/user-5.jpg" alt="" />
                                    <img src="./imgs/user-6.jpg" alt="" />
                                </div>
                            </div>
                            
                        </div>
                        

                        <div className="main-section-text-right">
                            <ReviewBox review_points="7.8" review_date="Feb 23rd, 2017" username="NICK SMITH" imgSrc='./imgs/user-1.jpg' review_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."/>
                            <ReviewBox review_points="9.3" review_date="Sept 13th, 2017" username="MARY THOMAS" imgSrc='./imgs/user-2.jpg' review_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."/>
                            <button className="main-section-text-right-showall-btn pink-button anim">
                                Show all 
                                <span>&#8594;</span>
                            </button>
                            
                        </div>

                    </div>

                    <div className="main-section-cta">
                        <h2 className="main-section-cta-heading">
                            GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES!
                        </h2>

                        <button 
                         className="main-section-cta-btn anim">
                            <span className="main-section-cta-btn-visible">Book now</span>
                            <span className="main-section-cta-btn-invisible">Only 4 rooms left</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainSection;