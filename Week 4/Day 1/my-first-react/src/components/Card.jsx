const Card = ({title, description}) => {
    return (
        <div className="card">
            <p>Title: {title}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default Card;