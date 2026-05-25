


function StudentList() {
    const students = [
      {
        id: 1,
        name: 'lju',
        std: 4
      },
      {
        id: 2,
        name: 'lju',
        std: 5
      },
      {
        id: 3,
        name: 'lju',
        std: 6
      }
    ];
  
    return (
      <>
        <h1>Student Detail</h1>
        {students
          .filter((student) => student.std === 5)
          .map((student) => (
            <div key={student.id}>
              <h2>Student Name: {student.name.toUpperCase()}</h2>
              <h3>Updated Standard: {student.std + 1}</h3>
            </div>
          ))}
      </>
    );
  }
  
  export default StudentList;
  
