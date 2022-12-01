import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../hooks/category/addCategory-hook";
const AdminAddCategory = () => {
  const [img, text, loader, ispress, handelSubmit, onImageChange, onTextChange] = AddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label htmlFor="upload-photo" >
              <img
                src={img}
                alt="add category"
                height="100px"
                width="120px"
                style={{ cursor: 'pointer' }}
              />
              <input
                type="file"
                id="upload-photo"
                name="photo"
                onChange={onImageChange}
              />
            </label>
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value={text}
            onChange={onTextChange}
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          {
            ispress ? loader ? (<Spinner animation="border" variant="secondary" />) : (<h3>انتهاء التحميل</h3>) : <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>

          }
          <ToastContainer />
        </Col>
      </Row>
    </div>
  );
};
export default AdminAddCategory;
