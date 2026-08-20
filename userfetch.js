const div = document.getElementById('container');
const button = document.getElementById('btn');
console.log(div);
const h2 = document.createElement("h2");
h2.innerText = "Data is loading...";
console.log(h2);

async function display(){
    try{
    div.appendChild(h2);
        // div.innerHTML='<h2 style="color:blue;">Hello Using DOM</h2>';
    const serverdata =await fetch('https://fakestoreapi.com/products');
    const jsondata = await serverdata.json();
    // console.log(jsondata[1].title)
    // div.innerHTML=`<h2 style="color:white;background-color:grey;"> ${JSON.stringify(jsondata)}</h2>`;

    let table = `<table border=4px>
        <tr>
        <th>image</th>
        <th>itemId</th>
        <th>itemTitle</th>
        <th>itemPrice</th>
        </tr>
        ${
            jsondata.map((ele)=>(
            `<tr>
            <td><img src = ${ele.image} heigth = 80 width = 80></td>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.price}</td>
            </tr>`
            ))
    }
    </table>`
    div.innerHTML = table;

}catch(e){
    console.log("error is:" + e);
}
finally{
console.log("kaam khatam");

}
}

button.addEventListener('click',display);