import Navbar from "../navbar/Navbar";
import Future from "../Future/Future";
import Home from "../Home/Home";
import "./app.scss"
import HowItWork from "../howItWork/HowItWork";
import Courses from "../Courses/Courses";
import Mentor from "../Mentor/Mentor";
import EducationStatis from "../EducationStatis/EducationStatis";
import Blog from "../Blog/Blog";
import StudentSay from "../StudentSay/StudentSay";
import InputComment from "../InputComment/InputComment";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Future />
      <HowItWork />
      <Courses />
      <Mentor />
      <EducationStatis />
      <Blog />
      <StudentSay />
      <InputComment />
      <Footer />
    </div>

);
}

export default App;
