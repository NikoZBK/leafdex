import Upload from './upload';
import { ContextWrapper } from './uploadContext'; // updated path

function App() {
    return (
        <ContextWrapper>
            <Upload />
        </ContextWrapper>
    );
}

export default App;
