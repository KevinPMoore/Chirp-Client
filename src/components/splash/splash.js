
import './splash.css';

export default function splash(props) {

    return(
        <div className='splash'>
            <button
                className='splash-button'
                onClick={() => props.setUser('test')}
            >
                LOGO INSIDE ME
            </button>
        </div>
    );
};