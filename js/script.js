//coded By ali jebbouri
const submit = document.querySelector('#send');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    let valid = true;
    const fields = [
        { id: 'first_name', message: 'First Name cannot be empty' },
        { id: 'last_name', message: 'Last Name cannot be empty' },
        { id: 'email', message: 'Email is invalid' },
        { id: 'password', message: 'Password cannot be empty' }
    ];
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    fields.forEach((field, index) => {
        const input = document.querySelector(`#${field.id}`);
        const errorIcon = document.getElementsByClassName('error-icon')[index];
        const error = document.getElementsByClassName('error')[index];
        if (input.value.trim() === '') {
            error.innerHTML = field.message;
            error.style.display = 'block';
            errorIcon.setAttribute('src', '../images/icon-error.svg');
            valid = false;
        } else if (field.id === 'email' && !input.value.match(emailFormat)) {
            error.innerHTML = field.message;
            error.style.display = 'block';
            errorIcon.setAttribute('src', '../images/icon-error.svg');
            valid = false;
        } else {
            error.style.display = 'none';
            errorIcon.setAttribute('src', '');
        }
    });
    if (valid) {
        document.querySelector('.form-data').submit();
    }
});