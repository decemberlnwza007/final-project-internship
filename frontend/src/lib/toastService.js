import { useToast, POSITION } from "vue-toastification";

export const useToastService = () => {
    const toast = useToast();

    const showSuccess = (message) => {
        toast.success(message, {
            position: POSITION.TOP_RIGHT,
            timeout: 5000,
            closeOnClickl: true,
        })
    }

    const showInfo = (message) => {
        toast.info(message, {
            position: POSITION.TOP_RIGHT,
            timeout: 5000,
            closeOnClick: true,
        })
    }

    const showWarning = (message) => {
        toast.warning(message, {
            position: POSITION.TOP_RIGHT,
            timeout: 5000,
            closeOnClick: true,
        })
    }

    const showError = (message) => {
        toast.error(message, {
            position: POSITION.TOP_RIGHT,
            timeout: 5000,
            closeOnClick: true
        })
    }

    return {
        showSuccess,
        showWarning,
        showError,
        showInfo
    }
}