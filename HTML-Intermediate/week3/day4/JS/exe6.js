Function selfinvoking(numberofchildren, partnersname, geographiclocation, jobtitle){
    const a = "You will be a "{jobtitle}" in "{geographiclocation}", and married to "{partnersname}" with "{number of children}" kids.";
    const p = document.createElement('p');
    p.textContent = a ;
    document.body.appendChild(p)
}