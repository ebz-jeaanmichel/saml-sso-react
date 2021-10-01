import { useState, useEffect } from 'react';
import api from './services/api';

function App() {
  const [user, setUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const response = await api.get('/protected');

        const user = response.data.user;

        setUser(user.cn);
        setIsAuthenticated(true);

        console.log(user)

      } catch(err) {
        setUser('');
        setIsAuthenticated(false);
      }
    }

    getAuthUser();
  }, []);

  // if (!user) {
  //   return (
  //     <p>Loading...</p>
  //   );
  // }

  return (
    <div>
      <h1>Home page</h1>
      { !isAuthenticated ? <a href="http://localhost:3000/user/v1/login/sso">Autenticar</a> : <p>Olá, {user}</p>}
    </div>
  );
}

export default App;
