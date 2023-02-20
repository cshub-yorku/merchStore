import '../styles/Footer.css'
import reddit from '../assets/reddit.svg'
import discord from '../assets/discord.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import arrow from '../assets/arrow.svg'

export default function Footer(){
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
    <div className='footer'>
        <div className='content'>
            <div className='socials'>
                <div className='footer-head'>
                    Socials
                </div>
                <ul className='social-links'>
                    <li><a href = "https://instagram.com/cshub_york?utm_medium=copy_link" target="_blank"><img src={reddit} alt="reddit"></img></a></li>
                    <li><a href = "https://invite.gg/cshub" target="_blank"><img src={discord} alt="discord"></img></a></li>
                    <li><a href = "https://www.reddit.com/user/YorkCSHub/" target="_blank"><img src={instagram} alt="instagram"></img></a></li>
                    <li><a href = "https://www.facebook.com/thecshub/" target="_blank"><img src={facebook} alt="facebook"></img></a></li>
                </ul>
            </div>
            <div className='contact'>
                <div className='footer-head'>
                    Contact Us
                </div>
                <div className='textbox'>
                    <form className='email-box'>
                    <a className="mail" href = "mailto:cshubemail-here">
                        <label>
                            <input type="text" placeholder="Email address" name="mail"/>
                        </label>
                    </a>
                    </form>
                </div>
            </div>
        </div>
        <div className='bottom-text'>
            © 2023 CSHub
        </div>
    </div>
    );
}
