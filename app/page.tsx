"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import { Box, Button, IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import bg from '../public/bg.jpg';
import { makeStyles } from '@mui/styles'

const testimonial = [
  {name: "Ibrahim Ajmal", occupation: "Startup Founder", text: "Kazi Cards has been a game-changer for my networking efforts. I've been able to share my professional profile seamlessly, leaving a lasting impression every time.", picture: "https://media.licdn.com/dms/image/C4E03AQGUQu3ao7nt_g/profile-displayphoto-shrink_800_800/0/1636632619809?e=2147483647&v=beta&t=pLLHhIW3M0uf_F3iDu2atiCblTXuf22U0RzYvykYIXI", rating: 5},
  {name: "George Holly-Greco", occupation: "Software Engineer", text: "In the tech world, staying updated with the latest tools is a must. Kazi Cards is the future of professional networking. It's efficient, eco-friendly, and incredibly user-friendly. Highly recommended!", picture: "https://media.licdn.com/dms/image/C4E03AQHQ3NwycrVdqA/profile-displayphoto-shrink_800_800/0/1633739011328?e=2147483647&v=beta&t=N4umRAlXx1uTBXgC0OgBRnmMl_5eDZ6htdkcKfANIbg", rating: 5},
  {name: "Aarush Khurana", occupation: "Business Consultant", text: "I meet numerous clients and partners daily. Kazi Cards has not only streamlined my introductions but also added a touch of modern professionalism to my interactions.", picture: "https://media.licdn.com/dms/image/D5603AQH7xMKOlA-kdQ/profile-displayphoto-shrink_800_800/0/1694041956769?e=2147483647&v=beta&t=xd4tb4IL53LP1-IaAP_1JuTGO8pi9yW59uSPPFrqmBc", rating: 5},
  {name: "Yash Rohatgi", occupation: "Software Developer", text: "Being a developer, I appreciate tools that simplify life. Kazi Cards does just that for networking. No more fumbling with paper cards or manually inputting contact details. A quick scan, and I'm connected. Brilliant!", picture: "https://media.licdn.com/dms/image/C4D03AQGfc0-nX835ow/profile-displayphoto-shrink_800_800/0/1613505558459?e=2147483647&v=beta&t=X5IhFdQdOV5OKgRixCmiCS3GcnmypXcwkxXDBceOAsc", rating: 5},
  {name: "Levi Shem-Tov", occupation: "Backend Engineer", text: "Kazi Cards is a testament to how technology can enhance even the simplest of tasks. Sharing my professional details has never been easier or more stylish.", picture: "https://media.licdn.com/dms/image/C5603AQFXEWEYQiWrnA/profile-displayphoto-shrink_800_800/0/1617247230865?e=2147483647&v=beta&t=YPMcxrjHI2dsJO0e34a2yUPQIN7uap9tN8ktobTJN_s", rating: 5},
  {name: "Eric Wang", occupation: "Tech Sales", text: "Kazi Cards is a game-changer in tech sales. Quick, sleek, and efficient, it's the modern way to make an impact with clients. A must-have for every sales toolkit.", picture: "https://media.licdn.com/dms/image/C4E03AQENnRdy5vHEPg/profile-displayphoto-shrink_800_800/0/1606436549346?e=2147483647&v=beta&t=iNG0iQ1nc-XezCl1vjFKq51P8iZWAXCpLxFu5Vxii-o", rating: 5}
]

