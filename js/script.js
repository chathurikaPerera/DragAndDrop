const container_items = document.querySelectorAll(".item");
const container = document.querySelectorAll(".parent");
let dragindex=0;
let targetindex=0;
let childParent=0;
let targetParent=0;

let dragItem = null;

for(let i=0 ; i<container_items.length; i++)
{
    const item = container_items[i];

    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", item.id);

    });


    item.addEventListener("dragover", (e) =>{
        e.preventDefault();

    });

    item.addEventListener("drop", (e) => {
        e.preventDefault();
        const clone=e.target.cloneNode(true);
        const dropId = e.dataTransfer.getData("text/plain");

        const dropElement = document.getElementById(dropId);

        const targetId = e.target.id;

        childParent =  document.getElementById(dropId).parentNode.id;
        targetParent = document.getElementById(targetId).parentNode.id;


        let nodelist =  document.getElementById(childParent).childNodes;

        for(let i=0; i<nodelist.length; i++)
        {
            if(nodelist[i].id==dropId)
            {
                dragindex=i;
            }
        }


        document.getElementById(targetParent).replaceChild(document.getElementById(dropId), e.target);
        document.getElementById(childParent).insertBefore(clone, document.getElementById(childParent).childNodes[dragindex] );
        //(newnode, oldnode)

    })
    
}

