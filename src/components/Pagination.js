
// Important
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
// Components
import DraggableUsers from "./DraggableUsers";
import User from "./User";

const Users = ({ current, setCurrentUsers }) => {

  const { dNdTogle } = useSelector(state => state.controlPanel);

  return dNdTogle &&
  current && <DraggableUsers users={current} setCurrentUsers={setCurrentUsers} /> ||
  current && current.map(user => <User user={user} key={user.id} />);
};

const PaginatedUsers = () => {

  const { usersPerPage } = useSelector(state => state.controlPanel);
  const { usersToShow } = useSelector(state => state);
  const [currentUsers, setCurrentUsers] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [userOffset, setUserOffset] = useState(0);

  useEffect(() => {
      const endOffset = userOffset + usersPerPage;
      console.log(`Loading users from ${userOffset} to ${endOffset}`);
      setCurrentUsers(usersToShow.slice(userOffset, endOffset));
      setPageCount(Math.ceil(usersToShow.length / usersPerPage));
  }, [userOffset, usersPerPage, usersToShow]);

  useEffect(() => handlePageClick(0), [usersPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = (selected) => {
    console.log('selected:', selected);
    const newOffset = selected * usersPerPage % usersToShow.length;
    console.log(`User requested page number ${selected}, which is offset ${newOffset}`);
    setUserOffset(newOffset);
  };

  return (
    <>
      <Users current={currentUsers} setCurrentUsers={setCurrentUsers} />
      <ReactPaginate
        onPageChange={e => handlePageClick(e.selected)}
        // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
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


export default PaginatedUsers;