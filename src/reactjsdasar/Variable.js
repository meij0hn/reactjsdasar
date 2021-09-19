import React from 'react'

// const
// const harga = 3000;
// harga = 400

//Var
var harga = 20000;
if (true) {
    var harga = 30000;
}

// let harga = 20000;
// if (true) {
//     let harga = 30000;
// }

const Variable = () => {
    return (
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    )
}

export default Variable