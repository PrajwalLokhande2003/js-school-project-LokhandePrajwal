function Header() {

  function handleToggle(): void {
    document.documentElement.setAttribute("data-bs-theme", document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
  }

  return (
    <div className="header d-flex bg-body justify-content-between align-items-center p-2 position-sticky top-0 z-2">
      <h1 className="logo fw-bolder text-body">Timeline App</h1>
      <button className="toggle-btn cursor-pointer" aria-label="Toggle light and dark theme" onClick={handleToggle}>
        <div className="toggle-btn-inner"></div>
      </button>
    </div>
  );
};

export default Header;
