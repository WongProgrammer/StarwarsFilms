import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
//used Chrome Extensions "Web Server for Chrome to show local images"
function StarwarsFilm({ id, title, opening, date, removeStarwarsFilm }) {
  return (
      <Card
        sx={{
          backgroundColor: ' rgba(32, 32, 32, 0.75);',
          display: 'flex',

        }}>
        <img src={`http://127.0.0.1:8887/src/Images/film${id}.jpg`} alt={`star wars movie number ${id}`} />
        <CardContent >
          <Typography
            variant='h3'>{title}</Typography>
          <Typography variant='h5'>{date}</Typography>
          <Typography variant='h5' >{opening}</Typography>
        </CardContent>

        <Button
          sx={{ color: "black" }}
          onClick={() => removeStarwarsFilm(id)}>
          <CancelPresentationIcon
            size='large'
            color='error'
            sx={{ fontSize: 50 }} />
        </Button>

      </Card>
  );
}
export default StarwarsFilm;
