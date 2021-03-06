'use strict';

// Variable storing drawing object info
// Hardcoded for now, will be retrieved from database for Phase 2
let drawings = [
    {drawing_id: '0',
     student_id: '1000',
     title: 'Beaver',
     path: 'assets/images/beaver.jpeg',
     submitted: true,
     min_since_edit: 35},
    {drawing_id: '1',
     student_id: '1000',
     title: 'Eagle',
     path: 'assets/images/eagle.jpg',
     submitted: true,
     min_since_edit: 23},
    {drawing_id: '2',
     student_id: '1000',
     title: 'Hippo',
     path: 'assets/images/hippo.jpg',
     submitted: true,
     min_since_edit: 21},
    {drawing_id: '3',
     student_id: '1000',
     title: 'Horse',
     path: 'assets/images/horse.jpg',
     submitted: true,
     min_since_edit: 15},
    {drawing_id: '4',
     student_id: '1000',
     title: 'Wolf',
     path: 'assets/images/wolf.jpg',
     submitted: true,
     min_since_edit: 12},
    {drawing_id: '5',
     student_id: '1000',
     title: 'Spider Man',
     path: 'assets/images/spiderman.jpeg',
     submitted: true,
     min_since_edit: 8},
    {drawing_id: '6',
     student_id: '1000',
     title: 'Rabbit',
     path: 'assets/images/rabbit.jpg',
     submitted: false,
     min_since_edit: 5},
    {drawing_id: '7',
     student_id: '1000',
     title: 'Moon',
     path: 'assets/images/moon.jpg',
     submitted: false,
     min_since_edit: 3}
];

// Variable to access drawings row
const drawingsRow = document.querySelector('main').querySelector('.row');

// Add drawings in order
for (let i = 0; i < drawings.length; ++i)
    addDrawing(drawings[i]);

// Add drawing to the front of the row
function addDrawing(drawing) {
    const card = document.createElement('div');
    card.className = 'card';

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', drawing.path);

    const image = document.createElement('img');
    image.className = 'card-img-top border-bottom';
    image.setAttribute('src', drawing.path);
    image.setAttribute('alt', 'Card image cap');
    link.appendChild(image);

    const body = document.createElement('div');
    body.className = 'card-body';

    const titleHeader = document.createElement('h5');
    titleHeader.className = 'card-title';
    const titleText=  document.createTextNode(drawing.title);
    titleHeader.appendChild(titleText);
    body.appendChild(titleHeader);

    const submissionStatus = document.createElement('p');
    submissionStatus.className = 'card-text';
    const submissionStatusSmall = document.createElement('small');
    submissionStatusSmall.className = drawing.submitted ? 'text-success' : 'text-danger';
    const submissionStatusText = drawing.submitted ? 'Submitted' : 'Not submitted';
    submissionStatusSmall.appendChild(document.createTextNode(submissionStatusText));
    submissionStatus.appendChild(submissionStatusSmall);
    body.appendChild(submissionStatus);

    const lastUpdated = document.createElement('p');
    lastUpdated.className = 'card-text';
    const lastUpdatedSmall = document.createElement('small');
    lastUpdatedSmall.className = 'text-muted';
    const lastUpdatedText = `Last updated ${drawing.min_since_edit} minutes ago`;
    lastUpdatedSmall.appendChild(document.createTextNode(lastUpdatedText));
    lastUpdated.appendChild(lastUpdatedSmall);
    body.appendChild(lastUpdated);

    link.appendChild(body);
    card.appendChild(link);

    const currentCards = drawingsRow.querySelectorAll('.card');
    if (!currentCards)
        drawingsRow.appendChild(card);
    else
        drawingsRow.insertBefore(card, currentCards[0]);
}