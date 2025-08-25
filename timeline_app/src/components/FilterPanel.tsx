import React from "react";

function FilterPanel() {
  return (
    <div className="filter-panel justify-content-start align-items-center d-flex w-100 overflow-auto">
      <span className="fw-bolder fs-5 pe-3">Filter</span>
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck1">All</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck2">Hardware</label>

        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck3">Software</label>

        <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck4">Personal Computing</label>

        <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck5">Internet</label>

        <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off" />
        <label className="btn btn-outline-primary align-items-center d-flex" htmlFor="btncheck6">Networking</label>
      </div>
    </div>
  );
};

export default FilterPanel;
