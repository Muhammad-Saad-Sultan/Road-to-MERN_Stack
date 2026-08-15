const Button = ({label, color}) => {
  return (
        <button className="button" style={{backgroundColor: color}}>{label}</button>
  );
};

export default Button;