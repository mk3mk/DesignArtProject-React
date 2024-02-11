import { Outlet } from 'react-router-dom';
import { Header } from './Header'

const Layout = () => {
    return (
        <>

        <Header />

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">&copy; ReactRouter Tutorials 2022</footer>
        </>
    )
}

export {Layout}
