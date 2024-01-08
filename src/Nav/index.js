import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

const Nav = () => {

    return (
        <div className="fixed-top d-flex justify-content-end px-5">
            <Link to={"/"} style={{textDecoration: 'none'}}><p className="text-center text-decoration-none">←Back</p></Link>
        </div>
    )
}

export default Nav;