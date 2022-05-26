import PersonCard from "./components/PersonCard";

const names = [
  {
    firstName: "Chris",
    lastName: "Alphonse",
    age: 26,
    hairColor: "Black",
  },
  {
    firstName: "Emily",
    lastName: "Flynn",
    age: 24,
    hairColor: "Brunette",
  },
];

const App = () => {
  return (
    <div>
      {names.map((name, index) => (
        <PersonCard
          key={index}
          firstName={name.firstName}
          lastName={name.lastName}
          age={name.age}
          hairColor={name.hairColor}
        />
      ))}
    </div>
  );
};
export default App;
