import React, { Component } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

class ContactUs extends Component {
    constructor(){
        super();
        this.state ={
            maps: [
                {
                    id: 1,
                    map: 'https://maps.google.com/maps?q=Greenhills%20Shopping%20Center,%201502%20Ortigas%20Ave,%20San%20Juan,%20Metro%20Manila&t=&z=9&ie=UTF8&iwloc=&output=embed',
                    address: "J24M+65F, Col. Bonny Serrano Ave, San Juan, 1500 Metro Manila",
                    contact: '9271554855',
                    email: 'mkisey225@gmail.com'
                },
                {
                    id: 2,
                    map: 'https://maps.google.com/maps?q=McKinley%20Pkwy,%20Taguig,%201634%20Metro%20Manila&t=&z=9&ie=UTF8&iwloc=&output=embed',
                    address: "26th Street, Corner McKinley Pkwy, Taguig, 1630 Metro Manila",
                    contact: '91754586658',
                    email: 'KerryLogan@gmail.com'
                },
                {
                    id: 3,
                    map: 'https://maps.google.com/maps?q=North%20Avenue,%20corner%20Epifanio%20de%20los%20Santos%20Ave,%20Quezon%20City,%201100%20Metro%20Manila&t=&z=9&ie=UTF8&iwloc=&output=embed',
                    address: "North Avenue, corner Epifanio de los Santos Ave, Quezon City, 1100 Metro Manila",
                    contact: '9207789524',
                    email: 'albertson@xyz.com'
                }
            ]
        }
    }
  render() {
    return (
      <Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box>
                    
                </Box>
            </Grid>
            {
                this.state.maps.map(data => {

                    return(
                        <React.Fragment key={data.id}>
                            <Grid item md={6} sx={{p: 2}}>
                                <Card sx={{border: '1px solid #ededed', boxShadow: '5px 5px 5px #ededed'}}>
                                    <CardMedia
                                        component = 'iframe'
                                        src = {data.map}
                                        width="700"
                                        height="300"
                                    />
                                    <CardContent sx={{bgcolor: '#efef'}}>
                                        <Typography variant='body' sx={{fontWeight: 700}}>{data.address}</Typography>
                                        <br/>
                                        <br/>
                                        <Typography variant='body'>Contact Number:{data.contact}</Typography>
                                        <br/>
                                        <Typography variant='body'>Email Address: {data.email}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </React.Fragment>
                    )
                })
            }
            
        </Grid>
      </Box>
    )
  }
}

export default ContactUs