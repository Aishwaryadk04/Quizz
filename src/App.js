import { useEffect, useState } from 'react';
import './App.css';
import { quizData } from './Components/quizzData';

const backgroundImages =  [
  'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200',
  'https://static.toiimg.com/thumb/msid-80421029,width-1280,resizemode-4/80421029.jpg',
  'https://www.g20.org/content/dam/gtwenty/gtwenty_new/explore_india/Culture%20Heritage%20of%20India_1.jpg',
  'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
  'https://images.contentstack.io/v3/assets/bltacc1a01c4d280f24/blt5f4264cfc4ab9e8c/61847e47912a3c799bc42c4c/Taj_Mahal_New_Delhi_India.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop',
  'https://www.bridgeindia.org.uk/wp-content/uploads/2022/01/home-header-image-1600x900.jpg',
  'https://cdn.britannica.com/12/1612-050-8A4D277F/Settlement-Kullu-Valley-India-Himachal-Pradesh.jpg',
  'https://images.axios.com/wLi0s3Pcl6LVFNheenhlXWG_NiU=/0x638:6123x4082/1920x1080/2023/01/09/1673275741989.jpg',
  'https://www.japantimes.co.jp/uploads/imported_images/uploads/2023/03/np_file_217171.jpeg',
  'https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg'

 
 ];

function App() {
  const [ currentQ, setCurrentQ] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score,setScore] = useState(0)
  const [bg,setBg] = useState('https://images2.alphacoders.com/132/1329016.pnghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuq4hvcAiZ_ECPBo_A4cIYkHEabMn077wm4g&usqp=CAU')
 const getRandomBg = ()=>{
  const randomBg = backgroundImages[Math.floor(Math.random()*backgroundImages.length)]
  setBg(randomBg)
 }
 const handleAnswerButton = (isCorrect)=>{
  if(isCorrect === true){
    setScore(score + 1)
    
  }
  const nextQ = currentQ +1;
  if(nextQ < quizData.length){
    setCurrentQ(nextQ)
  } else{
    setShowScore(true)
  }
}

 useEffect(()=>{
  getRandomBg()
 },[handleAnswerButton])

 const handleReset =()=>{
  setCurrentQ(0)
  setShowScore(false)
  setScore(0)
 }
 
  return (
    <div className='body' style={{background:`url(${bg})`,transition:'background-image 0.75s ease-out',height:'100vh'}}>
    <div className='container'>
      <h1 style={{color:'darkgrey', fontSize:'40px'}}>My India </h1>
         {showScore?
          (
          <div className='score-card'>
            Your Score : <br /> <span style={{fontSize:'90px'}}>{score}/10</span>
            <div className="replay-btn">
              <button onClick={handleReset}>Try Again</button>
            </div>
          </div>
           ):
           (
          <div className='question-card'>
            <h3 className='qNum'>{currentQ+1}/{quizData.length}</h3>
            <h3 className='qText'>{quizData[currentQ].questionText}</h3>
            {quizData[currentQ].answerOption.map((answerOption)=>(
               <div className='btn'>
              <button onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
              </div>
            ))}
          </div>
           )
            }
    </div>
    </div>
  );
}

export default App;