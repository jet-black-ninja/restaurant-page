import {$content , createHtmlElement } from "./index";

const menu=[
    {
        name:"Arrabiata Pasta",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$20",
    },
    {
        name:"Korean Fried Chicken",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$45",
    },
    {
        name:"Chilaquiles",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$20",
    },
];
function render(){
    const $main=document.createElement("main");
    $main.classList.add("main");
    const $welcome=createHtmlElement("p",null,["cursive","golden"],"welcome");
    const $title=createHtmlElement("H1",null,["gray"],"Menu");
    const $hr=document.createElement("hr");
    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    menu.forEach((item)=>{
        const$div=document.createElement("div",null["menu-item"],null);
        const $name=createHtmlElement("h2",null,["golder"],item.name);
        const $description=createHtmlElement("p",null,["gray"],item.description);
        const $price=createHtmlElement("p",null,["golden"],item.price);
    }
    )
};
export {render as renderMenu};