import { Container, Navbar } from 'react-bootstrap';
import '../App.css';

const Header = () => {
    return (
        <Navbar fixed='top' bg='dark' variant='dark'>
            <Container>
                {/* <Navbar.Brand>
                    React TypeScript Project for Notes....
                </Navbar.Brand> */}
                <Navbar.Brand>
                    Todo List using ReactJs || TypeScript with React-Bootstrap....
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
