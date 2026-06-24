# TODO - API Integration: send-mail

- [ ] Update `src/components/ContactForm.tsx` to POST to `http://localhost:5000/api/send-mail` instead of using `mailto:`
- [ ] Map form inputs to API payload:
  - `name` ← form.name
  - `email` ← form.email
  - `phone` ← form.mobile
  - `message` ← form.message
- [ ] Include `authorize` checkbox validation before sending
- [ ] Handle API response `{ success, message }` with user alerts
- [ ] Add basic loading/disable state while request is in progress

