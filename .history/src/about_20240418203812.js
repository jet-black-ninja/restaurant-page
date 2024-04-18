import {$content,createHtmlElement}from "./index";
function render(){
    const $main=document.createElement("main");
    const $welcome=createHtmlElement("p",null,["cursive","golden"],"welcome");
    const $title=createHtmlElement("h1",null,["gray"],"About Us");
    const $hr=createHtmlElement("hr");
    const content="We are the best of the best. Collecting cuisines from around the world and bringing them to Your plate is What we excel at. So please give us the please and be our guest for a one of a king experience. We guarantee to make the visit memorable .";
    const $p=createHtmlElement("p",null,["menu-item"],content);
    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);
    $content.appendChild($main);


};
export{render as renderAbout};