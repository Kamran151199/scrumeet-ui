import { ToastOptions } from 'react-toastify'

export const toastErrorStyle: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    background: '#f8d7da',
    color: '#721c24',
    marginTop: '0.1vh',
  },
}

export const toastSuccessStyle: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    background: '#d4edda',
    color: '#155724',
    marginTop: '0.1vh',
  },
}
