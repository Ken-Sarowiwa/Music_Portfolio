import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function Footer() {
  return (
    <div className='container'>

        <hr></hr>
        <div className='footer'>
            <strong><p>Follow Kenafrica on your favorite social media plattforms to get updated of his latest songs and albums</p></strong>
            <div className='icons'>
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://twitter.com/kennaroot" size="48"    
            />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://www.instagram.com/kenafrica4/" size="48"
            />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://www.youtube.com/channel/UCSOERVjocku5q1LuLuE2bxw" size="48"
            />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://twitter.com/kennaroot" size="48"
            />
        </div>
        </div>       
    </div>
  )
}
