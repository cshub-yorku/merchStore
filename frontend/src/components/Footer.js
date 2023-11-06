import '../styles/Footer.css'
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, Button, IconButton, List, ListItem, FormControl, FormLabel, Link, Input} from "@mui/material";
import { useTheme } from "@emotion/react";


export default function Footer(){
    const theme = useTheme();

    return (
        // <div className="contacts">
        // <div>
        //     <a href="https://instagram.com/cshub_york?utm_medium=copy_link">
        //         <img src={reddit} alt="reddit"></img>
        //     </a>
        // </div>
        // <div>
        //     <a href="https://invite.gg/cshub">
        //         <img src={discord} alt="discord"></img>
        //     </a>
        // </div>
        // <div>
        //     <a href="https://www.reddit.com/user/YorkCSHub/">
        //         <img src={instagram} alt="instagram"></img>
        //     </a>
        // </div>
        // <div>
        //     <a href="https://www.facebook.com/thecshub/">
        //         <img src={facebook} alt="facebook"></img>
        //     </a>
        // </div>
        // </div>
    <Box sx={{aspectRatio: "100 / 12.5",
              backgroundColor: '#1f1e3a',
              [theme.breakpoints.down('tablet')]: {
                aspectRatio: '100/25'
            }}}>

        <Box sx={{  paddingTop: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    [theme.breakpoints.down('tablet')]: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}}>

            <Box sx={{marginLeft: '3vw',
        [theme.breakpoints.down('tablet')]: {
            marginLeft: '5vw'
        }}}>
                <Box sx={{fontSize: '1.5rem',
                          paddingLeft: '0.8rem',
                          [theme.breakpoints.down('tablet')]: {
                            marginTop: '2vw'
                        },
                        [theme.breakpoints.down('mobile')]: {
                            paddingLeft: "35%",
                            padingRight: "auto"
                        }
                        }}>
                    Socials
                </Box>
                    <List sx={{display: 'flex',
                             flexDirection: 'row',
                             listStyle: 'none',}}>
                        <ListItem>
                            <IconButton
                                    onClick={()=> window.open("https://www.reddit.com/user/YorkCSHub/", "_blank")}
                                    className="redditIcon"
                                    size="large"
                                    edge="start"
                                    sx={{ color: "text.primary",
                                    "&:hover": {
                                        transform: "scale(110%)"
                                      }, }}
                                    >
                                <RedditIcon fontSize="large"></RedditIcon>
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton
                                    onClick={()=> window.open("https://www.facebook.com/thecshub/", "_blank")}
                                    className="redditIcon"
                                    size="large"
                                    edge="start"
                                    sx={{ color: "text.primary",
                                    "&:hover": {
                                        transform: "scale(110%)"
                                      }, }}
                                    >
                                <FacebookIcon fontSize="large"></FacebookIcon>
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton
                                    onClick={()=> window.open("https://www.instagram.com/cshub_york/?hl=en", "_blank")}
                                    className="redditIcon"
                                    size="large"
                                    edge="start"
                                    sx={{ color: "text.primary",
                                    "&:hover": {
                                        transform: "scale(110%)"
                                      }, }}
                                    >
                                <InstagramIcon fontSize="large"></InstagramIcon>
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton
                                    onClick={()=> window.open("https://invite.gg/cshub", "_blank")}
                                    className="redditIcon"
                                    size="large"
                                    edge="start"
                                    sx={{ color: "text.primary",
                                    "&:hover": {
                                        transform: "scale(110%)"
                                      }, }}
                                    >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-discord" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>
                            </IconButton>
                        </ListItem>
                        
                    </List>
            </Box>
            <Box sx={{marginRight: '10vw',
            
                    [theme.breakpoints.down('tablet')]: {
                        marginLeft: '4vw',
                        marginTop: '1vh'
                    },
                    [theme.breakpoints.down('mobile')]: {
                        paddingLeft: "13%",
                        padingRight: "auto"
                    }
                    }}>
                <Box sx={{fontSize: '1.5rem',
                          paddingLeft: '0.8rem',
                          [theme.breakpoints.down('mobile')]: {
                            paddingLeft: "20%",
                            padingRight: "auto"
                        }
                          }}>
                    Contact Us
                 
                     
                     
                </Box>
                <Box sx={{ padding: '0.8rem'}}>
                    <FormControl className='email-box'>
                        <Link className="mail" href = "mailto:cshubemail-here">
                            <FormLabel sx={{position: 'relative',
                            "&::after":{
                                // content: "",
                                position: '-moz-initial',
                                right: '10px',
                                top: '0',
                                bottom: '0',
                                width: '28px',
                                background: 'url("../assets/arrow.svg")',
                                cursor:'pointer',
                            }
                        }}>
                                <Input type="text" placeholder="Email address" name="mail" sx={{
                                backgroundColor: '#f1f1f1',
                                color: 'black',
                                width: '100%',
                                padding: '5px',
                                margin: '8px 0',
                                display: 'inline-block',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box',
                                borderRadius: '5px',                            
                                }}/>
                            </FormLabel>
                        </Link>
                    </FormControl>
                </Box>
            </Box>
        </Box>
        <Box sx={{ marginLeft: '3vw',
                paddingLeft: '0.8rem',
                marginTop: '4vh',
                color: '#c1c4c7',}}>
            © 2023 CSHub
        </Box>
    </Box>
    );
}
