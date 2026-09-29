import StrawberryCake from '../assets/graphic-design/strawberry-cake.jpg'
import MangoCake from '../assets/graphic-design/mango-cake.jpg'
import MelonSoda from '../assets/graphic-design/melon-soda.jpg'
import BxBEnemyHitOne from '../assets/game-art/Enemy Hit 1.gif'
import BxBEnemyHitTwo from '../assets/game-art/Enemy Hit 2.gif'
import BxBParry from '../assets/game-art/Parry.gif'
import BxBPlayerHit from '../assets/game-art/Player Hit.gif'
import UGGTitleScreen from '../assets/game-art/Title Screen Background.jpg'
import UGGcreen from '../assets/game-art/Untitled Ghost Game.jpg'

import '../index.css'

function Design () {
   return (
    <div className="flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
        <h2 className="text-2xl text-green tracking-wide pb-5">
          design.
        </h2>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='grid grid-cols-3 gap-5 place-items-center'>
            <img src= {StrawberryCake}/>
            <img src= {MangoCake}/>
            <img src= {MelonSoda}/>
            <img src= {BxBEnemyHitOne}/>
            <img src= {BxBEnemyHitTwo}/>
            <img src= {BxBPlayerHit}/>
            <img src= {BxBParry}/>
            <img src= {UGGTitleScreen}/>
            <img src= {UGGcreen}/>
        </div>

        <a href='/' className='font-bold text-pink pt-5'>home →</a>
        <footer className='flex justify-between pt-5 static'>
            <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
            <div className='flex gap-5'>
                <a href='https://www.linkedin.com/in/khadijastewart/'className='text-xs text-white underline'>Linkedin</a>
                <a href='https://github.com/stwrtka'className='text-xs text-white underline'>GitHub</a>
            </div>
        </footer>
    </div>
   )
}

export default Design;
