import Attributes from './Attributes';

function Footer(){

    const date = new Date().getFullYear();


    return (
        <div className='footer'>
            <h4>Designed by <span>Damian Piotrowski</span>, Warsaw, Poland {date}</h4>
            <Attributes />
        </div>
    );
}

export default Footer;