import './button.css';

const Button = ({ text, onClick, className, href, icon: Icon }) => {
    return (
        <div className="button-wrapper">
            {href ? (
                <a
                    className={`custom-button ${className || ""}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {Icon && <Icon className="button-icon" />}
                    {text}
                </a>
            ) : (
                <button
                    className={`custom-button ${className || ""}`}
                    onClick={onClick}
                >
                    {Icon && <Icon className="button-icon" />}
                    {text}
                </button>
            )}
            <div className="button-reflection" />
        </div>
    );
};

export default Button;
