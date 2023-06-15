import React from 'react'

export default function HubComponent() {
  return (
    <div className="col-xl-6 mb-4">
        <div className="card shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://img.ctykit.com/cdn/az-tucson/images/tr:w-900/hub-restaurant-1.jpg"
                            alt=""
                            style={{width: '70px', height: '70px'}}
                            className="rounded"
                        />
                        <div className="ms-3">
                            <p className="fw-bold mb-1">Ait Frigou guigu Fes</p>
                            <p className="text-muted mb-0">PHONE : +212 68429384</p>
                            <p className="text-muted mb-0">CHEF : Mohamed Agmir</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer border-0 bg-light p-1 d-flex justify-content-around border-top" >
                <a href='' className="btn btn-link m-0 text-reset" >View<i className="fas fa-envelope ms-2"></i ></a>
                <a href='' className="btn btn-link m-0 text-reset" >Update<i className="fas fa-phone ms-2"></i ></a>
                <a href='' className="btn btn-link m-0 text-reset" >Delete<i className="fas fa-phone ms-2"></i ></a>
            </div>
        </div>
    </div>
  )
}
