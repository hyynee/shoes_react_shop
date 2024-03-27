import React,{useState} from 'react'

// containerComponent nhan vao component duoi dang props va render props component do trong phan noidung
export default function ContaineComponent(props) {
    const [state,setState ]  = useState(1);
  return (
  <div>
  {/* Modal Body */}
  {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
      <div className="modal-content mt-2">
        <div className="modal-body w-100">
            {props.component}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

   
  )
}
