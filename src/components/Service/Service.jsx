import './Service.css';

export default function Service({image, label}){
    return (
        <div className='service-container'>
            <img src={image} alt="service image" />
            <p className='service-label'>{label}</p>
        </div>
    );
}