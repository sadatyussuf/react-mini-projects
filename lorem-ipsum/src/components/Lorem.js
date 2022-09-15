
function Lorem({text}) {


    return (
        <article className="lorem-text">
            {text.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
        </article>
    );
}

export default Lorem;
