((d) => {

    let input = d.getElementById("shop");
    let button = d.getElementById("add");
    let list = d.getElementById("list");
    let checkAll = d.getElementById("checkForAll");

     
    button.addEventListener ("click", () => {

        let item = d.createElement("li");

        let item2 = d.createElement("input");
        item2.setAttribute("type", "checkbox");
        item2.className = "listCheckbox";

        let item3 = d.createElement("label");
        item3.textContent = input.value;

        list.append(item, item2, item3);

        input.value = "";
    
    })

    checkAll.addEventListener ("click", () => {
        let listCheckbox = list.getElementsByClassName("listCheckbox");
        
        if(checkAll.checked == true) {
            for (let i = 0; i < listCheckbox.length; i++) {
                listCheckbox[i].checked = true;
            }
        } else {
            for (let i = 0; i < listCheckbox.length; i++) {
                listCheckbox[i].checked = false;
            }
        }
    })

})(document);