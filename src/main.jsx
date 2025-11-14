import { createRoot } from 'react-dom/client';
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import App from './App.jsx';


const webs = window.WebApp.initData;
console.log(webs);
// eslint-disable-next-line react-refresh/only-export-components
function Root() {
    return (<MaxUI>
        <App />
    </MaxUI>)
    }
createRoot(document.getElementById('root')).render(<Root />);
