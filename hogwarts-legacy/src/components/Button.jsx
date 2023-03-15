const Button = ({href, text}) => {
    console.log(href,text)
    return (
        <>
            <a href={href} target='_blank' rel='noreferrer'><button className="home-btn">{text}</button></a>
        </>
    )
}

export default Button