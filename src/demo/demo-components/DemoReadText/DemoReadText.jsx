import './DemoReadText.css'

export default function DemoReadText({ text }) {

  
  return !text ? 'Loading ...' 
  : (    
  <div className="read-text">

    <div className="bottom">
      <div className="read-text-block">
        <p className="zh">{text.content}</p>
      </div>
    </div>
        
  </div>
        

      
  )
}