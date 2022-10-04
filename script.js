const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabPane = document.querySelectorAll('.js-tab-pane');


navTabs.forEach((nav,index) => {
    nav.addEventListener('click', (event) =>{
        event.preventDefault();
        // Remove primeiro todas as classes de active que tem para depois colocar em um item específico
        navTabs.forEach(item => {
            item.classList.remove('active')
        })
        tabPane.forEach(tab =>{
            tab.classList.remove('active')
        })
        // Colocando a classe active para caracteriação do item 
        nav.classList.add('active')

       tabPane[index].classList.add('active')
    })
})