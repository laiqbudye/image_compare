import React from 'react';

const Table = ({ dataObj }) => {

    const renderTabledata = () => {
        return dataObj.map((imgItem) => {
            const { albumId, id, title, url, thumbnailUrl } = imgItem  //destructuring
            return (
                <tr key={id}>
                    <td><img className={"tableImg"} src={url} alt=""></img></td>
                    <td>{albumId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{url}</td>
                    <td>{thumbnailUrl}</td>
                </tr>
            )
        })
    }

    const renderTableHeader = () => {
        let header = Object.keys(dataObj && dataObj[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <div className="tableContainer">
            {
                dataObj.length > 0 && <table id='images'>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            {renderTableHeader()}
                        </tr>
                        {renderTabledata()}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Table;