var toastSuccess = document.getElementById('liveToast');
var toastSuccessAlert = new bootstrap.Toast(toastSuccess);

const form = document.querySelector('[data-form-request]')

const sendRequest = async (e) => {
  const formElem = e.currentTarget

  e.preventDefault()

  let formData = new FormData()
  formData.append('fio', formElem.fio.value)
  formData.append('org', formElem.org.value)
  formData.append('phone', formElem.phone.value)

  const url = 'sendmail.php'
  const postData = {
    method: "POST",
    body: formData
  }

  const result = await fetch(url, postData)

  if (result) {
    toastSuccessAlert.show()
  }

  form.reset()
}

form.addEventListener('submit', sendRequest)
