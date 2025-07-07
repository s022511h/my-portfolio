<template>
  <section class="contact-section">
    <h2>📩 Get in Touch</h2>
    <p class="intro">
      Got a project in mind, want to collaborate, or just fancy a chat? Drop me a message and I’ll get back to you within 24 hours.
    </p>

    <form @submit.prevent="submitForm" class="contact-form">
      <div class="input-group">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="input-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <button type="submit" class="send-button">Send Message</button>
    </form>

    <div class="contact-info">
      <p><strong>Email:</strong> <a href="mailto:dre_86@hotmail.co.uk">dre_86@hotmail.co.uk</a></p>
      <p><strong>Phone:</strong> <a href="tel:07931206686">07931 206686</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const axios = (await import('axios')).default

        const payload = {
          ...this.form,
          to: 'dre_86@hotmail.co.uk',
          subject: 'N15 Labs'
        }

        await axios.post('http://localhost:3000/contact', payload)

        alert('Thanks for your message! I’ll get back to you shortly.')
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Something went wrong. Please try again later.')
      }
    }
  }
}
</script>
<style scoped>
.contact-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  color: #111;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #407ba7;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #444;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
}

.input-group {
  width: 100%;
  max-width: 600px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #222;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafafa;
  color: #111;
  box-sizing: border-box;
}

.input-group textarea {
  height: 150px;
  resize: vertical;
}

.send-button {
  background-color: #407ba7;
  color: #fff;
  padding: 0.9rem 1.6rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #2e5d81;
}

.contact-info {
  margin-top: 2rem;
  font-size: 1rem;
  color: #444;
}

.contact-info a {
  color: #407ba7;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .contact-section {
    padding: 1.2rem 1rem;
    margin: 2rem 1rem;
  }

  .intro {
    font-size: 1rem;
  }

  .contact-info {
    font-size: 0.95rem;
  }

  .send-button {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
