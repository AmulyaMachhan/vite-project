import Ad from './Ad.jsx'
import Featured  from './Featured.jsx'
import Trending from './Trending.jsx'
import NewAdditions from './NewAdditions.jsx';
import IconicShoes from './IconicShoes.jsx';
import ShopBySports from './ShopBySport.jsx';
import MemberBenefits from './MemberBenefits.jsx';
function MainContainer(){
    return (
        <main>
            <Ad />
            <Featured />
            <Trending />
            <NewAdditions />
            <IconicShoes />
            <ShopBySports />
            <MemberBenefits />
        </main>
    )
}
export default MainContainer