import './Banner.scss';
import portfolioImg from '../../assets/images/portfolio-img.png';
import sribalajiCV from '../../assets/documents/Sri-Balaji-CV.pdf';
import reactIcon from '../../assets/images/react-icon.png';
import cssIcon from '../../assets/images/css-icon.png';
import jsIcon from '../../assets/images/js-icon.png';
import gitIcon from '../../assets/images/git-icon.png';

import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner-component'>
      <div className='banner-info-wrapper'>
        <span className='banner-welcome'>Hello!</span>
        <h3>I'm <span>Sri Balaji</span>, <br/> Front End Developer </h3>
      </div>
      <div className='banner-info-img'>
        <img src={portfolioImg} alt='Sri Balaji Portfolio Website Image' />
        <div className='floating-cta'>
          <ul>
            <li><a href={ sribalajiCV } className='btn-cta btn-cv' target='_blank'>Download CV</a></li>
            <li><Link to='/contact' className='btn-cta btn-hire'>Hire Me</Link></li>
          </ul>
        </div>
      </div>
      <div className='current-org'>
        <p>Currently working in <span>Born Group</span>, Tech Mahindra Company</p>
      </div>
      <div className='total-exp'>
        <p><span>4.5 Years</span> Experience</p>
      </div>
      <div>
        <div className='float-icon float-icon-size-m'>
          <img src={ reactIcon } alt='skill icon of sri balaji portfolio' />
        </div>
        <div className='float-icon float-icon-size-s'>
          <img src={ cssIcon } alt='skill icon of sri balaji portfolio' />
        </div>
        <div className='float-icon float-icon-size-s'>
          <img src={ jsIcon } alt='skill icon of sri balaji portfolio' />
        </div>
        <div className='float-icon float-icon-size-s'>
          <img src={ gitIcon } alt='skill icon of sri balaji portfolio' />
        </div>
      </div>
    </div>
  );
}

export default Banner;