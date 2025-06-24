const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggling complete when clicking X
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});
