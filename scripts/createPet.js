document.getElementById('petForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const pet = {
        type: document.getElementById('type').value,
        name: document.getElementById('name').value,
        color: document.getElementById('color').value,
        gender: document.getElementById('gender').value
    };

    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.push(pet);
    localStorage.setItem('pets', JSON.stringify(pets));

    alert('Pet added successfully!');
    this.reset();
});
