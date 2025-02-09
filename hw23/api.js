const API_URL = 'http://localhost:5000/api';

export async function getTasks() {
  const response = await fetch(`${API_URL}/todos`);
  return response.json();
}

export async function addTask(taskText) {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: taskText })
  });
  return response.json();
}

export async function deleteTask(taskId) {
  return await fetch(`${API_URL}/todos/${taskId}`, { method: 'DELETE' });
}

export async function updateTask(taskId, taskText, completed) {
  const response = await fetch(`${API_URL}/todos/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: taskText, completed })
  });
  return response.json();
}
