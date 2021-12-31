import loadingSpinner from'../images/loading.gif';

function Loading ({ }) {
    return (
        <div id='loading'>
            <h1>Loading Data...</h1>
            <img src={loadingSpinner} alt="spinner" />;
        </div>
    )
}
export default Loading;