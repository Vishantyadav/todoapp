import { useEffect, useState } from "react";
import Card from './Cards';
import AddCards from "./AddCards";



function Home() {
    const [data, setData] = useState(null);

    return (
        <>
            <img style={{ height: '100vh', width: '100vw' }} src="https://images.pexels.com/photos/1325766/pexels-photo-1325766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." />
            <div className="container-fluid" style={{ position: 'absolute', top: '0', left: '0', height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(3px)' }}>
                <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
                    <div className="col-md-4">
                        <h3 className="display-1 text-white fst-italic">Manage Yourself & Set Goals</h3>
                        <AddCards data={data} setData={setData} />
                    </div>
                    <div className="col-md-6">
                        {
                            data ?
                                <div style={{overflowY:'scroll', height:'60vh'}}>
                                    <Card data={data} setData={setData} />
                                </div>

                                :
                                <h3 className="display-2 fw-bold text-white">Start Creating Your Goals</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;