import Head from 'next/head'
import React, {
  useRef, useEffect
} from 'react';

let num =0; 
const questions =[
  {q:'おっぱいの大きさ',c:['巨乳','貧乳','気にしない']},
  {q:'お尻の大きさ',c:['巨尻','貧尻','気にしない']},
  {q:'女性の性格',c:['S','M','どちらでもない']},
  {q:'タイプ',c:['痴女','控えめ','気にしない']},
];



class Quiz extends React.Component{
  constructor(){
    super();
    this.state = { 
        huge: 0,
        sharp:0,
        marge:0,
        isAnswerd:false,
    }
  }

  


  conc(){
     if(this.state.huge===questions.length){
       return "julia"
     }
     if(this.state.sharp===questions.length){
       return "松本いちか"
     }
     if(this.state.marge===questions.length){
       return "わかるかボケ！！"
     }
     if(this.state.huge===questions.length-1 && this.state.sharp===questions.length-3){
       return "深田えいみ"
     }
     if(this.state.huge===questions.length-2 && this.state.sharp===questions.length-2){
       return "石川みお"
     }
     if(this.state.huge===questions.length-3 && this.state.sharp===questions.length-1){
       return "さつきめい"
     }else{
       return"ちゃんこ"
     }
     
    
    }

  plump()　{
     this.setState({
       huge: this.state.huge +1,
       isAnswerd:true
     })
     num++;
  }

  slim() {
     this.setState({
       sharp: this.state.sharp +1,
       isAnswerd:true
     })
     num++;
  }

  notcare() {
     this.setState({
       marge: this.state.marge + 1,
       isAnswerd:true
     })
     num++;
  }

  stop(){
    if(num===questions.length){
        return "あなたにおすすめのav女優は"
    }else{
      return questions[num].q      
    }
  }
  zero(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[0]       
    }
  }
  one(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[1]
    }
  }
  two(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[2]     
    }
  }
  check(){
    if(num===questions.length){
      document.getElementById("check").classList.remove('hidden')
        return this.conc()
    }else{
      return ""    
    }
  }

  rerend(){　　
    location.reload();
  }

  render() {
    return(
      <div className="w-9/12 h-4/5 bg-pink-100 mx-auto mt-10 rounded">
        <div className="quiz text-3xl text-center pt-5">Q:{this.stop()}</div>
          <ul id="ans" className="flex items-stretch justify-around mt-48">
            <li className="bg-purple-600 hover:bg-purple-400 text-white text-2xl w-20 h-10 text-center rounded align-bottom"
            onClick={()=>{
              this.plump();
            }}>
              {this.zero()}
            </li>

            <li className="bg-purple-600 hover:bg-purple-400 text-white text-2xl w-20 text-center rounded" onClick={()=>{
              this.slim();
              }}>
              {this.one()}
            </li>

            <li className="bg-purple-600 hover:bg-purple-400 text-white text-2xl w-36 text-center rounded h-10" onClick={()=>{
              this.notcare();}}>
              {this.two()}
            </li>
         </ul>
        <div id="check" className="hidden text-center bg-purple-100 w-76 h- mx-auto top-48 absolute inset-0 max-w-screen-xl max-h-full h-5/6 pt-52 text-3xl rounded h-full">あなたにおすすめのAV女優は{this.check()}です
          <div className="bg-green-500 hover:bg-green-300 text-white w-28 text-lg rounded mx-auto mt-5" onClick={()=>{
              this.rerend()
              }}>
            もう一度やる
          </div>
        </div>
      </div>  
    )
  }
}

                export default function Main() {
                  return (
                    <div className="w-9/12 h-screen bg-pink-600 rounded m-auto my-40 ">
                      <h1 className="text-center text-pink-300 text-3xl pt-10">AV女優診断</h1>
                      <Quiz/>
                    </div>
                  );
                }
