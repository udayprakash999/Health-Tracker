
function loadData() {
    const savedData = JSON.parse(localStorage.getItem('healthHistory')) || [];
    if (savedData.length > 0) {
        const latestData = savedData[savedData.length - 1];
        document.getElementById('calories-summary').innerText = latestData.calories;
        document.getElementById('exercise-summary').innerText = latestData.exercise;
        document.getElementById('water-summary').innerText = latestData.water;
        document.getElementById('sleep-summary').innerText = latestData.sleep;
    }
    displayHistory(savedData);
}

function saveData() {
    const healthData = {
        date: new Date().toLocaleDateString(),
        calories: document.getElementById('calories').value,
        exercise: document.getElementById('exercise').value,
        water: document.getElementById('water').value,
        sleep: document.getElementById('sleep').value
    };

    const healthHistory = JSON.parse(localStorage.getItem('healthHistory')) || [];
    healthHistory.push(healthData);

    localStorage.setItem('healthHistory', JSON.stringify(healthHistory));

  
    document.getElementById('calories-summary').innerText = healthData.calories;
    document.getElementById('exercise-summary').innerText = healthData.exercise;
    document.getElementById('water-summary').innerText = healthData.water;
    document.getElementById('sleep-summary').innerText = healthData.sleep;

   
    document.getElementById('health-form').reset();


    displayHistory(healthHistory);
}


function displayHistory(history) {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    history.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${entry.date}</strong>: ${entry.calories} kcal, ${entry.exercise} mins of exercise, ${entry.water} L of water, ${entry.sleep} hrs of sleep
            <button onclick="editData(${index})">Edit</button>
        `;
        historyList.appendChild(listItem);
    });
}

function editData(index) {
    const healthHistory = JSON.parse(localStorage.getItem('healthHistory'));
    const entry = healthHistory[index];

  
    document.getElementById('calories').value = entry.calories;
    document.getElementById('exercise').value = entry.exercise;
    document.getElementById('water').value = entry.water;
    document.getElementById('sleep').value = entry.sleep;

    
    healthHistory.splice(index, 1);
    localStorage.setItem('healthHistory', JSON.stringify(healthHistory));
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const healthHistory = JSON.parse(localStorage.getItem('healthHistory')) || [];


    doc.setFontSize(16);
    doc.text('Health Data History', 10, 10);

    
    let yPosition = 20; 

    healthHistory.forEach((entry, index) => {
        const text = `${entry.date}: ${entry.calories} kcal, ${entry.exercise} mins of exercise, ${entry.water} L of water, ${entry.sleep} hrs of sleep`;
        doc.setFontSize(12);
        doc.text(text, 10, yPosition);
        yPosition += 10;

 
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 10; 
        }
    });

    
    doc.save('health_history.pdf');
}


document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveData();
});


window.onload = function() {
    loadData();
};

document.getElementById('save-pdf').addEventListener('click', generatePDF);
