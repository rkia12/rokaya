const Breadcrumb = ({ from, to }) => {
  return (
    <nav aria-label="breadcrumb my-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{from}</a>
        </li>
        {to.map((page) => (
          <li className="breadcrumb-item active" aria-current="page" key={page}>
            {page}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
