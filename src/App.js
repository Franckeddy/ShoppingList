import './assets/scss/app.scss';
import Home from "./pages/Home";
import Menu from "./components/Menu";
import CourseAdd from "./pages/CourseAdd";
import CourseListe from "./pages/CourseListe";

function App() {
    return (
        <div className="App">
            <Menu />
            <Home />
            <CourseAdd />
            <CourseListe />
        </div>
    );
}

export default App;
