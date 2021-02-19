//public only route
import Splash from '../components/splash/splash';

export default function landing(props) {

    return(
        <main>
            <Splash setUser={props.setUser}/>
        </main>
    );
};