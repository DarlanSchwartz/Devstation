import { DEFAULT_TOAST_OPTIONS } from "@/Constants";
import { ToastOptions, toast } from "react-toastify";
import Swal from "sweetalert2";

/**
 * @class Toaster
 * @description Singleton class to handle notifications
 * @example
 * Toaster.notify('Hello World', 'success', { autoClose: 2000, position: 'top-center' });
 * Toaster.alert('Hello World');
 */
export default class Toaster {
    private static instance: Toaster;

    constructor() {
        if (Toaster.instance) {
            Toaster.instance = new Toaster();
        }
        return Toaster.instance;
    }

    public static notify(message: string, toastType: 'success' | 'error' | 'info' | 'warning' | 'dark' = 'success', options: ToastOptions = DEFAULT_TOAST_OPTIONS) {
        return toast[toastType](message, options);
    }

    public static alert(message: string) {
        Swal.fire({
            title: message,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url('https://sweetalert2.github.io/images/trees.png')",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
        });
    }

}