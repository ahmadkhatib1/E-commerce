import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { createCategory } from "../../redux/actions/categoryAction";
import { notify } from '../../hooks/indxe';
const AddCategoryHook = () => {

    const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [text, setText] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [loader, setLoader] = useState(null)
  const [ispress, setIspress] = useState(false)
  const res = useSelector(state => state.allCategory.category)

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]))
      setSelectedFile(e.target.files[0]);
    }
  }
  const onTextChange = (e) => {
    setText(e.target.value);
  }
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      notify("يرجى  اختيار اسم القسم من فضلك", "warn");
      return;
    } else if (selectedFile === null) {
      notify("يرجى  اختيار صورة القسم من فضلك", "warn");
    } else {
      const formData = new FormData();
      formData.append("name", text);
      formData.append("image", selectedFile);
      setLoader(true);
      setIspress(true);
      await dispatch(createCategory(formData))
      setLoader(false);
    }

  }
  useEffect(() => {
    if (loader === false) {
      setText("")
      setImg(avatar)
      setSelectedFile(null)
      setTimeout(() => {
        setIspress(false);
      }, 1000);
      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكلة بعملية الاضافة", 'error');
      }
    }
  }, [loader])
  return [img,text,loader,ispress,handelSubmit,onImageChange,onTextChange]
}

export default AddCategoryHook