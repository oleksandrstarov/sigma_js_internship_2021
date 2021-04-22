import {useState, useEffect, useRef, ReactNode} from 'react';
import '../styles/Pagination.scss';

type PaginationProps = {
  totalPages: number,
  switchPage: (index: number) => void
}


const Pagination = ({ totalPages = 0, switchPage}:PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasLeftSpill, setHasLeftSpill] = useState(false);
  const [hasRightSpill, setHasRightSpill] = useState(false);
  const paginationWrapper:any = useRef();
  const pageNeighbours = 1;

  const range = (start:number, end:number):Array<ReactNode> => {
    return new Array(end - start + 1).fill(null).map((item, index) => (<a className="pagination-nav-item" href={`${getCurrentHref()}${index + start}`} data-target={index + start} onClick={(e) => {onHandleClick(e)}} key={index + start}>{index + start}</a>))
  }

  const renderNavigation = ():Array<ReactNode> => {
    let pages = range(currentPage, totalPages);

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

  const checkSpills = ():void => {
    setHasLeftSpill(currentPage > (pageNeighbours + 2));
    setHasRightSpill((totalPages - currentPage) > 2);
  }

  const setActiveLink = (index:number):void => {
    const activeItem = paginationWrapper.current.querySelector('.active');

    if(activeItem) {
      activeItem.classList.remove('active');
    }

    paginationWrapper.current.querySelector(`.pagination-nav-item[data-target="${index}"]`).classList.add('active');
    setButtonState();
  }

  const setButtonState = ():void => {
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

  const getPageParam = ():number => {
    const pathname = window.location.pathname;
    return Number(pathname.slice(pathname.lastIndexOf('/') + 1));
  }

  const onHandleClick = (e:any):void => {
    const item = e.target;
    const index = Number(item.getAttribute('data-target'));
    e.preventDefault();
    window.history.pushState(null, '', index.toString());
    setCurrentPage(getPageParam());
  }

  const getCurrentHref = ():string => {
    const pathname = window.location.pathname;
    return pathname.slice(0, pathname.lastIndexOf('/') + 1);
  }

  useEffect(() => {
    setCurrentPage(getPageParam());
  }, [])

  useEffect(() => {
    if(totalPages && switchPage) {
      setCurrentPage(getPageParam());
      setActiveLink(currentPage);
      checkSpills();
      switchPage(currentPage);
    }
  })

  return (
    <div ref={paginationWrapper} className="pagination-container">
      {totalPages > 0 && (
        <div className="pagination">
          <a href={`${getCurrentHref()}${currentPage - 1}`} data-target={currentPage - 1} onClick={(e) => {onHandleClick(e)}} className="prev-arrow">
            <img src="/images/pagination-arrow.svg" alt="prev"/>
          </a>
          <div className="pagination-nav">
            { hasLeftSpill && (
              <div className="first-page">
                <a href={`${getCurrentHref()}1`} className='pagination-nav-item' data-target={1} onClick={(e) => {onHandleClick(e)}} key={1}>1</a>
                <span>...</span>
              </div>
            )}
            { renderNavigation() }
            { hasRightSpill && (
              <div className="last-page">
                <span>...</span>
                <a href={`${getCurrentHref()}${totalPages}`} className='pagination-nav-item' data-target={totalPages} onClick={(e) => {onHandleClick(e)}} key={totalPages}>{totalPages}</a>
              </div>
            )}
          </div>
          <a href={`${getCurrentHref()}${currentPage + 1}`} data-target={currentPage + 1} onClick={(e) => {onHandleClick(e)}} className="next-arrow">
            <img src="/images/pagination-arrow.svg" alt="next"/>
          </a>
        </div>
      )}
    </div>
  )
}

export default Pagination;
