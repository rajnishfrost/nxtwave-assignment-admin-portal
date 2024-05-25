import React, { useEffect, useState } from 'react';
import "./card.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Card({ tab }) {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState([{}]);
  const [dataLength, setDataLength] = useState(0);
  const resource = useSelector((state) => state.resources.resourcesData);

  useEffect(() => {
    if (tab === "request" || tab === "user") {
      const filter = resource?.filter(d => d?.tag === tab);
      setDataLength(filter?.length);
      setNumberOfPages(Math.ceil(((filter.length) / 6)));
      setPaginatedData(filter.slice(0, 6));
      return
    }
    setPaginatedData(resource?.slice(0, 6));
    setNumberOfPages(Math.ceil(((resource.length) / 6)));
    setDataLength(resource?.length);
  }, [tab])

  useEffect(() => {
    setNumberOfPages(Math.ceil(((resource.length) / 6)));
    setPaginatedData(resource?.slice(0, 6));
  }, [resource])

  const onPaginationButton = (number) => {
    const min = (6 * number);
    let max = 6 * (number + 1);
    if (max > dataLength)
      max = dataLength
    if (tab === "request" || tab === "user") {
      const filter = resource?.filter(d => d?.tag === tab);
      setPaginatedData(filter.slice(min,max));
      return
    }
    const paginatedData = resource?.slice(min, max);
    setPaginatedData(paginatedData)
  }

  return (
    <div>
      <div className='d-flex flex-wrap justify-between'>
        {
          paginatedData?.map((resource, index) => {
            return (
              <div className='card-div' key={index}>
                <div className='d-flex'>
                  <div className='img-div'>
                    <img src={resource?.icon_url} alt="" />
                  </div>
                  <div className='ml-10'>
                    <h6>{resource?.title}</h6>
                    <p>{resource?.category}</p>
                  </div>
                </div>
                <Link to={resource?.link}>{resource?.link}</Link>
                <h5>{resource?.description}</h5>
              </div>
            )
          })
        }
      </div>
      <div className='d-flex justify-center'>
        {
          resource?.slice(0, numberOfPages)?.map((d, i) => <button onClick={() => onPaginationButton(i)} className='mr-10' key={i}>{i + 1}</button>)
        }
      </div>
    </div>
  )
}
