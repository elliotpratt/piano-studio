import './Page.css';
import pianoReflection from "../assets/piano_horiz.jpeg";

export default function Home() {
    return (
        <div className="page-content">
            <img
                src={pianoReflection}
                alt="Eliana sitting at a piano"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 'calc(100vh - var(--navbar-height) - var(--bottom-bar-height))',
                    objectFit: 'contain',
                }}
            />
            <h1>Welcome to Eliana Cook's website!</h1>
            <h2>About Eliana</h2>
            <p>This is some pretty cool info about Eliana</p>
            <h2>Interested in taking lessons?</h2>
            <p>Learn more here</p>
        </div>
    );
}