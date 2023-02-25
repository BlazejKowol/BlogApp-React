const Button = props => {

    return (
        <button className="btn btn-light border-info bg-transparent py-0">
            {props.children}
        </button>
    )
}

export default Button