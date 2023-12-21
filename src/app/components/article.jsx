export default ({ Author,Title,Status,Owner,Language,OTB,Publisher,Year,ISBN,Genre,Comments }) => {
  return (
    <>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Author(s)</th>
            <th>Title</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Language</th>
            <th>O/T/B</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>ISBN</th>
            <th>Genre(s)</th>
            <th>Comments🐁</th>
          </tr>        
        </thead>
        <tbody>
          <tr>
            <td>{Author}</td>
            <td>{Title}</td>
            <td>{Status}</td>
            <td>{Owner}</td>
            <td>{Language}</td>
            <td>{OTB}</td>
            <td>{Publisher}</td>
            <td>{Year}</td>
            <td>{ISBN}</td>
            <td>{Genre}</td>
            <td>{Comments}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
