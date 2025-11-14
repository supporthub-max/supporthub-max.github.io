import { createRoot } from 'react-dom/client';
import { Button, MaxUI, Grid, Panel } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import { useEffect } from "react";

const webs = window.WebApp;

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
    useEffect(() => {
        webs.ready();
    })

    const onClose = () => {
        webs.close();
    }

    return (
        <MaxUI>

            <div style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '60px 20px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                    SupportHub в MAX
                </h1>
                <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
                    Выберите нужный вам раздел
                </p>
            </div>

            <Panel mode="secondary" style={{ padding: '40px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#403f4b' }}>
                <Grid gap={25} cols={1} style={{ width: '100%', maxWidth: '600px' }}>
                    <Button
                        appearance="filled"
                        mode="primary"
                        color="orange"
                        onClick={function() { handleButtonClick('Социальная поддержка') }}
                        size="large"
                        fullWidth
                        style={{
                            height: '80px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            backgroundColor: '#007bff'
                        }}
                    >
                        Социальная поддержка
                    </Button>

                    <Button
                        appearance="filled"
                        mode="primary"
                        color="blue"
                        onClick={function() { handleButtonClick('Медицинская помощь') }}
                        size="large"
                        fullWidth
                        style={{
                            height: '80px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            backgroundColor: '#007bff'
                        }}
                    >
                        Медицинская помощь
                    </Button>

                    <Button
                        appearance="filled"
                        mode="primary"
                        color="blue"
                        onClick={function() { handleButtonClick('Психологическая поддержка') }}
                        size="large"
                        fullWidth
                        style={{
                            height: '80px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            backgroundColor: '#007bff'
                        }}
                    >
                        Психологическая поддержка
                    </Button>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Button
                            onClick={onClose}
                            appearance="outline"
                            size="medium"
                            style={{
                                height: '80px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                backgroundColor: '#007bff'
                            }}
                        >
                            Закрыть приложение
                        </Button>
                    </div>
                </Grid>
            </Panel>
        </MaxUI>
    )
}

createRoot(document.getElementById('root')).render(<Root />);