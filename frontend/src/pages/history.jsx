import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        // return `${day}/${month}/${year}`
        // return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        return {
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}:${seconds}`
        };

    }

    return (
        <div>

            <IconButton onClick={() => {
                routeTo("/home")
            }}>
                <HomeIcon />
            </IconButton >
            {
                (meetings.length !== 0) ? meetings.map((e, index) => {
                    return (
                        <Card key={`${e.meetingCode}-${index}`} variant="outlined">  {/* Use a unique property here */}
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Code: {e.meetingCode}
                                </Typography>

                                <Typography sx={{ mb: 0 }} color="text.secondary">
                                    Date: {formatDate(e.date).date}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Time: {formatDate(e.date).time}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }) : <></>
            }


        </div>
    )
}
