import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg nav-bg-color sticky-top mt-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/public/icon.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Connectify
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex flex-column flex-lg-row gap-3" role="search">


                            <Button onClick={
                                () => {
                                    navigate("/history")
                                }
                            }>History</Button>


                            <Button onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/")
                            }}>
                                Logout
                            </Button>
                        </form>
                    </div>
                </div>
            </nav>




            {/* <div className="meetContainer"> */}
            <div className="container row p-2 mt-5">
                <div className="col-md-6">
                    <div>
                        <h2>Video calls and meetings for everyone.</h2>
                        <h4 className='text-muted mx-2'><span className='connectStyle'>Connect</span>, collaborate and celeberate from anywhere with Connectify</h4>

                        <div style={{ display: 'flex', gap: "10px", padding: "20px",marginLeft:"20px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" style={{width:"300px" }}/>
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/homeImge.svg" className="d-block mx-auto rounded-circle" alt="carousel-image" />
                                <h2>Your meeting is safe</h2>
                                <p>No one can join the meeting unless code is shared</p>
                            </div>
                            <div className="carousel-item">
                                <img src="/homeImage2.svg" className="d-block mx-auto rounded-circle" alt="carousel-image" />
                                <h2>Start with meeting code</h2>
                                <p>Generate meeting code and send to people you want to meet </p>
                            </div>
                            <div className="carousel-item">
                                <img src="/homeImage3.svg" className="d-block mx-auto rounded-circle" alt="carousel-image" />
                                <h2>Plan ahead</h2>
                                <p>Click on <b>JOIN</b> to schedule meetings</p>
                            </div>
                        </div>
                    </div>
                    {/* <h1>second</h1> */}
                </div>

            </div>
        </>
    )
}


export default withAuth(HomeComponent)