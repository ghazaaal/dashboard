import React from 'react';
import {Provider} from 'react-redux';
import './App.scss';
import {Container} from './style';
import store from "./reducers/store";
import Router from "./services/routes/Router";
import GlobalToast from "./components/GlobalToast";

function App() {
    return (
        <Provider store={store}>
            <GlobalToast/>
            <Container>
                <Router/>
            </Container>
        </Provider>
    );
}

export default App;
