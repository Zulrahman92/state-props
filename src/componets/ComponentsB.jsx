const ComponentB = () => {

    let nombor = 10;

    const HandleButton = () => {
        nombor = 20;
        console.log(nombor);
    };

    return (
    <div>
    {nombor}
    <br />
    <button onClick={HandleButton}>Tukar Nombor</button>
    </div>);
};

export default ComponentB;