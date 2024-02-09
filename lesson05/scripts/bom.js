const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != ''){
        console.log('The field is not blank---checked');

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button'); // New edit button
        let word = input.value;
        li.textContent = word;
        deleteButton.textContent = '❌';
        editButton.textContent = '✏️'; // Edit button text
        li.append(deleteButton);
        li.append(editButton); // Append edit button to li
        list.append(li);
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });

        // New edit functionality
        editButton.addEventListener('click', function () {
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.value = li.textContent.slice(0, -4); // Remove 'edit' from the text
            li.textContent = '';
            li.append(newInput);
            newInput.focus();

            newInput.addEventListener('blur', function() {
                li.textContent = newInput.value;
                li.append(deleteButton);
                li.append(editButton);
            });
        });
    } else {
        console.log('Please enter a book and chapter.');
        input.focus();
    }
});