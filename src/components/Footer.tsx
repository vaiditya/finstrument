function Footer() {
  return (
    <div className="d-flex table-footer">
      <div className="legend">
        <div className="color-box bg-color-blue" />
        <div>Equities</div>
      </div>
      <div className="legend">
        <div className="color-box bg-color-white" />
        <div>Macro</div>
      </div>
      <div className="legend">
        <div className="color-box bg-color-green" />
        <div>Credit</div>
      </div>
    </div>
  );
}

export default Footer;
