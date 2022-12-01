// notification 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// method in notification
const notify = (msg, type) => {
    if (type === "success")
        toast.success(msg)
    else if (type === "warn")
        toast.warn(msg)
    else if (type === "error")
        toast.error(msg)
};
export default notify