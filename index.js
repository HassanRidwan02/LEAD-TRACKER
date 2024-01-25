let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
let tabBtn = document.getElementById("tab-btn")


// console.log(Boolean (leadsFromLocalStorage))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        // listItems += "<li><a href = '" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + ' ' + "</a></li>"
        listItems += 
        `<li> 
            <a href = '${leads[i]}' target = '_blank'> 
                ${leads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

