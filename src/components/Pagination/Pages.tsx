import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IDeviceStoreType } from "../../utils/types";
import Pagination from "react-bootstrap/Pagination";

const Pages = observer(() => {
  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  let pageCount = Math.ceil(device.totalCount / device.limit);

  console.log(pageCount);

  const pages: number[] = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
