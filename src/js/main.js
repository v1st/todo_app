const Tasks = (function () {
    /* Variables */
    
    let node;
    const checkboxes = document.querySelectorAll('.unchecked');
    const mainBody = document.getElementById('task-container');
    const textBox = document.getElementById('task-input');
    const deleteIcons = document.getElementsByClassName('delete-img');

    /* Functions */

    function createTask(e) {
        const empty = /^\s+$/g;
        if (event.keyCode == 13) {
            if (this.value === "") {
                return false;
            }
            if (!empty.test(this.value)) {
                let task = this.value;
                createDiv(capitalizeFirstLetter(task));
                this.value = '';
            }
        }
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function createDiv(input) {
        var newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col card border-primary mx-auto">
                    <div class="card-body">
                        <div class="unchecked"></div>
                        <h5 class="card-title">${input}</h5>
                    </div>
                </div>
                <div class="col delete-img"></div>
            </div>
        </div>
    `;
        return mainBody.appendChild(newElement);
    }

    function toggleDone(e) {
        let toggle = e.target;
        if (toggle.classList.contains('unchecked')) {
            toggle.classList.contains('checked') ? toggle.classList.remove('checked') : toggle.classList.add('checked');
        }
    }


    function clickToSlide(e) {
        const del = e.target.parentNode.nextSibling.nextSibling; 
        if (e.target.classList.contains('delete-img')) {
            e.target.parentNode.parentNode.remove();
        }
        if (e.target.classList.contains('card-body')) {
            node = e.target.parentNode;
            if (node.style.left === '' || node.style.left === '0px') {
                node.style.left = `-50px`;
                del.style.maxWidth = '50px';
                del.style.marginRight = '20px';
            } else if (node.style.left === '-50px') {
                node.style.left = `0px`;
                del.style.maxWidth = '0px';
                del.style.marginRight = '0px';                
            }
        }
    }

    /* Event Listeners */

    mainBody.addEventListener('click', toggleDone);
    mainBody.addEventListener('click', clickToSlide);
    textBox.addEventListener('keydown', createTask);
})();