import { Link } from "react-router-dom";
import Delete from "../custom ui/Delete";
export const columns = [
  {
    accessorKey: "room",
    header: "Room",
    cell: ({ row }) => (
      <Link to={`/room/${row.original._id}`} className="hover:text-red-1">
        {row.original.room}
      </Link>
    ),
  },
  {
    accessorKey: "result",
    header: "Result",
    cell: ({ row }) => <div>{row.original.result}</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => <Delete item="collection" id={row.original._id} />,
  },
];
