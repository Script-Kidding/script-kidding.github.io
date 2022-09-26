addEventListener('resize', hamStyleCheck);
var menuCollapsed = true;
var menuButton = false


function hamStyleCheck(event){
    if(window.innerWidth<800){
        document.getElementById("hamburger").style.display="block";
        document.getElementById("header").style.justifyContent="flex-start";
        document.getElementById("fullscreen-nav").style.display="none";
        document.getElementById("fullscreen-search").style.display="none";
        menuButton = true;
        if(!menuCollapsed){
            collapseMenu();
        }
        
        }
    else{
        document.getElementById("hamburger").style.display="none";
        
        if(!menuCollapsed){
            collapseMenu();
        }
        document.getElementById("header").style.justifyContent="space-around";
        document.getElementById("fullscreen-nav").style.display="inline";
        document.getElementById("fullscreen-search").style.display="inline";
        menuButton = false
    
    }
    }
    

function collapseMenu(){
   if(menuButton)
   { if(menuCollapsed){
        document.getElementById("ham-open").style.display="none";
        document.getElementById("ham-close").style.display="block";
        document.getElementById("menu-dropdown").style.display="block";
        document.body.style.overflow = 'hidden';
        menuCollapsed = false;
    }
    else{
        document.getElementById("ham-open").style.display="block";
        document.getElementById("ham-close").style.display="none";
        document.getElementById("menu-dropdown").style.display="none"
        document.body.style.overflow = 'scroll';
        menuCollapsed = true;
    }
}

    }

    function searchCallback(){
        let keyword = document.getElementById("search-mobile").value
        let resultsDisplay=  document.getElementById("dropdown-search-results")
        resultsDisplay.innerHTML = ""
        let results =  search(keyword)
        results.forEach(el =>{
            let result = document.createElement("h3")
            result.innerText = el
            resultsDisplay.appendChild(result)

        })

    }
function search(keyword){
    let s= ["alex","shauna","merlin","juliete","andrew"]
    results = []
    if(keyword!=""){
        for(let i=0;i<s.length;i++){
            if( s[i].includes(keyword)){
                results.push(s[i])
            }
        }
        console.log(results.sort())
    
        
    }
    return results
   
    

}
