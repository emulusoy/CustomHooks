import './App.css'
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {;
  const {count,increase,decrease}=useCounter()
  const {open,change}=useToggle();
  const [copied,copy]=useCopyToClipboard("KOPYALAYACAĞIN METİN");
  return (
    
      <div>
        
        <div>{count}</div>
        <button onClick={increase}>Artı</button>
        <button onClick={decrease}>Eksi</button>
        {open && <div style={{width:"300px", backgroundColor:"aqua", height:"300px", borderRadius:"100px"}}></div>}
        <button onClick={change}>{open ? "Gizle":"Göster"}</button>
        
        {copied && 'kopyalandı'}
        <button onClick={copy}>Kopyala</button>


    </div>
  )
}

export default App
