function Option({ question }) {
  return (
    <div className="option">
      {question.options.map((option) => (
        <button className="btn btn-option " key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
