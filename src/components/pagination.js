function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center my-4">
       
        <li className="page-item">
          <a className="page-link" href="cat1">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="cat2">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="cat3">
            3
          </a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Pagination;
