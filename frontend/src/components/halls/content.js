import React from "react";
import'./content.css';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


var MDLite = require('material-design-lite/material');
var componentHandler = MDLite.componentHandler;



  


export class Awesome extends React.Component {
    componentDidUpdate() {
      componentHandler.upgradeDom();
    }
    render() {
      return (<div><div className="heading">

      </div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ICTAK Halls
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Information and Communication Technology Academy of Kerala is an organisation established by Government of Kerala to enhance the quality of graduates in the information technology sector and to generate resources for increasing the employability of students. 
         The Conference halls in ICTAK are spacious, wide, and well-lighted creating a perfect ambience for organizing academic meetings, seminars, events, guest lectures, and corporate recruitment procedures. Equipped with the latest technology and modern facilities our meeting rooms are sure to leave an impression that lasts.
            </Typography>
            
          </Container>
        </Box>
       </main>
      <div >
            <div className="card-wide lgl-card lgl-shadow--2dp">
            <div className="lgl-card__title audi">
            <img
                className="has-shadow"
                src={require('./audi.jpg')}
                alt="Hero"
                width={516}
                height={304} />
              
          </div>
          <div className="auditorium1">
              <h2>ICTAK Auditorium</h2>
          </div>
          <div className="auditorium2">
          The Academy is having a huge indoor auditorium with a professionally-deployed acoustic system and a seating capacity of about 300 people. The oldest among the venues to conduct programmes in, the auditorium of our Academy has over the years played host to so many seminars, symposiums and cultural activities. The objective behind the auditorium is to enhance the quality of education. To make this possible, the auditorium offers facilities such as LCD projectors, screens for delivering lectures.
          </div>
          
    </div>
    </div>
   <div>
   <div className="card-wide lgl-card lgl-shadow--2dp">
            <div className="lgl-card__title conference">
            <img
                className="has-shadow"
                src={require('./download.jpg')}
                alt="Hero"
                width={516}
                height={304} />
              
          </div>
          <div className="conferencehall">
              <h2>ICTAK Conference Hall</h2>
          </div>
          <div className="conferencehall2">
          The state-of-the-art ICTAK conference hall creates a powerful learning ambience for students, professors, and guests to enthusiastically participate in the ongoing event. Equipped with an inbuilt audio-visual system, the fully air conditioned conference hall has a seating capacity of 200. These make it an ideal place to conduct meetings and workshops, make presentations and screen movies for students.
          </div>
          
    </div> 
   </div>
   <div>
   <div className="card-wide lgl-card lgl-shadow--2dp">
            <div className="lgl-card__title banquet">
            <img
                className="has-shadow"
                src={require('./cabaret.jpg')}
                alt="Hero"
                width={516}
                height={304} />
            
          </div>
          <div className="banquethall">
              <h2>ICTAK Banquet Hall</h2>
          </div>
          <div className="banquethall2">
          The recently constructed banquet hall is a beautiful, value addition to the Academy infrastructure. Banquet Hall in Academy provides the right environment and ambiance for various programmes, seminars and conferences, lectures, boardroom-style meetings. The seating capacity is about 100 chairs with ease of having front stage for activities. Whiteboards are provided in conference Hall. Overhead projectors and screens are supplied on request.
          </div>
         
    </div>
    </div>  
   </div>
        
   
      );
    }
  }
  
 