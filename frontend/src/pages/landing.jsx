import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <>
            <div className='landingPageContainer'>

                    
                <nav className="navbar navbar-expand-lg nav-bg-color sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Connectify
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>
                            <form className="d-flex flex-column flex-lg-row gap-3" role="search">
                                <div type="submit" onClick={() => {
                                    router("/aljk23")
                                }}>Join as Guest</div>

                                <div type="submit" onClick={() => {
                                    router("/auth")
                                }}>Register</div>

                                <div type="submit" onClick={() => {
                                    router("/auth")
                                }}>Login</div>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>

            <div className="p-5">
                    <div>
                        <h1><span style={{ color: "rgb(13, 202, 240)" }}>Connect</span> with your loved Ones</h1>

                        <p>Cover a distance by Apna Video Call</p>
                        <div role='button'>
                            <Link to={"/auth"}>Get Started</Link>
                        </div>
                    </div>
                    <div>

                        <img src="/mobile.png" alt="" />

                    </div>
                </div>


                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/homeImage.jpeg" className="d-block w-100" alt="homeImage" />
                        </div>
                        <div className="carousel-item">
                            <img src="/screenShare.jpeg" className="d-block w-100" alt="homeImage" />
                        </div>
                        <div className="carousel-item">
                            <img src="/homeImage3.jpeg" className="d-block w-100" alt="homeImage" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </>

    )
}
