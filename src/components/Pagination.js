
// Important
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
// Components
import User from "./User";


const Items = ({ currentItems }) => {
    return currentItems && currentItems.map(user => <User user={user} key={user.id} />);
}

const PaginatedItems = ({ itemsPerPage }) => {
  const usersToShow = useSelector(state => state.usersToShow);
  console.log("PaginatedItems-> usersToShow:", usersToShow);
  const [currentUsers, setCurrentUsers] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentUsers(usersToShow.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(usersToShow.length / itemsPerPage));
      console.log("PaginatedItems-> currentUsers:", currentUsers)
  }, [itemOffset, itemsPerPage, usersToShow]);

  // Invoke when user click to request another page.
  const handlePageClick = (e) => {
      const newOffset = e.selected * itemsPerPage % usersToShow.length;
      console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentUsers} />
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"   
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination mt-3"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}


export default PaginatedItems;