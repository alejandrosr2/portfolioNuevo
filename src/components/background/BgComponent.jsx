import GenerateStars from '../generateStars/GenerateStars';
import './bgComponent.css';

const BgComponent = () => {
    return (
        <div className="background">
            <div className="starfield">
                {GenerateStars(60)}
            </div>
        </div>
    );
};

export default BgComponent;
