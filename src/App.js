import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [veri,setVeri]=useState();
  const [tarih,setTarih]=useState("23/07/2021");
  
  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setVeri(res.data[tarih]) )
    .catch(err=>console.log(err))
  },[veri,tarih]);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
          <h2 className="display-3 text-center text-white">TÜRKİYE COVİD-19 Arama Motoru</h2>
          <input type="text" className="form-control" placeholder="GG/AA/YY" onChange={(e)=>setTarih(e.target.value)} />
          <table className="table table-striped text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Günlük Test Sayısı</th>
              <th scope="col">Hasta Sayısı</th>
              <th scope="col">Vefat Sayısı</th>
            </tr>
          </thead>
          <tbody>
              <tr className="text-white">
              <th scope="row" className={veri===undefined ? "bg-danger" : "bg-success"}>{veri!==undefined ? veri.date : "Veri Bekleniyor"}</th>
              <td className={veri===undefined ? "bg-danger" : "bg-success"}>{veri!==undefined ? veri.tests : "Veri Bekleniyor"}</td>
              <td className={veri===undefined ? "bg-danger" : "bg-success"}>{veri!==undefined ? veri.patients : "Veri Bekleniyor"}</td>
              <td className={veri===undefined ? "bg-danger" : "bg-success"}>{veri!==undefined ? veri.deaths : "Veri Bekleniyor"}</td>
              </tr>
          </tbody>
        </table>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
