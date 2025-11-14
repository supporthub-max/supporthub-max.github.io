import { createRoot } from 'react-dom/client';
import {Button, MaxUI} from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import App from './App.jsx';
import {useEffect} from "react";


const webs = window.WebApp;

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
    useEffect(() => {
        webs.ready();
    })


    const onClose = () => {
         webs.close();
    }

    return (<MaxUI>
        <Button onClick={onClose} />
    </MaxUI>)
    }
createRoot(document.getElementById('root')).render(<Root />);
