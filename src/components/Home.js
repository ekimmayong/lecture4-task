import React, { Component } from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  
  componentDidMount(){
    let url = 'https://fakestoreapi.com/products';
    axios.get(url)
      .then((res)=> {
        this.setState({products: res.data})
      }).catch((err => {
        console.log(err);
      }))
  }


  render(){
    return (
      <Box>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>Products</Typography>
          </Grid>
          {
            this.state.products.map((data)=> {
              return (
                <React.Fragment key={data.id}>
                  <Grid item lg={3} sm={6} md={3} sx={{p: 2}}>
                    <Card sx={{width: {lg: '250px', md: '230px', sm: '280px', xs: '300px'}, border: '1px solid #000', borderShadow: '5px 5px 5px #cdcdcd'}}>
                      <CardMedia
                        component = 'img'
                        image = { data.image }
                        width = '400'
                        height = '200'
                      />
                      <CardContent sx={{bgcolor: '#efefef', minHeight: '80px'}}>
                        <Typography variant='body1'>
                          { data.title}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{bgcolor: '#efefef', justifyContent: 'space-between'}}>
                          <Typography variant='body'>Price: <strong>{data.price}</strong></Typography>
                          <Typography variant='body'>Category: <strong>{data.category}</strong></Typography>
                      </CardActions>
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

export default Home