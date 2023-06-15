import { Button, Modal, message } from "antd";
import { useEffect, useState } from "react";
import Request from "../../utils/Request";
const ProductCreate = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);



  const [categories, setCategories] = useState();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };



  useEffect(() => {
    Request.get("/category/list")
      .then((response) => {
        setCategories(response.data.items)
      })
      .catch((error) => {});
  }, []);


  const createProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form.get('name'));
    Request.post("/product/create", form,{ Headers: {'Content-Type': 'multipart/form-data'}})
      .then((response) => {
        setOpen(false);
        message.success('Product created successfully.')
        e.target.reset()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Create Product
      </Button>
      <Modal
        title="Create new product"
        style={{ top: 20 }}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        <form onSubmit={createProduct}>
            <input type="text" name="name" className="form-control form-control-sm mb-2" placeholder="Name" required/>
            <input type="number" name="price" className="form-control form-control-sm mb-2" placeholder="Price" required/>
            <input type="number" name="oldPrice" className="form-control form-control-sm mb-2" placeholder="Product name"required />
            <input type="file" name="images" className="form-control form-control-sm mb-2" placeholder="Product name" multiple required />
            <select name="category"  className="form-select form-select-sm mb-2" required>
                <option value="">Select Category</option>
                {
                    categories ? (
                        categories.map(category =>{
                            return (<option key={category._id} value={category._id}>{category.name}</option>)
                        })
                    )
                    : null
                }
            </select>
            <textarea className="form-control form-control-sm mb-2" name="description" cols="30" rows="5" placeholder="Small description" required></textarea>
            <textarea className="form-control form-control-sm mb-2" name="body" cols="30" rows="6" placeholder="Large description" required></textarea>
            <Button htmlType="submit" type="primary" className="w-100">Create</Button>
        </form>
      </Modal>
    </>
  );
};
export default ProductCreate;
