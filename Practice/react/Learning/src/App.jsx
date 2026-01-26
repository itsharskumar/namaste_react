
const App=()=>{

    return <div>
        <Card>hi there</Card>
    </div>
}

const Card=({children})=>{

    return <span style={{background:"black",padding:"10px" ,color:"white"}}>
        <input type="text"></input>
        {children}
        </span>
}

export default App;