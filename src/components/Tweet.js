const Tweet = ({ name, message }) => {
  return (
    <div className="tweet">
      <h2>Name</h2>
      <h3>This is the actuals tweet</h3>
      <h3>{(name, message)}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
