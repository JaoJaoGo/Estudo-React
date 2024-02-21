import bluelobster from '../assets/lobster.jpg';

const Images = () => {
    return (
        <div className="Imagens">
            <img src="/aifolou.jpg" alt='Aifolou'/>
            <img src={bluelobster} alt="Lobster" />
        </div>
    )
}

export default Images;