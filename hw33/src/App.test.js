import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Сторінка має назву TODO", () => {
  render(<App />);
  expect(screen.getByText(/TODO/i)).toBeInTheDocument();
});

test("Можна ввести цифри та літери у полі введення", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Додати завдання");

  fireEvent.change(input, { target: { value: "Test123" } });

  expect(input.value).toBe("Test123");
});

test("Видає помилку при додаванні порожнього завдання", () => {
  render(<App />);
  const button = screen.getByText("Додати");

  fireEvent.click(button);

  expect(screen.getByText("Поле не повинно бути пустим!")).toBeInTheDocument();
});

test("Додає нове завдання до списку", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Додати завдання");
  const button = screen.getByText("Додати");

  fireEvent.change(input, { target: { value: "Нове завдання" } });
  fireEvent.click(button);

  expect(screen.getByText("Нове завдання")).toBeInTheDocument();
});

test("Очищає поле введення після додавання завдання", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Додати завдання");
  const button = screen.getByText("Додати");

  fireEvent.change(input, { target: { value: "Завдання" } });
  fireEvent.click(button);

  expect(input.value).toBe("");
});
