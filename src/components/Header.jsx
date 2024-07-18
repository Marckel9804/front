import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return(
    <div className={"Header"}>
      <Navbar bg="pink" data-bs-theme = 'dark'>
        <Container>
          <Link to={'/'} className={'navbar-brand'}>Main</Link>
          <Nav className='me-auto'>
            <Link to={'/joinForm'} className='navbar-brand'>회원가입</Link>
            <Link to={'/loginForm'} className='navbar-brand'>로그인</Link>
            <Link to={'/insertForm'} className='navbar-brand'>상품등록</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;