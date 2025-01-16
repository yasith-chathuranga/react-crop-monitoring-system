import React from "react";

interface TableProps {
    columns: string[];
    data: Array<Record<string, any>>;
    onRowClick?: (row: Record<string, any>) => void;
}

export const TableModel: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
    return (
        <div className="custom-table w-full overflow-x-auto max-h-[538px]">
            {data.length > 0 ? (
                <table className="w-full border-separate border-spacing-0">
                    <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="sticky top-0 bg-neutral-700 text-white pl-2 font-medium z-10 h-10"
                                aria-label={`Column ${column}`}
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-gray-100 cursor-pointer"
                            onClick={() => onRowClick?.(row)}
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2"
                                >
                                    {row[column] ?? "-"}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">No data available.</p>
            )}
        </div>
    );
};