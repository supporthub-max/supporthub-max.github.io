import {Grid, Button} from '@maxhub/max-ui';

function Start() {


       return (
        <Grid cols={1} rows={3} gap = {12}>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Социальный ассистент
            </Button>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Медицинская помощь
            </Button>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Психологическая консультация
            </Button>

        </Grid>)

}

export default Start;