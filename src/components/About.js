import React, { Component } from 'react';
import { Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-bootstrap';


export class AboutUs extends Component {
  constructor(){
    super();
    this.state = {
      index: 0,
      media: [
        {
          id: 1,
          image: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy3.jpg',
          title: 'About us',
          description: 'We are a group of developers'

        },
        {
          id: 2,
          image: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy5.jpg',
          title: 'Happy 2',
          description: 'Play and share some music'

        },
        {
          id: 3,
          image: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy6.jpg',
          title: 'Happy 3',
          description: 'Feel free to express joy'

        },
      ]
    }
  }
  render() {
    return (
      <Container maxWidth='lg'>
        <Grid container >
          <Grid item xs={12}>
            <Carousel fade style={{width: '100%'}}>
              {
                this.state.media.map(data => {
                  return(
                      <Carousel.Item>
                        <img
                          className='d-block w-100'
                          src={data.image}
                          alt="First slide"
                          style={{width: '1200px', height: '400px',}}
                        />
                        <Carousel.Caption>
                          <h3>{data.title}</h3>
                          <p>{data.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title ='What do we do'
                titleTypographyProps={{variant:'h3' }}
                style={{ textAlign: 'center' }}
              />
              <CardContent>
                <Typography variant='body'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                </Typography>

                <br/>
                <br/>
                <Typography variant='body'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
              <Card>
                <CardContent>
                  <iframe src='https://www.youtube.com/embed/Y6aYx_KKM7A' width='1060' height='400'
                  frameBorder="0"
                  allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default AboutUs