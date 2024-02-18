import React from "react";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "Web Developer",
    github: "https://github.com/yourgithubusername",
    linkedin: "https://www.linkedin.com/in/yourlinkedinusername",
  };

  return (
    <div>
      <Home user={user} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
