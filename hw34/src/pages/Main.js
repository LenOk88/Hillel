import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      console.log('Отправка данных', values);
      const response = await axios.post('http://localhost:3000/hotels', values);
      console.log('Ответ от сервера', response.data);

      navigate('/hotels');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <div>
      <h1>Book Your Trip</h1>
      <Formik
        initialValues={{ destination: '' }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="destination">Destination</label>
              <Field as="select" name="destination" required>
                <option value="">Select a destination</option>
                <option value="Paris">Paris</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
              </Field>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Main;
