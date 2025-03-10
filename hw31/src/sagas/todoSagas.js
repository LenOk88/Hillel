import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_COMPLETED, LOAD_TODOS } from '../actions/types';
import { setTodos } from '../actions/todoActions';

const API_URL = 'http://localhost:5000/todos';

function* loadTodosSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(setTodos(response.data));
  } catch (error) {
    console.error('Error loading todos:', error);
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(loadTodos());
  } catch (error) {
    console.error('Error adding todo:', error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(loadTodos());
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}

function* toggleTodoSaga(action) {
  try {
    const todo = yield call(axios.get, `${API_URL}/${action.payload}`);
    yield call(axios.put, `${API_URL}/${action.payload}`, {
      ...todo.data,
      completed: !todo.data.completed,
    });
    yield put(loadTodos());
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
}

function* editTodoSaga(action) {
  try {
    const { id, text } = action.payload;
    const todo = yield call(axios.get, `${API_URL}/${id}`);
    yield call(axios.put, `${API_URL}/${id}`, { ...todo.data, text });
    yield put(loadTodos());
  } catch (error) {
    console.error('Error editing todo:', error);
  }
}

function* clearCompletedSaga() {
  try {
    const completedTodos = yield call(axios.get, `${API_URL}?completed=true`);
    for (let todo of completedTodos.data) {
      yield call(axios.delete, `${API_URL}/${todo.id}`);
    }
    yield put(loadTodos());
  } catch (error) {
    console.error('Error clearing completed todos:', error);
  }
}

export default function* todoSaga() {
  yield takeEvery(LOAD_TODOS, loadTodosSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
  yield takeEvery(EDIT_TODO, editTodoSaga);
  yield takeEvery(CLEAR_COMPLETED, clearCompletedSaga);
}
