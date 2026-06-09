const { useState } = React;

function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", classType: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.classType || !form.date) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setForm({ name: "", email: "", classType: "", date: "" });
  };

  return (
    <>
      <button className="book-btn" onClick={() => setIsOpen(true)}>
        BOOK NOW
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleClose}>✕</button>

            {submitted ? (
              <div className="modal-success">
                <h2>You're booked! 🎉</h2>
                <p>Thanks, {form.name}! We'll see you on {form.date}.</p>
                <button className="book-btn" onClick={handleClose}>Close</button>
              </div>
            ) : (
              <>
                <h2>Book a Class</h2>
                <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
                <input name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} />
                <select name="classType" value={form.classType} onChange={handleChange}>
                  <option value="">Select a Class</option>
                  <option value="Beginner Yoga">Beginner Yoga</option>
                  <option value="Power Yoga">Power Yoga</option>
                  <option value="Meditation">Meditation</option>
                  <option value="Hot Yoga">Hot Yoga</option>
                </select>
                <input name="date" type="date" value={form.date} onChange={handleChange} />
                <button className="book-btn" onClick={handleSubmit}>Confirm Booking</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("booking-root")).render(<BookingModal />);