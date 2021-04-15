import {useState, useEffect, useRef} from 'react';
import '../styles/Pagination.scss';

type PaginationProps = {
  totalRecords?: number,
  recordsLimit?: number,
  totalPages?: number
}

const Pagination = ({ totalRecords, recordsLimit, totalPages = 10 }:PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasLeftSpill, setHasLeftSpill] = useState(false);
  const [hasRightSpill, setHasRightSpill] = useState(false);
  const paginationWrapper:any = useRef();
  const pageNeighbours = 1;

  const range = (start:number, end:number) => {
    return new Array(end - start + 1).fill(null).map((item, index) => (<a className="pagination-nav-item" href={`/${index + start}`} data-target={index + start} onClick={(e) => {onHandleClick(e)}} key={index + start}>{index + start}</a>))
  }

  const renderNavigation = () => {
    let pages = range(1, totalPages);

    switch (true) {
      case (!hasLeftSpill && hasRightSpill):
        if(currentPage > 2) {
          pages = range(currentPage - 2, currentPage + 1);
        }  else if(currentPage === 2) {
          pages = range(currentPage - 1, currentPage + 1);
        } else {
          pages = range(currentPage, currentPage + 1);
        }
        break;
      case (hasLeftSpill && hasRightSpill):
        pages = range(currentPage - 1, currentPage + 1)
        break;
      case (hasLeftSpill && !hasRightSpill):
        pages = range(currentPage - 1, totalPages);
        break;
    }

    return pages;
  }

  const checkSpills = () => {
    setHasLeftSpill(currentPage > (pageNeighbours + 2));
    setHasRightSpill((totalPages - currentPage) > 2);
  }

  const setActiveLink = (index:number) => {
    const activeItem = paginationWrapper.current.querySelector('.active');

    if(activeItem) {
      activeItem.classList.remove('active');
    }

    paginationWrapper.current.querySelector(`.pagination-nav-item[data-target="${index}"]`).classList.add('active');
    setButtonState();
  }

  const setButtonState = () => {
    const activeItem = paginationWrapper.current.querySelector('.active');
    const index = activeItem.getAttribute('data-target') - 1;
    const prevButton = paginationWrapper.current.querySelector('.prev-arrow');
    const nextButton = paginationWrapper.current.querySelector('.next-arrow');

    if(index === 0) {
      prevButton.classList.add('disabled');
    } else {
      prevButton.classList.remove('disabled')
    }

    if(index + 1 >= totalPages) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled')
    }
  }

  const onHandleClick = (e:any) => {
    const item = e.target;

    e.preventDefault();
    setCurrentPage(Number(item.getAttribute('data-target')));
  }

  useEffect(() => {
    if(totalPages) {
      setActiveLink(currentPage);
      checkSpills();
    }
  }, [currentPage])

  return (
    <div ref={paginationWrapper} className="pagination-container">
      {totalPages && (
        <div className="pagination">
          <a href="" className="prev-arrow">
            <img src="/images/pagination-arrow.svg" alt="prev"/>
          </a>
          <div className="pagination-nav">
            { hasLeftSpill && (
              <div className="first-page">
                <a href="/1" className='pagination-nav-item' data-target={1} onClick={(e) => {onHandleClick(e)}} key={1}>1</a>
                <span>...</span>
              </div>
            )}
            { renderNavigation() }
            { hasRightSpill && (
              <div className="last-page">
                <span>...</span>
                <a href={`${totalPages}`} className='pagination-nav-item' data-target={totalPages} onClick={(e) => {onHandleClick(e)}} key={totalPages}>{totalPages}</a>
              </div>
            )}
          </div>
          <a href="" className="next-arrow">
            <img src="/images/pagination-arrow.svg" alt="next"/>
          </a>
        </div>
      )}
    </div>
  )
}

export default Pagination;
