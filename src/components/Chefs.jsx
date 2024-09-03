import TopChefs from "./TopChefs";

const Chefs = () => {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "/images/chef1.jpg",
      recipe: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "/images/chef5.jpg",
      recipe: "5",
      cuisine: "Italian",
    },
    {
      name: "Tessa Pat",
      img: "/images/chef3.jpg",
      recipe: "8",
      cuisine: "Nigerian",
    },
    {
      name: "Adunni Sdq",
      img: "/images/chef4.jpg",
      recipe: "4",
      cuisine: "German",
    },
    {
      name: "Serena Jakes",
      img: "/images/chef6.jpg",
      recipe: "12",
      cuisine: "American",
    },
    {
      name: "Joan Maurice",
      img: "/images/chef2.png",
      recipe: "3",
      cuisine: "Jamaican",
    },
  ];

  return (
    <div className="section chefs">
      <h1>Our Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <TopChefs key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
