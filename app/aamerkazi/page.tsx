import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

export default function AamerKazi() {
    return (
        <Box id="page-container" sx={{ width: "100%", height: '100vh', overflowY: 'auto', backgroundColor: 'rgb(254,254,254)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'black' }}>
            <Button variant="contained" href="/vcard_Aamer Kazi.vcf" sx={{ backgroundColor: '#4f6590', position: 'absolute', bottom: '0', right: '0', zIndex: '111111', marginRight: '20px', marginBottom: '20px', borderRadius: '100px', paddingRight: '20px', '&:hover': {backgroundColor: '#4f6590'} }}>
                <ContactEmergencyIcon sx={{ marginRight: '10px', marginLeft: '5px' }}/>Save Contact
            </Button>
            <Box id="content-container" sx={{ marginTop: '250px', width: '90%', borderRadius: '0.5rem', border: '1px solid #dde1dd', backgroundColor: 'rgb(255,255,255)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', boxShadow: "0 .25rem 1.875rem rgba(42,53,79,.05)!important" }}>
                <Image src={"/ak.jpeg"} height={160} width={160} alt="ak" style={{ borderRadius: '20px', position: 'absolute', top: '-45px' }} />
                <Box id="profile-info" sx={{ width: '100%', marginTop: '110px', padding: '1.5rem' }}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '1.25rem', color: '#3f345f', fontFamily: "'Nunito Sans', sans-serif", fontWeight: '500', fontSize: 'calc(1.3rem + .6vw)' }}>
                        Aamer Kazi
                    </Typography>
                    <Typography sx={{ color: "#506690", fontSize: '1rem', fontFamily: "'Nunito Sans', sans-serif", textAlign: 'center', fontWeight: '300', marginTop: '-15px' }}>
                        Broker at REMAX Real Estate Centre Inc.
                    </Typography>
                    <hr style={{ border: '0', borderTop: ".0625rem solid rgba(17,17,17,.05)", marginTop: '1.5rem', marginBottom: '1.5rem'}}/>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <PhoneEnabledIcon sx={{ fontSize: '20px', color: "#4f6590", marginRight: '10px'  }}/>
                        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '1rem', color: '#4f6590', fontWeight: '500' }}>
                            Phone Number
                        </Typography>
                    </Box>
                    <Typography component="a" href="tel:6478959494" sx={{ fontSize: '1rem', fontFamily: "'Nunito Sans', sans-serif", color: '#3f345f', marginTop: '8px' }}>
                        +1 (647) 895-9494
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginTop: '15px'}}>
                        <EmailIcon sx={{ fontSize: '20px', color: "#4f6590", marginRight: '10px'  }}/>
                        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '1rem', color: '#4f6590', fontWeight: '500' }}>
                            Email Address
                        </Typography>
                    </Box>
                    <Typography component="a" href="mailto:aamerkazi@gmail.com?subject=Inquiry" sx={{ fontSize: '1rem', fontFamily: "'Nunito Sans', sans-serif", color: '#3f345f', marginTop: '8px' }}>
                        aamerkazi@gmail.com
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginTop: '15px'}}>
                        <LinkIcon sx={{ fontSize: '20px', color: "#4f6590", marginRight: '10px'  }}/>
                        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '1rem', color: '#4f6590', fontWeight: '500' }}>
                            Website
                        </Typography>
                    </Box>
                    <Typography component="a" href="https://www.aamerkazi.ca/" sx={{ fontSize: '1rem', fontFamily: "'Nunito Sans', sans-serif", color: '#3f345f', marginTop: '8px' }}>
                        www.aamerkazi.ca
                    </Typography>
                    <hr style={{ border: '0', borderTop: ".0625rem solid rgba(17,17,17,.05)", marginTop: '1.5rem', marginBottom: '1.5rem'}}/>
                    <Box sx={{ display: "flex", alignItems: 'top', justifyContent: 'flex-start', flexDirection: 'row', marginTop: '15px'}}>
                        
                        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '1rem', color: '#869ab8', fontWeight: '500' }}>
                        <PlaceIcon sx={{ fontSize: '20px', color: "#869ab8", marginRight: '10px'  }}/>
                        1140 Burnhamthorpe Road West, Suite 141, Mississauga, ON L5C 4E9, Canada
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography sx={{ fontSize: 'calc(1.275rem + .3vw)', fontFamily: "'Nunito Sans', sans-serif", marginTop: '30px' }}>
                Social Media
            </Typography>
            <Box id="content-container" sx={{ marginBottom: '100px', width: '90%', borderRadius: '0.5rem', border: '1px solid #dde1dd', backgroundColor: 'rgb(255,255,255)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxShadow: "0 .25rem 1.875rem rgba(42,53,79,.05)!important", padding: '20px', paddingTop: '40px', paddingBottom: '40px', marginTop: '30px' }}>
                <IconButton href="https://www.facebook.com/aamerkaziremax/" target="_blank" sx={{ backgroundColor: '#f2f2f2', '&: hover': {backgroundColor: '#4f6590', color: 'white'}, height: '70px', width: '70px' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://twitter.com/aamerakazi" target="_blank" sx={{ backgroundColor: '#f2f2f2', '&: hover': {backgroundColor: '#4f6590', color: 'white'}, height: '70px', width: '70px' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/aameralikazi/?hl=en" target="_blank" sx={{ backgroundColor: '#f2f2f2', '&: hover': {backgroundColor: '#4f6590', color: 'white'}, height: '70px', width: '70px' }}>
                  <Instagram />
                </IconButton>
            </Box>
        </Box>
    )
}