function Hello() {

    const getName = (yourName) => {
        return yourName;
    };

    function handleClick() {
        alert("Button was clicked!");
    }

    const handleInput = (event) => {
        console.clear();
        console.log("Value:", event.target.value);
    };

    const handleMouseOver = () => {
        console.log("Mouse is over the text!");
    };

    const handleDoubleClick = () => {
        console.log("Text double clicked!");
    };

    const name = "aayushi";
    const name1 = "yahuBaba";

    return (
        <>
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>

            <p
                onMouseOver={handleMouseOver}
                onDoubleClick={handleDoubleClick}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Et corrupti cupiditate distinctio quisquam accusantium facilis,
                consectetur hic dolorum aliquam itaque commodi ea eveniet in
                reprehenderit? Sunt itaque libero ab ipsam.
            </p>

            <button onClick={handleClick}>
                Click me
            </button>

            <button onClick={() => alert("Hello from inline function!")}>
                Say hello
            </button>

            <br />

            <input
                type="text"
                onChange={handleInput}
                placeholder="Type something"
            />
        </>
    );
}

export default Hello;

































// // import './App.css'

// function Hello(){
//     const name1 ="Aayushi"
//     const name2 ="Ayaan"
//     const headingStyle ={
//                     color:"blue",
//                     textAlign:"center",
//                      backgroundColor :"pink",
//                      fontSize:"50px"
//                 }
// return<h2 style={headingStyle}>Hello {name1}</h2>
// return <h2 style={{color:"red",textAlign:"center",}}>Ayaan{name2}</h2>
// }

// export default Hello
// import './App.css'

// function Hello() {

//     const name1 = "Aayushi"
//     const name2 = "Ayaan"

//     const headingStyle = {
//         color: "blue",
//         textAlign: "center",
//         backgroundColor: "pink",
//         fontSize: "50px"
//     }

//     return (
//         <>
//             <h2 style={headingStyle}>
//                 Hello {name1}
//             </h2>

//             <h2 style={{ color: "red", textAlign: "center" }}>
//                  {name2}
//             </h2>
//             <p className="test">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eum laboriosam modi dicta? Omnis atque delectus, natus recusandae minima ratione tempora, suscipit eius odio, doloremque iste molestias enim repellat?</p>
//         </>
//     )
// }

// export default Hello