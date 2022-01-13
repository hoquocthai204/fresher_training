import { Header } from '../../shared/components/header'
import { Introduce } from '../../shared/components/introduce';
import { HomePage } from '../Home/home'
import { LoginPage } from '../Login/login';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  const dispatch = useDispatch()
  const states = useSelector(state => state.home);
  const loginStates = useSelector(state => state.login);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(states.language.code)
  }, [states.language])

  return (
    <div className="App">
      <Router>

        <Header t={t} />
        <Introduce text={t('Introducing_Highstreet')} more={t('Introducing_Highstreet_more')} />

        <Routes>
          {
            loginStates.auth.token ?
              <Route path="/login" element={<Navigate replace to="/" />} /> :
              <Route path='/login' element={<LoginPage />} />
          }
          <Route path='/login' element={<LoginPage t={t} />} />

          <Route path='/' element={<HomePage t={t} />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
