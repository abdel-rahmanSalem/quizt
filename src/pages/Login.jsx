import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  return (
    <>
      <Link to="/dashboard">
        <Button type="primary">Login</Button>
      </Link>
    </>
  );
}

export default Login;
