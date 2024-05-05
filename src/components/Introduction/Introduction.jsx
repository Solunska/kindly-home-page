import logo from '../../assets/logo.png';
import Button from '../Button/Button';
import './Introduction.css';

export default function Introduction() {
    return (
        <div className="introduction-container">
            <div className='info-container'>
                <img src={logo} alt="kindly logo" className='logo-img' />
                <h1>Kindly</h1>
                <p>Обединување на семејства со извондредни локални негуватели.</p>
                <Button>Пронајдете грижа тука</Button>
            </div>
            <div className='background-container'>
            </div>
        </div>
    );
}