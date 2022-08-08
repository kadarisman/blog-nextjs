import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="container">
      <Navbar/>
      <Jumbotron/>
    </div>
  )
}

