import React, { useState } from 'react'
import Features from '../Components/Features'

const Home = () => {
  const departurePlace = ['Mombasa', 'Nairobi', 'Kisumu', 'Nakuru', 'Eldoret', 'Mariakani', 'Malindi', 'Busia', 'Daresalam', 'Kampala'];
  const destinationPlace = ['Mombasa', 'Nairobi', 'Kisumu', 'Nakuru', 'Eldoret', 'Mariakani', 'Malindi', 'Busia', 'Daresalam', 'Kampala'];

  const [showStartingOptions, setShowStartingOptions]=useState(false);
  const [showEndingOptions, setShowEndingOptions]=useState(false);

  const [selectedStartingPoint, setSelectedStartingPoint] = useState('');
  const [selectedEndingPoint, setSelectedEndingPoint] = useState('');

  const  [startingfilterText, setStartingFilterText] = useState('');
  const  [endingfilterText, setEndingFilterText] = useState('');
  
  const [seatNumber, setSeatNumber] = useState(1);

  const filteredStartingPoints = departurePlace.filter(point =>
    point.toLowerCase().includes(startingfilterText.toLowerCase())
    );
    
    const filteredEndingPoints = destinationPlace.filter(point =>
      point.toLowerCase().includes(endingfilterText.toLowerCase())
      );
    const handleStartingInputChange = (e) => {
      const text = e.target.value;
      setStartingFilterText(text);
      setShowStartingOptions(true);
      setSelectedStartingPoint('');
    };

    const handleEndingInputChange = (e) => {
      const text = e.target.value;
      setEndingFilterText(text);
      setShowEndingOptions(true);
      setSelectedEndingPoint('');
    };
    
    const handleSeatInputChange= (e) => {
      const count = parseInt(e.target.value); 
      setSeatNumber(count);    
    };

    const handleStartingOptionClick = (point) => {
      setSelectedStartingPoint(point);
      setShowStartingOptions(false);
    };
    const handleEndingOptionClick = (point) => {
      setSelectedEndingPoint(point);
      setShowEndingOptions(false);
    };
    
  return (
    <>
      <div className=' sm:mt-[95px] mt-[52px] bg-img flex justify-center items-end'>
        <div className=' bg-orange-500 sm:py-4 py-2 px-2  sm:mx-[40px] rounded-t-[5px]' >
          <h1 className=' font-extrabold sm:text-[28px] text-[18px]'>Book <span className=' text-white'>Pay</span> Travel</h1>
          <p className=' sm:text-[18px] text-[16px]'>Easy, safer and convinient booking</p>
         <form  className=' flex space-x-1'>
           <div className='  flex-1'>
             <input type="text"
               placeholder='From'
               value={selectedStartingPoint}
               onChange={handleStartingInputChange}
               onClick={ () => setShowStartingOptions(!showStartingOptions)}
               className='w-full sm:px-4 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-[14px] '
              />
              {showStartingOptions && (
              <div className=' absolute z-10 w-fit mt-1 bg-white shadow-lg rounded-md'>
                {filteredStartingPoints.map((point, index) => (
                  <div key={index}
                   onClick={ () => handleStartingOptionClick(point)} className=' cursor-pointer sm:px-4 px-2 py-2 hover:bg-gray-100 text-[14px]'                  
                  >
                    {point}
                  </div>
                ))}
                {filteredStartingPoints.length ===0 && (
                  <div className=' px-4 py-2 to-gray-500'>No matching place</div>
                )}
              </div>
             )}
           </div>
           <div className=' flex-1'>
             <input type="text" 
               placeholder='To'
               value={selectedEndingPoint}
               onChange={handleEndingInputChange}
               onClick={ () => setShowEndingOptions(!showEndingOptions)}
               className='w-full sm:px-4 px-2 py-2 z-0 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-[14px] '
             />
              {showEndingOptions && (
               <div className=' absolute z-10 w-fit mt-1 bg-white shadow-lg rounded-md'>
                 {filteredEndingPoints.map((point, index) => (
                   <div key={index}
                    onClick={ () => handleEndingOptionClick(point)} className=' cursor-pointer sm:px-4 px-2 py-2 hover:bg-gray-100 text-[14px]'                  
                   >
                     {point}
                   </div>
                 ))}
                 {filteredEndingPoints.length ===0 && (
                   <div className=' px-4 py-2 to-gray-500'>No matching place</div>
                 )}
               </div>
             )}
           </div>
           <div className='  flex-1'>
            <input type="number" 
            placeholder='seats'
            value={seatNumber}
            min={1}
            onChange={handleSeatInputChange}
            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-[14px] '
            />
           </div>
           <div className='  flex-1'>
            <button type='submit'className='w-full px-4 py-2 rounded-md border border-gray-300 text-[14px] hover:bg-orange-400'>Search</button>
           </div>

          </form>
        </div>
      </div>     
      <Features/>
    </>
  )
}

export default Home