function handleScrollToAbout() {
  const aboutElement = document.getElementById("about");
  if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const accent = "#636cff";
const useStyles = makeStyles({
  animatedGradient: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(ellipse at center, purple, yellow 100%)',
      animation: '$fadeInOut 5s infinite alternate',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(ellipse at center, yellow, purple 100%)',
      zIndex: 0,
    },
  },
  animatedGradient2: {
    borderRadius: '15px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(ellipse at center, green, red 100%)',
      animation: '$fadeInOut 5s infinite alternate',
      borderRadius: '15px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '15px',
      backgroundImage: 'radial-gradient(ellipse at center, red, green 100%)',
      zIndex: 0,
    },
},
  animatedGradient3: {
    borderRadius: '15px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(ellipse at center, #00c6fb, #f83600 100%)',
      animation: '$fadeInOut 5s infinite alternate',
      borderRadius: '15px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '15px',
      backgroundImage: 'radial-gradient(ellipse at center, #f83600, #00c6fb 100%)',
      zIndex: 0,
    },
  },
  animatedGradient4: {
    borderRadius: '15px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(ellipse at center, #30cfd0, #330867 100%)',
      animation: '$fadeInOut 5s infinite alternate',
      borderRadius: '15px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '15px',
      backgroundImage: 'radial-gradient(ellipse at center, #330867, #30cfd0 100%)',
      zIndex: 0,
    },
  },
  '@keyframes fadeInOut': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${bg})`, backgroundSize: 'cover', width: '100%', height: '100%', backgroundColor: 'black' }}>
    <Header/>
    <Box maxWidth="lg" sx={{ marginTop: {xs: '10px', sm: '0px'}, display: 'flex', flexDirection: {xs: 'column-reverse', md: 'row'}, alignItems: 'center', justifyContent: {xs: 'center', md: 'space-between'}, height: 'calc(100vh - 150px)' }}>
      <Box sx={{ marginTop: {xs: '20px', md: '0px'}, width: {xs: '90%', md: '50%'}, aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
        <Typography sx={{ fontSize: {xs: '60px', md: '84px'}, fontFamily: 'Recoleta', lineHeight: '1', marginBottom: '10px', textAlign: {xs: 'center', md: 'left'} }}>
          Contact Sharing Made <span style={{ color: accent }}>Easy</span>
        </Typography>
        <Typography sx={{ fontSize: {xs: '18px', md: '30px'}, fontFamily: 'Inter', color: '#99999f', textAlign: {xs: 'center', md: 'left'} }}>
          Scan, Connect, Collaborate. Elevate your digital presence with a modern touch
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: {xs: '20px', md: '50px'}, width: '100%', justifyContent: {xs: 'center', md: 'left'} }}>
          <Button variant="contained" sx={{ textTransform: 'none', borderRadius: '100px', backgroundColor: accent, width: '120px', fontFamily: 'inter', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', "&:hover": { backgroundColor: '#757bf7' }  }}>
            Get Started
          </Button>
          <Button variant="contained" sx={{ marginLeft: '15px', textTransform: 'none', borderRadius: '100px', backgroundColor: "#313136", border: "2px solid #414146", width: '120px', fontFamily: 'inter', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', "&:hover": { backgroundColor: '#212126' }  }}>
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: '50%', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box className={classes.animatedGradient} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', zIndex: 2, height: {xs: '300px', md: '400px'}, width: {xs: '300px', md: '400px'}, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box component="img" src={"/Untitled.png"} sx={{ height: {xs: '240px', md: '300px'}, width: {xs: '240px', md: '300px'} }} alt='qr'/>
        </Box>
      </Box>
      </Box>
    </Box>
    <IconButton onClick={handleScrollToAbout} sx={{}}>
      <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: '36px' }} />
    </IconButton>
    <Box id="about" maxWidth="lg" sx={{ width: {xs: '95%', md: '100%'}, height: '160vh', marginTop: '50px' }}>
      <Box sx={{ padding: {xs: '20px', md: '0px'}, display: 'flex', flexDirection: "column", alignItems: {xs: 'center', md: 'center'}, justifyContent: 'center', marginTop: '50px', backgroundColor: '#101010', borderRadius: '25px' }}>
        
        <Typography sx={{ fontFamily: 'Recoleta', fontSize: '60px', lineHeight: '1.2', textAlign: {xs: 'center', md: 'left'}, marginTop: '60px', marginBottom: '30px' }}>
          How It <span style={{ color: accent }}>Works</span>
        </Typography>

        <Box maxWidth="sm" sx={{ width: '100%', marginBottom: '20px' }}>
          <Box className={classes.animatedGradient2} sx={{borderRadius: '15px', width: '100%', height: '100px', marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ zIndex: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ marginRight: '10px', borderRadius: '100px', border: '2px solid #636cff', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>1</Box>
                      <Typography sx={{ fontSize: '30px', fontFamily: 'Recoleta' }}>
                          Fill & Customize
                      </Typography>
                  </Box>
              </Box>
          </Box>
          <Typography sx={{ color: 'white' }}>
              Complete a simple form with your contact details, including email, phone, website, and social media links. Then, choose a template and color scheme that best represents you.
          </Typography>
        </Box>

        <Box maxWidth="sm" sx={{ width: '100%', marginBottom: '20px' }}>
          <Box className={classes.animatedGradient3} sx={{borderRadius: '15px', width: '100%', height: '100px', marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ zIndex: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ marginRight: '10px', borderRadius: '100px', border: '2px solid #636cff', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>2</Box>
                      <Typography sx={{ fontSize: '30px', fontFamily: 'Recoleta' }}>
                          Get Your QR Code
                      </Typography>
                  </Box>
              </Box>
          </Box>
          <Typography sx={{ color: 'white' }}>
          Once your digital card is ready, you&apos;ll receive a unique QR code. Simply share and scan to connect with others instantly.
          </Typography>
        </Box>

        <Box maxWidth="sm" sx={{ width: '100%', marginBottom: '80px' }}>
          <Box className={classes.animatedGradient4} sx={{borderRadius: '15px', width: '100%', height: '100px', marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ zIndex: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ marginRight: '10px', borderRadius: '100px', border: '2px solid #636cff', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>3</Box>
                      <Typography sx={{ fontSize: '30px', fontFamily: 'Recoleta' }}>
                      Go Beyond With NFC
                      </Typography>
                  </Box>
              </Box>
          </Box>
          <Typography sx={{ color: 'white' }}>
          For a touch of innovation, order our NFC-enabled cards. A quick tap on someone&apos;s phone, and your contact info is shared. Networking has never been this seamless.
          </Typography>
        </Box>

      </Box>
    </Box>
    <Box id="testimonials" maxWidth="lg" sx={{ width: '100%', height: '100vh', marginTop: '50px' }}>
      <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'flex-start'}, justifyContent: 'space-between', marginTop: '50px' }}>
        <Typography sx={{ fontFamily: 'Recoleta', fontSize: '48px', lineHeight: '1.2', textAlign: {xs: 'center', md: 'left'} }}>
          Loved By Many <br/><span style={{ color: accent }}>Worldwide.</span>
        </Typography>
        <Typography sx={{ marginTop: {xs: '10px', md: "0px"}, fontFamily: 'Recoleta', fontSize: '36px', lineHeight: '1', color: 'grey', textAlign: {xs: 'center', md: 'left'} }}>
          See what our <br/>users are saying about <br/>kazi|cards.
        </Typography>
      </Box>
      <Box id="tests" sx={{ marginTop: '50px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {testimonial.map((item, idx) => (
          <Box key={item.name} sx={{ padding: '20px', height: '260px', width: '380px', backgroundColor: 'black', border: '2px solid grey', margin: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '16px', color: 'white', fontFamily: 'inter' }}>
              {item.text}
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Box component="img" src={item.picture} sx={{ borderRadius: '100px', height: '80px', width: '80px'}} />
            <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontFamily: "Recoleta", fontSize: '24px', marginTop: '10px' }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: 'grey', fontSize: '14px' }}>
              {item.occupation}
            </Typography>
            </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
    </main>
  )
}
