const Button = ({className, handleClick, id, text}) => {
    return (
      <button className={className} onClick={handleClick} id={id}>{text}</button>
    )
}

export default Button