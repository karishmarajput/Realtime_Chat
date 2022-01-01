import './App.css';
import LoginForm from './components/LoginForm';
import { ChatEngine } from 'react-chat-engine';


const projectID='20eb15fa-2447-4808-aecf-34cfdd1ee771';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
