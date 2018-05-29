const Tasks = (function () {
    /* Variables */

    const checkboxes = document.querySelectorAll('.unchecked');
    const mainBody = document.getElementById('task-container');
    const textBox = document.getElementById('task-input');

    /* Functions */

    function createTask(e) {
        const empty = /^\s+$/g;
        if (event.keyCode == 13) {
            if (!empty.test(this.value)) {
                let task = this.value;
                createDiv(task);
                this.value = '';
            }
        }
    }

    function createDiv(input) {
        var newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class="container-fluid">
            <div class="card border-primary mx-auto">
                <div class="card-body">
                    <h5 class="card-title ">${input}</h5>
                    <div class="unchecked"></div>
                </div>
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

    /* Event Listeners */

    mainBody.addEventListener('click', toggleDone);
    textBox.addEventListener('keydown', createTask);
})();