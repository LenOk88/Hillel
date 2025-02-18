function Contacts() {
    return (
        <div className="container">
            <h2>Контакти</h2>
            
            <div className="contact-info">
                <p>
                    📞 Телефон: <a href="tel:+79991234567">+3 (80) 123-45-67</a>
                </p>
                <p>
                    📧 Email: <a href="mailto:info@example.com">info@example.com</a>
                </p>
            </div>

            <form action="submit.php" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" required />
                <div className="sms">
                <label htmlFor="message">Повідомлення:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <button type="submit">Відправити</button>
                </div>
            </form>
        </div>
    );
}

export default Contacts;
