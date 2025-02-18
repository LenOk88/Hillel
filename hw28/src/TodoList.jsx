import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css'; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>TODO List</h1>
      <Formik
        initialValues={{ task: '' }}
        validate={values => {
          const errors = {};
          if (!values.task) {
            errors.task = 'Обов’язкове поле';
          } else if (values.task.length < 5) {
            errors.task = 'Мінімальна довжина 5 символів';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.task]);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="task"
              placeholder="Введіть завдання"
              style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
            />
            <ErrorMessage name="task" component="div" style={{ color: 'red', marginBottom: '10px' }} />
            <button type="submit" disabled={isSubmitting}>
              Додати
            </button>
          </Form>
        )}
      </Formik>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              borderBottom: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDelete(index)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
