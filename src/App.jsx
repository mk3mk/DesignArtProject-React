import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Our_contacts } from './pages/Our_contacts';
import { Our_team } from './pages/Our_team';
import { Panel1 } from './pages/Panel1';
import { Panel2 } from './pages/Panel2';
import { Panel3 } from './pages/Panel3';

import { Blogpage } from './pages/Blogpage';
import { Storepage } from './pages/Storepage';
import { Contacts } from './pages/Contacts';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Singlepage } from './pages/Singlepage';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}>
            <Route index path="about/our_contacts" element={<Our_contacts />} />
            <Route path="about/our_team" element={<Our_team />} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="storepage" element={<Storepage />} />
          <Route path="contacts" element={<Contacts />} >
            <Route path="contacts/panel1" element={<Panel1 />} />
            <Route path="contacts/panel2" element={<Panel2 />} />
            <Route path="contacts/panel3" element={<Panel3 />} />
          </Route>
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
