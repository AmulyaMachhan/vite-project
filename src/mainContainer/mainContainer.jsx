import Ad from './Ad.jsx'
import Featured  from './Featured.jsx'
import Trending from './Trending.jsx'
import NewAdditions from './NewAdditions.jsx';
function MainContainer(){
    return (
        <main>
            <Ad />
            <Featured />
            <Trending />
            <NewAdditions />
        </main>
    )
}
export default MainContainer