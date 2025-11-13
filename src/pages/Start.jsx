import {Flex, Button} from '@maxhub/max-ui';

function Start() {


       return (
        <Flex gap = {12} direction = {"column"}>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Социальный ассистент
            </Button>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Медицинская помощь
            </Button>
            <Button appearance="themed" mode="primary"  onClick={() => {}} size="medium">
                Психологическая консультация
            </Button>

        </Flex>)

}

export default Start;