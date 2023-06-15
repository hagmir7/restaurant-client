import { message, Button } from 'antd';
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Request from '../utils/Request';

export default function UpdateProduct() {


    const {id} = useParams()
    const [categories, setCategories] = useState(null);
    const [product, setProduct] = useState({});



    useEffect(() => {
        Request.get("/category/list")
          .then((response) => {
            setCategories(response.data.items)
          })
          .catch((error) => {});
      }, []);

    

      useEffect(()=>{
        Request.get(`/product/${id}`)
        .then(response=>{
            setProduct(response.data)
        }).catch(error =>{
            console.log(error)
        })
      }, [])
    
    
      const createProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(form.get('name'));
        Request.post("/product/create", form,{ Headers: {'Content-Type': 'multipart/form-data'}})
          .then((response) => {
            message.success('Product created successfully.')
            e.target.reset()
          })
          .catch((error) => {
            console.log(error);
          });
      };



    return (
        <div className="row justify-content-center">
            <div className='col-md-6'>
            <h1 className='h4 mb-3'>Update Product</h1>
            <form onSubmit={createProduct}>
                <input type="text" name="name" value={product.name} className="form-control form-control-sm mb-2" placeholder="Name" required />
                <input type="number" name="price" value={product.price} className="form-control form-control-sm mb-2" placeholder="Price" required />
                <input type="number" name="oldPrice" value={product.oldPrice} className="form-control form-control-sm mb-2" placeholder="Product name" required />
                <input type="file" name="images" className="form-control form-control-sm mb-2" placeholder="Product name" multiple />
                <select name="category" className="form-select form-select-sm mb-2" required>
                    <option value="">Select Category</option>
                    {
                        categories && product.category ? (
                            categories.map(category => {
                                if(category._id === product.category._id){
                                    return (<option key={category._id} value={category._id} selected>{category.name}</option>)
                                }else{
                                    return (<option key={category._id} value={category._id}>{category.name}</option>)
                                }
                                
                            })
                        )
                            : null
                    }
                </select>
                <textarea className="form-control form-control-sm mb-2" name="description" cols="30" rows="5" placeholder="Small description" required value={product.description}></textarea>
                <textarea className="form-control form-control-sm mb-2" name="body" cols="30" rows="6" placeholder="Large description" required value={product.body}></textarea>
                <Button htmlType="submit" type="primary" className="w-100">Create</Button>
            </form>
        </div>
        </div>
    )
}
