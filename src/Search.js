import React from "react-dom";

export default function Search() {
  return (
    <div className ="container-sm">
      <form  className="">
        <div className="row">
          <div className="col pt-2">
            <input
              type="search"
              placeholder="Enter the city..."
              className="form-control"
              
            />
          </div>
          <div className="col">
            <input type="submit" value="search" className="btn btn-primary" />
            
            <button className="btn btn-success m-2">
                Current
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
}
