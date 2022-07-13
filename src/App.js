import './App.css';
import {Route, Routes, Navigate} from "react-router";

// 一般组件
import Header from "./lib/components/header";
import Footer from './lib/components/footer'

// 路由组件
import Home from "./lib/pages/home";
import Article from "./lib/pages/article";
import Detail from "./lib/pages/detail";

function App() {
    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/article' element={<Article/>}/>
                <Route path='/detail' element={<Detail/>}/>
                <Route path='/' element={<Navigate to='/home'/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
