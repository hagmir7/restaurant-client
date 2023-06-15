import React, { useState, useEffect } from 'react'
import { Button, Modal, message } from 'antd';
import Request from '../../utils/Request';

export default function OrderCreate() {



    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [delivry, setDelivry] = useState([]);
    const [server, setServer] = useState([]);
    const [local, setLocal] = useState();


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
      Request.get("user/delivry-men", {})
        .then((response) => {
          setDelivry(response.data);
        })
        .catch((error) => {
          message.error(error.data.message);
        });
    }, []);


    
    useEffect(() => {
      Request.get("user/servers", {})
        .then((response) => {
          setServer(response.data);
        })
        .catch((error) => {
          message.error(error.data.message);
        });
    }, []);


    return (
        <div>

            <Button type="primary" onClick={showModal}>
                + Create Order
            </Button>
            <Modal
                title="Create Order"
                style={{ top: 20 }}
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={false}
            >
                <form>

                <div className='d-flex justify-content-around my-3'>
                    <div class="form-check">
                    <input class="form-check-input" value={true} type="radio" name="type" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Delevery order
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="type" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Local order
                    </label>
                    </div>
                </div>
                    <select name="deliveryPar" id="" className='form-select form-select-sm mb-2'>
                        <option value="">Select delivry man</option>
                        {
                            delivry.map(item =>{
                                return (<option value={item._id}>{item.firstName} {item.lastName}</option>)
                            })
                        }
                    </select>

                    <select name="server" id="" className='form-select form-select-sm mb-2'>
                        <option value="">Select Server</option>
                        {
                            server.map(item =>{
                                return (<option value={item._id}>{item.firstName} {item.lastName}</option>)
                            })
                        }
                    </select>
                    <input type="text" name="address" className="form-control form-control-sm mb-2" placeholder="Address" required />
                    <Button htmlType="submit" type="primary" className="w-100">Create</Button>
                </form>
            </Modal>
        </div>
    )
}
