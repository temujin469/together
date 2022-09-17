import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../styles/navbar.css'
import '../styles/modalVideo.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import LoginModal from '../components/loginModal/LoginModal';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <LoginModal />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
