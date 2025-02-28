let flashcards = [];

// Add a new flashcard
function addFlashcard() {
  const title = document.getElementById('title').value;
  const notes = document.getElementById('notes').value;
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;

  if (title && notes && question && answer) {
    const flashcard = { title, notes, question, answer };
    flashcards.push(flashcard);
    clearInputs();
  } else {
    alert('Please fill in all fields.');
  }
}

// View all flashcards
function viewAllFlashcards() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('flashcard-list-page').style.display = 'block';

  const flashcardList = document.getElementById('flashcard-list');
  flashcardList.innerHTML = '';

  flashcards.forEach((flashcard, index) => {
    const flashcardDiv = document.createElement('div');
    flashcardDiv.classList.add('flashcard');
    
    flashcardDiv.innerHTML = `
      <div>
        <h3>${flashcard.title}</h3>
        <p>${flashcard.notes}</p>
        <p><strong>Q:</strong> ${flashcard.question}</p>
        <p><strong>A:</strong> ${flashcard.answer}</p>
      </div>
      <div class="edit-delete-buttons">
        <button onclick="editFlashcard(${index})">Edit</button>
        <button onclick="deleteFlashcard(${index})">Delete</button>
      </div>
    `;

    flashcardList.appendChild(flashcardDiv);
  });
}

// Go back to the home page
function goHome() {
  document.getElementById('home-page').style.display = 'block';
  document.getElementById('flashcard-list-page').style.display = 'none';
  document.getElementById('edit-flashcard-page').style.display = 'none';
}

// Edit a flashcard
function editFlashcard(index) {
  const flashcard = flashcards[index];
  document.getElementById('edit-title').value = flashcard.title;
  document.getElementById('edit-notes').value = flashcard.notes;
  document.getElementById('edit-question').value = flashcard.question;
  document.getElementById('edit-answer').value = flashcard.answer;

  document.getElementById('edit-flashcard-page').style.display = 'block';
  document.getElementById('flashcard-list-page').style.display = 'none';

  // Save the edited flashcard
  window.currentIndex = index;
}

function saveEditedFlashcard() {
  const title = document.getElementById('edit-title').value;
  const notes = document.getElementById('edit-notes').value;
  const question = document.getElementById('edit-question').value;
  const answer = document.getElementById('edit-answer').value;

  if (title && notes && question && answer) {
    flashcards[window.currentIndex] = { title, notes, question, answer };
    goHome();
  } else {
    alert('Please fill in all fields.');
  }
}

// Delete a flashcard
function deleteFlashcard(index) {
  flashcards.splice(index, 1);
  viewAllFlashcards();
}

// Clear input fields after adding a flashcard
function clearInputs() {
  document.getElementById('title').value = '';
  document.getElementById('notes').value = '';
  document.getElementById('question').value = '';
  document.getElementById('answer').value = '';
}
