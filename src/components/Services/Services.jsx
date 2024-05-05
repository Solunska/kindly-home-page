import Service from '../Service/Service';
import './Services.css';
import childcare from '../../assets/childcare-icon.png';
import petcare from '../../assets/petcare-icon.png';
import eldercare from '../../assets/elder-care-icon.png';

export default function Services() {
    return (
        <div className='services-container'>
            <h1>Наши Услуги</h1>
            <p className='services-info'>Kindly е специјализиран за обезбедување извонредни услуги за нега, со фокус
                на здравјето и потребите за семејна грижа.</p>
            <div className='services-buttons-container'>
                <Service image={childcare} label="Нега за деца" />
                <Service image={eldercare} label="Нега за стари лица" />
                <Service image={petcare} label="Нега за миленичиња" />
            </div>
        </div>
    );
}