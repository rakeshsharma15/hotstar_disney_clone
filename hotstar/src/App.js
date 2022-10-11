import { useRef ,useEffect,lazy, Suspense} from 'react';
import './App.css';

const Box =lazy(()=>import('./HotStarr/box/Box'))
const Navigation=lazy(()=>import('./HotStarr/Navigation/Navigation'))
const Sliderone =lazy(()=>import('./HotStarr/Sliderone/Sliderone'))
const Topslider =lazy(()=>import('./HotStarr/Topslider/Topslider'))

function App() {
  return (
    <div className="appbar">
    <Suspense fallback={<div></div>}>
   <Navigation/>
   <Topslider/>
   <Box/>
   <Sliderone/>
   </Suspense>
    </div>
  );
}

export default App;
