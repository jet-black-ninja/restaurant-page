import {$content, createHtmlElement} from './index';
function render(){
    const $main=document.createElement("main");
    const $welcome=createHtmlElement("p",null,["cursive","golden"],"welcome");
    const $title=createHtmlElement("h1",null,["white"],"The Bakery");
    const $hr=document.createElement("hr");
    const $subtitle=createHtmlElement("p",null,["text-center","white"],"Have A taste of the finest of Dining World!");
    const $button=createHtmlElement("button",null,null,"View The Menu");
    

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);
    $content.appendChild($main);
}
export {render as renderHome};
