import './Headers.css';
import Profile from "./UI/profile/profile";

function Headers() {
  return (
    <header>
      <nav>
        <div className="Top">
          <h1>React Todo Header</h1>
          <Profile />
        </div>
      </nav>
    </header>
  );
}

export default Headers;