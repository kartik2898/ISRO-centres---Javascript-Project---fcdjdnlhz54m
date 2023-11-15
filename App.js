let url ="https://isro.vercel.app/api/centres";
let data;
let filterData;
async function getData(){
    try{
        const response = await fetch(url);
        data = await response.json();
        filterData = data.centres;
        showData(); 
    }catch(e){
        console.log("error",e);
    }
}
function showData(){
    let dataContainer = document.querySelector(".data-container");
    dataContainer.innerHTML ="";
    filterData.map((e)=>{
        let dataHTML = `<div class="data">
        <div class = "data-row">
            <h4>CENTER</h4>
            <p>${e.name}</p>
        </div>
        <div class = "data-row">
            <h4>CITY</h4>
            <p>${e.Place}</p>
        </div>
        <div class = "data-row">
            <h4>STATE</h4>
            <p>${e.State}</p>
        </div>
    </div>`
    dataContainer.innerHTML += dataHTML;
    }); 
};

function handlefilter(type){
    let input_search = document.getElementById("input");
    filterData = data.centres.filter((e)=>{
        if(type=="city"){
            if(e.Place.toLowerCase().includes(input_search.value.toLowerCase())){
                return e;
            }
        }
        else if(type=="state"){
            if(e.State.toLowerCase().includes(input_search.value.toLowerCase())){
                return e;
            }
        }
        else{
            if(e.name.toLowerCase().includes(input_search.value.toLowerCase())){
                return e;
            }
        }
    })
    showData();
}
getData();
