import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

/**
 * Here is an example where i see how i can fill information for social icon
 * activation, for it to send user to corresponding page, site, etc.
 * 
 * <SocialIconLink
    href='//www.twitter.com/briandesignz'
    target='_blank'
    aria-label='Twitter'
    rel='noopener noreferrer'
  >
  <FaTwitter />
  </SocialIconLink>
 */

const Footer = () => {
  return (
    <FooterContainer>

      <FooterWrap>

        <SocialMedia>

          <SocialMediaWrap>

            <SocialLogo to='/'>Pizza</SocialLogo>

            <SocialIcons>



              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>



              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>



              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>



              <SocialIconLink
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>


              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>


            </SocialIcons>


          </SocialMediaWrap>

        </SocialMedia>

      </FooterWrap>

    </FooterContainer>
  );
};

export default Footer;
