import '../styles/styles.scss';
import GlobalProvider from '../StateManagement/GlobalState';

function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    )
}

export default MyApp