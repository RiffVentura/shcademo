import reactLogo from './assets/react.svg'

export const Loader = () => {
    return (
        <div className="loader">
            <img src={reactLogo} className="logo" alt="Loading" />
            <p>Loading...</p>
        </div>
    );
}