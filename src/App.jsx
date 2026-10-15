import Button from "./components/button";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  const columns = ["Name", "Year", "Grade"];

  const students = [
    { Name: "Ahmed", Year: 3, Grade: "A" },
    { Name: "Sara", Year: 2, Grade: "B+" },
    { Name: "Omar", Year: 4, Grade: "A-" },
    { Name: "Laila", Year: 1, Grade: "B" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Card
          title="React Basics"
          description="Learn components, props, and state from scratch."
          image="https://picsum.photos/id/1/400/200"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              text="Enroll"
              variant="primary"
              onClick={() => alert("Enrolled!")}
            />
            <Button
              text="Remove"
              variant="danger"
              onClick={() => alert("Removed!")}
            />
          </div>
        </Card>

        <Card
          title="Anatomy Notes"
          description="A simple card with only a title and a description."
        />
      </div>

      <h2 style={{ marginTop: "40px" }}>Students</h2>
      <Table columns={columns} data={students} striped={true} />
    </div>
  );
}

export default App;
