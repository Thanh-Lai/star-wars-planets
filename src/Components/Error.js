import errorImg from'../images/error.jpeg';

function Error () {
    return (
        <div className='center' >
            <h1>There has been an Error!</h1>
            <img src={errorImg} alt="error" />;
        </div>
    )
}
export default Error;
