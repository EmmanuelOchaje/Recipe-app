const ImproveSkill = () => {
  const list = [
    "Learn new recipes",
    "Experiment With food",
    "Write your own recipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];

  return (
    <div className="section improve-skill">
      <div className="col img">
        <img src="/images/imgp.jpg" alt="/" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((list, idx) => (
          <p className="skill-item" key={idx}>
            {list}
          </p>
        ))}
        <button className="btn">SignUp Now</button>
      </div>
    </div>
  );
};

export default ImproveSkill;
