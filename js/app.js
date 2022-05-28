/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navv= document.getElementsByClassName("page__header")[0];
let allSections=document.querySelectorAll("section");
let allSections_name=[];
let ul = document.getElementById("navbar__list");



/**
 * End Global Variables
 * Start main Functions
 * 
*/
// for add class active to section at viewport and highligth  link of nav
let viewport = ()=>{
    allSections.forEach(ele=>{
        if(ele.getBoundingClientRect().top.toFixed()>=0&&ele.getBoundingClientRect().top.toFixed()<=innerHeight-150){
            ele.classList.add("active")
            allA.forEach(el=>{
                if(ele.getAttribute("data-nav")===el.textContent){
                    el.classList.add("active-nav")
                }else {
                    el.classList.remove("active-nav") 
                }
            })
        }else {
            ele.classList.remove("active")
        }

    })
    
}
//function to scroll into section 
let handelScroll = (e)=>{
    allSections.forEach(ele=>{
        if(e.target.textContent===ele.getAttribute("data-nav")){
            ele.scrollIntoView({behavior:"smooth"})
        }
    })
}

// for Suggested requirments
let handelTop_dis = ()=>{
    // Handel Add a scroll to the top button on the page
    currentscroll = scrollY;
    if(currentscroll<scrollyy){
        up.style.opacity=1;
    }else {
        up.style.opacity=0;
    }
    scrollyy=currentscroll;
    // Handel Hide fixed navigation bar while not scrolling
    let cur = scrollY.toFixed();
    setTimeout(()=>{
        
        if(Number(cur)===Number(sc)){
            navv.style.opacity=1;
        }else{
            navv.style.opacity=0;
        }
    },500)
    sc = Number(cur);
}
let handelSmooth =()=>{
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
} 



/**
 * End main Functions
*/

// build the nav

//to set all data-nav in global array
allSections.forEach(ele=>{
    allSections_name.push(ele.getAttribute("data-nav"))
})
// build li and links
allSections_name.forEach(ele=>{
    let li = document.createElement("li");
    let a = document.createElement("a")
    a.classList.add("menu__link")
    a_Content=document.createTextNode(ele);
    a.appendChild(a_Content)
    li.appendChild(a)
    ul.appendChild(li)
})



//add class nav_hover to link
let allA = document.querySelectorAll("#navbar__list li a");
allA.forEach(ele=>{
    ele.addEventListener("mouseleave",()=>{
        ele.classList.remove("nav_hover")
    })
    ele.addEventListener("mouseenter",()=>{
        ele.classList.add("nav_hover")
    })


})




// Add class 'active' to section when near top of viewport
allA[0].classList.add("active-nav");
window.addEventListener("scroll",viewport);



// Scroll to anchor ID using scrollTO event
ul.addEventListener("click",handelScroll)



//button that scroll to top 
let up = document.getElementsByClassName("up")[0];
let sc = scrollY.toFixed()
let scrollyy =scrollY

window.addEventListener("scroll",handelTop_dis);

up.addEventListener("click",handelSmooth);
