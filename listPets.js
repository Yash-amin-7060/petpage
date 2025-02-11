document.addEventListener('DOMContentLoaded', function () {
    const petsList = document.getElementById('petsList');
    let pets = JSON.parse(localStorage.getItem('pets')) || [];

    pets.forEach(pet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pet.type}</td>
            <td>${pet.name}</td>
            <td>${pet.color}</td>
            <td>${pet.gender}</td>
        `;
        petsList.appendChild(row);
    });
});
