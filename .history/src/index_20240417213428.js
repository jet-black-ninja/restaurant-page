import {renderNav } from "./navbar";
import {renderHome} from "./main-home";
import {renderFooter} from "./footer";
import {renderMenu} from "./main-menu";
import {renderAbout} from "./about";

const $content =document.getElementsById("content");

function createHtmlElement( type,id,arrayClasses,content){
    const element=document.createElement(type);
    if(id) element.id=id;
    if(arrayClasses)
        arrayClasses.forEach((myClass)=>element.classlist.add(myClass));
    if(content) element.innerText=content;
    return element;
}
function home(){
    $content.innerHtml="";
    renderNav();
    renderHome();
    renderFooter();

}
function menu(){
    $content.innerHtml="";
    renderNav();
    renderMenu();
    renderFooter();
}
function about(){
    $content.innerHtml="";
    renderNav();
    renderAbout();
    renderFooter();
}
