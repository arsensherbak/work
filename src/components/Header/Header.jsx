import './Header.scss'
import logo from '../../image/logo_shiroke.png'
import { Facebook, Instagram, Youtube } from './svg/ImageSvg';

const Header = ()=>{
return (
<header className='header'>
  <article className='leftHeader'>
    <a href='https://shyroke.org.ua/' target="_blank">
      <img src={logo} width='150'/>
    </a>
  </article>
         
  <article className='rightHeader'>
    <div> Ми в соцмережi</div>
    <div className='rightHeaderBot'>
      <Facebook/>
      <Youtube/>
      <Instagram/>
    </div>
  </article>
</header>
)
}
export default Header;