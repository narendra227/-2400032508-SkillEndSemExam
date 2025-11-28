export default function Student() {
  const student = {
    name: "Hariharan",
    roll: "22CS123",
    department: "Computer Science"
  };

  return (
    <div style={{
      maxWidth: "350px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial"
    }}>

      <h2>Student Details</h2>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Roll Number:</b> {student.roll}</p>
      <p><b>Department:</b> {student.department}</p>

    </div>
  );
}
