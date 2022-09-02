import BgCard from './assets/bg-pattern-card.svg'
import BgTop from './assets/bg-pattern-top.svg'
import BgBottom from './assets/bg-pattern-bottom.svg'
import Profile from './assets/image-victor.jpg'

function App() {
  return (
    <div className="flex justify-center items-center h-screen">

      <div>
        <img src={BgTop} alt="" className='top' />
      </div>
      
      <div className='rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-[#fff]'>

        <img src={BgCard} alt="" />

        <div className='flex flex-col items-center justify-center w-full'>
          <img src={Profile} alt="" className=' border-4 border-[#fff] rounded-full relative bottom-12 mb-[-20px]'/>

          <div className='flex flex-row justify-between items-center mb-1'>
            <h1>Victor Crest</h1>
            <p className='ml-4'>26</p>
          </div>



          <p className='mb-6'>London</p>

          <hr className='w-full'/>

        </div>

        <div className='grid grid-cols-3 gap-10 mb-4'>
          <ul className='flex flex-col justify-center items-center'>
            <li>80K</li>
            <li>Followers</li>
          </ul>

          <ul className='flex flex-col justify-center items-center'>
            <li>803K</li>
            <li>Likes</li>
          </ul>

          <ul className='flex flex-col justify-center items-center'>
            <li>1.4K</li>
            <li>Photos</li>
          </ul>
        </div>
      </div>

      <div>
        <img src={BgBottom} className="bottom" alt="" />
      </div>

    </div>
  );
}

export default App;
