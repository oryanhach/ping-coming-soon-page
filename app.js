const form = document.querySelector('.ping__form')
const emailInput = document.querySelector('#email')
const emailPattern = /^[^\s@]{2,}@[^\s@]+\.[^\s@]+$/

form.addEventListener('submit', function (e) {
	e.preventDefault()

	const emailValue = emailInput.value.trim()

	if (emailValue === '' || !emailPattern.test(emailValue)) {
		emailInput.classList.add('error')
		emailInput.value = ''
		emailInput.placeholder = 'example@email.com'

		let errorEl = document.querySelector('.error-msg')
		if (!errorEl) {
			errorEl = document.createElement('p')
			errorEl.classList.add('error-msg')
			errorEl.textContent = 'Please provide a valid email address'
			errorEl.style.color = 'red'
			errorEl.style.fontSize = '0.75rem'
			errorEl.style.marginTop = '0.1rem'
			emailInput.insertAdjacentElement('afterend', errorEl)
		}
	} else {
		emailInput.classList.remove('error')

		const errorEl = document.querySelector('.error-msg')
		if (errorEl) {
			errorEl.remove()
		}

		console.log('Valid email:', emailValue)
	}
})
