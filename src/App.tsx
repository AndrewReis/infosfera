import React from 'react';
import Landing from './pages/Landing';
import { GlobalStyle } from './styles/GlobalStyle';

const App:React.FC = () => {
    return(
        <>
            <GlobalStyle />
            <Landing />
        </>
    );
} 


export default App;
