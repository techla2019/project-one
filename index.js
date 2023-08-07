const computer1 ="Dell";
const computer2="Hp";

const computers=[computer1, computer2];
/*after app for the first time it invokes the render function the app displays the items in the array, after an item the render function re-renders, this also ensures the previous list is deleted by re-rendering the empty div and then the list inclusive of the new item*/

render();

function add(){
    const item =document.getElementById('one')
    const com=item.value;
    computers.push(com);
    render()
}

function render(){
    document.getElementById('two').innerHTML='';
    computers.forEach(element => {
        const work =document.createElement('div');
        work.innerText=element;
        const list = document.getElementById('two')
        list.appendChild(work)
    });
}