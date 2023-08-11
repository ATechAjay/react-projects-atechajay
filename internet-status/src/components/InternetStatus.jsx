const InternetStatus = (props) => {
  return (
    <div
      className={`alert alert-${props.alert} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.boldCTA}</strong> {props.longText}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default InternetStatus;
