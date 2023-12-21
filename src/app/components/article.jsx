export default ({id,Author,Title,Owner,Language,OTB,Publisher,Year,ISBN,Genre,Comments}) => {
  return (
    <>

    <div className="flex gap-4 items-center">
    <div className="w-48">{id}</div>
    <div className="w-48">{Author}</div>
    <div className="w-48">{Title}</div>
    <div className="w-48">{Owner}</div>
    <div className="w-48">{Language}</div>
    <div className="w-48">{OTB}</div>
    <div className="w-48">{Publisher}</div>
    <div className="w-48">{Year}</div>
    {/* <div className="w-48">{ISBN}</div> */}
    {/* <div className="w-48">{Genre}</div> */}
    {/* <div className="w-48">{Comments}</div> */}
    </div>
    </>
  );
};
