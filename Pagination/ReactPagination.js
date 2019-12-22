import { useEffect, useState, useRef } from "react";
import Pagination from "./Pagination";

const usePagination = (dataSource, nbrPerPage) => {
  const { current: table } = useRef(new Pagination());
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState([]);

  const loadData = () => {
    table.setSource(dataSource, nbrPerPage);
    setPages(table.PaginatedArray);
  };
  const UpdateRow = () => {
    table.setMaxRow(nbrPerPage);
  };

  useEffect(loadData, [dataSource]);
  useEffect(UpdateRow, [nbrPerPage]);

  return {
    data: pages[index] || [],
    currentPage: index + 1,
    currentIndex: index,
    getPage: page => setIndex(page - 1),
    begin: () => setIndex(0),
    next: () => setIndex(c => (c + 1 <= pages.length - 1 ? c + 1 : c)),
    prev: () => setIndex(c => (c > 0 ? c - 1 : c)),
    end: () => setIndex(table.getLastArray())
  };
};

export default usePagination;
