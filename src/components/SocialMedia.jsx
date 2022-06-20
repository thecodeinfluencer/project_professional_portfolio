import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const openSocial = (link) => {
  window.open(link, '_blank');
};

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() => {
        openSocial('https://www.linkedin.com/in/thecodeinfluencer/');
      }}
    >
      <BsLinkedin />
    </div>
    <div
      onClick={() => {
        openSocial('https://github.com/thecodeinfluencer/');
      }}
    >
      <BsGithub />
    </div>
    <div
      onClick={() => {
        openSocial('https://twitter.com/codeinfluencer/');
      }}
    >
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
