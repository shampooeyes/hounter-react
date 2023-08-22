
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import NewItem from './NewItem';
import './DataTable.css';

/**
 * 
 *"title": "Roselands House",
  "price": "35.000.000",
  "owner": "Dianne Russell",
  "location": "Manchester, Kentucky",
  "badgeType": "popular",
  "imageUrl": "https://firebasestorage.googleapis.com/v0/b/hounter-bd9ba.appspot.com/o/home-3.png?alt=media&token=6d5354bf-b638-42e1-ba47-adfdeb2de02f",
  "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/hounter-bd9ba.appspot.com/o/avatar-1.png?alt=media&token=333f5575-6bab-49ba-a9ed-f696f9136145"
 */

const DataTable = () => {
    const [rows, setRows] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [selectedRow, setSelectedRow] = useState(true);


    const columns = [
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'location', headerName: 'Location', width: 200 },
        { field: 'owner', headerName: 'Owner', width: 130 },
        { field: 'badgeType', headerName: 'Badge Type', width: 130, },
    ];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://64e25700ab0037358818efc3.mockapi.io/listings').then(response => {
            response.json().then((json) => {

                setRows(json.map((listing) => {
                    return {
                        id: listing["id"],
                        title: listing["title"],
                        price: listing["price"],
                        location: listing["location"],
                        owner: listing["owner"],
                        badgeType: listing["badgeType"],
                        imageUrl: listing["imageUrl"],
                        avatarUrl: listing["avatarUrl"]
                    };

                }));
            });
        });
    };

    const hideModal = () => {
        setShowForm(false);
    };

    const onRowDelete = (id) => {
        setRows(() => {
            return rows.filter((val) => {
                return val['id'] !== id;
            });
        });
        fetch(`https://64e25700ab0037358818efc3.mockapi.io/listings/${id}`, { method: 'DELETE' }).then();
    };

    const onRowClick = (rowParams) => {
        setSelectedRow(rowParams.row);
        setIsNew(false);
        setShowForm(true);
    };

    const onAddClick = () => {
        setIsNew(true);
        setShowForm(true);
    }

    return (
        <div className='center'>
            <div className='dataGrid'>
                {showForm && <NewItem exit={hideModal} onDelete={onRowDelete} isNew={isNew} data={selectedRow} refresh={fetchData} />}
                <DataGrid
                    columns={columns}
                    rows={rows}
                    onRowClick={onRowClick}
                    rowSelection={false}
                    hideFooter={true}
                    disableColumnMenu={true}
                    disableColumnSelector={true}
                    disableColumnFilter={true} />
            </div>
            <button id="main-btn" onClick={onAddClick} className="addBtn ml-2 me-4 px-3">Add New Property</button>
        </div>
    );
};

export default DataTable;