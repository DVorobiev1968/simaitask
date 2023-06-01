'use strict';

export class UserComponent{
  constructor(parentSelector,template, view, modify, text, eventComponent){
    this.parent=document.querySelector(parentSelector);
    this.template=template;
    this.view=view;
    this.modify=modify;
    this.text=text;
    this.eventComponent=eventComponent;
  }
  
  render(){
    const  text=this.text;
    const element=document.createElement('div');
    element.innerHTML=this.template;
    this.parent.append(element);
    return element;
  }

  getStyle(selector){
    const element=document.getElementById('custom_button');
    const elementStyle=element.style;
    let props='';
    for (const prop in elementStyle) {
      if (Object.hasOwn(elementStyle, prop)) {
        props += `${
          elementStyle[prop]
        } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
      }
    }
    return props;
  }

  setStyle(selector){
    const element=document.getElementById('custom_button');
    const elementStyle=element.style;
    for (const prop in this.view){
      if (Object.hasOwn(elementStyle,prop)){
        elementStyle.setProperty(prop,this.view[prop]);
      }
    }
  }

  setModifyStyle(selector){
    const element=document.getElementById('custom_button');
    const elementStyle=element.style;
    for (const prop in this.modify){
      if (Object.hasOwn(elementStyle,prop)){
        elementStyle.setProperty(prop,this.modify[prop]);
      }
    }
  }

  setEvent(selector){
    const element=document.getElementById('custom_button');
    for (const eventButton in this.eventComponent){
      element.addEventListener(eventButton,this.eventComponent[eventButton]);
    }
  }

}
