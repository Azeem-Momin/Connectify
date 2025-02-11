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
                        <a className="navbar-brand" href="/">
                            <img src="/icon.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
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

            <div className="p-5 d-flex flex-column flex-lg-row align-items-center">
                <div className="text-center text-lg-start mb-4 mb-lg-0">
                    <h1><span className='connectStyle'>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by Apna Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div className="text-center">
                    <img src="/mobile.png" alt="" className="img-fluid responsive-image" />
                </div>
            </div>
        </>
    )
}
