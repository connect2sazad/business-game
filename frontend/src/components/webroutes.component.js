import { Routes, Route } from 'react-router-dom';
import GamePage from '../pages/game';

const WebRoutes = () => {
    return(
        <Routes>
            <Route exact path='/' element={<GamePage/>} />
            <Route exact path='/home' element={<GamePage/>} />
            <Route exact path='/game' element={<GamePage/>} />
        </Routes>
    );
}

export default WebRoutes;