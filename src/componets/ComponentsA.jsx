import { useEffect, useState } from "react";

const ComponentA = ({nomborA}) => {
    const [isLapar, setIsLapar] = useState(true);
    const [nama, setNama] = useState("");

    const HandleButton = () =>{
        alert("Yummy");

        setIsLapar(false);
    };

    const HandleInput = (event) => {
        setNama(event.target.value);
        console.log(`Old: ${nama}`)
    };

    useEffect(() => {
        if(nama.toLowerCase() == "zulrahman"){
            alert("Impostor");
        }

        // return () => {
        //     alert("keluar ke tu");
        // }
    }, [isLapar, nama]);

    return (<div style ={{display:"flex", flexDirection: "column" , gap:16 , fontSize: 36 }}>

        Nombor daripada App:{nomborA}
        Lapar Ke?{isLapar.toString()} 
        <button onClick={HandleButton}>Makan</button>
        <input style = {{padding: "16px 32px", fontSize: 24 }} 
        name="nama" 
        value={nama}
        onChange={HandleInput}/>
        </div>);
};

export default ComponentA;