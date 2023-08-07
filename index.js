const computer1 ="Dell";
const computer2="Hp";

const computers=[computer1, computer2];

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