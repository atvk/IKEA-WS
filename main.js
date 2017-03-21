(function(){
    var elem = document.createElement("div"),  //создан узел эелемента
        content = document.createTextNode("Roc II Use It Work Space"),  //создал техстовый узел 
        divTitle = document.getElementById("store"); // нашел узел в ДОМ c определенным ID
        elem.setAttribute("align","center")
        elem.appendChild(content); // заполнил узел элемента, узлом наполнения 
        divTitle.appendChild(elem);
        
 
    //console.log( elem );
    
    
    
})();

(function(){
var store = [
    {id:1, name:"HIMKI", StoreNumber:"335"},
    {id:2, name:"BELAY DASHA", StoreNumber:"344"},
    {id:3, name:"TEPLIY STAN", StoreNumber:"336"},
    {id:4, name:"DIBENKO", StoreNumber:"426"},
    {id:5, name:"PARNAS", StoreNumber:"464"},
    {id:6, name:"EKATERINBURG", StoreNumber:"342"},
    {id:7, name:"NOVOSIBIRSK", StoreNumber:"338"},
    {id:8, name:"OMSK", StoreNumber:"380"},
    {id:9, name:"KAZAN", StoreNumber:"341"},
    {id:10, name:"UFA", StoreNumber:"346"},
    {id:11, name:"SAMARA", StoreNumber:"442"},
    {id:12, name:"ROSTOV", StoreNumber:"443"},
    {id:13, name:"ADIGEYA", StoreNumber:"480"},
    {id:14, name:"NOVGOROD", StoreNumber:"437"},
    ]

var olElement = document.getElementById("store");

for(var i = 0; i<store.length; i++)
  
{ var s = store[i],
      aElement = document.createElement('a'),
	  liElement = document.createElement('li'),
	  textNode = document.createTextNode(s.name + " " + s.StoreNumber);
	
aElement.setAttribute("href", "store.id" );

 aElement.appendChild(textNode);
 
 liElement.appendChild(aElement);
 
 olElement.appendChild(liElement);
  }
})();