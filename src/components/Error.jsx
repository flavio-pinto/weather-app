const Error = (props) => {
  return (
    <h2 className="error-fetch display-5 text-danger">{props.fetchError}</h2>
  );
};

export default Error;
